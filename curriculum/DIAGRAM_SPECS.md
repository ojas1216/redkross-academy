# Diagram spec reference

Diagrams are rendered to SVG by `scripts/figures/render.mjs` (white card, orange accent bar,
figure code chip, light tone palette, Helvetica metrics so text wraps exactly). A spec is a JSON
object with a `type` and the fields below, plus the required `title`, `caption` and `alt` used by
the v2 build (see AUTHORING_GUIDE.md section 4).

**Tones** (meaning, not decoration): `blue` (normal component / data), `green` (allowed, safe,
fixed, defender), `red` (attack, risk, denied, vulnerable), `orange` (key step / focus),
`violet` (control plane, policy, decision), `slate` (neutral, external, infrastructure),
`dark` (the most important outcome or a trust anchor; white text). Omit `tone` to get a rotation.

**Text**: keep `label` short (under ~40 characters) and put detail in `sub`. Text wraps
automatically. Use real names from the lesson (protocol messages, components, tools).

**Every type accepts** `note`: one sentence shown under the diagram (the takeaway).

## sequence

actors: [{id, label, sub?, tone?}] (2-5 lanes, left to right); messages: [{from, to, label, dashed?}] in time order (dashed = reply/response); note?

```json
{
  "type": "sequence",
  "actors": [
    {
      "id": "c",
      "label": "Client",
      "tone": "blue"
    },
    {
      "id": "k",
      "label": "KDC (on the DC)",
      "sub": "AS + TGS",
      "tone": "dark"
    },
    {
      "id": "s",
      "label": "Service",
      "tone": "orange"
    }
  ],
  "messages": [
    {
      "from": "c",
      "to": "k",
      "label": "AS-REQ (with pre-authentication)"
    },
    {
      "from": "k",
      "to": "c",
      "label": "AS-REP: TGT (encrypted with the krbtgt key) + session key",
      "dashed": true
    },
    {
      "from": "c",
      "to": "k",
      "label": "TGS-REQ: TGT + SPN"
    },
    {
      "from": "k",
      "to": "c",
      "label": "TGS-REP: service ticket (encrypted with the service key)",
      "dashed": true
    },
    {
      "from": "c",
      "to": "s",
      "label": "AP-REQ: service ticket"
    }
  ],
  "note": "The service decrypts the ticket with its own key; it never needs to contact the KDC."
}
```

## graph

nodes: [{id, label, sub?, tone?, kind?: "decision"}]; edges: [{from, to, label?, dashed?}]; dir: "TB" | "LR" (layout is automatic; set fixedDir: true to stop it switching TB/LR for readability); note?. Best for architectures, data flows, trust boundaries, decision trees (branches as labelled edges).

```json
{
  "type": "graph",
  "dir": "TB",
  "nodes": [
    {
      "id": "a",
      "label": "Same technical action",
      "sub": "connect to a service and probe it",
      "tone": "slate"
    },
    {
      "id": "w",
      "label": "WITH written authorisation",
      "sub": "in scope + safe Rules of Engagement",
      "tone": "green"
    },
    {
      "id": "n",
      "label": "WITHOUT authorisation",
      "sub": "or out of scope",
      "tone": "red"
    },
    {
      "id": "l",
      "label": "Lawful, valued engagement",
      "tone": "green"
    },
    {
      "id": "o",
      "label": "An offence",
      "sub": "IT Act 2000 ss. 43 / 66",
      "tone": "red"
    }
  ],
  "edges": [
    {
      "from": "a",
      "to": "w"
    },
    {
      "from": "a",
      "to": "n"
    },
    {
      "from": "w",
      "to": "l"
    },
    {
      "from": "n",
      "to": "o"
    }
  ],
  "note": "Authorisation, not the technique, is what separates a penetration test from an attack."
}
```

