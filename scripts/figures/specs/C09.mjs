export default {
  'C09-M03-F2': {
    "type": "compare",
    "columns": [
      {
        "title": "BEFORE deletion",
        "tone": "blue",
        "items": [
          "Dir entry: \"CUSTOM~1CSV\", size 36, first cluster N",
          "FAT[N] = EOF",
          "Data cluster N: \"export of customer list…\""
        ]
      },
      {
        "title": "AFTER deletion",
        "tone": "orange",
        "items": [
          "Dir entry: 0xE5 \"USTOM~1CSV\" (first byte overwritten)",
          "FAT[N] = 0 (marked free)",
          "Data cluster N: \"export of customer list…\" is STILL THERE"
        ]
      }
    ],
    "note": "Deletion only marks the entry and clusters as free; the data remains until it is overwritten, which is why it can be recovered."
  },
  'C09-M01-F1': {
    type: 'flow',
    steps: [
      { label: 'Collection', details: ['acquire, hash, label'], tone: 'blue' },
      { label: 'Examination', details: ['parse, extract, filter'], tone: 'violet' },
      { label: 'Analysis', details: ['correlate, answer the questions'], tone: 'orange' },
      { label: 'Reporting', details: ['findings, methods, limitations'], tone: 'dark' },
    ],
    loop: { label: 'new questions / sources' },
    note: 'The process starts from the questions to answer and the authority to examine.',
  },
  'C09-M01-F2': {
    type: 'layers',
    layers: [
      { label: 'Registers, cache', sub: 'MOST VOLATILE', tone: 'red' },
      { label: 'Routing table, ARP cache, process table, kernel statistics, memory', tone: 'orange' },
      { label: 'Temporary file systems', tone: 'violet' },
      { label: 'Disk', tone: 'blue' },
      { label: 'Remote logging and monitoring data', tone: 'slate' },
      { label: 'Physical configuration, network topology', tone: 'green' },
      { label: 'Archival media', sub: 'LEAST VOLATILE', tone: 'green' },
    ],
    note: 'Collect from the top down: the most volatile evidence disappears first (RFC 3227).',
  },
  'C09-M01-F3': {
    type: 'flow',
    dir: 'TB',
    steps: [
      { label: 'Device / system', tone: 'slate' },
      { label: 'Verified image or export', sub: 'hashed', tone: 'blue', side: 'custody record + method notes' },
      { label: 'Analysis', tone: 'violet' },
      { label: 'BSA s.63 certificate', sub: 'Schedule form (s.65B case law: the certificate is a condition precedent, Khotkar 2020)', tone: 'orange' },
      { label: 'Court / tribunal', tone: 'dark' },
    ],
  },
  'C09-M02-F1': {
    type: 'graph',
    dir: 'LR',
    fixedDir: true,
    nodes: [
      { id: 's', label: 'Suspect disk', tone: 'red' },
      { id: 'w', label: 'WRITE BLOCKER', sub: 'reads pass, writes refused', tone: 'dark' },
      { id: 'f', label: 'Forensic workstation', tone: 'blue' },
      { id: 'i', label: 'Image file', sub: 'on a wiped evidence drive + SHA-256 + log', tone: 'green' },
    ],
    edges: [{ from: 's', to: 'w', label: 'SATA / USB' }, { from: 'w', to: 'f', label: 'USB' }, { from: 'f', to: 'i', label: 'imager' }],
  },
  'C09-M02-F2': {
    type: 'graph',
    dir: 'LR',
    fixedDir: true,
    nodes: [
      { id: 's', label: 'Source', tone: 'slate' },
      { id: 'b', label: 'Byte stream', sub: 'dd | tee', tone: 'blue' },
      { id: 'e', label: 'evidence.dd', sub: 're-hash later: e3a7…f21', tone: 'orange' },
      { id: 'h', label: 'sha256sum', sub: 'e3a7…f21', tone: 'violet' },
    ],
    edges: [{ from: 's', to: 'b' }, { from: 'b', to: 'e' }, { from: 'b', to: 'h' }],
    note: 'One pass writes the image and hashes the same bytes; the two hashes must match.',
  },
  'C09-M02-F3': {
    type: 'graph',
    dir: 'LR',
    fixedDir: true,
    nodes: [
      { id: 's', label: 'Source', tone: 'slate' },
      { id: 'm', label: 'MASTER copy', sub: 'golden, sealed storage, verified', tone: 'dark' },
      { id: 'w1', label: 'Working copy 1', sub: 'analysis', tone: 'blue' },
      { id: 'w2', label: 'Working copy 2', sub: 'second examiner', tone: 'violet' },
    ],
    edges: [{ from: 's', to: 'm', label: 'acquire' }, { from: 'm', to: 'w1', label: 'copy + verify' }, { from: 'm', to: 'w2', label: 'copy + verify' }],
    note: 'Any change to a working copy produces a new hash and is documented; the master stays untouched.',
  },
  'C09-M03-F1': {
    type: 'segments',
    segments: [
      { label: 'Protective MBR', top: 'LBA 0', w: 1.1, tone: 'slate' },
      { label: 'GPT header', top: 'LBA 1', w: 1.1, tone: 'blue' },
      { label: 'Partition entries', sub: '128 entries', top: 'LBA 2–33', w: 1.4, tone: 'violet' },
      { label: 'P1', w: 1.4, tone: 'orange' },
      { label: 'P2', w: 1.4, tone: 'orange' },
      { label: 'Gaps?', sub: 'unallocated', w: 0.9, tone: 'red' },
      { label: 'Backup entries + backup header', top: 'end-33 … end', w: 1.6, tone: 'green' },
    ],
    note: 'Check the gaps between partitions and compare the primary and backup GPT structures.',
  },
  'C09-M03-F3': {
    type: 'table',
    columns: ['Layer', 'Sleuth Kit tools'],
    rows: [
      ['Volume', 'mmls'],
      ['File system', 'fsstat'],
      ['File name', 'fls (* marks deleted entries)'],
      ['Metadata', 'istat, icat, ils'],
      ['Data unit', 'blkcat, blkls'],
      ['Timeline', 'fls -m → mactime'],
    ],
  },
  'C09-M04-F1': {
    type: 'graph',
    dir: 'TB',
    nodes: [
      { id: 'r', label: 'System running?', kind: 'decision' },
      { id: 'off', label: 'Check the disk image', sub: 'hiberfil.sys / pagefile / crash dumps', tone: 'slate' },
      { id: 'vm', label: 'Virtual machine?', kind: 'decision' },
      { id: 'snap', label: 'Hypervisor snapshot / suspend', sub: '.vmem → hash', tone: 'blue' },
      { id: 'tool', label: 'Approved tool from external media', sub: 'WinPmem / DumpIt / LiME / AVML', tone: 'orange' },
      { id: 'out', label: 'Output to external / network storage', sub: 'hash it, record the footprint', tone: 'green' },
      { id: 'next', label: 'THEN disk acquisition and containment', tone: 'dark' },
    ],
    edges: [
      { from: 'r', to: 'off', label: 'no' }, { from: 'r', to: 'vm', label: 'yes' },
      { from: 'vm', to: 'snap', label: 'yes' }, { from: 'vm', to: 'tool', label: 'no' },
      { from: 'tool', to: 'out' }, { from: 'out', to: 'next' }, { from: 'snap', to: 'next' },
    ],
  },
  'C09-M04-F2': {
    type: 'flow',
    dir: 'TB',
    steps: [
      { label: '/proc/net/tcp', sub: '0100007F:20FB · state 0A (LISTEN) · inode 321697', tone: 'slate', side: 'decodes to 127.0.0.1:8443' },
      { label: '/proc/7/fd/N → socket:[321697]', sub: 'same inode', tone: 'blue' },
      { label: 'PID 7: python3 -m http.server 8443', tone: 'dark' },
    ],
    note: 'Match the socket inode to a process file descriptor to tie a listening port to its process.',
  },
  'C09-M04-F3': {
    type: 'compare',
    vs: true,
    columns: [
      { title: 'Genuine [kworker]', tone: 'green', items: ['PPID 2 (kthreadd)', 'No exe link', 'No command line'] },
      { title: 'Suspicious "kworker" (PID 8)', tone: 'red', items: ['PPID 1', 'exe = /tmp/kworker', 'cmd = /tmp/kworker 600', 'exe → (deleted)'] },
    ],
  },
  'C09-M05-F1': {
    type: 'graph',
    dir: 'LR',
    fixedDir: true,
    nodes: [
      { id: 'l', label: '4624 logon', sub: 'type 10, IP, LogonId 0x5A1F', tone: 'dark' },
      { id: 'p', label: '4672 same LogonId', sub: 'privileged session', tone: 'red' },
      { id: 'pr', label: '4688 / Sysmon 1', sub: 'SubjectLogonId 0x5A1F: processes run', tone: 'blue' },
      { id: 'ps', label: '4698 / 7045 in the window', sub: 'persistence created?', tone: 'orange' },
      { id: 'e', label: '4634 same LogonId', sub: 'session end', tone: 'slate' },
    ],
    edges: [{ from: 'l', to: 'p' }, { from: 'l', to: 'pr' }, { from: 'l', to: 'ps' }, { from: 'l', to: 'e' }],
    note: 'The LogonId ties every event in the session together.',
  },
  'C09-M05-F2': {
    type: 'layers',
    layers: [
      { label: 'Stronger: Sysmon 1 / 4688 (if enabled), Prefetch, BAM, UserAssist', tone: 'green' },
      { label: 'Amcache', sub: 'presence; often execution', tone: 'blue' },
      { label: 'Weaker: ShimCache', sub: 'Windows 10+: presence, not proof of execution', tone: 'orange' },
    ],
    note: 'Combine at least two independent sources for a confident "program X ran" finding.',
  },
  'C09-M05-F3': {
    type: 'graph',
    dir: 'LR',
    nodes: [
      { id: 'u', label: 'USBSTOR', sub: 'vendor / product / serial', tone: 'blue' },
      { id: 's', label: 'setupapi.dev.log', sub: 'first install', tone: 'slate' },
      { id: 'm', label: 'MountedDevices', sub: 'drive letter E:', tone: 'violet' },
      { id: 'sb', label: 'ShellBags', sub: 'E:\\Designs browsed', tone: 'orange' },
      { id: 'l', label: 'LNK files', sub: 'volume serial = USB volume → files opened from the device', tone: 'dark' },
    ],
    edges: [{ from: 'u', to: 'm' }, { from: 'u', to: 's' }, { from: 'm', to: 'sb' }, { from: 's', to: 'l' }, { from: 'sb', to: 'l' }],
  },
  'C09-M06-F1': {
    type: 'graph',
    dir: 'LR',
    fixedDir: true,
    nodes: [
      { id: 'c', label: 'client 172.31.0.20', sub: 'curl', tone: 'blue' },
      { id: 'w', label: 'rk9-web 172.31.0.10:80', sub: 'python -m http.server; rk9-cap shares its namespace: tcpdump -w c09.pcap port 80', tone: 'orange' },
      { id: 'p', label: 'rk_c09_lab.pcap', sub: 'docker cp', tone: 'violet' },
      { id: 't', label: 'tshark (separate container)', sub: 'objects + hashes', tone: 'green' },
    ],
    edges: [{ from: 'c', to: 'w', label: 'HTTP' }, { from: 'w', to: 'p' }, { from: 'p', to: 't' }],
    note: 'Docker bridge rk-c09-net 172.31.0.0/24, with no external routing used.',
  },
  'C09-M06-F2': {
    type: 'table',
    columns: ['Item', 'SHA-256'],
    rowTones: ['green', 'green', 'slate'],
    rows: [
      ['Server file customers.csv', '04e8f300…a226ec'],
      ['customers.csv exported from the pcap (export-objects http)', '04e8f300…a226ec (equal: the same file crossed the network)'],
      ['The pcap file itself', '6e2cf6fe…528a21 (integrity of the capture)'],
    ],
  },
  'C09-M06-F3': {
    type: 'table',
    columns: ['Time (UTC)', 'Source', 'Event'],
    rowTones: ['blue', 'orange', 'red', 'violet', 'slate'],
    rows: [
      ['05:49:12', 'auth.log', 'SSH key login: deploy from 172.31.0.20'],
      ['05:50:03', 'auth.log', 'sudo cp customers.csv → /srv/backup (staging)'],
      ['05:51:40', 'access log + pcap', 'GET /backup/customers.csv 200 (hash matches)'],
      ['05:51:40', 'access log + pcap', 'GET /backup/missing.zip 404 (probe)'],
      ['05:52:30', 'auth.log', 'SSH disconnect'],
    ],
  },
  'C09-M07-F1': {
    type: 'flow',
    steps: [
      { label: 'Preparation', sub: 'plan, playbooks, tools, backups', details: ['CSF: Govern / Identify / Protect'], tone: 'blue' },
      { label: 'Detection & analysis', sub: 'scoping', details: ['CSF: Detect'], tone: 'violet' },
      { label: 'Containment, eradication', details: ['CSF: Respond'], tone: 'orange' },
      { label: 'Recovery', details: ['CSF: Recover'], tone: 'green' },
    ],
    loop: { label: 'lessons learned feed back into preparation' },
  },
  'C09-M07-F2': {
    type: 'cycle',
    center: 'Iterative scoping',
    steps: [
      { label: 'Known hosts', sub: 'start from the first host' },
      { label: 'Extract indicators', sub: 'hash, IP, domain, account, persistence' },
      { label: 'Sweep the estate', sub: 'EDR, SIEM, hunts' },
      { label: 'New hosts found', sub: 'add them and repeat' },
    ],
    note: 'Repeat until a sweep finds nothing new, and record the coverage of each sweep.',
  },
  'C09-M07-F3': {
    type: 'graph',
    dir: 'TB',
    nodes: [
      { id: 'a', label: 'Active damage?', sub: 'encryption, exfiltration, safety', kind: 'decision' },
      { id: 'now', label: 'Contain NOW', tone: 'red' },
      { id: 's', label: 'Scoping complete?', kind: 'decision' },
      { id: 'co', label: 'Coordinated containment', sub: 'all footholds at once', tone: 'green' },
      { id: 'r', label: 'Risk of waiting acceptable?', sub: 'lead + legal decide and record it', kind: 'decision' },
      { id: 'obs', label: 'Short observation', sub: 'preserve evidence', tone: 'blue' },
      { id: 'c2', label: 'Contain now', sub: 'continue scoping', tone: 'orange' },
    ],
    edges: [
      { from: 'a', to: 'now', label: 'yes' }, { from: 'a', to: 's', label: 'no' },
      { from: 's', to: 'co', label: 'yes' }, { from: 's', to: 'r', label: 'no' },
      { from: 'r', to: 'obs', label: 'yes' }, { from: 'r', to: 'c2', label: 'no' },
    ],
  },
  'C09-M08-F1': {
    type: 'flow',
    dir: 'TB',
    steps: [
      { label: 'Questions & authority', tone: 'slate' },
      { label: 'Evidence', sub: 'IDs, hashes', tone: 'blue' },
      { label: 'Methods & tools', tone: 'violet' },
      { label: 'Timeline', tone: 'orange' },
      { label: 'Findings → limitations → conclusions', tone: 'dark' },
      { label: 'Appendices', sub: 'evidence table, commands, outputs, glossary, CV', tone: 'green' },
    ],
  },
  'C09-M08-F2': {
    type: 'layers',
    layers: [
      { label: '"is shown by"', sub: 'strongest: direct, reliable, corroborated', tone: 'green' },
      { label: '"is consistent with"', sub: 'fits the evidence; alternatives remain', tone: 'blue' },
      { label: '"suggests"', sub: 'limited or single-source support', tone: 'orange' },
      { label: '"cannot determine"', sub: 'weakest: insufficient evidence', tone: 'red' },
    ],
  },
  'C09-M08-F3': {
    type: 'flow',
    dir: 'TB',
    steps: [
      { label: 'OBSERVATIONS', sub: 'HTTP 200 for /backup/customers.csv to 172.31.0.20 (E1) + carved file SHA-256 = server file SHA-256 (E1, E2)', tone: 'blue' },
      { label: 'FINDING ("is shown by")', sub: 'customers.csv was transferred to 172.31.0.20 at 05:51:40Z', tone: 'green' },
      { label: 'LIMIT ("cannot determine")', sub: 'who controlled the deploy account?', tone: 'red' },
    ],
  },
};
