/* CFA Level I — 2027 curriculum structure (Topic -> Module -> LOS).
 * Loaded as a classic <script> so it works from file:// (no fetch/import needed).
 * Module `status` is vs the 2026 curriculum: "new" | "revised" | "unchanged".
 * LOS are added per module in Stage 3; `los: []` means "not yet populated".
 * Weights are the official 2026 ranges (identical in 2027). */
window.CURRICULUM = {
  updatedFor: '2027 (February 2027 window onward)',
  topics: [
    {
      id: 'ethics', name: 'Ethical & Professional Standards', short: 'Ethics', weight: '15–20%',
      note: 'Guidance split into one module per Standard (I–VII) for 2027; GIPS removed from Level I.',
      modules: [
        { id: 'eth-1', name: 'Ethics and Trust in the Investment Profession', status: 'unchanged', los: [] },
        { id: 'eth-2', name: 'Code of Ethics & Standards of Professional Conduct (Overview)', status: 'unchanged', los: [] },
        { id: 'eth-3', name: 'Guidance for Standard I – Professionalism', status: 'new', los: [] },
        { id: 'eth-4', name: 'Guidance for Standard II – Integrity of Capital Markets', status: 'new', los: [] },
        { id: 'eth-5', name: 'Guidance for Standard III – Duties to Clients', status: 'new', los: [] },
        { id: 'eth-6', name: 'Guidance for Standard IV – Duties to Employers', status: 'new', los: [] },
        { id: 'eth-7', name: 'Guidance for Standard V – Investment Analysis, Recommendations & Actions', status: 'new', los: [] },
        { id: 'eth-8', name: 'Guidance for Standard VI – Conflicts of Interest', status: 'new', los: [] },
        { id: 'eth-9', name: 'Guidance for Standard VII – Responsibilities as a CFA Member/Candidate', status: 'new', los: [] },
        { id: 'eth-10', name: 'Application of the Code & Standards (Scenarios)', status: 'unchanged', los: [] },
      ],
    },
    {
      id: 'quant', name: 'Quantitative Methods', short: 'Quant', weight: '6–9%',
      note: 'Reorganized for 2027 (11 modules, fewer LOs); adds a financial data science / AI / LLM module.',
      modules: [
        { id: 'qm-1', name: 'Returns of Financial Assets and Instruments', status: 'revised', los: [] },
        { id: 'qm-2', name: 'Types of Financial Returns', status: 'new', los: [] },
        { id: 'qm-3', name: 'Benchmarking Returns', status: 'new', los: [] },
        { id: 'qm-4', name: 'The Time Value of Money in Finance', status: 'unchanged', los: [] },
        { id: 'qm-5', name: 'Statistical Measures of Asset Returns', status: 'unchanged', los: [] },
        { id: 'qm-6', name: 'Probability & Portfolio Mathematics', status: 'revised', los: [] },
        { id: 'qm-7', name: 'Simulation Methods (Historical, Bootstrap, Monte Carlo)', status: 'revised', los: [] },
        { id: 'qm-8', name: 'Estimation and Inference', status: 'unchanged', los: [] },
        { id: 'qm-9', name: 'Hypothesis Testing', status: 'unchanged', los: [] },
        { id: 'qm-10', name: 'Simple Linear Regression in Finance', status: 'revised', los: [] },
        { id: 'qm-11', name: 'Introduction to Financial Data Science (AI, ML, Big Data, LLMs)', status: 'new', los: [] },
      ],
    },
    {
      id: 'econ', name: 'Economics', short: 'Econ', weight: '6–9%',
      modules: [
        { id: 'econ-1', name: 'The Firm and Market Structures', status: 'unchanged', los: [] },
        { id: 'econ-2', name: 'Understanding Business Cycles', status: 'unchanged', los: [] },
        { id: 'econ-3', name: 'Fiscal Policy', status: 'unchanged', los: [] },
        { id: 'econ-4', name: 'Monetary Policy', status: 'unchanged', los: [] },
        { id: 'econ-5', name: 'Introduction to Geopolitics', status: 'unchanged', los: [] },
        { id: 'econ-6', name: 'International Trade', status: 'unchanged', los: [] },
        { id: 'econ-7', name: 'Capital Flows and the FX Market', status: 'unchanged', los: [] },
        { id: 'econ-8', name: 'Exchange Rate Calculations', status: 'unchanged', los: [] },
      ],
    },
    {
      id: 'fsa', name: 'Financial Statement Analysis', short: 'FSA', weight: '11–14%',
      modules: [
        { id: 'fsa-1', name: 'Introduction to Financial Statement Analysis', status: 'unchanged', los: [] },
        { id: 'fsa-2', name: 'Analyzing Income Statements', status: 'unchanged', los: [] },
        { id: 'fsa-3', name: 'Analyzing Balance Sheets', status: 'unchanged', los: [] },
        { id: 'fsa-4', name: 'Analyzing Statements of Cash Flows I', status: 'unchanged', los: [] },
        { id: 'fsa-5', name: 'Analyzing Statements of Cash Flows II', status: 'unchanged', los: [] },
        { id: 'fsa-6', name: 'Analysis of Inventories', status: 'unchanged', los: [] },
        { id: 'fsa-7', name: 'Analysis of Long-Term Assets', status: 'unchanged', los: [] },
        { id: 'fsa-8', name: 'Topics in Long-Term Liabilities and Equity', status: 'unchanged', los: [] },
        { id: 'fsa-9', name: 'Analysis of Income Taxes', status: 'unchanged', los: [] },
        { id: 'fsa-10', name: 'Financial Reporting Quality', status: 'unchanged', los: [] },
        { id: 'fsa-11', name: 'Financial Analysis Techniques', status: 'unchanged', los: [] },
        { id: 'fsa-12', name: 'Introduction to Financial Statement Modeling', status: 'unchanged', los: [] },
      ],
    },
    {
      id: 'corp', name: 'Corporate Issuers', short: 'Corp', weight: '6–9%',
      modules: [
        { id: 'ci-1', name: 'Organizational Forms, Corporate Issuer Features & Ownership', status: 'unchanged', los: [] },
        { id: 'ci-2', name: 'Investors and Other Stakeholders', status: 'unchanged', los: [] },
        { id: 'ci-3', name: 'Corporate Governance: Conflicts, Mechanisms, Risks & Benefits', status: 'unchanged', los: [] },
        { id: 'ci-4', name: 'Working Capital and Liquidity', status: 'unchanged', los: [] },
        { id: 'ci-5', name: 'Capital Investments', status: 'unchanged', los: [] },
        { id: 'ci-6', name: 'Cost of Capital: Foundational Topics', status: 'unchanged', los: [] },
        { id: 'ci-7', name: 'Capital Structure', status: 'unchanged', los: [] },
        { id: 'ci-8', name: 'Business Models', status: 'unchanged', los: [] },
      ],
    },
    {
      id: 'equity', name: 'Equities', short: 'Equities', weight: '11–14%',
      note: 'Renamed from "Equity Investments" and expanded (8 → 12 modules) with DCF, relative valuation, research reports and factor-based models.',
      modules: [
        { id: 'eq-1', name: 'Market Organization and Structure', status: 'unchanged', los: [] },
        { id: 'eq-2', name: 'Security Market Indexes', status: 'unchanged', los: [] },
        { id: 'eq-3', name: 'Market Efficiency', status: 'unchanged', los: [] },
        { id: 'eq-4', name: 'Overview of Equity Securities', status: 'revised', los: [] },
        { id: 'eq-5', name: 'Sources of Return & the Equity Trading Process', status: 'new', los: [] },
        { id: 'eq-6', name: 'Industry & Competitive Analysis (Porter, PESTLE)', status: 'new', los: [] },
        { id: 'eq-7', name: 'Company Analysis: Forecasting', status: 'new', los: [] },
        { id: 'eq-8', name: 'Equity Valuation: Concepts & Basic Tools', status: 'revised', los: [] },
        { id: 'eq-9', name: 'Discounted Cash Flow & Dividend Discount Models', status: 'new', los: [] },
        { id: 'eq-10', name: 'Relative Valuation (Market Multiples)', status: 'new', los: [] },
        { id: 'eq-11', name: 'Equity Research Reports', status: 'new', los: [] },
        { id: 'eq-12', name: 'Factor-Based Equity Models', status: 'new', los: [] },
      ],
    },
    {
      id: 'fixedincome', name: 'Fixed Income', short: 'Fixed Income', weight: '11–14%',
      modules: [
        { id: 'fi-1', name: 'Fixed-Income Instrument Features', status: 'unchanged', los: [] },
        { id: 'fi-2', name: 'Fixed-Income Cash Flows and Types', status: 'unchanged', los: [] },
        { id: 'fi-3', name: 'Fixed-Income Issuance and Trading', status: 'unchanged', los: [] },
        { id: 'fi-4', name: 'Fixed-Income Markets for Corporate Issuers', status: 'unchanged', los: [] },
        { id: 'fi-5', name: 'Fixed-Income Markets for Government Issuers', status: 'unchanged', los: [] },
        { id: 'fi-6', name: 'Fixed-Income Bond Valuation: Prices and Yields', status: 'unchanged', los: [] },
        { id: 'fi-7', name: 'Yield & Yield Spread Measures for Fixed-Rate Bonds', status: 'unchanged', los: [] },
        { id: 'fi-8', name: 'Yield & Yield Spread Measures for Floating-Rate Instruments', status: 'unchanged', los: [] },
        { id: 'fi-9', name: 'The Term Structure: Spot, Par & Forward Curves', status: 'unchanged', los: [] },
        { id: 'fi-10', name: 'Interest Rate Risk and Return', status: 'unchanged', los: [] },
        { id: 'fi-11', name: 'Yield-Based Bond Duration Measures and Properties', status: 'unchanged', los: [] },
        { id: 'fi-12', name: 'Yield-Based Bond Convexity and Portfolio Properties', status: 'unchanged', los: [] },
        { id: 'fi-13', name: 'Curve-Based and Empirical Fixed-Income Risk Measures', status: 'unchanged', los: [] },
        { id: 'fi-14', name: 'Credit Risk', status: 'unchanged', los: [] },
        { id: 'fi-15', name: 'Credit Analysis for Government Issuers', status: 'unchanged', los: [] },
        { id: 'fi-16', name: 'Credit Analysis for Corporate Issuers', status: 'unchanged', los: [] },
        { id: 'fi-17', name: 'Fixed-Income Securitization', status: 'unchanged', los: [] },
        { id: 'fi-18', name: 'Asset-Backed Security (ABS) Instrument & Market Features', status: 'unchanged', los: [] },
        { id: 'fi-19', name: 'Mortgage-Backed Security (MBS) Instrument & Market Features', status: 'unchanged', los: [] },
      ],
    },
    {
      id: 'derivatives', name: 'Derivatives', short: 'Derivatives', weight: '5–8%',
      modules: [
        { id: 'der-1', name: 'Derivative Instrument and Derivative Market Features', status: 'unchanged', los: [] },
        { id: 'der-2', name: 'Forward Commitment and Contingent Claim Features & Instruments', status: 'unchanged', los: [] },
        { id: 'der-3', name: 'Derivative Benefits, Risks, and Issuer & Investor Uses', status: 'unchanged', los: [] },
        { id: 'der-4', name: 'Arbitrage, Replication and the Cost of Carry in Pricing Derivatives', status: 'unchanged', los: [] },
        { id: 'der-5', name: 'Pricing and Valuation of Forward Contracts', status: 'unchanged', los: [] },
        { id: 'der-6', name: 'Pricing and Valuation of Futures Contracts', status: 'unchanged', los: [] },
        { id: 'der-7', name: 'Pricing and Valuation of Interest Rate and Other Swaps', status: 'unchanged', los: [] },
        { id: 'der-8', name: 'Pricing and Valuation of Options', status: 'unchanged', los: [] },
        { id: 'der-9', name: 'Option Replication Using Put–Call Parity', status: 'unchanged', los: [] },
        { id: 'der-10', name: 'Valuing a Derivative Using a One-Period Binomial Model', status: 'unchanged', los: [] },
      ],
    },
    {
      id: 'alts', name: 'Alternative Investments', short: 'Alts', weight: '7–10%',
      modules: [
        { id: 'ai-1', name: 'Alternative Investment Features, Methods & Structures', status: 'unchanged', los: [] },
        { id: 'ai-2', name: 'Alternative Investment Performance and Returns', status: 'unchanged', los: [] },
        { id: 'ai-3', name: 'Investments in Private Capital: Equity and Debt', status: 'unchanged', los: [] },
        { id: 'ai-4', name: 'Real Estate and Infrastructure', status: 'unchanged', los: [] },
        { id: 'ai-5', name: 'Natural Resources', status: 'unchanged', los: [] },
        { id: 'ai-6', name: 'Hedge Funds', status: 'unchanged', los: [] },
        { id: 'ai-7', name: 'Introduction to Digital Assets', status: 'unchanged', los: [] },
      ],
    },
    {
      id: 'portfolio', name: 'Portfolio Management', short: 'Portfolio', weight: '8–12%',
      modules: [
        { id: 'pm-1', name: 'Portfolio Risk and Return: Part I', status: 'unchanged', los: [] },
        { id: 'pm-2', name: 'Portfolio Risk and Return: Part II', status: 'unchanged', los: [] },
        { id: 'pm-3', name: 'Portfolio Management: An Overview', status: 'unchanged', los: [] },
        { id: 'pm-4', name: 'Basics of Portfolio Planning and Construction', status: 'unchanged', los: [] },
        { id: 'pm-5', name: 'The Behavioral Biases of Individuals', status: 'unchanged', los: [] },
        { id: 'pm-6', name: 'Introduction to Risk Management', status: 'unchanged', los: [] },
      ],
    },
  ],
};

/* ---- small helpers shared across views ---- */
window.CFA = window.CFA || {};
window.CFA.curriculum = {
  topics() { return window.CURRICULUM.topics; },
  allModules() { return window.CURRICULUM.topics.flatMap((t) => t.modules.map((m) => ({ ...m, topicId: t.id, topicName: t.name }))); },
  topic(id) { return window.CURRICULUM.topics.find((t) => t.id === id) || null; },
  module(id) {
    for (const t of window.CURRICULUM.topics) {
      const m = t.modules.find((mm) => mm.id === id);
      if (m) return { ...m, topicId: t.id, topicName: t.name };
    }
    return null;
  },
  counts() {
    const topics = window.CURRICULUM.topics.length;
    const modules = window.CURRICULUM.topics.reduce((s, t) => s + t.modules.length, 0);
    return { topics, modules };
  },
};
