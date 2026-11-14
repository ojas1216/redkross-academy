## Revision

### Summary

Nonces must be unique per key for CTR, GCM and ChaCha20. CBC IVs must be random, and ECDSA nonces must be secret, unique and unbiased, or deterministic (RFC 6979, Ed25519). Strategies are random nonces within limits (SP 800-38D: 2^32 random-IV invocations per key), counters with durable single-writer state, extended nonces, misuse-resistant modes, or per-record keys. In the lab, a reused CTR nonce made C1 XOR C2 equal P1 XOR P2 and revealed the second message. GCM reuse also enables forgery, and ECDSA reuse reveals the key, as with the PS3 in 2010. Common misuse includes ECB, unauthenticated modes, weak KDFs (SHA-256(password) was identical everywhere in the lab), ignored tags, == comparisons, verify=False and home-made schemes. Prevent side channels with constant-time comparisons and uniform errors. Prefer protocols and services, then high-level libraries, then hazmat primitives with review. Review with a checklist, and automate checks with SAST.

### Important concepts

uniqueness by construction; uniform failure; high-level libraries.

### Key technical takeaways

nonce strategies; misuse catalogue; review checklist.

### Glossary

| Term | Meaning |
|---|---|
| AES-GCM-SIV | Nonce-misuse-resistant AEAD mode. |
| Constant time | Execution time independent of secret data. |
| Hazmat | Low-level cryptography layer requiring expertise. |
| IV | Initialisation vector. |
| Padding oracle | Attack using distinguishable padding errors. |
| RFC 6979 | Deterministic DSA/ECDSA nonce generation. |
| Side channel | Information leaked through physical or timing effects. |

### Common mistakes

counter state restored from backup; record IDs as nonces; custom ciphers.

### Revision questions

​1. Why does CTR nonce reuse leak plaintext? 2. Give four nonce strategies. 3. List ten checklist items.
