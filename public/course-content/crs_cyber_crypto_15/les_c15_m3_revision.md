## Revision

### Summary

Key pairs enable encryption or key encapsulation, signatures and key agreement, each with separate keys and trusted public-key binding. RSA needs OAEP and PSS padding and can encrypt only small data: 318 bytes for RSA-3072 with OAEP-SHA256 in the lab, with a ValueError beyond that. Use it to transport keys. ECC gives small, fast keys: Ed25519 (deterministic 64-byte signatures, which failed on a tampered message), ECDSA P-256 and X25519 key agreement. Pass shared secrets through HKDF with context info. The lab derived identical keys on both sides. Authenticate exchanges and use ephemeral keys for forward secrecy. About 128-bit security corresponds to RSA-3072 or 256-bit ECC; protect private keys in HSMs, TPMs or KMS. FIPS 203-205 (August 2024) begin the post-quantum transition, so inventory and plan for hybrid adoption. ROCA showed that key generation flaws can affect certified hardware at national scale.

### Important concepts

hybrid encryption; authenticated ephemeral exchange; key-generation trust.

### Key technical takeaways

OAEP size formula; Ed25519 and X25519 APIs; HKDF info labels.

### Glossary

```text
ECDH/X25519  Elliptic-curve Diffie-Hellman key agreement.
EdDSA/Ed25519  Edwards-curve digital signature algorithm.
HKDF       HMAC-based key derivation function (RFC 5869).
Hybrid encryption  Public-key to transport a symmetric key.
KEM        Key encapsulation mechanism.
OAEP / PSS RSA padding schemes for encryption / signatures.
```

### Common mistakes

RSA for bulk data; raw DH output as a key; unauthenticated exchanges.

### Revision questions

​1. Compute the OAEP limit for RSA-4096. 2. Why include public keys in HKDF info? 3. List three PQC migration steps.
