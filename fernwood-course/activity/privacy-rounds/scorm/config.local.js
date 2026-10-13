/* ------------------------------------------------------------------
   Rehearsal only. Used when the launcher is opened with ?local=1, which
   is what a SCORM test harness does.

   It points at the copy of the activity sitting one folder up on this
   computer, so the whole thing can be driven with no internet, no LMS
   and no hosting. It is deliberately NOT included in the zip: the real
   package reads config.js instead.
   ------------------------------------------------------------------ */

window.COURSE_URL = "../index.html";
