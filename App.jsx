import { useEffect, useRef, useState } from "react";
import {
  RESUME, EMAIL, LINKEDIN, TAGLINE, IMG, ALT, INTRO, HIGHLIGHTS, ABOUT, PUBLICATIONS, CERTS, AWARDS,
  PROJECTS, RESOURCES, VIDEOS, DETAILS, SKILL_COUNTS,
} from "./content";

const HEADLINE = "I turn ideas into meaningful learning experiences.";
let booted = false; // typing intro plays once per visit

/* ---------- helpers ---------- */
function Img({ src, className, alt, ...r }) {
  const [ok, setOk] = useState(true);
  return ok ? <img src={src} className={className} alt={alt} onError={() => setOk(false)} {...r} />
    : <div className={(className || "") + " ph"} role="img" aria-label={alt} />;
}
const Rich = ({ text }) =>
  text.split(/(\[[^\]]+\]\([^)]+\))/g).map((s, i) => {
    const m = s.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    return m ? <a key={i} href={m[2]} target="_blank" rel="noreferrer">{m[1]}</a> : s;
  });
const Btn = ({ href, children, ghost, onClick }) => {
  const ext = /^https?:|^mailto:/.test(href);
  return <a className={"btn" + (ghost ? " ghost" : "")} href={href} onClick={onClick} {...(ext ? { target: "_blank", rel: "noreferrer" } : {})}>{children}</a>;
};

/* ---------- kinetic dots: whole home page, desktop only. White in dark mode, grey in light mode ---------- */
function DotGrid() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current, host = c.parentElement, ctx = c.getContext("2d");
    const desktop = () => matchMedia("(hover: hover) and (pointer: fine)").matches && innerWidth >= 992;
    const GAP = 28, R = 130, PUSH = 0.9, SPRING = 0.1;
    let w, h, dots = [], m = { cx: 0, cy: 0, has: false, x: -1e4, y: -1e4, on: false }, raf;
    const build = () => {
      const d = devicePixelRatio || 1;
      w = host.clientWidth; h = host.clientHeight;
      c.width = w * d; c.height = h * d; ctx.setTransform(d, 0, 0, d, 0, 0);
      dots = [];
      for (let y = GAP / 2; y < h; y += GAP) for (let x = GAP / 2; x < w; x += GAP) dots.push({ hx: x, hy: y, x, y, vx: 0, vy: 0 });
    };
    const move = (e) => { m.cx = e.clientX; m.cy = e.clientY; m.has = true; };
    const away = () => { m.has = false; };
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      if (desktop()) {
        const r = host.getBoundingClientRect();
        m.x = m.cx - r.left; m.y = m.cy - r.top;
        m.on = m.has && m.x >= 0 && m.x <= r.width && m.y >= 0 && m.y <= r.height;
        ctx.fillStyle = document.documentElement.dataset.theme === "dark" ? "#ffffff" : "#9aa0a6";
        for (const d of dots) {
          const dx = d.hx - m.x, dy = d.hy - m.y;
          if (m.on && Math.abs(dx) < R && Math.abs(dy) < R) {
            const dist = Math.hypot(dx, dy) || 1, t = Math.max(0, 1 - dist / R);
            d.vx += (dx / dist) * t * PUSH; d.vy += (dy / dist) * t * PUSH;
          }
          d.vx += (d.hx - d.x) * SPRING; d.vy += (d.hy - d.y) * SPRING;
          d.vx *= 0.8; d.vy *= 0.8; d.x += d.vx; d.y += d.vy;
          const n = m.on ? Math.max(0, 1 - Math.hypot(d.x - m.x, d.y - m.y) / R) : 0;
          if (n > 0.02) {
            ctx.globalAlpha = Math.min(1, n * 1.5);
            ctx.beginPath(); ctx.arc(d.x, d.y, 1 + n * 2.6, 0, 6.283); ctx.fill();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    build(); tick();
    const ro = new ResizeObserver(build); ro.observe(host);
    addEventListener("mousemove", move); document.addEventListener("mouseleave", away);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); removeEventListener("mousemove", move); document.removeEventListener("mouseleave", away); };
  }, []);
  return <canvas ref={ref} className="dots" aria-hidden="true" />;
}

