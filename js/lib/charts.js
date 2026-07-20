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

  // XY plot with axes for a series of {x,y} points, optional marker and zero line.
  // opts: { width,height, xlabel,ylabel, marker:{x,y}, zeroLine:bool }
  function plot(points, opts) {
    opts = opts || {};
    const w = opts.width || 520, h = opts.height || 200, padL = 44, padB = 28, padT = 12, padR = 12;
    if (!points.length) return `<svg viewBox="0 0 ${w} ${h}" width="100%"></svg>`;
    const xs = points.map((p) => p.x), ys = points.map((p) => p.y);
    let xmin = Math.min(...xs), xmax = Math.max(...xs);
    let ymin = opts.ymin != null ? opts.ymin : Math.min(...ys), ymax = opts.ymax != null ? opts.ymax : Math.max(...ys);
    if (opts.zeroLine) { ymin = Math.min(ymin, 0); ymax = Math.max(ymax, 0); }
    const xspan = Math.max(1e-9, xmax - xmin), yspan = Math.max(1e-9, ymax - ymin);
    const X = (x) => padL + ((x - xmin) / xspan) * (w - padL - padR);
    const Y = (y) => h - padB - ((y - ymin) / yspan) * (h - padT - padB);
    const path = points.map((p, i) => (i ? 'L' : 'M') + X(p.x).toFixed(1) + ' ' + Y(p.y).toFixed(1)).join(' ');

    const ticks = (lo, hi, n) => { const out = []; for (let k = 0; k <= n; k++) out.push(lo + (hi - lo) * k / n); return out; };
    const fmt = (v) => Math.abs(v) >= 1000 || (Math.abs(v) < 0.01 && v !== 0) ? v.toExponential(1) : (Math.round(v * 100) / 100).toString();
    const xt = ticks(xmin, xmax, 4).map((t) => `<text x="${X(t).toFixed(1)}" y="${h - padB + 14}" class="axis-t" text-anchor="middle">${fmt(t)}</text>`).join('');
    const yt = ticks(ymin, ymax, 4).map((t) => `<text x="${padL - 6}" y="${(Y(t) + 3).toFixed(1)}" class="axis-t" text-anchor="end">${fmt(t)}</text>`).join('');

    const zero = (opts.zeroLine && ymin < 0 && ymax > 0)
      ? `<line x1="${padL}" y1="${Y(0).toFixed(1)}" x2="${w - padR}" y2="${Y(0).toFixed(1)}" class="chart-guide"/>` : '';
    const marker = opts.marker
      ? `<circle cx="${X(opts.marker.x).toFixed(1)}" cy="${Y(opts.marker.y).toFixed(1)}" r="5" class="chart-marker"/>
         <line x1="${X(opts.marker.x).toFixed(1)}" y1="${padT}" x2="${X(opts.marker.x).toFixed(1)}" y2="${h - padB}" class="chart-guide" stroke-dasharray="3 3"/>` : '';

    return `<svg viewBox="0 0 ${w} ${h}" width="100%" class="chart-plot" role="img" aria-label="${opts.title || 'chart'}">
      <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${h - padB}" class="axis-l"/>
      <line x1="${padL}" y1="${h - padB}" x2="${w - padR}" y2="${h - padB}" class="axis-l"/>
      ${zero}
      <path d="${path}" fill="none" stroke="currentColor" stroke-width="2"/>
      ${marker}${xt}${yt}
      ${opts.xlabel ? `<text x="${(padL + w - padR) / 2}" y="${h - 2}" class="axis-lab" text-anchor="middle">${opts.xlabel}</text>` : ''}
    </svg>`;
  }

  return { line, plot };
})();