```json
{
  "type": "graph",
  "dir": "LR",
  "nodes": [
    {
      "id": "d",
      "label": "Discovery"
    },
    {
      "id": "v",
      "label": "Verification"
    },
    {
      "id": "p",
      "label": "Proof of impact",
      "tone": "green"
    },
    {
      "id": "s",
      "label": "Ethical tester STOPS",
      "sub": "demonstrate the consequence, do not pursue it",
      "tone": "dark"
    },
    {
      "id": "w",
      "label": "Weaponise",
      "tone": "red"
    },
    {
      "id": "de",
      "label": "Deliver",
      "tone": "red"
    },
    {
      "id": "a",
      "label": "Actions on objectives",
      "tone": "red"
    }
  ],
  "edges": [
    {
      "from": "d",
      "to": "v"
    },
    {
      "from": "v",
      "to": "p"
    },
    {
      "from": "p",
      "to": "s"
    },
    {
      "from": "p",
      "to": "w",
      "label": "only an attacker continues",
      "dashed": true
    },
    {
      "from": "w",
      "to": "de",
      "dashed": true
    },
    {
      "from": "de",
      "to": "a",
      "dashed": true
    }
  ]
}
```

## flow

steps: [{label, sub?, tone?, details?: [string], side?: string}]; dir?: "LR" (default) | "TB" (use TB for 5+ steps or long labels); loop?: {label} draws a feedback arrow from the last step back; highlightLast?; note?

```json
{
  "type": "flow",
  "dir": "TB",
  "steps": [
    {
      "label": "Import",
      "tone": "slate"
    },
    {
      "label": "Auto-analyse",
      "sub": "disassembly + functions + CFG + decompile",
      "tone": "blue"
    },
    {
      "label": "Orient",
      "sub": "entry point + imports",
      "tone": "violet"
    },
    {
      "label": "Find functions calling interesting APIs",
      "sub": "network / crypto / process / registry",
      "tone": "orange"
    },
    {
      "label": "Read, rename, comment",
      "sub": "build a map",
      "tone": "green"
    },
    {
      "label": "Follow the logic",
      "sub": "decrypt config, trigger, C2",
      "tone": "red"
    },
    {
      "label": "Extract",
      "sub": "keys, config, C2, algorithm",
      "tone": "dark"
    }
  ]
}
```

```json
{
  "type": "flow",
  "steps": [
    {
      "label": "Planning"
    },
    {
      "label": "Discovery"
    },
    {
      "label": "Attack"
    },
    {
      "label": "Reporting",
      "tone": "dark"
    }
  ],
  "loop": {
    "label": "feedback: new information found during Attack returns to Discovery"
  }
}
```

## layers

layers: [{label, sub?, tone?}] listed TOP first; pyramid?: true (narrow at the top); darkTop?; arrows?; note?. Stacks, defence in depth, maturity levels.

```json
{
  "type": "layers",
  "pyramid": true,
  "layers": [
    {
      "label": "TTPs",
      "sub": "tough for the attacker to change",
      "tone": "dark"
    },
    {
      "label": "Tools",
      "sub": "challenging",
      "tone": "red"
    },
    {
      "label": "Network & host artifacts",
      "sub": "annoying",
      "tone": "orange"
    },
    {
      "label": "Domain names",
      "sub": "simple",
      "tone": "violet"
    },
    {
      "label": "IP addresses",
      "sub": "easy",
      "tone": "blue"
    },
    {
      "label": "Hash values",
      "sub": "trivial",
      "tone": "slate"
    }
  ],
  "note": "The higher the indicator type, the more pain it causes the attacker when you detect and deny it."
}
```

## compare

columns: [{title, tone?, items: [string]}] (2-3 columns); vs?: true draws "vs" between two columns; note?. Before/after, vulnerable/fixed, option A/B.

```json
{
  "type": "compare",
  "columns": [
    {
      "title": "BEFORE deletion",
      "tone": "blue",
      "items": [
        "Dir entry: \"CUSTOM~1CSV\", size 36, first cluster N",
        "FAT[N] = EOF",
        "Data cluster N: \"export of customer list…\""
      ]
    },
    {
      "title": "AFTER deletion",
      "tone": "orange",
      "items": [
        "Dir entry: 0xE5 \"USTOM~1CSV\" (first byte overwritten)",
        "FAT[N] = 0 (marked free)",
        "Data cluster N: \"export of customer list…\" is STILL THERE"
      ]
    }
  ],
  "note": "Deletion only marks the entry and clusters as free; the data remains until it is overwritten, which is why it can be recovered."
}
```

