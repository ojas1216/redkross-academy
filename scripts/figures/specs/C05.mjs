export default {
  'C05-M01-F1': {
    type: 'graph',
    dir: 'TB',
    nodes: [
      { id: 'a', label: 'Same technical action', sub: 'connect to a service and probe it', tone: 'slate' },
      { id: 'w', label: 'WITH written authorisation', sub: 'in scope + safe Rules of Engagement', tone: 'green' },
      { id: 'n', label: 'WITHOUT authorisation', sub: 'or out of scope', tone: 'red' },
      { id: 'l', label: 'Lawful, valued engagement', tone: 'green' },
      { id: 'o', label: 'An offence', sub: 'IT Act 2000 ss. 43 / 66', tone: 'red' },
    ],
    edges: [{ from: 'a', to: 'w' }, { from: 'a', to: 'n' }, { from: 'w', to: 'l' }, { from: 'n', to: 'o' }],
    note: 'Authorisation, not the technique, is what separates a penetration test from an attack.',
  },
  'C05-M02-F1': {
    type: 'flow',
    dir: 'TB',
    steps: [
      { label: 'PASSIVE', sub: 'lower risk, no direct probing: public records · DNS / CT · published files · self-published hints', tone: 'blue', side: 'build the inventory, validate it, decide what to touch' },
      { label: 'ACTIVE', sub: 'governed by the Rules of Engagement: connect to in-scope services and endpoints (Module 3)', tone: 'orange' },
    ],
  },
  'C05-M07-F1': {
    type: 'graph',
    dir: 'TB',
    nodes: [
      { id: 'a', label: 'User A', tone: 'blue' },
      { id: 'bd', label: "User B's data", sub: 'same privilege level', tone: 'violet' },
      { id: 'ad', label: 'Admin', sub: 'higher privilege level', tone: 'dark' },
    ],
    edges: [
      { from: 'a', to: 'ad', label: 'VERTICAL: lab default credential' },
      { from: 'a', to: 'bd', label: 'HORIZONTAL: lab IDOR' },
    ],
    note: 'Least privilege, authorisation checks and patching prevent both kinds of escalation.',
  },
  'C05-M01-F2': {
    type: 'flow',
    steps: [{ label: 'Planning' }, { label: 'Discovery' }, { label: 'Attack' }, { label: 'Reporting', tone: 'dark' }],
    loop: { label: 'feedback: new information found during Attack returns to Discovery' },
  },
  'C05-M01-F3': {
    type: 'compare',
    columns: [
      { title: 'Scope', tone: 'blue', items: ['In-scope targets', 'EXPLICIT out-of-scope', 'Accounts / data allowed'] },
      { title: 'Rules of Engagement', tone: 'orange', items: ['Permitted / forbidden techniques', 'Test windows', 'Notify / escalate / STOP conditions', 'Data handling + contacts'] },
    ],
    note: 'Both are signed by an authorised owner BEFORE any activity.',
  },
  'C05-M03-F1': {
    type: 'graph',
    dir: 'LR',
    nodes: [
      { id: 'i', label: 'Inventory (Module 2)', sub: 'hosts / endpoints (predicted)', tone: 'slate' },
      { id: 'e', label: 'Enumerate', sub: 'TCP up? endpoints? versions?', tone: 'blue' },
      { id: 'm', label: 'Exposure map', sub: 'service up on 8099 · /admin 403 (restricted) · /invoice 400 (needs param) · banner NilgiriPortal/0.9', tone: 'orange' },
    ],
    edges: [{ from: 'i', to: 'e' }, { from: 'e', to: 'm' }],
  },
  'C05-M04-F1': {
    type: 'compare',
    columns: [
      { title: 'CVE', tone: 'blue', items: ['A SPECIFIC flaw in a specific product / version', 'What scanners cite', 'Use for known, versioned flaws'] },
      { title: 'CWE', tone: 'violet', items: ['A TYPE of weakness, product-independent', 'CWE-798 hard-coded credentials', 'CWE-639 IDOR / authorisation bypass', 'CWE-209 error-message disclosure', 'Use to classify what you find'] },
    ],
  },
  'C05-M04-F2': {
    type: 'scale',
    ticks: [
      { label: 'None', sub: '0.0' },
      { label: 'Low', sub: '0.1 – 3.9' },
      { label: 'Medium', sub: '4.0 – 6.9' },
      { label: 'High', sub: '7.0 – 8.9' },
      { label: 'Critical', sub: '9.0 – 10.0' },
    ],
    reverse: true,
    note: 'Base metrics AV AC PR UI S C I A go through the CVSS v3.1 formula to a 0.0–10.0 score. Example: AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H = 9.8 Critical.',
  },
  'C05-M04-F3': {
    type: 'rows',
    header: ['Severity', 'Finding'],
    rows: [
      { label: '9.8 Critical', tone: 'red', items: ['Default credential', 'CWE-798 · A07'] },
      { label: '7.5 High', tone: 'orange', items: ['IDOR on /invoice', 'CWE-639 · A01'] },
      { label: '5.3 Medium', tone: 'violet', items: ['Verbose error', 'CWE-209 · A10 / A02'] },
      { label: '3.1 Low', tone: 'slate', items: ['Missing headers', 'A02'] },
    ],
    note: 'Fix in this order; adjust for business context (Module 8).',
  },
  'C05-M05-F2': {
    type: 'compare',
    vs: true,
    columns: [
      { title: 'Minimal proof', tone: 'green', items: ['Read ONE record you should not', 'Confirms the IDOR finding'] },
      { title: 'Harmful overreach', tone: 'red', items: ['Dump the whole database', 'Adds no further proof', 'Causes real harm and legal exposure'] },
    ],
    note: 'Professional rule: stop at the minimum that proves the finding.',
  },
  'C05-M05-F3': {
    type: 'rows',
    header: ['Evidence field', 'Why it matters'],
    rows: [
      { label: 'Title + CWE', items: ['What it is'] },
      { label: 'Vector + CVSS', items: ['How severe'] },
      { label: 'Evidence', items: ['Minimal request / response: the proof'] },
      { label: 'Timestamp (UTC)', items: ['When, so it is reproducible'] },
    ],
    note: 'One record per confirmed finding; data/findings.json feeds the report (Module 8).',
  },
  'C05-M06-F1': {
    type: 'graph',
    dir: 'LR',
    nodes: [
      { id: 'd', label: 'Discovery' },
      { id: 'v', label: 'Verification' },
      { id: 'p', label: 'Proof of impact', tone: 'green' },
      { id: 's', label: 'Ethical tester STOPS', sub: 'demonstrate the consequence, do not pursue it', tone: 'dark' },
      { id: 'w', label: 'Weaponise', tone: 'red' },
      { id: 'de', label: 'Deliver', tone: 'red' },
      { id: 'a', label: 'Actions on objectives', tone: 'red' },
    ],
    edges: [
      { from: 'd', to: 'v' },
      { from: 'v', to: 'p' },
      { from: 'p', to: 's' },
      { from: 'p', to: 'w', label: 'only an attacker continues', dashed: true },
      { from: 'w', to: 'de', dashed: true },
      { from: 'de', to: 'a', dashed: true },
    ],
  },
  'C05-M06-F3': {
    type: 'graph',
    dir: 'LR',
    nodes: [
      { id: 'i', label: 'Proven impact', sub: "IDOR: read others' invoices", tone: 'red' },
      { id: 'p', label: 'Prevention', sub: 'authorisation check per object', tone: 'green' },
      { id: 'd', label: 'Detection', sub: 'log / alert on access to non-owned objects', tone: 'blue' },
    ],
    edges: [{ from: 'i', to: 'p' }, { from: 'i', to: 'd' }],
    note: 'Every proven impact yields a prevention AND a detection.',
  },
  'C05-M08-F1': {
    type: 'layers',
    layers: [
      { label: '1  Executive summary', sub: 'for leadership: risk, key findings, recommendation', tone: 'dark' },
      { label: '2  Scope & methodology', sub: 'what, how, authorisation', tone: 'blue' },
      { label: '3  Findings (ranked)', sub: 'title, CVSS, evidence, impact, remediation, retest', tone: 'orange' },
      { label: '4  Remediation summary', sub: 'prioritised actions', tone: 'green' },
      { label: '5  Appendices', sub: 'raw evidence, tool output, vectors', tone: 'slate' },
    ],
  },
  'C05-M08-F3': {
    type: 'compare',
    columns: [
      { title: 'Before: vulnerable target (8099)', tone: 'red', items: ['Retest result: 0 of 4 closed', 'All findings OPEN'] },
      { title: 'After: hardened target (8100)', tone: 'green', items: ['Client remediates', 'Retest result: 4 of 4 closed', 'All findings CLOSED'] },
    ],
    note: 'The before/after retest is documented proof that the fixes work.',
  },
};
