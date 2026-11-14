## Revision

### Summary

Endpoint telemetry (Security logs, Sysmon, PowerShell, EDR, auditd) shows processes, parents, command lines and changes; network telemetry (firewall, proxy, DNS, flow, IDS, packets) shows communications and metadata even when encrypted; identity and cloud telemetry (IdP, MFA, VPN, cloud audit) is vital because attackers use valid accounts. Key fields and identifiers enable correlation; field meanings vary by source. Timestamps must be UTC with offsets (IST is +05:30; naive and aware times cannot be compared); clocks need NTP. Pipelines collect, transport securely, normalise, store and retain (180 days for CERT-In covered entities) with health monitoring - Equifax's expired certificate showed the cost of blind spots. The dataset timeline for divya/WS-104 begins to reveal the intrusion.

### Important concepts

visibility; UTC; source health; field semantics.

### Key technical takeaways

SQL GROUP BY for outliers; per-entity timelines; datetime.astimezone(timezone.utc).

### Glossary

| Term | Meaning |
|---|---|
| ECS/OCSF | Normalised event schemas. |
| Flow record | Summary of a network conversation. |
| Telemetry | Data systems emit about activity. |
| UTC | Coordinated Universal Time. |
| WEF | Windows Event Forwarding. |

### Common mistakes

dropping identity logs; local times; ignoring silent sources.

### Revision questions

​1. Which source shows parent processes? 2. Design a pipeline health check. 3. Convert 14:05 IST to UTC.
