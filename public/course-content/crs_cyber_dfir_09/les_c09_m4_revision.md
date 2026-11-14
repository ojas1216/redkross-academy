## Revision

### Summary

RAM holds processes, code, connections, handles, caches and secrets, so memory images are sensitive. Acquisition uses software tools, hypervisor snapshots or fallbacks, written externally, hashed and documented for footprint and smear, and done before disk acquisition and disruptive containment. Process indicators include path and parent anomalies, kernel thread masquerading, deleted-but-running binaries, injected memory and hidden processes. The tested live lab showed a "kworker" with parent PID 1, an executable in /tmp and a deleted binary. It also decoded 0100007F:20FB to 127.0.0.1:8443 and linked that socket to PID 7 via inode 321697. Volatility 3 rebuilds these structures from images using symbol tables; compare pslist with psscan. Memory timelines join disk and log timelines. AA24-060B showed integrity tools being deceived, with memory and disk forensics used in the analysis.

### Important concepts

capture before reboot; corroborate indicators; record footprint.

### Key technical takeaways

/proc parsing; little-endian IP decoding; pslist vs psscan.

### Glossary

```text
EPROCESS      Windows kernel process structure.
LSASS         Windows process holding credential material.
Live response Collection of volatile data from a running system.
Malfind       Plugin finding suspicious memory regions.
Smear         Inconsistency from memory changing during capture.
Symbol table  Description of OS structures for analysis.
```

### Common mistakes

rebooting first; writing images to the suspect disk; trusting on-host binaries.

### Revision questions

​1. List five process indicators. 2. Decode 0100007F:1F90. 3. Why compare pslist and psscan?
