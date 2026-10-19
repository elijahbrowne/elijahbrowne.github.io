#!/usr/bin/env python3
"""Write one static page per route so every URL has its own link preview.

The site is a single React app (index.html + App.jsx + content.js). GitHub Pages
serves folder/index.html for /folder/, so each route gets a copy of index.html
with its own <title>, description, Open Graph tags and a <noscript> summary.
Link previewers (LinkedIn, Slack) and non-JS tools read those; browsers boot
the same app on every page.

Re-run after changing a project's title, sub or cover in content.js, or adding
a project:   python3 tools/build_pages.py
"""
import html
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ORIGIN = "https://elijahbrowne.github.io"
NAME = "Elijah Browne"
EMAIL = "elijahbrowne48@gmail.com"
LINKEDIN = "https://www.linkedin.com/in/elijahb0509/"

content = (ROOT / "content.js").read_text()
template = (ROOT / "index.html").read_text()


def const_string(name):
    return re.search(rf'export const {name} = "((?:[^"\\]|\\.)*)";', content).group(1)


IMG = dict(re.findall(r'^  (\w+): "([^"]+)",$', re.search(r"export const IMG = \{(.*?)\n\};", content, re.S).group(1), re.M))
ABOUT_FIRST = re.search(r'export const ABOUT = \[\s*"((?:[^"\\]|\\.)*)"', content).group(1)

# Card order and cover image come from PROJECTS; title and sub from DETAILS.
projects = []
for slug, img in re.findall(r'\{ title: "[^"]+", slug: "([^"]+)", img: IMG\.(\w+)', content):
    start = re.search(rf'(^  "{re.escape(slug)}": \{{|^DETAILS\["{re.escape(slug)}"\] = \{{)', content, re.M).end()
    block = content[start:start + 1500]
    title = re.search(r'^\s+title: "((?:[^"\\]|\\.)*)"', block, re.M).group(1)
    sub = re.search(r'^\s+sub: "((?:[^"\\]|\\.)*)"', block, re.M).group(1)
    projects.append({"slug": slug, "title": title, "sub": sub, "img": IMG[img]})

e = lambda s: html.escape(s.replace('\\"', '"'), quote=True)
project_links = "".join(f'<li><a href="/project-page/{p["slug"]}/">{e(p["title"])}</a></li>' for p in projects)


def page(path, title, desc, img, heading, extra="", index=True):
    url = ORIGIN + path
    meta = "\n".join([
        "",
        f"  <title>{e(title)}</title>",
        f'  <meta name="description" content="{e(desc)}" />',
        f'  <link rel="canonical" href="{url}" />' if index else '  <meta name="robots" content="noindex" />',
        '  <meta property="og:type" content="website" />',
        f'  <meta property="og:site_name" content="{NAME}" />',
        f'  <meta property="og:url" content="{url}" />',
        f'  <meta property="og:title" content="{e(title)}" />',
        f'  <meta property="og:description" content="{e(desc)}" />',
        f'  <meta property="og:image" content="{ORIGIN}/{img}" />',
        # the 400x400 headshot reads as a small square card; project covers as a large one
        f'  <meta name="twitter:card" content="{"summary" if img == IMG["home"] else "summary_large_image"}" />',
        "  ",
    ])
    noscript = (f"<noscript><h1>{e(heading)}</h1><p>{e(desc)}</p>{extra}"
                f'<p>Email <a href="mailto:{EMAIL}">{EMAIL}</a> or see <a href="{LINKEDIN}">LinkedIn</a>.</p></noscript>')
    out = re.sub(r"<!--meta:start-->.*?<!--meta:end-->", lambda m: f"<!--meta:start-->{meta}<!--meta:end-->", template, flags=re.S)
    out = re.sub(r"<!--noscript:start-->.*?<!--noscript:end-->", lambda m: f"<!--noscript:start-->{noscript}<!--noscript:end-->", out, flags=re.S)
    return out


home_desc = const_string("INTRO")
pages = {
    "index.html": page("/", f"{NAME} · Instructional Designer", home_desc, IMG["home"], NAME,
                       f"<h2>Projects</h2><ul>{project_links}</ul>"),
    "about/index.html": page("/about/", f"About Me · {NAME}", ABOUT_FIRST, IMG["home"], f"About {NAME}"),
    "project-page/index.html": page("/project-page/", f"Projects · {NAME}",
                                    f"Instructional design and eLearning projects by {NAME}.", IMG["home"], "Projects",
                                    f"<ul>{project_links}</ul>"),
    "404.html": page("/", f"Not found · {NAME}", home_desc, IMG["home"], "Page not found",
                     '<p><a href="/">Go to the home page</a></p>', index=False),
}
for p in projects:
    pages[f'project-page/{p["slug"]}/index.html'] = page(
        f'/project-page/{p["slug"]}/', f'{p["title"]} · {NAME}', p["sub"], p["img"], p["title"])

for rel, text in pages.items():
    f = ROOT / rel
    f.parent.mkdir(parents=True, exist_ok=True)
    f.write_text(text)
    print("wrote", rel)
