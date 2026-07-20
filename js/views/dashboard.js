/* Dashboard view (skeleton). Real progress charts/plan arrive in Stage 5. */
(function () {
  'use strict';
  window.CFA = window.CFA || {};
  window.CFA.views = window.CFA.views || {};

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  window.CFA.views.dashboard = function () {
    const app = document.getElementById('app');
    const c = window.CFA.curriculum.counts();
    const progress = window.CFA.store.progress();
    const done = Object.keys(progress.modulesDone || {}).length;
    const settings = window.CFA.store.settings();

    const changed = window.CFA.curriculum.allModules().filter((m) => m.status !== 'unchanged').length;

    app.innerHTML = `
      <div class="hero">
        <h1>CFA Level I — 2027 Study Platform</h1>
        <p>Curriculum-aligned notes, a filterable question bank, spaced-repetition flashcards and interactive
        formula calculators — all offline in your browser. Built on the <strong>February 2027</strong> curriculum,
        including the reorganized Quantitative Methods, the renamed & expanded <strong>Equities</strong> topic,
        and per-Standard Ethics guidance.</p>
      </div>

      <div class="stat-row">
        <div class="card stat"><div class="stat-num">${c.topics}</div><div class="stat-label">topic areas</div></div>
        <div class="card stat"><div class="stat-num">${c.modules}</div><div class="stat-label">learning modules</div></div>
        <div class="card stat"><div class="stat-num">${done}</div><div class="stat-label">modules completed</div></div>
        <div class="card stat"><div class="stat-num">${changed}</div><div class="stat-label">new / revised for 2027</div></div>
      </div>

      <div class="grid-cards">
        <div class="card">
          <h3 style="margin-bottom:6px">Jump back in</h3>
          <p class="view-sub" style="margin-bottom:12px">Pick where to study next.</p>
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            <button class="btn-primary" data-go="curriculum">Browse curriculum</button>
            <button class="btn-secondary" data-go="quiz">Take a mock test</button>
            <button class="btn-secondary" data-go="flashcards">Review flashcards</button>
          </div>
        </div>
        <div class="card">
          <h3 style="margin-bottom:6px">Exam date</h3>
          <p class="view-sub" style="margin-bottom:12px">Used later for your recommended study plan.</p>
          <input type="date" id="dash-exam" value="${esc(settings.examDate || '')}"
            style="padding:9px 12px;border-radius:8px;border:1px solid var(--border);background:var(--surface);color:var(--ink)">
          <span id="dash-exam-msg" class="view-sub" style="margin-left:8px"></span>
        </div>
      </div>`;

    app.querySelectorAll('[data-go]').forEach((b) => b.addEventListener('click', () => window.CFA.render(b.dataset.go)));
    const exam = document.getElementById('dash-exam');
    exam.addEventListener('change', () => {
      window.CFA.store.saveSettings({ examDate: exam.value });
      const msg = document.getElementById('dash-exam-msg');
      if (exam.value) {
        const days = Math.ceil((new Date(exam.value) - new Date()) / 86400000);
        msg.textContent = days >= 0 ? `${days} days to go` : 'date is in the past';
      } else { msg.textContent = ''; }
    });
    if (exam.value) exam.dispatchEvent(new Event('change'));
  };
})();
