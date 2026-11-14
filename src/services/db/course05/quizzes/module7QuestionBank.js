/**
 * RedKross Academy - Course 05: Ethical Hacking and Penetration Testing
 * Module 7 Question Bank
 * Total Questions: 200 (100 Medium, 100 Difficult, 0 Easy)
 * Rigorous scenario-driven assessment pool.
 */

export const module7QuestionBank = [
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
    "id": "q_c5_m7_011",
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
    "id": "q_c5_m7_012",
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
    "id": "q_c5_m7_013",
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
    "id": "q_c5_m7_014",
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
    "id": "q_c5_m7_015",
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
    "id": "q_c5_m7_016",
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
    "id": "q_c5_m7_017",
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
    "id": "q_c5_m7_018",
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
    "id": "q_c5_m7_019",
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
    "id": "q_c5_m7_020",
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
    "id": "q_c5_m7_021",
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
    "id": "q_c5_m7_022",
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
    "id": "q_c5_m7_023",
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
    "id": "q_c5_m7_024",
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
    "id": "q_c5_m7_025",
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
    "id": "q_c5_m7_026",
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
    "id": "q_c5_m7_027",
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
    "id": "q_c5_m7_028",
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
    "id": "q_c5_m7_029",
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
    "id": "q_c5_m7_030",
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
    "id": "q_c5_m7_031",
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
    "id": "q_c5_m7_032",
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
    "id": "q_c5_m7_033",
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
    "id": "q_c5_m7_034",
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
    "id": "q_c5_m7_035",
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
    "id": "q_c5_m7_036",
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
    "id": "q_c5_m7_037",
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
    "id": "q_c5_m7_038",
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
    "id": "q_c5_m7_039",
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
    "id": "q_c5_m7_040",
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
    "id": "q_c5_m7_041",
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
    "id": "q_c5_m7_042",
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
    "id": "q_c5_m7_043",
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
    "id": "q_c5_m7_044",
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
    "id": "q_c5_m7_045",
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
    "id": "q_c5_m7_046",
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
    "id": "q_c5_m7_047",
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
    "id": "q_c5_m7_048",
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
    "id": "q_c5_m7_049",
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
    "id": "q_c5_m7_050",
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
    "id": "q_c5_m7_051",
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
    "id": "q_c5_m7_052",
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
    "id": "q_c5_m7_053",
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
    "id": "q_c5_m7_054",
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
    "id": "q_c5_m7_055",
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
    "id": "q_c5_m7_056",
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
    "id": "q_c5_m7_057",
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
    "id": "q_c5_m7_058",
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
    "id": "q_c5_m7_059",
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
    "id": "q_c5_m7_060",
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
    "id": "q_c5_m7_061",
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
    "id": "q_c5_m7_062",
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
    "id": "q_c5_m7_063",
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
    "id": "q_c5_m7_064",
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
    "id": "q_c5_m7_065",
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
    "id": "q_c5_m7_066",
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
    "id": "q_c5_m7_067",
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
    "id": "q_c5_m7_068",
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
    "id": "q_c5_m7_069",
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
    "id": "q_c5_m7_070",
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
    "id": "q_c5_m7_071",
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
    "id": "q_c5_m7_072",
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
    "id": "q_c5_m7_073",
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
    "id": "q_c5_m7_074",
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
    "id": "q_c5_m7_075",
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
    "id": "q_c5_m7_076",
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
    "id": "q_c5_m7_077",
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
    "id": "q_c5_m7_078",
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
    "id": "q_c5_m7_079",
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
    "id": "q_c5_m7_080",
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
    "id": "q_c5_m7_081",
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
    "id": "q_c5_m7_082",
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
    "id": "q_c5_m7_083",
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
    "id": "q_c5_m7_084",
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
    "id": "q_c5_m7_085",
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
    "id": "q_c5_m7_086",
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
    "id": "q_c5_m7_087",
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
    "id": "q_c5_m7_088",
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
    "id": "q_c5_m7_089",
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
    "id": "q_c5_m7_090",
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
    "id": "q_c5_m7_091",
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
    "id": "q_c5_m7_092",
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
    "id": "q_c5_m7_093",
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
    "id": "q_c5_m7_094",
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
    "id": "q_c5_m7_095",
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
    "id": "q_c5_m7_096",
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
    "id": "q_c5_m7_097",
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
    "id": "q_c5_m7_098",
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
    "id": "q_c5_m7_099",
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
    "id": "q_c5_m7_100",
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
  },
  {
    "id": "q_c5_m7_111",
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
    "id": "q_c5_m7_112",
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
    "id": "q_c5_m7_113",
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
    "id": "q_c5_m7_114",
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
    "id": "q_c5_m7_115",
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
    "id": "q_c5_m7_116",
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
    "id": "q_c5_m7_117",
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
    "id": "q_c5_m7_118",
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
    "id": "q_c5_m7_119",
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
    "id": "q_c5_m7_120",
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
  },
  {
    "id": "q_c5_m7_121",
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
    "id": "q_c5_m7_122",
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
    "id": "q_c5_m7_123",
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
    "id": "q_c5_m7_124",
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
    "id": "q_c5_m7_125",
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
    "id": "q_c5_m7_126",
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
    "id": "q_c5_m7_127",
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
    "id": "q_c5_m7_128",
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
    "id": "q_c5_m7_129",
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
    "id": "q_c5_m7_130",
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
  },
  {
    "id": "q_c5_m7_131",
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
    "id": "q_c5_m7_132",
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
    "id": "q_c5_m7_133",
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
    "id": "q_c5_m7_134",
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
    "id": "q_c5_m7_135",
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
    "id": "q_c5_m7_136",
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
    "id": "q_c5_m7_137",
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
    "id": "q_c5_m7_138",
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
    "id": "q_c5_m7_139",
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
    "id": "q_c5_m7_140",
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
  },
  {
    "id": "q_c5_m7_141",
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
    "id": "q_c5_m7_142",
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
    "id": "q_c5_m7_143",
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
    "id": "q_c5_m7_144",
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
    "id": "q_c5_m7_145",
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
    "id": "q_c5_m7_146",
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
    "id": "q_c5_m7_147",
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
    "id": "q_c5_m7_148",
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
    "id": "q_c5_m7_149",
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
    "id": "q_c5_m7_150",
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
  },
  {
    "id": "q_c5_m7_151",
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
    "id": "q_c5_m7_152",
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
    "id": "q_c5_m7_153",
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
    "id": "q_c5_m7_154",
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
    "id": "q_c5_m7_155",
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
    "id": "q_c5_m7_156",
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
    "id": "q_c5_m7_157",
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
    "id": "q_c5_m7_158",
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
    "id": "q_c5_m7_159",
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
    "id": "q_c5_m7_160",
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
  },
  {
    "id": "q_c5_m7_161",
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
    "id": "q_c5_m7_162",
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
    "id": "q_c5_m7_163",
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
    "id": "q_c5_m7_164",
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
    "id": "q_c5_m7_165",
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
    "id": "q_c5_m7_166",
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
    "id": "q_c5_m7_167",
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
    "id": "q_c5_m7_168",
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
    "id": "q_c5_m7_169",
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
    "id": "q_c5_m7_170",
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
  },
  {
    "id": "q_c5_m7_171",
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
    "id": "q_c5_m7_172",
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
    "id": "q_c5_m7_173",
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
    "id": "q_c5_m7_174",
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
    "id": "q_c5_m7_175",
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
    "id": "q_c5_m7_176",
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
    "id": "q_c5_m7_177",
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
    "id": "q_c5_m7_178",
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
    "id": "q_c5_m7_179",
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
    "id": "q_c5_m7_180",
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
  },
  {
    "id": "q_c5_m7_181",
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
    "id": "q_c5_m7_182",
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
    "id": "q_c5_m7_183",
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
    "id": "q_c5_m7_184",
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
    "id": "q_c5_m7_185",
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
    "id": "q_c5_m7_186",
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
    "id": "q_c5_m7_187",
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
    "id": "q_c5_m7_188",
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
    "id": "q_c5_m7_189",
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
    "id": "q_c5_m7_190",
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
  },
  {
    "id": "q_c5_m7_191",
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
    "id": "q_c5_m7_192",
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
    "id": "q_c5_m7_193",
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
    "id": "q_c5_m7_194",
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
    "id": "q_c5_m7_195",
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
    "id": "q_c5_m7_196",
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
    "id": "q_c5_m7_197",
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
    "id": "q_c5_m7_198",
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
    "id": "q_c5_m7_199",
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
    "id": "q_c5_m7_200",
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
];