## table

columns: [string]; rows: [[cell, ...]]; rowTones?: [tone per row]; firstColTone?; note?. Keep to 3-5 columns, 3-9 rows, short cells.

```json
{
  "type": "table",
  "columns": [
    "Score",
    "Finding",
    "Mapping"
  ],
  "rowTones": [
    "red",
    "orange",
    "orange",
    "orange",
    "violet",
    "violet",
    "slate"
  ],
  "rows": [
    [
      "9.8 Critical",
      "SQL injection (login)",
      "A05 · CWE-89"
    ],
    [
      "8.2 High",
      "Broken access control /admin",
      "A01 · CWE-284"
    ],
    [
      "7.5 High",
      "Path traversal",
      "A01 · CWE-22"
    ],
    [
      "7.5 High",
      "SSRF",
      "A01 · CWE-918"
    ],
    [
      "6.5 Medium",
      "IDOR; CSRF",
      "A01 · CWE-639 / 352"
    ],
    [
      "6.1–5.3 Medium",
      "Reflected / stored XSS; session",
      "A05 / A07"
    ],
    [
      "3.1 Low",
      "Missing security headers",
      "A02 · CWE-693"
    ]
  ]
}
```

## tree

root: {label, sub?, tone?}; children: [{label, sub?, tone?}]; perRow? (children per row, default fits); into?: true reverses arrows (children feed the root); edgeLabel?; note?

```json
{
  "type": "tree",
  "root": {
    "label": "Organisation guardrails",
    "sub": "SCP / Azure Policy",
    "tone": "dark"
  },
  "children": [
    {
      "label": "Security + log archive",
      "sub": "immutable",
      "tone": "red"
    },
    {
      "label": "Backup account",
      "sub": "vault lock",
      "tone": "green"
    },
    {
      "label": "Prod",
      "sub": "WAF / ALB → private app (roles, IMDSv2) → private data (CMK)",
      "tone": "orange"
    },
    {
      "label": "Non-prod",
      "tone": "violet"
    },
    {
      "label": "Forensic account",
      "sub": "incident response",
      "tone": "blue"
    }
  ],
  "perRow": 5,
  "note": "Across all accounts: SSO + MFA + PIM · OIDC CI · CSPM + IaC gates · SIEM + native detection."
}
```

```json
{
  "type": "tree",
  "into": true,
  "root": {
    "label": "Log archive (Object Lock) + SIEM → triage queue",
    "tone": "dark"
  },
  "children": [
    {
      "label": "AWS accounts",
      "sub": "org trail + data events",
      "tone": "orange"
    },
    {
      "label": "Azure subscriptions",
      "sub": "diagnostic settings (Policy)",
      "tone": "blue"
    },
    {
      "label": "Entra / M365",
      "sub": "sign-in, audit, Purview",
      "tone": "violet"
    },
    {
      "label": "Network",
      "sub": "VPC / VNet flow, firewall, DNS",
      "tone": "slate"
    },
    {
      "label": "Native detection",
      "sub": "GuardDuty, Defender",
      "tone": "red"
    }
  ],
  "perRow": 5
}
```

## cycle

center: string; steps: [{label, sub?, tone?}] (3-8, clockwise); note?. Lifecycles and continuous loops.

```json
{
  "type": "cycle",
  "center": "Seven-step testing workflow",
  "steps": [
    {
      "label": "1 Authorise / scope"
    },
    {
      "label": "2 Map"
    },
    {
      "label": "3 Classify"
    },
    {
      "label": "4 Verify",
      "sub": "minimal safe check"
    },
    {
      "label": "5 Score + evidence",
      "sub": "CVSS"
    },
    {
      "label": "6 Report"
    },
    {
      "label": "7 Remediate + retest"
    }
  ],
  "note": "Loops back: new findings in step 4 can reveal new surface, so re-map."
}
```