/* ---------- typing intro (skipped for reduced-motion users) ---------- */
function useTyping() {
  const skip = booted || matchMedia("(prefers-reduced-motion: reduce)").matches;
  const total = TAGLINE.length + HEADLINE.length;
  const [n, setN] = useState(skip ? total : 0);
  const [caret, setCaret] = useState(!skip);
  useEffect(() => {
    if (skip) return;
    let i = 0, hide;
    const t = setInterval(() => {
      i++; setN(i);
      if (i >= total) { clearInterval(t); booted = true; hide = setTimeout(() => setCaret(false), 2200); }
    }, 38);
    return () => { clearInterval(t); clearTimeout(hide); };
  }, []);
  return [n, caret];
}
function Typed({ text, start, n, caret, Tag, className }) {
  const k = Math.max(0, Math.min(text.length, n - start));
  const showCaret = caret && (start === 0 ? n < TAGLINE.length : n >= TAGLINE.length);
  return (
    <Tag className={className}>
      <span className="sr">{text}</span>
      <span aria-hidden="true">{text.slice(0, k)}{showCaret && <span className="caret" />}<span className="ghosted">{text.slice(k)}</span></span>
    </Tag>
  );
}

/* ---------- shared blocks ---------- */
const Entries = ({ title, items }) => (
  <section className="wrap sec">
    <h2>{title}</h2>
    <div className="entries">
      {items.map((x) => (
        <div className="entry" key={x.t}>
          <h3>{x.t}</h3>
          {x.href ? <a href={x.href} target="_blank" rel="noreferrer">{x.sub}</a> : <p>{x.sub}</p>}
        </div>
      ))}
    </div>
  </section>
);
function Card({ p, big }) {
  const href = p.slug ? `#/project-page/${p.slug}` : p.ext;
  return (
    <article className={"card" + (big ? " big" : "")}>
      {p.img ? <Img src={p.img} alt={ALT[p.slug || p.title] || `Cover image for ${p.title}`} loading="lazy" /> : <div className="ph" aria-hidden="true" />}
      <div className="card-b">
        <h3>{p.title}</h3>
        {p.skills && <p className="skills">{p.skills}</p>}
        {p.blurb && <p>{p.blurb}</p>}
        <a className="more" href={href} {...(p.slug ? {} : { target: "_blank", rel: "noreferrer" })}>{p.cta || "Read More"}</a>
      </div>
    </article>
  );
}

