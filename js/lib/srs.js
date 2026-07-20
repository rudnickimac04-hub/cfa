/* SM-2 spaced-repetition scheduler.
 * Card state: { interval (days), ease (EF), due (epoch ms), reps }.
 * quality: 1 = Again, 3 = Hard, 4 = Good, 5 = Easy. */
window.CFA = window.CFA || {};
window.CFA.srs = (function () {
  'use strict';
  const DAY = 86400000;

  function fresh() { return { interval: 0, ease: 2.5, due: 0, reps: 0 }; }

  function review(state, quality) {
    let { interval, ease, reps } = state || fresh();
    if (quality < 3) {
      reps = 0;
      interval = 0;               // relearn: due again right away
    } else {
      reps += 1;
      if (reps === 1) interval = 1;
      else if (reps === 2) interval = 6;
      else interval = Math.round(interval * ease);
    }
    ease = ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    if (ease < 1.3) ease = 1.3;
    return { interval, ease, due: Date.now() + interval * DAY, reps };
  }

  function isDue(state) { return !state || (state.due || 0) <= Date.now(); }
  function isNew(state) { return !state || state.reps === 0 && !state.due; }

  return { fresh, review, isDue, isNew, DAY };
})();
