/* Knowledge compendium: condensed study notes per topic (HTML strings). */
const COMPENDIUM = {

  ethics: `
    <div class="comp-section">
      <h3>Code of Ethics — the six components</h3>
      <ul>
        <li>Act with <strong>integrity, competence, diligence, respect</strong> and in an ethical manner with the public, clients, prospects, employers, employees and colleagues.</li>
        <li>Place the <strong>integrity of the profession and clients' interests above your own</strong>.</li>
        <li>Use <strong>reasonable care</strong> and exercise independent professional judgment.</li>
        <li>Practice and encourage others to practice in a <strong>professional and ethical manner</strong> that reflects credit on the profession.</li>
        <li>Promote the <strong>integrity and viability of global capital markets</strong>.</li>
        <li><strong>Maintain and improve professional competence</strong> and strive to do the same for other professionals.</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>The seven Standards of Professional Conduct</h3>
      <ul>
        <li><strong>I. Professionalism</strong> — Knowledge of the Law; Independence &amp; Objectivity; Misrepresentation; Misconduct; Competence.</li>
        <li><strong>II. Integrity of Capital Markets</strong> — Material Nonpublic Information; Market Manipulation.</li>
        <li><strong>III. Duties to Clients</strong> — Loyalty, Prudence &amp; Care; Fair Dealing; Suitability; Performance Presentation; Preservation of Confidentiality.</li>
        <li><strong>IV. Duties to Employers</strong> — Loyalty; Additional Compensation Arrangements; Responsibilities of Supervisors.</li>
        <li><strong>V. Investment Analysis &amp; Recommendations</strong> — Diligence &amp; Reasonable Basis; Communication with Clients; Record Retention.</li>
        <li><strong>VI. Conflicts of Interest</strong> — Disclosure of Conflicts; Priority of Transactions; Referral Fees.</li>
        <li><strong>VII. Responsibilities as a CFA Member/Candidate</strong> — Conduct in the CFA Program; Reference to CFA Institute and the designation.</li>
      </ul>
      <div class="callout">Exam trap: when local law and the Code/Standards differ, follow the <strong>stricter</strong> of the two. If there is no local law, the Code/Standards apply.</div>
    </div>
    <div class="comp-section">
      <h3>High-yield details</h3>
      <ul>
        <li><strong>Mosaic theory</strong>: combining public info + nonmaterial nonpublic info into a conclusion is allowed — it is NOT a violation of Standard II(A).</li>
        <li><strong>Fair dealing ≠ equal dealing</strong>: all clients must be treated fairly, but premium service levels may be offered if disclosed and available to all willing to pay.</li>
        <li><strong>Suitability</strong> applies at the portfolio level, not instrument-by-instrument.</li>
        <li>Gifts from clients (reward for past performance) → <strong>disclose to employer</strong>; gifts from other parties that could compromise independence → <strong>refuse or return</strong>.</li>
        <li>Record retention: recommended <strong>7 years</strong> if no regulatory requirement. Records are the <strong>employer's property</strong>.</li>
        <li>Referring to the designation: "CFA" is an adjective, never a noun ("CFA charterholder", not "a CFA").</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>GIPS — Global Investment Performance Standards</h3>
      <ul>
        <li>Voluntary standards to ensure <strong>fair representation and full disclosure</strong> of performance; compliance is at the <strong>firm level</strong> (cannot claim for a single product).</li>
        <li>All actual, fee-paying, discretionary portfolios must be included in at least one <strong>composite</strong> (grouped by strategy/mandate).</li>
        <li>Minimum of <strong>5 years</strong> of GIPS-compliant history (or since inception), building to 10 years.</li>
        <li>Verification is optional, performed by an independent third party for the whole firm.</li>
      </ul>
    </div>`,

  quant: `
    <div class="comp-section">
      <h3>Time value of money</h3>
      <p>Every TVM problem is one equation of value: cash flows discounted or compounded at rate r must balance. Key ideas:</p>
      <ul>
        <li><strong>EAR</strong> (effective annual rate) = (1 + periodic rate)<sup>m</sup> − 1; with continuous compounding EAR = e<sup>r</sup> − 1.</li>
        <li><strong>Annuity due</strong> = ordinary annuity × (1 + r) (payments at beginning of period).</li>
        <li><strong>Perpetuity</strong>: PV = PMT / r (first payment one period from now).</li>
        <li>Sign convention: treat outflows as negative, inflows as positive — mixing them up is the #1 source of TVM mistakes.</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>Statistical concepts</h3>
      <ul>
        <li><strong>Geometric mean ≤ arithmetic mean</strong>; use geometric for multi-period compounded returns, arithmetic for expected one-period return.</li>
        <li><strong>Harmonic mean</strong> — average cost per share under cost averaging (equal money amounts each period).</li>
        <li><strong>Coefficient of variation</strong> CV = s / mean — risk per unit of return; lower is better.</li>
        <li><strong>Skewness</strong>: positive skew → mean &gt; median &gt; mode (long right tail). Negative skew → mean &lt; median &lt; mode.</li>
        <li><strong>Kurtosis</strong>: leptokurtic (&gt;3) = fat tails, more extreme events; excess kurtosis = kurtosis − 3.</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>Probability</h3>
      <ul>
        <li>Multiplication rule: P(AB) = P(A|B)·P(B). Addition rule: P(A or B) = P(A) + P(B) − P(AB).</li>
        <li>Independent events: P(A|B) = P(A).</li>
        <li><strong>Bayes' formula</strong>: updates a prior probability with new information: P(A|B) = P(B|A)·P(A) / P(B).</li>
        <li>Expected value: E(X) = Σ p<sub>i</sub>x<sub>i</sub>; variance = Σ p<sub>i</sub>(x<sub>i</sub> − E(X))².</li>
        <li>Counting: combinations nCr = n!/((n−r)!r!) when order does not matter; permutations nPr = n!/(n−r)! when it does.</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>Distributions &amp; sampling</h3>
      <ul>
        <li><strong>Normal</strong>: ~68% within ±1σ, 90% within ±1.65σ, 95% within ±1.96σ, 99% within ±2.58σ.</li>
        <li><strong>Standardizing</strong>: z = (x − μ)/σ.</li>
        <li><strong>Central Limit Theorem</strong>: for n ≥ 30 the sampling distribution of the mean is approximately normal regardless of the population; standard error = σ/√n.</li>
        <li><strong>Roy's safety-first ratio</strong> = (E(R) − R<sub>threshold</sub>)/σ — pick the portfolio with the highest SF ratio.</li>
        <li>Lognormal is bounded below by zero — used for asset <em>prices</em>; normal used for <em>returns</em>.</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>Hypothesis testing</h3>
      <ul>
        <li>Null H₀ is what you test and hope to reject; always includes "=".</li>
        <li><strong>Type I error</strong>: rejecting a true H₀ (probability = α, the significance level). <strong>Type II</strong>: failing to reject a false H₀. Power = 1 − P(Type II).</li>
        <li>Reject H₀ when |test statistic| &gt; critical value, or p-value &lt; α.</li>
        <li>Test of a mean with unknown variance → t-test; variance of one population → chi-square; equality of two variances → F-test.</li>
      </ul>
      <div class="callout tip">p-value = smallest significance level at which H₀ can be rejected. Small p → strong evidence against H₀.</div>
    </div>`,

  econ: `
    <div class="comp-section">
      <h3>Demand, supply and elasticity</h3>
      <ul>
        <li><strong>Price elasticity of demand</strong> = %ΔQ / %ΔP. |E| &gt; 1 elastic (total revenue falls when price rises); |E| &lt; 1 inelastic.</li>
        <li>Demand is more elastic when there are close substitutes, the good takes a large share of income, and the time horizon is long.</li>
        <li><strong>Income elasticity</strong>: &gt; 0 normal good; &lt; 0 inferior good. <strong>Cross-price elasticity</strong>: &gt; 0 substitutes; &lt; 0 complements.</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>Market structures</h3>
      <ul>
        <li><strong>Perfect competition</strong>: many firms, identical products, price takers, zero economic profit in long run; P = MR = MC.</li>
        <li><strong>Monopolistic competition</strong>: many firms, differentiated products, low barriers; zero economic profit long-run but P &gt; MC.</li>
        <li><strong>Oligopoly</strong>: few interdependent firms; kinked demand, Cournot, game theory (Nash equilibrium).</li>
        <li><strong>Monopoly</strong>: single seller, high barriers; produces where MR = MC, prices off the demand curve.</li>
        <li>All profit-maximizing firms produce where <strong>MR = MC</strong>.</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>Business cycles &amp; indicators</h3>
      <ul>
        <li>Phases: trough → expansion → peak → contraction. Inventory/sales ratio rises near peaks and falls in early expansion.</li>
        <li><strong>Leading indicators</strong>: stock prices, building permits, yield spread. <strong>Coincident</strong>: payrolls, industrial production. <strong>Lagging</strong>: CPI for services, average duration of unemployment, prime rate.</li>
        <li>Unemployment types: frictional (searching), structural (skills mismatch), cyclical (downturn-related).</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>Monetary &amp; fiscal policy</h3>
      <ul>
        <li>Money neutrality: in the long run money growth affects only prices, not real output.</li>
        <li><strong>Fisher effect</strong>: nominal rate ≈ real rate + expected inflation.</li>
        <li>Central bank tools: policy rate, reserve requirements, open market operations. Expansionary = buy securities / cut rates.</li>
        <li>Fiscal multiplier = 1 / (1 − MPC(1 − t)); crowding out reduces its effect.</li>
        <li>Policy mix: both expansionary → strong growth, higher rates in future; tight money + loose fiscal → high rates, larger public sector.</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>International trade &amp; FX</h3>
      <ul>
        <li><strong>Comparative advantage</strong> (lower opportunity cost) drives gains from trade, even with absolute disadvantage.</li>
        <li>Exchange rate quote A/B = price of one unit of B (base) in units of A (price currency).</li>
        <li><strong>Cross rates</strong>: multiply/divide so the common currency cancels.</li>
        <li>Forward premium/discount: F = S × (1 + i<sub>price</sub>)/(1 + i<sub>base</sub>) — covered interest rate parity. Currency with the higher interest rate trades at a forward <strong>discount</strong>.</li>
        <li>Currency depreciation improves the trade balance only if the Marshall–Lerner condition holds (export + import demand elasticities sum &gt; 1); short-run worsening = J-curve.</li>
      </ul>
    </div>`,

  fsa: `
    <div class="comp-section">
      <h3>The statements and their links</h3>
      <ul>
        <li><strong>Balance sheet</strong>: A = L + E at a point in time. <strong>Income statement</strong>: performance over a period (accrual basis). <strong>Cash flow statement</strong>: CFO + CFI + CFF = ΔCash. <strong>Statement of changes in equity</strong> ties them together.</li>
        <li>Ending retained earnings = beginning RE + net income − dividends declared.</li>
        <li>Accruals: unearned revenue (cash first), accrued revenue (revenue first), prepaid expense (cash first), accrued expense (expense first).</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>Revenue &amp; expense recognition</h3>
      <ul>
        <li>Revenue recognized when performance obligations are satisfied (5-step model: contract → obligations → price → allocate → recognize).</li>
        <li>Inventory: FIFO / weighted average (IFRS &amp; US GAAP), LIFO (US GAAP only). With rising prices LIFO → higher COGS, lower income, lower inventory, lower taxes.</li>
        <li>LIFO reserve converts LIFO inventory to FIFO: FIFO inventory = LIFO inventory + LIFO reserve.</li>
        <li>Depreciation: straight-line, double-declining balance (DDB rate = 2/useful life, ignore salvage until floor), units of production.</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>Cash flow statement</h3>
      <ul>
        <li>Indirect CFO: NI + non-cash charges (D&amp;A) − gains on disposal ± working capital changes (↑A/R subtracts, ↑A/P adds).</li>
        <li>US GAAP: interest paid/received and dividends received = CFO; dividends paid = CFF. IFRS allows more flexibility (interest paid may be CFO or CFF, etc.).</li>
        <li><strong>Free cash flow to the firm</strong>: FCFF = CFO + interest×(1 − tax rate) − fixed capital investment.</li>
        <li><strong>FCFE</strong> = CFO − FCInv + net borrowing.</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>Ratios you must know cold</h3>
      <ul>
        <li>Liquidity: current, quick ((cash + ST investments + receivables)/CL), cash ratio.</li>
        <li>Activity: inventory turnover = COGS/avg inventory; receivables turnover = revenue/avg receivables; days = 365/turnover.</li>
        <li>Cash conversion cycle = DOH + DSO − days payables.</li>
        <li>Solvency: debt-to-equity, financial leverage = avg assets/avg equity, interest coverage = EBIT/interest.</li>
        <li>Profitability: gross/operating/net margin; ROA = NI/avg assets; ROE = NI/avg equity.</li>
        <li><strong>DuPont</strong>: ROE = net margin × asset turnover × leverage. Extended (5-way): tax burden × interest burden × EBIT margin × turnover × leverage.</li>
      </ul>
      <div class="callout">If ROE rose, always ask <em>why</em>: more leverage is not the same quality signal as better margins.</div>
    </div>
    <div class="comp-section">
      <h3>Long-lived assets, taxes, leases</h3>
      <ul>
        <li>Capitalizing (vs expensing) → higher early income, higher assets, higher CFO (outflow shown in CFI), smoother earnings.</li>
        <li>Impairment (IFRS): carrying &gt; recoverable amount (higher of fair value − costs to sell, and value in use). IFRS allows revaluation upward; US GAAP does not (except reversal for held-for-sale under limited cases).</li>
        <li><strong>DTL</strong> arises when carrying value of an asset &gt; tax base (e.g., faster tax depreciation); <strong>DTA</strong> from carried-forward losses, warranties. Tax rate change: DTL &amp; DTA re-measured at the new rate through tax expense.</li>
        <li>Leases (lessee): both finance and operating create a right-of-use asset and lease liability; income statement differs — finance: depreciation + interest; operating (US GAAP): single straight-line lease expense.</li>
      </ul>
    </div>`,

  corp: `
    <div class="comp-section">
      <h3>Corporate governance &amp; stakeholders</h3>
      <ul>
        <li>Principal–agent problems: managers vs shareholders, controlling vs minority shareholders, shareholders vs creditors.</li>
        <li>Board best practice: majority independent directors, separated chair/CEO roles, annual elections (no staggered board), independent audit/remuneration/nomination committees.</li>
        <li>ESG factors can enter analysis via negative screening, integration, thematic and engagement approaches.</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>Capital budgeting</h3>
      <ul>
        <li>Use <strong>incremental after-tax cash flows</strong>; ignore sunk costs; include opportunity costs and cannibalization externalities; ignore financing costs (they are in the discount rate).</li>
        <li><strong>NPV</strong> = Σ CF<sub>t</sub>/(1+r)<sup>t</sup> − outlay. Accept if NPV &gt; 0. NPV measures the expected increase in shareholder wealth.</li>
        <li><strong>IRR</strong>: rate where NPV = 0. Conflicts with NPV for mutually exclusive projects (size/timing differences) → <strong>always trust NPV</strong>.</li>
        <li>IRR problems: multiple IRRs with non-conventional cash flows; no IRR possible; assumes reinvestment at IRR.</li>
        <li>Payback ignores time value and cash flows after cutoff; discounted payback still ignores post-cutoff flows.</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>Cost of capital</h3>
      <ul>
        <li><strong>WACC</strong> = w<sub>d</sub>·r<sub>d</sub>(1 − t) + w<sub>p</sub>·r<sub>p</sub> + w<sub>e</sub>·r<sub>e</sub>, using target (market-value) weights.</li>
        <li>Cost of equity: CAPM (r<sub>e</sub> = r<sub>f</sub> + β(ERP)); bond-yield-plus-risk-premium (r<sub>d</sub> + 3–5%).</li>
        <li>Project beta via pure-play: unlever the comparable's beta, relever at your target D/E: β<sub>asset</sub> = β<sub>equity</sub> / [1 + (1−t)D/E].</li>
        <li>Marginal cost of capital rises with new capital raised (break points = amount of capital / weight).</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>Leverage &amp; capital structure</h3>
      <ul>
        <li><strong>DOL</strong> = %ΔEBIT / %Δsales = Q(P−V) / (Q(P−V) − F). <strong>DFL</strong> = %ΔEPS / %ΔEBIT = EBIT/(EBIT − interest). <strong>DTL</strong> = DOL × DFL.</li>
        <li>Breakeven quantity = (fixed operating + fixed financing costs) / (P − V); operating breakeven uses operating fixed costs only.</li>
        <li>MM without taxes: capital structure irrelevant. With taxes: value rises with debt (tax shield) until financial distress costs dominate → static trade-off theory.</li>
        <li>Pecking order: internal funds → debt → equity (issuing equity signals overvaluation).</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>Working capital</h3>
      <ul>
        <li>Cost of trade credit if discount is forgone: (1 + disc/(1−disc))<sup>365/days late</sup> − 1 — usually very expensive.</li>
        <li>Primary sources of liquidity: cash, short-term funding; secondary: asset sales, restructuring — using secondary signals weakness.</li>
        <li>Drag on liquidity = inflows delayed (bad receivables); pull on liquidity = outflows accelerated (early payments demanded).</li>
      </ul>
    </div>`,

  equity: `
    <div class="comp-section">
      <h3>Market organization</h3>
      <ul>
        <li>Order types: market (immediacy), limit (price control), stop (becomes market order when triggered — used for protection, not price improvement).</li>
        <li><strong>Margin</strong>: leverage ratio = 1/initial margin. Margin call price = P₀ × (1 − initial margin)/(1 − maintenance margin).</li>
        <li>Call markets (single price auctions) vs continuous markets; quote-driven vs order-driven vs brokered.</li>
        <li>Primary market: IPOs, seasoned offerings; secondary market provides liquidity and price discovery.</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>Indexes &amp; efficiency</h3>
      <ul>
        <li><strong>Price-weighted</strong> (DJIA): arithmetic average of prices; high-priced stocks dominate; divisor adjusts for splits.</li>
        <li><strong>Market-cap weighted</strong> (S&amp;P 500): float-adjusted common; momentum bias toward overvalued large caps.</li>
        <li><strong>Equal-weighted</strong>: requires constant rebalancing; small-cap tilt.</li>
        <li>Efficient market forms — weak (prices reflect past market data; TA useless), semi-strong (public info; FA useless), strong (all info incl. private).</li>
        <li>Anomalies (January effect, momentum) mostly disappear after transaction costs; market generally semi-strong efficient.</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>Equity valuation — dividend models</h3>
      <ul>
        <li><strong>Gordon growth</strong>: V₀ = D₁/(r − g), requires r &gt; g and stable growth. Very sensitive to (r − g).</li>
        <li>Sustainable growth g = b × ROE, where b = retention ratio = 1 − payout.</li>
        <li>Multistage: forecast dividends through high-growth phase, terminal value via Gordon at start of stable phase, discount everything back.</li>
        <li>Preferred stock: V = D/r (perpetuity).</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>Multiplier &amp; asset-based models</h3>
      <ul>
        <li>Justified forward P/E = payout ratio (1−b) / (r − g). Higher payout ↑P/E; higher required return ↓P/E.</li>
        <li>P/E problems: negative earnings; earnings volatility → use normalized EPS.</li>
        <li>P/B useful for financials; P/S most stable (sales rarely negative); EV/EBITDA capital-structure neutral.</li>
        <li>Asset-based: value = fair value of assets − liabilities; works best for firms with mostly tangible assets.</li>
      </ul>
      <div class="callout tip">If price &lt; model value → undervalued. Every valuation question at Level I reduces to computing the model value and comparing it to the market price.</div>
    </div>`,

  fixedincome: `
    <div class="comp-section">
      <h3>Bond features &amp; structures</h3>
      <ul>
        <li>Indenture = legal contract; covenants: affirmative (shall do) vs negative (shall not — limits on debt, liens, dividends).</li>
        <li>Coupon structures: fixed, floaters (reference rate + quoted margin), step-up, deferred, PIK, inflation-linked (TIPS: principal adjusts).</li>
        <li>Embedded options: callable (issuer benefit → higher yield), putable (investor benefit → lower yield), convertible.</li>
        <li>Repayment: bullet, amortizing (fully/partially), sinking fund.</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>Pricing &amp; yields</h3>
      <ul>
        <li>Price = PV of coupons + PV of face at the market discount rate. Coupon &lt; yield → discount; coupon &gt; yield → premium ("pull to par" as maturity approaches).</li>
        <li>Full (dirty) price = flat (clean) price + accrued interest. Accrued = coupon × t/T.</li>
        <li>YTM assumptions: hold to maturity, no default, reinvest coupons at YTM.</li>
        <li>Semiannual bond basis: YTM quoted = 2 × semiannual IRR. Convert bases with EAR equivalence.</li>
        <li>Spot rates price each cash flow separately; the no-arbitrage price uses spot rates. Forward rates: (1+z₂)² = (1+z₁)(1+1y1y).</li>
        <li>Spreads: G-spread (vs govt), I-spread (vs swap), <strong>Z-spread</strong> (parallel shift over the whole spot curve), OAS = Z-spread − option cost.</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>Duration &amp; convexity</h3>
      <ul>
        <li><strong>Macaulay duration</strong>: weighted-average time to receive cash flows. <strong>Modified duration</strong> = MacDur/(1 + r): % price change for 1% yield change.</li>
        <li>%ΔPrice ≈ −ModDur × Δy + ½ × Convexity × (Δy)².</li>
        <li>Duration rises with maturity, falls with coupon and with yield. Zero-coupon: MacDur = maturity.</li>
        <li>Effective duration for bonds with embedded options (uses curve shifts, not YTM); callable bonds exhibit negative convexity at low yields.</li>
        <li>Money duration = ModDur × full price; PVBP = money duration × 0.0001.</li>
        <li>Duration gap: investment horizon &lt; MacDur → price risk dominates; horizon &gt; MacDur → reinvestment risk dominates.</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>Credit risk</h3>
      <ul>
        <li>Expected loss = default probability × loss severity; loss severity = 1 − recovery rate.</li>
        <li>Seniority ranking: secured → senior unsecured → subordinated. Recovery varies by seniority.</li>
        <li>Four Cs of credit: capacity, collateral, covenants, character.</li>
        <li>Investment grade ≥ BBB− (Baa3); high yield below. Cross-over/"fallen angel" terminology.</li>
        <li>Credit spreads widen in downturns and when liquidity worsens; spread risk usually dominates default risk for IG bonds.</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>Securitization</h3>
      <ul>
        <li>SPE isolates assets from the seller (bankruptcy remote). Tranching redistributes credit risk (waterfall); time tranching redistributes prepayment risk.</li>
        <li>MBS: prepayment risk = contraction (rates fall) + extension (rates rise). CMOs (sequential-pay, PAC/support) repackage it.</li>
        <li>Covered bonds: stay on issuer's balance sheet, dual recourse → safer than comparable ABS.</li>
      </ul>
    </div>`,

  derivatives: `
    <div class="comp-section">
      <h3>Forwards, futures &amp; swaps</h3>
      <ul>
        <li>Forward: OTC, customized, counterparty risk, settled at expiry. Futures: exchange-traded, standardized, daily mark-to-market with margin, clearinghouse guarantees.</li>
        <li>No-arbitrage forward price: F₀ = S₀ × (1+r)<sup>T</sup> (+ costs − benefits, both compounded). Value at initiation = 0.</li>
        <li>Value of long forward during life: V<sub>t</sub> = S<sub>t</sub> − F₀/(1+r)<sup>T−t</sup>.</li>
        <li>Swap = series of forwards. Plain-vanilla interest rate swap: fixed payer gains when rates rise.</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>Options — payoffs and value</h3>
      <ul>
        <li>Call payoff = max(0, S − X); put payoff = max(0, X − S). Buyer pays premium; maximum loss for the buyer = premium.</li>
        <li>Option value = intrinsic value + time value. Time value → 0 at expiration.</li>
        <li>Moneyness: ITM/ATM/OTM. European options can only be exercised at expiry.</li>
        <li>Value drivers: call value rises with S, T, volatility, r; falls with X and dividends. Put value rises with X and volatility; falls with S and r.</li>
        <li>Bounds: call ≤ S; European put ≤ X/(1+r)<sup>T</sup>.</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>Put–call parity</h3>
      <ul>
        <li><strong>c + X/(1+r)<sup>T</sup> = p + S</strong> (European, no dividends). "Fiduciary call = protective put."</li>
        <li>Rearrange to create synthetics: synthetic call = p + S − X/(1+r)<sup>T</sup>, etc.</li>
        <li>Put–call–forward parity: c + X/(1+r)<sup>T</sup> = p + F₀/(1+r)<sup>T</sup>.</li>
        <li>Violations of parity = arbitrage: buy the cheap side, sell the expensive side.</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>Binomial pricing &amp; uses of derivatives</h3>
      <ul>
        <li>One-period binomial: risk-neutral probability π = (1 + r − d)/(u − d); option value = [π·V<sub>u</sub> + (1−π)·V<sub>d</sub>]/(1+r). Actual probabilities are irrelevant.</li>
        <li>Hedgers transfer risk; speculators take it; arbitrageurs enforce the law of one price.</li>
        <li>Derivative markets benefits: price discovery, lower transaction costs, risk allocation. Criticisms: leverage/speculation, complexity.</li>
      </ul>
      <div class="callout">Exam habit: always draw the payoff at expiry first, then subtract/add the premium for profit questions.</div>
    </div>`,

  alts: `
    <div class="comp-section">
      <h3>Why alternatives</h3>
      <ul>
        <li>Common features: illiquidity, less regulation/transparency, limited historical data, unique legal structures, higher fees, potential diversification (low correlation with stocks/bonds).</li>
        <li>Return data biases: survivorship and backfill bias inflate reported index returns; appraisal-based values smooth volatility downward.</li>
        <li>Access methods: fund investing, co-investing, direct investing.</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>Hedge funds</h3>
      <ul>
        <li>Structure: limited partnership; GP manages, LPs invest. Lock-ups, gates, redemption notice periods.</li>
        <li><strong>Fees "2 and 20"</strong>: management fee on AUM + incentive fee on gains, often above a hurdle rate and subject to a <strong>high-water mark</strong> (no incentive fee until prior losses are recovered).</li>
        <li>Strategies: equity hedge (long/short), event-driven (merger arb, distressed), relative value (fixed-income arb), macro, fund-of-funds (extra fee layer, adds diversification).</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>Private equity &amp; private debt</h3>
      <ul>
        <li>PE strategies: leveraged buyouts (LBOs — debt-financed acquisition of mature firms), venture capital (stages: pre-seed/seed → early → later → mezzanine), growth equity.</li>
        <li>Exit routes: trade sale, IPO, secondary sale, SPAC, recapitalization, write-off.</li>
        <li>VC valuation is negotiation-driven; J-curve of PE fund cash flows: capital calls first, distributions later.</li>
        <li>Private debt: direct lending, mezzanine (with warrants), venture debt, distressed debt.</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>Real estate, infrastructure, commodities</h3>
      <ul>
        <li>Real estate access: direct, equity REITs (liquid, dividend-rich), mortgage REITs, private funds. Valuation: comparable sales, income approach (NOI/cap rate), cost approach.</li>
        <li>Infrastructure: brownfield (existing, stable cash flow) vs greenfield (to be built, higher risk). Often long-lived, inflation-linked concessions.</li>
        <li>Commodities: return via futures, not the spot. Futures return components: price return + roll yield (positive when backwardated) + collateral yield.</li>
        <li>Contango: futures &gt; spot (negative roll yield); backwardation: futures &lt; spot (positive roll yield).</li>
      </ul>
    </div>`,

  portfolio: `
    <div class="comp-section">
      <h3>Portfolio risk &amp; return</h3>
      <ul>
        <li>Portfolio return = weighted average of returns; portfolio risk ≤ weighted average of risks whenever correlation &lt; +1 — the source of diversification.</li>
        <li>Two-asset variance: σ<sub>p</sub>² = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρσ₁σ₂.</li>
        <li>Minimum-variance frontier; efficient frontier = top half (highest return per risk level).</li>
        <li>Adding the risk-free asset → Capital Allocation Line; with market portfolio → <strong>CML</strong>: E(R) = R<sub>f</sub> + σ<sub>p</sub>·(E(R<sub>m</sub>)−R<sub>f</sub>)/σ<sub>m</sub>.</li>
        <li>Systematic (market) risk is priced; unsystematic risk can be diversified away → not compensated.</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>CAPM &amp; performance measures</h3>
      <ul>
        <li><strong>SML/CAPM</strong>: E(R<sub>i</sub>) = R<sub>f</sub> + β<sub>i</sub>(E(R<sub>m</sub>) − R<sub>f</sub>); β = Cov(i,m)/σ<sub>m</sub>².</li>
        <li>Security above SML = undervalued (expected return &gt; required); below = overvalued.</li>
        <li><strong>Sharpe</strong> = (R<sub>p</sub> − R<sub>f</sub>)/σ<sub>p</sub> (total risk); <strong>Treynor</strong> = (R<sub>p</sub> − R<sub>f</sub>)/β<sub>p</sub> (systematic risk); <strong>Jensen's alpha</strong> = R<sub>p</sub> − CAPM return; <strong>M²</strong> = Sharpe-based, in % terms.</li>
        <li>Use Sharpe/M² for total portfolios; Treynor/alpha for well-diversified portfolios or securities within one.</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>Portfolio management process &amp; IPS</h3>
      <ul>
        <li>Steps: planning (IPS) → execution (asset allocation, security selection) → feedback (monitoring, rebalancing, evaluation).</li>
        <li>IPS: <strong>R</strong>isk, <strong>R</strong>eturn objectives; constraints <strong>T-T-L-L-U</strong>: Time horizon, Taxes, Liquidity, Legal, Unique circumstances.</li>
        <li>Risk tolerance = ability (wealth, horizon, income) + willingness (psychological). If they conflict → go with the lower, and educate the client.</li>
        <li>Strategic asset allocation from capital market expectations; tactical deviations exploit short-term views; rebalancing controls drift.</li>
      </ul>
    </div>
    <div class="comp-section">
      <h3>Risk management &amp; behavioral finance</h3>
      <ul>
        <li>Risk management process: define risk tolerance → identify/measure risks → manage (accept, avoid, transfer [insurance], shift [derivatives]).</li>
        <li>Measures: standard deviation, beta, duration, VaR (min loss at given probability/horizon), CVaR, drawdown, stress tests.</li>
        <li>Behavioral biases — cognitive (belief errors: confirmation, hindsight, anchoring, availability) vs emotional (loss aversion, overconfidence, status quo, endowment, regret aversion).</li>
        <li>Cognitive errors are easier to correct with information; emotional biases usually have to be accommodated.</li>
      </ul>
    </div>`,
};
