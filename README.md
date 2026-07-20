# CFA Prep — CFA Level I (2027) Study Platform

A self-contained, dependency-free web app for studying for the **CFA Level I exam on the 2027 curriculum** (February 2027 window onward). Plain HTML/CSS/JavaScript — no build step, no server, no dependencies.

## Run it

Open **`index.html`** directly in a browser (double-click, `file://`), or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

Data files are loaded as classic `<script>`s (not `fetch`), so everything works from `file://`.

## Features

- **Curriculum** — the full 2027 structure: 10 topics → 103 learning modules → learning outcomes (LOS). Each module and LOS is tagged **New / Revised / Unchanged** vs 2026. Per-module study notes, plus your own saved notes and a completion toggle.
- **Search** — full-text search across module names, LOS and notes, with snippet highlighting and one-click jump into a module.
- **Mock Tests** — filter the question bank by topic / module / difficulty; **practice mode** (instant feedback) or **exam mode** (~90 s/question timer); a **full mock session** (up to 90 questions); scored results with a per-module breakdown and explanations that link back to the module.
- **Flashcards** — spaced repetition with the **SM-2** algorithm for formulas, definitions and ethics standards. Cards you find hard return sooner; known cards space out.
- **Dashboard** — completion % and quiz accuracy per topic, a prioritized **study plan** from your exam date + topic weights + readiness, a **score-history chart**, weak-module flags (< 70%) and full test history.
- **Calculators** — five interactive simulators with **live charts**: TVM solver, bond price (price-yield curve), duration & convexity, CAPM / security market line, and NPV / IRR (NPV profile). Change an input and the result and chart update instantly.
- **Dark / light theme** (toggle in the top bar) and all progress stored in `localStorage` — no account, no backend.

### 2027 curriculum coverage

Topic weights are the official 2026 ranges (unchanged for 2027). Reflected structural changes:
- **Ethics** — guidance split into one module per Standard (I–VII); GIPS removed from Level I.
- **Quantitative Methods** — reorganized (11 modules), incl. a new **Financial Data Science / AI / LLM** module.
- **Equities** — renamed from "Equity Investments" and expanded (8 → 12 modules): DCF/DDM, relative valuation, equity research reports, factor-based models.

> Module boundaries for Quant, Equities and Corporate Issuers are a best reconstruction from public sources; swap in the official "2027 Level I Topic Outline" names if you have them — see `js/data/curriculum.js`.

## Project structure

```
index.html              app shell; loads data, libs and views (classic scripts)
css/styles.css          all styling (light + dark themes)
js/app.js               router, theme, view orchestration
js/data/
  curriculum.js         topics → modules (structure + 2027 change tags + LOS after merge)
  content.js            per-module { los, notes } — the editable study content
  questions.js          question bank (single-best-answer, 3 options)
  flashcards.js         flashcard content
js/lib/
  storage.js            localStorage wrapper (progress, history, SRS, notes, settings)
  srs.js                SM-2 spaced-repetition scheduler
  charts.js             dependency-free SVG line + XY plots
  finance.js            TVM / bond / duration / CAPM / NPV / IRR math
js/views/               dashboard, curriculum, search, quiz, flashcards, calculators
_legacy/                the earlier single-topic prototype (kept for reference)
```

## Adding / editing content

Everything is plain data — add an object and reload:

- **Question** → `js/data/questions.js`: `{ id, topicId, moduleId, difficulty, stem, options:[3], answer, explanation, ref }`.
- **Study notes / LOS** → `js/data/content.js`: `CONTENT[moduleId] = { los:[{id,text,status}], notes:"<html>" }`.
- **Flashcard** → `js/data/flashcards.js`: `{ id, topicId, moduleId, type, front, back }`.
- **Module/topic** → `js/data/curriculum.js`.

## Disclaimer

Independent study aid. CFA® is a registered trademark of CFA Institute, which does not endorse or sponsor this project. Content is a condensed summary for revision — always rely on the official curriculum as the source of truth.
