## Revision

### Summary

AES (FIPS 197) is the standard block cipher (128-bit blocks, keys up to 256 bits). Modes matter: ECB leaks repetition (2 of 4 distinct blocks in the lab), CBC without a MAC is tamperable, and CTR and stream ciphers need unique nonces and added integrity. Use AEAD: AES-GCM (SP 800-38D) or ChaCha20-Poly1305 (RFC 8439). In the lab, one flipped bit or a wrong AAD produced InvalidTag. Bind context with AAD, use 96-bit unique nonces and versioned formats. Key management covers generation, KMS or HSM storage, separation, rotation, revocation, destruction (crypto-shredding) and backup, per SP 800-57. Envelope encryption wraps per-object DEKs with KMS KEKs (32-byte DEK wrapped to 40 bytes in the lab), giving cheap rotation and central audit. Zoom's 2020 AES-128-ECB design shows mode and key distribution failures.

### Important concepts

AEAD by default; context binding; key lifecycle.

### Key technical takeaways

AESGCM/ChaCha20Poly1305 APIs; InvalidTag handling; aes_key_wrap.

### Glossary

| Term | Meaning |
|---|---|
| AAD | Associated data authenticated but not encrypted. |
| AEAD | Authenticated encryption with associated data. |
| Crypto-shredding | Destroying keys to make data unrecoverable. |
| DEK/KEK | Data encryption key / key encryption key. |
| ECB | Electronic codebook mode (unsafe for data). |
| Nonce | Number used once per key. |

### Common mistakes

ECB; ignoring tags; one key for everything.

### Revision questions

​1. Why does ECB leak? 2. What should go in AAD? 3. Describe envelope encryption.
