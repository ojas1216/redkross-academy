## Revision

### Summary

Windows event logs (Security, System, PowerShell and Sysmon) record logons, processes, services, tasks, account changes and log clearing. They are circular and size-limited (20 MB in the tested machine) and need privileges to read live. Logon types follow Microsoft's table (2 interactive, 3 network, 10 RDP), and the logon ID correlates a session's events. The registry hives (SAM, SECURITY, SOFTWARE, SYSTEM, NTUSER.DAT, UsrClass.dat and Amcache) hold user, execution and device artefacts, but values can mislead: ProductName said Windows 10 on Windows 11 build 26200. Execution artefacts differ in strength, from Prefetch, BAM and UserAssist (ROT13, decoded in the lab) to ShimCache, which shows presence only on Windows 10 and later. LNK files, Jump Lists, ShellBags, USB keys and browser history reconstruct file and device activity. Findings layer sessions, execution, files, devices and persistence, always stating what the artefacts do not show. The BTK case shows metadata as a corroborated lead.

### Important concepts

corroborate artefacts; account is not the person; check retention.

### Key technical takeaways

Get-WinEvent -FilterHashtable; logon ID correlation; ROT13 decoding.

### Glossary

| Term | Meaning |
|---|---|
| Amcache | Application inventory hive. |
| BAM | Background Activity Moderator (execution times). |
| Jump List | Per-application recent items. |
| LNK | Shortcut file with target metadata. |
| Prefetch | Execution trace files on client Windows. |
| ShellBags | Registry records of folders viewed. |
| SRUM | System Resource Usage Monitor database. |
| UserAssist | ROT13-encoded record of GUI launches. |

### Common mistakes

treating ShimCache as execution proof; ignoring time zones; reporting "no events" without checking retention.

### Revision questions

​1. List eight logon types. 2. Which artefacts show USB use? 3. Why did ProductName mislead?
