export default {
  'C19-M01-F1': {
    type: 'graph',
    dir: 'TB',
    nodes: [
      { id: 'o', label: 'Objectives', tone: 'slate' },
      { id: 'a', label: 'Authorisation', tone: 'blue' },
      { id: 'r', label: 'Rules of Engagement', tone: 'violet' },
      { id: 's', label: 'Safety controls', tone: 'orange' },
      { id: 'g', label: 'RoE gate', kind: 'decision' },
      { id: 'f', label: 'FAIL', sub: 'do not start', tone: 'red' },
      { id: 'p', label: 'PASS', sub: 'proceed within scope', tone: 'green' },
    ],
    edges: [
      { from: 'o', to: 'a' }, { from: 'a', to: 'r' }, { from: 'r', to: 's' }, { from: 's', to: 'g' },
      { from: 'g', to: 'f', label: 'fail' }, { from: 'g', to: 'p', label: 'pass' },
    ],
  },
  'C19-M01-F2': {
    type: 'rows',
    rows: [
      { label: 'Authorisation', items: ['Authorising party', 'Signed agreement', 'Testing window'] },
      { label: 'Scope', items: ['In-scope systems', 'Explicit out-of-scope (production, third parties)'] },
      { label: 'Safety', items: ['Isolation', 'No destruction', 'No real data', 'Simulation only'] },
      { label: 'Control', items: ['Stop conditions', 'Deconfliction (operator tags)', 'Contacts'] },
      { label: 'Handling', items: ['Encrypted storage', 'Retention', 'Reporting (executive + technical)'] },
    ],
  },
  'C19-M01-F3': {
    type: 'compare',
    vs: true,
    columns: [
      { title: 'With deconfliction', tone: 'green', items: ['Red team actions carry an operator tag and a shared ticket', 'Blue team asks "is this you?" and gets yes / no in seconds', 'The test is distinguished from a real incident'] },
      { title: 'Without deconfliction', tone: 'red', items: ['The test triggers real incident response', 'Or a real attack hides behind the test'] },
    ],
  },
  'C19-M02-F1': {
    type: 'flow',
    dir: 'TB',
    steps: [
      { label: 'Threat intel', tone: 'slate' },
      { label: 'Threat profile', tone: 'blue' },
      { label: 'ATT&CK techniques the adversary uses', tone: 'violet' },
      { label: 'Emulation plan', sub: 'technique + target + boundary + detection', tone: 'orange' },
      { label: 'Run in an isolated range', tone: 'red' },
      { label: 'Measure detection', sub: 'purple team', tone: 'green' },
    ],
  },
  'C19-M02-F2': {
    type: 'flow',
    dir: 'TB',
    steps: [
      { label: 'Reconnaissance', sub: 'TA0043', tone: 'slate' },
      { label: 'Credential Access', sub: 'TA0006', tone: 'red' },
      { label: 'Discovery', sub: 'TA0007', tone: 'blue' },
      { label: 'Lateral Movement', sub: 'TA0008', tone: 'violet' },
      { label: 'Command and Control', sub: 'TA0011', tone: 'orange' },
      { label: 'Collection', sub: 'TA0009', tone: 'dark' },
    ],
    note: 'Each step uses one chosen technique, mapped to a detection.',
  },
  'C19-M03-F1': {
    type: 'tree',
    root: { label: 'Authorised scope', sub: 'the boundary; every action is scope-checked first (fail-safe)', tone: 'dark' },
    children: [
      { label: 'Map', sub: 'assets + identities, in scope only', tone: 'blue' },
      { label: 'Validate findings', sub: 'minimal, non-destructive, reversible', tone: 'orange' },
      { label: 'Record evidence', sub: 'attribution + time + integrity', tone: 'green' },
    ],
  },
  'C19-M03-F2': {
    type: 'graph',
    dir: 'TB',
    nodes: [
      { id: 't', label: 'Target', tone: 'slate' },
      { id: 'q', label: 'In the authorised network, or a listed host?', kind: 'decision' },
      { id: 'in', label: 'IN-SCOPE', sub: 'may act', tone: 'green' },
      { id: 'out', label: 'OUT-OF-SCOPE', sub: 'REFUSE', tone: 'red' },
    ],
    edges: [{ from: 't', to: 'q' }, { from: 'q', to: 'in', label: 'yes' }, { from: 'q', to: 'out', label: 'no' }],
    note: 'When unsure, the default is OUT-OF-SCOPE.',
  },
  'C19-M03-F3': {
    type: 'flow',
    steps: [
      { label: 'Entry 1', sub: 'content, prev = GENESIS → H1', tone: 'blue' },
      { label: 'Entry 2', sub: 'content, prev = H1 → H2', tone: 'violet' },
      { label: 'Entry 3', sub: 'content, prev = H2 → H3', tone: 'orange' },
    ],
    note: 'Verify by recomputing each hash: any change gives a mismatch and the chain is BROKEN.',
  },
  'C19-M04-F1': {
    type: 'table',
    columns: ['Technique (living off the land)', 'Telemetry', 'Detection'],
    rows: [
      ['Valid Accounts (T1078)', 'Authentication logs', 'Anomalous logon'],
      ['Account Discovery (T1087)', 'Directory / process logs', 'Bulk queries'],
      ['Use Alternate Authentication Material (T1550)', 'Authentication logs', 'Orphan non-interactive logon'],
    ],
  },
  'C19-M04-F2': {
    type: 'compare',
    columns: [
      { title: 'DETECT', tone: 'blue', items: ['Anomalous logon, over authentication telemetry'] },
      { title: 'CONTAIN', tone: 'green', items: ['MFA', 'Tiered admin', 'Logon restrictions'] },
    ],
    note: 'For Valid Accounts (T1078): see the abuse AND make the credential less reusable.',
  },
  'C19-M04-F3': {
    type: 'layers',
    layers: [
      { label: 'Tier 0', sub: 'domain / identity control: keep its credentials OFF lower tiers', tone: 'dark' },
      { label: 'Tier 1', sub: 'servers', tone: 'orange' },
      { label: 'Tier 2', sub: 'workstations', tone: 'blue' },
    ],
    note: 'Assess escalation paths, tiering and least privilege; monitor any crossing between tiers.',
  },
  'C19-M05-F1': {
    type: 'flow',
    steps: [
      { label: 'Foothold', sub: 'workstation', tone: 'orange' },
      { label: 'Server', tone: 'violet' },
      { label: 'Identity system', sub: 'the goal', tone: 'dark' },
    ],
    note: 'Each hop crosses a trust boundary (account, host or domain trust) and touches authentication and network telemetry: a chance to detect.',
  },
  'C19-M05-F2': {
    type: 'compare',
    columns: [
      { title: 'STRUCTURAL', tone: 'green', items: ['Segmentation', 'Tiering', 'Credential hygiene', '→ fewer hops are possible'] },
      { title: 'DETECTION', tone: 'blue', items: ['Unusual remote-logon path', 'Orphan alternate-authentication logon'] },
    ],
    note: 'Block what you can; detect what remains.',
  },
  'C19-M05-F3': {
    type: 'table',
    columns: ['Path', 'Should be', 'Test'],
    rows: [
      ['Workstation → workstation admin', 'Blocked (default-deny)', 'Is it? A finding if not'],
      ['Workstation → database', 'Blocked (default-deny)', 'Is it? A finding if not'],
    ],
    note: 'Validating that the boundary holds is a defensive check, not an attack.',
  },
  'C19-M06-F1': {
    type: 'graph',
    dir: 'LR',
    fixedDir: true,
    nodes: [
      { id: 'h', label: 'Compromised host', tone: 'red' },
      { id: 'b', label: 'Network boundary', sub: 'egress filter + proxy + flow logs', tone: 'green' },
      { id: 'c', label: 'C2 server', tone: 'dark' },
    ],
    edges: [{ from: 'h', to: 'b', label: 'periodic beacon' }, { from: 'b', to: 'c' }],
    note: 'C2 must cross the boundary again and again, which makes the boundary a detection and containment point.',
  },
  'C19-M06-F2': {
    type: 'rows',
    rows: [
      { label: 'Periodicity', tone: 'orange', items: ['Regular, machine-like check-ins to one destination (beacon)'] },
      { label: 'Destination', tone: 'violet', items: ['Single / rare / new destination that matches no business need'] },
      { label: 'Protocol', tone: 'blue', items: ['A normal protocol used oddly: DNS carrying data, odd HTTP timing'] },
    ],
    note: 'Read these indicators from flow, proxy and DNS logs.',
  },
  'C19-M07-F1': {
    type: 'cycle',
    center: 'Shared ATT&CK plan + telemetry',
    steps: [
      { label: 'Emulate technique', sub: 'red', tone: 'red' },
      { label: 'Measure detection', sub: 'blue', tone: 'blue' },
      { label: 'Gap analysis', tone: 'violet' },
      { label: 'Engineer detection', tone: 'green' },
      { label: 'Re-emulate', tone: 'orange' },
    ],
  },
  'C19-M07-F3': {
    type: 'flow',
    dir: 'TB',
    steps: [
      { label: 'GAP: T1087 Account Discovery', sub: 'no alert', tone: 'red' },
      { label: 'Diagnose', sub: 'no directory-read telemetry or rule', tone: 'orange' },
      { label: 'Engineer', sub: 'collect directory / process logs + build a bulk-query rule', tone: 'blue' },
      { label: 'Re-emulate', sub: 'run T1087 in the range → the detection fires → CLOSED', tone: 'green' },
    ],
  },
  'C19-M08-F1': {
    type: 'flow',
    dir: 'TB',
    steps: [
      { label: 'RoE gate', tone: 'dark' },
      { label: 'Validated, in-scope plan', tone: 'blue' },
      { label: 'Emulate (isolated) + evidence', tone: 'red' },
      { label: 'Map to telemetry / containment', tone: 'violet' },
      { label: 'Purple-team gap analysis', tone: 'orange' },
      { label: 'EXECUTIVE + TECHNICAL reports', sub: 'evidence-traced', tone: 'green' },
    ],
  },
  'C19-M08-F3': {
    type: 'tree',
    root: { label: 'Report statement', tone: 'dark' },
    children: [
      { label: 'Emulation plan', sub: 'what was done', tone: 'blue' },
      { label: 'Telemetry', sub: 'what was seen', tone: 'violet' },
      { label: 'Evidence log', sub: 'chain of custody', tone: 'green' },
    ],
    note: 'No evidence, no place in the report.',
  },
};
