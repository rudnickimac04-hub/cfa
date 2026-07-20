/* Pure finance math shared by the interactive calculators. No DOM, no state. */
window.CFA = window.CFA || {};
window.CFA.finance = (function () {
  'use strict';

  // ---- Time value of money (BA II Plus sign convention; outflows negative) ----
  // Equation of value: PV + PMT·k·[(1−(1+i)^−N)/i] + FV·(1+i)^−N = 0, k=(1+i) if BGN.
  function tvmSolve(v, target) {
    const i = v.iy / 100, k = v.begin ? 1 + i : 1;
    if (target === 'fv') {
      if (Math.abs(i) < 1e-12) return -(v.pv + v.pmt * v.n);
      const g = Math.pow(1 + i, v.n);
      return -(v.pv * g + v.pmt * k * (g - 1) / i);
    }
    if (target === 'pv') {
      if (Math.abs(i) < 1e-12) return -(v.fv + v.pmt * v.n);
      const d = Math.pow(1 + i, -v.n);
      return -(v.pmt * k * (1 - d) / i + v.fv * d);
    }
    if (target === 'pmt') {
      if (Math.abs(i) < 1e-12) return -(v.pv + v.fv) / v.n;
      const d = Math.pow(1 + i, -v.n);
      return -(v.pv + v.fv * d) / (k * (1 - d) / i);
    }
    if (target === 'n') {
      if (Math.abs(i) < 1e-12) return -(v.pv + v.fv) / v.pmt;
      const a = v.pmt * k / i;
      const ratio = -(v.fv - a) / (v.pv + a);
      if (!(ratio > 0)) throw new Error('No solution for N with these inputs.');
      return Math.log(ratio) / Math.log(1 + i);
    }
    if (target === 'iy') {
      const f = (ii) => {
        const kk = v.begin ? 1 + ii : 1;
        if (Math.abs(ii) < 1e-12) return v.pv + v.pmt * v.n + v.fv;
        const d = Math.pow(1 + ii, -v.n);
        return v.pv + v.pmt * kk * (1 - d) / ii + v.fv * d;
      };
      const r = bisect(f, [[1e-9, 0.5], [0.5, 2], [-0.5, -1e-9], [2, 10]]);
      if (r === null) throw new Error('No I/Y solution (check the sign convention).');
      return r * 100;
    }
    throw new Error('unknown target');
  }

  // balance over time for a TVM stream (for charting): returns [{t, value}]
  function tvmSchedule(v) {
    const i = v.iy / 100;
    const out = [];
    let bal = v.pv;
    out.push({ t: 0, value: bal });
    for (let t = 1; t <= v.n; t++) {
      if (v.begin) bal += v.pmt;
      bal = bal * (1 + i);
      if (!v.begin) bal += v.pmt;
      out.push({ t, value: bal });
    }
    return out;
  }

  // ---- Bonds ----
  // price per 100 face; couponRate & ytm in %, freq payments/year
  function bondPrice(couponRate, years, ytm, freq) {
    freq = freq || 1;
    const n = Math.round(years * freq);
    const c = (couponRate / 100) * 100 / freq;
    const y = (ytm / 100) / freq;
    let p = 0;
    for (let t = 1; t <= n; t++) p += c / Math.pow(1 + y, t);
    p += 100 / Math.pow(1 + y, n);
    return p;
  }
  // numeric effective duration & convexity from repricing at ±Δy (bp)
  function bondRisk(couponRate, years, ytm, freq, bp) {
    bp = bp || 10;
    const dy = bp / 10000;
    const p0 = bondPrice(couponRate, years, ytm, freq);
    const pUp = bondPrice(couponRate, years, ytm + dy * 100, freq);
    const pDn = bondPrice(couponRate, years, ytm - dy * 100, freq);
    const modDur = (pDn - pUp) / (2 * dy * p0);
    const convex = (pUp + pDn - 2 * p0) / (p0 * dy * dy);
    return { price: p0, modDur, convex };
  }

  // ---- CAPM ----
  function capm(rf, beta, erp) { return rf + beta * erp; }

  // ---- NPV / IRR ----
  function npv(rate, flows) { return flows.reduce((s, cf, t) => s + cf / Math.pow(1 + rate, t), 0); }
  function irr(flows) {
    const f = (r) => npv(r, flows);
    return bisect(f, [[-0.9999, 0], [0, 1], [1, 10], [10, 100]]);
  }

  // ---- root finder ----
  function bisect(f, brackets) {
    for (const [lo0, hi0] of brackets) {
      let lo = lo0, hi = hi0, flo = f(lo), fhi = f(hi);
      if (isNaN(flo) || isNaN(fhi) || flo * fhi > 0) continue;
      for (let k = 0; k < 200; k++) {
        const mid = (lo + hi) / 2, fm = f(mid);
        if (Math.abs(fm) < 1e-10 || (hi - lo) / 2 < 1e-12) return mid;
        if (flo * fm < 0) { hi = mid; fhi = fm; } else { lo = mid; flo = fm; }
      }
      return (lo + hi) / 2;
    }
    return null;
  }

  return { tvmSolve, tvmSchedule, bondPrice, bondRisk, capm, npv, irr, bisect };
})();
