/* Flashcards with SM-2 spaced repetition. State persists in localStorage. */
(function () {
  'use strict';
  window.CFA = window.CFA || {};
  window.CFA.views = window.CFA.views || {};

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  const srs = () => window.CFA.srs;

  function deckStats(cards) {
    const state = window.CFA.store.srs();
    let due = 0, learning = 0, mature = 0, unseen = 0;
    cards.forEach((c) => {
      const s = state[c.id];
      if (!s) { unseen++; due++; }
      else {
        if (srs().isDue(s)) due++;
        if (s.interval >= 21) mature++; else learning++;
      }
    });
    return { due, learning, mature, unseen, total: cards.length };
  }

  window.CFA.views.flashcards = function () {
    const app = document.getElementById('app');
    const topics = window.CFA.curriculum.topics();
    const all = window.CFA.flashcards.all();
    const overall = deckStats(all);

    app.innerHTML = `
      <h1 class="view-title">Flashcards</h1>
      <p class="view-sub">Spaced repetition (SM-2). Cards you find hard come back sooner; cards you know are spaced further out. Progress is saved locally.</p>
      <div class="stat-row">
        <div class="card stat"><div class="stat-num">${overall.due}</div><div class="stat-label">due now</div></div>
        <div class="card stat"><div class="stat-num">${overall.learning}</div><div class="stat-label">learning</div></div>
        <div class="card stat"><div class="stat-num">${overall.mature}</div><div class="stat-label">known (21d+)</div></div>
        <div class="card stat"><div class="stat-num">${overall.total}</div><div class="stat-label">total cards</div></div>
      </div>
      <div class="card" style="max-width:640px">
        <label class="q-label">Deck</label>
        <select id="fc-deck" class="q-select">
          <option value="">All topics</option>
          ${topics.map((t) => `<option value="${t.id}">${esc(t.name)}</option>`).join('')}
        </select>
        <label style="display:flex;align-items:center;gap:8px;font-size:.9rem;margin-top:12px;cursor:pointer">
          <input type="checkbox" id="fc-ahead"> Study ahead (include cards not yet due)
        </label>
        <div id="fc-deckmeta" class="search-meta"></div>
        <div style="margin-top:12px"><button class="btn-primary" id="fc-start">Start review</button></div>
      </div>`;

    const deckSel = document.getElementById('fc-deck');
    const ahead = document.getElementById('fc-ahead');
    const meta = document.getElementById('fc-deckmeta');

    function currentCards() {
      const d = deckSel.value ? window.CFA.flashcards.byTopic(deckSel.value) : all;
      return d;
    }
    function refreshMeta() {
      const s = deckStats(currentCards());
      meta.textContent = ahead.checked
        ? `${s.total} cards in this deck (${s.due} due).`
        : `${s.due} card${s.due === 1 ? '' : 's'} due in this deck.`;
    }
    deckSel.addEventListener('change', refreshMeta);
    ahead.addEventListener('change', refreshMeta);
    refreshMeta();

    document.getElementById('fc-start').addEventListener('click', () => {
      const state = window.CFA.store.srs();
      let queue = currentCards();
      if (!ahead.checked) queue = queue.filter((c) => srs().isDue(state[c.id]));
      if (!queue.length) { meta.textContent = 'Nothing due — tick "study ahead" or come back later.'; return; }
      queue = queue.slice().sort(() => Math.random() - 0.5);
      runSession(queue);
    });
  };

  function runSession(queue) {
    const app = document.getElementById('app');
    let reviewed = 0;
    const total = queue.length;

    function next() {
      if (!queue.length) return done();
      const card = queue.shift();
      renderCard(card, false);
    }

    function renderCard(card, revealed) {
      const m = window.CFA.curriculum.module(card.moduleId);
      app.innerHTML = `
        <div class="quiz-status">
          <strong>Flashcards${reviewed ? ' · ' + reviewed + ' reviewed' : ''}</strong>
          <div class="quiz-progressbar"><div style="width:${(reviewed / total) * 100}%"></div></div>
          <span class="view-sub">${queue.length + 1} left</span>
        </div>
        <div class="card flashcard">
          <div class="fc-tags">
            <span class="tag ${card.type === 'formula' ? 'revised' : card.type === 'standard' ? 'new' : 'unchanged'}">${card.type}</span>
            ${m ? `<span class="fc-mod">${esc(m.topicName)}</span>` : ''}
          </div>
          <div class="fc-front">${card.front}</div>
          <div class="fc-back ${revealed ? '' : 'hidden'}" id="fc-back">${card.back}
            ${m ? `<div class="fc-modlink"><a href="#" id="fc-open">Open module: ${esc(m.name)} →</a></div>` : ''}
          </div>
          ${revealed
            ? `<div class="fc-grades">
                 <button class="grade again" data-q="1">Again</button>
                 <button class="grade hard" data-q="3">Hard</button>
                 <button class="grade good" data-q="4">Good</button>
                 <button class="grade easy" data-q="5">Easy</button>
               </div>`
            : `<div class="fc-reveal"><button class="btn-primary" id="fc-flip">Show answer</button></div>`}
          <div style="margin-top:14px;text-align:center"><button class="btn-secondary" id="fc-end">End session</button></div>
        </div>`;

      document.getElementById('fc-end').addEventListener('click', done);
      const open = document.getElementById('fc-open');
      if (open) open.addEventListener('click', (e) => { e.preventDefault(); window.CFA.openModule(card.moduleId); });

      if (!revealed) {
        document.getElementById('fc-flip').addEventListener('click', () => renderCard(card, true));
      } else {
        app.querySelectorAll('.grade').forEach((b) => b.addEventListener('click', () => {
          const q = parseInt(b.dataset.q, 10);
          const store = window.CFA.store;
          const stateAll = store.srs();
          const newState = window.CFA.srs.review(stateAll[card.id], q);
          stateAll[card.id] = newState;
          store.saveSrs(stateAll);
          reviewed++;
          if (q < 3) queue.push(card); // "Again" → re-queue this session
          next();
        }));
      }
    }

    function done() {
      app.innerHTML = `
        <div class="card result-summary">
          <div class="result-score pass">${reviewed}</div>
          <p>cards reviewed this session</p>
          <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:8px">
            <button class="btn-primary" id="fc-more">Back to decks</button>
            <button class="btn-secondary" id="fc-dash">View dashboard</button>
          </div>
        </div>`;
      document.getElementById('fc-more').addEventListener('click', () => window.CFA.render('flashcards'));
      document.getElementById('fc-dash').addEventListener('click', () => window.CFA.render('dashboard'));
    }

    next();
  }
})();
