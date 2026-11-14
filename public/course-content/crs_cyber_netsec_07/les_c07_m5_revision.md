## Revision

### Summary

Connectivity across untrusted networks must be protected in transit. A VPN creates an encrypted, authenticated tunnel - remote-access (a user to the network) or site-to-site (network to network) - using technologies such as IPsec, TLS-based VPNs or WireGuard; but access after connecting must still be least-privilege (segmentation/ZTNA), not flat. TLS protects application traffic with confidentiality, integrity and server authentication (via a certificate chained to a trusted CA); TLS 1.3 (RFC 8446) is current and TLS 1.2 acceptable, while TLS 1.0 and 1.1 are formally deprecated (RFC 8996) and must be disabled. TLS fails quietly when misconfigured: deprecated protocols, weak ciphers (RC4, 3DES, EXPORT, NULL, anonymous), weak certificate keys (RSA < 2048), and expired/expiring certificates. These can be found safely by an OFFLINE configuration review - no scanning needed - as the lab's tlscheck.py does, moving the edge from five HIGH findings (TLS 1.0/1.1, RC4, 3DES, 1024-bit key) to none (TLS 1.2/1.3, AEAD suites, 2048-bit key). Remote access needs strong phishing-resistant authentication, least-privilege post-connection access, device posture, session limits, logging and prompt de-provisioning; modern ZTNA replaces flat VPN access with per-application continuous verification.

### Important concepts

VPN architecture; TLS protections; certificate chain of trust; weak protocols/ciphers/keys; offline TLS review; remote access controls.

### Key technical takeaways

require TLS 1.2+/prefer 1.3; disable TLS 1.0/1.1; remove weak ciphers; use strong keys and automate certificate renewal; grant least-privilege access after VPN; review TLS configuration before deployment.

### Glossary

```text
VPN  an encrypted, authenticated tunnel across an untrusted network.
TLS  Transport Layer Security; protects traffic and authenticates servers.
certificate  binds an identity to a public key, signed by a CA.
AEAD cipher  authenticated encryption suite (e.g. AES-GCM,
        ChaCha20-Poly1305).
ZTNA  zero-trust network access; per-application, continuously verified
        access.
```

### Common mistakes

enabling TLS 1.0/1.1; weak ciphers (RC4/3DES); weak or expiring certificates; flat access after VPN; manual certificate tracking.

### Revision questions

​1. Which TLS versions must be disabled and why? 2. What does a certificate chain of trust establish? 3. Why is flat access after a VPN a problem?
