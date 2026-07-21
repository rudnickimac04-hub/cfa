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

  /* ===== Expanded coverage: modules previously without a card ===== */
  /* Ethics */
  { id: 'fc-eth-7', topicId: 'ethics', moduleId: 'eth-1', type: 'definition', front: 'Ethics vs law', back: 'Law is the floor; ethics can require more. Some legal acts are unethical.' },
  { id: 'fc-eth-8', topicId: 'ethics', moduleId: 'eth-2', type: 'standard', front: 'Code &amp; Standards — how many?', back: 'Six components of the Code; seven Standards of Professional Conduct (I–VII).' },
  { id: 'fc-eth-9', topicId: 'ethics', moduleId: 'eth-6', type: 'standard', front: 'Leaving an employer (IV-A Loyalty)', back: 'Can’t take records/client lists (employer’s property) or solicit clients before leaving. Skills and memory are yours.' },
  { id: 'fc-eth-10', topicId: 'ethics', moduleId: 'eth-10', type: 'standard', front: 'Working an ethics vignette', back: 'Identify the Standard, compare conduct vs requirement, pick the most conservative compliant action.' },
  /* Quant */
  { id: 'fc-qm-8', topicId: 'quant', moduleId: 'qm-1', type: 'formula', front: 'Holding-period return', back: 'HPR = (P₁ − P₀ + income)/P₀.' },
  { id: 'fc-qm-9', topicId: 'quant', moduleId: 'qm-3', type: 'definition', front: 'Valid benchmark properties', back: 'Specified in advance, appropriate, measurable, unambiguous, investable; active return = portfolio − benchmark.' },
  { id: 'fc-qm-10', topicId: 'quant', moduleId: 'qm-6', type: 'formula', front: 'Bayes’ formula', back: 'P(A|B) = P(B|A)·P(A)/P(B) — update a prior with new evidence.' },
  { id: 'fc-qm-11', topicId: 'quant', moduleId: 'qm-7', type: 'definition', front: 'Monte Carlo vs bootstrap', back: 'Monte Carlo draws from an assumed distribution; bootstrap resamples observed data with replacement.' },
  { id: 'fc-qm-12', topicId: 'quant', moduleId: 'qm-10', type: 'definition', front: 'Simple linear regression assumptions', back: 'Linearity, homoskedasticity, independent errors, normally distributed errors. R² = variance explained.' },
  /* Economics */
  { id: 'fc-econ-5', topicId: 'econ', moduleId: 'econ-3', type: 'formula', front: 'Fiscal multiplier', back: '1 / [1 − MPC(1 − t)]; crowding out reduces its effect.' },
  { id: 'fc-econ-6', topicId: 'econ', moduleId: 'econ-5', type: 'definition', front: 'Geopolitics: cooperation vs autarky', back: 'Autarky = self-sufficiency; tools of power are national security, economic (tariffs/sanctions) and financial.' },
  { id: 'fc-econ-7', topicId: 'econ', moduleId: 'econ-6', type: 'definition', front: 'Comparative advantage', back: 'Specialize where opportunity cost is lowest — gains from trade even with an absolute disadvantage.' },
  { id: 'fc-econ-8', topicId: 'econ', moduleId: 'econ-7', type: 'definition', front: 'Balance of payments identity', back: 'Current account + capital/financial account ≈ 0. A trade deficit is financed by net capital inflows.' },
  /* FSA */
  { id: 'fc-fsa-6', topicId: 'fsa', moduleId: 'fsa-1', type: 'definition', front: 'Retained earnings roll-forward', back: 'Ending RE = beginning RE + net income − dividends declared.' },
  { id: 'fc-fsa-7', topicId: 'fsa', moduleId: 'fsa-2', type: 'formula', front: 'Basic vs diluted EPS', back: 'Basic = (NI − pref div)/WA shares. Diluted adds potential shares (if dilutive), adding back after-tax convertible interest.' },
  { id: 'fc-fsa-8', topicId: 'fsa', moduleId: 'fsa-3', type: 'definition', front: 'Goodwill', back: 'Arises only in acquisitions; not amortized, tested for impairment. Internally generated goodwill is never capitalized.' },
  { id: 'fc-fsa-9', topicId: 'fsa', moduleId: 'fsa-4', type: 'definition', front: 'Dividends paid: CFF or CFO?', back: 'US GAAP: dividends paid = CFF; interest paid/received &amp; dividends received = CFO. IFRS allows choices.' },
  { id: 'fc-fsa-10', topicId: 'fsa', moduleId: 'fsa-7', type: 'definition', front: 'Capitalize vs expense (year 1)', back: 'Capitalizing → higher income &amp; assets, outflow in CFI (CFO looks stronger), smoother earnings.' },
  { id: 'fc-fsa-11', topicId: 'fsa', moduleId: 'fsa-8', type: 'definition', front: 'Finance vs operating lease (lessee IS)', back: 'Both put ROU asset + lease liability on the B/S. Finance = depreciation + interest (front-loaded); operating (US GAAP) = single straight-line expense.' },
  { id: 'fc-fsa-12', topicId: 'fsa', moduleId: 'fsa-10', type: 'definition', front: 'Reporting vs results quality', back: 'Reporting quality = faithful representation; results quality = sustainable, adequate earnings.' },
  { id: 'fc-fsa-13', topicId: 'fsa', moduleId: 'fsa-12', type: 'definition', front: 'Top-down vs bottom-up revenue', back: 'Top-down: market size × share. Bottom-up: units × price.' },
  /* Corporate Issuers */
  { id: 'fc-ci-5', topicId: 'corp', moduleId: 'ci-1', type: 'definition', front: 'Corporate form advantages', back: 'Limited liability, perpetual life, and easier access to capital.' },
  { id: 'fc-ci-6', topicId: 'corp', moduleId: 'ci-2', type: 'definition', front: 'Principal–agent problem', back: 'Agents (managers) may act against principals’ (owners’) interests; also controlling vs minority, shareholders vs creditors.' },
  { id: 'fc-ci-7', topicId: 'corp', moduleId: 'ci-3', type: 'definition', front: 'Board governance best practice', back: 'Majority independent directors, split chair/CEO, no staggered board, independent committees.' },
  { id: 'fc-ci-8', topicId: 'corp', moduleId: 'ci-4', type: 'formula', front: 'Cost of forgoing a trade discount', back: '(1 + disc/(1−disc))^(365/days) − 1 — usually very expensive.' },
  { id: 'fc-ci-9', topicId: 'corp', moduleId: 'ci-8', type: 'definition', front: 'Durable competitive advantage', back: 'Network effects and switching costs let a business model keep capturing value.' },
  /* Equities */
  { id: 'fc-eq-7', topicId: 'equity', moduleId: 'eq-2', type: 'definition', front: 'Index weighting methods', back: 'Price-weighted (high price dominates), cap-weighted (momentum bias), equal-weighted (small-cap tilt, frequent rebalancing).' },
  { id: 'fc-eq-8', topicId: 'equity', moduleId: 'eq-4', type: 'definition', front: 'Depositary receipts (ADR/GDR)', back: 'Give access to foreign shares in a local market/currency; sponsored or unsponsored.' },
  { id: 'fc-eq-9', topicId: 'equity', moduleId: 'eq-5', type: 'definition', front: 'Trading costs', back: 'Explicit (commissions) + implicit (bid–ask spread, market impact, delay).' },
  { id: 'fc-eq-10', topicId: 'equity', moduleId: 'eq-7', type: 'definition', front: 'Disaggregated forecast', back: 'Project revenue, margins, investment and financing separately — not one blended growth rate.' },
  { id: 'fc-eq-11', topicId: 'equity', moduleId: 'eq-9', type: 'definition', front: 'DCF discount rate choice', back: 'Discount FCFF at WACC (firm value); FCFE or dividends at cost of equity (equity value).' },
  { id: 'fc-eq-12', topicId: 'equity', moduleId: 'eq-11', type: 'definition', front: 'Sell-side vs buy-side research', back: 'Sell-side: brokers, published (watch conflicts). Buy-side: asset managers, internal. Activist shorts profit if price falls.' },
  /* Fixed Income */
  { id: 'fc-fi-7', topicId: 'fixedincome', moduleId: 'fi-1', type: 'definition', front: 'Affirmative vs negative covenants', back: 'Affirmative = shall do; negative = shall not (limits on debt, liens, dividends).' },
  { id: 'fc-fi-8', topicId: 'fixedincome', moduleId: 'fi-2', type: 'definition', front: 'Callable vs putable', back: 'Callable favors the issuer (higher yield); putable favors the investor (lower yield).' },
  { id: 'fc-fi-9', topicId: 'fixedincome', moduleId: 'fi-4', type: 'definition', front: 'Commercial paper', back: 'Short-term, usually unsecured corporate funding.' },
  { id: 'fc-fi-10', topicId: 'fixedincome', moduleId: 'fi-5', type: 'definition', front: 'Inflation-linked bond (TIPS)', back: 'Principal is indexed to inflation; the fixed coupon rate applies to the adjusted principal.' },
  { id: 'fc-fi-11', topicId: 'fixedincome', moduleId: 'fi-8', type: 'formula', front: 'Floater coupon', back: 'Coupon = reference rate + quoted margin; resets each period, price near par at resets.' },
  { id: 'fc-fi-12', topicId: 'fixedincome', moduleId: 'fi-10', type: 'definition', front: 'Duration gap', back: 'Horizon &lt; MacDur → price risk dominates; horizon &gt; MacDur → reinvestment risk dominates; equal → they offset.' },
  { id: 'fc-fi-13', topicId: 'fixedincome', moduleId: 'fi-13', type: 'definition', front: 'Effective duration', back: 'Uses curve shifts; required for bonds with embedded options (cash flows depend on rates).' },
  { id: 'fc-fi-14', topicId: 'fixedincome', moduleId: 'fi-16', type: 'definition', front: 'Four Cs of credit', back: 'Capacity, collateral, covenants, character.' },
  { id: 'fc-fi-15', topicId: 'fixedincome', moduleId: 'fi-17', type: 'definition', front: 'Securitization: SPE &amp; tranching', back: 'SPE is bankruptcy-remote. Credit tranching redistributes default risk; time tranching redistributes prepayment risk.' },
  { id: 'fc-fi-16', topicId: 'fixedincome', moduleId: 'fi-19', type: 'definition', front: 'Contraction vs extension risk', back: 'Rates fall → refinancing → contraction (early principal). Rates rise → slower prepayment → extension.' },
  /* Derivatives */
  { id: 'fc-der-5', topicId: 'derivatives', moduleId: 'der-1', type: 'definition', front: 'Exchange-traded vs OTC', back: 'ETD: standardized, cleared, margined, low counterparty risk. OTC: customized, counterparty risk.' },
  { id: 'fc-der-6', topicId: 'derivatives', moduleId: 'der-2', type: 'definition', front: 'Forward commitment vs contingent claim', back: 'Forward/future/swap = both obligated. Option = a right, not an obligation (contingent claim).' },
  { id: 'fc-der-7', topicId: 'derivatives', moduleId: 'der-3', type: 'definition', front: 'Hedger / speculator / arbitrageur', back: 'Hedgers transfer risk, speculators take it, arbitrageurs enforce the law of one price.' },
  { id: 'fc-der-8', topicId: 'derivatives', moduleId: 'der-4', type: 'definition', front: 'Cost of carry', back: 'Carrying costs (storage) raise the forward price; benefits (dividends, convenience yield) lower it.' },
  { id: 'fc-der-9', topicId: 'derivatives', moduleId: 'der-6', type: 'definition', front: 'Futures vs forwards value', back: 'Futures mark to market daily (value resets to zero each day); forwards accumulate value until expiry.' },
  { id: 'fc-der-10', topicId: 'derivatives', moduleId: 'der-7', type: 'definition', front: 'Interest-rate swap', back: 'A series of forwards; the fixed-rate payer gains when rates rise.' },
  /* Alternatives */
  { id: 'fc-ai-5', topicId: 'alts', moduleId: 'ai-1', type: 'definition', front: 'Alternatives — common features', back: 'Illiquidity, less regulation/transparency, unique structures, higher fees, diversification potential.' },
  { id: 'fc-ai-6', topicId: 'alts', moduleId: 'ai-3', type: 'definition', front: 'Private-equity J-curve', back: 'Capital calls and fees push early returns negative; exits later drive the curve up.' },
  { id: 'fc-ai-7', topicId: 'alts', moduleId: 'ai-6', type: 'definition', front: 'Hedge-fund strategies', back: 'Equity hedge (long/short), event-driven (merger arb, distressed), relative value, macro, fund-of-funds.' },
  /* Portfolio Management */
  { id: 'fc-pm-6', topicId: 'portfolio', moduleId: 'pm-3', type: 'definition', front: 'Portfolio management process', back: 'Planning (IPS) → execution (allocation, selection) → feedback (monitor, rebalance, evaluate).' },
  { id: 'fc-pm-7', topicId: 'portfolio', moduleId: 'pm-6', type: 'definition', front: 'Value at Risk (VaR)', back: 'Minimum loss expected at a given probability over a horizon (e.g. 5% one-week VaR of $1m). Says nothing about the tail beyond.' },
  { id: 'fc-fi-17', topicId: 'fixedincome', moduleId: 'fi-3', type: 'definition', front: 'Where do bonds mostly trade?', back: 'Secondary trading is predominantly over-the-counter (dealer-based); liquidity varies widely by issue.' },
  { id: 'fc-fi-18', topicId: 'fixedincome', moduleId: 'fi-15', type: 'definition', front: 'Sovereign credit: local vs foreign currency', back: 'Local-currency rating can exceed the foreign-currency rating — a government can print its own currency to service local debt.' },
  { id: 'fc-fi-19', topicId: 'fixedincome', moduleId: 'fi-18', type: 'definition', front: 'Covered bond', back: 'Stays on the issuer’s balance sheet with dual recourse (cover pool + issuer) → generally safer than a comparable ABS.' },
];

/* accessors */
window.CFA = window.CFA || {};
window.CFA.flashcards = {
  all() { return window.FLASHCARDS; },
  byTopic(id) { return window.FLASHCARDS.filter((c) => c.topicId === id); },
};
