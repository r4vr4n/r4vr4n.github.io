# r4vr4n.github.io

Personal resume site, published via GitHub Pages. Static HTML/CSS/vanilla JS — no build step, no dependencies.

## Structure

- `index.html` — page shell with empty section containers.
- `data/resume-data.js` — single source of truth for all resume content (personal info, experience, skills, projects, education, certifications).
- `functions/render*.js` — one render function per resume section; each takes its slice of `RESUME_DATA` and populates the matching DOM container.
- `utils/dom.js` — shared DOM helpers (element creation, tech-stack/list HTML builders).
- `utils/icons.js` — inline SVG icons used in the header.
- `constants/dom-ids.js` — element ID constants shared between `index.html` and the render functions.
- `script.js` — entry point; renders every section on `DOMContentLoaded`.
- `styles.css` — all styling, including print-specific rules.

## Editing content

Update `data/resume-data.js` — the page re-renders entirely from that file, no HTML edits needed.

## Running locally

Just open `index.html` in a browser, or serve the folder with any static file server (e.g. `npx serve .`).

## Exporting a PDF

Click "Get PDF" (or Ctrl/Cmd+P) — this triggers the browser's native print dialog; choose "Save as PDF". Using native print (rather than a canvas-rasterized export) keeps the PDF's text selectable and ATS-parseable.
