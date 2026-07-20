/* Full-text search across module names, LOS text and study notes. */
(function () {
  'use strict';
  window.CFA = window.CFA || {};
  window.CFA.views = window.CFA.views || {};

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function stripHtml(html) { return String(html).replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim(); }

  // Build the index once (module name + LOS + plain-text notes).
  let INDEX = null;
  function buildIndex() {
    if (INDEX) return INDEX;
    INDEX = window.CFA.curriculum.allModules().map((m) => {
      const los = window.CFA.content.los(m.id).map((l) => l.text).join(' ');
      const notesText = stripHtml(window.CFA.content.notes(m.id));
      return {
        id: m.id, name: m.name, topicId: m.topicId, topicName: m.topicName, status: m.status,
        hay: (m.name + ' ' + m.topicName + ' ' + los + ' ' + notesText).toLowerCase(),
        notesText,
      };
    });
    return INDEX;
  }

  function snippet(text, q) {
    if (!text) return '';
    const i = text.toLowerCase().indexOf(q.toLowerCase());
    if (i < 0) return text.slice(0, 140) + (text.length > 140 ? '…' : '');
    const start = Math.max(0, i - 60);
    const raw = (start > 0 ? '…' : '') + text.slice(start, i + q.length + 80) + '…';
    const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
    return esc(raw).replace(re, '<mark>$1</mark>');
  }

  window.CFA.views.search = function () {
    const app = document.getElementById('app');
    app.innerHTML = `
      <h1 class="view-title">Search</h1>
      <p class="view-sub">Search across module names, learning outcomes and study notes.</p>
      <input class="search-bar" id="search-input" placeholder="e.g. duration, put–call parity, mosaic theory, WACC…" autofocus>
      <div class="search-meta" id="search-meta"></div>
      <div id="search-results"></div>`;

    const input = document.getElementById('search-input');
    const meta = document.getElementById('search-meta');
    const results = document.getElementById('search-results');

    function run() {
      const q = input.value.trim();
      if (q.length < 2) { meta.textContent = 'Type at least 2 characters.'; results.innerHTML = ''; return; }
      const idx = buildIndex();
      const ql = q.toLowerCase();
      const hits = idx.filter((r) => r.hay.includes(ql));
      meta.textContent = `${hits.length} module${hits.length === 1 ? '' : 's'} match "${q}".`;
      results.innerHTML = hits.map((r) => `
        <div class="search-result" data-module="${r.id}">
          <div class="sr-top">
            <span class="sr-topic">${esc(r.topicName)}</span>
            <span class="sr-name">${esc(r.name)}</span>
            ${r.status !== 'unchanged' ? `<span class="tag ${r.status}">${r.status}</span>` : ''}
          </div>
          <div class="sr-snippet">${snippet(r.notesText || r.name, q)}</div>
        </div>`).join('') || '<p class="view-sub">No modules match. Try a broader term.</p>';
      results.querySelectorAll('.search-result').forEach((el) =>
        el.addEventListener('click', () => window.CFA.openModule(el.dataset.module)));
    }

    let t = null;
    input.addEventListener('input', () => { clearTimeout(t); t = setTimeout(run, 150); });
  };
})();
