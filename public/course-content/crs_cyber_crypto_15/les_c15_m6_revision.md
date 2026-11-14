## Revision

### Summary

TLS provides authenticated, confidential channels with forward secrecy. TLS 1.0 and 1.1 are retired, and TLS 1.3 is now specified by RFC 9846 (obsoleting RFC 8446), which forbids TLS 1.0/1.1 and KeyShare reuse. The 1-RTT TLS 1.3 handshake exchanges key shares, derives keys with HKDF, encrypts the server's certificate flight, proves key possession with CertificateVerify and confirms with Finished. Only AEAD suites remain, and 0-RTT can be replayed. Configure TLS 1.3 plus 1.2 with ECDHE-AEAD, full chains and HSTS. Clients must verify, as create_default_context does. In the lab, the trusted client negotiated TLS 1.3 with AES-256-GCM; wrong names and unknown CAs were rejected, a TLS 1.1 client found no ciphers, and a 1.2 client was refused by a 1.3-only server. mTLS gives service identity. SC-081v3 reduces public certificate lifetimes to 47 days by 2029, so automate the lifecycle.

### Important concepts

forward secrecy; verification on by default; lifecycle automation.

### Key technical takeaways

ssl contexts; s_client -servername -CAfile; error classes.

### Glossary

| Term | Meaning |
|---|---|
| 0-RTT | Early data sent on resumption; replayable. |
| ACME | Automated certificate issuance protocol. |
| HSTS | HTTP Strict Transport Security. |
| mTLS | Mutual TLS with client certificates. |
| SNI | Server Name Indication. |
| Cipher suite | In TLS 1.3, the AEAD and hash pair. |

### Common mistakes

legacy versions enabled; manual renewals; disabled client verification.

### Revision questions

​1. Walk through the TLS 1.3 handshake. 2. What does RFC 9846 change? 3. Interpret four TLS errors.
