/* Mock tests: setup, quiz engine (practice/exam), timed 90-question mock, results. */
(function () {
  'use strict';
  window.CFA = window.CFA || {};
  window.CFA.views = window.CFA.views || {};

  const PASS = 0.70;          // indicative practice pass line
  const SEC_PER_Q = 90;       // ~90 s/question, like the real exam
  let timerId = null;

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function shuffle(a) { return a.slice().sort(() => Math.random() - 0.5); }
  function fmtTime(s) { const m = Math.floor(s / 60), r = s % 60; return m + ':' + String(r).padStart(2, '0'); }

  // ---------- Setup screen ----------
  window.CFA.views.quiz = function () {
    if (timerId) { clearInterval(timerId); timerId = null; }
    const app = document.getElementById('app');
    const topics = window.CFA.curriculum.topics();
    const total = window.CFA.questions.all().length;

    app.innerHTML = `
      <h1 class="view-title">Mock Tests</h1>
      <p class="view-sub">Exam-style single-best-answer (A/B/C). Bank currently holds <strong>${total}</strong> questions across all topics — filter, or run a timed mock.</p>
      <div class="card" style="max-width:640px">
        <label class="q-label">Scope</label>
        <select id="qz-topic" class="q-select">
          <option value="">All topics (mixed)</option>
          ${topics.map((t) => `<option value="${t.id}">${esc(t.name)}</option>`).join('')}
        </select>
        <select id="qz-module" class="q-select" style="margin-top:8px"><option value="">All modules in topic</option></select>

        <label class="q-label">Difficulty</label>
        <select id="qz-diff" class="q-select">
          <option value="">All difficulty levels</option>
          <option value="1">Basic</option><option value="2">Intermediate</option><option value="3">Exam level</option>
        </select>

        <label class="q-label">Length</label>
        <select id="qz-count" class="q-select">
          <option value="5">5 — quick check</option>
          <option value="10" selected>10 — standard</option>
          <option value="20">20 — long set</option>
          <option value="all">All matching questions</option>
          <option value="mock">Full mock session (up to 90, timed)</option>
        </select>

        <label class="q-label">Mode</label>
        <select id="qz-mode" class="q-select">
          <option value="exam">Exam — timed, answers revealed at the end</option>
          <option value="practice">Practice — instant feedback, untimed</option>
        </select>

        <div id="qz-avail" class="search-meta"></div>
        <div style="margin-top:14px"><button class="btn-primary" id="qz-start">Start</button></div>
      </div>`;

    const topicSel = document.getElementById('qz-topic');
    const modSel = document.getElementById('qz-module');
    const diffSel = document.getElementById('qz-diff');
    const countSel = document.getElementById('qz-count');
    const avail = document.getElementById('qz-avail');

    function refreshModules() {
      const t = window.CFA.curriculum.topic(topicSel.value);
      modSel.innerHTML = '<option value="">All modules in topic</option>' +
        (t ? t.modules.map((m) => `<option value="${m.id}">${esc(m.name)}</option>`).join('') : '');
      modSel.disabled = !t;
    }
    function pool() {
      let qs = window.CFA.questions.all();
      if (topicSel.value) qs = qs.filter((q) => q.topicId === topicSel.value);
      if (modSel.value) qs = qs.filter((q) => q.moduleId === modSel.value);
      if (diffSel.value) qs = qs.filter((q) => String(q.difficulty) === diffSel.value);
      return qs;
    }
    function refreshAvail() {
      const n = pool().length;
      avail.textContent = `${n} question${n === 1 ? '' : 's'} match this filter.`;
    }
    topicSel.addEventListener('change', () => { refreshModules(); refreshAvail(); });
    modSel.addEventListener('change', refreshAvail);
    diffSel.addEventListener('change', refreshAvail);
    refreshModules(); refreshAvail();

    document.getElementById('qz-start').addEventListener('click', () => {
      const qs = pool();
      if (!qs.length) { avail.textContent = 'No questions match — widen the filter.'; return; }
      const sel = countSel.value;
      let n, mode = document.getElementById('qz-mode').value, isMock = false;
      if (sel === 'all') n = qs.length;
      else if (sel === 'mock') { n = Math.min(90, qs.length); mode = 'exam'; isMock = true; }
      else n = Math.min(parseInt(sel, 10), qs.length);
      const chosen = shuffle(qs).slice(0, n);
      const label = (topicSel.value ? window.CFA.curriculum.topic(topicSel.value).name : 'All topics')
        + (modSel.value ? ' · ' + window.CFA.curriculum.module(modSel.value).name : '');
      startQuiz(chosen, mode, label, isMock);
    });
  };

  // ---------- Quiz engine ----------
  function startQuiz(rawQs, mode, label, isMock) {
    const app = document.getElementById('app');
    // shuffle option order per question; remember the correct index
    const questions = rawQs.map((q) => {
      const order = shuffle(q.options.map((_, i) => i));
      return {
        id: q.id, topicId: q.topicId, moduleId: q.moduleId, stem: q.stem,
        explanation: q.explanation, ref: q.ref,
        options: order.map((i) => q.options[i]),
        answer: order.indexOf(q.answer),
      };
    });
    const answers = new Array(questions.length).fill(null);
    const isExam = mode === 'exam';
    let idx = 0;
    let secondsLeft = isExam ? questions.length * SEC_PER_Q : 0;

    function finish() {
      if (timerId) { clearInterval(timerId); timerId = null; }
      let correct = 0;
      const perModule = {}, perTopic = {};
      questions.forEach((q, i) => {
        const ok = answers[i] === q.answer;
        if (ok) correct++;
        (perModule[q.moduleId] = perModule[q.moduleId] || { c: 0, n: 0 });
        perModule[q.moduleId].n++; if (ok) perModule[q.moduleId].c++;
        (perTopic[q.topicId] = perTopic[q.topicId] || { c: 0, n: 0 });
        perTopic[q.topicId].n++; if (ok) perTopic[q.topicId].c++;
      });
      const pct = Math.round((correct / questions.length) * 100);
      const pass = correct / questions.length >= PASS;
      window.CFA.store.addQuizResult({
        date: new Date().toISOString(), scope: label, mode: isMock ? 'mock' : mode,
        n: questions.length, correct, pct, perModule, perTopic,
      });

      app.innerHTML = `
        <div class="card result-summary">
          <div class="result-score ${pass ? 'pass' : 'fail'}">${pct}%</div>
          <p><strong>${correct} / ${questions.length}</strong> correct — ${esc(label)}</p>
          <p class="view-sub">${pass ? 'Above the ~70% practice benchmark. Keep it up.' : 'Below the ~70% practice benchmark — review the explanations and revisit those modules.'}</p>
          <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:8px">
            <button class="btn-primary" id="rz-again">New test</button>
            <button class="btn-secondary" id="rz-dash">View dashboard</button>
          </div>
          <div class="result-detail">
            <h3 style="margin:18px 0 8px">Review</h3>
            ${questions.map((q, i) => {
              const a = answers[i]; const ok = a === q.answer;
              return `<div class="review-item">
                <div class="r-q">${i + 1}. ${esc(q.stem)}</div>
                <div class="${ok ? 'r-ok' : 'r-bad'}">Your answer: ${a === null ? '— (skipped)' : String.fromCharCode(65 + a) + '. ' + esc(q.options[a])} ${ok ? '✓' : '✗'}</div>
                ${ok ? '' : `<div class="r-ok">Correct: ${String.fromCharCode(65 + q.answer)}. ${esc(q.options[q.answer])}</div>`}
                <div class="r-exp">${esc(q.explanation)} ${q.moduleId ? `<a href="#" data-open="${q.moduleId}" class="r-link">${esc(q.ref || 'open module')} →</a>` : ''}</div>
              </div>`;
            }).join('')}
          </div>
        </div>`;
      document.getElementById('rz-again').addEventListener('click', () => window.CFA.render('quiz'));
      document.getElementById('rz-dash').addEventListener('click', () => window.CFA.render('dashboard'));
      app.querySelectorAll('.r-link').forEach((el) => el.addEventListener('click', (e) => {
        e.preventDefault(); window.CFA.openModule(el.dataset.open);
      }));
    }

    function draw() {
      const q = questions[idx];
      const answered = answers[idx] !== null;
      app.innerHTML = `
        <div class="quiz-status">
          <strong>${esc(label)} — Q${idx + 1}/${questions.length}${isMock ? ' · Mock' : ''}</strong>
          <div class="quiz-progressbar"><div style="width:${(idx / questions.length) * 100}%"></div></div>
          ${isExam ? `<span class="quiz-timer" id="qz-timer">${fmtTime(secondsLeft)}</span>` : '<span class="view-sub">practice</span>'}
        </div>
        <div class="card">
          <div class="q-text">${esc(q.stem)}</div>
          <div class="q-options">
            ${q.options.map((opt, oi) => {
              let cls = 'q-option';
              if (answers[idx] === oi) cls += ' selected';
              if (!isExam && answered) { if (oi === q.answer) cls += ' correct'; else if (answers[idx] === oi) cls += ' wrong'; }
              return `<button class="${cls}" data-oi="${oi}" ${!isExam && answered ? 'disabled' : ''}>
                <span class="opt-letter">${String.fromCharCode(65 + oi)}.</span>${esc(opt)}</button>`;
            }).join('')}
          </div>
          ${!isExam && answered ? `<div class="explanation"><span class="exp-label">Explanation: </span>${esc(q.explanation)}
            ${q.moduleId ? `<a href="#" id="exp-open" class="r-link">${esc(q.ref || 'open module')} →</a>` : ''}</div>` : ''}
          <div class="quiz-nav">
            <button class="btn-secondary" id="qz-prev" ${idx === 0 ? 'disabled' : ''}>← Previous</button>
            <div style="display:flex;gap:10px">
              <button class="btn-secondary" id="qz-quit">End &amp; score</button>
              ${idx < questions.length - 1
                ? `<button class="btn-primary" id="qz-next">Next →</button>`
                : `<button class="btn-primary" id="qz-finish">Finish &amp; score</button>`}
            </div>
          </div>
        </div>`;

      app.querySelectorAll('.q-option').forEach((b) => b.addEventListener('click', () => {
        if (!isExam && answered) return;
        answers[idx] = parseInt(b.dataset.oi, 10);
        draw();
      }));
      const prev = document.getElementById('qz-prev'); if (prev) prev.addEventListener('click', () => { idx--; draw(); });
      const next = document.getElementById('qz-next'); if (next) next.addEventListener('click', () => { idx++; draw(); });
      const fin = document.getElementById('qz-finish'); if (fin) fin.addEventListener('click', finish);
      document.getElementById('qz-quit').addEventListener('click', finish);
      const expOpen = document.getElementById('exp-open');
      if (expOpen) expOpen.addEventListener('click', (e) => { e.preventDefault(); window.CFA.openModule(q.moduleId); });
    }

    if (isExam) {
      timerId = setInterval(() => {
        secondsLeft--;
        const el = document.getElementById('qz-timer');
        if (el) { el.textContent = fmtTime(Math.max(0, secondsLeft)); el.classList.toggle('low', secondsLeft <= 60); }
        if (secondsLeft <= 0) finish();
      }, 1000);
    }
    draw();
  }
})();