## code

panels: [{title, tone?, lines: [string], highlight?: [substring to highlight]}] (1-2 panels, max ~14 lines each, ~48 chars per line); note?. Vulnerable vs fixed code, config before/after.

```json
{
  "type": "code",
  "panels": [
    {
      "title": "Vulnerable: string formatting",
      "tone": "red",
      "lines": [
        "q = \"...WHERE username='%s'",
        "     AND password='%s'\" % (user, pw)",
        "",
        "input: user = admin'--   pw = x",
        "",
        "...WHERE username='admin'--'",
        "   AND password='x'",
        "",
        "-- comments out the password check",
        "-> admin row returns -> logged in"
      ],
      "highlight": [
        "admin'--",
        "logged in"
      ]
    },
    {
      "title": "Fixed: parameterised query",
      "tone": "green",
      "lines": [
        "execute(",
        "  \"...WHERE username=? AND password=?\",",
        "  (user, pw)",
        ")",
        "",
        "input stays data -> no bypass"
      ]
    }
  ]
}
```

## bars

bars: [{label, value: number, display?: string, tone?}]; log?: true for log scale; caption?; note?

```json
{
  "type": "bars",
  "caption": "Alerts produced by the same feed, with and without IOC management",
  "bars": [
    {
      "label": "Naive: update service",
      "value": 43,
      "display": "43",
      "tone": "slate"
    },
    {
      "label": "Naive: shared hosting",
      "value": 30,
      "display": "30",
      "tone": "slate"
    },
    {
      "label": "Naive: campaign",
      "value": 8,
      "display": "8",
      "tone": "orange"
    },
    {
      "label": "Managed: campaign",
      "value": 8,
      "display": "8 (u017 only)",
      "tone": "green"
    }
  ],
  "note": "Naively loading every indicator produced 81 alerts; managing them (allowlists, ageing, context) left the 8 that matter."
}
```

## scale

ticks: [{label, sub?}] left to right; bands: [{from: tickIndex, to: tickIndex, label, tone?}]; note?. Ordered spectra (key strength, severity, maturity).

```json
{
  "type": "scale",
  "ticks": [
    {
      "label": "13 bits",
      "sub": "PIN"
    },
    {
      "label": "38 bits",
      "sub": "8 lowercase chars"
    },
    {
      "label": "78 bits",
      "sub": "12 mixed chars"
    },
    {
      "label": "128 bits",
      "sub": "random key"
    },
    {
      "label": "256 bits",
      "sub": "AES-256 key"
    }
  ],
  "bands": [
    {
      "from": 0,
      "to": 1,
      "label": "seconds to brute-force",
      "tone": "red"
    },
    {
      "from": 1,
      "to": 2,
      "label": "hours",
      "tone": "orange"
    },
    {
      "from": 2,
      "to": 4,
      "label": "out of reach for classical brute force",
      "tone": "green"
    }
  ],
  "note": "Values from the execution-tested lab; time labels are qualitative."
}
```

## ticks

series: [{label, times: [0..1 positions], sub?, tone?}]; axis?: string; note?. Events on a timeline (beaconing, sampling).

```json
{
  "type": "ticks",
  "series": [
    {
      "label": "Population of 240 (exceptions)",
      "times": [
        0.1,
        0.33,
        0.56,
        0.86
      ],
      "sub": "4 exceptions in the full population",
      "tone": "red"
    },
    {
      "label": "Sample of 25",
      "times": [
        0.03,
        0.08,
        0.12,
        0.15,
        0.2,
        0.25,
        0.3,
        0.36,
        0.42,
        0.47,
        0.52,
        0.6,
        0.65,
        0.7,
        0.74,
        0.78,
        0.82,
        0.9,
        0.95
      ],
      "sub": "the sample happened to miss all 4: 0 found",
      "tone": "slate"
    },
    {
      "label": "Full test",
      "times": [
        0.1,
        0.33,
        0.56,
        0.86
      ],
      "sub": "every item checked: 4 found",
      "tone": "green"
    }
  ],
  "note": "Where a full-population test is possible (e.g. with scripts), it beats sampling."
}
```

