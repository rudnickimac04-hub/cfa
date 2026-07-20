/* Dashboard: progress %, accuracy, weak areas, score history and a study plan. */
(function () {
  'use strict';
  window.CFA = window.CFA || {};
  window.CFA.views = window.CFA.views || {};

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function weightMid(w) { const m = String(w).match(/(\d+)\D+(\d+)/); return m ? (+m[1] + +m[2]) / 2 : (parseFloat(w) || 0); }

  function cardsDue() {
    const state = window.CFA.store.srs();
    return window.CFA.flashcards.all().filter((c) => window.CFA.srs.isDue(state[c.id])).length;
  }

  // aggregate quiz history into per-topic / per-module {c,n}
  function aggregate() {
    const hist = window.CFA.store.quizHistory();
    const topic = {}, module = {};
    hist.forEach((r) => {
      Object.entries(r.perTopic || {}).forEach(([k, v]) => { topic[k] = topic[k] || { c: 0, n: 0 }; topic[k].c += v.c; topic[k].n += v.n; });
      Object.entries(r.perModule || {}).forEach(([k, v]) => { module[k] = module[k] || { c: 0, n: 0 }; module[k].c += v.c; module[k].n += v.n; });
    });
    return { hist, topic, module };
  }

  window.CFA.views.dashboard = function () {
    const app = document.getElementById('app');
    const store = window.CFA.store;
    const topics = window.CFA.curriculum.topics();
    const counts = window.CFA.curriculum.counts();
    const progress = store.progress();
    const doneCount = Object.keys(progress.modulesDone || {}).length;
    const donePct = Math.round((doneCount / counts.modules) * 100);
    const settings = store.settings();
    const { hist, topic: topicAgg, module: moduleAgg } = aggregate();

    const answered = hist.reduce((s, r) => s + r.n, 0);
    const totalCorrect = hist.reduce((s, r) => s + r.correct, 0);
    const acc = answered ? Math.round((totalCorrect / answered) * 100) : 0;

    // exam countdown + study plan
    let daysLeft = null;
    if (settings.examDate) daysLeft = Math.ceil((new Date(settings.examDate) - new Date()) / 86400000);

    // per-topic rows: completion + accuracy
    const topicRows = topics.map((t) => {
      const tot = t.modules.length;
      const done = t.modules.filter((m) => progress.modulesDone[m.id]).length;
      const comp = Math.round((done / tot) * 100);
      const a = topicAgg[t.id];
      const accT = a && a.n ? Math.round((a.c / a.n) * 100) : null;
      const priority = weightMid(t.weight) * (1 - done / tot) + (accT !== null && accT < 70 ? (70 - accT) / 10 : 0);
      return { t, tot, done, comp, accT, priority };
    });

    // weak modules (from quiz history)
    const weakModules = Object.entries(moduleAgg)
      .filter(([, v]) => v.n >= 2 && v.c / v.n < 0.7)
      .map(([id, v]) => ({ id, pct: Math.round((v.c / v.n) * 100), n: v.n }))
      .sort((a, b) => a.pct - b.pct).slice(0, 8);

    // study plan focus = top 3 by priority
    const focus = topicRows.slice().sort((a, b) => b.priority - a.priority).slice(0, 3).filter((r) => r.priority > 0);

    const scoreSeries = hist.map((r) => r.pct);

    app.innerHTML = `
      <div class="hero">
        <h1>Dashboard</h1>
        <p>Track completion, accuracy and what to study next for the <strong>2027</strong> CFA Level I exam.
        ${daysLeft !== null ? `<strong>${daysLeft >= 0 ? daysLeft + ' days to your exam' : 'exam date has passed'}</strong>.` : 'Set your exam date below for a study plan.'}</p>
      </div>

      <div class="stat-row">
        <div class="card stat"><div class="stat-num">${donePct}%</div><div class="stat-label">curriculum completed (${doneCount}/${counts.modules})</div></div>
        <div class="card stat"><div class="stat-num">${answered}</div><div class="stat-label">questions answered</div></div>
        <div class="card stat"><div class="stat-num">${acc}%</div><div class="stat-label">overall accuracy</div></div>
        <div class="card stat"><div class="stat-num">${cardsDue()}</div><div class="stat-label">flashcards due</div></div>
      </div>

      <div class="dash-grid">
        <div class="card">
          <h3 class="dash-h">Progress &amp; accuracy by topic</h3>
          <div class="topic-progress">
            ${topicRows.map((r) => `
              <div class="tp-row" data-topic="${r.t.id}">
                <div class="tp-name">${esc(r.t.short)} <span class="tp-weight">${esc(r.t.weight)}</span></div>
                <div class="tp-bar"><div class="tp-fill" style="width:${r.comp}%"></div></div>
                <div class="tp-nums">
                  <span title="modules completed">${r.comp}%</span>
                  ${r.accT !== null ? `<span class="score-chip ${r.accT >= 70 ? 'pass' : 'fail'}" title="quiz accuracy">${r.accT}%</span>` : '<span class="tp-noacc">—</span>'}
                </div>
              </div>`).join('')}
          </div>
          <p class="dash-legend">Bar = modules completed · chip = quiz accuracy (red &lt; 70%).</p>
        </div>

        <div class="card">
          <h3 class="dash-h">Study plan</h3>
          ${settings.examDate
            ? (focus.length
                ? `<p class="view-sub" style="margin-bottom:10px">Focus next on the highest-weight topics where you're least prepared:</p>
                   <ol class="focus-list">${focus.map((r) => `<li><strong>${esc(r.t.name)}</strong> <span class="tp-weight">${esc(r.t.weight)}</span> — ${r.comp}% done${r.accT !== null ? `, ${r.accT}% accuracy` : ''}</li>`).join('')}</ol>
                   ${daysLeft > 0 ? `<p class="dash-legend">${Math.max(1, Math.round(daysLeft / Math.max(1, counts.modules - doneCount)))} day(s) per remaining module to finish on time.</p>` : ''}`
                : `<p class="view-sub">Great — you've completed everything with solid accuracy. Keep reviewing flashcards and taking mocks.</p>`)
            : `<p class="view-sub" style="margin-bottom:10px">Set your exam date to get a prioritized plan.</p>
               <input type="date" id="dash-exam" value="${esc(settings.examDate || '')}" class="q-select" style="max-width:220px">`}
          ${settings.examDate ? `<div style="margin-top:12px"><input type="date" id="dash-exam" value="${esc(settings.examDate)}" class="q-select" style="max-width:220px"></div>` : ''}
        </div>
      </div>

      ${scoreSeries.length ? `
      <div class="card" style="margin-top:16px">
        <h3 class="dash-h">Score history</h3>
        <div class="score-chart">${window.CFA.charts.line(scoreSeries, { guide: 70 })}</div>
        <p class="dash-legend">Each point is one test; dashed line = 70% benchmark.</p>
      </div>` : ''}

      ${weakModules.length ? `
      <div class="card" style="margin-top:16px">
        <h3 class="dash-h">Modules to review (&lt; 70% in tests)</h3>
        <div class="weak-list">
          ${weakModules.map((w) => { const m = window.CFA.curriculum.module(w.id); return m ? `
            <div class="weak-item" data-open="${w.id}">
              <span class="score-chip fail">${w.pct}%</span>
              <span class="weak-name">${esc(m.name)}</span>
              <span class="weak-topic">${esc(m.topicName)}</span>
            </div>` : ''; }).join('')}
        </div>
      </div>` : ''}

      <div class="card" style="margin-top:16px">
        <h3 class="dash-h">Test history</h3>
        ${hist.length ? `
        <table class="history-table">
          <thead><tr><th>Date</th><th>Scope</th><th>Mode</th><th>Result</th><th>Score</th></tr></thead>
          <tbody>${hist.slice().reverse().map((r) => `
            <tr><td>${new Date(r.date).toLocaleString()}</td><td>${esc(r.scope)}</td>
            <td>${r.mode}</td><td>${r.correct}/${r.n}</td>
            <td><span class="score-chip ${r.pct >= 70 ? 'pass' : 'fail'}">${r.pct}%</span></td></tr>`).join('')}
          </tbody>
        </table>
        <div style="margin-top:12px"><button class="btn-secondary" id="dash-clear">Clear test history</button></div>`
        : '<p class="view-sub">No tests yet. Take one from the Mock Tests tab.</p>'}
      </div>`;

    // interactions
    app.querySelectorAll('.tp-row').forEach((el) => el.addEventListener('click', () => window.CFA.render('curriculum', el.dataset.topic)));
    app.querySelectorAll('.weak-item').forEach((el) => el.addEventListener('click', () => window.CFA.openModule(el.dataset.open)));
    const clr = document.getElementById('dash-clear');
    if (clr) clr.addEventListener('click', () => { if (confirm('Delete all locally stored test history?')) { store.clearQuizHistory(); window.CFA.render('dashboard'); } });
    const exam = document.getElementById('dash-exam');
    if (exam) exam.addEventListener('change', () => { store.saveSettings({ examDate: exam.value }); window.CFA.render('dashboard'); });
  };
})();
