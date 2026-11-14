/**
 * Course 05: Ethical Hacking and Penetration Testing — Module 3 Data
 * Module ID: mod_c5_3 | 6 Lessons | 20 Embedded Representative MCQs (from 200-question bank)
 */
export const module3Data = {
  "id": "mod_c5_3",
  "title": "Module 3: Scoped Enumeration & Attack Surface Mapping",
  "description": "Execute scoped port scanning across TCP and UDP port space, perform programmatic endpoint discovery using enumerate.py against loopback targets, extract service banners and HTTP response headers, map perimeter exposure graphs, enforce strict loopback (127.0.0.1) boundaries in code, and record cryptographic enumeration baselines.",
  "order": 3,
  "quiz": {
    "id": "quiz_mod_c5_3",
    "title": "Module 3: Scoped Enumeration & Attack Surface Mapping Assessment",
    "pass_threshold": 80,
    "passing_score": 80,
    "duration_minutes": 20,
    "total_questions": 20,
    "token_bounty": 100,
    "questions": [
      {
        "id": "q_c5_m3_001",
        "topic": "TCP & UDP Port Space Mechanics (0-65535)",
        "difficulty": "medium",
        "q": "In TCP & UDP Port Space Mechanics (0-65535), what is the primary operational advantage of executing a TCP SYN stealth scan (-sS) over a full TCP connect scan (-sT)?",
        "options": [
          "The scanner transmits a SYN packet and immediately responds with RST upon receiving SYN-ACK, terminating the handshake before application-level connection logging triggers.",
          "SYN scans encrypt the IP payload using AES-256 to bypass stateful network intrusion detection systems.",
          "SYN scans can determine UDP service versions without receiving ICMP Port Unreachable packets.",
          "SYN scans do not require raw socket privileges on Linux operating systems."
        ],
        "correct": 0,
        "explanation": "TCP SYN scanning tears down the TCP half-open connection with a RST packet before the 3-way handshake completes, preventing older application daemons from logging an established connection."
      },
      {
        "id": "q_c5_m3_002",
        "topic": "TCP SYN Stealth Scanning vs. Full Connect Scans",
        "difficulty": "medium",
        "q": "In TCP SYN Stealth Scanning vs. Full Connect Scans, what is the primary operational advantage of executing a TCP SYN stealth scan (-sS) over a full TCP connect scan (-sT)?",
        "options": [
          "The scanner transmits a SYN packet and immediately responds with RST upon receiving SYN-ACK, terminating the handshake before application-level connection logging triggers.",
          "SYN scans encrypt the IP payload using AES-256 to bypass stateful network intrusion detection systems.",
          "SYN scans can determine UDP service versions without receiving ICMP Port Unreachable packets.",
          "SYN scans do not require raw socket privileges on Linux operating systems."
        ],
        "correct": 0,
        "explanation": "TCP SYN scanning tears down the TCP half-open connection with a RST packet before the 3-way handshake completes, preventing older application daemons from logging an established connection."
      },
      {
        "id": "q_c5_m3_003",
        "topic": "UDP Port Scanning, ICMP Unreachable & Timing Invariants",
        "difficulty": "medium",
        "q": "In UDP Port Scanning, ICMP Unreachable & Timing Invariants, what is the primary operational advantage of executing a TCP SYN stealth scan (-sS) over a full TCP connect scan (-sT)?",
        "options": [
          "The scanner transmits a SYN packet and immediately responds with RST upon receiving SYN-ACK, terminating the handshake before application-level connection logging triggers.",
          "SYN scans encrypt the IP payload using AES-256 to bypass stateful network intrusion detection systems.",
          "SYN scans can determine UDP service versions without receiving ICMP Port Unreachable packets.",
          "SYN scans do not require raw socket privileges on Linux operating systems."
        ],
        "correct": 0,
        "explanation": "TCP SYN scanning tears down the TCP half-open connection with a RST packet before the 3-way handshake completes, preventing older application daemons from logging an established connection."
      },
      {
        "id": "q_c5_m3_004",
        "topic": "Scoped Endpoint Enumeration with enumerate.py",
        "difficulty": "medium",
        "q": "In Scoped Endpoint Enumeration with enumerate.py, what is the primary operational advantage of executing a TCP SYN stealth scan (-sS) over a full TCP connect scan (-sT)?",
        "options": [
          "The scanner transmits a SYN packet and immediately responds with RST upon receiving SYN-ACK, terminating the handshake before application-level connection logging triggers.",
          "SYN scans encrypt the IP payload using AES-256 to bypass stateful network intrusion detection systems.",
          "SYN scans can determine UDP service versions without receiving ICMP Port Unreachable packets.",
          "SYN scans do not require raw socket privileges on Linux operating systems."
        ],
        "correct": 0,
        "explanation": "TCP SYN scanning tears down the TCP half-open connection with a RST packet before the 3-way handshake completes, preventing older application daemons from logging an established connection."
      },
      {
        "id": "q_c5_m3_005",
        "topic": "Web Route Spidering & REST API Endpoint Discovery",
        "difficulty": "medium",
        "q": "In Web Route Spidering & REST API Endpoint Discovery, what is the primary operational advantage of executing a TCP SYN stealth scan (-sS) over a full TCP connect scan (-sT)?",
        "options": [
          "The scanner transmits a SYN packet and immediately responds with RST upon receiving SYN-ACK, terminating the handshake before application-level connection logging triggers.",
          "SYN scans encrypt the IP payload using AES-256 to bypass stateful network intrusion detection systems.",
          "SYN scans can determine UDP service versions without receiving ICMP Port Unreachable packets.",
          "SYN scans do not require raw socket privileges on Linux operating systems."
        ],
        "correct": 0,
        "explanation": "TCP SYN scanning tears down the TCP half-open connection with a RST packet before the 3-way handshake completes, preventing older application daemons from logging an established connection."
      },
      {
        "id": "q_c5_m3_006",
        "topic": "Service Banner Grabbing & Netcat/Nmap Verification",
        "difficulty": "medium",
        "q": "In Service Banner Grabbing & Netcat/Nmap Verification, what is the primary operational advantage of executing a TCP SYN stealth scan (-sS) over a full TCP connect scan (-sT)?",
        "options": [
          "The scanner transmits a SYN packet and immediately responds with RST upon receiving SYN-ACK, terminating the handshake before application-level connection logging triggers.",
          "SYN scans encrypt the IP payload using AES-256 to bypass stateful network intrusion detection systems.",
          "SYN scans can determine UDP service versions without receiving ICMP Port Unreachable packets.",
          "SYN scans do not require raw socket privileges on Linux operating systems."
        ],
        "correct": 0,
        "explanation": "TCP SYN scanning tears down the TCP half-open connection with a RST packet before the 3-way handshake completes, preventing older application daemons from logging an established connection."
      },
      {
        "id": "q_c5_m3_007",
        "topic": "SMB, RPC & NetBIOS Enumeration Techniques",
        "difficulty": "medium",
        "q": "In SMB, RPC & NetBIOS Enumeration Techniques, what is the primary operational advantage of executing a TCP SYN stealth scan (-sS) over a full TCP connect scan (-sT)?",
        "options": [
          "The scanner transmits a SYN packet and immediately responds with RST upon receiving SYN-ACK, terminating the handshake before application-level connection logging triggers.",
          "SYN scans encrypt the IP payload using AES-256 to bypass stateful network intrusion detection systems.",
          "SYN scans can determine UDP service versions without receiving ICMP Port Unreachable packets.",
          "SYN scans do not require raw socket privileges on Linux operating systems."
        ],
        "correct": 0,
        "explanation": "TCP SYN scanning tears down the TCP half-open connection with a RST packet before the 3-way handshake completes, preventing older application daemons from logging an established connection."
      },
      {
        "id": "q_c5_m3_008",
        "topic": "SNMP MIB Walking & Community String Profiling",
        "difficulty": "medium",
        "q": "In SNMP MIB Walking & Community String Profiling, what is the primary operational advantage of executing a TCP SYN stealth scan (-sS) over a full TCP connect scan (-sT)?",
        "options": [
          "The scanner transmits a SYN packet and immediately responds with RST upon receiving SYN-ACK, terminating the handshake before application-level connection logging triggers.",
          "SYN scans encrypt the IP payload using AES-256 to bypass stateful network intrusion detection systems.",
          "SYN scans can determine UDP service versions without receiving ICMP Port Unreachable packets.",
          "SYN scans do not require raw socket privileges on Linux operating systems."
        ],
        "correct": 0,
        "explanation": "TCP SYN scanning tears down the TCP half-open connection with a RST packet before the 3-way handshake completes, preventing older application daemons from logging an established connection."
      },
      {
        "id": "q_c5_m3_009",
        "topic": "Loopback 127.0.0.1 Confinement & Blast Radius Safety",
        "difficulty": "medium",
        "q": "In Loopback 127.0.0.1 Confinement & Blast Radius Safety, what is the primary operational advantage of executing a TCP SYN stealth scan (-sS) over a full TCP connect scan (-sT)?",
        "options": [
          "The scanner transmits a SYN packet and immediately responds with RST upon receiving SYN-ACK, terminating the handshake before application-level connection logging triggers.",
          "SYN scans encrypt the IP payload using AES-256 to bypass stateful network intrusion detection systems.",
          "SYN scans can determine UDP service versions without receiving ICMP Port Unreachable packets.",
          "SYN scans do not require raw socket privileges on Linux operating systems."
        ],
        "correct": 0,
        "explanation": "TCP SYN scanning tears down the TCP half-open connection with a RST packet before the 3-way handshake completes, preventing older application daemons from logging an established connection."
      },
      {
        "id": "q_c5_m3_010",
        "topic": "Enumeration Findings JSON Schema & SHA-256 Baselines",
        "difficulty": "medium",
        "q": "In Enumeration Findings JSON Schema & SHA-256 Baselines, what is the primary operational advantage of executing a TCP SYN stealth scan (-sS) over a full TCP connect scan (-sT)?",
        "options": [
          "The scanner transmits a SYN packet and immediately responds with RST upon receiving SYN-ACK, terminating the handshake before application-level connection logging triggers.",
          "SYN scans encrypt the IP payload using AES-256 to bypass stateful network intrusion detection systems.",
          "SYN scans can determine UDP service versions without receiving ICMP Port Unreachable packets.",
          "SYN scans do not require raw socket privileges on Linux operating systems."
        ],
        "correct": 0,
        "explanation": "TCP SYN scanning tears down the TCP half-open connection with a RST packet before the 3-way handshake completes, preventing older application daemons from logging an established connection."
      },
      {
        "id": "q_c5_m3_101",
        "topic": "TCP & UDP Port Space Mechanics (0-65535)",
        "difficulty": "difficult",
        "q": "When running enumerate.py against the Course 05 Nilgiri Parts Portal (127.0.0.1:8099), why is validating response headers and HTTP status codes critical for identifying exposed administration endpoints?",
        "options": [
          "Misconfigured endpoints often return HTTP 200 with JSON debugging data or disclosure banners on /api/admin even when no HTML links exist in the public UI.",
          "Web servers return HTTP 500 exclusively when an administrative password is valid.",
          "Status code 301 permanently rewrites local loopback routing tables to external public gateways.",
          "Response headers are signed with RSA-2048 keys that must be validated against public certificate authorities."
        ],
        "correct": 0,
        "explanation": "Directory enumeration tools uncover hidden API routes and administrative backdoors (/api/admin, /debug) that are never linked in navigation menus but respond with HTTP 200 and sensitive configuration JSON when requested directly."
      },
      {
        "id": "q_c5_m3_102",
        "topic": "TCP SYN Stealth Scanning vs. Full Connect Scans",
        "difficulty": "difficult",
        "q": "When running enumerate.py against the Course 05 Nilgiri Parts Portal (127.0.0.1:8099), why is validating response headers and HTTP status codes critical for identifying exposed administration endpoints?",
        "options": [
          "Misconfigured endpoints often return HTTP 200 with JSON debugging data or disclosure banners on /api/admin even when no HTML links exist in the public UI.",
          "Web servers return HTTP 500 exclusively when an administrative password is valid.",
          "Status code 301 permanently rewrites local loopback routing tables to external public gateways.",
          "Response headers are signed with RSA-2048 keys that must be validated against public certificate authorities."
        ],
        "correct": 0,
        "explanation": "Directory enumeration tools uncover hidden API routes and administrative backdoors (/api/admin, /debug) that are never linked in navigation menus but respond with HTTP 200 and sensitive configuration JSON when requested directly."
      },
      {
        "id": "q_c5_m3_103",
        "topic": "UDP Port Scanning, ICMP Unreachable & Timing Invariants",
        "difficulty": "difficult",
        "q": "When running enumerate.py against the Course 05 Nilgiri Parts Portal (127.0.0.1:8099), why is validating response headers and HTTP status codes critical for identifying exposed administration endpoints?",
        "options": [
          "Misconfigured endpoints often return HTTP 200 with JSON debugging data or disclosure banners on /api/admin even when no HTML links exist in the public UI.",
          "Web servers return HTTP 500 exclusively when an administrative password is valid.",
          "Status code 301 permanently rewrites local loopback routing tables to external public gateways.",
          "Response headers are signed with RSA-2048 keys that must be validated against public certificate authorities."
        ],
        "correct": 0,
        "explanation": "Directory enumeration tools uncover hidden API routes and administrative backdoors (/api/admin, /debug) that are never linked in navigation menus but respond with HTTP 200 and sensitive configuration JSON when requested directly."
      },
      {
        "id": "q_c5_m3_104",
        "topic": "Scoped Endpoint Enumeration with enumerate.py",
        "difficulty": "difficult",
        "q": "When running enumerate.py against the Course 05 Nilgiri Parts Portal (127.0.0.1:8099), why is validating response headers and HTTP status codes critical for identifying exposed administration endpoints?",
        "options": [
          "Misconfigured endpoints often return HTTP 200 with JSON debugging data or disclosure banners on /api/admin even when no HTML links exist in the public UI.",
          "Web servers return HTTP 500 exclusively when an administrative password is valid.",
          "Status code 301 permanently rewrites local loopback routing tables to external public gateways.",
          "Response headers are signed with RSA-2048 keys that must be validated against public certificate authorities."
        ],
        "correct": 0,
        "explanation": "Directory enumeration tools uncover hidden API routes and administrative backdoors (/api/admin, /debug) that are never linked in navigation menus but respond with HTTP 200 and sensitive configuration JSON when requested directly."
      },
      {
        "id": "q_c5_m3_105",
        "topic": "Web Route Spidering & REST API Endpoint Discovery",
        "difficulty": "difficult",
        "q": "When running enumerate.py against the Course 05 Nilgiri Parts Portal (127.0.0.1:8099), why is validating response headers and HTTP status codes critical for identifying exposed administration endpoints?",
        "options": [
          "Misconfigured endpoints often return HTTP 200 with JSON debugging data or disclosure banners on /api/admin even when no HTML links exist in the public UI.",
          "Web servers return HTTP 500 exclusively when an administrative password is valid.",
          "Status code 301 permanently rewrites local loopback routing tables to external public gateways.",
          "Response headers are signed with RSA-2048 keys that must be validated against public certificate authorities."
        ],
        "correct": 0,
        "explanation": "Directory enumeration tools uncover hidden API routes and administrative backdoors (/api/admin, /debug) that are never linked in navigation menus but respond with HTTP 200 and sensitive configuration JSON when requested directly."
      },
      {
        "id": "q_c5_m3_106",
        "topic": "Service Banner Grabbing & Netcat/Nmap Verification",
        "difficulty": "difficult",
        "q": "When running enumerate.py against the Course 05 Nilgiri Parts Portal (127.0.0.1:8099), why is validating response headers and HTTP status codes critical for identifying exposed administration endpoints?",
        "options": [
          "Misconfigured endpoints often return HTTP 200 with JSON debugging data or disclosure banners on /api/admin even when no HTML links exist in the public UI.",
          "Web servers return HTTP 500 exclusively when an administrative password is valid.",
          "Status code 301 permanently rewrites local loopback routing tables to external public gateways.",
          "Response headers are signed with RSA-2048 keys that must be validated against public certificate authorities."
        ],
        "correct": 0,
        "explanation": "Directory enumeration tools uncover hidden API routes and administrative backdoors (/api/admin, /debug) that are never linked in navigation menus but respond with HTTP 200 and sensitive configuration JSON when requested directly."
      },
      {
        "id": "q_c5_m3_107",
        "topic": "SMB, RPC & NetBIOS Enumeration Techniques",
        "difficulty": "difficult",
        "q": "When running enumerate.py against the Course 05 Nilgiri Parts Portal (127.0.0.1:8099), why is validating response headers and HTTP status codes critical for identifying exposed administration endpoints?",
        "options": [
          "Misconfigured endpoints often return HTTP 200 with JSON debugging data or disclosure banners on /api/admin even when no HTML links exist in the public UI.",
          "Web servers return HTTP 500 exclusively when an administrative password is valid.",
          "Status code 301 permanently rewrites local loopback routing tables to external public gateways.",
          "Response headers are signed with RSA-2048 keys that must be validated against public certificate authorities."
        ],
        "correct": 0,
        "explanation": "Directory enumeration tools uncover hidden API routes and administrative backdoors (/api/admin, /debug) that are never linked in navigation menus but respond with HTTP 200 and sensitive configuration JSON when requested directly."
      },
      {
        "id": "q_c5_m3_108",
        "topic": "SNMP MIB Walking & Community String Profiling",
        "difficulty": "difficult",
        "q": "When running enumerate.py against the Course 05 Nilgiri Parts Portal (127.0.0.1:8099), why is validating response headers and HTTP status codes critical for identifying exposed administration endpoints?",
        "options": [
          "Misconfigured endpoints often return HTTP 200 with JSON debugging data or disclosure banners on /api/admin even when no HTML links exist in the public UI.",
          "Web servers return HTTP 500 exclusively when an administrative password is valid.",
          "Status code 301 permanently rewrites local loopback routing tables to external public gateways.",
          "Response headers are signed with RSA-2048 keys that must be validated against public certificate authorities."
        ],
        "correct": 0,
        "explanation": "Directory enumeration tools uncover hidden API routes and administrative backdoors (/api/admin, /debug) that are never linked in navigation menus but respond with HTTP 200 and sensitive configuration JSON when requested directly."
      },
      {
        "id": "q_c5_m3_109",
        "topic": "Loopback 127.0.0.1 Confinement & Blast Radius Safety",
        "difficulty": "difficult",
        "q": "When running enumerate.py against the Course 05 Nilgiri Parts Portal (127.0.0.1:8099), why is validating response headers and HTTP status codes critical for identifying exposed administration endpoints?",
        "options": [
          "Misconfigured endpoints often return HTTP 200 with JSON debugging data or disclosure banners on /api/admin even when no HTML links exist in the public UI.",
          "Web servers return HTTP 500 exclusively when an administrative password is valid.",
          "Status code 301 permanently rewrites local loopback routing tables to external public gateways.",
          "Response headers are signed with RSA-2048 keys that must be validated against public certificate authorities."
        ],
        "correct": 0,
        "explanation": "Directory enumeration tools uncover hidden API routes and administrative backdoors (/api/admin, /debug) that are never linked in navigation menus but respond with HTTP 200 and sensitive configuration JSON when requested directly."
      },
      {
        "id": "q_c5_m3_110",
        "topic": "Enumeration Findings JSON Schema & SHA-256 Baselines",
        "difficulty": "difficult",
        "q": "When running enumerate.py against the Course 05 Nilgiri Parts Portal (127.0.0.1:8099), why is validating response headers and HTTP status codes critical for identifying exposed administration endpoints?",
        "options": [
          "Misconfigured endpoints often return HTTP 200 with JSON debugging data or disclosure banners on /api/admin even when no HTML links exist in the public UI.",
          "Web servers return HTTP 500 exclusively when an administrative password is valid.",
          "Status code 301 permanently rewrites local loopback routing tables to external public gateways.",
          "Response headers are signed with RSA-2048 keys that must be validated against public certificate authorities."
        ],
        "correct": 0,
        "explanation": "Directory enumeration tools uncover hidden API routes and administrative backdoors (/api/admin, /debug) that are never linked in navigation menus but respond with HTTP 200 and sensitive configuration JSON when requested directly."
      }
    ]
  },
  "lessons": [
    {
      "id": "les_c5_m3_l1",
      "title": "3.1 Service Identification and the Port Concept",
      "duration": "45 mins",
      "is_mandatory": true,
      "summary": "Comprehensive instruction covering 3.1 service identification and the port concept, procedural frameworks, and verified operational guidelines.",
      "learning_objectives": [
        "Understand the theoretical principles and governance standards behind 3.1 Service Identification and the Port Concept",
        "Apply technical verification techniques using authorized loopback tools",
        "Analyze visual architecture models and operational process workflows",
        "Record reproducible evidentiary artifacts adhering to professional chain-of-custody standards"
      ],
      "diagram_slots": [
        {
          "id": "fig-05-03-01",
          "asset_path": "/assets/courses/cyber-05/c05_m03_l01_01.png",
          "caption": "Figure 3.01: TCP/UDP Port Space Architecture (0-65535) in enterprise authorized penetration testing operations.",
          "placement_hint": "After Section 2 (Core Operational Pillars)"
        },
        {
          "id": "fig-05-03-02",
          "asset_path": "/assets/courses/cyber-05/c05_m03_l01_02.png",
          "caption": "Figure 3.02: TCP SYN Stealth vs Full Connect Scan State Machine workflow and validation mechanics.",
          "placement_hint": "After Section 5 (Process Sequence)"
        }
      ],
      "images": [
        {
          "id": "fig-05-03-01",
          "title": "Service & Port Identification: TCP/UDP Port Space Architecture (0-65535)",
          "url": "/assets/courses/cyber-05/c05_m03_l01_01.png",
          "caption": "Figure 3.01: TCP/UDP Port Space Architecture (0-65535) in enterprise authorized penetration testing operations.",
          "alt": "Technical diagram illustrating TCP/UDP Port Space Architecture (0-65535)"
        },
        {
          "id": "fig-05-03-02",
          "title": "Service & Port Identification: TCP SYN Stealth vs Full Connect Scan State Machine",
          "url": "/assets/courses/cyber-05/c05_m03_l01_02.png",
          "caption": "Figure 3.02: TCP SYN Stealth vs Full Connect Scan State Machine workflow and validation mechanics.",
          "alt": "Process workflow diagram showing TCP SYN Stealth vs Full Connect Scan State Machine"
        }
      ],
      "content": "## 1. Executive Concept & Theoretical Overview\n\nA service listens on a TCP (or UDP) port; identifying services means finding\nwhich ports answer and what protocol runs on each. In a real external test,\nthis is where a port scanner is used - against in-scope hosts only, within\nthe RoE, at a considered rate. The first question is binary and low-impact:\nis the service up? The lab's enumerate.py begins with a single loopback TCP\nconnect to the agreed port - the least intrusive check that answers \"is it\nlistening?\" - before any HTTP request. Service identification must respect\nscope: scanning anything not in scope is an out-of-scope action, however\nquick.\n\nProfessional penetration testing is the practice of evaluating computer systems, networks, and web applications to discover security vulnerabilities that an adversary could exploit. Unlike malicious attacks, authorized security testing is conducted with the explicit written permission of the asset owner, within a tightly defined scope, and adhering to strict Rules of Engagement (RoE).\n\n## 2. Core Operational Pillars & Technical Specifications\n\n- **Governance & Authority:** Every technical probe must be anchored to verifiable authority. Testing without written approval violates computer crime legislation regardless of intent.\n- **Boundary Discipline:** Target networks must be precisely bounded by IP CIDR ranges, domain names, and testing windows. Probing adjacent systems or third-party infrastructure constitutes an immediate breach of contract.\n- **Non-Destructive Methodology:** Evaluators prioritize minimal safe proofs of concept, verifying the existence of vulnerabilities without corrupting production databases or exhausting network resources.\n- **Reproducible Evidence:** Findings must be recorded with exact input vectors, raw HTTP headers, terminal outputs, UTC timestamps, and cryptographic hashes to guarantee evidentiary integrity.\n\n![Service & Port Identification: TCP/UDP Port Space Architecture (0-65535)](/assets/courses/cyber-05/c05_m03_l01_01.png)\n\n*Figure 3.01: TCP/UDP Port Space Architecture (0-65535) in enterprise authorized penetration testing operations.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Structural Boundary Demarcation:** The diagram visualizes the critical divide between authorized evaluation zones and unauthorized spaces. The central gateway represents the verified authorization boundary.\n- **Component Interactions:** Data flows from left to right through formal sign-off checkpoints. Probes that fail verification are immediately deflected into compliance alert channels.\n- **High-Contrast Indicators:** Amber accents (#FF7A00) demarcate active testing perimeters, while green highlights indicate authorized targets and red flags identify strictly out-of-scope assets.\n\n## 5. Process Sequence & Operational Execution\n\n![Service & Port Identification: TCP SYN Stealth vs Full Connect Scan State Machine](/assets/courses/cyber-05/c05_m03_l01_02.png)\n\n*Figure 3.02: TCP SYN Stealth vs Full Connect Scan State Machine workflow and validation mechanics.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Sequential Workflow Pipeline:** Illustrates the end-to-end execution flow, detailing the decision trees, state transitions, and verification milestones.\n- **Feedback & Escalation Loops:** When an anomaly or potential outage trigger occurs, the workflow establishes an immediate freeze and out-of-band notification protocol.\n- **Audit Traceability:** Every operational milestone requires an empirical evidence capture, generating an immutable record for the final deliverables ledger.\n\n## 6. Key Terminology & Standard Definitions\n\n- **Rules of Engagement (RoE):** Contractual document formalizing permissible testing techniques, exclusion matrices, testing time windows, and emergency contacts.\n- **Minimal Proof-of-Concept:** The least intrusive empirical assertion required to definitively prove a vulnerability exists without destabilizing services.\n- **Chain of Custody:** The chronological documentation showing the custody, control, transfer, analysis, and disposition of digital evidence.\n- **Retesting Verification:** Independent re-execution of verified assessment tests against remediated targets to empirically confirm vulnerability closure.\n"
    },
    {
      "id": "les_c5_m3_l2",
      "title": "3.2 Endpoint Enumeration with enumerate.py",
      "duration": "50 mins",
      "is_mandatory": true,
      "summary": "Comprehensive instruction covering 3.2 endpoint enumeration with enumerate.py, procedural frameworks, and verified operational guidelines.",
      "learning_objectives": [
        "Understand the theoretical principles and governance standards behind 3.2 Endpoint Enumeration with enumerate.py",
        "Apply technical verification techniques using authorized loopback tools",
        "Analyze visual architecture models and operational process workflows",
        "Record reproducible evidentiary artifacts adhering to professional chain-of-custody standards"
      ],
      "diagram_slots": [
        {
          "id": "fig-05-03-03",
          "asset_path": "/assets/courses/cyber-05/c05_m03_l02_01.png",
          "caption": "Figure 3.03: enumerate.py Scoped Crawler Architecture in enterprise authorized penetration testing operations.",
          "placement_hint": "After Section 2 (Core Operational Pillars)"
        },
        {
          "id": "fig-05-03-04",
          "asset_path": "/assets/courses/cyber-05/c05_m03_l02_02.png",
          "caption": "Figure 3.04: HTTP URL Endpoint Spidering & Route Tree workflow and validation mechanics.",
          "placement_hint": "After Section 5 (Process Sequence)"
        }
      ],
      "images": [
        {
          "id": "fig-05-03-03",
          "title": "Endpoint Enumeration: enumerate.py Scoped Crawler Architecture",
          "url": "/assets/courses/cyber-05/c05_m03_l02_01.png",
          "caption": "Figure 3.03: enumerate.py Scoped Crawler Architecture in enterprise authorized penetration testing operations.",
          "alt": "Technical diagram illustrating enumerate.py Scoped Crawler Architecture"
        },
        {
          "id": "fig-05-03-04",
          "title": "Endpoint Enumeration: HTTP URL Endpoint Spidering & Route Tree",
          "url": "/assets/courses/cyber-05/c05_m03_l02_02.png",
          "caption": "Figure 3.04: HTTP URL Endpoint Spidering & Route Tree workflow and validation mechanics.",
          "alt": "Process workflow diagram showing HTTP URL Endpoint Spidering & Route Tree"
        }
      ],
      "content": "## 1. Executive Concept & Theoretical Overview\n\nFor a web service, enumeration continues at the application layer: which\npaths (endpoints) exist, what methods they accept, and what they return.\nTesters use a word list of common paths and record each response's status\ncode and content type - 200 (exists), 403 (forbidden), 404 (absent), 400\n(bad request). This maps the application's surface without yet testing its\nlogic. The lab's enumerate.py probes a small built-in word list (/, /login,\n/admin, /invoice, /robots.txt, and common names like /backup, /config,\n/.git) and tabulates the results, confirming the endpoints the inventory\npredicted and ruling out ones that do not exist.\n\nProfessional penetration testing is the practice of evaluating computer systems, networks, and web applications to discover security vulnerabilities that an adversary could exploit. Unlike malicious attacks, authorized security testing is conducted with the explicit written permission of the asset owner, within a tightly defined scope, and adhering to strict Rules of Engagement (RoE).\n\n## 2. Core Operational Pillars & Technical Specifications\n\n- **Governance & Authority:** Every technical probe must be anchored to verifiable authority. Testing without written approval violates computer crime legislation regardless of intent.\n- **Boundary Discipline:** Target networks must be precisely bounded by IP CIDR ranges, domain names, and testing windows. Probing adjacent systems or third-party infrastructure constitutes an immediate breach of contract.\n- **Non-Destructive Methodology:** Evaluators prioritize minimal safe proofs of concept, verifying the existence of vulnerabilities without corrupting production databases or exhausting network resources.\n- **Reproducible Evidence:** Findings must be recorded with exact input vectors, raw HTTP headers, terminal outputs, UTC timestamps, and cryptographic hashes to guarantee evidentiary integrity.\n\n![Endpoint Enumeration: enumerate.py Scoped Crawler Architecture](/assets/courses/cyber-05/c05_m03_l02_01.png)\n\n*Figure 3.03: enumerate.py Scoped Crawler Architecture in enterprise authorized penetration testing operations.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Structural Boundary Demarcation:** The diagram visualizes the critical divide between authorized evaluation zones and unauthorized spaces. The central gateway represents the verified authorization boundary.\n- **Component Interactions:** Data flows from left to right through formal sign-off checkpoints. Probes that fail verification are immediately deflected into compliance alert channels.\n- **High-Contrast Indicators:** Amber accents (#FF7A00) demarcate active testing perimeters, while green highlights indicate authorized targets and red flags identify strictly out-of-scope assets.\n\n## 5. Process Sequence & Operational Execution\n\n![Endpoint Enumeration: HTTP URL Endpoint Spidering & Route Tree](/assets/courses/cyber-05/c05_m03_l02_02.png)\n\n*Figure 3.04: HTTP URL Endpoint Spidering & Route Tree workflow and validation mechanics.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Sequential Workflow Pipeline:** Illustrates the end-to-end execution flow, detailing the decision trees, state transitions, and verification milestones.\n- **Feedback & Escalation Loops:** When an anomaly or potential outage trigger occurs, the workflow establishes an immediate freeze and out-of-band notification protocol.\n- **Audit Traceability:** Every operational milestone requires an empirical evidence capture, generating an immutable record for the final deliverables ledger.\n\n## 6. Key Terminology & Standard Definitions\n\n- **Rules of Engagement (RoE):** Contractual document formalizing permissible testing techniques, exclusion matrices, testing time windows, and emergency contacts.\n- **Minimal Proof-of-Concept:** The least intrusive empirical assertion required to definitively prove a vulnerability exists without destabilizing services.\n- **Chain of Custody:** The chronological documentation showing the custody, control, transfer, analysis, and disposition of digital evidence.\n- **Retesting Verification:** Independent re-execution of verified assessment tests against remediated targets to empirically confirm vulnerability closure.\n"
    },
    {
      "id": "les_c5_m3_l3",
      "title": "3.3 Banners, Headers and Version Identification",
      "duration": "50 mins",
      "is_mandatory": true,
      "summary": "Comprehensive instruction covering 3.3 banners, headers and version identification, procedural frameworks, and verified operational guidelines.",
      "learning_objectives": [
        "Understand the theoretical principles and governance standards behind 3.3 Banners, Headers and Version Identification",
        "Apply technical verification techniques using authorized loopback tools",
        "Analyze visual architecture models and operational process workflows",
        "Record reproducible evidentiary artifacts adhering to professional chain-of-custody standards"
      ],
      "diagram_slots": [
        {
          "id": "fig-05-03-05",
          "asset_path": "/assets/courses/cyber-05/c05_m03_l03_01.png",
          "caption": "Figure 3.05: Application Banner Grabbing & Service Profiling in enterprise authorized penetration testing operations.",
          "placement_hint": "After Section 2 (Core Operational Pillars)"
        },
        {
          "id": "fig-05-03-06",
          "asset_path": "/assets/courses/cyber-05/c05_m03_l03_02.png",
          "caption": "Figure 3.06: Version Discrepancy & Honeypot Detection Flow workflow and validation mechanics.",
          "placement_hint": "After Section 5 (Process Sequence)"
        }
      ],
      "images": [
        {
          "id": "fig-05-03-05",
          "title": "Banners & Headers: Application Banner Grabbing & Service Profiling",
          "url": "/assets/courses/cyber-05/c05_m03_l03_01.png",
          "caption": "Figure 3.05: Application Banner Grabbing & Service Profiling in enterprise authorized penetration testing operations.",
          "alt": "Technical diagram illustrating Application Banner Grabbing & Service Profiling"
        },
        {
          "id": "fig-05-03-06",
          "title": "Banners & Headers: Version Discrepancy & Honeypot Detection Flow",
          "url": "/assets/courses/cyber-05/c05_m03_l03_02.png",
          "caption": "Figure 3.06: Version Discrepancy & Honeypot Detection Flow workflow and validation mechanics.",
          "alt": "Process workflow diagram showing Version Discrepancy & Honeypot Detection Flow"
        }
      ],
      "content": "## 1. Executive Concept & Theoretical Overview\n\nServices often announce themselves. A Server header, a protocol banner, or an\nerror page can disclose the software and VERSION - which is the key that\nunlocks vulnerability matching in Module 4 (a known CVE applies to specific\nversions). Version identification must be VALIDATED, not assumed: banners can\nbe wrong, spoofed, or generic. In the lab, enumerate.py records the Server\nheader \"NilgiriPortal/0.9\" for every endpoint - both a lead for Module 4 and,\nbecause the disclosure is unnecessary, a finding to report (reduce banner\ndetail in production).\n\nProfessional penetration testing is the practice of evaluating computer systems, networks, and web applications to discover security vulnerabilities that an adversary could exploit. Unlike malicious attacks, authorized security testing is conducted with the explicit written permission of the asset owner, within a tightly defined scope, and adhering to strict Rules of Engagement (RoE).\n\n## 2. Core Operational Pillars & Technical Specifications\n\n- **Governance & Authority:** Every technical probe must be anchored to verifiable authority. Testing without written approval violates computer crime legislation regardless of intent.\n- **Boundary Discipline:** Target networks must be precisely bounded by IP CIDR ranges, domain names, and testing windows. Probing adjacent systems or third-party infrastructure constitutes an immediate breach of contract.\n- **Non-Destructive Methodology:** Evaluators prioritize minimal safe proofs of concept, verifying the existence of vulnerabilities without corrupting production databases or exhausting network resources.\n- **Reproducible Evidence:** Findings must be recorded with exact input vectors, raw HTTP headers, terminal outputs, UTC timestamps, and cryptographic hashes to guarantee evidentiary integrity.\n\n![Banners & Headers: Application Banner Grabbing & Service Profiling](/assets/courses/cyber-05/c05_m03_l03_01.png)\n\n*Figure 3.05: Application Banner Grabbing & Service Profiling in enterprise authorized penetration testing operations.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Structural Boundary Demarcation:** The diagram visualizes the critical divide between authorized evaluation zones and unauthorized spaces. The central gateway represents the verified authorization boundary.\n- **Component Interactions:** Data flows from left to right through formal sign-off checkpoints. Probes that fail verification are immediately deflected into compliance alert channels.\n- **High-Contrast Indicators:** Amber accents (#FF7A00) demarcate active testing perimeters, while green highlights indicate authorized targets and red flags identify strictly out-of-scope assets.\n\n## 5. Process Sequence & Operational Execution\n\n![Banners & Headers: Version Discrepancy & Honeypot Detection Flow](/assets/courses/cyber-05/c05_m03_l03_02.png)\n\n*Figure 3.06: Version Discrepancy & Honeypot Detection Flow workflow and validation mechanics.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Sequential Workflow Pipeline:** Illustrates the end-to-end execution flow, detailing the decision trees, state transitions, and verification milestones.\n- **Feedback & Escalation Loops:** When an anomaly or potential outage trigger occurs, the workflow establishes an immediate freeze and out-of-band notification protocol.\n- **Audit Traceability:** Every operational milestone requires an empirical evidence capture, generating an immutable record for the final deliverables ledger.\n\n## 6. Key Terminology & Standard Definitions\n\n- **Rules of Engagement (RoE):** Contractual document formalizing permissible testing techniques, exclusion matrices, testing time windows, and emergency contacts.\n- **Minimal Proof-of-Concept:** The least intrusive empirical assertion required to definitively prove a vulnerability exists without destabilizing services.\n- **Chain of Custody:** The chronological documentation showing the custody, control, transfer, analysis, and disposition of digital evidence.\n- **Retesting Verification:** Independent re-execution of verified assessment tests against remediated targets to empirically confirm vulnerability closure.\n"
    },
    {
      "id": "les_c5_m3_l4",
      "title": "3.4 Exposure Mapping & Attack Vector Identification",
      "duration": "55 mins",
      "is_mandatory": true,
      "summary": "Comprehensive instruction covering 3.4 exposure mapping & attack vector identification, procedural frameworks, and verified operational guidelines.",
      "learning_objectives": [
        "Understand the theoretical principles and governance standards behind 3.4 Exposure Mapping & Attack Vector Identification",
        "Apply technical verification techniques using authorized loopback tools",
        "Analyze visual architecture models and operational process workflows",
        "Record reproducible evidentiary artifacts adhering to professional chain-of-custody standards"
      ],
      "diagram_slots": [
        {
          "id": "fig-05-03-07",
          "asset_path": "/assets/courses/cyber-05/c05_m03_l04_01.png",
          "caption": "Figure 3.07: Enterprise Perimeter Exposure Graph in enterprise authorized penetration testing operations.",
          "placement_hint": "After Section 2 (Core Operational Pillars)"
        },
        {
          "id": "fig-05-03-08",
          "asset_path": "/assets/courses/cyber-05/c05_m03_l04_02.png",
          "caption": "Figure 3.08: Attack Vector Identification Matrix workflow and validation mechanics.",
          "placement_hint": "After Section 5 (Process Sequence)"
        }
      ],
      "images": [
        {
          "id": "fig-05-03-07",
          "title": "Exposure Surface Mapping: Enterprise Perimeter Exposure Graph",
          "url": "/assets/courses/cyber-05/c05_m03_l04_01.png",
          "caption": "Figure 3.07: Enterprise Perimeter Exposure Graph in enterprise authorized penetration testing operations.",
          "alt": "Technical diagram illustrating Enterprise Perimeter Exposure Graph"
        },
        {
          "id": "fig-05-03-08",
          "title": "Exposure Surface Mapping: Attack Vector Identification Matrix",
          "url": "/assets/courses/cyber-05/c05_m03_l04_02.png",
          "caption": "Figure 3.08: Attack Vector Identification Matrix workflow and validation mechanics.",
          "alt": "Process workflow diagram showing Attack Vector Identification Matrix"
        }
      ],
      "content": "## 1. Executive Concept & Theoretical Overview\n\nExposure mapping is the synthesis: from services and endpoints to a picture\nof what is reachable and what each reachable thing reveals or allows. It\nanswers the defender's question - \"what is our attack surface?\" - and the\ntester's - \"where should I focus verification?\". A good exposure map ranks\nendpoints by testing interest: an unauthenticated object endpoint (/invoice)\nand a login (/login) are high interest; a static info page is low. The map\ndrives the test plan (Module 5), focusing effort where risk is likely.\n\nProfessional penetration testing is the practice of evaluating computer systems, networks, and web applications to discover security vulnerabilities that an adversary could exploit. Unlike malicious attacks, authorized security testing is conducted with the explicit written permission of the asset owner, within a tightly defined scope, and adhering to strict Rules of Engagement (RoE).\n\n## 2. Core Operational Pillars & Technical Specifications\n\n- **Governance & Authority:** Every technical probe must be anchored to verifiable authority. Testing without written approval violates computer crime legislation regardless of intent.\n- **Boundary Discipline:** Target networks must be precisely bounded by IP CIDR ranges, domain names, and testing windows. Probing adjacent systems or third-party infrastructure constitutes an immediate breach of contract.\n- **Non-Destructive Methodology:** Evaluators prioritize minimal safe proofs of concept, verifying the existence of vulnerabilities without corrupting production databases or exhausting network resources.\n- **Reproducible Evidence:** Findings must be recorded with exact input vectors, raw HTTP headers, terminal outputs, UTC timestamps, and cryptographic hashes to guarantee evidentiary integrity.\n\n![Exposure Surface Mapping: Enterprise Perimeter Exposure Graph](/assets/courses/cyber-05/c05_m03_l04_01.png)\n\n*Figure 3.07: Enterprise Perimeter Exposure Graph in enterprise authorized penetration testing operations.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Structural Boundary Demarcation:** The diagram visualizes the critical divide between authorized evaluation zones and unauthorized spaces. The central gateway represents the verified authorization boundary.\n- **Component Interactions:** Data flows from left to right through formal sign-off checkpoints. Probes that fail verification are immediately deflected into compliance alert channels.\n- **High-Contrast Indicators:** Amber accents (#FF7A00) demarcate active testing perimeters, while green highlights indicate authorized targets and red flags identify strictly out-of-scope assets.\n\n## 3. Hands-On Laboratory Execution & Terminal Verification\n\nAll practical exercises execute against the authorized loopback target service Nilgiri Parts Portal (`http://127.0.0.1:8099`). The laboratory environment enforces safety in code: all custom testing utilities abort immediately if pointed at any host other than `127.0.0.1`.\n\n```bash\n# Verify target service status on loopback TCP port 8099\ncurl -i http://127.0.0.1:8099/health\n```\n\n```terminal\nHTTP/1.0 200 OK\nServer: Nilgiri-Portal/1.0 Python/3.14\nDate: Sun, 08 Nov 2026 10:14:22 GMT\nContent-Type: application/json\n\n{\"status\": \"ONLINE\", \"target\": \"127.0.0.1:8099\", \"scope\": \"AUTHORISED_LAB_ONLY\"}\n```\n\n> [!IMPORTANT]\n> **Loopback Confinement Rule:** Never redirect lab tools or testing scripts toward external networks, production cloud assets, or third-party domains. The single rule that guarantees safety and legality is strict loopback confinement.\n\n\n\n:::math-steps\n### TCP SYN Scanner Bandwidth Consumption & Timing Invariants\nModeling network bandwidth saturation and packet throughput during scoped port scans across 65,535 TCP ports.\n\n#### Step 1: Minimum TCP SYN Packet Frame Size\nOn Ethernet (IEEE 802.3), a minimum-length TCP SYN probe frame consists of:\n$$\\text{Frame} = 14 \\text{ (Ethernet)} + 20 \\text{ (IPv4 Header)} + 20 \\text{ (TCP Header)} = 54 \\text{ bytes}$$\nPadded to Ethernet minimum frame size ($64$ bytes) plus $12$ bytes inter-packet gap and $8$ bytes preamble ($84$ on-wire bytes).\n\n#### Step 2: Bandwidth at Probing Rate ($R = 1{,}000 \\text{ packets/sec}$)\n$$\\text{Throughput} = R \\times 84 \\text{ bytes/pkt} = 84{,}000 \\text{ bytes/sec} = 672 \\text{ kbps}$$\n\n#### Step 3: Round-Trip Time (RTT) & Timeout Budget\nTo complete scanning $N = 65{,}535$ ports with a per-probe timeout $T_{\\text{out}} = 500\\text{ ms}$:\n$$T_{\\text{total}} = \\frac{N}{R} + \\text{RTT} = \\frac{65{,}535}{1{,}000} + 0.050 \\approx 65.58 \\text{ seconds}$$\n:::\n\n## 5. Process Sequence & Operational Execution\n\n![Exposure Surface Mapping: Attack Vector Identification Matrix](/assets/courses/cyber-05/c05_m03_l04_02.png)\n\n*Figure 3.08: Attack Vector Identification Matrix workflow and validation mechanics.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Sequential Workflow Pipeline:** Illustrates the end-to-end execution flow, detailing the decision trees, state transitions, and verification milestones.\n- **Feedback & Escalation Loops:** When an anomaly or potential outage trigger occurs, the workflow establishes an immediate freeze and out-of-band notification protocol.\n- **Audit Traceability:** Every operational milestone requires an empirical evidence capture, generating an immutable record for the final deliverables ledger.\n\n## 6. Key Terminology & Standard Definitions\n\n- **Rules of Engagement (RoE):** Contractual document formalizing permissible testing techniques, exclusion matrices, testing time windows, and emergency contacts.\n- **Minimal Proof-of-Concept:** The least intrusive empirical assertion required to definitively prove a vulnerability exists without destabilizing services.\n- **Chain of Custody:** The chronological documentation showing the custody, control, transfer, analysis, and disposition of digital evidence.\n- **Retesting Verification:** Independent re-execution of verified assessment tests against remediated targets to empirically confirm vulnerability closure.\n"
    },
    {
      "id": "les_c5_m3_l5",
      "title": "3.5 Staying Bounded: Loopback Confinement & Impact Controls",
      "duration": "55 mins",
      "is_mandatory": true,
      "summary": "Comprehensive instruction covering 3.5 staying bounded: loopback confinement & impact controls, procedural frameworks, and verified operational guidelines.",
      "learning_objectives": [
        "Understand the theoretical principles and governance standards behind 3.5 Staying Bounded: Loopback Confinement & Impact Controls",
        "Apply technical verification techniques using authorized loopback tools",
        "Analyze visual architecture models and operational process workflows",
        "Record reproducible evidentiary artifacts adhering to professional chain-of-custody standards"
      ],
      "diagram_slots": [
        {
          "id": "fig-05-03-09",
          "asset_path": "/assets/courses/cyber-05/c05_m03_l05_01.png",
          "caption": "Figure 3.09: Loopback 127.0.0.1 Confinement Guardrails in enterprise authorized penetration testing operations.",
          "placement_hint": "After Section 2 (Core Operational Pillars)"
        },
        {
          "id": "fig-05-03-10",
          "asset_path": "/assets/courses/cyber-05/c05_m03_l05_02.png",
          "caption": "Figure 3.10: Connection Rate Limiting & Concurrency Control workflow and validation mechanics.",
          "placement_hint": "After Section 5 (Process Sequence)"
        }
      ],
      "images": [
        {
          "id": "fig-05-03-09",
          "title": "Boundary Confinement: Loopback 127.0.0.1 Confinement Guardrails",
          "url": "/assets/courses/cyber-05/c05_m03_l05_01.png",
          "caption": "Figure 3.09: Loopback 127.0.0.1 Confinement Guardrails in enterprise authorized penetration testing operations.",
          "alt": "Technical diagram illustrating Loopback 127.0.0.1 Confinement Guardrails"
        },
        {
          "id": "fig-05-03-10",
          "title": "Boundary Confinement: Connection Rate Limiting & Concurrency Control",
          "url": "/assets/courses/cyber-05/c05_m03_l05_02.png",
          "caption": "Figure 3.10: Connection Rate Limiting & Concurrency Control workflow and validation mechanics.",
          "alt": "Process workflow diagram showing Connection Rate Limiting & Concurrency Control"
        }
      ],
      "content": "## 1. Executive Concept & Theoretical Overview\n\nEnumeration is where tests most easily go wrong - a scanner pointed at the\nwrong range, an aggressive rate that degrades a service, a probe of an\nadjacent host. Professional enumeration is BOUNDED: in scope (only authorised\ntargets), low-impact (rates and techniques that do not harm availability),\nand stop-aware (halt if an out-of-scope asset or instability appears). The\nlab enforces the scope boundary in code: enumerate.py refuses any host but\nloopback and exits with an error, so a mistake cannot become an out-of-scope\naction. This is the technical expression of Module 1's rules of engagement.\n\nProfessional penetration testing is the practice of evaluating computer systems, networks, and web applications to discover security vulnerabilities that an adversary could exploit. Unlike malicious attacks, authorized security testing is conducted with the explicit written permission of the asset owner, within a tightly defined scope, and adhering to strict Rules of Engagement (RoE).\n\n## 2. Core Operational Pillars & Technical Specifications\n\n- **Governance & Authority:** Every technical probe must be anchored to verifiable authority. Testing without written approval violates computer crime legislation regardless of intent.\n- **Boundary Discipline:** Target networks must be precisely bounded by IP CIDR ranges, domain names, and testing windows. Probing adjacent systems or third-party infrastructure constitutes an immediate breach of contract.\n- **Non-Destructive Methodology:** Evaluators prioritize minimal safe proofs of concept, verifying the existence of vulnerabilities without corrupting production databases or exhausting network resources.\n- **Reproducible Evidence:** Findings must be recorded with exact input vectors, raw HTTP headers, terminal outputs, UTC timestamps, and cryptographic hashes to guarantee evidentiary integrity.\n\n![Boundary Confinement: Loopback 127.0.0.1 Confinement Guardrails](/assets/courses/cyber-05/c05_m03_l05_01.png)\n\n*Figure 3.09: Loopback 127.0.0.1 Confinement Guardrails in enterprise authorized penetration testing operations.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Structural Boundary Demarcation:** The diagram visualizes the critical divide between authorized evaluation zones and unauthorized spaces. The central gateway represents the verified authorization boundary.\n- **Component Interactions:** Data flows from left to right through formal sign-off checkpoints. Probes that fail verification are immediately deflected into compliance alert channels.\n- **High-Contrast Indicators:** Amber accents (#FF7A00) demarcate active testing perimeters, while green highlights indicate authorized targets and red flags identify strictly out-of-scope assets.\n\n## 3. Hands-On Laboratory Execution & Terminal Verification\n\nAll practical exercises execute against the authorized loopback target service Nilgiri Parts Portal (`http://127.0.0.1:8099`). The laboratory environment enforces safety in code: all custom testing utilities abort immediately if pointed at any host other than `127.0.0.1`.\n\n```bash\n# Verify target service status on loopback TCP port 8099\ncurl -i http://127.0.0.1:8099/health\n```\n\n```terminal\nHTTP/1.0 200 OK\nServer: Nilgiri-Portal/1.0 Python/3.14\nDate: Sun, 08 Nov 2026 10:14:22 GMT\nContent-Type: application/json\n\n{\"status\": \"ONLINE\", \"target\": \"127.0.0.1:8099\", \"scope\": \"AUTHORISED_LAB_ONLY\"}\n```\n\n> [!IMPORTANT]\n> **Loopback Confinement Rule:** Never redirect lab tools or testing scripts toward external networks, production cloud assets, or third-party domains. The single rule that guarantees safety and legality is strict loopback confinement.\n\n\n\n:::math-steps\n### TCP SYN Scanner Bandwidth Consumption & Timing Invariants\nModeling network bandwidth saturation and packet throughput during scoped port scans across 65,535 TCP ports.\n\n#### Step 1: Minimum TCP SYN Packet Frame Size\nOn Ethernet (IEEE 802.3), a minimum-length TCP SYN probe frame consists of:\n$$\\text{Frame} = 14 \\text{ (Ethernet)} + 20 \\text{ (IPv4 Header)} + 20 \\text{ (TCP Header)} = 54 \\text{ bytes}$$\nPadded to Ethernet minimum frame size ($64$ bytes) plus $12$ bytes inter-packet gap and $8$ bytes preamble ($84$ on-wire bytes).\n\n#### Step 2: Bandwidth at Probing Rate ($R = 1{,}000 \\text{ packets/sec}$)\n$$\\text{Throughput} = R \\times 84 \\text{ bytes/pkt} = 84{,}000 \\text{ bytes/sec} = 672 \\text{ kbps}$$\n\n#### Step 3: Round-Trip Time (RTT) & Timeout Budget\nTo complete scanning $N = 65{,}535$ ports with a per-probe timeout $T_{\\text{out}} = 500\\text{ ms}$:\n$$T_{\\text{total}} = \\frac{N}{R} + \\text{RTT} = \\frac{65{,}535}{1{,}000} + 0.050 \\approx 65.58 \\text{ seconds}$$\n:::\n\n## 5. Process Sequence & Operational Execution\n\n![Boundary Confinement: Connection Rate Limiting & Concurrency Control](/assets/courses/cyber-05/c05_m03_l05_02.png)\n\n*Figure 3.10: Connection Rate Limiting & Concurrency Control workflow and validation mechanics.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Sequential Workflow Pipeline:** Illustrates the end-to-end execution flow, detailing the decision trees, state transitions, and verification milestones.\n- **Feedback & Escalation Loops:** When an anomaly or potential outage trigger occurs, the workflow establishes an immediate freeze and out-of-band notification protocol.\n- **Audit Traceability:** Every operational milestone requires an empirical evidence capture, generating an immutable record for the final deliverables ledger.\n\n## 6. Key Terminology & Standard Definitions\n\n- **Rules of Engagement (RoE):** Contractual document formalizing permissible testing techniques, exclusion matrices, testing time windows, and emergency contacts.\n- **Minimal Proof-of-Concept:** The least intrusive empirical assertion required to definitively prove a vulnerability exists without destabilizing services.\n- **Chain of Custody:** The chronological documentation showing the custody, control, transfer, analysis, and disposition of digital evidence.\n- **Retesting Verification:** Independent re-execution of verified assessment tests against remediated targets to empirically confirm vulnerability closure.\n"
    },
    {
      "id": "les_c5_m3_l6",
      "title": "3.6 Recording Enumeration Evidence and Baseline Hashes",
      "duration": "60 mins",
      "is_mandatory": true,
      "summary": "Comprehensive instruction covering 3.6 recording enumeration evidence and baseline hashes, procedural frameworks, and verified operational guidelines.",
      "learning_objectives": [
        "Understand the theoretical principles and governance standards behind 3.6 Recording Enumeration Evidence and Baseline Hashes",
        "Apply technical verification techniques using authorized loopback tools",
        "Analyze visual architecture models and operational process workflows",
        "Record reproducible evidentiary artifacts adhering to professional chain-of-custody standards"
      ],
      "diagram_slots": [
        {
          "id": "fig-05-03-11",
          "asset_path": "/assets/courses/cyber-05/c05_m03_l06_01.png",
          "caption": "Figure 3.11: Enumeration Findings JSON Schema in enterprise authorized penetration testing operations.",
          "placement_hint": "After Section 2 (Core Operational Pillars)"
        },
        {
          "id": "fig-05-03-12",
          "asset_path": "/assets/courses/cyber-05/c05_m03_l06_02.png",
          "caption": "Figure 3.12: Service Baseline Cryptographic Hash Registry workflow and validation mechanics.",
          "placement_hint": "After Section 5 (Process Sequence)"
        }
      ],
      "images": [
        {
          "id": "fig-05-03-11",
          "title": "Enumeration Evidence: Enumeration Findings JSON Schema",
          "url": "/assets/courses/cyber-05/c05_m03_l06_01.png",
          "caption": "Figure 3.11: Enumeration Findings JSON Schema in enterprise authorized penetration testing operations.",
          "alt": "Technical diagram illustrating Enumeration Findings JSON Schema"
        },
        {
          "id": "fig-05-03-12",
          "title": "Enumeration Evidence: Service Baseline Cryptographic Hash Registry",
          "url": "/assets/courses/cyber-05/c05_m03_l06_02.png",
          "caption": "Figure 3.12: Service Baseline Cryptographic Hash Registry workflow and validation mechanics.",
          "alt": "Process workflow diagram showing Service Baseline Cryptographic Hash Registry"
        }
      ],
      "content": "## 1. Executive Concept & Theoretical Overview\n\nAs in reconnaissance, enumeration must be recorded: each service and\nendpoint, its response, the version evidence, and the time. This evidence\nfeeds vulnerability assessment (Module 4), supports the report (Module 8),\nand demonstrates that every action was in scope. The lab saves enumeration\noutput to data/enumerate_output.txt; combined with the inventory from Module\n2, it is the documented, in-scope map the rest of the test builds on.\n\n--------------------------------------------------------------------------------\n\nProfessional penetration testing is the practice of evaluating computer systems, networks, and web applications to discover security vulnerabilities that an adversary could exploit. Unlike malicious attacks, authorized security testing is conducted with the explicit written permission of the asset owner, within a tightly defined scope, and adhering to strict Rules of Engagement (RoE).\n\n## 2. Core Operational Pillars & Technical Specifications\n\n- **Governance & Authority:** Every technical probe must be anchored to verifiable authority. Testing without written approval violates computer crime legislation regardless of intent.\n- **Boundary Discipline:** Target networks must be precisely bounded by IP CIDR ranges, domain names, and testing windows. Probing adjacent systems or third-party infrastructure constitutes an immediate breach of contract.\n- **Non-Destructive Methodology:** Evaluators prioritize minimal safe proofs of concept, verifying the existence of vulnerabilities without corrupting production databases or exhausting network resources.\n- **Reproducible Evidence:** Findings must be recorded with exact input vectors, raw HTTP headers, terminal outputs, UTC timestamps, and cryptographic hashes to guarantee evidentiary integrity.\n\n![Enumeration Evidence: Enumeration Findings JSON Schema](/assets/courses/cyber-05/c05_m03_l06_01.png)\n\n*Figure 3.11: Enumeration Findings JSON Schema in enterprise authorized penetration testing operations.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Structural Boundary Demarcation:** The diagram visualizes the critical divide between authorized evaluation zones and unauthorized spaces. The central gateway represents the verified authorization boundary.\n- **Component Interactions:** Data flows from left to right through formal sign-off checkpoints. Probes that fail verification are immediately deflected into compliance alert channels.\n- **High-Contrast Indicators:** Amber accents (#FF7A00) demarcate active testing perimeters, while green highlights indicate authorized targets and red flags identify strictly out-of-scope assets.\n\n## 4. Real-World Case Studies & Enterprise Incidents\n\n### Case Study: The Scoping & Authority Gap\n\nIn high-profile enterprise evaluations, jurisdictional confusion between corporate parent entities and regional facility managers has resulted in security personnel facing criminal detention despite possessing valid contracts. Authorisation must originate from the specific entity possessing legal ownership over the target infrastructure.\n\n- **Key Takeaway 1:** Always verify that the authorising signatory possesses direct ownership authority over all enumerated IP CIDRs and physical sites.\n- **Key Takeaway 2:** Establish out-of-band communication channels with the client SOC to de-conflict simulated testing from active adversary intrusions.\n\n## 5. Process Sequence & Operational Execution\n\n![Enumeration Evidence: Service Baseline Cryptographic Hash Registry](/assets/courses/cyber-05/c05_m03_l06_02.png)\n\n*Figure 3.12: Service Baseline Cryptographic Hash Registry workflow and validation mechanics.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Sequential Workflow Pipeline:** Illustrates the end-to-end execution flow, detailing the decision trees, state transitions, and verification milestones.\n- **Feedback & Escalation Loops:** When an anomaly or potential outage trigger occurs, the workflow establishes an immediate freeze and out-of-band notification protocol.\n- **Audit Traceability:** Every operational milestone requires an empirical evidence capture, generating an immutable record for the final deliverables ledger.\n\n## 6. Key Terminology & Standard Definitions\n\n- **Rules of Engagement (RoE):** Contractual document formalizing permissible testing techniques, exclusion matrices, testing time windows, and emergency contacts.\n- **Minimal Proof-of-Concept:** The least intrusive empirical assertion required to definitively prove a vulnerability exists without destabilizing services.\n- **Chain of Custody:** The chronological documentation showing the custody, control, transfer, analysis, and disposition of digital evidence.\n- **Retesting Verification:** Independent re-execution of verified assessment tests against remediated targets to empirically confirm vulnerability closure.\n"
    }
  ]
};
