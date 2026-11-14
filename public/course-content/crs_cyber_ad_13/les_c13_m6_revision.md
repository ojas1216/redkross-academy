## Revision

### Summary

Monitoring catches the activity hardening cannot remove. Windows identity telemetry centres on Security event IDs: 4624 logon success, 4625/4771 failures, 4768/4769 Kerberos ticket requests, 4672 admin logons, 4720/4728/4732 account and group changes, 4740 lockout, 1102 log cleared. The lab's Samba JSON stream mirrors this - eventId 4624, logonType, status, remoteAddress and passwordType - so real detection is possible without Windows. Auditing must be enabled on DCs for high-value categories and the events forwarded off-host, because attackers clear local logs (T1070.001). Three control-aligned detections - failed-logon bursts, weak encryption types, and privileged-logon sources - were computed by auth_monitor.py from 51 real events: all AES256 (healthy), Tier 0 logons surfaced for confirmation, and the asha burst appearing when the threshold was tuned from 5 to 4. Investigate alerts by scope-baseline-corroborate-decide-record, and tune by baseline-driven thresholds and explicit allow-lists, never by weakening rules globally.

### Important concepts

Security event IDs; logon types; JSON audit mapping; audit policy and forwarding; the three detections; investigation flow; tuning.

### Key technical takeaways

enable and forward audit events; align detections to controls; tune from your own baseline; absence of telemetry is a signal.

### Glossary

```text
4624/4769  logon-success / service-ticket-request event IDs.
ITDR  identity threat detection and response.
logon type  code for how a logon occurred (2 interactive, 3 network, 10
      RDP).
passwordType  the Kerberos encryption type recorded for an event.
tuning  adjusting thresholds and allow-lists to balance signal and noise.
```

### Common mistakes

auditing everything (noise) or nothing; keeping logs only on the DC; alerting on raw counts without a baseline; suppressing rules globally to silence one benign case.

### Revision questions

​1. Which event IDs show logon success, failure and service-ticket requests? 2. Why forward events off the DC? 3. Name the three lab detections and the control each maps to.
