export default {
  'C12-M01-F1': {
    "type": "flow",
    "dir": "TB",
    "steps": [
      {
        "label": "PLAN",
        "sub": "ASVS requirements · abuse cases · data classification",
        "tone": "slate"
      },
      {
        "label": "DESIGN",
        "sub": "threat model · design review",
        "tone": "blue"
      },
      {
        "label": "CODE",
        "sub": "secure libraries · pre-commit · code review",
        "tone": "violet"
      },
      {
        "label": "BUILD",
        "sub": "SAST, SCA · IaC scan · secrets scan",
        "tone": "orange"
      },
      {
        "label": "TEST",
        "sub": "security tests · DAST · pentest",
        "tone": "red"
      },
      {
        "label": "RELEASE",
        "sub": "sign · SBOM · canary",
        "tone": "green"
      },
      {
        "label": "OPERATE",
        "sub": "monitor · vulnerability intake · patch",
        "tone": "dark"
      }
    ],
    "note": "Root-cause analysis from operations feeds back into the requirements of the next cycle."
  },
  'C12-M03-F1': {
    "type": "flow",
    "dir": "TB",
    "steps": [
      {
        "label": "Request",
        "tone": "slate"
      },
      {
        "label": "VALIDATE input",
        "sub": "allowlist",
        "tone": "blue"
      },
      {
        "label": "AUTHENTICATE",
        "tone": "violet"
      },
      {
        "label": "AUTHORISE the object",
        "tone": "orange"
      },
      {
        "label": "PARAMETERISED data access",
        "tone": "green"
      },
      {
        "label": "ENCODE output for its context",
        "tone": "green"
      },
      {
        "label": "Response",
        "tone": "slate"
      }
    ],
    "note": "Errors: generic to the client, detailed (and redacted) in the logs."
  },
  'C12-M03-F2': {
    "type": "table",
    "columns": [
      "Context",
      "Unsafe",
      "Safe"
    ],
    "rows": [
      [
        "SQL",
        "execute(f\"... '{name}'\")",
        "execute(\"... ?\", (name,))"
      ],
      [
        "Command",
        "run(f\"tar {p}\", shell=True)",
        "run([\"tar\",\"czf\",o,\"--\",p])"
      ],
      [
        "HTML",
        "f\"<p>{note}</p>\"",
        "f\"<p>{html.escape(note)}</p>\""
      ],
      [
        "Password hash",
        "md5(pw)",
        "scrypt(pw, salt=random16, ...)"
      ]
    ]
  },
  'C12-M01-F2': {
    type: 'grid',
    cols: 2,
    tiles: [
      { tag: 'PO', label: 'Prepare the Organization', tone: 'blue' },
      { tag: 'PS', label: 'Protect the Software', tone: 'violet' },
      { tag: 'PW', label: 'Produce Well-Secured Software', tone: 'orange' },
      { tag: 'RV', label: 'Respond to Vulnerabilities', tone: 'green' },
    ],
    note: 'The four practice groups of the NIST Secure Software Development Framework (SSDF).',
  },
  'C12-M01-F3': {
    type: 'graph',
    dir: 'TB',
    nodes: [
      { id: 's', label: 'Scan result', tone: 'slate' },
      { id: 'n', label: 'New finding above the threshold?', kind: 'decision' },
      { id: 'p', label: 'PASS', tone: 'green' },
      { id: 'w', label: 'Valid, unexpired waiver?', kind: 'decision' },
      { id: 'pl', label: 'PASS (logged)', tone: 'green' },
      { id: 'f', label: 'FAIL', sub: 'exit code ≠ 0 → the developer fixes it', tone: 'red' },
    ],
    edges: [
      { from: 's', to: 'n' }, { from: 'n', to: 'p', label: 'no' }, { from: 'n', to: 'w', label: 'yes' },
      { from: 'w', to: 'pl', label: 'yes' }, { from: 'w', to: 'f', label: 'no' },
    ],
  },
  'C12-M02-F1': {
    type: 'graph',
    dir: 'LR',
    fixedDir: true,
    nodes: [
      { id: 'c', label: 'Customer', sub: 'external entity', tone: 'slate' },
      { id: 'p1', label: 'P1 shipment API', sub: 'process', tone: 'orange' },
      { id: 'd1', label: 'D1 shipments DB', sub: 'data store', tone: 'dark' },
      { id: 'd2', label: 'D2 logs', sub: 'data store', tone: 'dark' },
      { id: 'p2', label: 'P2 notifier', sub: 'process', tone: 'orange' },
      { id: 'ca', label: 'Courier API', sub: 'external entity', tone: 'slate' },
      { id: 'p3', label: 'P3 CI/CD', sub: 'build-time process', tone: 'violet' },
      { id: 'pk', label: 'Package index', sub: 'external entity', tone: 'slate' },
    ],
    edges: [
      { from: 'c', to: 'p1', label: 'HTTPS (B1 internet)' },
      { from: 'p1', to: 'd1', label: 'SQL / TLS (B2)' },
      { from: 'p1', to: 'd2' },
      { from: 'p1', to: 'p2' },
      { from: 'p2', to: 'ca', label: 'HTTPS (B3)' },
      { from: 'p3', to: 'pk', label: 'B4' },
    ],
    note: 'Data flow diagram: external entities, processes and data stores; B1–B4 mark the trust boundaries.',
  },
  'C12-M02-F2': {
    type: 'table',
    columns: ['Element', 'Spoofing', 'Tampering', 'Repudiation', 'Info disclosure', 'DoS', 'Elevation'],
    rows: [
      ['External entity', '✓', '', '✓', '', '', ''],
      ['Process', '✓', '✓', '✓', '✓', '✓', '✓'],
      ['Data store', '', '✓', '✓ (mainly logs)', '✓', '✓', ''],
      ['Data flow', '', '✓', '', '✓', '✓', ''],
    ],
    note: 'STRIDE threats that apply to each element type in a data flow diagram.',
  },
  'C12-M02-F3': {
    type: 'flow',
    dir: 'TB',
    steps: [
      { label: 'Threat', sub: 'STRIDE', tone: 'red' },
      { label: 'Abuse case', sub: 'with the expected behaviour', tone: 'orange' },
      { label: 'Requirement', sub: 'ASVS', tone: 'violet' },
      { label: 'Mitigation', sub: 'code / configuration', tone: 'blue' },
      { label: 'Test or gate', tone: 'green' },
      { label: 'Register status: "done"', tone: 'dark' },
    ],
  },
  'C12-M03-F3': {
    type: 'graph',
    dir: 'TB',
    nodes: [
      { id: 'v', label: 'Valid tracking id?', kind: 'decision' },
      { id: 'e', label: '400 validation error', tone: 'orange' },
      { id: 'o', label: 'Record exists AND owner == user?', kind: 'decision' },
      { id: 'n', label: '"not found"', sub: 'the same reply for both cases', tone: 'red' },
      { id: 'r', label: 'Return the record', sub: 'encoded on output', tone: 'green' },
    ],
    edges: [
      { from: 'v', to: 'e', label: 'no' }, { from: 'v', to: 'o', label: 'yes' },
      { from: 'o', to: 'n', label: 'no' }, { from: 'o', to: 'r', label: 'yes' },
    ],
    note: 'Answering "not found" for both missing and not-yours records stops attackers from probing which ids exist.',
  },
  'C12-M04-F1': {
    type: 'flow',
    steps: [
      { label: 'SOURCE', sub: 'request parameter', tone: 'red' },
      { label: 'Variable', tone: 'slate' },
      { label: 'Function call', tone: 'slate', details: ['sanitiser here?', 'validate / parameterise'] },
      { label: 'SINK', sub: 'db.execute', tone: 'dark' },
    ],
    note: 'No sanitiser on the path from source to sink = FINDING; a sanitiser present = no finding.',
  },
  'C12-M04-F2': {
    type: 'graph',
    dir: 'TB',
    nodes: [
      { id: 'ide', label: 'Developer IDE', sub: 'fast rules', tone: 'slate' },
      { id: 'pr', label: 'Pull request', sub: 'semgrep --error on changed code', tone: 'blue' },
      { id: 'x', label: 'Exit code 1?', kind: 'decision' },
      { id: 'b', label: 'Block; show the finding inline', sub: 'fix, or a justified suppression', tone: 'red' },
      { id: 'm', label: 'Merge', tone: 'green' },
      { id: 'n', label: 'Nightly full scan', sub: 'backlog triage (owner, SLA)', tone: 'violet' },
    ],
    edges: [
      { from: 'ide', to: 'pr' }, { from: 'pr', to: 'x' }, { from: 'x', to: 'b', label: 'yes' },
      { from: 'x', to: 'm', label: 'no' }, { from: 'm', to: 'n' },
    ],
  },
  'C12-M04-F3': {
    type: 'graph',
    dir: 'TB',
    nodes: [
      { id: 'f', label: 'Finding', tone: 'slate' },
      { id: 'r', label: 'Reachable by external data?', kind: 'decision' },
      { id: 'fp', label: 'FALSE POSITIVE', sub: 'suppress with rule id + reason', tone: 'slate' },
      { id: 'n', label: 'Fix now?', kind: 'decision' },
      { id: 'tp', label: 'TRUE POSITIVE', sub: 'fix + test', tone: 'green' },
      { id: 'ar', label: 'ACCEPTED RISK', sub: 'waiver with owner + expiry', tone: 'orange' },
    ],
    edges: [
      { from: 'f', to: 'r' }, { from: 'r', to: 'fp', label: 'no' }, { from: 'r', to: 'n', label: 'yes' },
      { from: 'n', to: 'tp', label: 'yes' }, { from: 'n', to: 'ar', label: 'no' },
    ],
  },
  'C12-M05-F1': {
    type: 'compare',
    columns: [
      { title: 'requirements.txt (manifest)', tone: 'orange', items: ['requests 2.25.0', 'urllib3 1.26.4', 'PyYAML 6.0.1', 'SBOM from the manifest: 3 components'] },
      { title: 'Resolved environment', tone: 'blue', items: ['requests, urllib3, PyYAML', '+ idna, chardet, certifi (transitive)', 'SBOM / SCA from the environment: 6 components'] },
    ],
    note: 'Scan the resolved environment, not just the manifest, or transitive dependencies are missed.',
  },
  'C12-M05-F2': {
    type: 'flow',
    dir: 'TB',
    steps: [
      { label: 'Approved index', tone: 'slate' },
      { label: 'Lock file + hashes', tone: 'blue' },
      { label: 'Install with --require-hashes', tone: 'violet' },
      { label: 'SBOM', tone: 'orange' },
      { label: 'SCA gate + licence check', sub: 'pip-audit exit code', tone: 'red' },
      { label: 'Signed release with SBOM', sub: 'Module 7', tone: 'green' },
      { label: 'Daily re-scan of SBOMs', tone: 'dark' },
    ],
  },
  'C12-M05-F3': {
    type: 'graph',
    dir: 'TB',
    nodes: [
      { id: 'a', label: 'Advisory', tone: 'slate' },
      { id: 'k', label: 'In KEV / exploited?', kind: 'decision' },
      { id: 'e', label: 'Fix within the emergency SLA', tone: 'red' },
      { id: 'r', label: 'Reachable + exposed?', kind: 'decision' },
      { id: 's', label: 'Fix within the severity SLA', tone: 'orange' },
      { id: 'b', label: 'Next routine batch (bot PR)', sub: 'or a waiver with expiry', tone: 'green' },
    ],
    edges: [
      { from: 'a', to: 'k' }, { from: 'k', to: 'e', label: 'yes' }, { from: 'k', to: 'r', label: 'no' },
      { from: 'r', to: 's', label: 'yes' }, { from: 'r', to: 'b', label: 'no' },
    ],
  },
  'C12-M06-F1': {
    type: 'graph',
    dir: 'LR',
    fixedDir: true,
    nodes: [
      { id: 'c', label: 'Config in git', sub: 'DB_PASSWORD=secretref:prod/shipments/db', tone: 'slate' },
      { id: 's', label: 'Service starts', tone: 'blue' },
      { id: 'm', label: 'SECRETS MANAGER', sub: 'audit log', tone: 'dark' },
    ],
    edges: [
      { from: 'c', to: 's' },
      { from: 's', to: 'm', label: 'workload identity' },
      { from: 'm', to: 's', label: 'current version', dashed: true },
    ],
    note: 'Rotation: the manager issues a new version and the service re-reads it on an authentication failure. No secret ever lives in the code.',
  },
  'C12-M06-F2': {
    type: 'table',
    columns: ['Commit', 'Change', 'What scanners see'],
    rowTones: ['green', 'red', 'orange'],
    rows: [
      ['7ee7864', 'Initial (clean)', '—'],
      ['6e1981d', 'Add config: KEY ADDED', 'gitleaks history scan: finding'],
      ['e935d02', 'Move to env: key removed', 'Working-tree scan: no leaks'],
    ],
    note: 'Deleting the key in a later commit does not remove it: anyone with a clone still has 6e1981d. Rotate the key.',
  },
  'C12-M06-F3': {
    type: 'flow',
    dir: 'TB',
    steps: [
      { label: '1  REVOKE / ROTATE at the issuer', tone: 'red' },
      { label: '2  INVESTIGATE usage logs', tone: 'orange' },
      { label: '3  FIX the cause', sub: 'secrets manager, OIDC, scanning', tone: 'blue' },
      { label: '4  CLEAN history', sub: 'optional', tone: 'slate' },
      { label: '5  RECORD lessons; search elsewhere', tone: 'green' },
    ],
  },
  'C12-M07-F1': {
    type: 'flow',
    dir: 'TB',
    steps: [
      { label: 'Reviewed commit', sub: 'branch protection, CODEOWNERS', tone: 'slate' },
      { label: 'Ephemeral runner', sub: 'least-privilege token, OIDC', tone: 'blue' },
      { label: 'Build', sub: 'pinned actions, hashed dependencies, tests, SCA', tone: 'violet' },
      { label: 'Artefact + signature + provenance', sub: 'subject = sha256', tone: 'orange' },
      { label: 'Registry', tone: 'slate' },
      { label: 'Deploy gate', sub: 'verify signature + provenance → deploy', tone: 'green' },
    ],
  },
  'C12-M07-F2': {
    type: 'layers',
    layers: [
      { label: 'L3', sub: 'hardened platform: isolated builds, signing secret kept out of user steps', tone: 'green' },
      { label: 'L2', sub: 'signed provenance from a hosted build platform', tone: 'blue' },
      { label: 'L1', sub: 'provenance exists (unsigned or self-generated): the lab example', tone: 'orange' },
      { label: 'L0', sub: 'no provenance', tone: 'red' },
    ],
    note: 'SLSA Build levels (v1.2).',
  },
  'C12-M07-F3': {
    type: 'graph',
    dir: 'TB',
    nodes: [
      { id: 'a', label: 'Artefact', tone: 'slate' },
      { id: 's', label: 'Signature valid?', kind: 'decision' },
      { id: 'r1', label: 'REJECT', sub: '"invalid signature"', tone: 'red' },
      { id: 'd', label: 'Digest == provenance subject?', kind: 'decision' },
      { id: 'r2', label: 'REJECT', sub: 'MISMATCH', tone: 'red' },
      { id: 'b', label: 'Builder + source as expected?', kind: 'decision' },
      { id: 'r3', label: 'REJECT', tone: 'red' },
      { id: 'ok', label: 'DEPLOY', tone: 'green' },
    ],
    edges: [
      { from: 'a', to: 's' }, { from: 's', to: 'r1', label: 'no' }, { from: 's', to: 'd', label: 'yes' },
      { from: 'd', to: 'r2', label: 'no' }, { from: 'd', to: 'b', label: 'yes' },
      { from: 'b', to: 'r3', label: 'no' }, { from: 'b', to: 'ok', label: 'yes' },
    ],
  },
  'C12-M08-F1': {
    type: 'tree',
    into: true,
    root: { label: 'release_report.py → DECISION: APPROVED / BLOCKED', tone: 'dark' },
    edgeLabel: 'every step writes out/<gate>.rc + JSON',
    children: [
      { label: 'python:3.12-slim', sub: 'tests → semgrep --error → pip-audit → SBOM + licences', tone: 'blue' },
      { label: 'gitleaks', sub: 'secret scan (app/)', tone: 'red' },
      { label: 'Host', sub: 'tar artefact', tone: 'slate' },
      { label: 'cosign', sub: 'sign → verify', tone: 'green' },
    ],
  },
  'C12-M08-F3': {
    type: 'cycle',
    center: 'Findings lifecycle',
    steps: [
      { label: 'Detect' },
      { label: 'Deduplicate / enrich' },
      { label: 'Triage', sub: 'TP / FP / accepted' },
      { label: 'Remediate', sub: '+ test' },
      { label: 'Verify', sub: 'gate passes' },
      { label: 'Close' },
      { label: 'Learn', sub: 'rules, paved road' },
    ],
  },
};
