/* CFA Level I topic areas with approximate exam weights. */
const TOPICS = [
  { id: 'ethics',      name: 'Ethical & Professional Standards', weight: '15–20%', blurb: 'Code of Ethics, Standards of Professional Conduct, GIPS.' },
  { id: 'quant',       name: 'Quantitative Methods',             weight: '6–9%',  blurb: 'Time value of money, statistics, probability, hypothesis testing.' },
  { id: 'econ',        name: 'Economics',                        weight: '6–9%',  blurb: 'Supply & demand, business cycles, monetary/fiscal policy, FX.' },
  { id: 'fsa',         name: 'Financial Statement Analysis',     weight: '11–14%', blurb: 'Income statement, balance sheet, cash flows, ratios, quality.' },
  { id: 'corp',        name: 'Corporate Issuers',                weight: '6–9%',  blurb: 'Capital budgeting, cost of capital, capital structure, governance.' },
  { id: 'equity',      name: 'Equity Investments',               weight: '11–14%', blurb: 'Market organization, indexes, efficiency, equity valuation.' },
  { id: 'fixedincome', name: 'Fixed Income',                     weight: '11–14%', blurb: 'Bond features, valuation, duration, convexity, credit risk.' },
  { id: 'derivatives', name: 'Derivatives',                      weight: '5–8%',  blurb: 'Forwards, futures, options, swaps, arbitrage, pricing basics.' },
  { id: 'alts',        name: 'Alternative Investments',          weight: '7–10%', blurb: 'Private equity, real estate, hedge funds, commodities, infrastructure.' },
  { id: 'portfolio',   name: 'Portfolio Management',             weight: '8–12%', blurb: 'Portfolio theory, CAPM, IPS, risk management basics.' },
];

function topicName(id) {
  const t = TOPICS.find((t) => t.id === id);
  return t ? t.name : id;
}
