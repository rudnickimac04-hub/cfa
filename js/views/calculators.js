/* Interactive formula calculators/simulators with live charts. */
(function () {
  'use strict';
  window.CFA = window.CFA || {};
  window.CFA.views = window.CFA.views || {};
  const fin = () => window.CFA.finance;
  const charts = () => window.CFA.charts;
  const num = (id) => parseFloat(document.getElementById(id).value);

  const TABS = [
    { id: 'tvm', name: 'TVM' },
    { id: 'bond', name: 'Bond price' },
    { id: 'dur', name: 'Duration' },
    { id: 'capm', name: 'CAPM / SML' },
    { id: 'npv', name: 'NPV / IRR' },
  ];

  window.CFA.views.calculators = function (which) {
    const app = document.getElementById('app');
    const active = which || 'tvm';
    app.innerHTML = `
      <h1 class="view-title">Calculators &amp; simulators</h1>
      <p class="view-sub">Change any input and the result and chart update in real time.</p>
      <div class="calc-tabs">${TABS.map((t) => `<button class="calc-tab ${t.id === active ? 'active' : ''}" data-tab="${t.id}">${t.name}</button>`).join('')}</div>
      <div id="calc-pane"></div>`;
    app.querySelectorAll('.calc-tab').forEach((b) => b.addEventListener('click', () => window.CFA.render('calculators', b.dataset.tab)));
    ({ tvm: tvmWidget, bond: bondWidget, dur: durWidget, capm: capmWidget, npv: npvWidget }[active])();
  };

  function pane() { return document.getElementById('calc-pane'); }
  function fmt(x, d) { return isFinite(x) ? Number(x.toFixed(d == null ? 4 : d)).toLocaleString('en-US', { maximumFractionDigits: d == null ? 4 : d }) : '—'; }

  // ---------- TVM ----------
  function tvmWidget() {
    pane().innerHTML = `
      <div class="calc-card">
        <div class="calc-inputs">
          <label>Solve for
            <select id="t-solve" class="q-select">
              <option value="fv">FV</option><option value="pv">PV</option>
              <option value="pmt">PMT</option><option value="n">N</option><option value="iy">I/Y</option>
            </select></label>
          <label>N (periods) <input type="number" id="t-n" value="10" step="any"></label>
          <label>I/Y (% per period) <input type="number" id="t-iy" value="8" step="any"></label>
          <label>PV <input type="number" id="t-pv" value="-1000" step="any"></label>
          <label>PMT <input type="number" id="t-pmt" value="0" step="any"></label>
          <label>FV <input type="number" id="t-fv" value="0" step="any"></label>
          <label class="chk"><input type="checkbox" id="t-begin"> Payments at start (BGN)</label>
        </div>
        <div class="calc-out"><div class="calc-result" id="t-res"></div>
          <div class="calc-chart" id="t-chart"></div>
          <p class="dash-legend">Balance of the investment over time (sign convention: outflows negative).</p></div>
      </div>`;
    const ids = ['t-n', 't-iy', 't-pv', 't-pmt', 't-fv', 't-begin', 't-solve'];
    function update() {
      const solve = document.getElementById('t-solve').value;
      // disable the field being solved
      ['n', 'iy', 'pv', 'pmt', 'fv'].forEach((k) => { document.getElementById('t-' + k).disabled = (k === solve); });
      const v = { n: num('t-n'), iy: num('t-iy'), pv: num('t-pv'), pmt: num('t-pmt'), fv: num('t-fv'), begin: document.getElementById('t-begin').checked };
      const res = document.getElementById('t-res');
      try {
        const out = fin().tvmSolve(v, solve);
        v[solve] = out;
        document.getElementById('t-' + solve).value = Number(out.toFixed(6)); // keep inputs coherent when switching target
        res.classList.remove('bad');
        res.innerHTML = `<span class="cr-label">${solve.toUpperCase()} =</span> ${fmt(out)}`;
        const sched = fin().tvmSchedule(v).map((p) => ({ x: p.t, y: p.value }));
        document.getElementById('t-chart').innerHTML = charts().plot(sched, { xlabel: 'period', zeroLine: true, title: 'balance over time' });
      } catch (e) { res.classList.add('bad'); res.textContent = e.message; }
    }
    ids.forEach((id) => document.getElementById(id).addEventListener('input', update));
    document.getElementById('t-solve').addEventListener('change', update);
    update();
  }

  // ---------- Bond price ----------
  function bondWidget() {
    pane().innerHTML = `
      <div class="calc-card">
        <div class="calc-inputs">
          <label>Coupon rate (% annual) <input type="number" id="b-c" value="5" step="any"></label>
          <label>Years to maturity <input type="number" id="b-y" value="10" step="any"></label>
          <label>YTM (% annual) <input type="range" id="b-ytm-r" min="0.5" max="15" step="0.1" value="6">
            <input type="number" id="b-ytm" value="6" step="any" class="inline-num"></label>
          <label>Coupons per year
            <select id="b-f" class="q-select"><option value="1">1 (annual)</option><option value="2" selected>2 (semiannual)</option></select></label>
        </div>
        <div class="calc-out"><div class="calc-result" id="b-res"></div>
          <div class="calc-chart" id="b-chart"></div>
          <p class="dash-legend">Price–yield curve (per 100 face). Note the convex shape; the dot is your YTM.</p></div>
      </div>`;
    function update(src) {
      // keep slider and number in sync
      if (src === 'r') document.getElementById('b-ytm').value = document.getElementById('b-ytm-r').value;
      if (src === 'n') document.getElementById('b-ytm-r').value = document.getElementById('b-ytm').value;
      const c = num('b-c'), y = num('b-y'), ytm = num('b-ytm'), f = parseInt(document.getElementById('b-f').value, 10);
      const price = fin().bondPrice(c, y, ytm, f);
      const rel = ytm < c ? 'premium' : ytm > c ? 'discount' : 'par';
      document.getElementById('b-res').innerHTML = `<span class="cr-label">Price =</span> ${fmt(price, 3)} <span class="cr-tag">(${rel})</span>`;
      const pts = [];
      for (let yy = 0.5; yy <= 15; yy += 0.25) pts.push({ x: yy, y: fin().bondPrice(c, y, yy, f) });
      document.getElementById('b-chart').innerHTML = charts().plot(pts, { xlabel: 'YTM %', marker: { x: ytm, y: price }, title: 'price-yield' });
    }
    document.getElementById('b-ytm-r').addEventListener('input', () => update('r'));
    document.getElementById('b-ytm').addEventListener('input', () => update('n'));
    ['b-c', 'b-y', 'b-f'].forEach((id) => document.getElementById(id).addEventListener('input', () => update()));
    update();
  }

  // ---------- Duration & convexity ----------
  function durWidget() {
    pane().innerHTML = `
      <div class="calc-card">
        <div class="calc-inputs">
          <label>Coupon rate (% annual) <input type="number" id="d-c" value="5" step="any"></label>
          <label>Years to maturity <input type="number" id="d-y" value="10" step="any"></label>
          <label>YTM (% annual) <input type="number" id="d-ytm" value="6" step="any"></label>
          <label>Coupons per year
            <select id="d-f" class="q-select"><option value="1">1</option><option value="2" selected>2</option></select></label>
          <label>Yield change Δy (bp) <input type="range" id="d-dy-r" min="-300" max="300" step="10" value="100">
            <input type="number" id="d-dy" value="100" step="10" class="inline-num"></label>
        </div>
        <div class="calc-out"><div class="calc-result" id="d-res"></div>
          <div class="calc-chart" id="d-chart"></div>
          <p class="dash-legend">Actual % price change vs yield change; the straight duration estimate ignores the curvature (convexity).</p></div>
      </div>`;
    function update(src) {
      if (src === 'r') document.getElementById('d-dy').value = document.getElementById('d-dy-r').value;
      if (src === 'n') document.getElementById('d-dy-r').value = document.getElementById('d-dy').value;
      const c = num('d-c'), y = num('d-y'), ytm = num('d-ytm'), f = parseInt(document.getElementById('d-f').value, 10);
      const dyBp = num('d-dy'), dy = dyBp / 10000;
      const r = fin().bondRisk(c, y, ytm, f);
      const durEst = -r.modDur * dy * 100;
      const convEst = (-r.modDur * dy + 0.5 * r.convex * dy * dy) * 100;
      const actual = (fin().bondPrice(c, y, ytm + dyBp / 100, f) / r.price - 1) * 100;
      document.getElementById('d-res').innerHTML =
        `<span class="cr-label">ModDur</span> ${fmt(r.modDur, 3)} · <span class="cr-label">Convexity</span> ${fmt(r.convex, 1)}<br>
         at Δy ${dyBp} bp → duration est <strong>${fmt(durEst, 3)}%</strong>, +convexity <strong>${fmt(convEst, 3)}%</strong>, actual <strong>${fmt(actual, 3)}%</strong>`;
      const pts = [];
      for (let b = -300; b <= 300; b += 20) { const d2 = b / 10000; pts.push({ x: b, y: (fin().bondPrice(c, y, ytm + b / 100, f) / r.price - 1) * 100 }); }
      document.getElementById('d-chart').innerHTML = charts().plot(pts, { xlabel: 'Δy (bp)', zeroLine: true, marker: { x: dyBp, y: actual }, title: 'price change' });
    }
    document.getElementById('d-dy-r').addEventListener('input', () => update('r'));
    document.getElementById('d-dy').addEventListener('input', () => update('n'));
    ['d-c', 'd-y', 'd-ytm', 'd-f'].forEach((id) => document.getElementById(id).addEventListener('input', () => update()));
    update();
  }

  // ---------- CAPM / SML ----------
  function capmWidget() {
    pane().innerHTML = `
      <div class="calc-card">
        <div class="calc-inputs">
          <label>Risk-free rate Rf (%) <input type="number" id="c-rf" value="3" step="any"></label>
          <label>Equity risk premium (%) <input type="number" id="c-erp" value="6" step="any"></label>
          <label>Beta (β) <input type="range" id="c-b-r" min="0" max="2.5" step="0.05" value="1.2">
            <input type="number" id="c-b" value="1.2" step="any" class="inline-num"></label>
        </div>
        <div class="calc-out"><div class="calc-result" id="c-res"></div>
          <div class="calc-chart" id="c-chart"></div>
          <p class="dash-legend">Security market line: required return vs beta. The dot is your beta.</p></div>
      </div>`;
    function update(src) {
      if (src === 'r') document.getElementById('c-b').value = document.getElementById('c-b-r').value;
      if (src === 'n') document.getElementById('c-b-r').value = document.getElementById('c-b').value;
      const rf = num('c-rf'), erp = num('c-erp'), beta = num('c-b');
      const req = fin().capm(rf, beta, erp);
      document.getElementById('c-res').innerHTML = `<span class="cr-label">Required return =</span> ${fmt(req, 2)}% <span class="cr-tag">= ${fmt(rf,2)} + ${fmt(beta,2)}×${fmt(erp,2)}</span>`;
      const pts = [];
      for (let b = 0; b <= 2.5; b += 0.1) pts.push({ x: b, y: fin().capm(rf, b, erp) });
      document.getElementById('c-chart').innerHTML = charts().plot(pts, { xlabel: 'beta', marker: { x: beta, y: req }, title: 'SML' });
    }
    document.getElementById('c-b-r').addEventListener('input', () => update('r'));
    document.getElementById('c-b').addEventListener('input', () => update('n'));
    ['c-rf', 'c-erp'].forEach((id) => document.getElementById(id).addEventListener('input', () => update()));
    update();
  }

  // ---------- NPV / IRR ----------
  function npvWidget() {
    pane().innerHTML = `
      <div class="calc-card">
        <div class="calc-inputs">
          <label>CF0 (initial outlay) <input type="number" id="n-cf0" value="-1000" step="any"></label>
          <div id="n-flows"></div>
          <div class="calc-mini-actions">
            <button class="btn-secondary" id="n-add">+ Add cash flow</button>
          </div>
          <label>Discount rate (%) <input type="range" id="n-r-r" min="0" max="40" step="0.5" value="10">
            <input type="number" id="n-r" value="10" step="any" class="inline-num"></label>
        </div>
        <div class="calc-out"><div class="calc-result" id="n-res"></div>
          <div class="calc-chart" id="n-chart"></div>
          <p class="dash-legend">NPV profile: NPV vs discount rate. It crosses zero at the IRR.</p></div>
      </div>`;
    const flows = document.getElementById('n-flows');
    function addFlow(val) {
      const i = flows.children.length + 1;
      const row = document.createElement('label');
      row.innerHTML = `CF${i} <input type="number" class="n-cf" value="${val != null ? val : 300}" step="any">`;
      flows.appendChild(row);
      row.querySelector('input').addEventListener('input', update);
    }
    function readFlows() {
      const arr = [num('n-cf0')];
      flows.querySelectorAll('.n-cf').forEach((el) => arr.push(parseFloat(el.value) || 0));
      return arr;
    }
    function update(src) {
      if (src === 'r') document.getElementById('n-r').value = document.getElementById('n-r-r').value;
      if (src === 'n') document.getElementById('n-r-r').value = document.getElementById('n-r').value;
      const f = readFlows(), rate = num('n-r') / 100;
      const npv = fin().npv(rate, f), irr = fin().irr(f);
      document.getElementById('n-res').innerHTML =
        `<span class="cr-label">NPV @ ${fmt(num('n-r'),2)}% =</span> ${fmt(npv, 2)} · <span class="cr-label">IRR =</span> ${irr != null ? fmt(irr * 100, 3) + '%' : 'n/a'}`;
      const pts = [];
      for (let rr = 0; rr <= 0.4; rr += 0.01) pts.push({ x: rr * 100, y: fin().npv(rr, f) });
      document.getElementById('n-chart').innerHTML = charts().plot(pts, { xlabel: 'rate %', zeroLine: true, marker: { x: num('n-r'), y: npv }, title: 'NPV profile' });
    }
    document.getElementById('n-add').addEventListener('click', () => { addFlow(); update(); });
    document.getElementById('n-r-r').addEventListener('input', () => update('r'));
    document.getElementById('n-r').addEventListener('input', () => update('n'));
    document.getElementById('n-cf0').addEventListener('input', () => update());
    addFlow(300); addFlow(300); addFlow(300); addFlow(300);
    update();
  }
})();
