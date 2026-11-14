## Revision

### Summary

rkcrypt applies the course. Requirements and a threat model with stated non-goals lead to a design of scrypt (N=2^17, r=8, p=1) with a per-file random salt, AES-256-GCM with a random nonce, and an authenticated 36-byte versioned header. Decryption checks structure and parameter bounds before key derivation, fails uniformly, and writes output atomically. In the tested CLI run, 55 bytes became 107, the round trip preserved the SHA-256, and tampering or a wrong passphrase gave exit 1 while a missing file gave exit 2. Eleven tests cover correctness, freshness, integrity, authentication, robustness and the interface (all OK in 2.6 s). Security documentation states purpose, threat model, design with references, passphrase guidance, operations, limitations, test evidence and maintenance. Extensions (streaming, recipients, Argon2id, signatures) need version changes and new tests. The Storm-0558 findings show that key lifecycle and validation discipline matter at every scale.

### Important concepts

authenticated headers; construction-level uniqueness; documented limits.

### Key technical takeaways

struct header packing; AAD; bounded KDF parsing; atomic writes.

### Glossary

| Term | Meaning |
|---|---|
| Atomic write | Write to temp file then rename, avoiding partial output. |
| Known-answer test | Test against fixed stored vectors. |
| Non-goal | Explicitly excluded security property. |
| Test vector | Fixed input/output pair for verification. |

### Common mistakes

unauthenticated headers; no versioning; lowering parameters for tests in production.

### Revision questions

​1. Draw the file format. 2. List six test categories. 3. Name five limitations of rkcrypt.
