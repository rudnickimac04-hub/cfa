/* CFA Prep — app shell: theme, routing, and view orchestration.
 * Views are plain functions on window.CFA.views (each stage fills them in). */
(function () {
  'use strict';

  window.CFA = window.CFA || {};
  const store = window.CFA.store;
  const app = document.getElementById('app');

  // ---------- Theme (dark / light) ----------
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
  }
  function initTheme() {
    const t = store.settings().theme || 'light';
    applyTheme(t);
  }
  window.CFA.toggleTheme = function () {
    const next = (store.settings().theme === 'dark') ? 'light' : 'dark';
    store.saveSettings({ theme: next });
    applyTheme(next);
  };

  // ---------- Router ----------
  const ROUTES = ['dashboard', 'curriculum', 'search', 'quiz', 'flashcards', 'calculators'];
  let currentArg = null;

  function stub(icon, title, desc, stage) {
    return `<div class="card stub"><span class="stub-icon">${icon}</span>
      <h2>${title}</h2><p class="view-sub" style="margin:8px 0 0">${desc}</p>
      <span class="stub-stage">Coming in ${stage}</span></div>`;
  }

  // Default stubs; later stages overwrite these on window.CFA.views.
  window.CFA.views = Object.assign({
    dashboard() { app.innerHTML = `<h1 class="view-title">Dashboard</h1><p class="view-sub">Your study progress at a glance.</p>` + stub('📈', 'Progress dashboard', 'Completion %, score history, weak-area flags and an exam-date study plan.', 'Stage 5'); },
    curriculum() { app.innerHTML = stub('📚', 'Curriculum', 'Browse Topic → Module → LOS with study notes.', 'Stage 3'); },
    search() { app.innerHTML = stub('🔎', 'Search', 'Full-text search across notes and module names.', 'Stage 3'); },
    quiz() { app.innerHTML = stub('📝', 'Mock Tests', 'Question bank + timed 90-question mock sessions.', 'Stage 4'); },
    flashcards() { app.innerHTML = stub('🃏', 'Flashcards', 'Spaced-repetition (SM-2) cards for definitions, formulas and standards.', 'Stage 5'); },
    calculators() { app.innerHTML = stub('🧮', 'Calculators', 'Interactive TVM / bond / duration / CAPM widgets with live charts.', 'Stage 6'); },
  }, window.CFA.views || {});

  function render(view, arg) {
    if (!ROUTES.includes(view)) view = 'dashboard';
    currentArg = arg || null;
    document.querySelectorAll('.nav-btn').forEach((b) => b.classList.toggle('active', b.dataset.view === view));
    window.scrollTo(0, 0);
    (window.CFA.views[view] || window.CFA.views.dashboard)(arg);
    try { location.hash = view; } catch (e) {}
  }
  window.CFA.render = render;

  // ---------- Boot ----------
  function boot() {
    initTheme();
    document.querySelectorAll('.nav-btn').forEach((b) => b.addEventListener('click', () => render(b.dataset.view)));
    document.getElementById('brand-home').addEventListener('click', () => render('dashboard'));
    document.getElementById('theme-toggle').addEventListener('click', window.CFA.toggleTheme);
    const start = (location.hash || '').replace('#', '');
    render(ROUTES.includes(start) ? start : 'dashboard');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
