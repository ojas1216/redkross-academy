/**
 * RedKross Academy - Course 05: Ethical Hacking and Penetration Testing
 * Module 3 Question Bank
 * Total Questions: 200 (100 Medium, 100 Difficult, 0 Easy)
 * Rigorous scenario-driven assessment pool.
 */

export const module3QuestionBank = [
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
    "id": "q_c5_m3_011",
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
    "id": "q_c5_m3_012",
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
    "id": "q_c5_m3_013",
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
    "id": "q_c5_m3_014",
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
    "id": "q_c5_m3_015",
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
    "id": "q_c5_m3_016",
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
    "id": "q_c5_m3_017",
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
    "id": "q_c5_m3_018",
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
    "id": "q_c5_m3_019",
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
    "id": "q_c5_m3_020",
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
    "id": "q_c5_m3_021",
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
    "id": "q_c5_m3_022",
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
    "id": "q_c5_m3_023",
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
    "id": "q_c5_m3_024",
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
    "id": "q_c5_m3_025",
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
    "id": "q_c5_m3_026",
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
    "id": "q_c5_m3_027",
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
    "id": "q_c5_m3_028",
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
    "id": "q_c5_m3_029",
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
    "id": "q_c5_m3_030",
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
    "id": "q_c5_m3_031",
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
    "id": "q_c5_m3_032",
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
    "id": "q_c5_m3_033",
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
    "id": "q_c5_m3_034",
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
    "id": "q_c5_m3_035",
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
    "id": "q_c5_m3_036",
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
    "id": "q_c5_m3_037",
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
    "id": "q_c5_m3_038",
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
    "id": "q_c5_m3_039",
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
    "id": "q_c5_m3_040",
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
    "id": "q_c5_m3_041",
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
    "id": "q_c5_m3_042",
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
    "id": "q_c5_m3_043",
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
    "id": "q_c5_m3_044",
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
    "id": "q_c5_m3_045",
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
    "id": "q_c5_m3_046",
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
    "id": "q_c5_m3_047",
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
    "id": "q_c5_m3_048",
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
    "id": "q_c5_m3_049",
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
    "id": "q_c5_m3_050",
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
    "id": "q_c5_m3_051",
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
    "id": "q_c5_m3_052",
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
    "id": "q_c5_m3_053",
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
    "id": "q_c5_m3_054",
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
    "id": "q_c5_m3_055",
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
    "id": "q_c5_m3_056",
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
    "id": "q_c5_m3_057",
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
    "id": "q_c5_m3_058",
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
    "id": "q_c5_m3_059",
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
    "id": "q_c5_m3_060",
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
    "id": "q_c5_m3_061",
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
    "id": "q_c5_m3_062",
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
    "id": "q_c5_m3_063",
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
    "id": "q_c5_m3_064",
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
    "id": "q_c5_m3_065",
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
    "id": "q_c5_m3_066",
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
    "id": "q_c5_m3_067",
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
    "id": "q_c5_m3_068",
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
    "id": "q_c5_m3_069",
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
    "id": "q_c5_m3_070",
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
    "id": "q_c5_m3_071",
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
    "id": "q_c5_m3_072",
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
    "id": "q_c5_m3_073",
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
    "id": "q_c5_m3_074",
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
    "id": "q_c5_m3_075",
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
    "id": "q_c5_m3_076",
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
    "id": "q_c5_m3_077",
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
    "id": "q_c5_m3_078",
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
    "id": "q_c5_m3_079",
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
    "id": "q_c5_m3_080",
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
    "id": "q_c5_m3_081",
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
    "id": "q_c5_m3_082",
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
    "id": "q_c5_m3_083",
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
    "id": "q_c5_m3_084",
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
    "id": "q_c5_m3_085",
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
    "id": "q_c5_m3_086",
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
    "id": "q_c5_m3_087",
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
    "id": "q_c5_m3_088",
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
    "id": "q_c5_m3_089",
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
    "id": "q_c5_m3_090",
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
    "id": "q_c5_m3_091",
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
    "id": "q_c5_m3_092",
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
    "id": "q_c5_m3_093",
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
    "id": "q_c5_m3_094",
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
    "id": "q_c5_m3_095",
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
    "id": "q_c5_m3_096",
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
    "id": "q_c5_m3_097",
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
    "id": "q_c5_m3_098",
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
    "id": "q_c5_m3_099",
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
    "id": "q_c5_m3_100",
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
  },
  {
    "id": "q_c5_m3_111",
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
    "id": "q_c5_m3_112",
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
    "id": "q_c5_m3_113",
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
    "id": "q_c5_m3_114",
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
    "id": "q_c5_m3_115",
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
    "id": "q_c5_m3_116",
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
    "id": "q_c5_m3_117",
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
    "id": "q_c5_m3_118",
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
    "id": "q_c5_m3_119",
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
    "id": "q_c5_m3_120",
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
  },
  {
    "id": "q_c5_m3_121",
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
    "id": "q_c5_m3_122",
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
    "id": "q_c5_m3_123",
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
    "id": "q_c5_m3_124",
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
    "id": "q_c5_m3_125",
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
    "id": "q_c5_m3_126",
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
    "id": "q_c5_m3_127",
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
    "id": "q_c5_m3_128",
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
    "id": "q_c5_m3_129",
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
    "id": "q_c5_m3_130",
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
  },
  {
    "id": "q_c5_m3_131",
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
    "id": "q_c5_m3_132",
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
    "id": "q_c5_m3_133",
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
    "id": "q_c5_m3_134",
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
    "id": "q_c5_m3_135",
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
    "id": "q_c5_m3_136",
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
    "id": "q_c5_m3_137",
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
    "id": "q_c5_m3_138",
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
    "id": "q_c5_m3_139",
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
    "id": "q_c5_m3_140",
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
  },
  {
    "id": "q_c5_m3_141",
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
    "id": "q_c5_m3_142",
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
    "id": "q_c5_m3_143",
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
    "id": "q_c5_m3_144",
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
    "id": "q_c5_m3_145",
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
    "id": "q_c5_m3_146",
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
    "id": "q_c5_m3_147",
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
    "id": "q_c5_m3_148",
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
    "id": "q_c5_m3_149",
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
    "id": "q_c5_m3_150",
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
  },
  {
    "id": "q_c5_m3_151",
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
    "id": "q_c5_m3_152",
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
    "id": "q_c5_m3_153",
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
    "id": "q_c5_m3_154",
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
    "id": "q_c5_m3_155",
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
    "id": "q_c5_m3_156",
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
    "id": "q_c5_m3_157",
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
    "id": "q_c5_m3_158",
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
    "id": "q_c5_m3_159",
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
    "id": "q_c5_m3_160",
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
  },
  {
    "id": "q_c5_m3_161",
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
    "id": "q_c5_m3_162",
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
    "id": "q_c5_m3_163",
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
    "id": "q_c5_m3_164",
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
    "id": "q_c5_m3_165",
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
    "id": "q_c5_m3_166",
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
    "id": "q_c5_m3_167",
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
    "id": "q_c5_m3_168",
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
    "id": "q_c5_m3_169",
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
    "id": "q_c5_m3_170",
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
  },
  {
    "id": "q_c5_m3_171",
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
    "id": "q_c5_m3_172",
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
    "id": "q_c5_m3_173",
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
    "id": "q_c5_m3_174",
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
    "id": "q_c5_m3_175",
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
    "id": "q_c5_m3_176",
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
    "id": "q_c5_m3_177",
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
    "id": "q_c5_m3_178",
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
    "id": "q_c5_m3_179",
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
    "id": "q_c5_m3_180",
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
  },
  {
    "id": "q_c5_m3_181",
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
    "id": "q_c5_m3_182",
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
    "id": "q_c5_m3_183",
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
    "id": "q_c5_m3_184",
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
    "id": "q_c5_m3_185",
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
    "id": "q_c5_m3_186",
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
    "id": "q_c5_m3_187",
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
    "id": "q_c5_m3_188",
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
    "id": "q_c5_m3_189",
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
    "id": "q_c5_m3_190",
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
  },
  {
    "id": "q_c5_m3_191",
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
    "id": "q_c5_m3_192",
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
    "id": "q_c5_m3_193",
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
    "id": "q_c5_m3_194",
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
    "id": "q_c5_m3_195",
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
    "id": "q_c5_m3_196",
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
    "id": "q_c5_m3_197",
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
    "id": "q_c5_m3_198",
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
    "id": "q_c5_m3_199",
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
    "id": "q_c5_m3_200",
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
];