## segments

segments: [{label, sub?, top?: string above the box, w?: relative width, tone?}] left to right; note?. Packet headers, disk/file layouts, memory regions.

```json
{
  "type": "segments",
  "segments": [
    {
      "label": "Protective MBR",
      "top": "LBA 0",
      "w": 1.1,
      "tone": "slate"
    },
    {
      "label": "GPT header",
      "top": "LBA 1",
      "w": 1.1,
      "tone": "blue"
    },
    {
      "label": "Partition entries",
      "sub": "128 entries",
      "top": "LBA 2–33",
      "w": 1.4,
      "tone": "violet"
    },
    {
      "label": "P1",
      "w": 1.4,
      "tone": "orange"
    },
    {
      "label": "P2",
      "w": 1.4,
      "tone": "orange"
    },
    {
      "label": "Gaps?",
      "sub": "unallocated",
      "w": 0.9,
      "tone": "red"
    },
    {
      "label": "Backup entries + backup header",
      "top": "end-33 … end",
      "w": 1.6,
      "tone": "green"
    }
  ],
  "note": "Check the gaps between partitions and compare the primary and backup GPT structures."
}
```

## grid

tiles: [{label, sub?, tone?, tag?}]; cols?: 2-4; note?. Control sets, checklists of equal-weight items.

```json
{
  "type": "grid",
  "cols": 2,
  "tiles": [
    {
      "label": "Authenticated association",
      "sub": "not Just Works",
      "tone": "green"
    },
    {
      "label": "LE Secure Connections",
      "tone": "green"
    },
    {
      "label": "Discoverable on demand / limited",
      "sub": "not always on",
      "tone": "blue"
    },
    {
      "label": "No default or fixed PIN",
      "tone": "blue"
    },
    {
      "label": "Maximum encryption key size",
      "sub": "16 bytes",
      "tone": "violet"
    },
    {
      "label": "Review and prune bonded devices",
      "tone": "violet"
    },
    {
      "label": "Disable Bluetooth when unused",
      "tone": "orange"
    },
    {
      "label": "Patch firmware",
      "tone": "orange"
    }
  ],
  "note": "Bluetooth hardening checklist."
}
```

## rows

rows: [{label, items: [string], tone?}]; header?: [leftHeader, rightHeader]; arrow?: true draws label -> items; note?. Mappings such as "threat -> controls".

```json
{
  "type": "rows",
  "rows": [
    {
      "label": "☐",
      "tone": "slate",
      "items": [
        "brief_builder.py PASS (B1–B6)"
      ]
    },
    {
      "label": "☐",
      "tone": "slate",
      "items": [
        "Peer review of the evidence for each judgment"
      ]
    },
    {
      "label": "☐",
      "tone": "slate",
      "items": [
        "Challenge of the key judgment"
      ]
    },
    {
      "label": "☐",
      "tone": "slate",
      "items": [
        "Privacy / legal check (personal data, TLP)"
      ]
    },
    {
      "label": "☐",
      "tone": "slate",
      "items": [
        "Actions have owners and dates; tracker updated"
      ]
    },
    {
      "label": "☐",
      "tone": "slate",
      "items": [
        "Distribution list recorded; feedback request scheduled"
      ]
    }
  ],
  "note": "Release checklist: every box must be ticked before the brief goes out."
}
```

## Choosing a type

| Lesson content | Type |
| --- | --- |
| Messages between parties over time (handshakes, auth flows, API calls) | sequence |
| Components and connections, trust boundaries, decision logic | graph |
| An ordered procedure or methodology | flow |
| A stack, layered model or defence in depth | layers |
| Two or three alternatives side by side | compare |
| Attributes across several items | table |
| One thing that breaks down into parts | tree |
| A repeating lifecycle | cycle |
| Vulnerable versus fixed code or configuration | code |
| Quantities | bars / scale / ticks |
| Byte, field or partition layout | segments |
| A set of controls or checks | grid / rows |
