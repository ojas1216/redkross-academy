## Revision

### Summary

Monitoring collects and analyses network telemetry; response contains incidents. Packet capture records full content for deep, targeted investigation but is large and privacy-heavy; flow telemetry (NetFlow/IPFIX) records conversation metadata (source, destination, ports, protocol, bytes, timing) - compact, network-wide and privacy-preserving - and is ideal for spotting patterns. Telemetry sources include routers/switches (flow), firewalls, DNS, proxies and sensors, collected centrally (into a SIEM). Flow data reveals attacks behaviourally: port scans (one source, many ports/hosts, fast), beaconing (one source to one destination at a regular interval - C2), exfiltration (large unusual outbound), and segmentation violations (forbidden boundary crossings). Network-layer containment isolates a host, blocks a flow, or cuts a segment, while preserving evidence; segmentation makes containment easier because the boundaries exist. The lab's flowcheck.py turns 186 records into five actionable signals - a 60-port scan, a 60-second beacon, and three segmentation violations - and correlation shows the scanning source and the beacon destination are the same external host, a coherent intrusion; segmentation had already denied user->db, limiting damage. Monitoring feeds the SOC and incident response and is the raw material of threat hunting.

### Important concepts

packet capture vs flow telemetry; telemetry sources and fields; behavioural detection; network containment; correlation; the path to the SOC.

### Key technical takeaways

monitor broadly with flow telemetry; detect scans/beaconing/exfiltration/violations; correlate related signals; contain at the network layer while preserving evidence; rely on segmentation to limit damage.

### Glossary

```text
flow telemetry  NetFlow/IPFIX metadata about conversations (no payload).
packet capture  full packet content (PCAP) for deep investigation.
beaconing  regular-interval contacts to a destination (C2 indicator).
containment  limiting an incident's spread (isolate host, block flow, cut
        segment).
top talkers  the busiest source hosts (monitoring context).
```

### Common mistakes

capturing full packets everywhere; ignoring flow/DNS telemetry; not correlating related signals; slow or evidence-destroying containment; no central collection/retention.

### Revision questions

​1. How do packet capture and flow telemetry differ and when use each? 2. How does beaconing appear in flow data? 3. What are three network-layer containment actions?
