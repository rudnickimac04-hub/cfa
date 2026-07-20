/* Flashcards for spaced repetition. type: 'formula' | 'definition' | 'standard'.
 * front/back may contain simple HTML (sub/sup). Scheduling state is stored
 * separately in localStorage (see js/lib/srs.js) — this file is pure content. */
window.FLASHCARDS = [
  /* ---- Ethics (standards) ---- */
  { id: 'fc-eth-1', topicId: 'ethics', moduleId: 'eth-4', type: 'standard', front: 'Mosaic theory', back: 'Combining public information with <em>non-material</em> nonpublic information to reach a conclusion — permitted, not a violation of Standard II(A).' },
  { id: 'fc-eth-2', topicId: 'ethics', moduleId: 'eth-5', type: 'standard', front: 'Fair Dealing (III-B): fair vs equal?', back: 'Clients must be treated <strong>fairly</strong>, not identically. Premium service is allowed if disclosed and available to all who qualify.' },
  { id: 'fc-eth-3', topicId: 'ethics', moduleId: 'eth-7', type: 'standard', front: 'Record retention (no regulation)', back: 'Recommended minimum <strong>7 years</strong>; records are the employer’s property.' },
  { id: 'fc-eth-4', topicId: 'ethics', moduleId: 'eth-3', type: 'standard', front: 'Conflict: local law vs Code & Standards', back: 'Follow the <strong>stricter</strong>. If no law applies, the Code & Standards govern.' },
  { id: 'fc-eth-5', topicId: 'ethics', moduleId: 'eth-9', type: 'standard', front: 'Using the "CFA" designation', back: '"CFA" is an <strong>adjective</strong>, never a noun ("CFA charterholder"). Never tie it to guaranteed performance.' },
  { id: 'fc-eth-6', topicId: 'ethics', moduleId: 'eth-8', type: 'standard', front: 'Priority of Transactions (VI-B)', back: 'Clients and employer come <strong>before</strong> personal (beneficial-ownership) transactions. No front-running.' },

  /* ---- Quant ---- */
  { id: 'fc-qm-1', topicId: 'quant', moduleId: 'qm-4', type: 'formula', front: 'Effective annual rate (EAR)', back: 'EAR = (1 + stated/m)<sup>m</sup> − 1; continuous: e<sup>r</sup> − 1.' },
  { id: 'fc-qm-2', topicId: 'quant', moduleId: 'qm-4', type: 'formula', front: 'PV of an ordinary annuity', back: 'PV = PMT × [1 − (1+r)<sup>−N</sup>] / r. Annuity due: × (1+r).' },
  { id: 'fc-qm-3', topicId: 'quant', moduleId: 'qm-5', type: 'formula', front: 'Coefficient of variation', back: 'CV = s / mean — risk per unit of return; lower is better.' },
  { id: 'fc-qm-4', topicId: 'quant', moduleId: 'qm-2', type: 'definition', front: 'Money- vs time-weighted return', back: 'Money-weighted = IRR of cash flows (timing matters). Time-weighted removes cash-flow timing → best to judge a manager.' },
  { id: 'fc-qm-5', topicId: 'quant', moduleId: 'qm-9', type: 'definition', front: 'Type I vs Type II error', back: 'Type I = reject a true H₀ (prob = α). Type II = fail to reject a false H₀. Power = 1 − P(Type II).' },
  { id: 'fc-qm-6', topicId: 'quant', moduleId: 'qm-8', type: 'formula', front: 'Standard error of the mean', back: 'SE = σ / √n. CLT: sample mean ~ normal for n ≥ 30.' },
  { id: 'fc-qm-7', topicId: 'quant', moduleId: 'qm-11', type: 'definition', front: 'Supervised vs unsupervised learning', back: 'Supervised = labeled target (regression, classification). Unsupervised = no labels (clustering, dimension reduction).' },

  /* ---- Economics ---- */
  { id: 'fc-econ-1', topicId: 'econ', moduleId: 'econ-1', type: 'formula', front: 'Price elasticity of demand', back: 'E = %ΔQ / %ΔP. |E| > 1 elastic (price cut raises revenue); |E| < 1 inelastic.' },
  { id: 'fc-econ-2', topicId: 'econ', moduleId: 'econ-8', type: 'formula', front: 'Covered interest rate parity', back: 'F = S × (1 + i<sub>price</sub>)/(1 + i<sub>base</sub>). Higher-rate currency → forward discount.' },
  { id: 'fc-econ-3', topicId: 'econ', moduleId: 'econ-2', type: 'definition', front: 'Leading / coincident / lagging indicators', back: 'Leading: permits, stock prices, yield spread. Coincident: production, payrolls. Lagging: CPI services, unemployment duration.' },
  { id: 'fc-econ-4', topicId: 'econ', moduleId: 'econ-4', type: 'definition', front: 'Fisher effect', back: 'Nominal rate ≈ real rate + expected inflation.' },

  /* ---- FSA ---- */
  { id: 'fc-fsa-1', topicId: 'fsa', moduleId: 'fsa-11', type: 'formula', front: 'DuPont (3-way) ROE', back: 'ROE = net margin × asset turnover × financial leverage.' },
  { id: 'fc-fsa-2', topicId: 'fsa', moduleId: 'fsa-6', type: 'formula', front: 'LIFO reserve conversion', back: 'Inventory<sub>FIFO</sub> = Inventory<sub>LIFO</sub> + LIFO reserve; COGS<sub>FIFO</sub> = COGS<sub>LIFO</sub> − ΔLIFO reserve.' },
  { id: 'fc-fsa-3', topicId: 'fsa', moduleId: 'fsa-5', type: 'formula', front: 'FCFF from CFO', back: 'FCFF = CFO + Int(1 − t) − FCInv. FCFE = CFO − FCInv + net borrowing.' },
  { id: 'fc-fsa-4', topicId: 'fsa', moduleId: 'fsa-11', type: 'formula', front: 'Cash conversion cycle', back: 'CCC = DOH + DSO − days payables. Shorter is better.' },
  { id: 'fc-fsa-5', topicId: 'fsa', moduleId: 'fsa-9', type: 'definition', front: 'Deferred tax liability (DTL)', back: 'Arises when an asset’s carrying value > tax base (e.g. faster tax depreciation) — pay less tax now, more later.' },

  /* ---- Corporate Issuers ---- */
  { id: 'fc-ci-1', topicId: 'corp', moduleId: 'ci-6', type: 'formula', front: 'WACC', back: 'WACC = w<sub>d</sub>r<sub>d</sub>(1−t) + w<sub>p</sub>r<sub>p</sub> + w<sub>e</sub>r<sub>e</sub>, at target market-value weights.' },
  { id: 'fc-ci-2', topicId: 'corp', moduleId: 'ci-7', type: 'formula', front: 'Degree of financial leverage', back: 'DFL = EBIT / (EBIT − interest). DTL = DOL × DFL.' },
  { id: 'fc-ci-3', topicId: 'corp', moduleId: 'ci-5', type: 'definition', front: 'NPV vs IRR conflict', back: 'For mutually exclusive projects, trust NPV — it measures the increase in shareholder wealth and assumes reinvestment at the cost of capital.' },
  { id: 'fc-ci-4', topicId: 'corp', moduleId: 'ci-7', type: 'definition', front: 'Pecking order theory', back: 'Finance with internal funds first, then debt, then equity last (issuing equity signals overvaluation).' },

  /* ---- Equities ---- */
  { id: 'fc-eq-1', topicId: 'equity', moduleId: 'eq-8', type: 'formula', front: 'Gordon growth model', back: 'V₀ = D₁ / (r − g). Requires r > g; g = b × ROE.' },
  { id: 'fc-eq-2', topicId: 'equity', moduleId: 'eq-10', type: 'formula', front: 'Justified forward P/E', back: 'P/E = (1 − b) / (r − g). Higher payout/g ↑P/E; higher r ↓P/E.' },
  { id: 'fc-eq-3', topicId: 'equity', moduleId: 'eq-1', type: 'formula', front: 'Margin call price (long)', back: 'P = P₀ × (1 − initial margin)/(1 − maintenance margin).' },
  { id: 'fc-eq-4', topicId: 'equity', moduleId: 'eq-3', type: 'definition', front: 'Semi-strong market efficiency', back: 'Prices reflect all public information → neither technical nor public-fundamental analysis earns consistent abnormal returns.' },
  { id: 'fc-eq-5', topicId: 'equity', moduleId: 'eq-6', type: 'definition', front: 'Porter’s Five Forces', back: 'Rivalry, threat of new entrants, threat of substitutes, supplier power, buyer power. High forces → margin pressure.' },
  { id: 'fc-eq-6', topicId: 'equity', moduleId: 'eq-12', type: 'definition', front: 'Multi-factor cost of equity', back: 'r = R<sub>f</sub> + Σ βᵢ × factor premiumᵢ (e.g. market, size, value, momentum) — richer than single-factor CAPM.' },

  /* ---- Fixed Income ---- */
  { id: 'fc-fi-1', topicId: 'fixedincome', moduleId: 'fi-11', type: 'formula', front: 'Modified duration', back: 'ModDur = MacDur / (1 + r) ≈ % price change per 1% Δyield.' },
  { id: 'fc-fi-2', topicId: 'fixedincome', moduleId: 'fi-12', type: 'formula', front: 'Price change with convexity', back: '%ΔP ≈ −ModDur × Δy + ½ × Convexity × (Δy)². Convexity always adds.' },
  { id: 'fc-fi-3', topicId: 'fixedincome', moduleId: 'fi-14', type: 'formula', front: 'Expected loss', back: 'EL = probability of default × (1 − recovery rate).' },
  { id: 'fc-fi-4', topicId: 'fixedincome', moduleId: 'fi-9', type: 'formula', front: 'Forward rate from spots', back: '(1 + z₂)² = (1 + z₁)(1 + f₁,₁). Solve for the 1y1y forward.' },
  { id: 'fc-fi-5', topicId: 'fixedincome', moduleId: 'fi-7', type: 'definition', front: 'OAS vs Z-spread', back: 'OAS = Z-spread − option cost. Callable → OAS < Z-spread; putable → OAS > Z-spread.' },
  { id: 'fc-fi-6', topicId: 'fixedincome', moduleId: 'fi-6', type: 'definition', front: 'Premium vs discount bond', back: 'Coupon > yield → premium; coupon < yield → discount. Prices pull to par at maturity.' },

  /* ---- Derivatives ---- */
  { id: 'fc-der-1', topicId: 'derivatives', moduleId: 'der-5', type: 'formula', front: 'No-arbitrage forward price', back: 'F₀ = S₀ (1 + r)<sup>T</sup> (adjust for carry/benefits). Initial value = 0.' },
  { id: 'fc-der-2', topicId: 'derivatives', moduleId: 'der-9', type: 'formula', front: 'Put–call parity', back: 'c + X/(1+r)<sup>T</sup> = p + S₀ (European). Rearrange for synthetics.' },
  { id: 'fc-der-3', topicId: 'derivatives', moduleId: 'der-10', type: 'formula', front: 'Risk-neutral probability', back: 'π = (1 + r − d)/(u − d); option value = [πV<sub>u</sub> + (1−π)V<sub>d</sub>]/(1+r).' },
  { id: 'fc-der-4', topicId: 'derivatives', moduleId: 'der-8', type: 'definition', front: 'Option value drivers (call)', back: 'Call ↑ with S, T, volatility, r; ↓ with X and dividends. Puts mirror it. Buyer’s max loss = premium.' },

  /* ---- Alternatives ---- */
  { id: 'fc-ai-1', topicId: 'alts', moduleId: 'ai-2', type: 'definition', front: 'High-water mark', back: 'Incentive fee only on gains above the previous peak — protects investors from paying twice after a drawdown.' },
  { id: 'fc-ai-2', topicId: 'alts', moduleId: 'ai-5', type: 'definition', front: 'Contango vs backwardation', back: 'Contango: futures > spot (negative roll yield). Backwardation: futures < spot (positive roll yield).' },
  { id: 'fc-ai-3', topicId: 'alts', moduleId: 'ai-4', type: 'formula', front: 'Real estate income approach', back: 'Value = NOI / capitalization rate.' },
  { id: 'fc-ai-4', topicId: 'alts', moduleId: 'ai-7', type: 'definition', front: 'Distributed ledger technology', back: 'Shared, cryptographically-secured ledger (blockchain) underpinning digital assets; consensus via proof-of-work or proof-of-stake.' },

  /* ---- Portfolio Management ---- */
  { id: 'fc-pm-1', topicId: 'portfolio', moduleId: 'pm-2', type: 'formula', front: 'CAPM / security market line', back: 'E(R) = R<sub>f</sub> + β(E(R<sub>m</sub>) − R<sub>f</sub>). Above the SML = undervalued.' },
  { id: 'fc-pm-2', topicId: 'portfolio', moduleId: 'pm-2', type: 'formula', front: 'Sharpe ratio', back: '(R<sub>p</sub> − R<sub>f</sub>) / σ<sub>p</sub> — excess return per unit of total risk.' },
  { id: 'fc-pm-3', topicId: 'portfolio', moduleId: 'pm-1', type: 'formula', front: 'Two-asset portfolio variance', back: 'σ² = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρσ₁σ₂. Diversification when ρ < +1.' },
  { id: 'fc-pm-4', topicId: 'portfolio', moduleId: 'pm-4', type: 'definition', front: 'IPS constraints (mnemonic)', back: 'T-T-L-L-U: Time horizon, Taxes, Liquidity, Legal, Unique circumstances.' },
  { id: 'fc-pm-5', topicId: 'portfolio', moduleId: 'pm-5', type: 'definition', front: 'Cognitive vs emotional bias', back: 'Cognitive errors respond to better information; emotional biases are usually accommodated rather than eliminated.' },
];

/* accessors */
window.CFA = window.CFA || {};
window.CFA.flashcards = {
  all() { return window.FLASHCARDS; },
  byTopic(id) { return window.FLASHCARDS.filter((c) => c.topicId === id); },
};
