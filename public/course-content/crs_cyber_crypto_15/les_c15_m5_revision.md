## Revision

### Summary

Signatures prove integrity and origin (and non-repudiation with sound custody), not identity, time or safety; FIPS 186-5 is the current standard. X.509 certificates bind keys to names using SAN, basicConstraints, key usage and EKU, under a signed validity period. PKIs run from offline roots through issuing intermediates to leaves, and servers send leaf plus intermediates. Validation builds the path and checks signatures, validity, constraints, the name and revocation. The lab produced errors 20 (missing intermediate), 62 (hostname), 10 (expired) and 20 at depth 1 (untrusted root). Revocation (CRL, OCSP, stapling) is imperfect, so lifetimes are shrinking. CT logs and CAA records expose and restrict issuance. Private PKIs need HSM-protected keys, automation, profiles, inventory and compromise plans. DigiNotar (2011) showed the impact of a compromised CA.

### Important concepts

trust anchors; full chains; never disable verification.

### Key technical takeaways

openssl req/x509/verify; -untrusted vs -CAfile; -verify_hostname, -attime.

### Glossary

| Term | Meaning |
|---|---|
| CAA | DNS record restricting which CAs may issue. |
| CRL/OCSP | Revocation list / online status protocol. |
| CSR | Certificate signing request. |
| CT | Certificate Transparency. |
| EKU | Extended key usage. |
| SAN | Subject alternative name. |
| Trust store | Set of trusted root certificates. |

### Common mistakes

missing intermediates; verify=False; shared wildcard keys.

### Revision questions

​1. List seven validation checks. 2. Explain depth in OpenSSL errors. 3. Why keep roots offline?
