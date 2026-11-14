## Revision

### Summary

The capstone pipeline runs tests, SAST, dependency audit, secret scanning, SBOM and licence inventory, and signing, in pinned containers. Every gate records its result and the report computes the decision. In the tested runs, the upgraded release passed every gate (0 advisories, SBOM of 7 components, only certifi's MPL licence flagged) and was approved. The outdated pins were blocked by the audit gate with 17 unique advisories. Two real defects in the pipeline itself were found and fixed: tooling contaminating the SBOM (42 components) and a container permission error blocking signing. Findings move through detection, deduplication, triage, remediation, verification and learning. The release security report identifies the artefact by digest, gives decisions, gate results, waivers, supply-chain evidence, design assurance and limitations, with sign-off. Releases are verified by signature, provenance and source correspondence, the lesson of the xz tarballs.

### Important concepts

complete, automatic decisions; accurate SBOM scope; honest limitations.

### Key technical takeaways

rc-file gate pattern; tool/product separation; report computed from evidence.

### Glossary

| Term | Meaning |
|---|---|
| Findings lifecycle | Detect-to-close process for security findings. |
| Release security report | Evidence-based release assurance document. |
| Reproducible build | Build producing identical output from identical inputs. |
| Residual risk | Risk remaining after controls and waivers. |
| Sign-off | Accountable approval of a release. |

### Common mistakes

reports without digests; SBOMs of the CI image; treating "approved" as "secure".

### Revision questions

​1. List the nine report sections. 2. Why separate tooling from product? 3. How do you verify a release?
