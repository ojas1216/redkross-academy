## Revision

### Summary

Linux evidence includes auth.log or secure, the systemd journal, wtmp, btmp and lastlog, application logs and auditd. Syslog lacks year and zone, so record timedatectl output. User artefacts include shell history (weak), SSH keys and staging directories; persistence hides in cron, systemd units, start-up files, authorized_keys, accounts, sudoers and ld.so.preload, and dpkg -V or rpm -Va detects replaced files. Packet captures give the fullest network evidence: in the tested lab, tshark showed the GET, user agents and responses, export-objects carved customers.csv with a hash matching the server copy, and "missing.zip" proved to be a 404 page. Flows show volume and timing only; TLS hides content but not metadata. A UTC super-timeline merged synthetic host logs with real capture times into a staging-and-download story, with care for precision and time zones. The xz backdoor was discovered from half a second of SSH latency.

### Important concepts

hash carved files; verify object types; normalise time.

### Key technical takeaways

tshark -T fields and --export-objects; journalctl --utc; timeline merging in Python.

### Glossary

| Term | Meaning |
|---|---|
| auditd | Linux audit daemon. |
| btmp/wtmp | Failed and successful login records. |
| Export objects | Reconstructing files from captured protocols. |
| Flow record | Summary of a network conversation. |
| SNI | Server Name Indication in the TLS handshake. |
| Super-timeline | Merged timeline across sources. |

### Common mistakes

trusting user agents; reporting exported objects unchecked; mixing time zones.

### Revision questions

​1. List six Linux persistence locations. 2. How do you prove a carved file matches? 3. What does TLS leave visible?
