# CFA Prep — CFA Level I Study Platform

A self-contained, dependency-free web app for studying for the CFA Level I exam. Plain HTML/CSS/JavaScript — no build step, no server required.

## Run it

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

Works as-is on GitHub Pages (serve the repository root).

## Features

- **Compendium** — condensed, high-yield study notes for all 10 CFA Level I topic areas (Ethics, Quantitative Methods, Economics, FSA, Corporate Issuers, Equity, Fixed Income, Derivatives, Alternatives, Portfolio Management).
- **Formula Sheets** — every must-know formula with a one-line explanation; searchable and filterable by topic.
- **Practice Problems** — worked problems with step-by-step solutions, difficulty levels, and calculator tips.
- **Mock Tests** — exam-style A/B/C multiple choice; exam mode (timed at ~90 s/question, answers revealed at the end) or practice mode (instant feedback); full review with explanations after scoring.
- **Progress tracking** — test history and accuracy statistics, stored in the browser's `localStorage` (no account, no server).
- **Toggleable financial calculator** — the "Calculator" button in the top bar shows/hides a floating, draggable calculator with three modes:
  - **Standard** — arithmetic, powers, roots, ln/eˣ, factorial;
  - **TVM** — BA II Plus-style solver for N, I/Y, PV, PMT, FV (END/BGN, standard sign convention);
  - **NPV / IRR** — cash-flow worksheet with NPV at a given rate and IRR via bisection.

  The on/off state persists between sessions, so you can practice with it off to simulate not having a calculator, or on to learn the BA II Plus workflow.

## Project structure

```
index.html          app shell + calculator markup
css/styles.css      all styling
js/app.js           SPA routing and views (home, compendium, formulas, exercises, quiz, progress)
js/calculator.js    calculator logic (standard, TVM solver, NPV/IRR)
js/data/topics.js       topic list with exam weights
js/data/compendium.js   study notes per topic
js/data/formulas.js     formula sheet entries
js/data/exercises.js    worked practice problems
js/data/questions.js    multiple-choice question bank
```

## Adding content

All content lives in `js/data/`. Each file is a plain array/object literal — add an entry and reload:

- a question: `{ topic, q, o: [three options], c: correctIndex, e: explanation }` in `questions.js`;
- a problem: `{ topic, level (1–3), title, q, steps: [...], answer, calcTip? }` in `exercises.js`;
- a formula: `{ topic, name, expr (HTML), note }` in `formulas.js`.

## Disclaimer

Independent study aid. CFA® is a registered trademark of CFA Institute, which does not endorse or sponsor this project. Content is a condensed summary for revision purposes — always rely on the official curriculum as the source of truth.
