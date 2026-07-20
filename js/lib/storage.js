/* Thin, safe localStorage wrapper. All app state lives here (no backend). */
window.CFA = window.CFA || {};
window.CFA.store = (function () {
  'use strict';

  const KEYS = {
    progress: 'cfa_progress',   // { modulesDone:{id:true}, losDone:{id:true} }
    quizHist: 'cfa_quiz_hist',  // [ {date, scope, n, correct, pct, perModule:{}} ]
    srs: 'cfa_srs',             // { cardId:{interval, ease, due, reps} }
    notes: 'cfa_notes',         // { moduleId: "user note" }
    settings: 'cfa_settings',   // { theme, examDate }
  };

  function read(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; }
    catch (e) { return false; }
  }

  return {
    KEYS,
    // generic
    get: read,
    set: write,

    // settings
    settings() { return read(KEYS.settings, { theme: 'light', examDate: '' }); },
    saveSettings(patch) { const s = Object.assign(this.settings(), patch); write(KEYS.settings, s); return s; },

    // progress
    progress() { return read(KEYS.progress, { modulesDone: {}, losDone: {} }); },
    setModuleDone(id, done) {
      const p = this.progress();
      if (done) p.modulesDone[id] = true; else delete p.modulesDone[id];
      write(KEYS.progress, p); return p;
    },
    isModuleDone(id) { return !!this.progress().modulesDone[id]; },

    // quiz history
    quizHistory() { return read(KEYS.quizHist, []); },
    addQuizResult(r) { const h = this.quizHistory(); h.push(r); write(KEYS.quizHist, h); return h; },
    clearQuizHistory() { write(KEYS.quizHist, []); },

    // spaced repetition
    srs() { return read(KEYS.srs, {}); },
    saveSrs(state) { write(KEYS.srs, state); },

    // user notes
    notes() { return read(KEYS.notes, {}); },
    saveNote(moduleId, text) { const n = this.notes(); n[moduleId] = text; write(KEYS.notes, n); },

    // danger zone
    resetAll() { Object.values(KEYS).forEach((k) => { try { localStorage.removeItem(k); } catch (e) {} }); },
  };
})();
