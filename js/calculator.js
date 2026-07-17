/* Financial calculator: standard ops, TVM solver (BA II Plus convention), NPV/IRR. */
(function () {
  'use strict';

  const calcEl = document.getElementById('calculator');
  const toggleBtn = document.getElementById('calc-toggle');
  const stateEl = document.getElementById('calc-state');
  const closeBtn = document.getElementById('calc-close');

  // ---------- Show / hide toggle ----------
  function setCalcVisible(on) {
    calcEl.classList.toggle('hidden', !on);
    calcEl.setAttribute('aria-hidden', String(!on));
    toggleBtn.classList.toggle('on', on);
    stateEl.textContent = on ? 'ON' : 'OFF';
    try { localStorage.setItem('cfa_calc_on', on ? '1' : '0'); } catch (e) {}
  }
  toggleBtn.addEventListener('click', () => setCalcVisible(calcEl.classList.contains('hidden')));
  closeBtn.addEventListener('click', () => setCalcVisible(false));
  try { if (localStorage.getItem('cfa_calc_on') === '1') setCalcVisible(true); } catch (e) {}

  // ---------- Dragging ----------
  const handle = document.getElementById('calc-drag-handle');
  let drag = null;
  handle.addEventListener('pointerdown', (e) => {
    if (e.target.closest('button')) return;
    const r = calcEl.getBoundingClientRect();
    drag = { dx: e.clientX - r.left, dy: e.clientY - r.top };
    handle.setPointerCapture(e.pointerId);
  });
  handle.addEventListener('pointermove', (e) => {
    if (!drag) return;
    const x = Math.min(Math.max(0, e.clientX - drag.dx), window.innerWidth - calcEl.offsetWidth);
    const y = Math.min(Math.max(0, e.clientY - drag.dy), window.innerHeight - 40);
    calcEl.style.left = x + 'px';
    calcEl.style.top = y + 'px';
    calcEl.style.right = 'auto';
    calcEl.style.bottom = 'auto';
  });
  handle.addEventListener('pointerup', () => { drag = null; });

  // ---------- Mode tabs ----------
  document.querySelectorAll('.calc-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.calc-tab').forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      ['std', 'tvm', 'cf'].forEach((m) => {
        document.getElementById('calc-pane-' + m).classList.toggle('hidden', m !== tab.dataset.mode);
      });
    });
  });

  // ---------- Standard calculator ----------
  const display = document.getElementById('calc-display');
  let acc = null, pendingOp = null, entering = true, powBase = null;

  function current() { return parseFloat(display.value) || 0; }
  function show(v) {
    if (!isFinite(v)) { display.value = 'Error'; entering = true; return; }
    const s = Math.abs(v) >= 1e12 || (Math.abs(v) < 1e-9 && v !== 0)
      ? v.toExponential(6)
      : String(Math.round(v * 1e10) / 1e10);
    display.value = s;
  }
  function applyPending() {
    const x = current();
    if (powBase !== null) { const r = Math.pow(powBase, x); powBase = null; return r; }
    if (acc === null || pendingOp === null) return x;
    switch (pendingOp) {
      case '+': return acc + x;
      case '-': return acc - x;
      case '*': return acc * x;
      case '/': return acc / x;
    }
    return x;
  }

  document.querySelectorAll('#calc-pane-std .ck').forEach((btn) => {
    btn.addEventListener('click', () => {
      const k = btn.dataset.k;
      if (/^[0-9]$/.test(k)) {
        display.value = entering && display.value !== '0' ? display.value + k : k;
        entering = true;
        if (display.value === '0' + k) display.value = k;
      } else if (k === '.') {
        if (!entering || display.value === '') { display.value = '0.'; entering = true; }
        else if (!display.value.includes('.')) display.value += '.';
      } else if (k === '+/-') {
        display.value = display.value.startsWith('-') ? display.value.slice(1) : '-' + display.value;
      } else if (k === 'back') {
        display.value = display.value.length > 1 ? display.value.slice(0, -1) : '0';
      } else if (k === 'CE') {
        display.value = '0'; entering = true;
      } else if (k === 'C') {
        display.value = '0'; acc = null; pendingOp = null; powBase = null; entering = true;
      } else if (['+', '-', '*', '/'].includes(k)) {
        acc = applyPending(); pendingOp = k; show(acc); entering = false;
        display.value = String(acc); entering = false;
      } else if (k === '=') {
        show(applyPending()); acc = null; pendingOp = null; entering = false;
      } else if (k === 'pow') {
        powBase = current(); display.value = '0'; entering = true;
      } else {
        const x = current();
        const fns = {
          sqrt: Math.sqrt(x), x2: x * x, inv: 1 / x, ln: Math.log(x),
          ex: Math.exp(x), pct: x / 100,
          fact: (x >= 0 && x === Math.floor(x) && x <= 170)
            ? Array.from({ length: x }, (_, i) => i + 1).reduce((a, b) => a * b, 1)
            : NaN,
        };
        show(fns[k]); entering = false;
      }
    });
  });

  // ---------- TVM solver ----------
  const tvmIds = { n: 'tvm-n', iy: 'tvm-iy', pv: 'tvm-pv', pmt: 'tvm-pmt', fv: 'tvm-fv' };
  const tvmResult = document.getElementById('tvm-result');

  function tvmRead() {
    const v = {};
    for (const key of Object.keys(tvmIds)) {
      const raw = document.getElementById(tvmIds[key]).value;
      v[key] = raw === '' ? 0 : parseFloat(raw);
    }
    v.begin = document.getElementById('tvm-begin').checked;
    return v;
  }

  // Equation of value: PV + PMT*k*[(1-(1+i)^-N)/i] + FV*(1+i)^-N = 0, k=(1+i) if BGN
  function tvmF(v, i) {
    const k = v.begin ? 1 + i : 1;
    if (Math.abs(i) < 1e-12) return v.pv + v.pmt * v.n + v.fv;
    const d = Math.pow(1 + i, -v.n);
    return v.pv + v.pmt * k * (1 - d) / i + v.fv * d;
  }

  function fmt(x, dp = 6) {
    return Number(x.toFixed(dp)).toLocaleString('en-US', { maximumFractionDigits: dp });
  }
  function tvmShow(label, val) {
    tvmResult.classList.remove('error');
    tvmResult.textContent = label + ' = ' + fmt(val);
  }
  function tvmError(msg) {
    tvmResult.classList.add('error');
    tvmResult.textContent = msg;
  }

  function solveBisect(f, lo, hi) {
    let flo = f(lo), fhi = f(hi);
    if (isNaN(flo) || isNaN(fhi) || flo * fhi > 0) return null;
    for (let it = 0; it < 200; it++) {
      const mid = (lo + hi) / 2, fm = f(mid);
      if (Math.abs(fm) < 1e-10 || (hi - lo) / 2 < 1e-12) return mid;
      if (flo * fm < 0) { hi = mid; fhi = fm; } else { lo = mid; flo = fm; }
    }
    return (lo + hi) / 2;
  }

  document.querySelectorAll('.tvm-solve').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.solve;
      const v = tvmRead();
      try {
        let result;
        if (target === 'fv') {
          const i = v.iy / 100, k = v.begin ? 1 + i : 1;
          if (Math.abs(i) < 1e-12) result = -(v.pv + v.pmt * v.n);
          else {
            const g = Math.pow(1 + i, v.n);
            result = -(v.pv * g + v.pmt * k * (g - 1) / i);
          }
          document.getElementById(tvmIds.fv).value = result.toFixed(6);
          tvmShow('FV', result);
        } else if (target === 'pv') {
          const i = v.iy / 100, k = v.begin ? 1 + i : 1;
          if (Math.abs(i) < 1e-12) result = -(v.fv + v.pmt * v.n);
          else {
            const d = Math.pow(1 + i, -v.n);
            result = -(v.pmt * k * (1 - d) / i + v.fv * d);
          }
          document.getElementById(tvmIds.pv).value = result.toFixed(6);
          tvmShow('PV', result);
        } else if (target === 'pmt') {
          const i = v.iy / 100, k = v.begin ? 1 + i : 1;
          if (Math.abs(i) < 1e-12) result = -(v.pv + v.fv) / v.n;
          else {
            const d = Math.pow(1 + i, -v.n);
            result = -(v.pv + v.fv * d) / (k * (1 - d) / i);
          }
          document.getElementById(tvmIds.pmt).value = result.toFixed(6);
          tvmShow('PMT', result);
        } else if (target === 'n') {
          const i = v.iy / 100;
          if (Math.abs(i) < 1e-12) {
            if (v.pmt === 0) throw new Error('Cannot solve: PMT and I/Y are both 0.');
            result = -(v.pv + v.fv) / v.pmt;
          } else {
            const k = v.begin ? 1 + i : 1;
            const a = v.pmt * k / i;
            const num = -(v.fv - a), den = v.pv + a;
            const ratio = num / den;
            if (!(ratio > 0)) throw new Error('No solution for N with these inputs.');
            result = Math.log(ratio) / Math.log(1 + i);
          }
          document.getElementById(tvmIds.n).value = result.toFixed(6);
          tvmShow('N', result);
        } else if (target === 'iy') {
          if (v.pv === 0 && v.pmt === 0) throw new Error('Enter PV or PMT first.');
          const f = (i) => tvmF(v, i);
          let sol = null;
          const brackets = [[1e-9, 0.5], [0.5, 2], [-0.5, -1e-9], [2, 10]];
          for (const [lo, hi] of brackets) { sol = solveBisect(f, lo, hi); if (sol !== null) break; }
          if (sol === null) throw new Error('No I/Y solution found. Check the sign convention (outflows negative).');
          result = sol * 100;
          document.getElementById(tvmIds.iy).value = result.toFixed(6);
          tvmShow('I/Y', result);
        }
      } catch (err) {
        tvmError(err.message || 'Computation error.');
      }
    });
  });

  document.getElementById('tvm-clear').addEventListener('click', () => {
    Object.values(tvmIds).forEach((id) => { document.getElementById(id).value = ''; });
    document.getElementById('tvm-begin').checked = false;
    tvmResult.textContent = '';
  });

  // ---------- Cash flows: NPV / IRR ----------
  const cfList = document.getElementById('cf-list');
  const cfResult = document.getElementById('cf-result');
  let cfCount = 0;

  function addCfRow(value) {
    cfCount++;
    const row = document.createElement('div');
    row.className = 'cf-row';
    row.innerHTML = '<label>CF' + cfCount + '</label>' +
      '<input type="number" step="any" class="cf-input" placeholder="cash flow">' +
      '<button class="cf-del" title="Remove">✕</button>';
    if (value !== undefined) row.querySelector('input').value = value;
    row.querySelector('.cf-del').addEventListener('click', () => {
      row.remove();
      renumberCf();
    });
    cfList.appendChild(row);
  }
  function renumberCf() {
    cfCount = 0;
    cfList.querySelectorAll('.cf-row label').forEach((lab) => { cfCount++; lab.textContent = 'CF' + cfCount; });
  }
  addCfRow(); addCfRow();

  document.getElementById('cf-add').addEventListener('click', () => addCfRow());
  document.getElementById('cf-clear').addEventListener('click', () => {
    cfList.innerHTML = ''; cfCount = 0; addCfRow(); addCfRow();
    document.getElementById('cf0').value = '';
    document.getElementById('cf-rate').value = '';
    cfResult.textContent = '';
  });

  function readFlows() {
    const flows = [parseFloat(document.getElementById('cf0').value) || 0];
    cfList.querySelectorAll('.cf-input').forEach((inp) => {
      flows.push(inp.value === '' ? 0 : parseFloat(inp.value));
    });
    return flows;
  }
  function npv(rate, flows) {
    return flows.reduce((sum, cf, t) => sum + cf / Math.pow(1 + rate, t), 0);
  }

  document.getElementById('cf-npv').addEventListener('click', () => {
    const r = (parseFloat(document.getElementById('cf-rate').value) || 0) / 100;
    const v = npv(r, readFlows());
    cfResult.classList.remove('error');
    cfResult.textContent = 'NPV = ' + fmt(v, 4);
  });

  document.getElementById('cf-irr').addEventListener('click', () => {
    const flows = readFlows();
    const hasPos = flows.some((f) => f > 0), hasNeg = flows.some((f) => f < 0);
    if (!hasPos || !hasNeg) {
      cfResult.classList.add('error');
      cfResult.textContent = 'IRR requires at least one positive and one negative cash flow.';
      return;
    }
    const f = (r) => npv(r, flows);
    let sol = null;
    const brackets = [[-0.9999, 0], [0, 1], [1, 10], [10, 100]];
    for (const [lo, hi] of brackets) { sol = solveBisect(f, lo, hi); if (sol !== null) break; }
    if (sol === null) {
      cfResult.classList.add('error');
      cfResult.textContent = 'No IRR found in range −99.99% to 10,000%.';
    } else {
      cfResult.classList.remove('error');
      cfResult.textContent = 'IRR = ' + fmt(sol * 100, 4) + '%';
    }
  });
})();
