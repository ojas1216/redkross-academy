## Revision

### Summary

The capstone assessment scopes a controlled AI application, collects behaviour evidence (probes, summaries, intervals), control evidence (unit tests, retrieval traces), data evidence (ingestion audit) and supply-chain evidence (approved digests, manifests), hashes it, and documents failure paths from source to impact with controls at each hop. On BanyanBot, FP-1 showed a planted page retrieved for a benign refund question leading to a simulated refund on another customer's order in 3/5 naive runs, stopped in hardened by sanitising and a unit-tested tool policy. Mitigations put deterministic controls first, keep probabilistic layers without relying on them, and add detection and governance. Reports state facts, intervals, limitations and residual risk and request decisions. Regulation such as the EU AI Act (Regulation (EU) 2024/1689) makes documented assessment an expectation.

### Important concepts

failure-path register; evidence pack; residual risk.

### Key technical takeaways

the seven evidence commands; hashing; hop-by-hop controls.

### Glossary

| Term | Meaning |
|---|---|
| Evidence pack | Hashed set of assessment outputs. |
| Failure path | Sequence from untrusted source to impact. |
| Residual risk | Risk remaining after controls. |
| Release gate | Automated checks before deployment. |

### Common mistakes

"no vulnerabilities" claims; evidence without versions; ignoring utility.

### Revision questions

​1. Write FP-1 from memory. 2. Rank BanyanBot's mitigations. 3. List the report sections.