/* ---------- pages ---------- */
function Home() {
  const [n, caret] = useTyping();
  const sel = [PROJECTS[0], PROJECTS[1], PROJECTS[6]];
  return (
    <div className="home">
      <DotGrid />
      <header className="hero">
        <div className="wrap hero-in">
          <div className="hero-t">
            <Typed Tag="p" className="eyebrow" text={TAGLINE} start={0} n={n} caret={caret} />
            <Typed Tag="h1" text={HEADLINE} start={TAGLINE.length} n={n} caret={caret} />
          </div>
          <div className="hero-r">
            <Img className="hero-i" src={IMG.home} alt={ALT.home} />
            <div className="hero-btns">
              <Btn href="#/project-page">Portfolio Projects</Btn>
              <a className="btn ghost" href={RESUME} download>Download Resume</a>
            </div>
          </div>
        </div>
      </header>
      <section className="wrap sec">
        <h2>About me</h2>
        <p className="intro">{INTRO}</p>
        <a className="more" href="#/about">More about me</a>
      </section>
      <section className="wrap sec">
        <h2>In this portfolio, you’ll find examples of:</h2>
        <div className="highlights">
          {HIGHLIGHTS.map((h) => (
            <div className="hl" key={h.lead}>
              <span className="hl-i" aria-hidden="true">{h.icon}</span>
              <p><strong>{h.lead}</strong> {h.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="wrap sec">
        <h2>Selected work</h2>
        <div className="grid">{sel.map((p) => <Card key={p.title} p={{ ...p, blurb: undefined, skills: undefined }} />)}</div>
        <p className="center"><Btn href="#/project-page" ghost>View Projects</Btn></p>
      </section>
    </div>
  );
}

function About() {
  return (
    <>
      <section className="wrap sec top">
        <div className="about">
          <div>
            <h1 className="pg">About Me</h1>
            <div className="prose">{ABOUT.map((t) => <p key={t}>{t}</p>)}</div>
          </div>
          <Img className="about-i" src="images/about.jpg" alt="Elijah standing beside a row of computers, looking on as students work at their screens during a class session. The photo is black and white except for Elijah, who is in color." />
        </div>
      </section>
      <Entries title="Publications and Presentations" items={PUBLICATIONS} />
      <Entries title="Certifications" items={CERTS} />
      <Entries title="Awards" items={AWARDS} />
    </>
  );
}

function ProjectPage() {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(null); // one skill at a time
  const query = q.trim().toLowerCase();
  const featured = SKILL_COUNTS.filter(([, c]) => c >= 2).map(([s]) => s);
  const pool = query ? SKILL_COUNTS.map(([s]) => s).filter((s) => s.toLowerCase().includes(query)) : featured;
  const chips = [...new Set([...(active ? [active] : []), ...pool])];
  const filtering = !!active || query.length > 0;
  const shown = PROJECTS.filter((p) =>
    active ? p.skillList.includes(active)
    : query ? p.title.toLowerCase().includes(query) || p.skillList.some((s) => s.toLowerCase().includes(query))
    : true);
  const toggle = (s) => setActive(active === s ? null : s);
  const count = (s) => (SKILL_COUNTS.find(([k]) => k === s) || [0, 0])[1];
  return (
    <div className="home">
    <DotGrid />
    <div className="wrap sec top">
      <h1 className="pg">Projects</h1>
      <section className="finder" aria-labelledby="sk-h">
        <h2 id="sk-h">Search by skill</h2>
        <label className="srch">Search skills
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. Accessibility" />
        </label>
        <div className="chips" role="group" aria-label="Skills">
          {chips.map((s) => (
            <button key={s} type="button" className="chip" aria-pressed={active === s} onClick={() => toggle(s)}>
              {s} <span>{count(s)}</span>
            </button>
          ))}
          {chips.length === 0 && <p>No skills match “{q}”.</p>}
        </div>
        {filtering && <button type="button" className="btn ghost sm" onClick={() => { setActive(null); setQ(""); }}>Clear</button>}
        <p role="status" className="count">{filtering ? `${shown.length} of ${PROJECTS.length} projects` : ""}</p>
      </section>
      {filtering || !shown.length ? null : <Card p={shown[0]} big />}
      <div className="grid">{(filtering ? shown : shown.slice(1)).map((p) => <Card key={p.title} p={p} />)}</div>
      {filtering && shown.length === 0 && <p>No projects match that skill.</p>}
      <h2 className="gap">Classroom resources</h2>
      <div className="grid">
        {RESOURCES.map((r) => (
          <article className="card" key={r.title}>
            {r.img && <Img src={r.img} alt={r.alt} loading="lazy" />}
            <div className="card-b">
            <h3>{r.title}</h3>{r.text && <p>{r.text}</p>}
            <a className="more" href={r.href} target="_blank" rel="noreferrer">Go!</a>
          </div></article>
        ))}
      </div>
      <h2 className="gap">Documentaries</h2>
      <div className="grid">
        {VIDEOS.map((v, i) => (
          <div className="vid" key={v}>
            <iframe src={`https://www.youtube.com/embed/${v}`} title={`Documentary video ${i + 1} of ${VIDEOS.length}`} loading="lazy" allowFullScreen />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

function Fig({ f }) {
  return (
    <figure className="fig">
      {f.video ? (
        <video className="figimg" src={f.video} aria-label={f.alt} muted loop playsInline controls
          autoPlay={!matchMedia("(prefers-reduced-motion: reduce)").matches} />
      ) : f.src ? <Img src={f.src} alt={f.alt} className="figimg" loading="lazy" /> : (
        <div className="figph" role="img" aria-label={f.alt}><span>Image placeholder</span><small>{f.alt}</small></div>
      )}
      {f.cap && <figcaption>{f.cap}</figcaption>}
    </figure>
  );
}
function Carousel({ label, slides, auto, id, wide }) {
  const [i, setI] = useState(0);
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [playing, setPlaying] = useState(!!auto && !reduce);
  const [hold, setHold] = useState(false); // paused while hovered or focused
  const go = (d) => setI((n) => (n + d + slides.length) % slides.length);
  const f = slides[i];
  // Images advance every 5s; a video slide advances when the video ends.
  useEffect(() => {
    if (!playing || hold || f.video) return;
    const t = setTimeout(() => go(1), 5000);
    return () => clearTimeout(t);
  }, [i, playing, hold]);
  const key = (e) => { if (e.key === "ArrowLeft") go(-1); if (e.key === "ArrowRight") go(1); };
  return (
    <section id={id} className={"carousel" + (wide ? " wide" : "")} aria-roledescription="carousel" aria-label={label} onKeyDown={key}
      onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)}
      onFocus={() => setHold(true)} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setHold(false); }}>
      <div className="car-stage" aria-live={playing ? "off" : "polite"}>
        {f.video
          ? <video src={f.video} key={f.video} aria-label={f.alt} muted playsInline autoPlay={playing} controls onEnded={() => playing && go(1)} />
          : <img src={f.src} alt={f.alt} key={f.src} />}
      </div>
      {slides.map((s, k) => Math.abs(k - i) === 1 && s.src && <link key={s.src} rel="prefetch" href={s.src} />)}
      <div className="car-bar">
        {auto && <button type="button" className="icon" onClick={() => setPlaying(!playing)} aria-label={playing ? "Pause slideshow" : "Play slideshow"}>{playing ? "❚❚" : "▶"}</button>}
        <button type="button" className="icon" onClick={() => go(-1)} aria-label="Previous slide">←</button>
        <p className="car-cap"><span>{i + 1} / {slides.length}</span> {f.cap || ""}</p>
        <button type="button" className="icon" onClick={() => go(1)} aria-label="Next slide">→</button>
      </div>
      <div className="car-dots">
        {slides.map((s, k) => (
          <button type="button" key={s.src || s.video} aria-label={s.cap ? `Slide ${k + 1}: ${s.cap}` : `Slide ${k + 1}`} aria-current={k === i} onClick={() => setI(k)} />
        ))}
      </div>
    </section>
  );
}
function Block({ b }) {
  const [t, v, w, x] = b;
  if (t === "h2") return <h2>{v}</h2>;
  if (t === "h3") return <h3>{v}</h3>;
  if (t === "ul") return <ul>{v.map((s) => <li key={s}>{s}</li>)}</ul>;
  if (t === "ol") return <ol>{v.map((s) => <li key={s}>{s}</li>)}</ol>;
  if (t === "quote") return <blockquote className="quote">{v}</blockquote>;
  if (t === "dl") return <dl>{v.map(([k, c]) => <div key={k}><dt>{k}</dt><dd>{c}</dd></div>)}</dl>;
  if (t === "table") return (
    <div className="tblwrap"><table>
      <thead><tr>{v.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
      <tbody>{w.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i}>{c}</td>)}</tr>)}</tbody>
    </table></div>
  );
  if (t === "fig") return <Fig f={v} />;
  if (t === "carousel") return <Carousel label={v} slides={w} {...(x || {})} />;
  if (t === "embed") return (
    <div className="embed">
      <iframe src={w} title={v} loading="lazy" allow="fullscreen" allowFullScreen />
      <a href={w} target="_blank" rel="noreferrer">Open in a new tab</a>
    </div>
  );
  if (t === "figs") return <div className="figs">{v.map((f, i) => <Fig key={i} f={f} />)}</div>;
  if (t === "side") return <div className={"side " + v}><div className="side-t">{x.map((c, i) => <Block key={i} b={c} />)}</div><Fig f={w} /></div>;
  return <p><Rich text={v} /></p>;
}
function Detail({ slug }) {
  const d = DETAILS[slug];
  if (!d) return <div className="wrap sec top"><h1 className="pg">Not found</h1><Btn href="#/project-page">Project Page</Btn></div>;
  const alt = d.heroAlt || ALT[slug];
  // Button at the end of the case study: scrolls back up to the embedded project ("top"), or opens it elsewhere.
  const tryClick = () => track("event", "try_it_yourself", { project: d.title });
  const toTop = () => { tryClick(); scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }); };
  const toStoryboard = () => document.getElementById(d.storyboard)?.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  const storyboardBtn = d.storyboard && <button type="button" className="btn ghost" onClick={toStoryboard}>Storyboard</button>;
  const tryIt = d.tryIt === "top" ? <button type="button" className="btn" onClick={toTop}>Try it Yourself!</button>
    : d.tryIt && <Btn href={d.tryIt} onClick={tryClick}>Try it Yourself!</Btn>;
  return (
    <div className="top">
      <article className="wrap detail sec">
        {d.embed ? <Block b={["embed", ...d.embed]} />
          : d.img ? <Img className="dhero" src={d.img} alt={alt} /> : <div className="dhero ph" role="img" aria-label={alt}><span>Image placeholder</span></div>}
        <h1 className="pg">{d.title}</h1>
        <p className="lead">{d.sub}</p>
        <p className="skills">{d.skills}</p>
        {!d.embed && tryIt && <div className="btn-row">{tryIt}{storyboardBtn}</div>}
        {d.body && <div className="dbody">{d.body.map((b, i) => <Block key={i} b={b} />)}</div>}
        {tryIt && <div className="btn-row">{tryIt}{storyboardBtn}</div>}
      </article>
    </div>
  );
}

