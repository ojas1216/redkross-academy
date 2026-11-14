## Revision

### Summary

Acquisition may be physical, logical, targeted, live or dead. Encryption and availability shape the choice. Raw images are universal; E01 and AFF4 add metadata and checksums. Write blockers pass reads and block writes, and attaching or even read-only mounting a journalled file system can change it. CFTT tests write blockers and imagers against published specifications. SHA-256 is the default integrity hash, while MD5 and SHA-1 are for legacy compatibility only. In the tested lab, the source, stream and image hashes matched, and a single changed byte produced a completely different digest. noerror,sync with large blocks can zero large areas on failing media. Custody covers seals, transfers, verification on arrival, a sealed master and verified working copies. VMs, cloud volumes, SaaS exports and containers need provider-specific acquisition, with the audit logs forming part of custody.

### Important concepts

verify every copy; never analyse the master; document method and footprint.

### Key technical takeaways

dd | tee | sha256sum; cmp; block size and error handling.

### Glossary

| Term | Meaning |
|---|---|
| AFF4 | Advanced Forensic Format 4. |
| CFTT | NIST Computer Forensics Tool Testing. |
| E01 | Expert Witness Format image. |
| Golden master | Sealed verified copy never used for analysis. |
| Live acquisition | Collection from a running system. |
| Write blocker | Device or software preventing writes to evidence. |

### Common mistakes

wrong device; mounting evidence; MD5-only integrity.

### Revision questions

​1. Compare raw and E01. 2. Explain the one-pass pipeline. 3. Why verify on arrival after a transfer?
