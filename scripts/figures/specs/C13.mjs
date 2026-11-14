export default {
  'C13-M01-F1': {
    type: 'tree',
    root: { label: 'FOREST: the security boundary', sub: 'shared schema, configuration, global catalogue, automatic trusts', tone: 'dark' },
    children: [
      { label: 'Tree 1: example.com', sub: 'child domain: sales.example.com', tone: 'blue' },
      { label: 'Tree 2: sahyadri.example', sub: 'child domain: ad.sahyadri.example', tone: 'orange' },
    ],
    note: 'Need real isolation? Create a separate FOREST; a separate domain is not a security boundary.',
  },
  'C13-M01-F2': {
    type: 'sequence',
    actors: [
      { id: 'c', label: 'Client', tone: 'blue' },
      { id: 'dns', label: 'DNS', tone: 'slate' },
      { id: 'dc', label: 'Domain controller', sub: 'KDC + LDAP', tone: 'dark' },
    ],
    messages: [
      { from: 'c', to: 'dns', label: 'SRV lookup: _ldap._tcp.ad.sahyadri.example' },
      { from: 'dns', to: 'c', label: '"dc1.ad.sahyadri.example"', dashed: true },
      { from: 'c', to: 'dc', label: 'Kerberos AS / TGS on port 88' },
      { from: 'c', to: 'dc', label: 'LDAP search / bind on port 389' },
    ],
  },
  'C13-M01-F3': {
    type: 'layers',
    layers: [
      { label: 'Schema NC', sub: 'forest-wide: classes and attributes', tone: 'dark' },
      { label: 'Configuration NC', sub: 'forest-wide: sites, services', tone: 'violet' },
      { label: 'Domain NC', sub: 'this domain: users, computers, groups', tone: 'blue' },
      { label: 'Application NCs', sub: 'e.g. DomainDnsZones', tone: 'slate' },
      { label: 'SYSVOL share', sub: 'Group Policy, logon scripts', tone: 'orange' },
    ],
    note: 'Directory partitions (naming contexts) held on domain controller dc1.',
  },
  'C13-M02-F1': {
    type: 'sequence',
    actors: [
      { id: 'c', label: 'Client', tone: 'blue' },
      { id: 'k', label: 'KDC (on the DC)', sub: 'AS + TGS', tone: 'dark' },
      { id: 's', label: 'Service', tone: 'orange' },
    ],
    messages: [
      { from: 'c', to: 'k', label: 'AS-REQ (with pre-authentication)' },
      { from: 'k', to: 'c', label: 'AS-REP: TGT (encrypted with the krbtgt key) + session key', dashed: true },
      { from: 'c', to: 'k', label: 'TGS-REQ: TGT + SPN' },
      { from: 'k', to: 'c', label: 'TGS-REP: service ticket (encrypted with the service key)', dashed: true },
      { from: 'c', to: 's', label: 'AP-REQ: service ticket' },
    ],
    note: 'The service decrypts the ticket with its own key; it never needs to contact the KDC.',
  },
  'C13-M02-F2': {
    type: 'rows',
    arrow: true,
    header: ['Ticket', 'Encrypted with'],
    rows: [
      { label: 'TGT', tone: 'dark', items: ['krbtgt account key: the crown jewel'] },
      { label: 'Service ticket', tone: 'orange', items: ['Service account key: keep it long, random, AES'] },
    ],
    note: 'Consequences: know the krbtgt key and you can forge any TGT (golden ticket); any TGT can request any SPN’s ticket (roasting).',
  },
  'C13-M03-F1': {
    type: 'tree',
    root: { label: 'DC=ad,DC=sahyadri,DC=example', tone: 'dark' },
    children: [
      { label: 'OU=Tier0', sub: 'domain / forest admin identities', tone: 'red' },
      { label: 'OU=Tier1', sub: 'server admin identities', tone: 'orange' },
      { label: 'OU=Tier2', sub: 'workstation / help-desk identities, staff', tone: 'blue' },
      { label: 'OU=ServiceAccounts', sub: 'app identities, e.g. legacy-svc + PSO', tone: 'violet' },
      { label: 'OU=Workstations', sub: 'computer accounts; baseline GPO linked here', tone: 'green' },
      { label: 'OU=Servers', sub: 'computer accounts', tone: 'slate' },
    ],
    perRow: 3,
  },
  'C13-M03-F2': {
    type: 'flow',
    steps: [
      { label: 'Accounts', sub: 'e.g. asha', details: ['who you are'], tone: 'slate' },
      { label: 'Global group', sub: 'by role: G-Helpdesk', details: ['your role'], tone: 'blue' },
      { label: 'Domain Local group', sub: 'DL-Finance-Read', details: ['what it grants'], tone: 'violet' },
      { label: 'Permission', sub: 'read share', tone: 'green' },
    ],
    note: 'AGDLP: review membership in the global groups and change permissions on the domain local groups, independently.',
  },
  'C13-M04-F1': {
    type: 'layers',
    arrows: true,
    layers: [
      { label: 'Tier 0', sub: 'DCs, Domain Admins: control of the directory', tone: 'dark' },
      { label: 'Tier 1', sub: 'servers, server admins', tone: 'orange' },
      { label: 'Tier 2', sub: 'workstations, help desk, staff', tone: 'blue' },
    ],
    note: 'Admin control flows DOWN only. FORBIDDEN: using a Tier 0 credential on a Tier 1 or Tier 2 system, which exposes domain control where attackers land first.',
  },
  'C13-M04-F2': {
    type: 'rows',
    arrow: true,
    header: ['Legacy tier model', 'Enterprise Access Model'],
    rows: [
      { label: 'Tier 0', tone: 'dark', items: ['Control plane (expanded: cloud + on-prem)'] },
      { label: 'Tier 1', tone: 'orange', items: ['Management plane', 'Data / workload plane'] },
      { label: 'Tier 2', tone: 'blue', items: ['User access', 'App access'] },
    ],
    note: 'The same discipline applies: no downward exposure of higher-plane credentials.',
  },
  'C13-M05-F1': {
    type: 'table',
    columns: ['Precondition (findable)', 'Technique (ATT&CK)', 'Control (fix)'],
    rows: [
      ['SPN on a user account with a weak password', 'Kerberoasting T1558.003', 'gMSA or a long password; AES'],
      ['Pre-authentication disabled (0x400000)', 'AS-REP roasting T1558.004', 'Enable pre-authentication'],
      ['krbtgt key stolen', 'Golden ticket T1558.001', 'Protect DCs; rotate krbtgt'],
      ['Service key stolen', 'Silver ticket T1558.002', 'Rotate the service key'],
      ['Unconstrained delegation (non-DC)', 'Impersonation', 'Constrained delegation / RBCD'],
    ],
  },
  'C13-M05-F3': {
    type: 'tree',
    root: { label: 'legacy-svc', sub: 'one account, three closable weaknesses', tone: 'dark' },
    children: [
      { label: 'servicePrincipalName HTTP/app1…', sub: 'Kerberoastable: HIGH', tone: 'red' },
      { label: 'UAC 0x10000 (never expires)', sub: 'stale secret: MEDIUM', tone: 'orange' },
      { label: 'lastLogon 0 (never used)', sub: 'dormant: LOW', tone: 'slate' },
    ],
    note: 'Fix: move to a gMSA, or remove the account and disable it.',
  },
  'C13-M06-F1': {
    type: 'table',
    columns: ['Windows event ID', 'Meaning', 'Lab JSON field'],
    rows: [
      ['4624', 'Logon success', 'eventId 4624, status OK'],
      ['4625 / 4771', 'Logon / pre-auth failure', 'status WRONG_PASSWORD etc.'],
      ['4768 / 4769', 'TGT / service-ticket request', 'Windows adds these (lab: KDC description)'],
      ['4672', 'Special privileges (admin)', 'Tier 0 account in the summary'],
      ['4740', 'Account lockout', 'Correlate with failure bursts'],
      ['1102', 'Security log cleared', 'Forward logs off-host!'],
    ],
  },
  'C13-M06-F2': {
    type: 'table',
    columns: ['From the 4624 telemetry', 'Detects', 'Control it supports'],
    rows: [
      ['Count failures per account', 'Burst: guessing / lockout', 'Lockout policy'],
      ['Read passwordType', 'RC4 / DES where AES is expected', 'AES-only'],
      ['Group OK logons by account', 'Tier 0 logon from a source that is not a PAW', 'Tier model'],
    ],
  },
  'C13-M06-F3': {
    type: 'flow',
    steps: [
      { label: 'Scope', sub: 'who / where / when / how many', tone: 'slate' },
      { label: 'Baseline', sub: 'normal for this account?', tone: 'blue' },
      { label: 'Corroborate', sub: 'related events: TGT, lockout, changes', tone: 'violet' },
      { label: 'Decide', sub: 'benign / suspicious / confirmed', tone: 'orange' },
      { label: 'Record', sub: 'evidence for report + IR', tone: 'dark' },
    ],
  },
  'C13-M07-F1': {
    type: 'cycle',
    center: 'Assessment loop',
    steps: [
      { label: 'Plan', sub: 'scope, authorise' },
      { label: 'Review', sub: 'config, activity, access' },
      { label: 'Score & prioritise', sub: 'HIGH / MED / LOW' },
      { label: 'Remediate', sub: 'owner, due date' },
      { label: 'Re-test', sub: 'evidence of closure' },
      { label: 'Measure', sub: 'trend, metrics' },
    ],
  },
  'C13-M07-F2': {
    type: 'tree',
    into: true,
    root: { label: 'FINDINGS REGISTER', sub: 'id / severity / evidence → plan: owner / due / verify', tone: 'dark' },
    children: [
      { label: 'dir_review.py', sub: 'configuration / hygiene', tone: 'blue' },
      { label: 'auth_monitor.py', sub: 'activity', tone: 'violet' },
      { label: 'group listmembers', sub: 'access', tone: 'orange' },
    ],
  },
  'C13-M07-F3': {
    type: 'grid',
    cols: 2,
    tiles: [
      { tag: 'High impact · hard', label: 'MEDIUM', sub: 'plan it', tone: 'orange' },
      { tag: 'High impact · easy', label: 'HIGH: fix first', sub: 'e.g. legacy-svc SPN', tone: 'red' },
      { tag: 'Low impact · hard', label: 'LOW', tone: 'slate' },
      { tag: 'Low impact · easy', label: 'MEDIUM', tone: 'orange' },
    ],
    note: 'Score each finding by its impact and by how easy it is for an attacker to exploit.',
  },
  'C13-M08-F1': {
    type: 'flow',
    steps: [
      { label: 'BUILD', sub: 'contained lab', tone: 'slate' },
      { label: 'HARDEN', sub: 'checklist; each item tied to a control', tone: 'blue' },
      { label: 'EVIDENCE', sub: 'before / after tool output, exit code', tone: 'violet' },
      { label: 'AUDIT REPORT', sub: 'scope · method · before · actions · after · residual + forward plan', tone: 'dark' },
    ],
  },
  'C13-M08-F2': {
    type: 'flow',
    dir: 'TB',
    steps: [
      { label: 'BEFORE: [HIGH] legacy-svc SPN → Kerberoastable', sub: 'exit code 1', tone: 'red' },
      { label: 'Action', sub: 'remove the SPN / move to gMSA; disable the dormant account', tone: 'orange' },
      { label: 'AFTER: the legacy-svc HIGH finding is absent', sub: 'exit code 0', tone: 'green' },
    ],
    note: 'Proof: the saved dir_review.py output, before and after.',
  },
  'C13-M08-F3': {
    type: 'grid',
    cols: 3,
    tiles: [
      { tag: '1', label: 'Scope & authorisation', tone: 'slate' },
      { tag: '2', label: 'Method', sub: 'tools, loop', tone: 'blue' },
      { tag: '3', label: 'Findings before', tone: 'red' },
      { tag: '4', label: 'Actions taken', sub: 'control, before / after', tone: 'orange' },
      { tag: '5', label: 'Findings after', sub: 'closure, re-test', tone: 'green' },
      { tag: '6', label: 'Residual risk & forward plan', tone: 'violet' },
    ],
    note: 'Appendix: raw tool output and exit codes.',
  },
};