/* ---------- app ---------- */
const initTheme = () => {
  let t; try { t = localStorage.getItem("theme"); } catch (e) {}
  if (!t) t = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  document.documentElement.dataset.theme = t;
  return t;
};
const Sun = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>;
const Moon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>;

/* ---------- analytics: one page view per #/ route, plus Try it Yourself clicks ---------- */
const track = (...args) => { if (window.gtag) window.gtag(...args); };
const pageName = (parts) => {
  if (!parts.length) return "Home";
  if (parts[0] === "about") return "About Me";
  if (parts[0] !== "project-page") return "Not found";
  if (!parts[1]) return "Projects";
  const d = DETAILS[parts[1]];
  if (!d) return "Not found";
  return d.title;
};

export default function App() {
  const [hash, setHash] = useState(() => location.hash.replace(/^#/, "") || "/");
  const [theme, setTheme] = useState(initTheme);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const f = () => { setHash(location.hash.replace(/^#/, "") || "/"); scrollTo(0, 0); };
    addEventListener("hashchange", f);
    return () => removeEventListener("hashchange", f);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("theme", theme); } catch (e) {}
  }, [theme]);
  const parts = hash.split("/").filter(Boolean);
  useEffect(() => {
    const name = pageName(parts);
    document.title = name === "Home" ? "Elijah Browne · Instructional Designer" : `${name} · Elijah Browne`;
    track("event", "page_view", { page_title: name, page_location: location.href, page_path: "/" + parts.join("/") });
  }, [hash]);
  let page = <Home />;
  if (parts[0] === "about") page = <About />;
  else if (parts[0] === "project-page") page = parts[1] ? <Detail slug={parts[1]} /> : <ProjectPage />;
  return (
    <div className="site">
      <style>{CSS}</style>
      <a className="skip" href="#main" onClick={(e) => { e.preventDefault(); document.getElementById("main").focus(); }}>Skip to main content</a>
      <nav className="nav" aria-label="Main">
        <a className="brand" href="#/">Elijah Browne</a>
        <div className="nav-r">
          <ul className={menu ? "open" : ""} onClick={() => setMenu(false)}>
            <li><a href="#/">Home</a></li>
            <li><a href="#/about">About Me</a></li>
            <li><a href="#/project-page">Project Page</a></li>
          </ul>
          <button className="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
          <button className="burger pill" onClick={() => setMenu(!menu)} aria-expanded={menu}>Menu</button>
        </div>
      </nav>
      <main id="main" tabIndex="-1">{page}</main>
      <footer className="foot">
        <DotGrid />
        <div className="wrap">
          <h2>Elijah Browne</h2>
          <p>{TAGLINE}</p>
          <div className="fl">
            <a href={EMAIL}>Contact Me</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={RESUME} download>Resume</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* THEME — palette tokens. Light = white, dark = black; every section uses the same background. */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@300&family=Space+Grotesk:wght@500&display=swap');
:root{--bg:#fff;--ink:#1f2328;--mute:#5b6470;--accent:#1a4fd6;--on-accent:#fff;--line:#e3e6ea;--head:'Space Grotesk',system-ui,sans-serif;--body:'DM Sans',system-ui,sans-serif;--mono:'JetBrains Mono',ui-monospace,monospace;color-scheme:light}
:root[data-theme="dark"]{--bg:#000;--ink:#fff;--mute:#a9b0ba;--accent:#7aa2ff;--on-accent:#000;--line:#2b2f36;color-scheme:dark}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:var(--bg);padding-bottom:env(safe-area-inset-bottom,0px)}
.site{font-family:var(--body);color:var(--ink);background:var(--bg);line-height:1.65;min-height:100vh}
a{color:var(--accent)}
:focus-visible{outline:3px solid var(--accent);outline-offset:3px;border-radius:4px}
main:focus{outline:0}
.sr,.skip:not(:focus){position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.skip:focus{position:fixed;top:.5rem;left:.5rem;z-index:100;background:var(--bg);padding:.6rem 1rem;border-radius:8px}
.site a:not(.brand):not(.skip)::after{content:"↗";content:"↗" / "";display:inline-block;font-size:.75em;margin-left:.3em;text-decoration:none;transition:transform .2s}
.site a[href^="#"]:not(.brand):not(.skip)::after{content:"→";content:"→" / ""}
.site a:not(.brand):hover::after{transform:translate(2px,-2px)}
.site a[href^="#"]:not(.brand):hover::after{transform:translateX(3px)}
.wrap{max-width:1120px;margin:0 auto;padding:0 clamp(1rem,4vw,2rem)}
.sec{padding-top:4.5rem;padding-bottom:1rem}
.top{padding-top:3rem}
h1,h2,h3,.brand{font-family:var(--head);font-weight:500}
h1,h2,h3{line-height:1.15;margin:0 0 1rem}
h2{font-size:clamp(1.6rem,3vw,2.2rem)}
.nav{position:sticky;top:0;z-index:20;background:var(--bg);border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.6rem;padding:.8rem clamp(1rem,4vw,2rem);padding-top:calc(.8rem + env(safe-area-inset-top,0px))}
.nav a{text-decoration:none;color:var(--ink);font-weight:500}
.brand{font-size:1.2rem;font-weight:500!important}
.nav-r{display:flex;align-items:center;gap:1rem;flex-wrap:wrap}
.nav ul{display:flex;gap:1.4rem;list-style:none;margin:0;padding:0}
.nav ul a:hover{color:var(--accent)}
.pill,.icon{font:inherit;font-weight:500;color:var(--ink);background:transparent;border:1px solid var(--line);border-radius:999px;cursor:pointer;padding:.45rem 1rem}
.icon{display:grid;place-items:center;width:40px;height:40px;padding:0}
.pill:hover,.icon:hover{border-color:var(--accent);color:var(--accent)}
.burger{display:none}
.home{position:relative}.home>:not(.dots){position:relative;z-index:1}
.hero{overflow:hidden;min-height:min(88svh,760px);display:grid;align-items:center}
.hero-r{display:grid;gap:1rem;justify-items:center}
.dots{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0}
.hero-in{position:relative;display:grid;grid-template-columns:1.1fr .9fr;gap:3rem;align-items:center;padding-top:3rem;padding-bottom:3rem;width:100%}
.eyebrow{text-transform:uppercase;letter-spacing:.12em;font-size:.85rem;font-weight:700;color:var(--accent);margin:0 0 1rem;min-height:1.6em}
.hero h1{font-size:clamp(2.2rem,5.5vw,4rem);letter-spacing:-.02em}
.ghosted{opacity:0}
.caret{display:inline-block;width:.09em;height:1em;background:currentColor;vertical-align:-.12em;margin-right:.04em;animation:blink 1s steps(1) infinite}
@keyframes blink{50%{opacity:0}}
.hero-i{width:100%;height:auto;max-height:480px;object-fit:cover;border-radius:16px;box-shadow:0 20px 50px rgba(0,0,0,.18)}
.hero-i.ph{aspect-ratio:4/3}
@media(max-width:991px),(hover:none){.dots{display:none}}
.btn{display:inline-block;background:var(--accent);color:var(--on-accent);text-decoration:none;font:inherit;font-weight:700;padding:.85rem 1.5rem;border-radius:999px;border:2px solid var(--accent);margin:.5rem 0;cursor:pointer;transition:transform .2s}
.btn:hover{transform:translateY(-2px)}
.btn.ghost{background:var(--bg);color:var(--accent)}
.btn.sm{padding:.4rem 1rem;font-size:.9rem}
.btn:disabled{opacity:.6}
.center{text-align:center;margin-top:2rem}
.hero-btns{display:flex;flex-wrap:wrap;gap:.75rem;justify-content:center}
.highlights{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-top:1.25rem}
.intro{max-width:760px;font-size:1.15rem;margin:0 0 .75rem}
.hl{border:1px solid var(--line);border-radius:12px;padding:1rem 1.1rem;background:var(--bg);transition:border-color .25s,transform .25s}
.hl:hover{border-color:var(--accent);transform:translateY(-3px)}
.hl-i{font-size:1.3rem;line-height:1;display:block;margin-bottom:.5rem}
.hl p{margin:0;font-size:.92rem;line-height:1.5}
.hl strong{font-family:var(--head);font-weight:500;color:var(--accent)}
.prose{max-width:760px}.prose p{font-size:1.15rem}
.pg{font-size:clamp(2rem,5vw,3.2rem)}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,320px),1fr));gap:1.5rem;margin-top:1.5rem}
.card{position:relative;border:1px solid var(--line);border-radius:14px;overflow:hidden;background:var(--bg);display:flex;flex-direction:column;transition:transform .25s,box-shadow .25s,border-color .25s}
.card:hover{transform:translateY(-4px);border-color:var(--accent)}
.card img,.ph{width:100%;aspect-ratio:16/9;object-fit:cover;object-position:top;display:block;border-bottom:1px solid var(--line)}
.ph{background:linear-gradient(135deg,var(--accent),#0d2a7a)}
.card-b{padding:1.25rem;display:flex;flex-direction:column;gap:.6rem;flex:1}
.card h3{font-size:1.2rem;margin:0}.card p{margin:0}
.skills,.chip{font-family:var(--mono);font-weight:300;color:var(--accent)}
.skills{font-size:.85rem}
.count{font-size:.85rem;color:var(--mute)}
.more{margin-top:auto;font-weight:700;text-decoration:none}
.card .more::before{content:"";position:absolute;inset:0;z-index:2}
.card:has(.more:focus-visible){outline:3px solid var(--accent);outline-offset:3px}
.more:focus-visible{outline:0}
.card.big{flex-direction:row}
.card.big img,.card.big .ph{width:45%;aspect-ratio:auto;height:100%;min-height:280px}
.card.big h3{font-size:1.6rem}
.finder{margin:2rem 0;padding:1.5rem;border:1px solid var(--line);border-radius:14px;background:var(--bg)}
.srch{display:grid;gap:.4rem;font-weight:700;max-width:420px}
input,textarea{font:inherit;padding:.8rem 1rem;border:2px solid var(--line);border-radius:8px;background:var(--bg);color:var(--ink);width:100%}
input:focus,textarea:focus{outline:0;border-color:var(--accent)}
.chips{display:flex;flex-wrap:wrap;gap:.5rem;margin:1rem 0}
.chip{font-size:.9rem;background:transparent;border:1px solid var(--line);border-radius:999px;padding:.35rem .9rem;cursor:pointer}
.chip span{color:var(--mute);font-size:.8em;margin-left:.3em}
.chip:hover{border-color:var(--accent)}
.chip[aria-pressed="true"]{background:var(--accent);border-color:var(--accent);color:var(--on-accent)}
.chip[aria-pressed="true"] span{color:inherit}
.entries{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,340px),1fr));gap:1rem}
.entry{border-left:3px solid var(--accent);padding:.2rem 0 .2rem 1rem}
.entry h3{font-size:1.05rem;margin:0 0 .3rem}.entry p{margin:0;color:var(--mute)}
.gap{margin-top:4rem}
.vid{position:relative;aspect-ratio:16/9;border-radius:12px;overflow:hidden;background:#000}
.vid iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
.dhero{width:100%;height:auto;max-height:640px;object-fit:contain;display:block;border:1px solid var(--line);border-radius:14px;margin-bottom:2.5rem}.dhero.ph{height:220px;max-height:none}
.detail.sec{padding-top:0}
.lead{font-size:1.3rem;color:var(--mute)}
.detail h2{margin-top:3rem}.detail h3{margin-top:2rem;font-size:1.3rem}.detail li{margin:.3rem 0}
.detail>:not(.dbody):not(.dhero):not(.embed),.dbody>:is(p,ul,ol,h2,h3,dl,blockquote,.tblwrap){max-width:720px}
.dbody{display:block}
.side{display:grid;grid-template-columns:1.15fr 1fr;gap:2.5rem;align-items:start;margin:1.5rem 0}
.side.left .fig{order:-1}
.side .fig{position:sticky;top:5.5rem}
.side-t>:first-child{margin-top:0}
.figs{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:1.5rem;margin:2rem 0}
.fig{margin:0}
.figimg{width:100%;height:auto;border-radius:12px;display:block;background:#fff}
.figph{min-height:240px;border:2px dashed var(--line);border-radius:12px;display:grid;place-content:center;gap:.5rem;text-align:center;padding:1.25rem;color:var(--mute)}
.figph span{font-weight:700;color:var(--ink)}.figph small{font-size:.8rem}
figcaption{font-family:var(--mono);font-weight:300;font-size:.85rem;color:var(--mute);margin-top:.5rem}
.quote{margin:1.5rem 0;padding:.25rem 0 .25rem 1.25rem;border-left:4px solid var(--accent);font-size:1.2rem}
dl{margin:1rem 0}dt{font-weight:700;margin-top:.8rem}dd{margin:0 0 .4rem}
.tblwrap{overflow-x:auto;margin:1.25rem 0}
table{border-collapse:collapse;width:100%}
th,td{border:1px solid var(--line);padding:.7rem .9rem;text-align:left;vertical-align:top}
th{font-family:var(--head);font-weight:500}
.ph{display:grid;place-items:center;color:#fff;font-size:.85rem}
.dhero.ph{min-height:280px}
.about{display:grid;grid-template-columns:1.3fr 1fr;gap:3rem;align-items:center}
.about-i{width:100%;height:auto;border-radius:14px;display:block}
.carousel{margin:2rem 0;max-width:900px;scroll-margin-top:6rem}
.carousel.wide{max-width:none}
.btn-row{display:flex;flex-wrap:wrap;gap:.75rem;margin:1rem 0}
.embed{margin:3rem 0}.detail>.embed{margin:0 0 2.5rem}
.embed iframe{display:block;width:100%;height:min(80vh,820px);min-height:520px;border:1px solid var(--line);border-radius:14px;background:#fff}
.embed a{display:inline-block;margin-top:.75rem;font-size:.9rem}
.car-stage{border:1px solid var(--line);border-radius:12px;overflow:hidden;aspect-ratio:16/9;background:var(--line)}
.car-stage img,.car-stage video{width:100%;height:100%;object-fit:contain;display:block;background:#fff}
.car-bar .icon{font-size:.85rem}
.car-bar{display:flex;align-items:center;gap:1rem;margin-top:.75rem}
.car-bar .icon{flex:none;font-size:1.1rem}
.car-cap{flex:1;margin:0;text-align:center;font-family:var(--mono);font-weight:300;font-size:.85rem;color:var(--mute)}
.car-cap span{color:var(--ink);margin-right:.5em}
.car-dots{display:flex;justify-content:center;gap:.5rem;margin-top:.5rem}
.car-dots button{width:10px;height:10px;padding:0;border-radius:50%;border:1px solid var(--mute);background:transparent;cursor:pointer}
.car-dots button[aria-current="true"]{background:var(--accent);border-color:var(--accent)}
.foot>.wrap{position:relative;z-index:1}
.foot{position:relative;overflow:hidden;margin-top:6rem;border-top:1px solid var(--line);padding:4rem 0;text-align:center}
.foot p{color:var(--mute)}
.fl{display:flex;gap:1.5rem;justify-content:center;flex-wrap:wrap;margin-top:1.5rem}
@media(max-width:860px){
 .side{grid-template-columns:1fr;gap:1.25rem}.side.left .fig{order:0}.side .fig{position:static}
 .hero-in{grid-template-columns:1fr;gap:2rem}
 .about{grid-template-columns:1fr;gap:1.5rem}
 .highlights{grid-template-columns:1fr 1fr}
 .card.big{flex-direction:column}.card.big img,.card.big .ph{width:100%;min-height:0;aspect-ratio:16/9}
 .burger{display:inline-block}
 .nav{flex-wrap:nowrap}
 .nav-r{gap:.6rem}
 .nav ul{display:none;position:absolute;top:100%;left:0;right:0;flex-direction:column;gap:.9rem;background:var(--bg);border-bottom:1px solid var(--line);padding:1rem clamp(1rem,4vw,2rem)}
 .nav ul.open{display:flex}
}
@media(max-width:520px){.highlights{grid-template-columns:1fr}}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important;scroll-behavior:auto!important}}
`;
