## Revision

### Summary

Network telemetry comes in three layers: DNS (cheap, reveals intent), flow (who-whom-bytes, no payload) and packets (content and detail, costly). DNS analytics combine volume, record type, NXDOMAIN ratio, label structure and distinct-name counts. In Tamarind's data, 10.20.1.17 made 82 random TXT queries under cdn-sync.example. Flow regularity (CV of gaps) marked the same host's 297-second check-ins (CV 0.083), but regularity is only a lead. Suricata rules are action + header + options, with sticky buffers, flow direction, unique sids and honest msgs. They are tested with -T and replay (4 alerts on the lab capture), and EVE JSON protocol records support investigation. SUNBURST shows DNS as early evidence and the value of retention. Capture lawfully and proportionately.

### Important concepts

metadata first; leads versus verdicts; tune by understanding benign behaviour.

### Key technical takeaways

CV for regularity; sticky buffers; --entrypoint sh for the Suricata image; sort multi-threaded output.

### Glossary

| Term | Meaning |
|---|---|
| CV | Coefficient of variation. |
| EVE JSON | Suricata's JSON event output. |
| IPFIX | IP Flow Information Export, a flow record standard. |
| NXDOMAIN | DNS response code: name does not exist. |
| sid | Suricata/Snort rule identifier. |

### Common mistakes

payload rules on encrypted traffic; "top N" without context; raising thresholds instead of allowlisting.

### Revision questions

​1. Name four DNS features. 2. Define CV. 3. List four Suricata good practices.
