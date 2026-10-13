/*!
 * EMTrack — tiny, dependency-free click/event tracker for the "data reporting
 * and click tracking" demo.
 *
 * What this proves: an LMS reports completion and a score. This script
 * shows which SCREENS, CHOICES, and HOTSPOTS a learner actually clicked
 * along the way — the data an LMS never captures.
 *
 * Privacy: by default no name, email, or other identity is collected.
 * `learnerId` is a random anonymous id ("anon-xxxxxxxx") generated on first
 * use and cached in sessionStorage for the rest of that browser tab's
 * session. If a host page passes a real learnerId (for example a signed-in
 * user id from an LMS), that value is used instead and is the host's
 * choice/responsibility, not something this script infers or fetches
 * on its own.
 *
 * A real identity can arrive three ways, all of them the host's decision:
 *   - `learnerId` / `learnerName` passed to init(),
 *   - `?learner_id=` / `?learner_name=` on this page's own URL (this is how
 *     the SCORM shell hands over what the LMS told it),
 *   - a { type:'shell', event:'learner', data:{ id, name } } postMessage,
 *     for an LMS that attaches after the page has already started.
 * A name sitting next to click data is personal data. Prefer the LMS id,
 * keep the name out unless a person needs to be contacted, and say so in
 * whatever privacy notice the course carries.
 *
 * Usage:
 *   <script src="track.js"></script>
 *   <script>
 *     EMTrack.init({
 *       endpoint: 'https://YOUR-PROJECT.supabase.co/rest/v1/course_events', // or a local collector URL
 *       key: 'YOUR-SUPABASE-ANON-KEY',   // omit/empty for a local collector
 *       courseId: 'security-basics-demo',
 *       learnerId: undefined              // optional; defaults to anonymous id
 *     });
 *   </script>
 *
 * Then mark anything clickable with a data-track name:
 *   <button data-track="hotspot-badge">Employee badge</button>
 *
 * This script also listens for postMessage course events posted by the
 * course page itself:
 *   window.parent.postMessage({ type: 'course', event: 'started'|'screen'|'answer'|'completed', data: {...} }, '*')
 *
 * It works two ways at once, with no configuration needed to pick one:
 *   1. Embedded: the course runs in an <iframe>, this script runs in the
 *      PARENT/host page, and listens on `window` for postMessage events
 *      coming from the iframe's contentWindow.
 *   2. Same page: track.js is included directly inside the course page
 *      (or the course page and tracker share a window), so EMTrack also
 *      exposes EMTrack.logCourseEvent(event, data) for direct calls, and
 *      listens on its OWN window in case the course posts to itself/parent
 *      and this script happens to be running in that same window.
 */
