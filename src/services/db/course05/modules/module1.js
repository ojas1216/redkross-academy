/**
 * Course 05: Ethical Hacking and Penetration Testing — Module 1 Data
 * Module ID: mod_c5_1 | 6 Lessons | 20 Embedded Representative MCQs (from 200-question bank)
 */
export const module1Data = {
  "id": "mod_c5_1",
  "title": "Module 1: Professional Methodology",
  "description": "Establish lawful testing boundaries under Section 43/66 IT Act 2000 and CFAA, draft unambiguous Rules of Engagement and in-scope target matrices, align NIST SP 800-115 with PTES execution models, implement fragile service safety and stop conditions, secure cryptographic evidence chains of custody, and contractually define grey-box retesting lifecycles.",
  "order": 1,
  "quiz": {
    "id": "quiz_mod_c5_1",
    "title": "Module 1: Professional Methodology Assessment",
    "pass_threshold": 80,
    "passing_score": 80,
    "duration_minutes": 20,
    "total_questions": 20,
    "token_bounty": 100,
    "questions": [
      {
        "id": "q_c5_m1_001",
        "topic": "Legal Authorization & Section 43/66 IT Act 2000",
        "difficulty": "medium",
        "q": "What single factor legally distinguishes an authorized penetration test from a criminal computer intrusion under Section 43 and 66 of the Information Technology Act 2000?",
        "options": [
          "Explicit written authorization from someone with legal authority over the target",
          "Using open-source penetration testing tools rather than commercial exploit frameworks",
          "Executing security scans exclusively during off-peak weekend hours",
          "Possessing an industry-recognized technical certification"
        ],
        "correct": 0,
        "explanation": "Authorization is the sole legal demarcation between authorized penetration testing and criminal intrusion. Without written authorization from the legitimate system owner or empowered officer, probing a computer system constitutes an offense under Section 43/66 of the IT Act 2000."
      },
      {
        "id": "q_c5_m1_003",
        "topic": "Signatory Authority & Asset Ownership Verification",
        "difficulty": "medium",
        "q": "In an enterprise Rules of Engagement (RoE) document, why is an explicit 'Out-of-Scope' section as critical as the 'In-Scope' target list?",
        "options": [
          "It establishes unambiguous boundaries, preventing testers from accidentally probing third-party SaaS, shared hypervisors, or fragile production services",
          "It satisfies standard word-count quotas required by cyber insurance underwriters",
          "It lists systems that the tester is encouraged to explore if time permits during the engagement",
          "It replaces the need for network firewall logging during the assessment window"
        ],
        "correct": 0,
        "explanation": "Ambiguity in scope is the primary cause of legal jeopardy and operational outages. An explicit out-of-scope section unambiguously demarcates third-party cloud infrastructure, shared multi-tenant services, and fragile production databases."
      },
      {
        "id": "q_c5_m1_005",
        "topic": "NIST SP 800-115 Four-Phase Methodology",
        "difficulty": "medium",
        "q": "Why is the Attack-to-Discovery feedback loop fundamental to penetration testing methodology in both NIST SP 800-115 and PTES?",
        "options": [
          "Testing is iterative: newly verified access, uncovered credentials, or internal subnets feed directly back into Discovery for deeper analysis",
          "It enforces a strict linear sequence where testers can never revisit prior phases",
          "It automates report generation directly from network packet captures",
          "It ensures scanners run continuously without manual human supervision"
        ],
        "correct": 0,
        "explanation": "Penetration testing is non-linear and iterative. Successfully verifying an attack frequently unmasks internal network interfaces, application configuration files, or database credentials that expand the known attack surface, requiring new Discovery."
      },
      {
        "id": "q_c5_m1_007",
        "topic": "Safety Protocols, Fragile Services & DoS Avoidance",
        "difficulty": "medium",
        "q": "What technical evidence must accompany a vulnerability finding in a professional penetration testing report to ensure complete reproducibility and legal integrity?",
        "options": [
          "The exact raw HTTP request/response or terminal command/output paired with a UTC timestamp and SHA-256 cryptographic hash",
          "The tester's personal assessment of target security hygiene without technical logs",
          "A commercial scanner's default vulnerability description copied directly from the vendor database",
          "A screenshot of the target homepage showing the browser address bar"
        ],
        "correct": 0,
        "explanation": "Professional evidence requires ground-truth technical proof: the exact inputs sent, the server's exact raw response, precise UTC timestamps, and cryptographic hashes to guarantee chain of custody and allow client engineering teams to reproduce the flaw."
      },
      {
        "id": "q_c5_m1_009",
        "topic": "Cryptographic Evidence Vault & SHA-256 Chain of Custody",
        "difficulty": "medium",
        "q": "In the 2019 Coalfire Iowa courthouse incident, what critical scoping failure led to the criminal arrest of two authorized penetration testers?",
        "options": [
          "The state judicial branch authorized the physical test, but local county authorities who had jurisdiction over the specific building were not informed",
          "The testers used unencrypted laptops to store client vulnerability data",
          "The engagement was scheduled on a weekend without security guards present",
          "The testers deployed automated exploit tools that damaged the building's access control firmware"
        ],
        "correct": 0,
        "explanation": "In the Coalfire case, the state contract authorizer lacked unambiguous legal authority over the physical county building. The failure to align local authorities created a catastrophic jurisdictional gap, proving that authority must cover the specific target asset."
      },
      {
        "id": "q_c5_m1_011",
        "topic": "Legal Authorization & Section 43/66 IT Act 2000",
        "difficulty": "medium",
        "q": "In an enterprise penetration test targeting Legal Authorization & Section 43/66 IT Act 2000, which procedural safeguard prevents legal liability when evaluating corporate subnets?",
        "options": [
          "Obtaining explicit written consent from the verified asset owner and ratifying strict CIDR exclusions in the Rules of Engagement.",
          "Using randomized source IP addresses through open proxy relays to obscure the testing origin.",
          "Conducting assessments exclusively through commercial automated cloud vulnerability scanners.",
          "Executing test traffic under administrative service accounts without client logging."
        ],
        "correct": 0,
        "explanation": "Legal protection requires explicit written consent from the verified asset owner and detailed Rules of Engagement defining in-scope and out-of-scope targets."
      },
      {
        "id": "q_c5_m1_012",
        "topic": "Computer Fraud and Abuse Act (CFAA) & Jurisdictional Boundaries",
        "difficulty": "medium",
        "q": "In an enterprise penetration test targeting Computer Fraud and Abuse Act (CFAA) & Jurisdictional Boundaries, which procedural safeguard prevents legal liability when evaluating corporate subnets?",
        "options": [
          "Obtaining explicit written consent from the verified asset owner and ratifying strict CIDR exclusions in the Rules of Engagement.",
          "Using randomized source IP addresses through open proxy relays to obscure the testing origin.",
          "Conducting assessments exclusively through commercial automated cloud vulnerability scanners.",
          "Executing test traffic under administrative service accounts without client logging."
        ],
        "correct": 0,
        "explanation": "Legal protection requires explicit written consent from the verified asset owner and detailed Rules of Engagement defining in-scope and out-of-scope targets."
      },
      {
        "id": "q_c5_m1_013",
        "topic": "Signatory Authority & Asset Ownership Verification",
        "difficulty": "medium",
        "q": "In an enterprise penetration test targeting Signatory Authority & Asset Ownership Verification, which procedural safeguard prevents legal liability when evaluating corporate subnets?",
        "options": [
          "Obtaining explicit written consent from the verified asset owner and ratifying strict CIDR exclusions in the Rules of Engagement.",
          "Using randomized source IP addresses through open proxy relays to obscure the testing origin.",
          "Conducting assessments exclusively through commercial automated cloud vulnerability scanners.",
          "Executing test traffic under administrative service accounts without client logging."
        ],
        "correct": 0,
        "explanation": "Legal protection requires explicit written consent from the verified asset owner and detailed Rules of Engagement defining in-scope and out-of-scope targets."
      },
      {
        "id": "q_c5_m1_014",
        "topic": "Rules of Engagement (RoE) & In-Scope Target Matrix",
        "difficulty": "medium",
        "q": "In an enterprise penetration test targeting Rules of Engagement (RoE) & In-Scope Target Matrix, which procedural safeguard prevents legal liability when evaluating corporate subnets?",
        "options": [
          "Obtaining explicit written consent from the verified asset owner and ratifying strict CIDR exclusions in the Rules of Engagement.",
          "Using randomized source IP addresses through open proxy relays to obscure the testing origin.",
          "Conducting assessments exclusively through commercial automated cloud vulnerability scanners.",
          "Executing test traffic under administrative service accounts without client logging."
        ],
        "correct": 0,
        "explanation": "Legal protection requires explicit written consent from the verified asset owner and detailed Rules of Engagement defining in-scope and out-of-scope targets."
      },
      {
        "id": "q_c5_m1_015",
        "topic": "NIST SP 800-115 Four-Phase Methodology",
        "difficulty": "medium",
        "q": "In an enterprise penetration test targeting NIST SP 800-115 Four-Phase Methodology, which procedural safeguard prevents legal liability when evaluating corporate subnets?",
        "options": [
          "Obtaining explicit written consent from the verified asset owner and ratifying strict CIDR exclusions in the Rules of Engagement.",
          "Using randomized source IP addresses through open proxy relays to obscure the testing origin.",
          "Conducting assessments exclusively through commercial automated cloud vulnerability scanners.",
          "Executing test traffic under administrative service accounts without client logging."
        ],
        "correct": 0,
        "explanation": "Legal protection requires explicit written consent from the verified asset owner and detailed Rules of Engagement defining in-scope and out-of-scope targets."
      },
      {
        "id": "q_c5_m1_002",
        "topic": "Computer Fraud and Abuse Act (CFAA) & Jurisdictional Boundaries",
        "difficulty": "difficult",
        "q": "Who possesses the legal capacity to validly sign a penetration testing authorization and Rules of Engagement (RoE) agreement?",
        "options": [
          "The system owner or an executive officer legally empowered to act for the organization",
          "Any system administrator who manages the server hosting the target application",
          "The lead penetration tester conducting the assessment",
          "Any employee who requests a security evaluation of their department's portal"
        ],
        "correct": 0,
        "explanation": "Only the legal owner of the system or an officer legally empowered to contractually bind the organization (e.g., CISO, VP Infrastructure, General Counsel) can grant authorization. System administrators and project managers lack corporate authority to permit simulated cyber attacks."
      },
      {
        "id": "q_c5_m1_004",
        "topic": "Rules of Engagement (RoE) & In-Scope Target Matrix",
        "difficulty": "difficult",
        "q": "According to NIST SP 800-115 ('Technical Guide to Information Security Testing and Assessment'), what are the four formal phases of a penetration test?",
        "options": [
          "Planning, Discovery, Attack, Reporting",
          "Scan, Exploit, Pivot, Exfiltrate",
          "Reconnaissance, Weaponization, Delivery, Exploitation",
          "Plan, Do, Check, Act"
        ],
        "correct": 0,
        "explanation": "NIST SP 800-115 structures technical security assessments into four distinct phases: Planning (scoping and approval), Discovery (information gathering and vulnerability analysis), Attack (controlled verification), and Reporting (risk documentation)."
      },
      {
        "id": "q_c5_m1_006",
        "topic": "Penetration Testing Execution Standard (PTES) Alignment",
        "difficulty": "difficult",
        "q": "During an active engagement, what constitutes an immediate 'Emergency Stop Condition' requiring testers to freeze activities and notify the client lead?",
        "options": [
          "Discovering an out-of-scope system is being probed, observing service latency spikes, or finding evidence of an active real-world breach",
          "The scheduled end of the tester's standard 8-hour workday",
          "A port scanner detecting that TCP port 80 or 443 is open on the target host",
          "The automated vulnerability scanner completing 50% of its scheduled port probes"
        ],
        "correct": 0,
        "explanation": "Stop conditions are pre-agreed triggers that halt testing immediately to avoid catastrophic harm: reaching an unauthorized target, degrading target availability, or discovering pre-existing adversary webshells/compromise (which becomes an active incident)."
      },
      {
        "id": "q_c5_m1_008",
        "topic": "Emergency Stop Conditions & Freeze Decision Trees",
        "difficulty": "difficult",
        "q": "What defines a 'Grey-Box' penetration testing engagement compared to Black-Box and White-Box assessments?",
        "options": [
          "The tester receives partial architectural context (such as API documentation or standard user credentials) simulating an insider or authenticated adversary",
          "The tester receives zero prior information and must perform extensive external reconnaissance",
          "The tester is granted full access to source code repositories, architectural blueprints, and developer interviews",
          "The engagement is conducted without a signed Rules of Engagement agreement"
        ],
        "correct": 0,
        "explanation": "Grey-box testing provides the tester with partial internal knowledge (e.g. low-privilege accounts, API schemas), maximizing testing efficiency and simulating an authenticated user or compromised employee without the high reconnaissance overhead of black-box testing."
      },
      {
        "id": "q_c5_m1_010",
        "topic": "Engagement Visibility Models (Black, Grey, White Box)",
        "difficulty": "difficult",
        "q": "How does the Course 05 lab environment technically enforce in-scope target boundaries in the provided Python tools (enumerate.py, verify.py)?",
        "options": [
          "The Python scripts explicitly inspect target addresses and refuse to execute against any destination other than loopback (127.0.0.1)",
          "The operating system network stack blocks outgoing packets using hardware firewalls",
          "The tools query a public DNS resolver to verify client ownership before connecting",
          "The scripts require a cryptographic license key issued by a commercial vendor"
        ],
        "correct": 0,
        "explanation": "The lab tools technically enforce safety in code: enumerate.py and verify.py strictly validate host arguments and abort immediately if the target address is anything other than 127.0.0.1 (loopback), preventing accidental scanning of external hosts."
      },
      {
        "id": "q_c5_m1_106",
        "topic": "Emergency Stop Conditions & Freeze Decision Trees",
        "difficulty": "difficult",
        "q": "During testing of Emergency Stop Conditions & Freeze Decision Trees, an analyst encounters a third-party cloud database linked to an in-scope web application. Why must the tester immediately halt testing against this database?",
        "options": [
          "Probing multi-tenant third-party infrastructure without explicit authorization from the cloud provider and database owner violates computer crime statutes and contract boundaries.",
          "Third-party cloud databases automatically drop TCP SYN packets, invalidating scanner timing algorithms.",
          "Automated testing against cloud storage triggers mandatory 24-hour DNS lockouts across all corporate subnets.",
          "Cloud databases store data in proprietary binary schemas that require commercial reverse-engineering licenses."
        ],
        "correct": 0,
        "explanation": "Shared or third-party infrastructure requires explicit authorization from both the tenant and the cloud provider. Testing beyond the authorized scope violates Section 43/66 of the IT Act 2000 and the CFAA."
      },
      {
        "id": "q_c5_m1_107",
        "topic": "Cryptographic Evidence Vault & SHA-256 Chain of Custody",
        "difficulty": "difficult",
        "q": "During testing of Cryptographic Evidence Vault & SHA-256 Chain of Custody, an analyst encounters a third-party cloud database linked to an in-scope web application. Why must the tester immediately halt testing against this database?",
        "options": [
          "Probing multi-tenant third-party infrastructure without explicit authorization from the cloud provider and database owner violates computer crime statutes and contract boundaries.",
          "Third-party cloud databases automatically drop TCP SYN packets, invalidating scanner timing algorithms.",
          "Automated testing against cloud storage triggers mandatory 24-hour DNS lockouts across all corporate subnets.",
          "Cloud databases store data in proprietary binary schemas that require commercial reverse-engineering licenses."
        ],
        "correct": 0,
        "explanation": "Shared or third-party infrastructure requires explicit authorization from both the tenant and the cloud provider. Testing beyond the authorized scope violates Section 43/66 of the IT Act 2000 and the CFAA."
      },
      {
        "id": "q_c5_m1_108",
        "topic": "Engagement Visibility Models (Black, Grey, White Box)",
        "difficulty": "difficult",
        "q": "During testing of Engagement Visibility Models (Black, Grey, White Box), an analyst encounters a third-party cloud database linked to an in-scope web application. Why must the tester immediately halt testing against this database?",
        "options": [
          "Probing multi-tenant third-party infrastructure without explicit authorization from the cloud provider and database owner violates computer crime statutes and contract boundaries.",
          "Third-party cloud databases automatically drop TCP SYN packets, invalidating scanner timing algorithms.",
          "Automated testing against cloud storage triggers mandatory 24-hour DNS lockouts across all corporate subnets.",
          "Cloud databases store data in proprietary binary schemas that require commercial reverse-engineering licenses."
        ],
        "correct": 0,
        "explanation": "Shared or third-party infrastructure requires explicit authorization from both the tenant and the cloud provider. Testing beyond the authorized scope violates Section 43/66 of the IT Act 2000 and the CFAA."
      },
      {
        "id": "q_c5_m1_109",
        "topic": "Retesting Obligations & Remediation Contracts",
        "difficulty": "difficult",
        "q": "During testing of Retesting Obligations & Remediation Contracts, an analyst encounters a third-party cloud database linked to an in-scope web application. Why must the tester immediately halt testing against this database?",
        "options": [
          "Probing multi-tenant third-party infrastructure without explicit authorization from the cloud provider and database owner violates computer crime statutes and contract boundaries.",
          "Third-party cloud databases automatically drop TCP SYN packets, invalidating scanner timing algorithms.",
          "Automated testing against cloud storage triggers mandatory 24-hour DNS lockouts across all corporate subnets.",
          "Cloud databases store data in proprietary binary schemas that require commercial reverse-engineering licenses."
        ],
        "correct": 0,
        "explanation": "Shared or third-party infrastructure requires explicit authorization from both the tenant and the cloud provider. Testing beyond the authorized scope violates Section 43/66 of the IT Act 2000 and the CFAA."
      },
      {
        "id": "q_c5_m1_110",
        "topic": "Legal Authorization & Section 43/66 IT Act 2000",
        "difficulty": "difficult",
        "q": "During testing of Legal Authorization & Section 43/66 IT Act 2000, an analyst encounters a third-party cloud database linked to an in-scope web application. Why must the tester immediately halt testing against this database?",
        "options": [
          "Probing multi-tenant third-party infrastructure without explicit authorization from the cloud provider and database owner violates computer crime statutes and contract boundaries.",
          "Third-party cloud databases automatically drop TCP SYN packets, invalidating scanner timing algorithms.",
          "Automated testing against cloud storage triggers mandatory 24-hour DNS lockouts across all corporate subnets.",
          "Cloud databases store data in proprietary binary schemas that require commercial reverse-engineering licenses."
        ],
        "correct": 0,
        "explanation": "Shared or third-party infrastructure requires explicit authorization from both the tenant and the cloud provider. Testing beyond the authorized scope violates Section 43/66 of the IT Act 2000 and the CFAA."
      }
    ]
  },
  "lessons": [
    {
      "id": "les_c5_m1_l1",
      "title": "1.1 Authorisation: The Line Between Testing and Crime",
      "duration": "45 mins",
      "is_mandatory": true,
      "summary": "Comprehensive instruction covering 1.1 authorisation: the line between testing and crime, procedural frameworks, and verified operational guidelines.",
      "learning_objectives": [
        "Understand the theoretical principles and governance standards behind 1.1 Authorisation: The Line Between Testing and Crime",
        "Apply technical verification techniques using authorized loopback tools",
        "Analyze visual architecture models and operational process workflows",
        "Record reproducible evidentiary artifacts adhering to professional chain-of-custody standards"
      ],
      "diagram_slots": [
        {
          "id": "fig-05-01-01",
          "asset_path": "/assets/courses/cyber-05/c05_m01_l01_legal_authorisation_boundary.png",
          "caption": "Figure 1.1: Authorisation boundary separating lawful security assessments from criminal computer intrusion under Section 43/66 IT Act 2000 and CFAA.",
          "placement_hint": "After Section 2 (Core Operational Pillars)"
        },
        {
          "id": "fig-05-01-02",
          "asset_path": "/assets/courses/cyber-05/c05_m01_l01_engagement_lifecycle_flow.png",
          "caption": "Figure 1.2: Strict sequential protocol required before transmitting packets to target infrastructure.",
          "placement_hint": "After Section 5 (Process Sequence)"
        }
      ],
      "images": [
        {
          "id": "fig-05-01-01",
          "title": "Authorisation Boundary: Lawful Security Assessment vs. Cyber Crime",
          "url": "/assets/courses/cyber-05/c05_m01_l01_legal_authorisation_boundary.png",
          "caption": "Figure 1.1: Authorisation boundary separating lawful security assessments from criminal computer intrusion under Section 43/66 IT Act 2000 and CFAA.",
          "alt": "Diagram contrasting unauthorized access hazards with lawful penetration testing bounded by explicit written executive consent"
        },
        {
          "id": "fig-05-01-02",
          "title": "Pre-Engagement Authorisation & Scoping Verification Protocol",
          "url": "/assets/courses/cyber-05/c05_m01_l01_engagement_lifecycle_flow.png",
          "caption": "Figure 1.2: Strict sequential protocol required before transmitting packets to target infrastructure.",
          "alt": "Flowchart showing asset ownership verification, scope boundary demarcation, RoE sign-off, emergency escalation setup, and testing greenlight"
        }
      ],
      "content": "## 1. Executive Concept & Theoretical Overview\n\nAuthorisation is written permission to test, granted by someone with the\nAUTHORITY to permit it - which means the owner of the system, or an officer\nempowered to act for the owner, not merely a system administrator or a\nsponsor who \"wants a test\". A valid authorisation names the systems, the\npermitted activities, the time window, the people authorised to perform it,\nand is signed and dated before any activity begins. A tester who exceeds the\nauthorisation - even by probing an adjacent system \"to be thorough\" - steps\noutside the law and the contract. The course's golden rule follows directly:\nyou will only ever test the authorised lab you build and own; the lab tools\nare written to refuse any other address, so the boundary is enforced in code\nas well as on paper.\n\nProfessional penetration testing is the practice of evaluating computer systems, networks, and web applications to discover security vulnerabilities that an adversary could exploit. Unlike malicious attacks, authorized security testing is conducted with the explicit written permission of the asset owner, within a tightly defined scope, and adhering to strict Rules of Engagement (RoE).\n\n## 2. Core Operational Pillars & Technical Specifications\n\n- **Governance & Authority:** Every technical probe must be anchored to verifiable authority. Testing without written approval violates computer crime legislation regardless of intent.\n- **Boundary Discipline:** Target networks must be precisely bounded by IP CIDR ranges, domain names, and testing windows. Probing adjacent systems or third-party infrastructure constitutes an immediate breach of contract.\n- **Non-Destructive Methodology:** Evaluators prioritize minimal safe proofs of concept, verifying the existence of vulnerabilities without corrupting production databases or exhausting network resources.\n- **Reproducible Evidence:** Findings must be recorded with exact input vectors, raw HTTP headers, terminal outputs, UTC timestamps, and cryptographic hashes to guarantee evidentiary integrity.\n\n![Authorisation Boundary: Lawful Security Assessment vs. Cyber Crime](/assets/courses/cyber-05/c05_m01_l01_legal_authorisation_boundary.png)\n\n*Figure 1.1: Authorisation boundary separating lawful security assessments from criminal computer intrusion under Section 43/66 IT Act 2000 and CFAA.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Structural Boundary Demarcation:** The diagram visualizes the critical divide between authorized evaluation zones and unauthorized spaces. The central gateway represents the verified authorization boundary.\n- **Component Interactions:** Data flows from left to right through formal sign-off checkpoints. Probes that fail verification are immediately deflected into compliance alert channels.\n- **High-Contrast Indicators:** Amber accents (#FF7A00) demarcate active testing perimeters, while green highlights indicate authorized targets and red flags identify strictly out-of-scope assets.\n\n## 5. Process Sequence & Operational Execution\n\n![Pre-Engagement Authorisation & Scoping Verification Protocol](/assets/courses/cyber-05/c05_m01_l01_engagement_lifecycle_flow.png)\n\n*Figure 1.2: Strict sequential protocol required before transmitting packets to target infrastructure.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Sequential Workflow Pipeline:** Illustrates the end-to-end execution flow, detailing the decision trees, state transitions, and verification milestones.\n- **Feedback & Escalation Loops:** When an anomaly or potential outage trigger occurs, the workflow establishes an immediate freeze and out-of-band notification protocol.\n- **Audit Traceability:** Every operational milestone requires an empirical evidence capture, generating an immutable record for the final deliverables ledger.\n\n## 6. Key Terminology & Standard Definitions\n\n- **Rules of Engagement (RoE):** Contractual document formalizing permissible testing techniques, exclusion matrices, testing time windows, and emergency contacts.\n- **Minimal Proof-of-Concept:** The least intrusive empirical assertion required to definitively prove a vulnerability exists without destabilizing services.\n- **Chain of Custody:** The chronological documentation showing the custody, control, transfer, analysis, and disposition of digital evidence.\n- **Retesting Verification:** Independent re-execution of verified assessment tests against remediated targets to empirically confirm vulnerability closure.\n"
    },
    {
      "id": "les_c5_m1_l2",
      "title": "1.2 Scope and Rules of Engagement",
      "duration": "50 mins",
      "is_mandatory": true,
      "summary": "Comprehensive instruction covering 1.2 scope and rules of engagement, procedural frameworks, and verified operational guidelines.",
      "learning_objectives": [
        "Understand the theoretical principles and governance standards behind 1.2 Scope and Rules of Engagement",
        "Apply technical verification techniques using authorized loopback tools",
        "Analyze visual architecture models and operational process workflows",
        "Record reproducible evidentiary artifacts adhering to professional chain-of-custody standards"
      ],
      "diagram_slots": [
        {
          "id": "fig-05-01-03",
          "asset_path": "/assets/courses/cyber-05/c05_m01_l02_scope_exclusion_taxonomy.png",
          "caption": "Figure 1.3: Target matrix categorizing enterprise assets into In-Scope, Out-of-Scope, and Conditional-Scope zones.",
          "placement_hint": "After Section 2 (Core Operational Pillars)"
        },
        {
          "id": "fig-05-01-04",
          "asset_path": "/assets/courses/cyber-05/c05_m01_l02_roe_communication_matrix.png",
          "caption": "Figure 1.4: Real-time operational communication loop between penetration testing team and client SOC during high-severity discoveries or service degradation.",
          "placement_hint": "After Section 5 (Process Sequence)"
        }
      ],
      "images": [
        {
          "id": "fig-05-01-03",
          "title": "Enterprise Penetration Testing Scope & Boundary Taxonomy",
          "url": "/assets/courses/cyber-05/c05_m01_l02_scope_exclusion_taxonomy.png",
          "caption": "Figure 1.3: Target matrix categorizing enterprise assets into In-Scope, Out-of-Scope, and Conditional-Scope zones.",
          "alt": "Target boundary diagram illustrating in-scope IP ranges, out-of-scope third-party SaaS and core infrastructure, and conditional off-hours targets"
        },
        {
          "id": "fig-05-01-04",
          "title": "Rules of Engagement: Critical Finding Escalation & Incident De-confliction Loop",
          "url": "/assets/courses/cyber-05/c05_m01_l02_roe_communication_matrix.png",
          "caption": "Figure 1.4: Real-time operational communication loop between penetration testing team and client SOC during high-severity discoveries or service degradation.",
          "alt": "Operational workflow showing penetration tester finding critical vulnerability, out-of-band notification, client SOC de-confliction, and test resumption"
        }
      ],
      "content": "## 1. Executive Concept & Theoretical Overview\n\nScope defines WHAT may be tested; rules of engagement (RoE) define HOW. A\ncomplete scope lists in-scope targets (addresses, host names, applications,\naccounts) and, just as importantly, EXPLICITLY OUT-OF-SCOPE items. RoE cover:\npermitted and forbidden techniques (for example, no denial-of-service, no\ndata destruction, no social engineering unless named); test windows;\nnotification and escalation (who to call, and when to stop and report a\ncritical finding immediately); handling of any data encountered; and legal\nand emergency contacts. The lab's scope.md is a filled-in example: a single\nloopback target, a short list of permitted activities, an explicit\nout-of-scope section, and stop conditions. Writing scope and RoE is not\npaperwork for its own sake - it is what keeps a test safe, legal and useful.\n\nProfessional penetration testing is the practice of evaluating computer systems, networks, and web applications to discover security vulnerabilities that an adversary could exploit. Unlike malicious attacks, authorized security testing is conducted with the explicit written permission of the asset owner, within a tightly defined scope, and adhering to strict Rules of Engagement (RoE).\n\n## 2. Core Operational Pillars & Technical Specifications\n\n- **Governance & Authority:** Every technical probe must be anchored to verifiable authority. Testing without written approval violates computer crime legislation regardless of intent.\n- **Boundary Discipline:** Target networks must be precisely bounded by IP CIDR ranges, domain names, and testing windows. Probing adjacent systems or third-party infrastructure constitutes an immediate breach of contract.\n- **Non-Destructive Methodology:** Evaluators prioritize minimal safe proofs of concept, verifying the existence of vulnerabilities without corrupting production databases or exhausting network resources.\n- **Reproducible Evidence:** Findings must be recorded with exact input vectors, raw HTTP headers, terminal outputs, UTC timestamps, and cryptographic hashes to guarantee evidentiary integrity.\n\n![Enterprise Penetration Testing Scope & Boundary Taxonomy](/assets/courses/cyber-05/c05_m01_l02_scope_exclusion_taxonomy.png)\n\n*Figure 1.3: Target matrix categorizing enterprise assets into In-Scope, Out-of-Scope, and Conditional-Scope zones.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Structural Boundary Demarcation:** The diagram visualizes the critical divide between authorized evaluation zones and unauthorized spaces. The central gateway represents the verified authorization boundary.\n- **Component Interactions:** Data flows from left to right through formal sign-off checkpoints. Probes that fail verification are immediately deflected into compliance alert channels.\n- **High-Contrast Indicators:** Amber accents (#FF7A00) demarcate active testing perimeters, while green highlights indicate authorized targets and red flags identify strictly out-of-scope assets.\n\n## 5. Process Sequence & Operational Execution\n\n![Rules of Engagement: Critical Finding Escalation & Incident De-confliction Loop](/assets/courses/cyber-05/c05_m01_l02_roe_communication_matrix.png)\n\n*Figure 1.4: Real-time operational communication loop between penetration testing team and client SOC during high-severity discoveries or service degradation.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Sequential Workflow Pipeline:** Illustrates the end-to-end execution flow, detailing the decision trees, state transitions, and verification milestones.\n- **Feedback & Escalation Loops:** When an anomaly or potential outage trigger occurs, the workflow establishes an immediate freeze and out-of-band notification protocol.\n- **Audit Traceability:** Every operational milestone requires an empirical evidence capture, generating an immutable record for the final deliverables ledger.\n\n## 6. Key Terminology & Standard Definitions\n\n- **Rules of Engagement (RoE):** Contractual document formalizing permissible testing techniques, exclusion matrices, testing time windows, and emergency contacts.\n- **Minimal Proof-of-Concept:** The least intrusive empirical assertion required to definitively prove a vulnerability exists without destabilizing services.\n- **Chain of Custody:** The chronological documentation showing the custody, control, transfer, analysis, and disposition of digital evidence.\n- **Retesting Verification:** Independent re-execution of verified assessment tests against remediated targets to empirically confirm vulnerability closure.\n"
    },
    {
      "id": "les_c5_m1_l3",
      "title": "1.3 Methodologies: NIST SP 800-115 and PTES",
      "duration": "50 mins",
      "is_mandatory": true,
      "summary": "Comprehensive instruction covering 1.3 methodologies: nist sp 800-115 and ptes, procedural frameworks, and verified operational guidelines.",
      "learning_objectives": [
        "Understand the theoretical principles and governance standards behind 1.3 Methodologies: NIST SP 800-115 and PTES",
        "Apply technical verification techniques using authorized loopback tools",
        "Analyze visual architecture models and operational process workflows",
        "Record reproducible evidentiary artifacts adhering to professional chain-of-custody standards"
      ],
      "diagram_slots": [
        {
          "id": "fig-05-01-05",
          "asset_path": "/assets/courses/cyber-05/c05_m01_l03_methodology_phase_alignment.png",
          "caption": "Figure 1.5: Comparative alignment between NIST SP 800-115 four phases and PTES seven execution phases.",
          "placement_hint": "After Section 2 (Core Operational Pillars)"
        },
        {
          "id": "fig-05-01-06",
          "asset_path": "/assets/courses/cyber-05/c05_m01_l03_iterative_testing_loop.png",
          "caption": "Figure 1.6: The non-linear feedback loop returning newly exposed attack surface and harvested credentials into discovery.",
          "placement_hint": "After Section 5 (Process Sequence)"
        }
      ],
      "images": [
        {
          "id": "fig-05-01-05",
          "title": "Professional Security Testing Methodologies: NIST SP 800-115 vs. PTES",
          "url": "/assets/courses/cyber-05/c05_m01_l03_methodology_phase_alignment.png",
          "caption": "Figure 1.5: Comparative alignment between NIST SP 800-115 four phases and PTES seven execution phases.",
          "alt": "Comparative architectural chart mapping NIST Planning, Discovery, Attack, and Reporting to PTES 7-phase model"
        },
        {
          "id": "fig-05-01-06",
          "title": "Iterative Testing Loop: Attack-to-Discovery Feedback Engine",
          "url": "/assets/courses/cyber-05/c05_m01_l03_iterative_testing_loop.png",
          "caption": "Figure 1.6: The non-linear feedback loop returning newly exposed attack surface and harvested credentials into discovery.",
          "alt": "Circular state transition diagram showing Discovery feeding Attack, which feeds back new credentials and subnets into Discovery"
        }
      ],
      "content": "## 1. Executive Concept & Theoretical Overview\n\nRecognised methodologies give a test structure, repeatability and coverage.\nNIST SP 800-115, the \"Technical Guide to Information Security Testing and\nAssessment\" (2008), describes penetration testing in FOUR PHASES\n[C05-M01-R1]:\n  Planning    rules, approval and goals are set; no testing happens yet.\n  Discovery   information gathering and vulnerability analysis.\n  Attack      verifying vulnerabilities, with a feedback loop back to\n              Discovery as new information is found.\n  Reporting   documenting findings, risk and recommendations.\nThe Attack-to-Discovery feedback loop is important: testing is iterative, not\na straight line. The Penetration Testing Execution Standard (PTES) describes\na fuller lifecycle - pre-engagement interactions, intelligence gathering,\nthreat modelling, vulnerability analysis, exploitation, post-exploitation and\nreporting [C05-M01-R2]. This course follows the NIST four phases as its spine\nand uses PTES vocabulary where it is sharper. Either way, planning and\nreporting bracket the technical work.\n\nProfessional penetration testing is the practice of evaluating computer systems, networks, and web applications to discover security vulnerabilities that an adversary could exploit. Unlike malicious attacks, authorized security testing is conducted with the explicit written permission of the asset owner, within a tightly defined scope, and adhering to strict Rules of Engagement (RoE).\n\n## 2. Core Operational Pillars & Technical Specifications\n\n- **Governance & Authority:** Every technical probe must be anchored to verifiable authority. Testing without written approval violates computer crime legislation regardless of intent.\n- **Boundary Discipline:** Target networks must be precisely bounded by IP CIDR ranges, domain names, and testing windows. Probing adjacent systems or third-party infrastructure constitutes an immediate breach of contract.\n- **Non-Destructive Methodology:** Evaluators prioritize minimal safe proofs of concept, verifying the existence of vulnerabilities without corrupting production databases or exhausting network resources.\n- **Reproducible Evidence:** Findings must be recorded with exact input vectors, raw HTTP headers, terminal outputs, UTC timestamps, and cryptographic hashes to guarantee evidentiary integrity.\n\n![Professional Security Testing Methodologies: NIST SP 800-115 vs. PTES](/assets/courses/cyber-05/c05_m01_l03_methodology_phase_alignment.png)\n\n*Figure 1.5: Comparative alignment between NIST SP 800-115 four phases and PTES seven execution phases.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Structural Boundary Demarcation:** The diagram visualizes the critical divide between authorized evaluation zones and unauthorized spaces. The central gateway represents the verified authorization boundary.\n- **Component Interactions:** Data flows from left to right through formal sign-off checkpoints. Probes that fail verification are immediately deflected into compliance alert channels.\n- **High-Contrast Indicators:** Amber accents (#FF7A00) demarcate active testing perimeters, while green highlights indicate authorized targets and red flags identify strictly out-of-scope assets.\n\n## 5. Process Sequence & Operational Execution\n\n![Iterative Testing Loop: Attack-to-Discovery Feedback Engine](/assets/courses/cyber-05/c05_m01_l03_iterative_testing_loop.png)\n\n*Figure 1.6: The non-linear feedback loop returning newly exposed attack surface and harvested credentials into discovery.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Sequential Workflow Pipeline:** Illustrates the end-to-end execution flow, detailing the decision trees, state transitions, and verification milestones.\n- **Feedback & Escalation Loops:** When an anomaly or potential outage trigger occurs, the workflow establishes an immediate freeze and out-of-band notification protocol.\n- **Audit Traceability:** Every operational milestone requires an empirical evidence capture, generating an immutable record for the final deliverables ledger.\n\n## 6. Key Terminology & Standard Definitions\n\n- **Rules of Engagement (RoE):** Contractual document formalizing permissible testing techniques, exclusion matrices, testing time windows, and emergency contacts.\n- **Minimal Proof-of-Concept:** The least intrusive empirical assertion required to definitively prove a vulnerability exists without destabilizing services.\n- **Chain of Custody:** The chronological documentation showing the custody, control, transfer, analysis, and disposition of digital evidence.\n- **Retesting Verification:** Independent re-execution of verified assessment tests against remediated targets to empirically confirm vulnerability closure.\n"
    },
    {
      "id": "les_c5_m1_l4",
      "title": "1.4 Safety, Stop Conditions and Avoiding Harm",
      "duration": "55 mins",
      "is_mandatory": true,
      "summary": "Comprehensive instruction covering 1.4 safety, stop conditions and avoiding harm, procedural frameworks, and verified operational guidelines.",
      "learning_objectives": [
        "Understand the theoretical principles and governance standards behind 1.4 Safety, Stop Conditions and Avoiding Harm",
        "Apply technical verification techniques using authorized loopback tools",
        "Analyze visual architecture models and operational process workflows",
        "Record reproducible evidentiary artifacts adhering to professional chain-of-custody standards"
      ],
      "diagram_slots": [
        {
          "id": "fig-05-01-07",
          "asset_path": "/assets/courses/cyber-05/c05_m01_l04_system_stability_safeguards.png",
          "caption": "Figure 1.7: Safety architecture detailing rate-limiting throttles, non-destructive payloads, and fragile service isolation.",
          "placement_hint": "After Section 2 (Core Operational Pillars)"
        },
        {
          "id": "fig-05-01-08",
          "asset_path": "/assets/courses/cyber-05/c05_m01_l04_incident_response_stop_protocol.png",
          "caption": "Figure 1.8: Incident decision tree determining when testing must halt immediately due to out-of-scope breach, system outage, or prior compromise.",
          "placement_hint": "After Section 5 (Process Sequence)"
        }
      ],
      "images": [
        {
          "id": "fig-05-01-07",
          "title": "System Stability Safeguards: DoS Avoidance & Fragile Service Handling",
          "url": "/assets/courses/cyber-05/c05_m01_l04_system_stability_safeguards.png",
          "caption": "Figure 1.7: Safety architecture detailing rate-limiting throttles, non-destructive payloads, and fragile service isolation.",
          "alt": "Architecture diagram showing scanner packet throttling, safe non-crashing payloads, and exclusion of fragile legacy SCADA and embedded devices"
        },
        {
          "id": "fig-05-01-08",
          "title": "Emergency Stop Conditions & Freeze Decision Protocol",
          "url": "/assets/courses/cyber-05/c05_m01_l04_incident_response_stop_protocol.png",
          "caption": "Figure 1.8: Incident decision tree determining when testing must halt immediately due to out-of-scope breach, system outage, or prior compromise.",
          "alt": "Decision tree illustrating stop conditions: unexpected host reachability, target latency spike > 500ms, or evidence of active adversary webshell"
        }
      ],
      "content": "## 1. Executive Concept & Theoretical Overview\n\nA professional test minimises the chance of harm to the target. Safety\nprinciples: prefer the least intrusive technique that answers the question;\nnever run denial-of-service or destructive actions unless explicitly\nauthorised and scheduled; test in a window agreed with the owner; keep\nbackups and a rollback plan for anything that changes state; and define STOP\nCONDITIONS - events that halt testing immediately, such as discovering you\ncan reach an out-of-scope system, causing instability, or finding evidence of\na real prior breach (which becomes an incident, not a test). In the lab, the\ntools stop at the loopback boundary by refusing other hosts, and the course\nuses the MINIMUM safe proof that a finding is real, never a weaponised\nexploit.\n\nProfessional penetration testing is the practice of evaluating computer systems, networks, and web applications to discover security vulnerabilities that an adversary could exploit. Unlike malicious attacks, authorized security testing is conducted with the explicit written permission of the asset owner, within a tightly defined scope, and adhering to strict Rules of Engagement (RoE).\n\n## 2. Core Operational Pillars & Technical Specifications\n\n- **Governance & Authority:** Every technical probe must be anchored to verifiable authority. Testing without written approval violates computer crime legislation regardless of intent.\n- **Boundary Discipline:** Target networks must be precisely bounded by IP CIDR ranges, domain names, and testing windows. Probing adjacent systems or third-party infrastructure constitutes an immediate breach of contract.\n- **Non-Destructive Methodology:** Evaluators prioritize minimal safe proofs of concept, verifying the existence of vulnerabilities without corrupting production databases or exhausting network resources.\n- **Reproducible Evidence:** Findings must be recorded with exact input vectors, raw HTTP headers, terminal outputs, UTC timestamps, and cryptographic hashes to guarantee evidentiary integrity.\n\n![System Stability Safeguards: DoS Avoidance & Fragile Service Handling](/assets/courses/cyber-05/c05_m01_l04_system_stability_safeguards.png)\n\n*Figure 1.7: Safety architecture detailing rate-limiting throttles, non-destructive payloads, and fragile service isolation.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Structural Boundary Demarcation:** The diagram visualizes the critical divide between authorized evaluation zones and unauthorized spaces. The central gateway represents the verified authorization boundary.\n- **Component Interactions:** Data flows from left to right through formal sign-off checkpoints. Probes that fail verification are immediately deflected into compliance alert channels.\n- **High-Contrast Indicators:** Amber accents (#FF7A00) demarcate active testing perimeters, while green highlights indicate authorized targets and red flags identify strictly out-of-scope assets.\n\n## 3. Hands-On Laboratory Execution & Terminal Verification\n\nAll practical exercises execute against the authorized loopback target service Nilgiri Parts Portal (`http://127.0.0.1:8099`). The laboratory environment enforces safety in code: all custom testing utilities abort immediately if pointed at any host other than `127.0.0.1`.\n\n```bash\n# Verify target service status on loopback TCP port 8099\ncurl -i http://127.0.0.1:8099/health\n```\n\n```terminal\nHTTP/1.0 200 OK\nServer: Nilgiri-Portal/1.0 Python/3.14\nDate: Sun, 08 Nov 2026 10:14:22 GMT\nContent-Type: application/json\n\n{\"status\": \"ONLINE\", \"target\": \"127.0.0.1:8099\", \"scope\": \"AUTHORISED_LAB_ONLY\"}\n```\n\n> [!IMPORTANT]\n> **Loopback Confinement Rule:** Never redirect lab tools or testing scripts toward external networks, production cloud assets, or third-party domains. The single rule that guarantees safety and legality is strict loopback confinement.\n\n\n\n:::math-steps\n### Legal Scoping CIDR Subnet & Usable Target Host Calculation\nCalculating authorized target host allocations from an approved enterprise IPv4 CIDR block ($10.100.4.0/24$).\n\n#### Step 1: Prefix Length and Host Bits Allocation\nAn IPv4 address contains 32 bits. For a $/24$ subnet mask, the number of allocated host bits ($h$) is:\n$$h = 32 - 24 = 8 \\text{ bits}$$\n\n#### Step 2: Total Theoretical Address Capacity\nThe total number of theoretical addresses ($N_{\\text{total}}$) addressable in an 8-bit space is:\n$$N_{\\text{total}} = 2^h = 2^8 = 256 \\text{ IP addresses}$$\n\n#### Step 3: Usable In-Scope Target Calculation\nPer RFC 1122, the all-zeroes host represents the network identifier ($10.100.4.0$) and the all-ones host represents the local subnet broadcast ($10.100.4.255$). Additionally, the default gateway ($10.100.4.1$) is explicitly reserved and designated out-of-scope in the Rules of Engagement:\n$$N_{\\text{usable}} = 2^h - 2 - N_{\\text{excluded}} = 256 - 2 - 1 = 253 \\text{ authorized in-scope targets}$$\n:::\n\n## 5. Process Sequence & Operational Execution\n\n![Emergency Stop Conditions & Freeze Decision Protocol](/assets/courses/cyber-05/c05_m01_l04_incident_response_stop_protocol.png)\n\n*Figure 1.8: Incident decision tree determining when testing must halt immediately due to out-of-scope breach, system outage, or prior compromise.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Sequential Workflow Pipeline:** Illustrates the end-to-end execution flow, detailing the decision trees, state transitions, and verification milestones.\n- **Feedback & Escalation Loops:** When an anomaly or potential outage trigger occurs, the workflow establishes an immediate freeze and out-of-band notification protocol.\n- **Audit Traceability:** Every operational milestone requires an empirical evidence capture, generating an immutable record for the final deliverables ledger.\n\n## 6. Key Terminology & Standard Definitions\n\n- **Rules of Engagement (RoE):** Contractual document formalizing permissible testing techniques, exclusion matrices, testing time windows, and emergency contacts.\n- **Minimal Proof-of-Concept:** The least intrusive empirical assertion required to definitively prove a vulnerability exists without destabilizing services.\n- **Chain of Custody:** The chronological documentation showing the custody, control, transfer, analysis, and disposition of digital evidence.\n- **Retesting Verification:** Independent re-execution of verified assessment tests against remediated targets to empirically confirm vulnerability closure.\n"
    },
    {
      "id": "les_c5_m1_l5",
      "title": "1.5 Evidence, Integrity and Chain of Custody",
      "duration": "55 mins",
      "is_mandatory": true,
      "summary": "Comprehensive instruction covering 1.5 evidence, integrity and chain of custody, procedural frameworks, and verified operational guidelines.",
      "learning_objectives": [
        "Understand the theoretical principles and governance standards behind 1.5 Evidence, Integrity and Chain of Custody",
        "Apply technical verification techniques using authorized loopback tools",
        "Analyze visual architecture models and operational process workflows",
        "Record reproducible evidentiary artifacts adhering to professional chain-of-custody standards"
      ],
      "diagram_slots": [
        {
          "id": "fig-05-01-09",
          "asset_path": "/assets/courses/cyber-05/c05_m01_l05_evidence_vault_architecture.png",
          "caption": "Figure 1.9: Secure evidence vault architecture enforcing SHA-256 integrity hashing, UTC timestamping, and encrypted storage.",
          "placement_hint": "After Section 2 (Core Operational Pillars)"
        },
        {
          "id": "fig-05-01-10",
          "asset_path": "/assets/courses/cyber-05/c05_m01_l05_chain_of_custody_pipeline.png",
          "caption": "Figure 1.10: Step-by-step pipeline from capturing raw vulnerability verification data to cryptographic ledger recording.",
          "placement_hint": "After Section 5 (Process Sequence)"
        }
      ],
      "images": [
        {
          "id": "fig-05-01-09",
          "title": "Cryptographic Evidence Vault & Chain of Custody Architecture",
          "url": "/assets/courses/cyber-05/c05_m01_l05_evidence_vault_architecture.png",
          "caption": "Figure 1.9: Secure evidence vault architecture enforcing SHA-256 integrity hashing, UTC timestamping, and encrypted storage.",
          "alt": "Architecture diagram showing raw terminal output and packet captures hashed with SHA-256, signed, and stored in AES-256 encrypted vault"
        },
        {
          "id": "fig-05-01-10",
          "title": "Evidence Acquisition, Hashing & Verification Pipeline",
          "url": "/assets/courses/cyber-05/c05_m01_l05_chain_of_custody_pipeline.png",
          "caption": "Figure 1.10: Step-by-step pipeline from capturing raw vulnerability verification data to cryptographic ledger recording.",
          "alt": "Sequential pipeline showing raw probe response capture, metadata tagging, SHA-256 hash generation, and findings.json persistence"
        }
      ],
      "content": "## 1. Executive Concept & Theoretical Overview\n\nFindings are only as good as their evidence. For each finding, capture what\nyou did, the exact request and response (or command and output), and a\ntimestamp, so the finding can be reproduced and trusted. Protect the\nintegrity of evidence - store it safely, record who handled it and when (a\nchain of custody), and hash files where integrity matters (Course 09 covers\nforensic handling in depth). Treat any real data you encounter as sensitive:\nminimise what you collect, and handle personal data per the client's\ninstructions and the law (in India, the Digital Personal Data Protection\nAct, 2023). In the lab, verify.py records each confirmed finding with a\ntimestamp to data/findings.json - a simple, reproducible evidence trail.\n\nProfessional penetration testing is the practice of evaluating computer systems, networks, and web applications to discover security vulnerabilities that an adversary could exploit. Unlike malicious attacks, authorized security testing is conducted with the explicit written permission of the asset owner, within a tightly defined scope, and adhering to strict Rules of Engagement (RoE).\n\n## 2. Core Operational Pillars & Technical Specifications\n\n- **Governance & Authority:** Every technical probe must be anchored to verifiable authority. Testing without written approval violates computer crime legislation regardless of intent.\n- **Boundary Discipline:** Target networks must be precisely bounded by IP CIDR ranges, domain names, and testing windows. Probing adjacent systems or third-party infrastructure constitutes an immediate breach of contract.\n- **Non-Destructive Methodology:** Evaluators prioritize minimal safe proofs of concept, verifying the existence of vulnerabilities without corrupting production databases or exhausting network resources.\n- **Reproducible Evidence:** Findings must be recorded with exact input vectors, raw HTTP headers, terminal outputs, UTC timestamps, and cryptographic hashes to guarantee evidentiary integrity.\n\n![Cryptographic Evidence Vault & Chain of Custody Architecture](/assets/courses/cyber-05/c05_m01_l05_evidence_vault_architecture.png)\n\n*Figure 1.9: Secure evidence vault architecture enforcing SHA-256 integrity hashing, UTC timestamping, and encrypted storage.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Structural Boundary Demarcation:** The diagram visualizes the critical divide between authorized evaluation zones and unauthorized spaces. The central gateway represents the verified authorization boundary.\n- **Component Interactions:** Data flows from left to right through formal sign-off checkpoints. Probes that fail verification are immediately deflected into compliance alert channels.\n- **High-Contrast Indicators:** Amber accents (#FF7A00) demarcate active testing perimeters, while green highlights indicate authorized targets and red flags identify strictly out-of-scope assets.\n\n## 3. Hands-On Laboratory Execution & Terminal Verification\n\nAll practical exercises execute against the authorized loopback target service Nilgiri Parts Portal (`http://127.0.0.1:8099`). The laboratory environment enforces safety in code: all custom testing utilities abort immediately if pointed at any host other than `127.0.0.1`.\n\n```bash\n# Verify target service status on loopback TCP port 8099\ncurl -i http://127.0.0.1:8099/health\n```\n\n```terminal\nHTTP/1.0 200 OK\nServer: Nilgiri-Portal/1.0 Python/3.14\nDate: Sun, 08 Nov 2026 10:14:22 GMT\nContent-Type: application/json\n\n{\"status\": \"ONLINE\", \"target\": \"127.0.0.1:8099\", \"scope\": \"AUTHORISED_LAB_ONLY\"}\n```\n\n> [!IMPORTANT]\n> **Loopback Confinement Rule:** Never redirect lab tools or testing scripts toward external networks, production cloud assets, or third-party domains. The single rule that guarantees safety and legality is strict loopback confinement.\n\n\n\n:::math-steps\n### Legal Scoping CIDR Subnet & Usable Target Host Calculation\nCalculating authorized target host allocations from an approved enterprise IPv4 CIDR block ($10.100.4.0/24$).\n\n#### Step 1: Prefix Length and Host Bits Allocation\nAn IPv4 address contains 32 bits. For a $/24$ subnet mask, the number of allocated host bits ($h$) is:\n$$h = 32 - 24 = 8 \\text{ bits}$$\n\n#### Step 2: Total Theoretical Address Capacity\nThe total number of theoretical addresses ($N_{\\text{total}}$) addressable in an 8-bit space is:\n$$N_{\\text{total}} = 2^h = 2^8 = 256 \\text{ IP addresses}$$\n\n#### Step 3: Usable In-Scope Target Calculation\nPer RFC 1122, the all-zeroes host represents the network identifier ($10.100.4.0$) and the all-ones host represents the local subnet broadcast ($10.100.4.255$). Additionally, the default gateway ($10.100.4.1$) is explicitly reserved and designated out-of-scope in the Rules of Engagement:\n$$N_{\\text{usable}} = 2^h - 2 - N_{\\text{excluded}} = 256 - 2 - 1 = 253 \\text{ authorized in-scope targets}$$\n:::\n\n## 5. Process Sequence & Operational Execution\n\n![Evidence Acquisition, Hashing & Verification Pipeline](/assets/courses/cyber-05/c05_m01_l05_chain_of_custody_pipeline.png)\n\n*Figure 1.10: Step-by-step pipeline from capturing raw vulnerability verification data to cryptographic ledger recording.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Sequential Workflow Pipeline:** Illustrates the end-to-end execution flow, detailing the decision trees, state transitions, and verification milestones.\n- **Feedback & Escalation Loops:** When an anomaly or potential outage trigger occurs, the workflow establishes an immediate freeze and out-of-band notification protocol.\n- **Audit Traceability:** Every operational milestone requires an empirical evidence capture, generating an immutable record for the final deliverables ledger.\n\n## 6. Key Terminology & Standard Definitions\n\n- **Rules of Engagement (RoE):** Contractual document formalizing permissible testing techniques, exclusion matrices, testing time windows, and emergency contacts.\n- **Minimal Proof-of-Concept:** The least intrusive empirical assertion required to definitively prove a vulnerability exists without destabilizing services.\n- **Chain of Custody:** The chronological documentation showing the custody, control, transfer, analysis, and disposition of digital evidence.\n- **Retesting Verification:** Independent re-execution of verified assessment tests against remediated targets to empirically confirm vulnerability closure.\n"
    },
    {
      "id": "les_c5_m1_l6",
      "title": "1.6 Types of Engagement and the Reporting Contract",
      "duration": "60 mins",
      "is_mandatory": true,
      "summary": "Comprehensive instruction covering 1.6 types of engagement and the reporting contract, procedural frameworks, and verified operational guidelines.",
      "learning_objectives": [
        "Understand the theoretical principles and governance standards behind 1.6 Types of Engagement and the Reporting Contract",
        "Apply technical verification techniques using authorized loopback tools",
        "Analyze visual architecture models and operational process workflows",
        "Record reproducible evidentiary artifacts adhering to professional chain-of-custody standards"
      ],
      "diagram_slots": [
        {
          "id": "fig-05-01-11",
          "asset_path": "/assets/courses/cyber-05/c05_m01_l06_black_grey_white_box_matrix.png",
          "caption": "Figure 1.11: Comparison of penetration testing visibility models, efficiency trade-offs, and attack surface coverage.",
          "placement_hint": "After Section 2 (Core Operational Pillars)"
        },
        {
          "id": "fig-05-01-12",
          "asset_path": "/assets/courses/cyber-05/c05_m01_l06_remediation_retest_lifecycle.png",
          "caption": "Figure 1.12: Closed-loop engagement contract from scoping and testing to risk reporting, client remediation, and retest verification.",
          "placement_hint": "After Section 5 (Process Sequence)"
        }
      ],
      "images": [
        {
          "id": "fig-05-01-11",
          "title": "Engagement Information Models: Black Box vs. Grey Box vs. White Box",
          "url": "/assets/courses/cyber-05/c05_m01_l06_black_grey_white_box_matrix.png",
          "caption": "Figure 1.11: Comparison of penetration testing visibility models, efficiency trade-offs, and attack surface coverage.",
          "alt": "Comparison matrix showing Black Box (zero knowledge), Grey Box (partial architecture & credentials), and White Box (full source & design)"
        },
        {
          "id": "fig-05-01-12",
          "title": "The Professional Engagement & Retest Lifecycle Contract",
          "url": "/assets/courses/cyber-05/c05_m01_l06_remediation_retest_lifecycle.png",
          "caption": "Figure 1.12: Closed-loop engagement contract from scoping and testing to risk reporting, client remediation, and retest verification.",
          "alt": "Circular operational lifecycle showing Scoping -> Testing -> Draft Report -> Client Patching -> Retest Verification with retest.py -> Final Letter of Attestation"
        }
      ],
      "content": "## 1. Executive Concept & Theoretical Overview\n\nEngagements vary by knowledge and goal:\n  black box   the tester has no prior information (simulates an outsider)\n  white box   the tester has full information (source, architecture) for\n              depth and coverage\n  grey box    partial information (a common, efficient middle ground)\n  red team    goal-oriented, stealthy, tests detection and response, not\n              just vulnerabilities (Course 19)\n  vulnerability assessment  breadth-first identification and ranking, usually\n              without exploitation\nWhatever the type, the deliverable is a report the client can act on\n(Module 8). The engagement is a contract: agreed scope and RoE in, a\nrisk-ranked, remediation-focused report out, with a retest to confirm fixes.\nThis course's lab is a grey-box vulnerability assessment with controlled\nverification - you know the target because you built it, and you prove and\nreport findings rather than weaponise them.\n\n--------------------------------------------------------------------------------\n\nProfessional penetration testing is the practice of evaluating computer systems, networks, and web applications to discover security vulnerabilities that an adversary could exploit. Unlike malicious attacks, authorized security testing is conducted with the explicit written permission of the asset owner, within a tightly defined scope, and adhering to strict Rules of Engagement (RoE).\n\n## 2. Core Operational Pillars & Technical Specifications\n\n- **Governance & Authority:** Every technical probe must be anchored to verifiable authority. Testing without written approval violates computer crime legislation regardless of intent.\n- **Boundary Discipline:** Target networks must be precisely bounded by IP CIDR ranges, domain names, and testing windows. Probing adjacent systems or third-party infrastructure constitutes an immediate breach of contract.\n- **Non-Destructive Methodology:** Evaluators prioritize minimal safe proofs of concept, verifying the existence of vulnerabilities without corrupting production databases or exhausting network resources.\n- **Reproducible Evidence:** Findings must be recorded with exact input vectors, raw HTTP headers, terminal outputs, UTC timestamps, and cryptographic hashes to guarantee evidentiary integrity.\n\n![Engagement Information Models: Black Box vs. Grey Box vs. White Box](/assets/courses/cyber-05/c05_m01_l06_black_grey_white_box_matrix.png)\n\n*Figure 1.11: Comparison of penetration testing visibility models, efficiency trade-offs, and attack surface coverage.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Structural Boundary Demarcation:** The diagram visualizes the critical divide between authorized evaluation zones and unauthorized spaces. The central gateway represents the verified authorization boundary.\n- **Component Interactions:** Data flows from left to right through formal sign-off checkpoints. Probes that fail verification are immediately deflected into compliance alert channels.\n- **High-Contrast Indicators:** Amber accents (#FF7A00) demarcate active testing perimeters, while green highlights indicate authorized targets and red flags identify strictly out-of-scope assets.\n\n## 4. Real-World Case Studies & Enterprise Incidents\n\n### Case Study: The Scoping & Authority Gap\n\nIn high-profile enterprise evaluations, jurisdictional confusion between corporate parent entities and regional facility managers has resulted in security personnel facing criminal detention despite possessing valid contracts. Authorisation must originate from the specific entity possessing legal ownership over the target infrastructure.\n\n- **Key Takeaway 1:** Always verify that the authorising signatory possesses direct ownership authority over all enumerated IP CIDRs and physical sites.\n- **Key Takeaway 2:** Establish out-of-band communication channels with the client SOC to de-conflict simulated testing from active adversary intrusions.\n\n## 5. Process Sequence & Operational Execution\n\n![The Professional Engagement & Retest Lifecycle Contract](/assets/courses/cyber-05/c05_m01_l06_remediation_retest_lifecycle.png)\n\n*Figure 1.12: Closed-loop engagement contract from scoping and testing to risk reporting, client remediation, and retest verification.*\n\n#### Visual Walkthrough & Architectural Breakdown\n\n- **Sequential Workflow Pipeline:** Illustrates the end-to-end execution flow, detailing the decision trees, state transitions, and verification milestones.\n- **Feedback & Escalation Loops:** When an anomaly or potential outage trigger occurs, the workflow establishes an immediate freeze and out-of-band notification protocol.\n- **Audit Traceability:** Every operational milestone requires an empirical evidence capture, generating an immutable record for the final deliverables ledger.\n\n## 6. Key Terminology & Standard Definitions\n\n- **Rules of Engagement (RoE):** Contractual document formalizing permissible testing techniques, exclusion matrices, testing time windows, and emergency contacts.\n- **Minimal Proof-of-Concept:** The least intrusive empirical assertion required to definitively prove a vulnerability exists without destabilizing services.\n- **Chain of Custody:** The chronological documentation showing the custody, control, transfer, analysis, and disposition of digital evidence.\n- **Retesting Verification:** Independent re-execution of verified assessment tests against remediated targets to empirically confirm vulnerability closure.\n"
    }
  ]
};
