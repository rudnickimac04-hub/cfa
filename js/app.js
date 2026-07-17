/* CFA Prep SPA: views for home, compendium, formulas, exercises, quiz, progress. */
(function () {
  'use strict';

  const app = document.getElementById('app');
  const PASS_THRESHOLD = 0.7; // indicative "pass" line for practice tests

  // ---------- helpers ----------
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function setActiveNav(view) {
    document.querySelectorAll('.nav-btn').forEach((b) => b.classList.toggle('active', b.dataset.view === view));
  }
  function loadHistory() {
    try { return JSON.parse(localStorage.getItem('cfa_history') || '[]'); } catch (e) { return []; }
  }
  function saveHistory(h) {
    try { localStorage.setItem('cfa_history', JSON.stringify(h)); } catch (e) {}
  }

  // ---------- router ----------
  const views = {};
  function render(view, arg) {
    setActiveNav(view);
    window.scrollTo(0, 0);
    views[view](arg);
  }
  document.querySelectorAll('.nav-btn').forEach((b) => b.addEventListener('click', () => render(b.dataset.view)));
  document.getElementById('brand-home').addEventListener('click', () => render('home'));

  // ---------- Home ----------
  views.home = function () {
    const h = loadHistory();
    const lastLine = h.length
      ? `Last test: <strong>${h[h.length - 1].pct}%</strong> (${esc(h[h.length - 1].topic)})`
      : 'No tests taken yet — start with a short quiz to find your weak areas.';
    app.innerHTML = `
      <div class="hero">
        <h1>CFA Level I Study Platform</h1>
        <p>Condensed notes, formula sheets with quick explanations, worked practice problems and exam-style mock tests —
        with a built-in financial calculator you can toggle on and off while you study (BA II Plus-style TVM and NPV/IRR).</p>
        <p style="margin-top:8px">${lastLine}</p>
        <div class="hero-actions">
          <button class="btn-ghost" id="hero-quiz">Take a mock test</button>
          <button class="btn-ghost" id="hero-comp">Open the compendium</button>
        </div>
      </div>
      <div class="feature-grid">
        <div class="card feature" data-view="compendium"><div class="f-icon">📚</div><h3>Compendium</h3><p>Condensed high-yield notes for all 10 topic areas.</p></div>
        <div class="card feature" data-view="formulas"><div class="f-icon">🧮</div><h3>Formula Sheets</h3><p>Every must-know formula with a one-line explanation. Searchable.</p></div>
        <div class="card feature" data-view="exercises"><div class="f-icon">✏️</div><h3>Practice Problems</h3><p>Worked problems with step-by-step solutions and calculator tips.</p></div>
        <div class="card feature" data-view="quiz"><div class="f-icon">⏱️</div><h3>Mock Tests</h3><p>Timed, exam-style multiple choice with explanations and scoring.</p></div>
        <div class="card feature" data-view="progress"><div class="f-icon">📈</div><h3>Progress</h3><p>Your test history and per-topic accuracy, stored locally.</p></div>
        <div class="card feature" id="feature-calc"><div class="f-icon">🖩</div><h3>Calculator</h3><p>Toggle the financial calculator (top right): TVM, NPV/IRR, standard.</p></div>
      </div>
      <h2 class="view-title" style="font-size:1.25rem">Topic areas &amp; exam weights</h2>
      <div class="grid-cards" style="margin-top:12px">
        ${TOPICS.map((t) => `
          <div class="card topic-card" data-topic="${t.id}">
            <span class="weight">${t.weight}</span>
            <h3>${esc(t.name)}</h3>
            <p>${esc(t.blurb)}</p>
          </div>`).join('')}
      </div>`;
    app.querySelectorAll('.feature[data-view]').forEach((f) => f.addEventListener('click', () => render(f.dataset.view)));
    document.getElementById('feature-calc').addEventListener('click', () => document.getElementById('calc-toggle').click());
    document.getElementById('hero-quiz').addEventListener('click', () => render('quiz'));
    document.getElementById('hero-comp').addEventListener('click', () => render('compendium'));
    app.querySelectorAll('.topic-card').forEach((c) => c.addEventListener('click', () => render('compendium', c.dataset.topic)));
  };

  // ---------- Compendium ----------
  views.compendium = function (topicId) {
    const current = topicId || TOPICS[0].id;
    app.innerHTML = `
      <h1 class="view-title">Knowledge Compendium</h1>
      <p class="view-sub">Condensed, high-yield notes. Read a topic, then drill it in Practice Problems and Mock Tests.</p>
      <div class="split">
        <div class="side-list">
          ${TOPICS.map((t) => `<button class="side-item ${t.id === current ? 'active' : ''}" data-topic="${t.id}">${esc(t.name)}<span class="weight">${t.weight}</span></button>`).join('')}
        </div>
        <div class="card" id="comp-content"></div>
      </div>`;
    function show(id) {
      document.getElementById('comp-content').innerHTML =
        `<h2 style="margin-bottom:14px">${esc(topicName(id))}</h2>` + (COMPENDIUM[id] || '<p>Coming soon.</p>');
      app.querySelectorAll('.side-item').forEach((b) => b.classList.toggle('active', b.dataset.topic === id));
    }
    app.querySelectorAll('.side-item').forEach((b) => b.addEventListener('click', () => show(b.dataset.topic)));
    show(current);
  };

  // ---------- Formulas ----------
  views.formulas = function () {
    app.innerHTML = `
      <h1 class="view-title">Formula Sheets</h1>
      <p class="view-sub">Every formula with a quick explanation. Filter by topic or search by name.</p>
      <div class="filter-row">
        <select id="f-topic">
          <option value="">All topics</option>
          ${TOPICS.map((t) => `<option value="${t.id}">${esc(t.name)}</option>`).join('')}
        </select>
      </div>
      <input class="search-bar" id="f-search" placeholder="Search formulas… (e.g. duration, WACC, parity)">
      <div id="f-list"></div>`;
    const list = document.getElementById('f-list');
    function draw() {
      const q = document.getElementById('f-search').value.toLowerCase();
      const t = document.getElementById('f-topic').value;
      const items = FORMULAS.filter((f) =>
        (!t || f.topic === t) &&
        (!q || f.name.toLowerCase().includes(q) || f.note.toLowerCase().includes(q)));
      const byTopic = {};
      items.forEach((f) => { (byTopic[f.topic] = byTopic[f.topic] || []).push(f); });
      list.innerHTML = Object.keys(byTopic).map((tid) => `
        <div class="card" style="margin-bottom:16px">
          <h2 style="color:var(--brand);font-size:1.15rem;margin-bottom:12px">${esc(topicName(tid))}</h2>
          ${byTopic[tid].map((f) => `
            <div class="formula-block">
              <div class="formula-name">${esc(f.name)}</div>
              <div class="formula-expr">${f.expr}</div>
              <div class="formula-note">${f.note}</div>
            </div>`).join('')}
        </div>`).join('') || '<p class="view-sub">No formulas match your search.</p>';
    }
    document.getElementById('f-search').addEventListener('input', draw);
    document.getElementById('f-topic').addEventListener('change', draw);
    draw();
  };

  // ---------- Exercises ----------
  views.exercises = function () {
    const levels = { 1: 'Basic', 2: 'Intermediate', 3: 'Exam level' };
    app.innerHTML = `
      <h1 class="view-title">Practice Problems</h1>
      <p class="view-sub">Try each problem yourself first — turn on the calculator (top right) — then reveal the step-by-step solution.</p>
      <div class="filter-row">
        <select id="ex-topic">
          <option value="">All topics</option>
          ${TOPICS.map((t) => `<option value="${t.id}">${esc(t.name)}</option>`).join('')}
        </select>
        <select id="ex-level">
          <option value="">All difficulty levels</option>
          <option value="1">Basic</option><option value="2">Intermediate</option><option value="3">Exam level</option>
        </select>
      </div>
      <div id="ex-list"></div>`;
    const list = document.getElementById('ex-list');
    function draw() {
      const t = document.getElementById('ex-topic').value;
      const l = document.getElementById('ex-level').value;
      const items = EXERCISES.filter((e) => (!t || e.topic === t) && (!l || String(e.level) === l));
      list.innerHTML = items.map((e, i) => `
        <div class="card exercise">
          <div class="exercise-head">
            <strong>${esc(e.title)}</strong>
            <span><span class="exercise-topic">${esc(topicName(e.topic))}</span> <span class="exercise-level">${levels[e.level]}</span></span>
          </div>
          <div class="exercise-q">${e.q}</div>
          <button class="btn-secondary ex-reveal" data-i="${i}">Show solution</button>
          <div class="solution" id="sol-${i}">
            <ol>${e.steps.map((s) => `<li>${s}</li>`).join('')}</ol>
            <div class="answer">Answer: ${e.answer}</div>
            ${e.calcTip ? `<div class="callout tip" style="margin-top:10px">🖩 Calculator: ${esc(e.calcTip)}</div>` : ''}
          </div>
        </div>`).join('') || '<p class="view-sub">No problems match this filter.</p>';
      list.querySelectorAll('.ex-reveal').forEach((b) => b.addEventListener('click', () => {
        const sol = document.getElementById('sol-' + b.dataset.i);
        const open = sol.classList.toggle('open');
        b.textContent = open ? 'Hide solution' : 'Show solution';
      }));
    }
    document.getElementById('ex-topic').addEventListener('change', draw);
    document.getElementById('ex-level').addEventListener('change', draw);
    draw();
  };

  // ---------- Quiz ----------
  let quizTimerId = null;

  views.quiz = function () {
    if (quizTimerId) { clearInterval(quizTimerId); quizTimerId = null; }
    app.innerHTML = `
      <h1 class="view-title">Mock Tests</h1>
      <p class="view-sub">Exam-style multiple choice (A/B/C, one correct). ~90 seconds per question, just like the real exam.</p>
      <div class="quiz-setup">
        <div class="card">
          <label>Topic</label>
          <select id="qz-topic">
            <option value="">All topics (mixed mock)</option>
            ${TOPICS.map((t) => `<option value="${t.id}">${esc(t.name)}</option>`).join('')}
          </select>
          <label>Number of questions</label>
          <select id="qz-count">
            <option value="5">5 — quick check</option>
            <option value="10" selected>10 — standard</option>
            <option value="20">20 — long session</option>
            <option value="all">All available</option>
          </select>
          <label>Mode</label>
          <select id="qz-mode">
            <option value="exam">Exam mode — answers shown at the end, timed</option>
            <option value="practice">Practice mode — instant feedback, untimed</option>
          </select>
          <div style="margin-top:18px"><button class="btn-primary" id="qz-start">Start test</button></div>
        </div>
      </div>`;
    document.getElementById('qz-start').addEventListener('click', () => {
      const topic = document.getElementById('qz-topic').value;
      const pool = QUESTIONS.filter((q) => !topic || q.topic === topic);
      const countSel = document.getElementById('qz-count').value;
      const n = countSel === 'all' ? pool.length : Math.min(parseInt(countSel, 10), pool.length);
      const shuffled = pool.slice().sort(() => Math.random() - 0.5).slice(0, n);
      startQuiz(shuffled, document.getElementById('qz-mode').value, topic ? topicName(topic) : 'All topics');
    });
  };

  function startQuiz(rawQuestions, mode, topicLabel) {
    // Shuffle each question's options so the correct letter is unpredictable.
    const questions = rawQuestions.map((q) => {
      const order = q.o.map((_, i) => i).sort(() => Math.random() - 0.5);
      return { q: q.q, e: q.e, o: order.map((i) => q.o[i]), c: order.indexOf(q.c) };
    });
    let idx = 0;
    const answers = new Array(questions.length).fill(null);
    const isExam = mode === 'exam';
    let secondsLeft = isExam ? questions.length * 90 : 0;

    function fmtTime(s) {
      const m = Math.floor(s / 60), r = s % 60;
      return m + ':' + String(r).padStart(2, '0');
    }

    function finish() {
      if (quizTimerId) { clearInterval(quizTimerId); quizTimerId = null; }
      const correct = answers.reduce((sum, a, i) => sum + (a === questions[i].c ? 1 : 0), 0);
      const pct = Math.round((correct / questions.length) * 100);
      const pass = correct / questions.length >= PASS_THRESHOLD;

      const h = loadHistory();
      h.push({ date: new Date().toISOString(), topic: topicLabel, n: questions.length, correct, pct, mode });
      saveHistory(h);

      app.innerHTML = `
        <div class="card result-summary">
          <div class="result-score ${pass ? 'pass' : 'fail'}">${pct}%</div>
          <p><strong>${correct} / ${questions.length}</strong> correct — ${esc(topicLabel)}</p>
          <p class="view-sub">${pass ? 'Above the ~70% practice benchmark. Keep it up!' : 'Below the ~70% practice benchmark — review the explanations below and revisit the compendium.'}</p>
          <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
            <button class="btn-primary" id="rz-again">New test</button>
            <button class="btn-secondary" id="rz-progress">View progress</button>
          </div>
          <div class="result-detail">
            <h3 style="margin-bottom:8px">Review</h3>
            ${questions.map((q, i) => {
              const a = answers[i];
              const ok = a === q.c;
              return `<div class="review-item">
                <div class="r-q">${i + 1}. ${esc(q.q)}</div>
                <div class="${ok ? 'r-ok' : 'r-bad'}">Your answer: ${a === null ? '— (skipped)' : String.fromCharCode(65 + a) + '. ' + esc(q.o[a])} ${ok ? '✓' : '✗'}</div>
                ${ok ? '' : `<div class="r-ok">Correct: ${String.fromCharCode(65 + q.c)}. ${esc(q.o[q.c])}</div>`}
                <div style="color:var(--ink-soft)">${esc(q.e)}</div>
              </div>`;
            }).join('')}
          </div>
        </div>`;
      document.getElementById('rz-again').addEventListener('click', () => render('quiz'));
      document.getElementById('rz-progress').addEventListener('click', () => render('progress'));
    }

    function draw() {
      const q = questions[idx];
      const answered = answers[idx] !== null;
      app.innerHTML = `
        <div class="quiz-status">
          <strong>${esc(topicLabel)} — question ${idx + 1} / ${questions.length}</strong>
          <div class="quiz-progressbar"><div style="width:${((idx) / questions.length) * 100}%"></div></div>
          ${isExam ? `<span class="quiz-timer" id="qz-timer">${fmtTime(secondsLeft)}</span>` : '<span class="view-sub">practice mode</span>'}
        </div>
        <div class="card">
          <div class="q-text">${esc(q.q)}</div>
          <div class="q-options">
            ${q.o.map((opt, oi) => {
              let cls = 'q-option';
              if (answers[idx] === oi) cls += ' selected';
              if (!isExam && answered) {
                if (oi === q.c) cls += ' correct';
                else if (answers[idx] === oi) cls += ' wrong';
              }
              return `<button class="${cls}" data-oi="${oi}" ${!isExam && answered ? 'disabled' : ''}><span class="opt-letter">${String.fromCharCode(65 + oi)}.</span>${esc(opt)}</button>`;
            }).join('')}
          </div>
          ${!isExam && answered ? `<div class="explanation"><span class="exp-label">Explanation: </span>${esc(q.e)}</div>` : ''}
          <div class="quiz-nav">
            <button class="btn-secondary" id="qz-prev" ${idx === 0 ? 'disabled' : ''}>← Previous</button>
            <div style="display:flex;gap:10px">
              <button class="btn-secondary" id="qz-quit">End test</button>
              ${idx < questions.length - 1
                ? `<button class="btn-primary" id="qz-next">Next →</button>`
                : `<button class="btn-primary" id="qz-finish">Finish &amp; score</button>`}
            </div>
          </div>
        </div>`;

      app.querySelectorAll('.q-option').forEach((b) => b.addEventListener('click', () => {
        answers[idx] = parseInt(b.dataset.oi, 10);
        draw(); // in practice mode this reveals feedback; in exam mode it marks selection
      }));
      const prev = document.getElementById('qz-prev');
      if (prev) prev.addEventListener('click', () => { idx--; draw(); });
      const next = document.getElementById('qz-next');
      if (next) next.addEventListener('click', () => { idx++; draw(); });
      const fin = document.getElementById('qz-finish');
      if (fin) fin.addEventListener('click', finish);
      document.getElementById('qz-quit').addEventListener('click', finish);
    }

    if (isExam) {
      quizTimerId = setInterval(() => {
        secondsLeft--;
        const el = document.getElementById('qz-timer');
        if (el) {
          el.textContent = fmtTime(Math.max(0, secondsLeft));
          el.classList.toggle('low', secondsLeft <= 60);
        }
        if (secondsLeft <= 0) finish();
      }, 1000);
    }
    draw();
  }

  // ---------- Progress ----------
  views.progress = function () {
    const h = loadHistory();
    const totalQ = h.reduce((s, r) => s + r.n, 0);
    const totalC = h.reduce((s, r) => s + r.correct, 0);
    const avg = totalQ ? Math.round((totalC / totalQ) * 100) : 0;
    const best = h.length ? Math.max(...h.map((r) => r.pct)) : 0;

    // per-topic aggregation
    const byTopic = {};
    h.forEach((r) => {
      const k = r.topic;
      byTopic[k] = byTopic[k] || { n: 0, c: 0 };
      byTopic[k].n += r.n; byTopic[k].c += r.correct;
    });

    app.innerHTML = `
      <h1 class="view-title">Your Progress</h1>
      <p class="view-sub">Stored locally in this browser. Results below ~70% suggest a topic to revisit.</p>
      <div class="stat-row">
        <div class="card stat"><div class="stat-num">${h.length}</div><div class="stat-label">tests taken</div></div>
        <div class="card stat"><div class="stat-num">${totalQ}</div><div class="stat-label">questions answered</div></div>
        <div class="card stat"><div class="stat-num">${avg}%</div><div class="stat-label">overall accuracy</div></div>
        <div class="card stat"><div class="stat-num">${best}%</div><div class="stat-label">best score</div></div>
      </div>
      ${Object.keys(byTopic).length ? `
      <div class="card" style="margin-bottom:18px">
        <h3 style="margin-bottom:10px">Accuracy by test scope</h3>
        <table class="history-table">
          <thead><tr><th>Scope</th><th>Questions</th><th>Accuracy</th></tr></thead>
          <tbody>
            ${Object.keys(byTopic).map((k) => {
              const t = byTopic[k];
              const p = Math.round((t.c / t.n) * 100);
              return `<tr><td>${esc(k)}</td><td>${t.n}</td><td><span class="score-chip ${p >= 70 ? 'pass' : 'fail'}">${p}%</span></td></tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>` : ''}
      <div class="card">
        <h3 style="margin-bottom:10px">Test history</h3>
        ${h.length ? `
        <table class="history-table">
          <thead><tr><th>Date</th><th>Scope</th><th>Mode</th><th>Result</th><th>Score</th></tr></thead>
          <tbody>
            ${h.slice().reverse().map((r) => `
              <tr>
                <td>${new Date(r.date).toLocaleString()}</td>
                <td>${esc(r.topic)}</td>
                <td>${r.mode === 'exam' ? 'Exam' : 'Practice'}</td>
                <td>${r.correct}/${r.n}</td>
                <td><span class="score-chip ${r.pct >= 70 ? 'pass' : 'fail'}">${r.pct}%</span></td>
              </tr>`).join('')}
          </tbody>
        </table>
        <div style="margin-top:14px"><button class="btn-secondary" id="pr-clear">Clear history</button></div>`
        : '<p class="view-sub">No tests yet. Take one from the Mock Tests tab.</p>'}
      </div>`;
    const clr = document.getElementById('pr-clear');
    if (clr) clr.addEventListener('click', () => {
      if (confirm('Delete all locally stored test history?')) { saveHistory([]); render('progress'); }
    });
  };

  // ---------- boot ----------
  render('home');
})();
