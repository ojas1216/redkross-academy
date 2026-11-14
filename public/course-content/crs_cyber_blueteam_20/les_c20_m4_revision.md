## Revision

### Summary

Sigma (rules specification 2.1.0, 2 August 2025) describes detections in YAML with mandatory title, logsource and detection. Modifiers (contains, endswith, all, re, ...) and conditions (and, or, not, 1 of, all of) express the logic. Values are case-insensitive, but regexes are case-sensitive.

**Backslash escaping needs care:** four backslashes match two. Conversion via pySigma and sigma-cli uses pipelines to map fields. Every rule needs positive, negative and edge tests. The Tamarind pack has 7 rules and 18 cases, all passing, and every rule fires only on WS-07 activity on the reference day. Version control, hooks, CI and peer review form the workflow. The hook caught a one-word change that broke a rule. CrowdStrike's Channel File 291 incident (19 July 2024; about 8.5 million devices) shows why content needs real-interpreter testing and staged deployment.

### Important concepts

rules are code; the repository is the source of truth; tests encode false positives.

### Key technical takeaways

sigma check and convert; read the converted query; negative tests for near-misses.

### Glossary

| Term | Meaning |
|---|---|
| CI | Continuous integration. |
| pySigma | Python library behind sigma-cli. |
| Pipeline | pySigma field and log-source mapping. |
| Sigma | Vendor-neutral detection rule format. |
| UUID | Universally unique identifier. |

### Common mistakes

no negative tests; console-only edits; bulk imports without measuring volume.

### Revision questions

​1. Name three modifiers. 2. Explain the escaping rule for backslashes. 3. List five review checks.
