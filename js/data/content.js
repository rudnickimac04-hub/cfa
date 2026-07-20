/* Module content: Learning Outcome Statements (LOS) + synthetic study notes.
 * Format per module id: { los: [ {id, text, status} ], notes: "<html>" }.
 * `status` on a LOS is vs 2026: "new" | "changed" | "unchanged".
 * LOS phrasing mirrors the official CFA command words; verify against the
 * official Learning Outcome document if you need them verbatim.
 * Everything here is plain data loaded via <script>, so it edits by hand easily. */
window.CONTENT = {

  /* ==================== ETHICS (deep) ==================== */
  'eth-1': {
    los: [
      { id: 'eth-1-a', text: 'explain ethics and the role of a code of ethics', status: 'unchanged' },
      { id: 'eth-1-b', text: 'contrast ethical standards with legal standards', status: 'unchanged' },
      { id: 'eth-1-c', text: 'describe the need for high ethical standards in investment management', status: 'unchanged' },
      { id: 'eth-1-d', text: 'identify challenges to ethical conduct and describe a framework for ethical decision making', status: 'unchanged' },
    ],
    notes: `
      <h4>Why ethics matters in finance</h4>
      <p>Investment professionals are entrusted with other people's money in a system built on <strong>trust</strong>. Ethical failures impose costs far beyond one firm — they raise the risk premium investors demand, reduce market participation and ultimately raise the cost of capital for everyone.</p>
      <ul>
        <li><strong>Ethics</strong> = shared beliefs about what is good/acceptable behaviour, expressed as a set of moral principles.</li>
        <li>A <strong>profession</strong> earns trust through competence, a code of conduct and a client-first orientation.</li>
      </ul>
      <h4>Ethics vs law</h4>
      <ul>
        <li>Laws are the floor; ethics can require <strong>more</strong> than the law. Some legal acts are unethical, and some ethical acts may be technically restricted.</li>
        <li>New ethical problems often appear before the law catches up — professionals cannot simply hide behind "it was legal".</li>
      </ul>
      <h4>Framework for ethical decision-making</h4>
      <ol>
        <li><strong>Identify</strong>: relevant facts, stakeholders and duties, ethical principles, conflicts of interest.</li>
        <li><strong>Consider</strong>: situational influences, seek additional guidance, consider alternative actions.</li>
        <li><strong>Decide and act.</strong></li>
        <li><strong>Reflect</strong>: did the outcome confirm the decision was sound?</li>
      </ol>
      <div class="callout tip"><span class="callout-label">Exam idea: </span>Situational influences (loyalty to employer, pressure to hit targets, the prospect of a bonus) push otherwise honest people toward poor choices. A framework protects you from rationalising in the moment.</div>`,
  },
  'eth-2': {
    los: [
      { id: 'eth-2-a', text: 'describe the six components of the Code of Ethics', status: 'unchanged' },
      { id: 'eth-2-b', text: 'state the seven Standards of Professional Conduct and explain their scope', status: 'unchanged' },
    ],
    notes: `
      <h4>Code of Ethics — six components</h4>
      <ul>
        <li>Act with <strong>integrity, competence, diligence, respect</strong> and in an ethical manner with the public, clients, prospects, employers, employees and colleagues.</li>
        <li>Place the <strong>integrity of the profession and clients' interests above your own</strong>.</li>
        <li>Use reasonable care and exercise independent professional judgment.</li>
        <li>Practice and encourage others to practice in a professional and ethical manner that reflects credit on the profession.</li>
        <li>Promote the integrity and viability of the global capital markets for the ultimate benefit of society.</li>
        <li>Maintain and improve professional competence and strive to maintain and improve the competence of other investment professionals.</li>
      </ul>
      <h4>The seven Standards of Professional Conduct</h4>
      <table>
        <tr><th>#</th><th>Standard</th><th>Sub-standards</th></tr>
        <tr><td>I</td><td>Professionalism</td><td>A Knowledge of the Law · B Independence &amp; Objectivity · C Misrepresentation · D Misconduct</td></tr>
        <tr><td>II</td><td>Integrity of Capital Markets</td><td>A Material Nonpublic Information · B Market Manipulation</td></tr>
        <tr><td>III</td><td>Duties to Clients</td><td>A Loyalty, Prudence &amp; Care · B Fair Dealing · C Suitability · D Performance Presentation · E Preservation of Confidentiality</td></tr>
        <tr><td>IV</td><td>Duties to Employers</td><td>A Loyalty · B Additional Compensation Arrangements · C Responsibilities of Supervisors</td></tr>
        <tr><td>V</td><td>Investment Analysis, Recommendations &amp; Actions</td><td>A Diligence &amp; Reasonable Basis · B Communication with Clients · C Record Retention</td></tr>
        <tr><td>VI</td><td>Conflicts of Interest</td><td>A Disclosure of Conflicts · B Priority of Transactions · C Referral Fees</td></tr>
        <tr><td>VII</td><td>Responsibilities as a CFA Member/Candidate</td><td>A Conduct in the CFA Program · B Reference to CFA Institute, the CFA Designation &amp; the Program</td></tr>
      </table>
      <div class="callout"><span class="callout-label">Golden rule: </span>When local law and the Code &amp; Standards differ, follow the <strong>stricter</strong>. If there is no applicable law, the Code &amp; Standards govern.</div>`,
  },
  'eth-3': {
    los: [
      { id: 'eth-3-a', text: 'demonstrate the application of the Code of Ethics and Standard I (Professionalism) to situations involving issues of professional integrity', status: 'new' },
      { id: 'eth-3-b', text: 'recommend practices and procedures designed to prevent violations of Standard I', status: 'new' },
    ],
    notes: `
      <h4>I(A) Knowledge of the Law</h4>
      <ul>
        <li>Understand and comply with all applicable laws, rules and regulations; when they conflict, follow the <strong>strictest</strong>.</li>
        <li>Do not knowingly participate in a violation; <strong>dissociate</strong> from illegal or unethical activity (and, where required, report it).</li>
      </ul>
      <h4>I(B) Independence &amp; Objectivity</h4>
      <ul>
        <li>Maintain independence; do not accept gifts, benefits or pressure that could compromise judgment.</li>
        <li>Gifts <strong>from clients</strong> for prior performance may be accepted with <strong>disclosure to the employer</strong>; benefits from issuers/third parties that could bias you should be <strong>refused</strong>.</li>
        <li>Modest, token items are acceptable; travel/lodging paid by a company under review threatens independence — use commercial transport instead.</li>
      </ul>
      <h4>I(C) Misrepresentation</h4>
      <ul>
        <li>No untrue statements or omissions of material fact; no guaranteeing returns on volatile investments; <strong>no plagiarism</strong> (cite sources, but you may use recognised statistical/factual data without attribution).</li>
      </ul>
      <h4>I(D) Misconduct</h4>
      <ul>
        <li>No dishonesty, fraud or deceit; nothing reflecting adversely on professional reputation, integrity or competence (personal conduct counts).</li>
      </ul>
      <div class="callout tip"><span class="callout-label">Prevent it: </span>Keep current on regulations, disclose gifts to compliance, have a supervisor pre-approve external-paid travel, and attribute third-party work.</div>`,
  },
  'eth-4': {
    los: [
      { id: 'eth-4-a', text: 'demonstrate the application of the Code and Standard II (Integrity of Capital Markets)', status: 'new' },
      { id: 'eth-4-b', text: 'recommend practices to prevent violations relating to material nonpublic information and market manipulation', status: 'new' },
    ],
    notes: `
      <h4>II(A) Material Nonpublic Information (MNPI)</h4>
      <ul>
        <li>Information is <strong>material</strong> if it would affect the price or a reasonable investor's decision; <strong>nonpublic</strong> until disseminated to the marketplace.</li>
        <li>Do not act or cause others to act on MNPI.</li>
        <li><strong>Mosaic theory</strong>: combining public information with <em>nonmaterial</em> nonpublic pieces to reach a conclusion is <strong>allowed</strong> — not a violation.</li>
        <li>Control MNPI with <strong>information barriers</strong> ("firewalls") and restricted/watch lists.</li>
      </ul>
      <h4>II(B) Market Manipulation</h4>
      <ul>
        <li>No transaction-based manipulation (e.g., wash trades, "painting the tape", cornering) and no information-based manipulation (spreading false rumours, pump-and-dump).</li>
        <li>Legitimate trading strategies and providing accurate information are fine even if they move prices.</li>
      </ul>
      <div class="callout"><span class="callout-label">Trap: </span>Overhearing MNPI (e.g., in an elevator) and trading is still a violation — the <em>source</em> doesn't matter, only that it's material and nonpublic.</div>`,
  },
  'eth-5': {
    los: [
      { id: 'eth-5-a', text: 'demonstrate the application of the Code and Standard III (Duties to Clients)', status: 'new' },
      { id: 'eth-5-b', text: 'recommend practices to prevent violations relating to duties to clients', status: 'new' },
    ],
    notes: `
      <h4>III(A) Loyalty, Prudence &amp; Care</h4>
      <ul>
        <li>Place clients' interests first; act with the care and prudence of a fiduciary. Know who the client is (for a pension, the beneficiaries).</li>
        <li>Use client brokerage (soft dollars) only for the client's benefit; seek best execution.</li>
      </ul>
      <h4>III(B) Fair Dealing</h4>
      <ul>
        <li>Deal fairly and objectively with all clients when disseminating recommendations or taking action. <strong>Fair ≠ equal</strong> — simultaneous notification isn't always possible, but you cannot systematically disadvantage some clients.</li>
        <li>Premium service levels are acceptable if <strong>disclosed</strong> and available to all who qualify/pay.</li>
      </ul>
      <h4>III(C) Suitability</h4>
      <ul>
        <li>With discretion: understand the client via an <strong>IPS</strong>, ensure suitability against their objectives/constraints, judged at the <strong>portfolio level</strong>.</li>
        <li>For advisory-only (no discretion) and index/mandate funds, suitability is relative to the stated mandate.</li>
      </ul>
      <h4>III(D) Performance Presentation</h4>
      <ul><li>Fair, accurate and complete; don't cherry-pick or imply guaranteed results.</li></ul>
      <h4>III(E) Preservation of Confidentiality</h4>
      <ul><li>Keep client information confidential unless it concerns illegal activity, disclosure is required by law, or the client permits it. Applies to former and prospective clients too.</li></ul>`,
  },
  'eth-6': {
    los: [
      { id: 'eth-6-a', text: 'demonstrate the application of the Code and Standard IV (Duties to Employers)', status: 'new' },
      { id: 'eth-6-b', text: 'recommend practices to prevent violations relating to duties to employers', status: 'new' },
    ],
    notes: `
      <h4>IV(A) Loyalty</h4>
      <ul>
        <li>Act for the employer's benefit; don't deprive them of your skills, divulge confidential information or harm them.</li>
        <li>Independent practice for compensation requires employer consent. When leaving, you may not take records/client lists (they are the <strong>employer's property</strong>) or solicit clients before departure; memory and skills are yours.</li>
        <li>Whistleblowing that protects the market/clients can override loyalty.</li>
      </ul>
      <h4>IV(B) Additional Compensation Arrangements</h4>
      <ul><li>No gifts/benefits that compete with, or conflict with, the employer's interest without <strong>written consent</strong> from all parties.</li></ul>
      <h4>IV(C) Responsibilities of Supervisors</h4>
      <ul>
        <li>Make reasonable efforts to detect and prevent violations by those under your supervision; ensure adequate compliance systems.</li>
        <li>If compliance procedures are inadequate, decline supervisory responsibility (in writing) until they are fixed. A violation by a subordinate can make the supervisor culpable.</li>
      </ul>`,
  },
  'eth-7': {
    los: [
      { id: 'eth-7-a', text: 'demonstrate the application of the Code and Standard V (Investment Analysis, Recommendations, and Actions)', status: 'new' },
      { id: 'eth-7-b', text: 'recommend practices to prevent violations relating to analysis, recommendations, and actions', status: 'new' },
    ],
    notes: `
      <h4>V(A) Diligence &amp; Reasonable Basis</h4>
      <ul>
        <li>Have a reasonable, adequate basis supported by research for any analysis, recommendation or action.</li>
        <li>Using third-party or quantitative research requires diligence on its soundness; you remain responsible.</li>
      </ul>
      <h4>V(B) Communication with Clients</h4>
      <ul>
        <li>Distinguish <strong>fact from opinion</strong>; disclose the basic process and significant limitations/risks; disclose changes that might materially affect the process.</li>
        <li>Identify important factors in the recommendation.</li>
      </ul>
      <h4>V(C) Record Retention</h4>
      <ul>
        <li>Keep records supporting analysis and communications. If no regulatory requirement applies, <strong>7 years</strong> is recommended. Records are the <strong>firm's property</strong>.</li>
      </ul>
      <div class="callout tip"><span class="callout-label">Communication: </span>A short recommendation may omit detail, but you must keep the supporting analysis and provide it on request.</div>`,
  },
  'eth-8': {
    los: [
      { id: 'eth-8-a', text: 'demonstrate the application of the Code and Standard VI (Conflicts of Interest)', status: 'new' },
      { id: 'eth-8-b', text: 'recommend practices to prevent violations relating to conflicts of interest', status: 'new' },
    ],
    notes: `
      <h4>VI(A) Disclosure of Conflicts</h4>
      <ul>
        <li>Fully and fairly disclose all matters that could impair independence/objectivity or interfere with duties — to clients, prospects and employer. Disclosures must be prominent and in plain language.</li>
        <li>Examples: broker/dealer relationships, ownership of the covered security, being a board member.</li>
      </ul>
      <h4>VI(B) Priority of Transactions</h4>
      <ul>
        <li><strong>Clients and employer come before personal transactions.</strong> Personal (beneficial-ownership) trades must not disadvantage clients or exploit your position.</li>
        <li>Do not front-run; give clients an adequate opportunity to act on a recommendation first.</li>
      </ul>
      <h4>VI(C) Referral Fees</h4>
      <ul><li>Disclose to employer, clients and prospects any compensation/benefit received or paid for the referral of products or services.</li></ul>`,
  },
  'eth-9': {
    los: [
      { id: 'eth-9-a', text: 'demonstrate the application of the Code and Standard VII (Responsibilities as a CFA Institute Member or CFA Candidate)', status: 'new' },
      { id: 'eth-9-b', text: 'recommend practices to prevent violations relating to responsibilities as a member or candidate', status: 'new' },
    ],
    notes: `
      <h4>VII(A) Conduct in the CFA Program</h4>
      <ul>
        <li>Don't compromise the reputation/integrity of CFA Institute or the exam: no cheating, no disclosing exam content, follow all exam rules and policies.</li>
        <li>You <em>may</em> express personal opinions about the program and disclose that you passed a level.</li>
      </ul>
      <h4>VII(B) Reference to CFA Institute, the Designation &amp; the Program</h4>
      <ul>
        <li>No misrepresentation of the meaning of membership, the designation or candidacy.</li>
        <li>"CFA" is an <strong>adjective, never a noun</strong>: "she is a CFA charterholder", not "she is a CFA". No implication that the charter guarantees performance.</li>
        <li>Candidates may state they are "a Level II candidate in the CFA Program" — only if actively enrolled/registered.</li>
      </ul>`,
  },
  'eth-10': {
    los: [
      { id: 'eth-10-a', text: 'evaluate practices and policies with respect to the Code and Standards using detailed scenarios', status: 'unchanged' },
      { id: 'eth-10-b', text: 'explain how the Code and Standards apply to specific situations and recommend the appropriate conduct', status: 'unchanged' },
    ],
    notes: `
      <h4>How to work an ethics vignette</h4>
      <ol>
        <li>Spot <strong>which Standard(s)</strong> the facts implicate — the sub-standard names are your checklist.</li>
        <li>Ask what the professional <em>did</em> vs what the Standard <em>requires</em>; a violation is a gap between the two.</li>
        <li>Choose the <strong>most conservative compliant action</strong> (disclose, dissociate, decline, seek written consent, apply the stricter law).</li>
      </ol>
      <h4>High-frequency traps (memorise)</h4>
      <ul>
        <li>Mosaic theory is <strong>allowed</strong>; trading on MNPI is not.</li>
        <li>Fair dealing means fair, not identical, treatment.</li>
        <li>Suitability is judged at the portfolio level.</li>
        <li>Client records belong to the employer; 7-year retention if no rule applies.</li>
        <li>Gifts from clients → disclose; gifts from issuers that bias you → refuse.</li>
        <li>Clients &amp; employer before self on every transaction.</li>
        <li>"CFA" is an adjective; never guarantee results.</li>
      </ul>
      <div class="callout"><span class="callout-label">Note: </span>GIPS is no longer a separate Level I reading in the 2027 curriculum — the focus is squarely on the Code and the seven Standards.</div>`,
  },

  /* ==================== FINANCIAL STATEMENT ANALYSIS (deep) ==================== */
  'fsa-1': {
    los: [
      { id: 'fsa-1-a', text: 'describe the roles of financial reporting and financial statement analysis', status: 'unchanged' },
      { id: 'fsa-1-b', text: 'describe the primary financial statements and their uses and interrelationships', status: 'unchanged' },
      { id: 'fsa-1-c', text: 'describe the financial statement analysis framework', status: 'unchanged' },
    ],
    notes: `
      <h4>The four statements and how they link</h4>
      <ul>
        <li><strong>Balance sheet</strong>: A = L + E at a point in time. <strong>Income statement</strong>: performance over a period (accrual basis). <strong>Cash flow statement</strong>: CFO + CFI + CFF = ΔCash. <strong>Statement of changes in equity</strong> ties net income and dividends into equity.</li>
        <li>Ending retained earnings = beginning RE + net income − dividends declared.</li>
        <li>Supplementary information: notes (accounting policies), MD&amp;A, and the <strong>auditor's report</strong> (unqualified = "clean").</li>
      </ul>
      <h4>Analysis framework</h4>
      <ol>
        <li>State the purpose/context. 2) Collect data. 3) Process data (ratios, common-size). 4) Analyse/interpret. 5) Report conclusions. 6) Update.</li>
      </ol>`,
  },
  'fsa-2': {
    los: [
      { id: 'fsa-2-a', text: 'describe general principles of revenue and expense recognition', status: 'unchanged' },
      { id: 'fsa-2-b', text: 'analyze and compare a company’s income statements, including common-size analysis and EPS', status: 'unchanged' },
    ],
    notes: `
      <h4>Revenue recognition (5-step model)</h4>
      <ol><li>Identify the contract. 2) Identify performance obligations. 3) Determine the transaction price. 4) Allocate price to obligations. 5) Recognise revenue as obligations are satisfied.</li></ol>
      <h4>Expenses &amp; EPS</h4>
      <ul>
        <li>Matching principle; capitalising vs expensing; depreciation choices (straight-line vs accelerated).</li>
        <li><strong>Basic EPS</strong> = (NI − preferred dividends) / weighted-average shares.</li>
        <li><strong>Diluted EPS</strong>: add back after-tax interest on convertible debt / preferred dividends on convertibles, add potential shares (if-converted, treasury-stock method) — only if <em>dilutive</em>.</li>
        <li>Common-size income statement: each line as a % of revenue.</li>
      </ul>`,
  },
  'fsa-3': {
    los: [
      { id: 'fsa-3-a', text: 'explain the measurement bases of assets and liabilities on the balance sheet', status: 'unchanged' },
      { id: 'fsa-3-b', text: 'analyze a balance sheet using common-size analysis and liquidity/solvency ratios', status: 'unchanged' },
    ],
    notes: `
      <h4>Measurement &amp; classification</h4>
      <ul>
        <li>Current vs non-current; measurement mixes historical cost, amortised cost and fair value.</li>
        <li>Marketable securities: amortised cost, FVPL (fair value through P&amp;L), or FVOCI — classification drives where gains/losses land.</li>
        <li>Intangibles: purchased are capitalised; internally generated (except some development costs under IFRS) are expensed. Goodwill = only from acquisitions; not amortised, tested for impairment.</li>
      </ul>
      <h4>Common-size &amp; ratios</h4>
      <ul><li>Vertical common-size: each item as % of total assets. Liquidity: current, quick, cash ratios. Solvency: debt-to-equity, financial leverage.</li></ul>`,
  },
  'fsa-4': {
    los: [
      { id: 'fsa-4-a', text: 'describe how the cash flow statement is linked to the income statement and balance sheet', status: 'unchanged' },
      { id: 'fsa-4-b', text: 'contrast cash flow classifications under IFRS and US GAAP', status: 'unchanged' },
    ],
    notes: `
      <h4>Classifications</h4>
      <table>
        <tr><th>Item</th><th>US GAAP</th><th>IFRS</th></tr>
        <tr><td>Interest paid</td><td>CFO</td><td>CFO or CFF</td></tr>
        <tr><td>Interest &amp; dividends received</td><td>CFO</td><td>CFO or CFI</td></tr>
        <tr><td>Dividends paid</td><td>CFF</td><td>CFO or CFF</td></tr>
        <tr><td>Taxes</td><td>CFO</td><td>CFO (unless tied to investing/financing)</td></tr>
      </table>
      <p>Operating cash flow may be presented by the <strong>direct</strong> method (actual receipts/payments) or the <strong>indirect</strong> method (net income adjusted). Investing and financing are always direct.</p>`,
  },
  'fsa-5': {
    los: [
      { id: 'fsa-5-a', text: 'compute and interpret operating cash flow using the indirect method', status: 'unchanged' },
      { id: 'fsa-5-b', text: 'compute free cash flow measures and cash-flow ratios', status: 'unchanged' },
    ],
    notes: `
      <h4>Indirect CFO</h4>
      <p>NI + non-cash charges (D&amp;A, impairments) − gains on disposal ± working-capital changes. <strong>Increase in an asset (A/R, inventory) uses cash</strong> (subtract); increase in a liability (A/P) provides cash (add).</p>
      <h4>Free cash flow</h4>
      <ul>
        <li><strong>FCFF</strong> = CFO + interest × (1 − tax) − fixed capital investment.</li>
        <li><strong>FCFE</strong> = CFO − FCInv + net borrowing.</li>
      </ul>
      <div class="callout tip"><span class="callout-label">Try it: </span>NI 100, dep 20, ↑A/R 15, ↑A/P 10 → CFO = 100 + 20 − 15 + 10 = 115.</div>`,
  },
  'fsa-6': {
    los: [
      { id: 'fsa-6-a', text: 'compare inventory valuation methods (FIFO, LIFO, weighted average) and their effects', status: 'unchanged' },
      { id: 'fsa-6-b', text: 'convert LIFO to FIFO using the LIFO reserve and analyze inventory', status: 'unchanged' },
    ],
    notes: `
      <h4>Cost flow assumptions (rising prices)</h4>
      <ul>
        <li><strong>FIFO</strong>: newest costs in ending inventory (higher inventory), oldest in COGS (lower COGS, higher income).</li>
        <li><strong>LIFO</strong> (US GAAP only): newest costs in COGS (higher COGS, lower income, <strong>lower taxes</strong>), old costs in inventory.</li>
        <li>Weighted average sits between the two.</li>
      </ul>
      <h4>LIFO reserve</h4>
      <ul>
        <li>Inventory<sub>FIFO</sub> = Inventory<sub>LIFO</sub> + LIFO reserve.</li>
        <li>COGS<sub>FIFO</sub> = COGS<sub>LIFO</sub> − Δ LIFO reserve.</li>
      </ul>
      <p>Lower-of-cost-or-net-realisable-value (IFRS) / market (US GAAP) write-downs; IFRS allows reversals, US GAAP generally does not.</p>`,
  },
  'fsa-7': {
    los: [
      { id: 'fsa-7-a', text: 'analyze and compare the financial reporting of long-lived assets, including depreciation and impairment', status: 'unchanged' },
      { id: 'fsa-7-b', text: 'explain the effects of capitalizing vs expensing costs', status: 'unchanged' },
    ],
    notes: `
      <h4>Capitalise vs expense</h4>
      <ul><li>Capitalising raises early income and assets, shows the outflow in <strong>CFI</strong> (so CFO looks stronger), and smooths earnings; expensing does the opposite.</li></ul>
      <h4>Depreciation &amp; impairment</h4>
      <ul>
        <li>Straight-line = (cost − salvage)/life; DDB = 2/life × carrying value (ignore salvage until the floor).</li>
        <li>Impairment (IFRS): carrying &gt; recoverable amount (higher of fair value − costs to sell, and value in use). IFRS permits <strong>revaluation</strong> and impairment reversal; US GAAP does not (held-for-use).</li>
      </ul>`,
  },
  'fsa-8': {
    los: [
      { id: 'fsa-8-a', text: 'explain the financial reporting of leases and long-term debt for lessees and issuers', status: 'unchanged' },
      { id: 'fsa-8-b', text: 'describe the financial reporting of pensions and share-based compensation at a basic level', status: 'unchanged' },
    ],
    notes: `
      <h4>Leases (lessee)</h4>
      <ul>
        <li>Both finance and operating leases put a <strong>right-of-use asset</strong> and a <strong>lease liability</strong> on the balance sheet.</li>
        <li>Income statement differs: <strong>finance</strong> = depreciation + interest (front-loaded, higher early expense); <strong>operating</strong> (US GAAP) = a single straight-line lease expense.</li>
      </ul>
      <h4>Long-term debt &amp; equity</h4>
      <ul><li>Bonds issued at a discount/premium amortise to par; interest expense uses the effective-interest method. Defined-benefit pensions create an asset/liability for funded status.</li></ul>`,
  },
  'fsa-9': {
    los: [
      { id: 'fsa-9-a', text: 'explain deferred tax assets and liabilities and how they arise', status: 'unchanged' },
      { id: 'fsa-9-b', text: 'analyze the effect of tax-rate changes on deferred tax items', status: 'unchanged' },
    ],
    notes: `
      <h4>Deferred taxes</h4>
      <ul>
        <li><strong>DTL</strong> arises when carrying value of an asset &gt; its tax base (e.g., faster tax depreciation) — tax paid now is lower, higher later.</li>
        <li><strong>DTA</strong> from loss carryforwards, warranty/other provisions; a <strong>valuation allowance</strong> reduces a DTA if realisation is unlikely.</li>
        <li>A change in the tax rate re-measures existing DTL/DTA through tax expense in the period of the change.</li>
      </ul>`,
  },
  'fsa-10': {
    los: [
      { id: 'fsa-10-a', text: 'describe the spectrum of financial reporting quality and distinguish it from results quality', status: 'unchanged' },
      { id: 'fsa-10-b', text: 'describe accounting choices and warning signs used to manage or misstate earnings', status: 'unchanged' },
    ],
    notes: `
      <h4>Two dimensions</h4>
      <ul>
        <li><strong>Reporting quality</strong>: are the numbers a faithful representation (GAAP, decision-useful)? <strong>Results (earnings) quality</strong>: are the earnings sustainable and adequate?</li>
        <li>Spectrum: GAAP &amp; decision-useful &amp; sustainable → … → within GAAP but biased → non-GAAP / fraudulent.</li>
      </ul>
      <h4>Warning signs</h4>
      <ul><li>Aggressive revenue timing, capitalising operating costs, growing gap between net income and CFO, frequent "one-off" charges, related-party transactions, changing estimates to hit targets.</li></ul>`,
  },
  'fsa-11': {
    los: [
      { id: 'fsa-11-a', text: 'compute and interpret activity, liquidity, solvency, profitability and valuation ratios', status: 'unchanged' },
      { id: 'fsa-11-b', text: 'demonstrate DuPont decomposition of ROE', status: 'unchanged' },
    ],
    notes: `
      <h4>Ratio families</h4>
      <ul>
        <li>Activity: inventory turnover (COGS/avg inv), receivables turnover (rev/avg recv), days = 365/turnover; <strong>cash conversion cycle</strong> = DOH + DSO − days payables.</li>
        <li>Liquidity: current, quick, cash. Solvency: debt/equity, interest coverage (EBIT/interest).</li>
        <li>Profitability: gross/operating/net margin; ROA = NI/avg assets; ROE = NI/avg equity.</li>
      </ul>
      <h4>DuPont</h4>
      <ul>
        <li>3-way: ROE = net margin × asset turnover × leverage.</li>
        <li>5-way: tax burden × interest burden × EBIT margin × asset turnover × leverage.</li>
      </ul>
      <div class="callout"><span class="callout-label">Ask why: </span>an ROE rise from more leverage is lower quality than one from better margins.</div>`,
  },
  'fsa-12': {
    los: [
      { id: 'fsa-12-a', text: 'describe the steps in building a financial statement model and common behavioral/analytical pitfalls', status: 'unchanged' },
      { id: 'fsa-12-b', text: 'explain how competitive factors and inflation feed into revenue and cost forecasts', status: 'unchanged' },
    ],
    notes: `
      <h4>Building a model</h4>
      <ol><li>Forecast revenue (top-down: market size × share; or bottom-up: units × price). 2) Project margins/costs. 3) Working capital &amp; capex. 4) Build the three statements. 5) Sensitivity/scenario analysis.</li></ol>
      <h4>Pitfalls</h4>
      <ul><li>Overconfidence, anchoring to the past, ignoring competitive response and the industry life cycle, inconsistent assumptions across statements.</li></ul>`,
  },

  /* ==================== EQUITIES (deep) ==================== */
  'eq-1': {
    los: [
      { id: 'eq-1-a', text: 'describe classifications of markets, assets, and the functions of the financial system', status: 'unchanged' },
      { id: 'eq-1-b', text: 'compare positions, leverage, and order types (market, limit, stop)', status: 'unchanged' },
    ],
    notes: `
      <h4>Order types</h4>
      <ul>
        <li><strong>Market</strong> = immediacy (no price control); <strong>limit</strong> = price control (no execution guarantee); <strong>stop</strong> = becomes a market order when triggered (protection, not price improvement).</li>
      </ul>
      <h4>Margin</h4>
      <ul>
        <li>Leverage ratio = 1 / initial margin (50% margin → 2×).</li>
        <li>Margin-call price (long) = P₀ × (1 − initial margin)/(1 − maintenance margin).</li>
      </ul>`,
  },
  'eq-2': {
    los: [
      { id: 'eq-2-a', text: 'compare index weighting methods and their effects', status: 'unchanged' },
      { id: 'eq-2-b', text: 'describe rebalancing and reconstitution of indexes', status: 'unchanged' },
    ],
    notes: `
      <h4>Weighting</h4>
      <ul>
        <li><strong>Price-weighted</strong> (DJIA): dominated by high-priced stocks; divisor adjusts for splits.</li>
        <li><strong>Market-cap weighted</strong> (S&amp;P 500): float-adjusted; momentum bias toward large/overvalued names.</li>
        <li><strong>Equal-weighted</strong>: small-cap tilt; needs frequent rebalancing.</li>
      </ul>`,
  },
  'eq-3': {
    los: [
      { id: 'eq-3-a', text: 'distinguish the forms of market efficiency and their implications for analysis', status: 'unchanged' },
      { id: 'eq-3-b', text: 'describe market anomalies and the role of behavioral finance', status: 'unchanged' },
    ],
    notes: `
      <h4>Three forms</h4>
      <ul>
        <li><strong>Weak</strong>: prices reflect past market data → technical analysis can't add value.</li>
        <li><strong>Semi-strong</strong>: prices reflect all public info → fundamental analysis of public data can't add value.</li>
        <li><strong>Strong</strong>: prices reflect public and private info.</li>
      </ul>
      <p>Most evidence supports semi-strong efficiency; anomalies (January, momentum) tend to vanish after costs.</p>`,
  },
  'eq-4': {
    los: [
      { id: 'eq-4-a', text: 'describe types of equity securities and their characteristics, including depositary receipts', status: 'changed' },
      { id: 'eq-4-b', text: 'contrast the voting rights and risk/return of equity classes', status: 'changed' },
    ],
    notes: `
      <h4>Equity types</h4>
      <ul>
        <li>Common (residual claim, voting) vs preferred (fixed dividend, priority, usually non-voting; cumulative/participating/convertible variants).</li>
        <li>Voting: statutory vs cumulative; dual-class shares concentrate control.</li>
        <li><strong>Depositary receipts</strong> (ADRs/GDRs) give access to foreign shares in a local market/currency; sponsored vs unsponsored.</li>
      </ul>
      <p>Preferred value = D/r (perpetuity).</p>`,
  },
  'eq-5': {
    los: [
      { id: 'eq-5-a', text: 'describe the sources of total return to an equity investor', status: 'new' },
      { id: 'eq-5-b', text: 'describe the equity trading process, execution venues and transaction costs', status: 'new' },
    ],
    notes: `
      <h4>Sources of return</h4>
      <ul><li>Capital appreciation + dividends (+ reinvestment income + any currency effect for foreign holdings).</li>
      <li>Holding-period return HPR = (P₁ − P₀ + D)/P₀.</li></ul>
      <h4>Trading &amp; costs</h4>
      <ul><li>Execution venues (exchanges, dark pools), order-driven vs quote-driven markets; explicit costs (commissions) and implicit costs (bid–ask spread, market impact, delay).</li></ul>`,
  },
  'eq-6': {
    los: [
      { id: 'eq-6-a', text: 'analyze an industry using a framework such as Porter’s Five Forces and PESTLE', status: 'new' },
      { id: 'eq-6-b', text: 'describe industry life cycle stages and their strategic implications', status: 'new' },
    ],
    notes: `
      <h4>Porter's Five Forces</h4>
      <ul><li>Rivalry among competitors; threat of new entrants; threat of substitutes; bargaining power of suppliers; bargaining power of buyers. High forces → pressure on margins.</li></ul>
      <h4>PESTLE &amp; life cycle</h4>
      <ul><li>Political, Economic, Social, Technological, Legal, Environmental context.</li>
      <li>Life cycle: embryonic → growth → shakeout → mature → decline. Connect the framework to the <strong>valuation narrative</strong> (pricing power → margins → growth).</li></ul>`,
  },
  'eq-7': {
    los: [
      { id: 'eq-7-a', text: 'build a disaggregated revenue, margin, investment and financing forecast', status: 'new' },
      { id: 'eq-7-b', text: 'apply scenario analysis with probability weighting to forecasts', status: 'new' },
    ],
    notes: `
      <h4>Disaggregated forecasting</h4>
      <ul><li>Project revenue (units × price, or market × share), then margins, then reinvestment (capex, working capital) and financing separately rather than a single growth rate.</li>
      <li>Ground the forecast in the financial statements so the three statements stay consistent.</li></ul>
      <h4>Scenario analysis</h4>
      <ul><li>Build base/bull/bear cases, assign probabilities, and take the probability-weighted value — now treated as standard practice, not an add-on.</li></ul>`,
  },
  'eq-8': {
    los: [
      { id: 'eq-8-a', text: 'compare the major categories of equity valuation models', status: 'changed' },
      { id: 'eq-8-b', text: 'estimate value using the Gordon growth and multistage dividend models', status: 'changed' },
    ],
    notes: `
      <h4>Model categories</h4>
      <ul><li><strong>Present-value (DCF/DDM)</strong>, <strong>multiplier (relative)</strong>, and <strong>asset-based</strong> models — each suited to different firms.</li></ul>
      <h4>Dividend discount</h4>
      <ul>
        <li>Gordon growth: V₀ = D₁/(r − g), needs r &gt; g and stable growth; very sensitive to (r − g).</li>
        <li>Sustainable growth g = b × ROE (b = retention = 1 − payout).</li>
        <li>Multistage: forecast high-growth dividends, add a terminal value via Gordon at the start of the stable phase, discount everything back.</li>
      </ul>`,
  },
  'eq-9': {
    los: [
      { id: 'eq-9-a', text: 'estimate intrinsic value using free-cash-flow and dividend discount models', status: 'new' },
      { id: 'eq-9-b', text: 'select an appropriate discount rate and terminal value', status: 'new' },
    ],
    notes: `
      <h4>DCF mechanics</h4>
      <ul>
        <li>Value = Σ expected cash flows / (1 + r)<sup>t</sup> + terminal value discounted back.</li>
        <li>Discount FCFF at WACC (firm value), FCFE or dividends at the cost of equity (equity value).</li>
        <li>Terminal value = CF<sub>n+1</sub>/(r − g) — dominates the valuation, so test the long-run g carefully (g &lt; economy growth).</li>
      </ul>
      <div class="callout tip"><span class="callout-label">Compare to price: </span>value &gt; price → undervalued. Every Level I valuation question reduces to model value vs market price.</div>`,
  },
  'eq-10': {
    los: [
      { id: 'eq-10-a', text: 'value equity using price and enterprise-value multiples', status: 'new' },
      { id: 'eq-10-b', text: 'explain the method of comparables and justified multiples', status: 'new' },
    ],
    notes: `
      <h4>Multiples</h4>
      <ul>
        <li>P/E (needs positive, stable earnings; use normalised EPS if volatile); P/B (financials); P/S (most stable — sales rarely negative); EV/EBITDA (capital-structure neutral).</li>
        <li>Justified forward P/E = payout ratio (1 − b)/(r − g): higher payout/g ↑P/E, higher r ↓P/E.</li>
        <li>Method of comparables: benchmark the multiple to peers; a lower multiple than justified suggests undervaluation.</li>
      </ul>
      <h4>Enterprise value</h4>
      <ul><li>EV = market cap + debt + preferred − cash.</li></ul>`,
  },
  'eq-11': {
    los: [
      { id: 'eq-11-a', text: 'describe the elements and purpose of an equity research report', status: 'new' },
      { id: 'eq-11-b', text: 'contrast sell-side and buy-side research and describe activist short selling', status: 'new' },
    ],
    notes: `
      <h4>The research report</h4>
      <ul><li>Recommendation &amp; target price, valuation and key assumptions, business/industry analysis, risks, and disclosures of conflicts. "Initiating coverage" starts formal analysis.</li></ul>
      <h4>Sell-side vs buy-side</h4>
      <ul>
        <li><strong>Sell-side</strong>: at brokers/banks, published for clients — watch for conflicts (banking relationships).</li>
        <li><strong>Buy-side</strong>: at asset managers, for internal use.</li>
        <li><strong>Activist short sellers</strong> publish bearish theses hoping the price falls — their claims need independent verification (they have a position).</li>
      </ul>`,
  },
  'eq-12': {
    los: [
      { id: 'eq-12-a', text: 'explain single-factor (CAPM) and multi-factor models of required return', status: 'new' },
      { id: 'eq-12-b', text: 'estimate the cost of equity using CAPM and a multi-factor model', status: 'new' },
    ],
    notes: `
      <h4>From CAPM to multi-factor</h4>
      <ul>
        <li>CAPM: r = R<sub>f</sub> + β(E(R<sub>m</sub>) − R<sub>f</sub>) — a single market factor.</li>
        <li><strong>Multi-factor models</strong> (brought down from Level II) add factors such as size, value, momentum and profitability: r = R<sub>f</sub> + Σ βᵢ × (factor risk premiumᵢ).</li>
        <li>Estimated on real data via regression; more factors can better explain required return but risk overfitting.</li>
      </ul>`,
  },

  /* ==================== FIXED INCOME (deep) ==================== */
  'fi-1': {
    los: [{ id: 'fi-1-a', text: 'describe the features of a fixed-income security and the contents of a bond indenture', status: 'unchanged' }],
    notes: `<h4>Bond basics</h4><ul>
      <li>Issuer, maturity, par (face) value, coupon rate &amp; frequency, currency.</li>
      <li>The <strong>indenture</strong> is the legal contract; <strong>covenants</strong> are affirmative (shall do) or negative (shall not — limits on debt, liens, dividends).</li>
      <li>Seniority and collateral determine recovery.</li></ul>`,
  },
  'fi-2': {
    los: [{ id: 'fi-2-a', text: 'describe common cash-flow structures and coupon types', status: 'unchanged' }],
    notes: `<h4>Coupon &amp; principal structures</h4><ul>
      <li>Coupons: fixed, <strong>floating</strong> (reference rate + quoted margin), step-up, deferred, PIK, inflation-linked (principal adjusts).</li>
      <li>Principal: bullet (all at maturity), fully/partially amortising, sinking fund.</li>
      <li>Embedded options: callable (issuer benefit → higher yield), putable (investor benefit → lower yield), convertible.</li></ul>`,
  },
  'fi-3': {
    los: [{ id: 'fi-3-a', text: 'describe how fixed-income securities are issued and traded in primary and secondary markets', status: 'unchanged' }],
    notes: `<h4>Issuance &amp; trading</h4><ul>
      <li>Primary: underwritten offerings, best-efforts, shelf registration, auctions (government).</li>
      <li>Secondary: mostly <strong>over-the-counter</strong>, dealer-based; liquidity varies widely by issue.</li></ul>`,
  },
  'fi-4': {
    los: [{ id: 'fi-4-a', text: 'describe short-term and long-term funding options for corporate issuers', status: 'unchanged' }],
    notes: `<h4>Corporate funding</h4><ul>
      <li>Short-term: commercial paper, lines of credit, repos.</li>
      <li>Long-term: notes and bonds (secured/unsecured), medium-term notes.</li>
      <li>Investment grade ≥ BBB−/Baa3; below is high yield.</li></ul>`,
  },
  'fi-5': {
    los: [{ id: 'fi-5-a', text: 'describe the markets for government and related debt', status: 'unchanged' }],
    notes: `<h4>Government issuers</h4><ul>
      <li>Sovereign bonds (on-the-run vs off-the-run), T-bills/notes/bonds, inflation-linked (TIPS).</li>
      <li>Non-sovereign, quasi-government (agency), and supranational issuers.</li></ul>`,
  },
  'fi-6': {
    los: [
      { id: 'fi-6-a', text: 'calculate a bond’s price given a market discount rate', status: 'unchanged' },
      { id: 'fi-6-b', text: 'describe the relationships among price, coupon, yield and maturity', status: 'unchanged' },
    ],
    notes: `<h4>Pricing</h4><ul>
      <li>Price = PV of coupons + PV of par at the market discount rate.</li>
      <li>Coupon &lt; yield → <strong>discount</strong>; coupon &gt; yield → <strong>premium</strong>; prices "pull to par" as maturity nears.</li>
      <li>Full (dirty) price = flat (clean) price + accrued interest; AI = coupon × t/T.</li></ul>
      <div class="callout tip"><span class="callout-label">Calc: </span>3-yr 5% annual bond at 6% → 973.27 (a discount).</div>`,
  },
  'fi-7': {
    los: [{ id: 'fi-7-a', text: 'calculate and interpret yield and yield-spread measures for fixed-rate bonds', status: 'unchanged' }],
    notes: `<h4>Yields &amp; spreads</h4><ul>
      <li>YTM assumes hold-to-maturity, no default, reinvest coupons at YTM. Semiannual-bond-basis yield = 2 × semiannual IRR.</li>
      <li>G-spread (vs government), I-spread (vs swap), <strong>Z-spread</strong> (constant spread over the whole spot curve), OAS = Z-spread − option cost.</li></ul>`,
  },
  'fi-8': {
    los: [{ id: 'fi-8-a', text: 'calculate and interpret yield measures for floating-rate instruments and money-market instruments', status: 'unchanged' }],
    notes: `<h4>Floaters &amp; money market</h4><ul>
      <li>Floater coupon = reference rate + quoted margin; price returns near par at each reset. The <strong>required margin</strong> vs quoted margin drives premium/discount.</li>
      <li>Money-market yields: discount basis vs add-on basis; convert carefully (360 vs 365 day count).</li></ul>`,
  },
  'fi-9': {
    los: [{ id: 'fi-9-a', text: 'define spot, par and forward rates and calculate forward rates from spot rates', status: 'unchanged' }],
    notes: `<h4>The term structure</h4><ul>
      <li>Spot rates price each cash flow separately; the no-arbitrage price uses spot rates.</li>
      <li>Forward rate: (1+z₂)² = (1+z₁)(1+f₁,₁). On an upward-sloping curve the forward &gt; both spots.</li>
      <li>Par rate = coupon that prices a bond at par given the spot curve.</li></ul>
      <div class="callout tip"><span class="callout-label">Calc: </span>z₁=3%, z₂=4% → 1y1y ≈ (1.04²/1.03) − 1 = 5.01%.</div>`,
  },
  'fi-10': {
    los: [{ id: 'fi-10-a', text: 'describe the sources of return from a bond and interest-rate risk over an investment horizon', status: 'unchanged' }],
    notes: `<h4>Sources of return &amp; horizon</h4><ul>
      <li>Coupon + reinvestment + price change. Rising rates: reinvestment gains but capital loss (and vice-versa).</li>
      <li><strong>Duration gap</strong>: horizon &lt; Macaulay duration → price risk dominates; horizon &gt; MacDur → reinvestment risk dominates; equal → they offset.</li></ul>`,
  },
  'fi-11': {
    los: [{ id: 'fi-11-a', text: 'calculate and interpret Macaulay, modified and money duration', status: 'unchanged' }],
    notes: `<h4>Duration</h4><ul>
      <li>Macaulay = weighted-average time to cash flows; <strong>Modified = MacDur/(1 + r)</strong> = % price change per 1% Δyield.</li>
      <li>Approx modified duration = (PV₋ − PV₊)/(2 × Δy × PV₀).</li>
      <li>Money duration = ModDur × full price; PVBP = money duration × 0.0001.</li>
      <li>Duration ↑ with maturity, ↓ with coupon and with yield; zero-coupon MacDur = maturity.</li></ul>`,
  },
  'fi-12': {
    los: [{ id: 'fi-12-a', text: 'calculate and interpret convexity and estimate price change using duration and convexity', status: 'unchanged' }],
    notes: `<h4>Convexity</h4><ul>
      <li>%ΔPrice ≈ −ModDur × Δy + ½ × Convexity × (Δy)². The convexity term is always positive for option-free bonds (helps in both directions).</li></ul>
      <div class="callout tip"><span class="callout-label">Calc: </span>ModDur 7.2, Conv 65, +75bp → −5.40% + 0.18% = −5.22%.</div>`,
  },
  'fi-13': {
    los: [{ id: 'fi-13-a', text: 'describe curve-based and empirical risk measures, including effective duration', status: 'unchanged' }],
    notes: `<h4>Curve-based risk</h4><ul>
      <li><strong>Effective duration</strong> uses parallel curve shifts — required for bonds with embedded options (cash flows depend on rates).</li>
      <li>Key-rate (partial) durations capture non-parallel shifts. Callable bonds show <strong>negative convexity</strong> at low yields.</li>
      <li>Empirical duration is estimated from observed price/yield data (captures spread behaviour).</li></ul>`,
  },
  'fi-14': {
    los: [{ id: 'fi-14-a', text: 'describe credit risk, credit ratings, and expected loss', status: 'unchanged' }],
    notes: `<h4>Credit risk</h4><ul>
      <li>Expected loss = probability of default × loss severity; loss severity = 1 − recovery rate.</li>
      <li>Seniority: secured → senior unsecured → subordinated. Spread risk usually dominates default risk for IG bonds.</li></ul>
      <div class="callout tip"><span class="callout-label">Calc: </span>PD 2%, recovery 40% → EL = 2% × 0.6 = 1.2%.</div>`,
  },
  'fi-15': {
    los: [{ id: 'fi-15-a', text: 'describe credit analysis for sovereign and non-sovereign government issuers', status: 'unchanged' }],
    notes: `<h4>Government credit</h4><ul>
      <li>Sovereign: ability (economy, fiscal/monetary flexibility, reserves, ability to print own currency) and willingness to pay.</li>
      <li>Local-currency vs foreign-currency ratings can differ. Non-sovereign: tax base, debt burden, support.</li></ul>`,
  },
  'fi-16': {
    los: [{ id: 'fi-16-a', text: 'describe credit analysis for corporate issuers, including the four Cs and ratios', status: 'unchanged' }],
    notes: `<h4>Corporate credit</h4><ul>
      <li><strong>Four Cs</strong>: capacity, collateral, covenants, character.</li>
      <li>Key ratios: leverage (debt/EBITDA), coverage (EBIT or EBITDA / interest), and the trend matters as much as the level.</li>
      <li>Spreads widen in downturns and when liquidity worsens.</li></ul>`,
  },
  'fi-17': {
    los: [{ id: 'fi-17-a', text: 'describe securitization, its benefits, and the role of the SPE', status: 'unchanged' }],
    notes: `<h4>Securitization</h4><ul>
      <li>An <strong>SPE</strong> isolates assets from the seller (bankruptcy remote). <strong>Credit tranching</strong> (waterfall) redistributes credit risk; <strong>time tranching</strong> redistributes prepayment risk.</li>
      <li>Benefits: access to funding, lower funding cost, risk transfer.</li></ul>`,
  },
  'fi-18': {
    los: [{ id: 'fi-18-a', text: 'describe asset-backed securities, including collateral and structures', status: 'unchanged' }],
    notes: `<h4>ABS</h4><ul>
      <li>Backed by pools of loans/receivables (auto, credit card, etc.). Amortising vs non-amortising collateral.</li>
      <li>Covered bonds stay on the issuer's balance sheet with <strong>dual recourse</strong> → generally safer than comparable ABS.</li></ul>`,
  },
  'fi-19': {
    los: [{ id: 'fi-19-a', text: 'describe mortgage-backed securities and prepayment risk', status: 'unchanged' }],
    notes: `<h4>MBS &amp; prepayment</h4><ul>
      <li>Pass-throughs face <strong>prepayment risk</strong>: contraction (rates fall → refinancing, principal returns early) and extension (rates rise → slower prepayment).</li>
      <li>CMOs (sequential-pay, PAC/support tranches) repackage prepayment risk across investors.</li></ul>`,
  },

  /* ==================== QUANTITATIVE METHODS (summary) ==================== */
  'qm-1': {
    los: [{ id: 'qm-1-a', text: 'calculate and interpret holding-period and other returns of financial assets', status: 'changed' }],
    notes: `<h4>Returns of financial assets</h4><ul>
      <li>Holding-period return HPR = (P₁ − P₀ + income)/P₀.</li>
      <li>Annualise via compounding: (1 + periodic)<sup>periods</sup> − 1.</li>
      <li>Real vs nominal, gross vs net (of fees/taxes), leveraged returns.</li></ul>`,
  },
  'qm-2': {
    los: [{ id: 'qm-2-a', text: 'compare arithmetic, geometric, money-weighted and time-weighted returns', status: 'new' }],
    notes: `<h4>Types of return</h4><ul>
      <li><strong>Arithmetic</strong> mean = expected one-period return; <strong>geometric</strong> = compound growth (≤ arithmetic).</li>
      <li><strong>Money-weighted</strong> return = IRR of the cash flows (sensitive to timing of contributions); <strong>time-weighted</strong> removes cash-flow timing → best for judging a manager.</li>
      <li>Harmonic mean = average cost per share under cost averaging.</li></ul>`,
  },
  'qm-3': {
    los: [{ id: 'qm-3-a', text: 'describe the purpose and construction of return benchmarks', status: 'new' }],
    notes: `<h4>Benchmarking returns</h4><ul>
      <li>A valid benchmark is specified in advance, appropriate, measurable, unambiguous, and investable.</li>
      <li>Active return = portfolio − benchmark; tracking error = std dev of active return.</li></ul>`,
  },
  'qm-4': {
    los: [{ id: 'qm-4-a', text: 'solve time-value-of-money problems for different cash-flow patterns', status: 'unchanged' }],
    notes: `<h4>Time value of money</h4><ul>
      <li>FV = PV(1+r)<sup>N</sup>; annuities and perpetuities (PV = PMT/r).</li>
      <li>EAR = (1 + r/m)<sup>m</sup> − 1; continuous: e<sup>r</sup> − 1.</li>
      <li>Annuity due = ordinary annuity × (1 + r).</li></ul>
      <div class="callout tip"><span class="callout-label">Tool: </span>use the TVM calculator (Calculators tab) for these.</div>`,
  },
  'qm-5': {
    los: [{ id: 'qm-5-a', text: 'calculate and interpret measures of central tendency, dispersion, skewness and kurtosis', status: 'unchanged' }],
    notes: `<h4>Statistical measures</h4><ul>
      <li>Variance = Σ(x − x̄)²/(n−1) for a sample; CV = s/x̄ (risk per unit of return).</li>
      <li>Positive skew: mean &gt; median &gt; mode (long right tail). Excess kurtosis &gt; 0 = fat tails.</li></ul>`,
  },
  'qm-6': {
    los: [{ id: 'qm-6-a', text: 'apply probability rules, expected value, covariance and portfolio variance', status: 'changed' }],
    notes: `<h4>Probability &amp; portfolio math</h4><ul>
      <li>Addition: P(A or B) = P(A)+P(B)−P(AB); multiplication: P(AB)=P(A|B)P(B); Bayes updates a prior.</li>
      <li>Portfolio variance (2 assets) = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρσ₁σ₂; diversification whenever ρ &lt; +1.</li></ul>`,
  },
  'qm-7': {
    los: [{ id: 'qm-7-a', text: 'describe historical simulation, bootstrapping and Monte Carlo simulation', status: 'changed' }],
    notes: `<h4>Simulation methods</h4><ul>
      <li><strong>Historical simulation</strong>: resample actual past returns. <strong>Bootstrap</strong>: resample with replacement to build a sampling distribution. <strong>Monte Carlo</strong>: draw from an assumed distribution.</li>
      <li>Used for VaR, option/complex-payoff valuation and retirement planning; only as good as the input assumptions.</li></ul>`,
  },
  'qm-8': {
    los: [{ id: 'qm-8-a', text: 'explain sampling, the central limit theorem and confidence intervals', status: 'unchanged' }],
    notes: `<h4>Estimation &amp; inference</h4><ul>
      <li>Standard error = σ/√n. CLT: for n ≥ 30 the sample mean is ~normal regardless of the population.</li>
      <li>CI for the mean = x̄ ± z<sub>α/2</sub> σ/√n (90→1.65, 95→1.96, 99→2.58); use t when variance is unknown.</li>
      <li>Resampling (jackknife, bootstrap) estimates the sampling distribution directly.</li></ul>`,
  },
  'qm-9': {
    los: [{ id: 'qm-9-a', text: 'formulate and interpret hypothesis tests', status: 'unchanged' }],
    notes: `<h4>Hypothesis testing</h4><ul>
      <li>H₀ always contains "="; reject if |test statistic| &gt; critical value or p-value &lt; α.</li>
      <li>Type I error = reject a true H₀ (prob = α); Type II = fail to reject a false H₀; power = 1 − P(Type II).</li>
      <li>Mean, unknown variance → t-test; one variance → chi-square; two variances → F-test.</li></ul>`,
  },
  'qm-10': {
    los: [{ id: 'qm-10-a', text: 'estimate and interpret a simple linear regression, including goodness-of-fit', status: 'changed' }],
    notes: `<h4>Simple linear regression</h4><ul>
      <li>Y = b₀ + b₁X + ε; slope estimated by least squares (minimise Σ residuals²).</li>
      <li>R² = fraction of variance explained; standard error of estimate measures fit; test b₁ with a t-test.</li>
      <li>Assumptions: linearity, homoskedasticity, independence, normally distributed errors.</li></ul>`,
  },
  'qm-11': {
    los: [{ id: 'qm-11-a', text: 'describe financial data science, machine-learning approaches and the use of large language models in investment analysis', status: 'new' }],
    notes: `<h4>Financial data science, AI &amp; LLMs</h4><ul>
      <li>Data types: structured vs unstructured (text, images); big-data "V"s (volume, velocity, variety, veracity).</li>
      <li>ML families: <strong>supervised</strong> (labelled — regression, classification), <strong>unsupervised</strong> (clustering, dimension reduction), and deep learning/neural nets.</li>
      <li><strong>Large language models</strong> process and generate text for tasks like summarisation, sentiment and information extraction — powerful but prone to <em>hallucination</em> and bias, so outputs need human verification and data governance.</li>
      <li>Pipeline: data collection → cleaning/preparation → exploration → model training → evaluation (watch overfitting).</li></ul>
      <div class="callout"><span class="callout-label">New for 2027: </span>this module reflects the curriculum's added coverage of AI/LLMs in financial analysis.</div>`,
  },

  /* ==================== ECONOMICS (summary) ==================== */
  'econ-1': {
    los: [{ id: 'econ-1-a', text: 'describe market structures and the profit-maximising behaviour of firms', status: 'unchanged' }],
    notes: `<h4>Firm &amp; market structures</h4><ul>
      <li>Perfect competition, monopolistic competition, oligopoly, monopoly — differ in number of firms, product differentiation and barriers.</li>
      <li>All profit-maximising firms produce where <strong>MR = MC</strong>. Long-run economic profit is zero under (monopolistic) competition.</li>
      <li>Elasticity: |E|&gt;1 elastic (price cut raises revenue); income and cross-price elasticities classify goods.</li></ul>`,
  },
  'econ-2': {
    los: [{ id: 'econ-2-a', text: 'describe business cycle phases and economic indicators', status: 'unchanged' }],
    notes: `<h4>Business cycles</h4><ul>
      <li>Phases: trough → expansion → peak → contraction.</li>
      <li>Leading indicators (permits, stock prices, yield spread), coincident (production, payrolls), lagging (CPI services, unemployment duration).</li>
      <li>Unemployment: frictional, structural, cyclical.</li></ul>`,
  },
  'econ-3': {
    los: [{ id: 'econ-3-a', text: 'explain fiscal policy tools and the fiscal multiplier', status: 'unchanged' }],
    notes: `<h4>Fiscal policy</h4><ul>
      <li>Spending and taxation; multiplier = 1/[1 − MPC(1 − t)]; crowding out limits its effect.</li>
      <li>Automatic stabilisers; concerns over deficits and debt sustainability.</li></ul>`,
  },
  'econ-4': {
    los: [{ id: 'econ-4-a', text: 'explain monetary policy tools, transmission and limitations', status: 'unchanged' }],
    notes: `<h4>Monetary policy</h4><ul>
      <li>Tools: policy rate, open-market operations, reserve requirements. Expansionary = buy securities / cut rates.</li>
      <li>Money neutrality (long run affects prices, not output); Fisher: nominal ≈ real + expected inflation.</li></ul>`,
  },
  'econ-5': {
    los: [{ id: 'econ-5-a', text: 'describe geopolitics and its effect on economies and investments', status: 'unchanged' }],
    notes: `<h4>Geopolitics</h4><ul>
      <li>Cooperation vs autarky; globalisation vs nationalism. Tools: national security, economic (tariffs, sanctions), financial.</li>
      <li>Assess geopolitical risk by likelihood and velocity of impact (event, exogenous, thematic risk).</li></ul>`,
  },
  'econ-6': {
    los: [{ id: 'econ-6-a', text: 'explain the benefits of trade and the effects of trade restrictions', status: 'unchanged' }],
    notes: `<h4>International trade</h4><ul>
      <li><strong>Comparative advantage</strong> (lower opportunity cost) drives gains even with an absolute disadvantage.</li>
      <li>Restrictions: tariffs, quotas, subsidies — usually reduce total welfare; capital restrictions too.</li></ul>`,
  },
  'econ-7': {
    los: [{ id: 'econ-7-a', text: 'describe the balance of payments and exchange-rate regimes', status: 'unchanged' }],
    notes: `<h4>Capital flows &amp; the FX market</h4><ul>
      <li>Current account + capital/financial account ≈ 0. Regimes range from dollarisation/currency board to free float.</li>
      <li>Marshall–Lerner: depreciation improves the trade balance if export+import demand elasticities sum &gt; 1 (J-curve short-run).</li></ul>`,
  },
  'econ-8': {
    los: [{ id: 'econ-8-a', text: 'calculate cross rates, forward rates and the forward premium/discount', status: 'unchanged' }],
    notes: `<h4>Exchange rate calculations</h4><ul>
      <li>Quote A/B = units of A (price) per unit of B (base). Cross rates cancel the common currency.</li>
      <li>Covered interest parity: F = S × (1 + i<sub>price</sub>)/(1 + i<sub>base</sub>); higher-rate currency trades at a forward discount.</li></ul>
      <div class="callout tip"><span class="callout-label">Calc: </span>S USD/EUR 1.10, USD 5%, EUR 3% → F = 1.10 × 1.05/1.03 = 1.1214.</div>`,
  },

  /* ==================== CORPORATE ISSUERS (summary) ==================== */
  'ci-1': {
    los: [{ id: 'ci-1-a', text: 'compare organizational forms and features of corporate issuers', status: 'unchanged' }],
    notes: `<h4>Issuer forms &amp; features</h4><ul>
      <li>Sole proprietorship, partnership, limited company (private vs public). Limited liability, access to capital, perpetual life.</li>
      <li>Owners (shareholders) vs the board vs management; debt vs equity claims.</li></ul>`,
  },
  'ci-2': {
    los: [{ id: 'ci-2-a', text: 'describe investors and other stakeholders and their claims', status: 'unchanged' }],
    notes: `<h4>Stakeholders</h4><ul>
      <li>Shareholders, debtholders, managers, employees, customers, suppliers, government.</li>
      <li>Principal–agent conflicts: managers vs shareholders, controlling vs minority, shareholders vs creditors.</li></ul>`,
  },
  'ci-3': {
    los: [{ id: 'ci-3-a', text: 'describe corporate governance mechanisms, risks and benefits, including ESG', status: 'unchanged' }],
    notes: `<h4>Governance</h4><ul>
      <li>Best practice: majority-independent board, split chair/CEO, no staggered board, independent committees.</li>
      <li>ESG integration: negative screening, integration, thematic, engagement.</li></ul>`,
  },
  'ci-4': {
    los: [{ id: 'ci-4-a', text: 'analyze working capital and liquidity', status: 'unchanged' }],
    notes: `<h4>Working capital &amp; liquidity</h4><ul>
      <li>Primary vs secondary sources of liquidity (using secondary signals stress). Drag vs pull on liquidity.</li>
      <li>Cost of forgoing a trade discount = (1 + disc/(1−disc))<sup>365/days</sup> − 1 — usually very high.</li></ul>`,
  },
  'ci-5': {
    los: [{ id: 'ci-5-a', text: 'evaluate capital investments using NPV and IRR', status: 'unchanged' }],
    notes: `<h4>Capital investments</h4><ul>
      <li>Use incremental after-tax cash flows; ignore sunk costs; include opportunity costs and externalities; ignore financing costs.</li>
      <li>NPV &gt; 0 → accept. NPV beats IRR when they conflict (size/timing, multiple IRRs).</li></ul>
      <div class="callout tip"><span class="callout-label">Tool: </span>use the NPV/IRR calculator (Calculators tab).</div>`,
  },
  'ci-6': {
    los: [{ id: 'ci-6-a', text: 'calculate and interpret the weighted average cost of capital', status: 'unchanged' }],
    notes: `<h4>Cost of capital</h4><ul>
      <li>WACC = w<sub>d</sub>r<sub>d</sub>(1−t) + w<sub>p</sub>r<sub>p</sub> + w<sub>e</sub>r<sub>e</sub>, target market-value weights; only debt gets a tax shield.</li>
      <li>Cost of equity: CAPM or bond-yield-plus-risk-premium. Pure-play: unlever then relever beta.</li></ul>`,
  },
  'ci-7': {
    los: [{ id: 'ci-7-a', text: 'describe capital structure theories and leverage', status: 'unchanged' }],
    notes: `<h4>Capital structure &amp; leverage</h4><ul>
      <li>DOL = Q(P−V)/[Q(P−V)−F]; DFL = EBIT/(EBIT−I); DTL = DOL × DFL.</li>
      <li>MM: irrelevant without taxes; with taxes value rises with debt (tax shield) until distress costs bite (trade-off). Pecking order: internal → debt → equity.</li></ul>`,
  },
  'ci-8': {
    los: [{ id: 'ci-8-a', text: 'describe business models and how they create and capture value', status: 'unchanged' }],
    notes: `<h4>Business models</h4><ul>
      <li>Who the customer is, the value proposition, channel, pricing (subscription, freemium, razor-and-blade), and cost structure.</li>
      <li>Network effects and switching costs create durable advantage.</li></ul>`,
  },

  /* ==================== DERIVATIVES (summary) ==================== */
  'der-1': {
    los: [{ id: 'der-1-a', text: 'describe features of derivative instruments and markets', status: 'unchanged' }],
    notes: `<h4>Derivative &amp; market features</h4><ul>
      <li>Exchange-traded (standardised, cleared, margined) vs OTC (customised, counterparty risk).</li>
      <li>Underlying types; clearinghouse guarantees and reduces counterparty risk.</li></ul>`,
  },
  'der-2': {
    los: [{ id: 'der-2-a', text: 'contrast forward commitments and contingent claims', status: 'unchanged' }],
    notes: `<h4>Forward commitments vs contingent claims</h4><ul>
      <li><strong>Forward commitments</strong> (forwards, futures, swaps): both parties obligated.</li>
      <li><strong>Contingent claims</strong> (options): the buyer has a right, not an obligation.</li></ul>`,
  },
  'der-3': {
    los: [{ id: 'der-3-a', text: 'describe the benefits, risks and uses of derivatives for issuers and investors', status: 'unchanged' }],
    notes: `<h4>Uses</h4><ul>
      <li>Benefits: price discovery, risk transfer, lower transaction costs, efficiency. Risks: leverage, complexity, basis risk.</li>
      <li>Hedgers transfer risk; speculators take it; arbitrageurs enforce the law of one price.</li></ul>`,
  },
  'der-4': {
    los: [{ id: 'der-4-a', text: 'explain arbitrage, replication and the cost of carry', status: 'unchanged' }],
    notes: `<h4>Arbitrage, replication, cost of carry</h4><ul>
      <li>No-arbitrage pricing: a derivative can be replicated by the underlying + financing; equal payoffs must have equal prices.</li>
      <li>Cost of carry: carrying costs (storage) raise the forward price; benefits (dividends, convenience yield) lower it.</li></ul>`,
  },
  'der-5': {
    los: [{ id: 'der-5-a', text: 'calculate and interpret the price and value of a forward contract', status: 'unchanged' }],
    notes: `<h4>Forwards</h4><ul>
      <li>F₀ = S₀(1 + r)<sup>T</sup> (adjust for carry/benefits). Value at initiation = 0.</li>
      <li>Value of a long forward during life: V<sub>t</sub> = S<sub>t</sub> − F₀/(1+r)<sup>T−t</sup>.</li></ul>
      <div class="callout tip"><span class="callout-label">Calc: </span>S 60, r 5%, 1y → F = 63; a market forward of 66 → arbitrage.</div>`,
  },
  'der-6': {
    los: [{ id: 'der-6-a', text: 'describe how futures differ from forwards in valuation (mark-to-market)', status: 'unchanged' }],
    notes: `<h4>Futures</h4><ul>
      <li>Daily <strong>mark-to-market</strong> through margin resets value to zero each day; forwards accumulate value until expiry.</li>
      <li>Prices converge to spot at expiry; interest-rate correlation causes small futures/forward price differences.</li></ul>`,
  },
  'der-7': {
    los: [{ id: 'der-7-a', text: 'describe the pricing and valuation of interest-rate and other swaps', status: 'unchanged' }],
    notes: `<h4>Swaps</h4><ul>
      <li>A swap = a series of forwards. Plain-vanilla interest-rate swap: the fixed-rate payer gains when rates rise.</li>
      <li>At initiation the swap fixed rate makes the value zero; value changes as rates move.</li></ul>`,
  },
  'der-8': {
    los: [{ id: 'der-8-a', text: 'describe option payoffs and the determinants of option value', status: 'unchanged' }],
    notes: `<h4>Options</h4><ul>
      <li>Call payoff = max(0, S−X); put = max(0, X−S). Buyer's max loss = premium.</li>
      <li>Value = intrinsic + time value. Call value ↑ with S, T, volatility, r; ↓ with X, dividends. Put mirrors it.</li></ul>`,
  },
  'der-9': {
    los: [{ id: 'der-9-a', text: 'explain put–call parity and synthetic positions', status: 'unchanged' }],
    notes: `<h4>Put–call parity</h4><ul>
      <li><strong>c + X/(1+r)<sup>T</sup> = p + S₀</strong> (European). "Fiduciary call = protective put."</li>
      <li>Rearrange to build synthetics; a violation is an arbitrage.</li></ul>
      <div class="callout tip"><span class="callout-label">Calc: </span>S 50, X 50, r 6%, c 6.50 → p = 6.50 + 47.17 − 50 = 3.67.</div>`,
  },
  'der-10': {
    los: [{ id: 'der-10-a', text: 'value an option using a one-period binomial model', status: 'unchanged' }],
    notes: `<h4>One-period binomial</h4><ul>
      <li>Risk-neutral probability π = (1 + r − d)/(u − d).</li>
      <li>Option value = [π·V<sub>u</sub> + (1−π)·V<sub>d</sub>]/(1+r). Actual probabilities and the stock's expected return are irrelevant.</li></ul>`,
  },

  /* ==================== ALTERNATIVE INVESTMENTS (summary) ==================== */
  'ai-1': {
    los: [{ id: 'ai-1-a', text: 'describe features, methods and structures of alternative investments', status: 'unchanged' }],
    notes: `<h4>Features &amp; structures</h4><ul>
      <li>Illiquidity, less regulation/transparency, limited data, unique structures, higher fees, diversification potential.</li>
      <li>Access: fund investing, co-investing, direct investing. Structures: limited partnerships (GP/LP).</li></ul>`,
  },
  'ai-2': {
    los: [{ id: 'ai-2-a', text: 'describe alternative-investment performance appraisal, fees and biases', status: 'unchanged' }],
    notes: `<h4>Performance &amp; fees</h4><ul>
      <li><strong>"2 and 20"</strong>: management fee on AUM + incentive fee on gains, often with a hurdle and a <strong>high-water mark</strong> (no incentive fee until prior losses are recovered).</li>
      <li>Metrics: IRR and MOIC for private funds; clawback protects LPs.</li>
      <li>Biases: survivorship and backfill inflate index returns; appraisal-based values smooth (understate) volatility.</li></ul>`,
  },
  'ai-3': {
    los: [{ id: 'ai-3-a', text: 'describe private equity and private debt strategies', status: 'unchanged' }],
    notes: `<h4>Private capital</h4><ul>
      <li>PE: leveraged buyouts (mature firms) and venture capital (stages seed → later); exits via trade sale, IPO, secondary.</li>
      <li>J-curve: capital calls first, distributions later. Private debt: direct lending, mezzanine, distressed.</li></ul>`,
  },
  'ai-4': {
    los: [{ id: 'ai-4-a', text: 'describe real estate and infrastructure investments and valuation', status: 'unchanged' }],
    notes: `<h4>Real estate &amp; infrastructure</h4><ul>
      <li>Access: direct, REITs, private funds. Valuation: comparable sales, income (value = NOI/cap rate), cost approach.</li>
      <li>Infrastructure: brownfield (existing, stable) vs greenfield (to build, riskier); often long-lived, inflation-linked.</li></ul>
      <div class="callout tip"><span class="callout-label">Calc: </span>NOI 450k, cap rate 6% → value = 7.5m.</div>`,
  },
  'ai-5': {
    los: [{ id: 'ai-5-a', text: 'describe natural-resource and commodity investments and their returns', status: 'unchanged' }],
    notes: `<h4>Natural resources</h4><ul>
      <li>Commodities, timberland and farmland. Commodity futures return ≈ price return + roll yield + collateral yield.</li>
      <li>Roll yield &gt; 0 in <strong>backwardation</strong> (futures &lt; spot), &lt; 0 in <strong>contango</strong>.</li></ul>`,
  },
  'ai-6': {
    los: [{ id: 'ai-6-a', text: 'describe hedge-fund strategies and structures', status: 'unchanged' }],
    notes: `<h4>Hedge funds</h4><ul>
      <li>Strategies: equity hedge (long/short), event-driven (merger arb, distressed), relative value, macro, fund-of-funds (extra fee layer).</li>
      <li>Lock-ups, gates and redemption notice periods manage liquidity.</li></ul>`,
  },
  'ai-7': {
    los: [{ id: 'ai-7-a', text: 'describe digital assets, distributed ledger technology and their risks', status: 'unchanged' }],
    notes: `<h4>Digital assets</h4><ul>
      <li>Cryptocurrencies, tokens (utility, security, NFTs) and stablecoins, built on <strong>distributed ledger technology</strong> (blockchain, proof-of-work vs proof-of-stake).</li>
      <li>Access: direct holding, coins/tokens, futures, funds. Risks: extreme volatility, custody/security, regulatory and fraud risk; diversification benefits are debated.</li></ul>`,
  },

  /* ==================== PORTFOLIO MANAGEMENT (summary) ==================== */
  'pm-1': {
    los: [{ id: 'pm-1-a', text: 'calculate and interpret portfolio risk and return, and describe diversification', status: 'unchanged' }],
    notes: `<h4>Risk &amp; return: Part I</h4><ul>
      <li>Portfolio return = weighted average; portfolio risk &lt; weighted average whenever ρ &lt; +1.</li>
      <li>Efficient frontier; adding a risk-free asset gives the capital allocation line.</li>
      <li>Risk-averse investors are paid only for <strong>systematic</strong> risk.</li></ul>`,
  },
  'pm-2': {
    los: [{ id: 'pm-2-a', text: 'explain the CAPM, the security market line and performance measures', status: 'unchanged' }],
    notes: `<h4>Risk &amp; return: Part II</h4><ul>
      <li>CAPM/SML: E(R) = R<sub>f</sub> + β(E(R<sub>m</sub>) − R<sub>f</sub>); above the SML = undervalued.</li>
      <li>Sharpe (total risk), Treynor (beta), Jensen's alpha, M² — Sharpe/M² for whole portfolios, Treynor/alpha for diversified ones.</li></ul>
      <div class="callout tip"><span class="callout-label">Calc: </span>Rf 2%, MRP 6%, β 1.5 → required = 2 + 1.5×6 = 11%.</div>`,
  },
  'pm-3': {
    los: [{ id: 'pm-3-a', text: 'describe the portfolio management process and types of investors', status: 'unchanged' }],
    notes: `<h4>Overview</h4><ul>
      <li>Steps: planning (IPS) → execution (asset allocation, selection) → feedback (monitor, rebalance, evaluate).</li>
      <li>Investor types: individuals and institutions (pensions, endowments, insurers, banks) with different horizons and constraints.</li></ul>`,
  },
  'pm-4': {
    los: [{ id: 'pm-4-a', text: 'describe the elements of an investment policy statement and asset allocation', status: 'unchanged' }],
    notes: `<h4>Planning &amp; construction</h4><ul>
      <li>IPS: <strong>R</strong>eturn and <strong>R</strong>isk objectives; constraints <strong>T-T-L-L-U</strong> (Time, Taxes, Liquidity, Legal, Unique).</li>
      <li>Risk tolerance = ability + willingness; if they conflict, use the lower and educate the client.</li>
      <li>Strategic asset allocation from capital-market expectations; rebalancing controls drift.</li></ul>`,
  },
  'pm-5': {
    los: [{ id: 'pm-5-a', text: 'distinguish cognitive errors from emotional biases and their effects', status: 'unchanged' }],
    notes: `<h4>Behavioral biases</h4><ul>
      <li><strong>Cognitive errors</strong> (belief-perseverance and processing: confirmation, anchoring, availability, hindsight) — easier to correct with information.</li>
      <li><strong>Emotional biases</strong> (loss aversion, overconfidence, status quo, endowment, regret aversion) — usually accommodated rather than eliminated.</li></ul>`,
  },
  'pm-6': {
    los: [{ id: 'pm-6-a', text: 'describe the risk-management process and measures', status: 'unchanged' }],
    notes: `<h4>Risk management</h4><ul>
      <li>Process: define risk tolerance → identify/measure risks → manage (accept, avoid, transfer via insurance, shift via derivatives).</li>
      <li>Measures: standard deviation, beta, duration, <strong>VaR</strong> (minimum loss at a given probability/horizon), CVaR, drawdown, stress tests.</li></ul>`,
  },
};

/* ---- merge LOS into the curriculum modules; expose note/LOS accessors ---- */
(function () {
  const C = window.CONTENT || {};
  (window.CURRICULUM && window.CURRICULUM.topics || []).forEach((t) => {
    t.modules.forEach((m) => { if (C[m.id] && C[m.id].los) m.los = C[m.id].los; });
  });
  window.CFA = window.CFA || {};
  window.CFA.content = {
    notes(id) { return (window.CONTENT[id] && window.CONTENT[id].notes) || ''; },
    los(id) { return (window.CONTENT[id] && window.CONTENT[id].los) || []; },
    hasNotes(id) { return !!(window.CONTENT[id] && window.CONTENT[id].notes); },
  };
})();
