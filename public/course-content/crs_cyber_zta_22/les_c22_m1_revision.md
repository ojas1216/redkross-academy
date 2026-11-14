## Revision

### Summary

Security architecture turns goals, obligations and risks into testable requirements and structural controls, documented in views (context, logical, data-flow, deployment, identity, control) and decisions (ADRs). Assets sit in trust zones; boundaries are where authentication, authorisation, validation and logging belong; the management plane and CI/CD need the strongest protection. Principles include least privilege, defence in depth, secure defaults, fail safe, economy of mechanism, complete mediation, separation of duties, reduced attack surface and assume breach. Legacy constraints need transition architectures with compensating controls and retirement dates. The British Library review attributes part of the 2023 attack's severity to legacy infrastructure and an older network design that allowed wider access.

### Important concepts

requirements first; explicit trust; documented decisions.

### Key technical takeaways

zone model; boundary control lists; traceability.

### Glossary

| Term | Meaning |
|---|---|
| ADR | Architecture decision record. |
| Management plane | Administrative interfaces controlling infrastructure. |
| Reference architecture | Reusable approved design pattern. |
| Transition architecture | Intermediate state on the way to target. |
| Trust zone | Group of components with similar trust needs. |

### Common mistakes

product-first design; stale diagrams; undocumented legacy exceptions.

### Revision questions

​1. Write five architecture requirements. 2. Name six views. 3. Explain fail safe with an example.
