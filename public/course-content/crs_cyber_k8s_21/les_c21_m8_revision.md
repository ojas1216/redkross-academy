## Revision

### Summary

Hardening is a measured loop: scope, baseline, prioritise, change through Git, verify by effect, re-run, report and schedule. The lab catalogue of ten controls (anonymous access, encryption, audit logging, Pod Security default and labels, default-deny, RBAC, admission policies, live workload policy, digests) moved the default cluster at 2/10 and the hardened cluster from 7/10 to 10/10 after fixing a re-created RBAC grant, a pod without limits and a bug in the tool itself. Scan images, manifests, live state and access, linked through the digest. Evidence must be reproducible, specific, timestamped, hashed and honest about limits; scores are statements about chosen tests. Keep clusters hardened with scheduled evidence, drift detection, advisory tracking and re-testing after upgrades. CVE-2025-1974 showed why add-on inventory, pod-network segmentation and add-on RBAC matter.

### Important concepts

baseline; test by effect; evidence integrity; residual risk; regression detection.

### Key technical takeaways

same tool before and after; hash evidence; include add-ons; investigate unexpected failures before acting.

### Glossary

```text
Baseline      Measured state before changes.
Evidence      Reproducible record of a test and its observed result.
Regression    A previously passing control that fails again.
Residual risk Risk that remains after controls, owned by a decision
              maker.
```

### Common mistakes

screenshots as evidence; "10/10 means secure"; fixing by hand; ignoring add-ons.

### Revision questions

​1. Describe the hardening loop. 2. Explain why C04 uses a dry run. 3. List four things the catalogue does not cover.
