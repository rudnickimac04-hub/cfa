/* Curriculum browser (skeleton): Topic -> Module tree with 2027 change tags.
 * Per-module notes / LOS detail are wired up in Stage 3. */
(function () {
  'use strict';
  window.CFA = window.CFA || {};
  window.CFA.views = window.CFA.views || {};

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  const TAG_LABEL = { new: 'New', revised: 'Revised', unchanged: '=' };

  window.CFA.views.curriculum = function (openTopicId) {
    const app = document.getElementById('app');
    const topics = window.CFA.curriculum.topics();
    const store = window.CFA.store;

    app.innerHTML = `
      <h1 class="view-title">Curriculum</h1>
      <p class="view-sub">CFA Level I, 2027 curriculum — ${window.CFA.curriculum.counts().modules} learning modules across
      ${topics.length} topics. Tags show what changed vs 2026:
      <span class="tag new">New</span> <span class="tag revised">Revised</span> <span class="tag unchanged">=</span></p>
      <div id="topic-tree"></div>`;

    const tree = document.getElementById('topic-tree');
    tree.innerHTML = topics.map((t) => {
      const changed = t.modules.filter((m) => m.status !== 'unchanged').length;
      return `
      <div class="topic-block" data-topic="${t.id}">
        <div class="topic-head" data-toggle="${t.id}">
          <span class="chev">▶</span>
          <h3>${esc(t.name)}</h3>
          ${changed ? `<span class="tag revised" title="${changed} modules new or revised for 2027">${changed} changed</span>` : ''}
          <span class="weight">${esc(t.weight)}</span>
        </div>
        <div class="module-list" id="ml-${t.id}">
          ${t.modules.map((m, i) => `
            <div class="module-item" data-module="${m.id}">
              <span class="m-idx">${i + 1}.</span>
              <span class="m-name">${esc(m.name)}</span>
              ${m.status !== 'unchanged' ? `<span class="tag ${m.status}">${TAG_LABEL[m.status]}</span>` : ''}
              <span class="m-check" id="chk-${m.id}">${store.isModuleDone(m.id) ? '✓' : ''}</span>
            </div>`).join('')}
        </div>
      </div>`;
    }).join('');

    function toggleTopic(id, force) {
      const head = tree.querySelector(`.topic-head[data-toggle="${id}"]`);
      const list = document.getElementById('ml-' + id);
      const open = force !== undefined ? force : !list.classList.contains('open');
      list.classList.toggle('open', open);
      head.classList.toggle('open', open);
    }

    tree.querySelectorAll('.topic-head').forEach((h) => h.addEventListener('click', () => toggleTopic(h.dataset.toggle)));
    tree.querySelectorAll('.module-item').forEach((mi) => mi.addEventListener('click', () => openModule(mi.dataset.module)));

    if (openTopicId) toggleTopic(openTopicId, true);
  };

  // Module detail: LOS + study notes + personal notes + completion.
  const LOS_TAG = { new: 'New', changed: 'Changed', unchanged: '=' };

  function openModule(moduleId) {
    const app = document.getElementById('app');
    const m = window.CFA.curriculum.module(moduleId);
    if (!m) return;
    const store = window.CFA.store;
    const content = window.CFA.content;
    const los = content.los(moduleId);
    const notes = content.notes(moduleId);
    const userNote = store.notes()[moduleId] || '';
    const done = store.isModuleDone(moduleId);

    const losHtml = los.length
      ? `<ul class="los-list">${los.map((l) => `
          <li class="los-item">
            ${l.status && l.status !== 'unchanged' ? `<span class="tag ${l.status}">${LOS_TAG[l.status] || l.status}</span>` : ''}
            <span>The candidate should be able to <span class="los-verb">${esc(l.text)}</span>.</span>
          </li>`).join('')}</ul>`
      : `<p class="view-sub">Learning outcomes for this module are being added.</p>`;

    const notesHtml = notes
      ? `<div class="note-body">${notes}</div>`
      : `<div class="stub" style="padding:30px 10px"><span class="stub-icon">📝</span>
           <p class="view-sub">Study notes for this module are coming soon. Higher-weight topics (Ethics, FSA, Equities, Fixed Income) are written first.</p></div>`;

    app.innerHTML = `
      <button class="btn-secondary" id="mod-back">← Back to curriculum</button>
      <div class="card" style="margin-top:14px">
        <div class="mod-meta">${esc(m.topicName)} · ${esc(m.topicWeight || '')}</div>
        <h1 class="view-title" style="margin-bottom:2px">${esc(m.name)}
          ${m.status !== 'unchanged' ? `<span class="tag ${m.status}" style="vertical-align:middle">${m.status}</span>` : ''}</h1>

        <div class="mod-section">
          <h3>Learning outcomes</h3>
          ${losHtml}
        </div>

        <div class="mod-section">
          <h3>Study notes</h3>
          ${notesHtml}
        </div>

        <div class="mod-section">
          <h3>My notes <span class="note-saved hidden" id="note-saved">saved ✓</span></h3>
          <textarea class="user-note" id="user-note" placeholder="Add your own notes for this module…">${esc(userNote)}</textarea>
        </div>

        <label class="mod-done-row">
          <input type="checkbox" id="mod-done" ${done ? 'checked' : ''}> Mark this module as completed
        </label>
      </div>`;

    document.getElementById('mod-back').addEventListener('click', () => window.CFA.render('curriculum', m.topicId));
    document.getElementById('mod-done').addEventListener('change', (e) => store.setModuleDone(moduleId, e.target.checked));

    const ta = document.getElementById('user-note');
    const savedMsg = document.getElementById('note-saved');
    let t = null;
    ta.addEventListener('input', () => {
      clearTimeout(t);
      t = setTimeout(() => {
        store.saveNote(moduleId, ta.value);
        savedMsg.classList.remove('hidden');
        setTimeout(() => savedMsg.classList.add('hidden'), 1200);
      }, 400);
    });
  }

  // exposed so other views (e.g. Search) can jump straight into a module
  window.CFA.openModule = openModule;
})();
