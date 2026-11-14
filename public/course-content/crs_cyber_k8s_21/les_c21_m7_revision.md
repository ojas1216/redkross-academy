## Revision

### Summary

The supply chain runs from source through dependencies, build, artefact and registry to deployment, and each stage needs its own control. SLSA Build levels range from L0 to L3 (hardened builds); local BuildKit provenance in the lab had an empty builder id, incomplete dependencies and no signature - about L1. Signatures bind identities to digests; cosign checks the signature, the claims and, for keyless signing, the certificate identity; transparency logs make signing auditable. The lab proved that moving a tag breaks verification by tag while the signed digest still verifies, so deployments must use digests and verification must happen at admission. Attestations sign typed statements (SBOM, provenance) about a digest. Deployment controls combine registry allowlists, digest-only policies and signature-verifying webhooks. The xz backdoor showed that release artefacts can differ from reviewed source.

### Important concepts

chain dependency; provenance; digest binding; attestation; admission-time verification.

### Key technical takeaways

sign digests; verify at admission; protect keys in KMS or use keyless; test policies with real changes.

### Glossary

| Term | Meaning |
|---|---|
| Attestation | A signed statement about an artefact (in-toto). |
| cosign | Sigstore's tool for signing and verifying artefacts. |
| Provenance | Metadata describing how an artefact was built. |
| Rekor | Sigstore's transparency log. |
| SLSA | Supply-chain Levels for Software Artifacts. |

### Common mistakes

verifying tags; signing keys readable by all jobs; verification only after deployment; assuming one attestation.

### Revision questions

​1. Name the four SLSA build levels. 2. Explain the tag-moved experiment. 3. List three admission-layer controls.
