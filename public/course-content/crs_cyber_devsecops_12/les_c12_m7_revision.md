## Revision

### Summary

Pipelines are high-value targets and must be modelled. Use least-privilege CI tokens with read-only defaults, OIDC federation instead of stored keys, and separate scoped roles per stage and environment. Protect definitions with branch protection and CODEOWNERS. Treat fork contributions as untrusted, pass untrusted input via environment variables, and use ephemeral runners. Pin third-party actions by commit SHA and verify downloaded tools. Sign artefacts with cosign: in the lab the original verified and a one-byte-modified copy failed; cosign v3 needed new flags. Provenance (an in-toto Statement with a SLSA predicate) records how artefacts were built. The lab's self-generated example is L1-style, while SLSA Build L2/L3 need platform-signed provenance and hardened builds. Deploy gates verify signature, digest, builder and source. Codecov's altered uploader was caught by a checksum comparison.

### Important concepts

least privilege for automation; verify before running and deploying; provenance levels.

### Key technical takeaways

permissions and id-token; SHA pins; cosign sign-blob/verify-blob; provenance subject check.

### Glossary

| Term | Meaning |
|---|---|
| Artefact | Build output (package, image, binary). |
| CODEOWNERS | File assigning required reviewers to paths. |
| Ephemeral runner | Fresh build machine per job. |
| in-toto Statement | Standard envelope for software attestations. |
| Provenance | Signed record of how an artefact was built. |
| SLSA | Supply-chain Levels for Software Artifacts. |
| Transparency log | Public append-only log of signatures (Sigstore Rekor). |

### Common mistakes

tag-pinned actions; secrets in fork workflows; deploying without verification.

### Revision questions

​1. List five pipeline hardening controls. 2. Explain SLSA L1-L3. 3. What does a deploy gate verify?
