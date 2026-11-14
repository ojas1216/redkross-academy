## Revision

### Summary

Endpoint telemetry comes from Windows Security events (4688 with command lines only if a separate policy is enabled), Sysmon (Event ID 1 with ProcessGuid, 3, 11, 12-14, 22, 255; UTC; no analysis, no hiding) and EDR agents. Process trees rebuilt from GUIDs reveal behaviour such as Office -> shell -> discovery -> persistence -> archive on WS-07. Identity telemetry (4624 logon types, 4625 failures, 4698 task creation) shows svc-print guessed and reused from WS-07 against FS-01. Joining both by host, address, user and time produces the incident narrative. Response controls range from triage collection to reimaging and must preserve evidence and contain identities. Sensor health monitoring and central collection defeat log clearing (T1685.005). Volt Typhoon (AA24-038A) shows why lineage and baselines matter against living-off-the-land activity.

### Important concepts

lineage; logon types; evidence-first containment; silence as a signal.

### Key technical takeaways

join on ProcessGuid; keep sensor configuration in version control; monitor 1102, 4719 and Sysmon 4/255.

### Glossary

| Term | Meaning |
|---|---|
| EDR | Endpoint detection and response. |
| LOTL | Living off the land: abusing built-in tools. |
| ProcessGuid | Sysmon's unique process identifier. |
| Sysmon | Sysinternals System Monitor. |

### Common mistakes

trusting a single event; broad excludes; reimaging before scoping.

### Revision questions

​1. List four logon types. 2. Explain why 4688 command lines are sensitive. 3. Order five response controls by disruption.
