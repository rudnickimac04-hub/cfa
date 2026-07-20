/* Tiny dependency-free SVG chart helpers (theme-aware via currentColor). */
window.CFA = window.CFA || {};
window.CFA.charts = (function () {
  'use strict';

  // Line chart of numeric values (e.g. score % over time). Returns an SVG string.
  function line(values, opts) {
    opts = opts || {};
    const w = opts.width || 520, h = opts.height || 120, pad = 24;
    const max = opts.max != null ? opts.max : Math.max(100, ...values);
    const min = opts.min != null ? opts.min : 0;
    if (!values.length) return `<svg viewBox="0 0 ${w} ${h}" width="100%"></svg>`;
    const span = Math.max(1, max - min);
    const x = (i) => pad + (values.length === 1 ? (w - 2 * pad) / 2 : (i / (values.length - 1)) * (w - 2 * pad));
    const y = (v) => h - pad - ((v - min) / span) * (h - 2 * pad);
    const pts = values.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
    const dots = values.map((v, i) => `<circle cx="${x(i).toFixed(1)}" cy="${y(v).toFixed(1)}" r="3" fill="currentColor"/>`).join('');
    // 70% benchmark guide line
    const yb = y(opts.guide != null ? opts.guide : 70);
    return `<svg viewBox="0 0 ${w} ${h}" width="100%" class="chart-line" role="img" aria-label="score history">
      <line x1="${pad}" y1="${yb.toFixed(1)}" x2="${w - pad}" y2="${yb.toFixed(1)}" class="chart-guide" stroke-dasharray="4 4"/>
      <polyline points="${pts}" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
      ${dots}
    </svg>`;
  }

  return { line };
})();
