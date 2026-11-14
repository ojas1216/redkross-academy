/**
 * Course 05: Ethical Hacking and Penetration Testing — Module 7 Data
 * Module ID: mod_c5_7 | 6 Lessons | 20 Embedded Representative MCQs (from 200-question bank)
 */
export const module7Data = {
  "id": "mod_c5_7",
  "title": "Module 7: Privilege Boundaries & Post-Access Review",
  "description": "Analyze operating system privilege rings and the principle of least privilege, evaluate defensive privilege escalation vectors across Linux and Windows environments, measure lateral movement blast radius across subnets, hunt adversary persistence mechanisms, execute post-test artifact cleanup, and comply with DPDP Act 2023 evidence retention.",
  "order": 7,
  "quiz": {
    "id": "quiz_mod_c5_7",
    "title": "Module 7: Privilege Boundaries & Post-Access Review Assessment",
    "pass_threshold": 80,
    "passing_score": 80,
    "duration_minutes": 20,
    "total_questions": 20,
    "token_bounty": 100,
    "questions": [
      {
        "id": "q_c5_m7_001",
        "topic": "Operating System Privilege Boundaries & Rings",
        "difficulty": "medium",
        "q": "In Operating System Privilege Boundaries & Rings, which Linux permission misconfiguration allows an unprivileged local user to execute commands with root privileges?",
        "options": [
          "A custom binary owned by root with the SUID bit set (chmod u+s) that executes an unquoted relative binary path.",
          "A text configuration file in /etc/ with permissions set to -rw-r--r-- (644).",
          "A user home directory with execute permissions granted to the file owner.",
          "A systemd service unit configured with standard Restart=always directives."
        ],
        "correct": 0,
        "explanation": "SUID binaries run with the file owner's privileges (e.g. root). If a SUID binary invokes a shell command using a relative path without sanitizing the PATH environment variable, an unprivileged user can hijack execution."
      },
      {
        "id": "q_c5_m7_002",
        "topic": "Principle of Least Privilege & Service Account Confinement",
        "difficulty": "medium",
        "q": "In Principle of Least Privilege & Service Account Confinement, which Linux permission misconfiguration allows an unprivileged local user to execute commands with root privileges?",
        "options": [
          "A custom binary owned by root with the SUID bit set (chmod u+s) that executes an unquoted relative binary path.",
          "A text configuration file in /etc/ with permissions set to -rw-r--r-- (644).",
          "A user home directory with execute permissions granted to the file owner.",
          "A systemd service unit configured with standard Restart=always directives."
        ],
        "correct": 0,
        "explanation": "SUID binaries run with the file owner's privileges (e.g. root). If a SUID binary invokes a shell command using a relative path without sanitizing the PATH environment variable, an unprivileged user can hijack execution."
      },
      {
        "id": "q_c5_m7_003",
        "topic": "Linux Privilege Escalation Vectors (SUID, Sudoers, Capabilities)",
        "difficulty": "medium",
        "q": "In Linux Privilege Escalation Vectors (SUID, Sudoers, Capabilities), which Linux permission misconfiguration allows an unprivileged local user to execute commands with root privileges?",
        "options": [
          "A custom binary owned by root with the SUID bit set (chmod u+s) that executes an unquoted relative binary path.",
          "A text configuration file in /etc/ with permissions set to -rw-r--r-- (644).",
          "A user home directory with execute permissions granted to the file owner.",
          "A systemd service unit configured with standard Restart=always directives."
        ],
        "correct": 0,
        "explanation": "SUID binaries run with the file owner's privileges (e.g. root). If a SUID binary invokes a shell command using a relative path without sanitizing the PATH environment variable, an unprivileged user can hijack execution."
      },
      {
        "id": "q_c5_m7_004",
        "topic": "Windows Privilege Escalation Vectors (Unquoted Paths, Token Impersonation)",
        "difficulty": "medium",
        "q": "In Windows Privilege Escalation Vectors (Unquoted Paths, Token Impersonation), which Linux permission misconfiguration allows an unprivileged local user to execute commands with root privileges?",
        "options": [
          "A custom binary owned by root with the SUID bit set (chmod u+s) that executes an unquoted relative binary path.",
          "A text configuration file in /etc/ with permissions set to -rw-r--r-- (644).",
          "A user home directory with execute permissions granted to the file owner.",
          "A systemd service unit configured with standard Restart=always directives."
        ],
        "correct": 0,
        "explanation": "SUID binaries run with the file owner's privileges (e.g. root). If a SUID binary invokes a shell command using a relative path without sanitizing the PATH environment variable, an unprivileged user can hijack execution."
      },
      {
        "id": "q_c5_m7_005",
        "topic": "Assessing Lateral Movement & Blast Radius Across Subnets",
        "difficulty": "medium",
        "q": "In Assessing Lateral Movement & Blast Radius Across Subnets, which Linux permission misconfiguration allows an unprivileged local user to execute commands with root privileges?",
        "options": [
          "A custom binary owned by root with the SUID bit set (chmod u+s) that executes an unquoted relative binary path.",
          "A text configuration file in /etc/ with permissions set to -rw-r--r-- (644).",
          "A user home directory with execute permissions granted to the file owner.",
          "A systemd service unit configured with standard Restart=always directives."
        ],
        "correct": 0,
        "explanation": "SUID binaries run with the file owner's privileges (e.g. root). If a SUID binary invokes a shell command using a relative path without sanitizing the PATH environment variable, an unprivileged user can hijack execution."
      },
      {
        "id": "q_c5_m7_006",
        "topic": "Adversary Persistence Mechanism Taxonomy & Autoruns",
        "difficulty": "medium",
        "q": "In Adversary Persistence Mechanism Taxonomy & Autoruns, which Linux permission misconfiguration allows an unprivileged local user to execute commands with root privileges?",
        "options": [
          "A custom binary owned by root with the SUID bit set (chmod u+s) that executes an unquoted relative binary path.",
          "A text configuration file in /etc/ with permissions set to -rw-r--r-- (644).",
          "A user home directory with execute permissions granted to the file owner.",
          "A systemd service unit configured with standard Restart=always directives."
        ],
        "correct": 0,
        "explanation": "SUID binaries run with the file owner's privileges (e.g. root). If a SUID binary invokes a shell command using a relative path without sanitizing the PATH environment variable, an unprivileged user can hijack execution."
      },
      {
        "id": "q_c5_m7_007",
        "topic": "Post-Engagement Artifact Cleanup & Verification Checklists",
        "difficulty": "medium",
        "q": "In Post-Engagement Artifact Cleanup & Verification Checklists, which Linux permission misconfiguration allows an unprivileged local user to execute commands with root privileges?",
        "options": [
          "A custom binary owned by root with the SUID bit set (chmod u+s) that executes an unquoted relative binary path.",
          "A text configuration file in /etc/ with permissions set to -rw-r--r-- (644).",
          "A user home directory with execute permissions granted to the file owner.",
          "A systemd service unit configured with standard Restart=always directives."
        ],
        "correct": 0,
        "explanation": "SUID binaries run with the file owner's privileges (e.g. root). If a SUID binary invokes a shell command using a relative path without sanitizing the PATH environment variable, an unprivileged user can hijack execution."
      },
      {
        "id": "q_c5_m7_008",
        "topic": "File Integrity Monitoring (FIM) & System State Verification",
        "difficulty": "medium",
        "q": "In File Integrity Monitoring (FIM) & System State Verification, which Linux permission misconfiguration allows an unprivileged local user to execute commands with root privileges?",
        "options": [
          "A custom binary owned by root with the SUID bit set (chmod u+s) that executes an unquoted relative binary path.",
          "A text configuration file in /etc/ with permissions set to -rw-r--r-- (644).",
          "A user home directory with execute permissions granted to the file owner.",
          "A systemd service unit configured with standard Restart=always directives."
        ],
        "correct": 0,
        "explanation": "SUID binaries run with the file owner's privileges (e.g. root). If a SUID binary invokes a shell command using a relative path without sanitizing the PATH environment variable, an unprivileged user can hijack execution."
      },
      {
        "id": "q_c5_m7_009",
        "topic": "DPDP Act 2023 & GDPR Compliance in Evidence Retention",
        "difficulty": "medium",
        "q": "In DPDP Act 2023 & GDPR Compliance in Evidence Retention, which Linux permission misconfiguration allows an unprivileged local user to execute commands with root privileges?",
        "options": [
          "A custom binary owned by root with the SUID bit set (chmod u+s) that executes an unquoted relative binary path.",
          "A text configuration file in /etc/ with permissions set to -rw-r--r-- (644).",
          "A user home directory with execute permissions granted to the file owner.",
          "A systemd service unit configured with standard Restart=always directives."
        ],
        "correct": 0,
        "explanation": "SUID binaries run with the file owner's privileges (e.g. root). If a SUID binary invokes a shell command using a relative path without sanitizing the PATH environment variable, an unprivileged user can hijack execution."
      },
      {
        "id": "q_c5_m7_010",
        "topic": "Secure Deletion Standards & Cryptographic Shredding",
        "difficulty": "medium",
        "q": "In Secure Deletion Standards & Cryptographic Shredding, which Linux permission misconfiguration allows an unprivileged local user to execute commands with root privileges?",
        "options": [
          "A custom binary owned by root with the SUID bit set (chmod u+s) that executes an unquoted relative binary path.",
          "A text configuration file in /etc/ with permissions set to -rw-r--r-- (644).",
          "A user home directory with execute permissions granted to the file owner.",
          "A systemd service unit configured with standard Restart=always directives."
        ],
        "correct": 0,
        "explanation": "SUID binaries run with the file owner's privileges (e.g. root). If a SUID binary invokes a shell command using a relative path without sanitizing the PATH environment variable, an unprivileged user can hijack execution."
      },
      {
        "id": "q_c5_m7_101",
        "topic": "Operating System Privilege Boundaries & Rings",
        "difficulty": "difficult",
        "q": "Following the completion of active penetration testing under Operating System Privilege Boundaries & Rings, why is verifying post-test artifact cleanup mandatory before issuing the final report?",
        "options": [
          "Leaving uploaded test files, temporary accounts, or modified configurations behind creates persistent security vulnerabilities that real threat actors can exploit.",
          "Client servers automatically refuse SSH connections if temporary files exist in /tmp.",
          "Unremoved test files double the storage pricing charged by cloud infrastructure providers.",
          "Operating system kernels fail boot integrity checks if files have mismatched creation dates."
        ],
        "correct": 0,
        "explanation": "Testers must never leave test artifacts (test accounts, uploaded web shells, altered configuration flags) in target environments. Leaving them creates dangerous backdoors that malicious adversaries can discover and abuse."
      },
      {
        "id": "q_c5_m7_102",
        "topic": "Principle of Least Privilege & Service Account Confinement",
        "difficulty": "difficult",
        "q": "Following the completion of active penetration testing under Principle of Least Privilege & Service Account Confinement, why is verifying post-test artifact cleanup mandatory before issuing the final report?",
        "options": [
          "Leaving uploaded test files, temporary accounts, or modified configurations behind creates persistent security vulnerabilities that real threat actors can exploit.",
          "Client servers automatically refuse SSH connections if temporary files exist in /tmp.",
          "Unremoved test files double the storage pricing charged by cloud infrastructure providers.",
          "Operating system kernels fail boot integrity checks if files have mismatched creation dates."
        ],
        "correct": 0,
        "explanation": "Testers must never leave test artifacts (test accounts, uploaded web shells, altered configuration flags) in target environments. Leaving them creates dangerous backdoors that malicious adversaries can discover and abuse."
      },
      {
        "id": "q_c5_m7_103",
        "topic": "Linux Privilege Escalation Vectors (SUID, Sudoers, Capabilities)",
        "difficulty": "difficult",
        "q": "Following the completion of active penetration testing under Linux Privilege Escalation Vectors (SUID, Sudoers, Capabilities), why is verifying post-test artifact cleanup mandatory before issuing the final report?",
        "options": [
          "Leaving uploaded test files, temporary accounts, or modified configurations behind creates persistent security vulnerabilities that real threat actors can exploit.",
          "Client servers automatically refuse SSH connections if temporary files exist in /tmp.",
          "Unremoved test files double the storage pricing charged by cloud infrastructure providers.",
          "Operating system kernels fail boot integrity checks if files have mismatched creation dates."
        ],
        "correct": 0,
        "explanation": "Testers must never leave test artifacts (test accounts, uploaded web shells, altered configuration flags) in target environments. Leaving them creates dangerous backdoors that malicious adversaries can discover and abuse."
      },
      {
        "id": "q_c5_m7_104",
        "topic": "Windows Privilege Escalation Vectors (Unquoted Paths, Token Impersonation)",
        "difficulty": "difficult",
        "q": "Following the completion of active penetration testing under Windows Privilege Escalation Vectors (Unquoted Paths, Token Impersonation), why is verifying post-test artifact cleanup mandatory before issuing the final report?",
        "options": [
          "Leaving uploaded test files, temporary accounts, or modified configurations behind creates persistent security vulnerabilities that real threat actors can exploit.",
          "Client servers automatically refuse SSH connections if temporary files exist in /tmp.",
          "Unremoved test files double the storage pricing charged by cloud infrastructure providers.",
          "Operating system kernels fail boot integrity checks if files have mismatched creation dates."
        ],
        "correct": 0,
        "explanation": "Testers must never leave test artifacts (test accounts, uploaded web shells, altered configuration flags) in target environments. Leaving them creates dangerous backdoors that malicious adversaries can discover and abuse."
      },
      {
        "id": "q_c5_m7_105",
        "topic": "Assessing Lateral Movement & Blast Radius Across Subnets",
        "difficulty": "difficult",
        "q": "Following the completion of active penetration testing under Assessing Lateral Movement & Blast Radius Across Subnets, why is verifying post-test artifact cleanup mandatory before issuing the final report?",
        "options": [
          "Leaving uploaded test files, temporary accounts, or modified configurations behind creates persistent security vulnerabilities that real threat actors can exploit.",
          "Client servers automatically refuse SSH connections if temporary files exist in /tmp.",
          "Unremoved test files double the storage pricing charged by cloud infrastructure providers.",
          "Operating system kernels fail boot integrity checks if files have mismatched creation dates."
        ],
        "correct": 0,
        "explanation": "Testers must never leave test artifacts (test accounts, uploaded web shells, altered configuration flags) in target environments. Leaving them creates dangerous backdoors that malicious adversaries can discover and abuse."
      },
      {
        "id": "q_c5_m7_106",
        "topic": "Adversary Persistence Mechanism Taxonomy & Autoruns",
        "difficulty": "difficult",
        "q": "Following the completion of active penetration testing under Adversary Persistence Mechanism Taxonomy & Autoruns, why is verifying post-test artifact cleanup mandatory before issuing the final report?",
        "options": [
          "Leaving uploaded test files, temporary accounts, or modified configurations behind creates persistent security vulnerabilities that real threat actors can exploit.",
          "Client servers automatically refuse SSH connections if temporary files exist in /tmp.",
          "Unremoved test files double the storage pricing charged by cloud infrastructure providers.",
          "Operating system kernels fail boot integrity checks if files have mismatched creation dates."
        ],
        "correct": 0,
        "explanation": "Testers must never leave test artifacts (test accounts, uploaded web shells, altered configuration flags) in target environments. Leaving them creates dangerous backdoors that malicious adversaries can discover and abuse."
      },
      {
        "id": "q_c5_m7_107",
        "topic": "Post-Engagement Artifact Cleanup & Verification Checklists",
        "difficulty": "difficult",
        "q": "Following the completion of active penetration testing under Post-Engagement Artifact Cleanup & Verification Checklists, why is verifying post-test artifact cleanup mandatory before issuing the final report?",
        "options": [
          "Leaving uploaded test files, temporary accounts, or modified configurations behind creates persistent security vulnerabilities that real threat actors can exploit.",
          "Client servers automatically refuse SSH connections if temporary files exist in /tmp.",
          "Unremoved test files double the storage pricing charged by cloud infrastructure providers.",
          "Operating system kernels fail boot integrity checks if files have mismatched creation dates."
        ],
        "correct": 0,
        "explanation": "Testers must never leave test artifacts (test accounts, uploaded web shells, altered configuration flags) in target environments. Leaving them creates dangerous backdoors that malicious adversaries can discover and abuse."
      },
      {
        "id": "q_c5_m7_108",
        "topic": "File Integrity Monitoring (FIM) & System State Verification",
        "difficulty": "difficult",
        "q": "Following the completion of active penetration testing under File Integrity Monitoring (FIM) & System State Verification, why is verifying post-test artifact cleanup mandatory before issuing the final report?",
        "options": [
          "Leaving uploaded test files, temporary accounts, or modified configurations behind creates persistent security vulnerabilities that real threat actors can exploit.",
          "Client servers automatically refuse SSH connections if temporary files exist in /tmp.",
          "Unremoved test files double the storage pricing charged by cloud infrastructure providers.",
          "Operating system kernels fail boot integrity checks if files have mismatched creation dates."
        ],
        "correct": 0,
        "explanation": "Testers must never leave test artifacts (test accounts, uploaded web shells, altered configuration flags) in target environments. Leaving them creates dangerous backdoors that malicious adversaries can discover and abuse."
      },
      {
        "id": "q_c5_m7_109",
        "topic": "DPDP Act 2023 & GDPR Compliance in Evidence Retention",
        "difficulty": "difficult",
        "q": "Following the completion of active penetration testing under DPDP Act 2023 & GDPR Compliance in Evidence Retention, why is verifying post-test artifact cleanup mandatory before issuing the final report?",
        "options": [
          "Leaving uploaded test files, temporary accounts, or modified configurations behind creates persistent security vulnerabilities that real threat actors can exploit.",
          "Client servers automatically refuse SSH connections if temporary files exist in /tmp.",
          "Unremoved test files double the storage pricing charged by cloud infrastructure providers.",
          "Operating system kernels fail boot integrity checks if files have mismatched creation dates."
        ],
        "correct": 0,
        "explanation": "Testers must never leave test artifacts (test accounts, uploaded web shells, altered configuration flags) in target environments. Leaving them creates dangerous backdoors that malicious adversaries can discover and abuse."
      },
      {
        "id": "q_c5_m7_110",
        "topic": "Secure Deletion Standards & Cryptographic Shredding",
        "difficulty": "difficult",
        "q": "Following the completion of active penetration testing under Secure Deletion Standards & Cryptographic Shredding, why is verifying post-test artifact cleanup mandatory before issuing the final report?",
        "options": [
          "Leaving uploaded test files, temporary accounts, or modified configurations behind creates persistent security vulnerabilities that real threat actors can exploit.",
          "Client servers automatically refuse SSH connections if temporary files exist in /tmp.",
          "Unremoved test files double the storage pricing charged by cloud infrastructure providers.",
          "Operating system kernels fail boot integrity checks if files have mismatched creation dates."
        ],
        "correct": 0,
        "explanation": "Testers must never leave test artifacts (test accounts, uploaded web shells, altered configuration flags) in target environments. Leaving them creates dangerous backdoors that malicious adversaries can discover and abuse."
      }
    ]
  },
  "lessons": [
    {
      "id": "les_c5_m7_l1",
      "title": "7.1 Privilege Boundaries and Least Privilege Architecture",
      "duration": "45 mins",
      "is_mandatory": true,
      "summary": "Comprehensive instruction covering 7.1 privilege boundaries and least privilege architecture, procedural frameworks, and verified operational guidelines.",
      "learning_objectives": [
        "Understand the theoretical principles and governance standards behind 7.1 Privilege Boundaries and Least Privilege Architecture",
        "Apply technical verification techniques using authorized loopback tools",
        "Analyze visual architecture models and operational process workflows",
        "Record reproducible evidentiary artifacts adhering to professional chain-of-custody standards"
      ],
      "diagram_slots": [
        {
          "id": "fig-05-07-01",
          "asset_path": "/assets/courses/cyber-05/c05_m07_l01_01.png",
          "caption": "Figure 7.01: Operating System Privilege Hierarchy Rings in enterprise authorized penetration testing operations.",
          "placement_hint": "After Section 2 (Core Operational Pillars)"
        },
        {
          "id": "fig-05-07-02",
          "asset_path": "/assets/courses/cyber-05/c05_m07_l01_02.png",
          "caption": "Figure 7.02: Role-Based vs Attribute-Based Access Control Models workflow and validation mechanics.",
          "placement_hint": "After Section 5 (Process Sequence)"
        }
      ],
      "images": [
        {
          "id": "fig-05-07-01",
          "title": "Privilege Boundaries & Least Privilege: Operating System Privilege Hierarchy Rings",
          "url": "/assets/courses/cyber-05/c05_m07_l01_01.png",
          "caption": "Figure 7.01: Operating System Privilege Hierarchy Rings in enterprise authorized penetration testing operations.",
          "alt": "Technical diagram illustrating Operating System Privilege Hierarchy Rings"
        },
        {
          "id": "fig-05-07-02",
          "title": "Privilege Boundaries & Least Privilege: Role-Based vs Attribute-Based Access Control Models",
          "url": "/assets/courses/cyber-05/c05_m07_l01_02.png",
          "caption": "Figure 7.02: Role-Based vs Attribute-Based Access Control Models workflow and validation mechanics.",
          "alt": "Process workflow diagram showing Role-Based vs Attribute-Based Access Control Models"
        }
      ],
      "content": "## 1. Executive Concept & Theoretical Overview\n\nA privilege boundary separates what one identity may do from what another\nmay. Operating systems and applications define boundaries between users,\nbetween users and administrators, and between processes. The principle of\nLEAST PRIVILEGE says each identity should hold only the privileges it needs -\nso that a compromise of that identity reaches as little as possible.\nPenetration testing measures how well boundaries hold: a finding that lets a\nlow-privilege or unauthenticated user act as an administrator (like the lab's\ndefault credential) has crossed a boundary that should have held. Reporting\nprivilege impact in these terms tells the client exactly what a weakness\nundermines.\n\nProfessional penetration testing is the practice of evaluating computer systems, networks, and web applications to discover security vulnerabilities that an adversary could exploit. Unlike malicious attacks, authorized security testing is conducted with the explicit written permission of the asset owner, within a tightly defined scope, and adhering to strict Rules of Engagement (RoE).\n\n## 2. Core Operational Pillars & Technical Specifications\n\n- **Governance & Authority:** Every technical probe must be anchored to verifiable authority. Testing without written approval violates computer crime legislation regardless of intent.\n- **Boundary Discipline:** Target networks must be precisely bounded by IP CIDR ranges, domain names, and testing windows. Probing adjacent systems or third-party infrastructure constitutes an immediate breach of contract.\n- **Non-Destructive Methodology:** Evaluators prioritize minimal safe proofs of concept, verifying the existence of vulnerabilities without corrupting production databases or exhausting network resources.\n- **Reproducible Evidence:** Findings must be recorded with exact input vectors, raw HTTP headers, terminal outputs, UTC timestamps, and cryptographic hashes to guarantee evidentiary integrity.\n\n![Privilege Boundaries & Least Privilege: Operating System Privilege Hierarchy Rings](/assets/courses/cyber-05/c05_m07_l01_01.png)\n\n*Figure 7.01: Operating System Privilege Hierarchy Rings in enterprise authorized penetration testing operations.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Structural Boundary Demarcation:** The diagram visualizes the critical divide between authorized evaluation zones and unauthorized spaces. The central gateway represents the verified authorization boundary.\n- **Component Interactions:** Data flows from left to right through formal sign-off checkpoints. Probes that fail verification are immediately deflected into compliance alert channels.\n- **High-Contrast Indicators:** Amber accents (#FF7A00) demarcate active testing perimeters, while green highlights indicate authorized targets and red flags identify strictly out-of-scope assets.\n\n## 5. Process Sequence & Operational Execution\n\n![Privilege Boundaries & Least Privilege: Role-Based vs Attribute-Based Access Control Models](/assets/courses/cyber-05/c05_m07_l01_02.png)\n\n*Figure 7.02: Role-Based vs Attribute-Based Access Control Models workflow and validation mechanics.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Sequential Workflow Pipeline:** Illustrates the end-to-end execution flow, detailing the decision trees, state transitions, and verification milestones.\n- **Feedback & Escalation Loops:** When an anomaly or potential outage trigger occurs, the workflow establishes an immediate freeze and out-of-band notification protocol.\n- **Audit Traceability:** Every operational milestone requires an empirical evidence capture, generating an immutable record for the final deliverables ledger.\n\n## 6. Key Terminology & Standard Definitions\n\n- **Rules of Engagement (RoE):** Contractual document formalizing permissible testing techniques, exclusion matrices, testing time windows, and emergency contacts.\n- **Minimal Proof-of-Concept:** The least intrusive empirical assertion required to definitively prove a vulnerability exists without destabilizing services.\n- **Chain of Custody:** The chronological documentation showing the custody, control, transfer, analysis, and disposition of digital evidence.\n- **Retesting Verification:** Independent re-execution of verified assessment tests against remediated targets to empirically confirm vulnerability closure.\n"
    },
    {
      "id": "les_c5_m7_l2",
      "title": "7.2 Defensive Privilege Escalation Concepts & Vectors",
      "duration": "50 mins",
      "is_mandatory": true,
      "summary": "Comprehensive instruction covering 7.2 defensive privilege escalation concepts & vectors, procedural frameworks, and verified operational guidelines.",
      "learning_objectives": [
        "Understand the theoretical principles and governance standards behind 7.2 Defensive Privilege Escalation Concepts & Vectors",
        "Apply technical verification techniques using authorized loopback tools",
        "Analyze visual architecture models and operational process workflows",
        "Record reproducible evidentiary artifacts adhering to professional chain-of-custody standards"
      ],
      "diagram_slots": [
        {
          "id": "fig-05-07-03",
          "asset_path": "/assets/courses/cyber-05/c05_m07_l02_01.png",
          "caption": "Figure 7.03: Vertical vs Horizontal Privilege Escalation Paths in enterprise authorized penetration testing operations.",
          "placement_hint": "After Section 2 (Core Operational Pillars)"
        },
        {
          "id": "fig-05-07-04",
          "asset_path": "/assets/courses/cyber-05/c05_m07_l02_02.png",
          "caption": "Figure 7.04: Service Misconfiguration & SUID Abuse Vector workflow and validation mechanics.",
          "placement_hint": "After Section 5 (Process Sequence)"
        }
      ],
      "images": [
        {
          "id": "fig-05-07-03",
          "title": "Defensive Privilege Escalation: Vertical vs Horizontal Privilege Escalation Paths",
          "url": "/assets/courses/cyber-05/c05_m07_l02_01.png",
          "caption": "Figure 7.03: Vertical vs Horizontal Privilege Escalation Paths in enterprise authorized penetration testing operations.",
          "alt": "Technical diagram illustrating Vertical vs Horizontal Privilege Escalation Paths"
        },
        {
          "id": "fig-05-07-04",
          "title": "Defensive Privilege Escalation: Service Misconfiguration & SUID Abuse Vector",
          "url": "/assets/courses/cyber-05/c05_m07_l02_02.png",
          "caption": "Figure 7.04: Service Misconfiguration & SUID Abuse Vector workflow and validation mechanics.",
          "alt": "Process workflow diagram showing Service Misconfiguration & SUID Abuse Vector"
        }
      ],
      "content": "## 1. Executive Concept & Theoretical Overview\n\nPrivilege escalation is moving from lower to higher privilege. Two shapes:\n  vertical    gaining higher privilege than you had (a user becoming admin) -\n              for example via a default admin credential, a misconfiguration,\n              or a vulnerable component.\n  horizontal  accessing another peer's resources at the same privilege level -\n              for example the lab's IDOR, where one user reads another's data\n              without becoming \"admin\".\nDefensively, escalation is prevented by least privilege, strong authentication\nand authorisation checks, patching, and secure configuration; it is DETECTED\nby monitoring for unexpected privilege use (admin logons, access to resources\noutside one's normal scope). This course discusses escalation to the depth\nneeded to recognise, report and defend against it, not to perform it.\n\nProfessional penetration testing is the practice of evaluating computer systems, networks, and web applications to discover security vulnerabilities that an adversary could exploit. Unlike malicious attacks, authorized security testing is conducted with the explicit written permission of the asset owner, within a tightly defined scope, and adhering to strict Rules of Engagement (RoE).\n\n## 2. Core Operational Pillars & Technical Specifications\n\n- **Governance & Authority:** Every technical probe must be anchored to verifiable authority. Testing without written approval violates computer crime legislation regardless of intent.\n- **Boundary Discipline:** Target networks must be precisely bounded by IP CIDR ranges, domain names, and testing windows. Probing adjacent systems or third-party infrastructure constitutes an immediate breach of contract.\n- **Non-Destructive Methodology:** Evaluators prioritize minimal safe proofs of concept, verifying the existence of vulnerabilities without corrupting production databases or exhausting network resources.\n- **Reproducible Evidence:** Findings must be recorded with exact input vectors, raw HTTP headers, terminal outputs, UTC timestamps, and cryptographic hashes to guarantee evidentiary integrity.\n\n![Defensive Privilege Escalation: Vertical vs Horizontal Privilege Escalation Paths](/assets/courses/cyber-05/c05_m07_l02_01.png)\n\n*Figure 7.03: Vertical vs Horizontal Privilege Escalation Paths in enterprise authorized penetration testing operations.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Structural Boundary Demarcation:** The diagram visualizes the critical divide between authorized evaluation zones and unauthorized spaces. The central gateway represents the verified authorization boundary.\n- **Component Interactions:** Data flows from left to right through formal sign-off checkpoints. Probes that fail verification are immediately deflected into compliance alert channels.\n- **High-Contrast Indicators:** Amber accents (#FF7A00) demarcate active testing perimeters, while green highlights indicate authorized targets and red flags identify strictly out-of-scope assets.\n\n## 5. Process Sequence & Operational Execution\n\n![Defensive Privilege Escalation: Service Misconfiguration & SUID Abuse Vector](/assets/courses/cyber-05/c05_m07_l02_02.png)\n\n*Figure 7.04: Service Misconfiguration & SUID Abuse Vector workflow and validation mechanics.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Sequential Workflow Pipeline:** Illustrates the end-to-end execution flow, detailing the decision trees, state transitions, and verification milestones.\n- **Feedback & Escalation Loops:** When an anomaly or potential outage trigger occurs, the workflow establishes an immediate freeze and out-of-band notification protocol.\n- **Audit Traceability:** Every operational milestone requires an empirical evidence capture, generating an immutable record for the final deliverables ledger.\n\n## 6. Key Terminology & Standard Definitions\n\n- **Rules of Engagement (RoE):** Contractual document formalizing permissible testing techniques, exclusion matrices, testing time windows, and emergency contacts.\n- **Minimal Proof-of-Concept:** The least intrusive empirical assertion required to definitively prove a vulnerability exists without destabilizing services.\n- **Chain of Custody:** The chronological documentation showing the custody, control, transfer, analysis, and disposition of digital evidence.\n- **Retesting Verification:** Independent re-execution of verified assessment tests against remediated targets to empirically confirm vulnerability closure.\n"
    },
    {
      "id": "les_c5_m7_l3",
      "title": "7.3 Assessing the Reach and Lateral Movement of a Finding",
      "duration": "55 mins",
      "is_mandatory": true,
      "summary": "Comprehensive instruction covering 7.3 assessing the reach and lateral movement of a finding, procedural frameworks, and verified operational guidelines.",
      "learning_objectives": [
        "Understand the theoretical principles and governance standards behind 7.3 Assessing the Reach and Lateral Movement of a Finding",
        "Apply technical verification techniques using authorized loopback tools",
        "Analyze visual architecture models and operational process workflows",
        "Record reproducible evidentiary artifacts adhering to professional chain-of-custody standards"
      ],
      "diagram_slots": [
        {
          "id": "fig-05-07-05",
          "asset_path": "/assets/courses/cyber-05/c05_m07_l03_01.png",
          "caption": "Figure 7.05: Lateral Movement Reachability Graph in enterprise authorized penetration testing operations.",
          "placement_hint": "After Section 2 (Core Operational Pillars)"
        },
        {
          "id": "fig-05-07-06",
          "asset_path": "/assets/courses/cyber-05/c05_m07_l03_02.png",
          "caption": "Figure 7.06: Network Segmentation & Zero Trust Blast Radius workflow and validation mechanics.",
          "placement_hint": "After Section 5 (Process Sequence)"
        }
      ],
      "images": [
        {
          "id": "fig-05-07-05",
          "title": "Assessing Finding Reach: Lateral Movement Reachability Graph",
          "url": "/assets/courses/cyber-05/c05_m07_l03_01.png",
          "caption": "Figure 7.05: Lateral Movement Reachability Graph in enterprise authorized penetration testing operations.",
          "alt": "Technical diagram illustrating Lateral Movement Reachability Graph"
        },
        {
          "id": "fig-05-07-06",
          "title": "Assessing Finding Reach: Network Segmentation & Zero Trust Blast Radius",
          "url": "/assets/courses/cyber-05/c05_m07_l03_02.png",
          "caption": "Figure 7.06: Network Segmentation & Zero Trust Blast Radius workflow and validation mechanics.",
          "alt": "Process workflow diagram showing Network Segmentation & Zero Trust Blast Radius"
        }
      ],
      "content": "## 1. Executive Concept & Theoretical Overview\n\nFor each finding, assess its REACH: what the privilege it grants allows, and\nwhether it could extend further. The lab's default-credential finding grants\nan administrator role - potentially full control of the application's data and\nfunctions (high reach); the IDOR grants read access to other customers'\ninvoices (horizontal reach, confidentiality). Assessing reach honestly (what\nit DOES grant, and what it plausibly COULD, without actually pursuing it) is\npart of impact assessment (Module 5) and drives prioritisation. The tester\ndescribes reach; they do not exercise it beyond the minimal proof.\n\nProfessional penetration testing is the practice of evaluating computer systems, networks, and web applications to discover security vulnerabilities that an adversary could exploit. Unlike malicious attacks, authorized security testing is conducted with the explicit written permission of the asset owner, within a tightly defined scope, and adhering to strict Rules of Engagement (RoE).\n\n## 2. Core Operational Pillars & Technical Specifications\n\n- **Governance & Authority:** Every technical probe must be anchored to verifiable authority. Testing without written approval violates computer crime legislation regardless of intent.\n- **Boundary Discipline:** Target networks must be precisely bounded by IP CIDR ranges, domain names, and testing windows. Probing adjacent systems or third-party infrastructure constitutes an immediate breach of contract.\n- **Non-Destructive Methodology:** Evaluators prioritize minimal safe proofs of concept, verifying the existence of vulnerabilities without corrupting production databases or exhausting network resources.\n- **Reproducible Evidence:** Findings must be recorded with exact input vectors, raw HTTP headers, terminal outputs, UTC timestamps, and cryptographic hashes to guarantee evidentiary integrity.\n\n![Assessing Finding Reach: Lateral Movement Reachability Graph](/assets/courses/cyber-05/c05_m07_l03_01.png)\n\n*Figure 7.05: Lateral Movement Reachability Graph in enterprise authorized penetration testing operations.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Structural Boundary Demarcation:** The diagram visualizes the critical divide between authorized evaluation zones and unauthorized spaces. The central gateway represents the verified authorization boundary.\n- **Component Interactions:** Data flows from left to right through formal sign-off checkpoints. Probes that fail verification are immediately deflected into compliance alert channels.\n- **High-Contrast Indicators:** Amber accents (#FF7A00) demarcate active testing perimeters, while green highlights indicate authorized targets and red flags identify strictly out-of-scope assets.\n\n## 5. Process Sequence & Operational Execution\n\n![Assessing Finding Reach: Network Segmentation & Zero Trust Blast Radius](/assets/courses/cyber-05/c05_m07_l03_02.png)\n\n*Figure 7.06: Network Segmentation & Zero Trust Blast Radius workflow and validation mechanics.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Sequential Workflow Pipeline:** Illustrates the end-to-end execution flow, detailing the decision trees, state transitions, and verification milestones.\n- **Feedback & Escalation Loops:** When an anomaly or potential outage trigger occurs, the workflow establishes an immediate freeze and out-of-band notification protocol.\n- **Audit Traceability:** Every operational milestone requires an empirical evidence capture, generating an immutable record for the final deliverables ledger.\n\n## 6. Key Terminology & Standard Definitions\n\n- **Rules of Engagement (RoE):** Contractual document formalizing permissible testing techniques, exclusion matrices, testing time windows, and emergency contacts.\n- **Minimal Proof-of-Concept:** The least intrusive empirical assertion required to definitively prove a vulnerability exists without destabilizing services.\n- **Chain of Custody:** The chronological documentation showing the custody, control, transfer, analysis, and disposition of digital evidence.\n- **Retesting Verification:** Independent re-execution of verified assessment tests against remediated targets to empirically confirm vulnerability closure.\n"
    },
    {
      "id": "les_c5_m7_l4",
      "title": "7.4 Persistence Mechanisms as Detection Targets",
      "duration": "50 mins",
      "is_mandatory": true,
      "summary": "Comprehensive instruction covering 7.4 persistence mechanisms as detection targets, procedural frameworks, and verified operational guidelines.",
      "learning_objectives": [
        "Understand the theoretical principles and governance standards behind 7.4 Persistence Mechanisms as Detection Targets",
        "Apply technical verification techniques using authorized loopback tools",
        "Analyze visual architecture models and operational process workflows",
        "Record reproducible evidentiary artifacts adhering to professional chain-of-custody standards"
      ],
      "diagram_slots": [
        {
          "id": "fig-05-07-07",
          "asset_path": "/assets/courses/cyber-05/c05_m07_l04_01.png",
          "caption": "Figure 7.07: Adversary Persistence Mechanism Taxonomy in enterprise authorized penetration testing operations.",
          "placement_hint": "After Section 2 (Core Operational Pillars)"
        },
        {
          "id": "fig-05-07-08",
          "asset_path": "/assets/courses/cyber-05/c05_m07_l04_02.png",
          "caption": "Figure 7.08: File Integrity Monitoring & Autorun Inspection Flow workflow and validation mechanics.",
          "placement_hint": "After Section 5 (Process Sequence)"
        }
      ],
      "images": [
        {
          "id": "fig-05-07-07",
          "title": "Persistence Detection: Adversary Persistence Mechanism Taxonomy",
          "url": "/assets/courses/cyber-05/c05_m07_l04_01.png",
          "caption": "Figure 7.07: Adversary Persistence Mechanism Taxonomy in enterprise authorized penetration testing operations.",
          "alt": "Technical diagram illustrating Adversary Persistence Mechanism Taxonomy"
        },
        {
          "id": "fig-05-07-08",
          "title": "Persistence Detection: File Integrity Monitoring & Autorun Inspection Flow",
          "url": "/assets/courses/cyber-05/c05_m07_l04_02.png",
          "caption": "Figure 7.08: File Integrity Monitoring & Autorun Inspection Flow workflow and validation mechanics.",
          "alt": "Process workflow diagram showing File Integrity Monitoring & Autorun Inspection Flow"
        }
      ],
      "content": "## 1. Executive Concept & Theoretical Overview\n\nPersistence is how a real attacker keeps access after the initial compromise -\na new account, a scheduled task, a modified startup item, a planted key. An\nethical tester does NOT establish persistence (it changes the system, creates\nrisk, and is unnecessary for a test). But testers and defenders must\nUNDERSTAND persistence as a detection target: knowing where attackers hide\naccess tells defenders what to monitor (new privileged accounts, unexpected\nscheduled tasks, changed startup configuration). In a report, the tester can\nadvise the client on detecting persistence, informed by understanding how it\nworks - offensive knowledge in service of defence (Course 06, 13 and 20 cover\ndetection in depth).\n\nProfessional penetration testing is the practice of evaluating computer systems, networks, and web applications to discover security vulnerabilities that an adversary could exploit. Unlike malicious attacks, authorized security testing is conducted with the explicit written permission of the asset owner, within a tightly defined scope, and adhering to strict Rules of Engagement (RoE).\n\n## 2. Core Operational Pillars & Technical Specifications\n\n- **Governance & Authority:** Every technical probe must be anchored to verifiable authority. Testing without written approval violates computer crime legislation regardless of intent.\n- **Boundary Discipline:** Target networks must be precisely bounded by IP CIDR ranges, domain names, and testing windows. Probing adjacent systems or third-party infrastructure constitutes an immediate breach of contract.\n- **Non-Destructive Methodology:** Evaluators prioritize minimal safe proofs of concept, verifying the existence of vulnerabilities without corrupting production databases or exhausting network resources.\n- **Reproducible Evidence:** Findings must be recorded with exact input vectors, raw HTTP headers, terminal outputs, UTC timestamps, and cryptographic hashes to guarantee evidentiary integrity.\n\n![Persistence Detection: Adversary Persistence Mechanism Taxonomy](/assets/courses/cyber-05/c05_m07_l04_01.png)\n\n*Figure 7.07: Adversary Persistence Mechanism Taxonomy in enterprise authorized penetration testing operations.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Structural Boundary Demarcation:** The diagram visualizes the critical divide between authorized evaluation zones and unauthorized spaces. The central gateway represents the verified authorization boundary.\n- **Component Interactions:** Data flows from left to right through formal sign-off checkpoints. Probes that fail verification are immediately deflected into compliance alert channels.\n- **High-Contrast Indicators:** Amber accents (#FF7A00) demarcate active testing perimeters, while green highlights indicate authorized targets and red flags identify strictly out-of-scope assets.\n\n## 3. Hands-On Laboratory Execution & Terminal Verification\n\nAll practical exercises execute against the authorized loopback target service Nilgiri Parts Portal (`http://127.0.0.1:8099`). The laboratory environment enforces safety in code: all custom testing utilities abort immediately if pointed at any host other than `127.0.0.1`.\n\n```bash\n# Verify target service status on loopback TCP port 8099\ncurl -i http://127.0.0.1:8099/health\n```\n\n```terminal\nHTTP/1.0 200 OK\nServer: Nilgiri-Portal/1.0 Python/3.14\nDate: Sun, 08 Nov 2026 10:14:22 GMT\nContent-Type: application/json\n\n{\"status\": \"ONLINE\", \"target\": \"127.0.0.1:8099\", \"scope\": \"AUTHORISED_LAB_ONLY\"}\n```\n\n> [!IMPORTANT]\n> **Loopback Confinement Rule:** Never redirect lab tools or testing scripts toward external networks, production cloud assets, or third-party domains. The single rule that guarantees safety and legality is strict loopback confinement.\n\n\n\n:::math-steps\n### Linux Special Permission Octal Bitmask Arithmetic (SUID/SGID/Sticky)\nEvaluating effective permission bits when auditing binaries for privilege escalation vectors.\n\n#### Step 1: 12-Bit POSIX Mode Representation\nStandard Linux file modes utilize a 12-bit integer:\n$$\\text{Mode} = b_{11}b_{10}b_9 \\; b_8b_7b_6 \\; b_5b_4b_3 \\; b_2b_1b_0$$\nThe top 3 bits ($b_{11..9}$) represent the special permissions:\n- $\\text{SUID} = 4000_8 = 100\\,000\\,000\\,000_2$\n- $\\text{SGID} = 2000_8 = 010\\,000\\,000\\,000_2$\n- $\\text{Sticky} = 1000_8 = 001\\,000\\,000\\,000_2$\n\n#### Step 2: Bitwise Audit Mask for SUID Execution\n$$\\text{IsSUID}(m) = (m \\land 4000_8) == 4000_8$$\nWhen $\\text{IsSUID}$ evaluates to true on a binary owned by UID 0 ($root$) that executes with unquoted arguments, unprivileged users can hijack execution.\n:::\n\n## 5. Process Sequence & Operational Execution\n\n![Persistence Detection: File Integrity Monitoring & Autorun Inspection Flow](/assets/courses/cyber-05/c05_m07_l04_02.png)\n\n*Figure 7.08: File Integrity Monitoring & Autorun Inspection Flow workflow and validation mechanics.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Sequential Workflow Pipeline:** Illustrates the end-to-end execution flow, detailing the decision trees, state transitions, and verification milestones.\n- **Feedback & Escalation Loops:** When an anomaly or potential outage trigger occurs, the workflow establishes an immediate freeze and out-of-band notification protocol.\n- **Audit Traceability:** Every operational milestone requires an empirical evidence capture, generating an immutable record for the final deliverables ledger.\n\n## 6. Key Terminology & Standard Definitions\n\n- **Rules of Engagement (RoE):** Contractual document formalizing permissible testing techniques, exclusion matrices, testing time windows, and emergency contacts.\n- **Minimal Proof-of-Concept:** The least intrusive empirical assertion required to definitively prove a vulnerability exists without destabilizing services.\n- **Chain of Custody:** The chronological documentation showing the custody, control, transfer, analysis, and disposition of digital evidence.\n- **Retesting Verification:** Independent re-execution of verified assessment tests against remediated targets to empirically confirm vulnerability closure.\n"
    },
    {
      "id": "les_c5_m7_l5",
      "title": "7.5 Post-Engagement Artifact Cleanup & Verification",
      "duration": "55 mins",
      "is_mandatory": true,
      "summary": "Comprehensive instruction covering 7.5 post-engagement artifact cleanup & verification, procedural frameworks, and verified operational guidelines.",
      "learning_objectives": [
        "Understand the theoretical principles and governance standards behind 7.5 Post-Engagement Artifact Cleanup & Verification",
        "Apply technical verification techniques using authorized loopback tools",
        "Analyze visual architecture models and operational process workflows",
        "Record reproducible evidentiary artifacts adhering to professional chain-of-custody standards"
      ],
      "diagram_slots": [
        {
          "id": "fig-05-07-09",
          "asset_path": "/assets/courses/cyber-05/c05_m07_l05_01.png",
          "caption": "Figure 7.09: Post-Test Artifact Cleanup Checklist in enterprise authorized penetration testing operations.",
          "placement_hint": "After Section 2 (Core Operational Pillars)"
        },
        {
          "id": "fig-05-07-10",
          "asset_path": "/assets/courses/cyber-05/c05_m07_l05_02.png",
          "caption": "Figure 7.10: System Restoration Verification Loop workflow and validation mechanics.",
          "placement_hint": "After Section 5 (Process Sequence)"
        }
      ],
      "images": [
        {
          "id": "fig-05-07-09",
          "title": "Post-Engagement Cleanup: Post-Test Artifact Cleanup Checklist",
          "url": "/assets/courses/cyber-05/c05_m07_l05_01.png",
          "caption": "Figure 7.09: Post-Test Artifact Cleanup Checklist in enterprise authorized penetration testing operations.",
          "alt": "Technical diagram illustrating Post-Test Artifact Cleanup Checklist"
        },
        {
          "id": "fig-05-07-10",
          "title": "Post-Engagement Cleanup: System Restoration Verification Loop",
          "url": "/assets/courses/cyber-05/c05_m07_l05_02.png",
          "caption": "Figure 7.10: System Restoration Verification Loop workflow and validation mechanics.",
          "alt": "Process workflow diagram showing System Restoration Verification Loop"
        }
      ],
      "content": "## 1. Executive Concept & Theoretical Overview\n\nA professional leaves the system as they found it. Cleanup means reversing\nanything the test changed: removing any test accounts created (with the\nclient's knowledge), deleting any uploaded files, restoring any changed\nsettings, and clearing any test artefacts - all documented. In the lab, the\ntools are read-only against the target and create only local evidence files\n(data/), so cleanup is simply stopping the servers and deleting the local\ndata when finished. Cleanup must be PLANNED before testing (so you know what\nto undo) and VERIFIED after (confirm the system is clean). Anything that\ncannot be cleaned up must be disclosed to the client.\n\nProfessional penetration testing is the practice of evaluating computer systems, networks, and web applications to discover security vulnerabilities that an adversary could exploit. Unlike malicious attacks, authorized security testing is conducted with the explicit written permission of the asset owner, within a tightly defined scope, and adhering to strict Rules of Engagement (RoE).\n\n## 2. Core Operational Pillars & Technical Specifications\n\n- **Governance & Authority:** Every technical probe must be anchored to verifiable authority. Testing without written approval violates computer crime legislation regardless of intent.\n- **Boundary Discipline:** Target networks must be precisely bounded by IP CIDR ranges, domain names, and testing windows. Probing adjacent systems or third-party infrastructure constitutes an immediate breach of contract.\n- **Non-Destructive Methodology:** Evaluators prioritize minimal safe proofs of concept, verifying the existence of vulnerabilities without corrupting production databases or exhausting network resources.\n- **Reproducible Evidence:** Findings must be recorded with exact input vectors, raw HTTP headers, terminal outputs, UTC timestamps, and cryptographic hashes to guarantee evidentiary integrity.\n\n![Post-Engagement Cleanup: Post-Test Artifact Cleanup Checklist](/assets/courses/cyber-05/c05_m07_l05_01.png)\n\n*Figure 7.09: Post-Test Artifact Cleanup Checklist in enterprise authorized penetration testing operations.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Structural Boundary Demarcation:** The diagram visualizes the critical divide between authorized evaluation zones and unauthorized spaces. The central gateway represents the verified authorization boundary.\n- **Component Interactions:** Data flows from left to right through formal sign-off checkpoints. Probes that fail verification are immediately deflected into compliance alert channels.\n- **High-Contrast Indicators:** Amber accents (#FF7A00) demarcate active testing perimeters, while green highlights indicate authorized targets and red flags identify strictly out-of-scope assets.\n\n## 3. Hands-On Laboratory Execution & Terminal Verification\n\nAll practical exercises execute against the authorized loopback target service Nilgiri Parts Portal (`http://127.0.0.1:8099`). The laboratory environment enforces safety in code: all custom testing utilities abort immediately if pointed at any host other than `127.0.0.1`.\n\n```bash\n# Verify target service status on loopback TCP port 8099\ncurl -i http://127.0.0.1:8099/health\n```\n\n```terminal\nHTTP/1.0 200 OK\nServer: Nilgiri-Portal/1.0 Python/3.14\nDate: Sun, 08 Nov 2026 10:14:22 GMT\nContent-Type: application/json\n\n{\"status\": \"ONLINE\", \"target\": \"127.0.0.1:8099\", \"scope\": \"AUTHORISED_LAB_ONLY\"}\n```\n\n> [!IMPORTANT]\n> **Loopback Confinement Rule:** Never redirect lab tools or testing scripts toward external networks, production cloud assets, or third-party domains. The single rule that guarantees safety and legality is strict loopback confinement.\n\n\n\n:::math-steps\n### Linux Special Permission Octal Bitmask Arithmetic (SUID/SGID/Sticky)\nEvaluating effective permission bits when auditing binaries for privilege escalation vectors.\n\n#### Step 1: 12-Bit POSIX Mode Representation\nStandard Linux file modes utilize a 12-bit integer:\n$$\\text{Mode} = b_{11}b_{10}b_9 \\; b_8b_7b_6 \\; b_5b_4b_3 \\; b_2b_1b_0$$\nThe top 3 bits ($b_{11..9}$) represent the special permissions:\n- $\\text{SUID} = 4000_8 = 100\\,000\\,000\\,000_2$\n- $\\text{SGID} = 2000_8 = 010\\,000\\,000\\,000_2$\n- $\\text{Sticky} = 1000_8 = 001\\,000\\,000\\,000_2$\n\n#### Step 2: Bitwise Audit Mask for SUID Execution\n$$\\text{IsSUID}(m) = (m \\land 4000_8) == 4000_8$$\nWhen $\\text{IsSUID}$ evaluates to true on a binary owned by UID 0 ($root$) that executes with unquoted arguments, unprivileged users can hijack execution.\n:::\n\n## 5. Process Sequence & Operational Execution\n\n![Post-Engagement Cleanup: System Restoration Verification Loop](/assets/courses/cyber-05/c05_m07_l05_02.png)\n\n*Figure 7.10: System Restoration Verification Loop workflow and validation mechanics.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Sequential Workflow Pipeline:** Illustrates the end-to-end execution flow, detailing the decision trees, state transitions, and verification milestones.\n- **Feedback & Escalation Loops:** When an anomaly or potential outage trigger occurs, the workflow establishes an immediate freeze and out-of-band notification protocol.\n- **Audit Traceability:** Every operational milestone requires an empirical evidence capture, generating an immutable record for the final deliverables ledger.\n\n## 6. Key Terminology & Standard Definitions\n\n- **Rules of Engagement (RoE):** Contractual document formalizing permissible testing techniques, exclusion matrices, testing time windows, and emergency contacts.\n- **Minimal Proof-of-Concept:** The least intrusive empirical assertion required to definitively prove a vulnerability exists without destabilizing services.\n- **Chain of Custody:** The chronological documentation showing the custody, control, transfer, analysis, and disposition of digital evidence.\n- **Retesting Verification:** Independent re-execution of verified assessment tests against remediated targets to empirically confirm vulnerability closure.\n"
    },
    {
      "id": "les_c5_m7_l6",
      "title": "7.6 Evidence Handling, Retention Periods & DPDP Act Compliance",
      "duration": "60 mins",
      "is_mandatory": true,
      "summary": "Comprehensive instruction covering 7.6 evidence handling, retention periods & dpdp act compliance, procedural frameworks, and verified operational guidelines.",
      "learning_objectives": [
        "Understand the theoretical principles and governance standards behind 7.6 Evidence Handling, Retention Periods & DPDP Act Compliance",
        "Apply technical verification techniques using authorized loopback tools",
        "Analyze visual architecture models and operational process workflows",
        "Record reproducible evidentiary artifacts adhering to professional chain-of-custody standards"
      ],
      "diagram_slots": [
        {
          "id": "fig-05-07-11",
          "asset_path": "/assets/courses/cyber-05/c05_m07_l06_01.png",
          "caption": "Figure 7.11: DPDP Act 2023 & GDPR Data Minimisation Protocol in enterprise authorized penetration testing operations.",
          "placement_hint": "After Section 2 (Core Operational Pillars)"
        },
        {
          "id": "fig-05-07-12",
          "asset_path": "/assets/courses/cyber-05/c05_m07_l06_02.png",
          "caption": "Figure 7.12: Cryptographic Evidence Storage & Secure Deletion Flow workflow and validation mechanics.",
          "placement_hint": "After Section 5 (Process Sequence)"
        }
      ],
      "images": [
        {
          "id": "fig-05-07-11",
          "title": "Evidence Retention & Compliance: DPDP Act 2023 & GDPR Data Minimisation Protocol",
          "url": "/assets/courses/cyber-05/c05_m07_l06_01.png",
          "caption": "Figure 7.11: DPDP Act 2023 & GDPR Data Minimisation Protocol in enterprise authorized penetration testing operations.",
          "alt": "Technical diagram illustrating DPDP Act 2023 & GDPR Data Minimisation Protocol"
        },
        {
          "id": "fig-05-07-12",
          "title": "Evidence Retention & Compliance: Cryptographic Evidence Storage & Secure Deletion Flow",
          "url": "/assets/courses/cyber-05/c05_m07_l06_02.png",
          "caption": "Figure 7.12: Cryptographic Evidence Storage & Secure Deletion Flow workflow and validation mechanics.",
          "alt": "Process workflow diagram showing Cryptographic Evidence Storage & Secure Deletion Flow"
        }
      ],
      "content": "## 1. Executive Concept & Theoretical Overview\n\nEvidence (requests, responses, findings records, screenshots) must be handled\nwith integrity and care: stored securely, access-controlled, and retained only\nas long as needed and agreed. Where it contains personal data, minimise it and\nhandle it per the client's instructions and the law (in India, the DPDP Act\n2023). Record a chain of custody for sensitive evidence (Module 1). At\nengagement end, deliver the agreed evidence with the report and securely\ndispose of the rest per the agreement. In the lab, data/findings.json is\nfictional and local; in a real test, the same record would be handled as\nsensitive client evidence.\n\n--------------------------------------------------------------------------------\n\nProfessional penetration testing is the practice of evaluating computer systems, networks, and web applications to discover security vulnerabilities that an adversary could exploit. Unlike malicious attacks, authorized security testing is conducted with the explicit written permission of the asset owner, within a tightly defined scope, and adhering to strict Rules of Engagement (RoE).\n\n## 2. Core Operational Pillars & Technical Specifications\n\n- **Governance & Authority:** Every technical probe must be anchored to verifiable authority. Testing without written approval violates computer crime legislation regardless of intent.\n- **Boundary Discipline:** Target networks must be precisely bounded by IP CIDR ranges, domain names, and testing windows. Probing adjacent systems or third-party infrastructure constitutes an immediate breach of contract.\n- **Non-Destructive Methodology:** Evaluators prioritize minimal safe proofs of concept, verifying the existence of vulnerabilities without corrupting production databases or exhausting network resources.\n- **Reproducible Evidence:** Findings must be recorded with exact input vectors, raw HTTP headers, terminal outputs, UTC timestamps, and cryptographic hashes to guarantee evidentiary integrity.\n\n![Evidence Retention & Compliance: DPDP Act 2023 & GDPR Data Minimisation Protocol](/assets/courses/cyber-05/c05_m07_l06_01.png)\n\n*Figure 7.11: DPDP Act 2023 & GDPR Data Minimisation Protocol in enterprise authorized penetration testing operations.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Structural Boundary Demarcation:** The diagram visualizes the critical divide between authorized evaluation zones and unauthorized spaces. The central gateway represents the verified authorization boundary.\n- **Component Interactions:** Data flows from left to right through formal sign-off checkpoints. Probes that fail verification are immediately deflected into compliance alert channels.\n- **High-Contrast Indicators:** Amber accents (#FF7A00) demarcate active testing perimeters, while green highlights indicate authorized targets and red flags identify strictly out-of-scope assets.\n\n## 4. Real-World Case Studies & Enterprise Incidents\n\n### Case Study: The Scoping & Authority Gap\n\nIn high-profile enterprise evaluations, jurisdictional confusion between corporate parent entities and regional facility managers has resulted in security personnel facing criminal detention despite possessing valid contracts. Authorisation must originate from the specific entity possessing legal ownership over the target infrastructure.\n\n- **Key Takeaway 1:** Always verify that the authorising signatory possesses direct ownership authority over all enumerated IP CIDRs and physical sites.\n- **Key Takeaway 2:** Establish out-of-band communication channels with the client SOC to de-conflict simulated testing from active adversary intrusions.\n\n## 5. Process Sequence & Operational Execution\n\n![Evidence Retention & Compliance: Cryptographic Evidence Storage & Secure Deletion Flow](/assets/courses/cyber-05/c05_m07_l06_02.png)\n\n*Figure 7.12: Cryptographic Evidence Storage & Secure Deletion Flow workflow and validation mechanics.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Sequential Workflow Pipeline:** Illustrates the end-to-end execution flow, detailing the decision trees, state transitions, and verification milestones.\n- **Feedback & Escalation Loops:** When an anomaly or potential outage trigger occurs, the workflow establishes an immediate freeze and out-of-band notification protocol.\n- **Audit Traceability:** Every operational milestone requires an empirical evidence capture, generating an immutable record for the final deliverables ledger.\n\n## 6. Key Terminology & Standard Definitions\n\n- **Rules of Engagement (RoE):** Contractual document formalizing permissible testing techniques, exclusion matrices, testing time windows, and emergency contacts.\n- **Minimal Proof-of-Concept:** The least intrusive empirical assertion required to definitively prove a vulnerability exists without destabilizing services.\n- **Chain of Custody:** The chronological documentation showing the custody, control, transfer, analysis, and disposition of digital evidence.\n- **Retesting Verification:** Independent re-execution of verified assessment tests against remediated targets to empirically confirm vulnerability closure.\n"
    }
  ]
};
