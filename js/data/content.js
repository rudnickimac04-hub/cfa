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