(function (global) {
  'use strict';

  var STORAGE_KEY = 'emtrack_learner_id';
  var SESSION_KEY = 'emtrack_session_id';

  var state = {
    initialized: false,
    endpoint: null,
    key: null,
    courseId: null,
    learnerId: null,
    learnerName: null,
    sessionId: null,
    queue: [],
    flushTimer: null,
    flushIntervalMs: 1500,
    maxBatchSize: 20,
    endedSession: false
  };

  function randomId(prefix) {
    var rand =
      (global.crypto && global.crypto.getRandomValues)
        ? Array.from(global.crypto.getRandomValues(new Uint32Array(4)))
            .map(function (n) { return n.toString(36); })
            .join('')
        : Math.random().toString(36).slice(2) + Date.now().toString(36);
    return prefix + '-' + rand.slice(0, 12);
  }

  function safeSessionGet(key) {
    try {
      return global.sessionStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function safeSessionSet(key, value) {
    try {
      global.sessionStorage.setItem(key, value);
    } catch (e) {
      /* sessionStorage unavailable (privacy mode, etc.) — fall back to memory only */
    }
  }

  function getOrCreateLearnerId(explicit) {
    if (explicit) return explicit;
    var existing = safeSessionGet(STORAGE_KEY);
    if (existing) return existing;
    var fresh = randomId('anon');
    safeSessionSet(STORAGE_KEY, fresh);
    return fresh;
  }

  // A SCORM shell can hand the real learner across in the iframe URL. Reading
  // it here means the very first row already carries the right identity,
  // rather than starting anonymous and being corrected a moment later.
  function readQueryParam(name) {
    try {
      var m = new RegExp('[?&]' + name + '=([^&]*)').exec(global.location.search);
      return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : null;
    } catch (e) {
      return null;
    }
  }

  // Later than ideal is better than never: if the identity turns up after the
  // first rows were built (the LMS attached slowly, or the learner typed their
  // name in), relabel anything still waiting in the queue before it is sent.
  function setLearner(info) {
    info = info || {};
    var changed = false;
    if (info.id) { state.learnerId = String(info.id); changed = true; }
    if (info.name) { state.learnerName = String(info.name); changed = true; }
    if (!changed) { return; }
    for (var i = 0; i < state.queue.length; i++) {
      state.queue[i].learner_id = state.learnerId;
      state.queue[i].learner_name = state.learnerName;
    }
  }

  function onShellMessage(payload) {
    if (!payload || payload.type !== 'shell' || payload.event !== 'learner') return;
    setLearner(payload.data || {});
  }

  function getOrCreateSessionId() {
    var existing = safeSessionGet(SESSION_KEY);
    if (existing) return existing;
    var fresh = randomId('sess');
    safeSessionSet(SESSION_KEY, fresh);
    return fresh;
  }

  function nowIso() {
    return new Date().toISOString();
  }

  function buildRow(event, target, value, correct) {
    return {
      course_id: state.courseId,
      learner_id: state.learnerId,
      learner_name: state.learnerName,
      session_id: state.sessionId,
      event: event,
      target: target != null ? String(target) : null,
      value: value != null ? String(value) : null,
      correct: typeof correct === 'boolean' ? correct : null,
      ts: nowIso()
    };
  }

  function enqueue(row) {
    state.queue.push(row);
    if (state.queue.length >= state.maxBatchSize) {
      flush();
    }
  }

  function isSupabaseEndpoint() {
    return !!state.key;
  }

  function flush(useBeacon) {
    if (!state.endpoint || state.queue.length === 0) return;
    var rows = state.queue.splice(0, state.queue.length);
    var body = JSON.stringify(rows);

    // Supabase REST expects one POST per insert call; a JSON array body
    // inserts all rows in a single request, which is what we send.
    //
    // Supabase needs the real application/json content type plus its two auth
    // headers, and pays for a CORS preflight to get them. The local collector
    // needs neither, so we label the same JSON body text/plain there: that is a
    // CORS-safelisted content type, so the request goes out with no preflight
    // and survives an unload.
    var headers = isSupabaseEndpoint()
      ? {
          'Content-Type': 'application/json',
          apikey: state.key,
          Authorization: 'Bearer ' + state.key,
          Prefer: 'return=minimal'
        }
      : { 'Content-Type': 'text/plain;charset=UTF-8' };

    var sentWithBeacon = false;
    if (useBeacon && navigator.sendBeacon) {
      try {
        // sendBeacon can't set custom headers, so for Supabase we still need
        // fetch+keepalive on unload (apikey / Authorization are required there).
        //
        // For the local collector we send a text/plain Blob, NOT application/json.
        // text/plain is one of the three CORS-safelisted content types, so the
        // browser fires the POST straight away. An application/json Blob is not
        // safelisted: it forces a CORS preflight (an extra OPTIONS round trip)
        // first, and a page that is already unloading is usually torn down before
        // that preflight comes back — which is exactly how a batch gets lost when
        // someone leaves within a few seconds. The collector parses the body as
        // JSON whatever content type it arrives with, so nothing else changes.
        if (!isSupabaseEndpoint()) {
          var blob = new Blob([body], { type: 'text/plain;charset=UTF-8' });
          sentWithBeacon = navigator.sendBeacon(state.endpoint, blob);
        }
      } catch (e) {
        sentWithBeacon = false;
      }
    }

    // If sendBeacon refused (queue full, or unavailable) we fall through to the
    // keepalive fetch below rather than dropping the rows on the floor.
    if (sentWithBeacon) return;

    try {
      fetch(state.endpoint, {
        method: 'POST',
        headers: headers,
        body: body,
        keepalive: true,
        mode: 'cors'
      }).catch(function () {
        /* best-effort demo tracker: swallow network errors rather than throw */
      });
    } catch (e) {
      /* ignore — best-effort tracking must never break the host page */
    }
  }

  function scheduleFlush() {
    if (state.flushTimer) return;
    state.flushTimer = global.setInterval(function () {
      flush(false);
    }, state.flushIntervalMs);
  }

  function trackEvent(event, target, value, correct) {
    if (!state.initialized) return;
    enqueue(buildRow(event, target, value, correct));
  }

  function onClick(e) {
    var el = e.target;
    // Walk up from the click target to find the nearest data-track element,
    // so an icon or span inside a tracked button still counts as a click.
    while (el && el !== document && !el.getAttribute) {
      el = el.parentNode;
    }
    while (el && el.getAttribute && !el.getAttribute('data-track')) {
      el = el.parentElement;
    }
    if (!el || !el.getAttribute) return;
    var name = el.getAttribute('data-track');
    if (!name) return;
    var value = el.getAttribute('data-track-value');
    trackEvent('click', name, value, null);
  }

  function onCourseMessage(payload) {
    if (!payload || payload.type !== 'course' || !payload.event) return;
    var data = payload.data || {};
    var target = data.screen || data.name || data.id || payload.event;
    var value = data.choice != null ? data.choice
      : data.value != null ? data.value
      : data.score != null ? data.score
      : null;
    var correct = typeof data.correct === 'boolean' ? data.correct : null;
    trackEvent('course:' + payload.event, target, value, correct);

    // An answer or a completion is the moment a learner is most likely to leave.
    // Send those straight away instead of waiting for the next interval tick.
    if (payload.event === 'answer' || payload.event === 'completed') {
      flush(false);
    }
  }

  function onWindowMessage(e) {
    onCourseMessage(e && e.data);
    onShellMessage(e && e.data);
  }

  function onVisibilityChange() {
    if (document.visibilityState === 'hidden' && !state.endedSession) {
      state.endedSession = true;
      trackEvent('session_end', 'page_hidden', null, null);
      flush(true);
    } else if (document.visibilityState === 'visible') {
      // A learner can return to the tab; allow another session_end later
      // (e.g. they hide it again or finally close it) without double-firing.
      state.endedSession = false;
    }
  }

  function onPageHide() {
    if (!state.endedSession) {
      state.endedSession = true;
      trackEvent('session_end', 'pagehide', null, null);
    }
    flush(true);
  }

  function init(options) {
    options = options || {};
    if (!options.endpoint) {
      throw new Error('EMTrack.init requires an `endpoint` URL.');
    }
    state.endpoint = options.endpoint;
    state.key = options.key || null;
    state.courseId = options.courseId || 'unknown-course';
    state.learnerId = getOrCreateLearnerId(options.learnerId || readQueryParam('learner_id'));
    state.learnerName = options.learnerName || readQueryParam('learner_name') || null;
    state.sessionId = getOrCreateSessionId();
    state.initialized = true;
    state.endedSession = false;

    document.addEventListener('click', onClick, true);
    global.addEventListener('message', onWindowMessage, false);
    document.addEventListener('visibilitychange', onVisibilityChange, false);
    global.addEventListener('pagehide', onPageHide, false);

    scheduleFlush();
    trackEvent('session_start', 'init', null, null);

    return {
      learnerId: state.learnerId,
      learnerName: state.learnerName,
      sessionId: state.sessionId
    };
  }

  function logCourseEvent(event, data) {
    onCourseMessage({ type: 'course', event: event, data: data });
  }

  function flushNow() {
    flush(false);
  }

  global.EMTrack = {
    init: init,
    track: trackEvent,
    logCourseEvent: logCourseEvent,
    setLearner: setLearner,
    flush: flushNow
  };
})(typeof window !== 'undefined' ? window : this);
