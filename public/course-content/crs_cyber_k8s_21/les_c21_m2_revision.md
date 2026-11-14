## Revision

### Summary

Base images contribute most packages; minimal bases (slim, distroless, scratch) reduce findings and tools for intruders but change debugging.

**Dockerfile hygiene:** digest pins, no secrets in ENV/ARG or the build context, numeric non-root USER, verified downloads, multi-stage builds. Scanners inventory packages and match advisories; backports cause false positives, metadata-less binaries and unknown secret formats cause false negatives; results change daily. In the lab, 376 findings fell to 325 by hardening the Dockerfile and to 203 (no CRITICAL) by refreshing the base; removing unneeded Python packages removed 23 findings. Gates block fixable CRITICAL/HIGH and secrets and accept expiring exceptions. SBOMs (CycloneDX 1.7, ECMA-424; SPDX) enable exposure queries; provenance records how the image was built. CVE-2019-5021 showed base-image defects propagate to every derived image.

### Important concepts

attack surface; fixable versus unfixable; exception expiry; SBOM; provenance.

### Key technical takeaways

docker history reveals ENV; layers keep deleted files; record scanner version and date; rebuild on base updates.

### Glossary

| Term | Meaning |
|---|---|
| Distroless | Image with a language runtime but no shell or package manager. |
| purl | Package URL, a standard package identifier. |
| SBOM | Software bill of materials. |
| VEX | Vulnerability Exploitability eXchange statement. |

### Common mistakes

chasing counts; waivers without expiry; trusting secret scanners; copying the whole build context.

### Revision questions

​1. Explain three false-negative sources. 2. Design an exception record. 3. Contrast SBOM and provenance.
