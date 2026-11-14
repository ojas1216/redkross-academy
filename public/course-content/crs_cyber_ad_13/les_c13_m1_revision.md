## Revision

### Summary

Active Directory is a replicated directory service built on LDAP (reads), Kerberos (authentication) and DNS (locating DCs). Objects are named by distinguished names and identified by GUIDs and SIDs. Domains group into trees and trees into a forest; the forest - sharing schema, configuration, global catalogue and automatic transitive trusts - is the security boundary, so true isolation needs a separate forest. The schema is forest-wide and hard to reverse. Domain controllers mostly work multi-master, except the five FSMO roles; RODCs hold read-only copies and cache no passwords by default. DNS is essential: clients find DCs through SRV records, and the lab showed Group Policy tooling failing until the resolver pointed at the domain's DNS. The lab DC described itself through samba-tool domain info.

### Important concepts

directory service; DN, GUID, SID; domain/tree/forest; schema and partitions; global catalogue; FSMO; RODC; SRV records.

### Key technical takeaways

build and verify a DC with its own tools; always suspect DNS first; draw isolation and recovery at the forest.

### Glossary

| Term | Meaning |
|---|---|
| DC | Domain controller (a server holding a directory copy). |
| FSMO | Flexible single master operation (five special DC roles). |
| GC | Global catalogue (forest-wide partial copy for searches). |
| RODC | Read-only domain controller. |
| SID | Security identifier used in access checks. |

### Common mistakes

treating a domain as an isolation boundary; ignoring DNS; putting a writable DC in an insecure location; confusing "DC" the domain component with "DC" the domain controller.

### Revision questions

​1. Why is the forest the security boundary? 2. Name the five FSMO roles. 3. How does a client find a DC, and what breaks if DNS is wrong?
