## Revision

### Summary

Attackers move along paths with findable preconditions. Pass-the-hash and pass-the-ticket reuse harvested credentials; containment (tiering, Protected Users, LAPS, short TGTs) is the defence. Kerberoasting (T1558.003) needs an SPN on a weakly-protected account, and AS-REP roasting (T1558.004) needs pre-authentication disabled; both are offline cracking attacks beaten by long random secrets/gMSAs, AES, and removing the precondition. Golden (T1558.001) and silver (T1558.002) tickets forge TGTs or service tickets from stolen krbtgt or service keys; krbtgt is the crown jewel and its compromise means double-rotation and forest-level recovery. Unconstrained delegation off a DC is high risk; use constrained or RBCD and protect admins from delegation. The lab's dir_review.py found five preconditions - including legacy-svc with three at once - and returned exit code 1 on the HIGH finding, while suppressing expected conditions (DC delegation, krbtgt SPN) to keep real findings visible. Posture (dir_review.py) and telemetry (auth_monitor.py, Module 6) together cover preconditions and activity.

### Important concepts

credential exposure; pass-the-hash/ticket; Kerberoasting; AS-REP roasting; golden/silver tickets; delegation; hygiene review.

### Key technical takeaways

find and remove preconditions; long random secrets/gMSAs and AES; constrained delegation; protect and rotate krbtgt; gate changes on HIGH findings.

### Glossary

| Term | Meaning |
|---|---|
| AS-REP roasting | cracking accounts with pre-auth disabled (T1558.004). |
| Kerberoasting | cracking SPN accounts' service tickets offline (T1558.003). |
| RBCD | resource-based constrained delegation. |
| golden ticket | a forged TGT from the stolen krbtgt key (T1558.001). |
| UAC | userAccountControl flags encoding account options. |

### Common mistakes

SPNs on privileged user accounts; disabling pre-auth; unconstrained delegation off DCs; treating golden tickets as "detect and move on"; reviewing once and never again.

### Revision questions

​1. State the precondition and fix for Kerberoasting. 2. Why is krbtgt the crown jewel? 3. Why is unconstrained delegation off a DC dangerous?
