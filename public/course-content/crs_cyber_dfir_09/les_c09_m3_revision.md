## Revision

### Summary

MBR and GPT describe partitions, and gaps between them can hide data. FAT marks deleted entries with 0xE5 and frees clusters, leaving content. In the lab, TSK listed the deleted customers.csv as "_USTOM~1.CSV" and icat recovered it. FAT stores local time, access dates only and 2-second write times. NTFS keeps everything in the MFT, with SI and FN timestamps, ADS, the USN journal and $LogFile. ext4 uses inodes, extents and a journal with UTC nanosecond times. Kernel deletion typically clears extents, while our debugfs deletion did not, a reminder to validate test methods. Recovery uses metadata, carving and slack, and is limited by fragmentation, TRIM, wiping and encryption. MACB timelines (fls -m and mactime) order events but need time-zone and manipulation awareness. The Casey Anthony tool discrepancy shows the need to validate.

### Important concepts

deletion is not erasure; timestamps need context; validate tools.

### Key technical takeaways

fls -r/-d, istat, icat, mactime -z; image hashes unchanged by analysis.

### Glossary

| Term | Meaning |
|---|---|
| ADS | Alternate data stream (NTFS). |
| Carving | Recovering files by signature without metadata. |
| Extent | ext4 mapping of contiguous blocks. |
| MACB | Modified, accessed, changed, born timestamps. |
| MFT | NTFS Master File Table. |
| Slack | Unused space at the end of a file's last cluster. |
| TRIM | SSD command informing the drive of freed blocks. |
| USN journal | NTFS change journal. |

### Common mistakes

ignoring FAT local time; trusting one tool; claiming ext4 recovery is routine.

### Revision questions

​1. Describe FAT deletion. 2. Compare SI and FN timestamps. 3. Explain why the lab's ext4 result is not representative.
