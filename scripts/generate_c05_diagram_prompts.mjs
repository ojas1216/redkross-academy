/**
 * RedKross Academy - Course 05 Diagram Prompts Catalog
 * Defines 96 comprehensive, professional vector/technical illustration prompts
 * with strict high contrast, modern technical iconography, and 2 diagrams per lesson.
 * Exactly 8 modules x 6 lessons x 2 diagrams = 96 figures.
 */

export const C05_DIAGRAM_PROMPTS = [
  {
    "modNum": 1,
    "lesNum": 1,
    "figId": "fig-05-01-01",
    "title": "Authorisation Boundary: Lawful Security Assessment vs. Cyber Crime",
    "slug": "c05_m01_l01_legal_authorisation_boundary",
    "caption": "Figure 1.1: Authorisation boundary separating lawful security assessments from criminal computer intrusion under Section 43/66 IT Act 2000 and CFAA.",
    "alt": "Diagram contrasting unauthorized access hazards with lawful penetration testing bounded by explicit written executive consent",
    "prompt": "Professional cybersecurity architecture diagram, high-contrast obsidian background (#070A0F) or clean white (#FFFFFF). Center represents THE AUTHORISATION GATEWAY with glowing amber barrier (#FF7A00) and signed certificate badge. Left side: UNAUTHORIZED ACCESS (OFFENSE) in crimson (#F43F5E) with CFAA 18 U.S.C. 1030 and IT Act 2000 Sec 43/66 tags. Right side: AUTHORIZED PENETRATION TEST in mint green (#65F58A) with Signed Scoping Document, Authorized CIDR Ranges, and Chain of Custody tags. Crisp flat vector, high contrast, technical documentation quality."
  },
  {
    "modNum": 1,
    "lesNum": 1,
    "figId": "fig-05-01-02",
    "title": "Pre-Engagement Authorisation & Scoping Verification Protocol",
    "slug": "c05_m01_l01_engagement_lifecycle_flow",
    "caption": "Figure 1.2: Strict sequential protocol required before transmitting packets to target infrastructure.",
    "alt": "Flowchart showing asset ownership verification, scope boundary demarcation, RoE sign-off, emergency escalation setup, and testing greenlight",
    "prompt": "Modern vector sequence workflow diagram. 6 sequential process nodes with illuminated connecting arrows: 1. Client Asset Ownership Verification -> 2. Scope Demarcation & Exclusion Matrix -> 3. Rules of Engagement (RoE) Ratification -> 4. Incident Escalation Matrix -> 5. Executive Written Sign-Off -> 6. Zero-Hour Greenlight Trigger. Clean technical boxes with amber highlights (#FF7A00), clear typography, high contrast."
  },
  {
    "modNum": 1,
    "lesNum": 2,
    "figId": "fig-05-01-03",
    "title": "Enterprise Penetration Testing Scope & Boundary Taxonomy",
    "slug": "c05_m01_l02_scope_exclusion_taxonomy",
    "caption": "Figure 1.3: Target matrix categorizing enterprise assets into In-Scope, Out-of-Scope, and Conditional-Scope zones.",
    "alt": "Target boundary diagram illustrating in-scope IP ranges, out-of-scope third-party SaaS and core infrastructure, and conditional off-hours targets",
    "prompt": "Architectural boundary diagram. Three distinct bordered containers: Green container for Strictly In-Scope (10.100.4.0/24 internal apps, api.enterprise.corp, 198.51.100.25 DMZ). Red container for Strictly Out-of-Scope (10.100.4.1 core switch, third-party SaaS, production healthcare DB). Amber container for Conditional Off-Hours (Payment processing 02:00-04:00 UTC). Warning shields and lock icons, crisp vectors."
  },
  {
    "modNum": 1,
    "lesNum": 2,
    "figId": "fig-05-01-04",
    "title": "Rules of Engagement: Critical Finding Escalation & Incident De-confliction Loop",
    "slug": "c05_m01_l02_roe_communication_matrix",
    "caption": "Figure 1.4: Real-time operational communication loop between penetration testing team and client SOC during high-severity discoveries or service degradation.",
    "alt": "Operational workflow showing penetration tester finding critical vulnerability, out-of-band notification, client SOC de-confliction, and test resumption",
    "prompt": "Operational swimlane diagram. Two parallel tracks: Pentest Team lane and Client SOC lane. Pentest team detects Critical RCE (CVSS >= 9.0) -> Out-of-band emergency escalation within 15 minutes -> Client SOC checks internal telemetry for de-confliction -> Coordinated freeze and controlled resumption. High-contrast lines, amber alert pulses (#FF7A00), clear decision diamonds."
  },
  {
    "modNum": 1,
    "lesNum": 3,
    "figId": "fig-05-01-05",
    "title": "Professional Security Testing Methodologies: NIST SP 800-115 vs. PTES",
    "slug": "c05_m01_l03_methodology_phase_alignment",
    "caption": "Figure 1.5: Comparative alignment between NIST SP 800-115 four phases and PTES seven execution phases.",
    "alt": "Comparative architectural chart mapping NIST Planning, Discovery, Attack, and Reporting to PTES 7-phase model",
    "prompt": "Comparative architectural framework. Left column: NIST SP 800-115 (Planning, Discovery, Attack, Reporting). Right column: PTES (Pre-engagement, Intelligence Gathering, Threat Modeling, Vulnerability Analysis, Exploitation, Post-Exploitation, Reporting). Glowing connector bands mapping Discovery to intelligence/vulnerability analysis, and Attack to exploitation/post-exploitation. Crisp enterprise layout."
  },
  {
    "modNum": 1,
    "lesNum": 3,
    "figId": "fig-05-01-06",
    "title": "Iterative Testing Loop: Attack-to-Discovery Feedback Engine",
    "slug": "c05_m01_l03_iterative_testing_loop",
    "caption": "Figure 1.6: The non-linear feedback loop returning newly exposed attack surface and harvested credentials into discovery.",
    "alt": "Circular state transition diagram showing Discovery feeding Attack, which feeds back new credentials and subnets into Discovery",
    "prompt": "State transition circular workflow. Central feedback engine showing Discovery -> Attack Verification -> New Asset/Credential Unmasked -> Returns to Discovery Loop -> Final Consolidated Reporting. Amber glow lines (#FF7A00), modern cybersecurity icons, razor-sharp typography."
  },
  {
    "modNum": 1,
    "lesNum": 4,
    "figId": "fig-05-01-07",
    "title": "System Stability Safeguards: DoS Avoidance & Fragile Service Handling",
    "slug": "c05_m01_l04_system_stability_safeguards",
    "caption": "Figure 1.7: Safety architecture detailing rate-limiting throttles, non-destructive payloads, and fragile service isolation.",
    "alt": "Architecture diagram showing scanner packet throttling, safe non-crashing payloads, and exclusion of fragile legacy SCADA and embedded devices",
    "prompt": "Technical safety architecture diagram. Central firewall filter demonstrating bandwidth and request throttling (max 5 requests/sec). Legacy SCADA and fragile mainframe services isolated in red exclusion bubble. Green traffic lane showing non-destructive HTTP HEAD/GET probes and minimal proof assertions. Clean vector icons, high contrast."
  },
  {
    "modNum": 1,
    "lesNum": 4,
    "figId": "fig-05-01-08",
    "title": "Emergency Stop Conditions & Freeze Decision Protocol",
    "slug": "c05_m01_l04_incident_response_stop_protocol",
    "caption": "Figure 1.8: Incident decision tree determining when testing must halt immediately due to out-of-scope breach, system outage, or prior compromise.",
    "alt": "Decision tree illustrating stop conditions: unexpected host reachability, target latency spike > 500ms, or evidence of active adversary webshell",
    "prompt": "Decision tree diagram with clear branching logic. Triggers: 1. Out-of-scope IP contacted? -> HALT IMMEDIATELY. 2. Target latency > 500ms or 503 errors? -> FREEZE & NOTIFY. 3. Active adversary webshell discovered? -> STOP TEST & DECLARE INCIDENT. Red halt badges, amber warning paths, green safe continuation paths."
  },
  {
    "modNum": 1,
    "lesNum": 5,
    "figId": "fig-05-01-09",
    "title": "Cryptographic Evidence Vault & Chain of Custody Architecture",
    "slug": "c05_m01_l05_evidence_vault_architecture",
    "caption": "Figure 1.9: Secure evidence vault architecture enforcing SHA-256 integrity hashing, UTC timestamping, and encrypted storage.",
    "alt": "Architecture diagram showing raw terminal output and packet captures hashed with SHA-256, signed, and stored in AES-256 encrypted vault",
    "prompt": "Data security architecture diagram. Raw testing artifacts (HTTP request/response, terminal logs, PCAP traces) fed into streaming SHA-256 hasher -> Appended to tamper-evident hash ledger -> Stored in AES-256-GCM encrypted evidence vault with access logging and chain of custody metadata table. Cyan and amber accents, high contrast."
  },
  {
    "modNum": 1,
    "lesNum": 5,
    "figId": "fig-05-01-10",
    "title": "Evidence Acquisition, Hashing & Verification Pipeline",
    "slug": "c05_m01_l05_chain_of_custody_pipeline",
    "caption": "Figure 1.10: Step-by-step pipeline from capturing raw vulnerability verification data to cryptographic ledger recording.",
    "alt": "Sequential pipeline showing raw probe response capture, metadata tagging, SHA-256 hash generation, and findings.json persistence",
    "prompt": "Sequential data pipeline diagram. Step 1: verify.py executes probe against 127.0.0.1:8099. Step 2: Captures status code 200, headers, and minimal proof body. Step 3: Generates SHA-256 hash of payload. Step 4: Records timestamped entry into data/findings.json. Step 5: Generates verification receipt. Clean modern vector layout."
  },
  {
    "modNum": 1,
    "lesNum": 6,
    "figId": "fig-05-01-11",
    "title": "Engagement Information Models: Black Box vs. Grey Box vs. White Box",
    "slug": "c05_m01_l06_black_grey_white_box_matrix",
    "caption": "Figure 1.11: Comparison of penetration testing visibility models, efficiency trade-offs, and attack surface coverage.",
    "alt": "Comparison matrix showing Black Box (zero knowledge), Grey Box (partial architecture & credentials), and White Box (full source & design)",
    "prompt": "Three-column architectural comparison. Left Column: Black Box (Zero knowledge, high recon cost, external adversary simulation). Center Column: Grey Box (Agreed credentials, API schemas, high ROI and coverage, course standard). Right Column: White Box (Full source code, architectural blue prints, defense-in-depth verification). High-contrast cards with feature checkmarks and radar coverage badges."
  },
  {
    "modNum": 1,
    "lesNum": 6,
    "figId": "fig-05-01-12",
    "title": "The Professional Engagement & Retest Lifecycle Contract",
    "slug": "c05_m01_l06_remediation_retest_lifecycle",
    "caption": "Figure 1.12: Closed-loop engagement contract from scoping and testing to risk reporting, client remediation, and retest verification.",
    "alt": "Circular operational lifecycle showing Scoping -> Testing -> Draft Report -> Client Patching -> Retest Verification with retest.py -> Final Letter of Attestation",
    "prompt": "Circular lifecycle infographic. 5 major phases arranged in a closed loop: 1. Scoping & RoE Ratification -> 2. Penetration Test Execution -> 3. Risk-Ranked Reporting -> 4. Client Engineering Remediation Window -> 5. Retest Execution (retest.py) & Final Letter of Attestation. Connected by glowing amber arrows, enterprise styling."
  },
  {
    "modNum": 2,
    "lesNum": 1,
    "figId": "fig-05-02-01",
    "title": "Passive vs Active Reconnaissance: Stealth Boundary & Threat Actor Simulation",
    "slug": "c05_m02_l01_01",
    "caption": "Figure 2.01: Stealth Boundary & Threat Actor Simulation in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating Stealth Boundary & Threat Actor Simulation",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Passive vs Active Reconnaissance - Stealth Boundary & Threat Actor Simulation. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 2,
    "lesNum": 1,
    "figId": "fig-05-02-02",
    "title": "Passive vs Active Reconnaissance: Network Packet Exposure & SOC Visibility",
    "slug": "c05_m02_l01_02",
    "caption": "Figure 2.02: Network Packet Exposure & SOC Visibility workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Network Packet Exposure & SOC Visibility",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Passive vs Active Reconnaissance - Network Packet Exposure & SOC Visibility. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 2,
    "lesNum": 2,
    "figId": "fig-05-02-03",
    "title": "Passive Intelligence Sources: OSINT Intelligence Graph & Public Repositories",
    "slug": "c05_m02_l02_01",
    "caption": "Figure 2.03: OSINT Intelligence Graph & Public Repositories in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating OSINT Intelligence Graph & Public Repositories",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Passive Intelligence Sources - OSINT Intelligence Graph & Public Repositories. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 2,
    "lesNum": 2,
    "figId": "fig-05-02-04",
    "title": "Passive Intelligence Sources: Certificate Transparency Logs & DNS Graph",
    "slug": "c05_m02_l02_02",
    "caption": "Figure 2.04: Certificate Transparency Logs & DNS Graph workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Certificate Transparency Logs & DNS Graph",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Passive Intelligence Sources - Certificate Transparency Logs & DNS Graph. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 2,
    "lesNum": 3,
    "figId": "fig-05-02-05",
    "title": "Self-Published Information: HTTP Security Header Fingerprinting",
    "slug": "c05_m02_l03_01",
    "caption": "Figure 2.05: HTTP Security Header Fingerprinting in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating HTTP Security Header Fingerprinting",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Self-Published Information - HTTP Security Header Fingerprinting. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 2,
    "lesNum": 3,
    "figId": "fig-05-02-06",
    "title": "Self-Published Information: Robots.txt & Document Metadata Leakage",
    "slug": "c05_m02_l03_02",
    "caption": "Figure 2.06: Robots.txt & Document Metadata Leakage workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Robots.txt & Document Metadata Leakage",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Self-Published Information - Robots.txt & Document Metadata Leakage. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 2,
    "lesNum": 4,
    "figId": "fig-05-02-07",
    "title": "Asset Inventory Construction: Attack Surface Mapping & Asset Taxonomy",
    "slug": "c05_m02_l04_01",
    "caption": "Figure 2.07: Attack Surface Mapping & Asset Taxonomy in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating Attack Surface Mapping & Asset Taxonomy",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Asset Inventory Construction - Attack Surface Mapping & Asset Taxonomy. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 2,
    "lesNum": 4,
    "figId": "fig-05-02-08",
    "title": "Asset Inventory Construction: Automated Asset Discovery & Reconciliation Flow",
    "slug": "c05_m02_l04_02",
    "caption": "Figure 2.08: Automated Asset Discovery & Reconciliation Flow workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Automated Asset Discovery & Reconciliation Flow",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Asset Inventory Construction - Automated Asset Discovery & Reconciliation Flow. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 2,
    "lesNum": 5,
    "figId": "fig-05-02-09",
    "title": "Validation & Triage: False Lead Elimination & DNS Takeover Checks",
    "slug": "c05_m02_l05_01",
    "caption": "Figure 2.09: False Lead Elimination & DNS Takeover Checks in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating False Lead Elimination & DNS Takeover Checks",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Validation & Triage - False Lead Elimination & DNS Takeover Checks. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 2,
    "lesNum": 5,
    "figId": "fig-05-02-10",
    "title": "Validation & Triage: Host Validation State Machine",
    "slug": "c05_m02_l05_02",
    "caption": "Figure 2.10: Host Validation State Machine workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Host Validation State Machine",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Validation & Triage - Host Validation State Machine. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 2,
    "lesNum": 6,
    "figId": "fig-05-02-11",
    "title": "Scoping Handover: Reconnaissance-to-Enumeration Data Handshake",
    "slug": "c05_m02_l06_01",
    "caption": "Figure 2.11: Reconnaissance-to-Enumeration Data Handshake in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating Reconnaissance-to-Enumeration Data Handshake",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Scoping Handover - Reconnaissance-to-Enumeration Data Handshake. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 2,
    "lesNum": 6,
    "figId": "fig-05-02-12",
    "title": "Scoping Handover: Target Profiling Dossier Architecture",
    "slug": "c05_m02_l06_02",
    "caption": "Figure 2.12: Target Profiling Dossier Architecture workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Target Profiling Dossier Architecture",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Scoping Handover - Target Profiling Dossier Architecture. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 3,
    "lesNum": 1,
    "figId": "fig-05-03-01",
    "title": "Service & Port Identification: TCP/UDP Port Space Architecture (0-65535)",
    "slug": "c05_m03_l01_01",
    "caption": "Figure 3.01: TCP/UDP Port Space Architecture (0-65535) in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating TCP/UDP Port Space Architecture (0-65535)",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Service & Port Identification - TCP/UDP Port Space Architecture (0-65535). High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 3,
    "lesNum": 1,
    "figId": "fig-05-03-02",
    "title": "Service & Port Identification: TCP SYN Stealth vs Full Connect Scan State Machine",
    "slug": "c05_m03_l01_02",
    "caption": "Figure 3.02: TCP SYN Stealth vs Full Connect Scan State Machine workflow and validation mechanics.",
    "alt": "Process workflow diagram showing TCP SYN Stealth vs Full Connect Scan State Machine",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Service & Port Identification - TCP SYN Stealth vs Full Connect Scan State Machine. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 3,
    "lesNum": 2,
    "figId": "fig-05-03-03",
    "title": "Endpoint Enumeration: enumerate.py Scoped Crawler Architecture",
    "slug": "c05_m03_l02_01",
    "caption": "Figure 3.03: enumerate.py Scoped Crawler Architecture in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating enumerate.py Scoped Crawler Architecture",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Endpoint Enumeration - enumerate.py Scoped Crawler Architecture. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 3,
    "lesNum": 2,
    "figId": "fig-05-03-04",
    "title": "Endpoint Enumeration: HTTP URL Endpoint Spidering & Route Tree",
    "slug": "c05_m03_l02_02",
    "caption": "Figure 3.04: HTTP URL Endpoint Spidering & Route Tree workflow and validation mechanics.",
    "alt": "Process workflow diagram showing HTTP URL Endpoint Spidering & Route Tree",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Endpoint Enumeration - HTTP URL Endpoint Spidering & Route Tree. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 3,
    "lesNum": 3,
    "figId": "fig-05-03-05",
    "title": "Banners & Headers: Application Banner Grabbing & Service Profiling",
    "slug": "c05_m03_l03_01",
    "caption": "Figure 3.05: Application Banner Grabbing & Service Profiling in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating Application Banner Grabbing & Service Profiling",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Banners & Headers - Application Banner Grabbing & Service Profiling. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 3,
    "lesNum": 3,
    "figId": "fig-05-03-06",
    "title": "Banners & Headers: Version Discrepancy & Honeypot Detection Flow",
    "slug": "c05_m03_l03_02",
    "caption": "Figure 3.06: Version Discrepancy & Honeypot Detection Flow workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Version Discrepancy & Honeypot Detection Flow",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Banners & Headers - Version Discrepancy & Honeypot Detection Flow. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 3,
    "lesNum": 4,
    "figId": "fig-05-03-07",
    "title": "Exposure Surface Mapping: Enterprise Perimeter Exposure Graph",
    "slug": "c05_m03_l04_01",
    "caption": "Figure 3.07: Enterprise Perimeter Exposure Graph in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating Enterprise Perimeter Exposure Graph",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Exposure Surface Mapping - Enterprise Perimeter Exposure Graph. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 3,
    "lesNum": 4,
    "figId": "fig-05-03-08",
    "title": "Exposure Surface Mapping: Attack Vector Identification Matrix",
    "slug": "c05_m03_l04_02",
    "caption": "Figure 3.08: Attack Vector Identification Matrix workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Attack Vector Identification Matrix",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Exposure Surface Mapping - Attack Vector Identification Matrix. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 3,
    "lesNum": 5,
    "figId": "fig-05-03-09",
    "title": "Boundary Confinement: Loopback 127.0.0.1 Confinement Guardrails",
    "slug": "c05_m03_l05_01",
    "caption": "Figure 3.09: Loopback 127.0.0.1 Confinement Guardrails in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating Loopback 127.0.0.1 Confinement Guardrails",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Boundary Confinement - Loopback 127.0.0.1 Confinement Guardrails. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 3,
    "lesNum": 5,
    "figId": "fig-05-03-10",
    "title": "Boundary Confinement: Connection Rate Limiting & Concurrency Control",
    "slug": "c05_m03_l05_02",
    "caption": "Figure 3.10: Connection Rate Limiting & Concurrency Control workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Connection Rate Limiting & Concurrency Control",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Boundary Confinement - Connection Rate Limiting & Concurrency Control. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 3,
    "lesNum": 6,
    "figId": "fig-05-03-11",
    "title": "Enumeration Evidence: Enumeration Findings JSON Schema",
    "slug": "c05_m03_l06_01",
    "caption": "Figure 3.11: Enumeration Findings JSON Schema in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating Enumeration Findings JSON Schema",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Enumeration Evidence - Enumeration Findings JSON Schema. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 3,
    "lesNum": 6,
    "figId": "fig-05-03-12",
    "title": "Enumeration Evidence: Service Baseline Cryptographic Hash Registry",
    "slug": "c05_m03_l06_02",
    "caption": "Figure 3.12: Service Baseline Cryptographic Hash Registry workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Service Baseline Cryptographic Hash Registry",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Enumeration Evidence - Service Baseline Cryptographic Hash Registry. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 4,
    "lesNum": 1,
    "figId": "fig-05-04-01",
    "title": "Vulnerability Scanning Limits: Automated Vulnerability Scanner Architecture",
    "slug": "c05_m04_l01_01",
    "caption": "Figure 4.01: Automated Vulnerability Scanner Architecture in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating Automated Vulnerability Scanner Architecture",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Vulnerability Scanning Limits - Automated Vulnerability Scanner Architecture. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 4,
    "lesNum": 1,
    "figId": "fig-05-04-02",
    "title": "Vulnerability Scanning Limits: Scanner Blindspots: Business Logic Flaws & Auth",
    "slug": "c05_m04_l01_02",
    "caption": "Figure 4.02: Scanner Blindspots: Business Logic Flaws & Auth workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Scanner Blindspots: Business Logic Flaws & Auth",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Vulnerability Scanning Limits - Scanner Blindspots: Business Logic Flaws & Auth. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 4,
    "lesNum": 2,
    "figId": "fig-05-04-03",
    "title": "CVE & CWE Taxonomy: MITRE CVE to CWE Weakness Hierarchy",
    "slug": "c05_m04_l02_01",
    "caption": "Figure 4.03: MITRE CVE to CWE Weakness Hierarchy in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating MITRE CVE to CWE Weakness Hierarchy",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: CVE & CWE Taxonomy - MITRE CVE to CWE Weakness Hierarchy. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 4,
    "lesNum": 2,
    "figId": "fig-05-04-04",
    "title": "CVE & CWE Taxonomy: CWE Top 25 Most Dangerous Software Weaknesses",
    "slug": "c05_m04_l02_02",
    "caption": "Figure 4.04: CWE Top 25 Most Dangerous Software Weaknesses workflow and validation mechanics.",
    "alt": "Process workflow diagram showing CWE Top 25 Most Dangerous Software Weaknesses",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: CVE & CWE Taxonomy - CWE Top 25 Most Dangerous Software Weaknesses. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 4,
    "lesNum": 3,
    "figId": "fig-05-04-05",
    "title": "CVSS v3.1 Scoring Mechanics: CVSS v3.1 Base Metric Group Equation Model",
    "slug": "c05_m04_l03_01",
    "caption": "Figure 4.05: CVSS v3.1 Base Metric Group Equation Model in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating CVSS v3.1 Base Metric Group Equation Model",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: CVSS v3.1 Scoring Mechanics - CVSS v3.1 Base Metric Group Equation Model. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 4,
    "lesNum": 3,
    "figId": "fig-05-04-06",
    "title": "CVSS v3.1 Scoring Mechanics: cvss.py Base Score Calculator Workflow",
    "slug": "c05_m04_l03_02",
    "caption": "Figure 4.06: cvss.py Base Score Calculator Workflow workflow and validation mechanics.",
    "alt": "Process workflow diagram showing cvss.py Base Score Calculator Workflow",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: CVSS v3.1 Scoring Mechanics - cvss.py Base Score Calculator Workflow. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 4,
    "lesNum": 4,
    "figId": "fig-05-04-07",
    "title": "Framework Mapping: OWASP Top 10:2025 to CWE Categorization Matrix",
    "slug": "c05_m04_l04_01",
    "caption": "Figure 4.07: OWASP Top 10:2025 to CWE Categorization Matrix in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating OWASP Top 10:2025 to CWE Categorization Matrix",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Framework Mapping - OWASP Top 10:2025 to CWE Categorization Matrix. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 4,
    "lesNum": 4,
    "figId": "fig-05-04-08",
    "title": "Framework Mapping: Defensive Weakness Categorization Decision Tree",
    "slug": "c05_m04_l04_02",
    "caption": "Figure 4.08: Defensive Weakness Categorization Decision Tree workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Defensive Weakness Categorization Decision Tree",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Framework Mapping - Defensive Weakness Categorization Decision Tree. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 4,
    "lesNum": 5,
    "figId": "fig-05-04-09",
    "title": "False Positive Validation: False Positive Elimination Funnel",
    "slug": "c05_m04_l05_01",
    "caption": "Figure 4.09: False Positive Elimination Funnel in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating False Positive Elimination Funnel",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: False Positive Validation - False Positive Elimination Funnel. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 4,
    "lesNum": 5,
    "figId": "fig-05-04-10",
    "title": "False Positive Validation: Manual Verification & Proof Triage Matrix",
    "slug": "c05_m04_l05_02",
    "caption": "Figure 4.10: Manual Verification & Proof Triage Matrix workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Manual Verification & Proof Triage Matrix",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: False Positive Validation - Manual Verification & Proof Triage Matrix. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 4,
    "lesNum": 6,
    "figId": "fig-05-04-11",
    "title": "Validated Findings List: Scored & Validated Findings Ledger Architecture",
    "slug": "c05_m04_l06_01",
    "caption": "Figure 4.11: Scored & Validated Findings Ledger Architecture in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating Scored & Validated Findings Ledger Architecture",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Validated Findings List - Scored & Validated Findings Ledger Architecture. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 4,
    "lesNum": 6,
    "figId": "fig-05-04-12",
    "title": "Validated Findings List: Vulnerability Severity Heatmap & Prioritization",
    "slug": "c05_m04_l06_02",
    "caption": "Figure 4.12: Vulnerability Severity Heatmap & Prioritization workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Vulnerability Severity Heatmap & Prioritization",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Validated Findings List - Vulnerability Severity Heatmap & Prioritization. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 5,
    "lesNum": 1,
    "figId": "fig-05-05-01",
    "title": "Structured Test Planning: Penetration Test Execution Matrix",
    "slug": "c05_m05_l01_01",
    "caption": "Figure 5.01: Penetration Test Execution Matrix in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating Penetration Test Execution Matrix",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Structured Test Planning - Penetration Test Execution Matrix. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 5,
    "lesNum": 1,
    "figId": "fig-05-05-02",
    "title": "Structured Test Planning: Target Execution Timeline & Phase Dependencies",
    "slug": "c05_m05_l01_02",
    "caption": "Figure 5.02: Target Execution Timeline & Phase Dependencies workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Target Execution Timeline & Phase Dependencies",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Structured Test Planning - Target Execution Timeline & Phase Dependencies. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 5,
    "lesNum": 2,
    "figId": "fig-05-05-03",
    "title": "Minimal Proof Principles: Controlled Verification Safety Thresholds",
    "slug": "c05_m05_l02_01",
    "caption": "Figure 5.03: Controlled Verification Safety Thresholds in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating Controlled Verification Safety Thresholds",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Minimal Proof Principles - Controlled Verification Safety Thresholds. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 5,
    "lesNum": 2,
    "figId": "fig-05-05-04",
    "title": "Minimal Proof Principles: Minimal Proof vs Weaponised Exploit Comparison",
    "slug": "c05_m05_l02_02",
    "caption": "Figure 5.04: Minimal Proof vs Weaponised Exploit Comparison workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Minimal Proof vs Weaponised Exploit Comparison",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Minimal Proof Principles - Minimal Proof vs Weaponised Exploit Comparison. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 5,
    "lesNum": 3,
    "figId": "fig-05-05-05",
    "title": "Authentication & Access Flaws: Broken Object Level Authorization (BOLA/IDOR)",
    "slug": "c05_m05_l03_01",
    "caption": "Figure 5.05: Broken Object Level Authorization (BOLA/IDOR) in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating Broken Object Level Authorization (BOLA/IDOR)",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Authentication & Access Flaws - Broken Object Level Authorization (BOLA/IDOR). High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 5,
    "lesNum": 3,
    "figId": "fig-05-05-06",
    "title": "Authentication & Access Flaws: verify.py Authentication Bypass Verification Flow",
    "slug": "c05_m05_l03_02",
    "caption": "Figure 5.06: verify.py Authentication Bypass Verification Flow workflow and validation mechanics.",
    "alt": "Process workflow diagram showing verify.py Authentication Bypass Verification Flow",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Authentication & Access Flaws - verify.py Authentication Bypass Verification Flow. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 5,
    "lesNum": 4,
    "figId": "fig-05-05-07",
    "title": "Information Disclosure Flaws: Debug Endpoint & Stack Trace Leakage Flow",
    "slug": "c05_m05_l04_01",
    "caption": "Figure 5.07: Debug Endpoint & Stack Trace Leakage Flow in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating Debug Endpoint & Stack Trace Leakage Flow",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Information Disclosure Flaws - Debug Endpoint & Stack Trace Leakage Flow. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 5,
    "lesNum": 4,
    "figId": "fig-05-05-08",
    "title": "Information Disclosure Flaws: Security Misconfiguration Detection Matrix",
    "slug": "c05_m05_l04_02",
    "caption": "Figure 5.08: Security Misconfiguration Detection Matrix workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Security Misconfiguration Detection Matrix",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Information Disclosure Flaws - Security Misconfiguration Detection Matrix. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 5,
    "lesNum": 5,
    "figId": "fig-05-05-09",
    "title": "Quantitative Impact Assessment: Business Impact vs Technical Severity Model",
    "slug": "c05_m05_l05_01",
    "caption": "Figure 5.09: Business Impact vs Technical Severity Model in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating Business Impact vs Technical Severity Model",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Quantitative Impact Assessment - Business Impact vs Technical Severity Model. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 5,
    "lesNum": 5,
    "figId": "fig-05-05-10",
    "title": "Quantitative Impact Assessment: Blast Radius Containment & Assessment Flow",
    "slug": "c05_m05_l05_02",
    "caption": "Figure 5.10: Blast Radius Containment & Assessment Flow workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Blast Radius Containment & Assessment Flow",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Quantitative Impact Assessment - Blast Radius Containment & Assessment Flow. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 5,
    "lesNum": 6,
    "figId": "fig-05-05-11",
    "title": "Reproducible Evidence Collection: HTTP Raw Request/Response Evidence Schema",
    "slug": "c05_m05_l06_01",
    "caption": "Figure 5.11: HTTP Raw Request/Response Evidence Schema in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating HTTP Raw Request/Response Evidence Schema",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Reproducible Evidence Collection - HTTP Raw Request/Response Evidence Schema. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 5,
    "lesNum": 6,
    "figId": "fig-05-05-12",
    "title": "Reproducible Evidence Collection: Automated Verification Re-execution Pipeline",
    "slug": "c05_m05_l06_02",
    "caption": "Figure 5.12: Automated Verification Re-execution Pipeline workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Automated Verification Re-execution Pipeline",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Reproducible Evidence Collection - Automated Verification Re-execution Pipeline. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 6,
    "lesNum": 1,
    "figId": "fig-05-06-01",
    "title": "Exploit Lifecycle: The Exploit Lifecycle: Weaponisation vs Verification",
    "slug": "c05_m06_l01_01",
    "caption": "Figure 6.01: The Exploit Lifecycle: Weaponisation vs Verification in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating The Exploit Lifecycle: Weaponisation vs Verification",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Exploit Lifecycle - The Exploit Lifecycle: Weaponisation vs Verification. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 6,
    "lesNum": 1,
    "figId": "fig-05-06-02",
    "title": "Exploit Lifecycle: Memory Safety vs Logic Vulnerability Mechanics",
    "slug": "c05_m06_l01_02",
    "caption": "Figure 6.02: Memory Safety vs Logic Vulnerability Mechanics workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Memory Safety vs Logic Vulnerability Mechanics",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Exploit Lifecycle - Memory Safety vs Logic Vulnerability Mechanics. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 6,
    "lesNum": 2,
    "figId": "fig-05-06-03",
    "title": "Safe Proof-of-Concept Engineering: Safe PoC Architecture: Harmless Assertions",
    "slug": "c05_m06_l02_01",
    "caption": "Figure 6.03: Safe PoC Architecture: Harmless Assertions in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating Safe PoC Architecture: Harmless Assertions",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Safe Proof-of-Concept Engineering - Safe PoC Architecture: Harmless Assertions. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 6,
    "lesNum": 2,
    "figId": "fig-05-06-04",
    "title": "Safe Proof-of-Concept Engineering: Payload Containment & Exit Code Validation",
    "slug": "c05_m06_l02_02",
    "caption": "Figure 6.04: Payload Containment & Exit Code Validation workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Payload Containment & Exit Code Validation",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Safe Proof-of-Concept Engineering - Payload Containment & Exit Code Validation. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 6,
    "lesNum": 3,
    "figId": "fig-05-06-05",
    "title": "Isolated Lab Environments: Loopback Isolation & Network Blast Radius Containment",
    "slug": "c05_m06_l03_01",
    "caption": "Figure 6.05: Loopback Isolation & Network Blast Radius Containment in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating Loopback Isolation & Network Blast Radius Containment",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Isolated Lab Environments - Loopback Isolation & Network Blast Radius Containment. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 6,
    "lesNum": 3,
    "figId": "fig-05-06-06",
    "title": "Isolated Lab Environments: Target Service Containerization & Port Binding",
    "slug": "c05_m06_l03_02",
    "caption": "Figure 6.06: Target Service Containerization & Port Binding workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Target Service Containerization & Port Binding",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Isolated Lab Environments - Target Service Containerization & Port Binding. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 6,
    "lesNum": 4,
    "figId": "fig-05-06-07",
    "title": "Vulnerability Chaining: Multi-Stage Vulnerability Chaining Attack Path",
    "slug": "c05_m06_l04_01",
    "caption": "Figure 6.07: Multi-Stage Vulnerability Chaining Attack Path in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating Multi-Stage Vulnerability Chaining Attack Path",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Vulnerability Chaining - Multi-Stage Vulnerability Chaining Attack Path. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 6,
    "lesNum": 4,
    "figId": "fig-05-06-08",
    "title": "Vulnerability Chaining: Privilege Boundary Collapse Graph",
    "slug": "c05_m06_l04_02",
    "caption": "Figure 6.08: Privilege Boundary Collapse Graph workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Privilege Boundary Collapse Graph",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Vulnerability Chaining - Privilege Boundary Collapse Graph. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 6,
    "lesNum": 5,
    "figId": "fig-05-06-09",
    "title": "Impact Demonstration: Denial of Service Risk vs Controlled Evidence",
    "slug": "c05_m06_l05_01",
    "caption": "Figure 6.09: Denial of Service Risk vs Controlled Evidence in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating Denial of Service Risk vs Controlled Evidence",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Impact Demonstration - Denial of Service Risk vs Controlled Evidence. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 6,
    "lesNum": 5,
    "figId": "fig-05-06-10",
    "title": "Impact Demonstration: System Resource Monitoring & Safety Safeguards",
    "slug": "c05_m06_l05_02",
    "caption": "Figure 6.10: System Resource Monitoring & Safety Safeguards workflow and validation mechanics.",
    "alt": "Process workflow diagram showing System Resource Monitoring & Safety Safeguards",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Impact Demonstration - System Resource Monitoring & Safety Safeguards. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 6,
    "lesNum": 6,
    "figId": "fig-05-06-11",
    "title": "Blue Team Defender View: SOC Ingestion: Attack Artifacts vs SIEM Telemetry",
    "slug": "c05_m06_l06_01",
    "caption": "Figure 6.11: SOC Ingestion: Attack Artifacts vs SIEM Telemetry in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating SOC Ingestion: Attack Artifacts vs SIEM Telemetry",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Blue Team Defender View - SOC Ingestion: Attack Artifacts vs SIEM Telemetry. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 6,
    "lesNum": 6,
    "figId": "fig-05-06-12",
    "title": "Blue Team Defender View: Sigma Rule & Snort Signature Correlation Flow",
    "slug": "c05_m06_l06_02",
    "caption": "Figure 6.12: Sigma Rule & Snort Signature Correlation Flow workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Sigma Rule & Snort Signature Correlation Flow",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Blue Team Defender View - Sigma Rule & Snort Signature Correlation Flow. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 7,
    "lesNum": 1,
    "figId": "fig-05-07-01",
    "title": "Privilege Boundaries & Least Privilege: Operating System Privilege Hierarchy Rings",
    "slug": "c05_m07_l01_01",
    "caption": "Figure 7.01: Operating System Privilege Hierarchy Rings in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating Operating System Privilege Hierarchy Rings",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Privilege Boundaries & Least Privilege - Operating System Privilege Hierarchy Rings. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 7,
    "lesNum": 1,
    "figId": "fig-05-07-02",
    "title": "Privilege Boundaries & Least Privilege: Role-Based vs Attribute-Based Access Control Models",
    "slug": "c05_m07_l01_02",
    "caption": "Figure 7.02: Role-Based vs Attribute-Based Access Control Models workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Role-Based vs Attribute-Based Access Control Models",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Privilege Boundaries & Least Privilege - Role-Based vs Attribute-Based Access Control Models. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 7,
    "lesNum": 2,
    "figId": "fig-05-07-03",
    "title": "Defensive Privilege Escalation: Vertical vs Horizontal Privilege Escalation Paths",
    "slug": "c05_m07_l02_01",
    "caption": "Figure 7.03: Vertical vs Horizontal Privilege Escalation Paths in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating Vertical vs Horizontal Privilege Escalation Paths",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Defensive Privilege Escalation - Vertical vs Horizontal Privilege Escalation Paths. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 7,
    "lesNum": 2,
    "figId": "fig-05-07-04",
    "title": "Defensive Privilege Escalation: Service Misconfiguration & SUID Abuse Vector",
    "slug": "c05_m07_l02_02",
    "caption": "Figure 7.04: Service Misconfiguration & SUID Abuse Vector workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Service Misconfiguration & SUID Abuse Vector",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Defensive Privilege Escalation - Service Misconfiguration & SUID Abuse Vector. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 7,
    "lesNum": 3,
    "figId": "fig-05-07-05",
    "title": "Assessing Finding Reach: Lateral Movement Reachability Graph",
    "slug": "c05_m07_l03_01",
    "caption": "Figure 7.05: Lateral Movement Reachability Graph in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating Lateral Movement Reachability Graph",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Assessing Finding Reach - Lateral Movement Reachability Graph. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 7,
    "lesNum": 3,
    "figId": "fig-05-07-06",
    "title": "Assessing Finding Reach: Network Segmentation & Zero Trust Blast Radius",
    "slug": "c05_m07_l03_02",
    "caption": "Figure 7.06: Network Segmentation & Zero Trust Blast Radius workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Network Segmentation & Zero Trust Blast Radius",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Assessing Finding Reach - Network Segmentation & Zero Trust Blast Radius. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 7,
    "lesNum": 4,
    "figId": "fig-05-07-07",
    "title": "Persistence Detection: Adversary Persistence Mechanism Taxonomy",
    "slug": "c05_m07_l04_01",
    "caption": "Figure 7.07: Adversary Persistence Mechanism Taxonomy in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating Adversary Persistence Mechanism Taxonomy",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Persistence Detection - Adversary Persistence Mechanism Taxonomy. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 7,
    "lesNum": 4,
    "figId": "fig-05-07-08",
    "title": "Persistence Detection: File Integrity Monitoring & Autorun Inspection Flow",
    "slug": "c05_m07_l04_02",
    "caption": "Figure 7.08: File Integrity Monitoring & Autorun Inspection Flow workflow and validation mechanics.",
    "alt": "Process workflow diagram showing File Integrity Monitoring & Autorun Inspection Flow",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Persistence Detection - File Integrity Monitoring & Autorun Inspection Flow. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 7,
    "lesNum": 5,
    "figId": "fig-05-07-09",
    "title": "Post-Engagement Cleanup: Post-Test Artifact Cleanup Checklist",
    "slug": "c05_m07_l05_01",
    "caption": "Figure 7.09: Post-Test Artifact Cleanup Checklist in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating Post-Test Artifact Cleanup Checklist",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Post-Engagement Cleanup - Post-Test Artifact Cleanup Checklist. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 7,
    "lesNum": 5,
    "figId": "fig-05-07-10",
    "title": "Post-Engagement Cleanup: System Restoration Verification Loop",
    "slug": "c05_m07_l05_02",
    "caption": "Figure 7.10: System Restoration Verification Loop workflow and validation mechanics.",
    "alt": "Process workflow diagram showing System Restoration Verification Loop",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Post-Engagement Cleanup - System Restoration Verification Loop. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 7,
    "lesNum": 6,
    "figId": "fig-05-07-11",
    "title": "Evidence Retention & Compliance: DPDP Act 2023 & GDPR Data Minimisation Protocol",
    "slug": "c05_m07_l06_01",
    "caption": "Figure 7.11: DPDP Act 2023 & GDPR Data Minimisation Protocol in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating DPDP Act 2023 & GDPR Data Minimisation Protocol",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Evidence Retention & Compliance - DPDP Act 2023 & GDPR Data Minimisation Protocol. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 7,
    "lesNum": 6,
    "figId": "fig-05-07-12",
    "title": "Evidence Retention & Compliance: Cryptographic Evidence Storage & Secure Deletion Flow",
    "slug": "c05_m07_l06_02",
    "caption": "Figure 7.12: Cryptographic Evidence Storage & Secure Deletion Flow workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Cryptographic Evidence Storage & Secure Deletion Flow",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Evidence Retention & Compliance - Cryptographic Evidence Storage & Secure Deletion Flow. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 8,
    "lesNum": 1,
    "figId": "fig-05-08-01",
    "title": "Professional Report Architecture: Multi-Audience Penetration Test Report Stack",
    "slug": "c05_m08_l01_01",
    "caption": "Figure 8.01: Multi-Audience Penetration Test Report Stack in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating Multi-Audience Penetration Test Report Stack",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Professional Report Architecture - Multi-Audience Penetration Test Report Stack. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 8,
    "lesNum": 1,
    "figId": "fig-05-08-02",
    "title": "Professional Report Architecture: Technical vs Executive Stakeholder Information Flow",
    "slug": "c05_m08_l01_02",
    "caption": "Figure 8.02: Technical vs Executive Stakeholder Information Flow workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Technical vs Executive Stakeholder Information Flow",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Professional Report Architecture - Technical vs Executive Stakeholder Information Flow. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 8,
    "lesNum": 2,
    "figId": "fig-05-08-03",
    "title": "Risk-Ranked Findings Delivery: Risk Matrix: Likelihood vs Impact Distribution",
    "slug": "c05_m08_l02_01",
    "caption": "Figure 8.03: Risk Matrix: Likelihood vs Impact Distribution in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating Risk Matrix: Likelihood vs Impact Distribution",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Risk-Ranked Findings Delivery - Risk Matrix: Likelihood vs Impact Distribution. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 8,
    "lesNum": 2,
    "figId": "fig-05-08-04",
    "title": "Risk-Ranked Findings Delivery: Vulnerability Finding Entry Layout Specification",
    "slug": "c05_m08_l02_02",
    "caption": "Figure 8.04: Vulnerability Finding Entry Layout Specification workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Vulnerability Finding Entry Layout Specification",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Risk-Ranked Findings Delivery - Vulnerability Finding Entry Layout Specification. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 8,
    "lesNum": 3,
    "figId": "fig-05-08-05",
    "title": "Actionable Remediation Guidance: Root-Cause Architecture vs Band-Aid Fix Comparison",
    "slug": "c05_m08_l03_01",
    "caption": "Figure 8.05: Root-Cause Architecture vs Band-Aid Fix Comparison in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating Root-Cause Architecture vs Band-Aid Fix Comparison",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Actionable Remediation Guidance - Root-Cause Architecture vs Band-Aid Fix Comparison. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 8,
    "lesNum": 3,
    "figId": "fig-05-08-06",
    "title": "Actionable Remediation Guidance: Remediation Patch Verification Code Diff (app vs app_fixed)",
    "slug": "c05_m08_l03_02",
    "caption": "Figure 8.06: Remediation Patch Verification Code Diff (app vs app_fixed) workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Remediation Patch Verification Code Diff (app vs app_fixed)",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Actionable Remediation Guidance - Remediation Patch Verification Code Diff (app vs app_fixed). Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 8,
    "lesNum": 4,
    "figId": "fig-05-08-07",
    "title": "The Executive Summary: C-Suite Risk Dashboard Visual Layout",
    "slug": "c05_m08_l04_01",
    "caption": "Figure 8.07: C-Suite Risk Dashboard Visual Layout in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating C-Suite Risk Dashboard Visual Layout",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: The Executive Summary - C-Suite Risk Dashboard Visual Layout. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 8,
    "lesNum": 4,
    "figId": "fig-05-08-08",
    "title": "The Executive Summary: Technical Vulnerability to Business Risk Translation",
    "slug": "c05_m08_l04_02",
    "caption": "Figure 8.08: Technical Vulnerability to Business Risk Translation workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Technical Vulnerability to Business Risk Translation",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: The Executive Summary - Technical Vulnerability to Business Risk Translation. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 8,
    "lesNum": 5,
    "figId": "fig-05-08-09",
    "title": "Retesting Protocols & Closure: Retesting & Remediation Validation Lifecycle",
    "slug": "c05_m08_l05_01",
    "caption": "Figure 8.09: Retesting & Remediation Validation Lifecycle in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating Retesting & Remediation Validation Lifecycle",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Retesting Protocols & Closure - Retesting & Remediation Validation Lifecycle. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 8,
    "lesNum": 5,
    "figId": "fig-05-08-10",
    "title": "Retesting Protocols & Closure: retest.py Automated Differential Verification Pipeline",
    "slug": "c05_m08_l05_02",
    "caption": "Figure 8.10: retest.py Automated Differential Verification Pipeline workflow and validation mechanics.",
    "alt": "Process workflow diagram showing retest.py Automated Differential Verification Pipeline",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Retesting Protocols & Closure - retest.py Automated Differential Verification Pipeline. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  },
  {
    "modNum": 8,
    "lesNum": 6,
    "figId": "fig-05-08-11",
    "title": "Capstone End-to-End Audit: Authorised End-to-End Pentest Methodology Lifecycle",
    "slug": "c05_m08_l06_01",
    "caption": "Figure 8.11: Authorised End-to-End Pentest Methodology Lifecycle in enterprise authorized penetration testing operations.",
    "alt": "Technical diagram illustrating Authorised End-to-End Pentest Methodology Lifecycle",
    "prompt": "Professional cybersecurity technical diagram, high-contrast crisp vector style. Topic: Capstone End-to-End Audit - Authorised End-to-End Pentest Methodology Lifecycle. High contrast, obsidian background (#070A0F) or stark white (#FFFFFF), amber accents (#FF7A00), precise technical labels, zero fluff, publication quality."
  },
  {
    "modNum": 8,
    "lesNum": 6,
    "figId": "fig-05-08-12",
    "title": "Capstone End-to-End Audit: Professional Security Readiness Competency Radar",
    "slug": "c05_m08_l06_02",
    "caption": "Figure 8.12: Professional Security Readiness Competency Radar workflow and validation mechanics.",
    "alt": "Process workflow diagram showing Professional Security Readiness Competency Radar",
    "prompt": "Modern vector systems workflow diagram, clean layout. Topic: Capstone End-to-End Audit - Professional Security Readiness Competency Radar. Step-by-step sequential arrows, amber highlight markers (#FF7A00), clear decision blocks, razor-sharp typography, technical documentation standard."
  }
];
