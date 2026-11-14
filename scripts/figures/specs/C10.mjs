export default {
  'C10-M03-F3': {
    "type": "table",
    "columns": [
      "DLL",
      "Imported functions",
      "Capability"
    ],
    "rows": [
      [
        "KERNEL32",
        "CreateFile / WriteFile",
        "Files"
      ],
      [
        "KERNEL32",
        "VirtualAlloc",
        "Executable memory / unpacking"
      ],
      [
        "KERNEL32",
        "CreateMutex",
        "Infection marker (fingerprint)"
      ],
      [
        "ADVAPI32",
        "RegSetValueEx",
        "Persistence"
      ],
      [
        "WS2_32",
        "WSAStartup / connect / send",
        "Network / C2"
      ]
    ],
    "note": "Caveat: imports show CAPABILITY, not proof; packed malware hides them."
  },
  'C10-M02-F1': {
    type: 'graph',
    dir: 'LR',
    fixedDir: true,
    nodes: [
      { id: 'v', label: 'Victim VM', sub: 'clean snapshot; no shared folders or clipboard', tone: 'red' },
      { id: 'a', label: 'Analysis / "fake internet" VM', sub: 'DNS + canned responses, no egress; monitoring and capture', tone: 'blue' },
    ],
    edges: [{ from: 'v', to: 'a', label: 'host-only virtual network' }],
    note: 'Both run on a host with no production access. Detonate in the victim, observe, then REVERT the snapshot.',
  },
  'C10-M02-F2': {
    type: 'flow',
    steps: [
      { label: 'Sample bytes', tone: 'slate' },
      { label: 'SHA-256', tone: 'blue' },
      { label: 'Fixed fingerprint', sub: 'e.g. 5f51d1…af51', tone: 'green' },
    ],
    note: 'Record sha256 + md5 + sha1 + source + time + authorisation. Change one byte and every hash changes (avalanche). A hash gives identity, an IOC and integrity proof, but only catches EXACT copies.',
  },
  'C10-M02-F3': {
    type: 'flow',
    dir: 'TB',
    steps: [
      { label: 'Create a throwaway sandbox directory', side: 'the only place the simulator may write', tone: 'blue' },
      { label: 'Bind a loopback sink on 127.0.0.1', side: 'the only place it may connect', tone: 'violet' },
      { label: 'Run rksim.py in the sandbox', tone: 'orange' },
      { label: 'Capture events, then DISCARD the sandbox', side: 'detonate and revert', tone: 'dark' },
    ],
    note: 'The steps behaviour.py follows to keep the simulator contained.',
  },
  'C10-M03-F2': {
    type: 'segments',
    segments: [
      { label: 'MZ DOS header', sub: 'e_lfanew → PE', tone: 'slate' },
      { label: 'PE\\0\\0 signature', tone: 'slate' },
      { label: 'COFF header', tone: 'blue' },
      { label: 'Optional header', sub: '+ data directories → import table', tone: 'blue', w: 1.3 },
      { label: '.text', sub: 'code, X+R', tone: 'orange' },
      { label: '.rdata', sub: 'read-only', tone: 'violet' },
      { label: '.data', sub: 'read-write', tone: 'green' },
      { label: '.rsrc', sub: 'resources', tone: 'slate' },
    ],
    note: 'The import table lists DLLs and function names (capabilities). Addresses are RVAs from the image base; convert an RVA to a file offset with the section table.',
  },
  'C10-M04-F3': {
    type: 'flow',
    dir: 'TB',
    steps: [
      { label: 'Set up', sub: 'sandbox directory + loopback sink (127.0.0.1)', tone: 'blue' },
      { label: 'Run rksim.py in the sandbox', sub: 'mutex → drop file → write Run key (sandbox registry) → beacon to the sink', tone: 'orange' },
      { label: 'Capture events + sink data → summarise', tone: 'violet' },
      { label: 'DISCARD the sandbox', tone: 'dark' },
    ],
    note: 'The intended C2, 198.51.100.23:8443 (a documentation range), is only LOGGED, never contacted.',
  },
  'C10-M05-F1': {
    type: 'code',
    panels: [
      {
        title: 'Anatomy of a YARA rule',
        tone: 'orange',
        lines: [
          'rule NAME {',
          '  meta:       author / description / reference',
          '  strings:    $a = "text"',
          '              $b = { DE AD BE EF }',
          '              $c = "wide" wide',
          '  condition:  all of them | any of them | N of them',
          '}',
        ],
        highlight: ['meta:', 'strings:', 'condition:'],
      },
    ],
    note: 'A rule matches a file when the condition is true over the strings found. meta is documentation only.',
  },
  'C10-M05-F2': {
    type: 'compare',
    columns: [
      { title: 'Target samples: MUST match', tone: 'green', items: ['True positives', 'Catches the target and its variants'] },
      { title: 'Clean-file corpus: MUST NOT match', tone: 'red', items: ['False positives', 'Tighten the rule until there are zero benign matches'] },
    ],
    note: 'In the lab, 3 rules match the specimen and 0 match clean_sample.txt.',
  },
  'C10-M05-F3': {
    type: 'layers',
    pyramid: true,
    layers: [
      { label: 'TTPs / behaviours', sub: 'hardest to change: most durable', tone: 'dark' },
      { label: 'Tools', tone: 'red' },
      { label: 'Network / host artefacts', sub: 'mutex, path, User-Agent', tone: 'orange' },
      { label: 'Domain names', tone: 'violet' },
      { label: 'IP addresses', tone: 'blue' },
      { label: 'Hash values', sub: 'trivial to change: least durable', tone: 'slate' },
    ],
    note: 'Invest detection effort upward: the higher the layer, the more durable the detection.',
  },
  'C10-M06-F1': {
    type: 'table',
    columns: ['Concept', 'PE (Windows)', 'ELF (Linux)'],
    rows: [
      ['Magic', 'MZ … PE\\0\\0', '7F 45 4C 46 (\\x7fELF)'],
      ['Entry point', 'AddressOfEntryPoint', 'e_entry'],
      ['Code region', '.text section', 'PT_LOAD segment (R+X)'],
      ['Addresses', 'RVA from the image base', 'Virtual address'],
      ['Imports', 'Import table (by DLL)', 'Dynamic symbols'],
    ],
  },
  'C10-M06-F2': {
    type: 'table',
    columns: ['Register', 'Role'],
    rows: [
      ['rax', 'Return value / syscall number'],
      ['rdi, rsi, rdx, rcx, r8, r9', 'Function arguments (System V); Windows x64 uses rcx, rdx, r8, r9'],
      ['rsp', 'Stack pointer'],
      ['rbp', 'Frame pointer'],
      ['rip', 'Next instruction (not directly writable)'],
      ['rflags', 'Zero / sign / carry / overflow flags'],
    ],
  },
  'C10-M06-F3': {
    type: 'flow',
    steps: [
      { label: 'Sequence', tone: 'slate' },
      { label: 'Branch', sub: 'jz / jnz after cmp', tone: 'blue' },
      { label: 'Loop', sub: 'backward jmp', tone: 'violet' },
      { label: 'call / ret', tone: 'orange' },
    ],
    note: 'Group instructions into BASIC BLOCKS to build the control-flow graph (CFG). The ELF stub is a straight line: mov edi,0 ; mov eax,60 ; syscall = exit(0).',
  },
  'C10-M07-F1': {
    type: 'graph',
    dir: 'LR',
    fixedDir: true,
    nodes: [
      { id: 'b', label: 'Bytes', tone: 'slate' },
      { id: 'd', label: 'DISASSEMBLY', sub: 'assembly: exact, verbose', tone: 'blue' },
      { id: 'c', label: 'DECOMPILATION', sub: 'C-like pseudocode: readable, approximate', tone: 'orange' },
    ],
    edges: [{ from: 'b', to: 'd' }, { from: 'b', to: 'c' }],
    note: 'Use the decompiler for the overview; check the disassembly for subtle or obfuscated code.',
  },
  'C10-M07-F2': {
    type: 'flow',
    dir: 'TB',
    steps: [
      { label: 'Import', tone: 'slate' },
      { label: 'Auto-analyse', sub: 'disassembly + functions + CFG + decompile', tone: 'blue' },
      { label: 'Orient', sub: 'entry point + imports', tone: 'violet' },
      { label: 'Find functions calling interesting APIs', sub: 'network / crypto / process / registry', tone: 'orange' },
      { label: 'Read, rename, comment', sub: 'build a map', tone: 'green' },
      { label: 'Follow the logic', sub: 'decrypt config, trigger, C2', tone: 'red' },
      { label: 'Extract', sub: 'keys, config, C2, algorithm', tone: 'dark' },
    ],
  },
  'C10-M08-F1': {
    type: 'layers',
    layers: [
      { label: '1  Subject + provenance', sub: 'file, hashes, source', tone: 'slate' },
      { label: '2  Classification', sub: 'verdict + CONFIDENCE + LIMITATIONS: lead with this', tone: 'dark' },
      { label: '3  Static findings   ·   4  Dynamic findings', tone: 'blue' },
      { label: '5  IOCs   ·   6  Detection coverage (validated)   ·   7  Defensive recommendations', tone: 'orange' },
      { label: '8  Handling / limitations statement', tone: 'green' },
    ],
    note: 'Every claim must trace back to evidence.',
  },
  'C10-M08-F2': {
    type: 'rows',
    rows: [
      { label: 'Classification', tone: 'blue', items: ['What it is and does, e.g. a dropper that persists and beacons'] },
      { label: 'Confidence', tone: 'violet', items: ['High / medium / low + WHY (corroboration, reproduced behaviour)'] },
      { label: 'Limitations', tone: 'orange', items: ['What you could NOT determine: packed sections, untriggered paths, a single run, time'] },
    ],
    note: 'Stating limitations is a strength, not a weakness. Never overstate certainty.',
  },
};
