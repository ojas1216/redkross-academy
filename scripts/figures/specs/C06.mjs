export default {
  'C06-M07-F2': {
    "type": "compare",
    "vs": true,
    "columns": [
      {
        "title": "UNSAFE",
        "tone": "red",
        "items": [
          "price = float(form[\"price\"])",
          "The attacker sets price = 0.01"
        ]
      },
      {
        "title": "SAFE",
        "tone": "green",
        "items": [
          "price = catalogue.price_of(id): the server is authoritative",
          "Quantity validated (> 0, ≤ max)",
          "Coupon atomically single-use"
        ]
      }
    ],
    "note": "Rule: enforce every business rule and value on the server."
  },
  'C06-M02-F1': {
    type: 'compare',
    columns: [
      { title: 'Untrusted inputs', tone: 'red', items: ['URL path / query', 'Form / JSON body', 'Headers / cookies', 'File uploads'] },
      { title: 'TRUST BOUNDARY', tone: 'dark', items: ['Server-side validation', 'Authorisation', 'Output encoding'] },
      { title: 'Trusted sinks', tone: 'blue', items: ['SQL query', 'HTML output', 'File system', 'Outbound request', 'Session store'] },
    ],
    note: 'A weakness is untrusted input reaching a sink across an unguarded boundary.',
  },
  'C06-M02-F2': {
    type: 'table',
    columns: ['Endpoint + parameter', 'Sink', 'Hypothesised weakness', 'Module'],
    rows: [
      ['/search q', 'SQL + HTML', 'SQL injection + reflected XSS', 'M05'],
      ['/account id', 'Object lookup', 'IDOR', 'M04'],
      ['/download file', 'File system', 'Path traversal', 'M06'],
      ['/fetch url', 'Outbound request', 'SSRF', 'M06'],
      ['(cookie) session', 'Identity', 'Weak session', 'M03'],
    ],
  },
  'C06-M01-F1': {
    type: 'graph',
    dir: 'LR',
    fixedDir: true,
    nodes: [
      { id: 'b', label: 'BROWSER (untrusted)', sub: 'the user and any attacker control everything here', tone: 'red' },
      { id: 's', label: 'SERVER (trusted)', sub: 'enforces ALL security here', tone: 'green' },
    ],
    edges: [
      { from: 'b', to: 's', label: 'request: method, headers, cookie, body' },
      { from: 's', to: 'b', label: 'response: status, headers, body' },
    ],
    note: 'Rule: client-side checks are for user experience; security is enforced server-side.',
  },
  'C06-M01-F2': {
    type: 'code',
    panels: [
      { title: 'Request', tone: 'blue', lines: ['GET /login?user=asha HTTP/1.1', 'Host: 127.0.0.1:8200', 'Cookie: session=...', '', '(body for POST / PUT)'] },
      { title: 'Response', tone: 'orange', lines: ['HTTP/1.1 200 OK', 'Content-Type: text/html', 'Set-Cookie: session=YXNoYQ==; Path=/', '', '(missing: HttpOnly; Secure; SameSite)', '(body: HTML the browser renders)'], highlight: ['missing'] },
    ],
  },
  'C06-M01-F3': {
    type: 'flow',
    steps: [
      { label: 'Login', sub: 'server creates a session and returns Set-Cookie: session=ID' },
      { label: 'Browser stores the ID', sub: 'sends Cookie: session=ID on EVERY later request', tone: 'blue' },
      { label: 'Server looks up the ID', sub: 'knows the user: identity across requests', tone: 'green' },
    ],
    note: 'Safety: the ID must be random and unforgeable; the cookie needs HttpOnly, Secure and SameSite.',
  },
  'C06-M02-F3': {
    type: 'cycle',
    center: 'Seven-step testing workflow',
    steps: [
      { label: '1 Authorise / scope' },
      { label: '2 Map' },
      { label: '3 Classify' },
      { label: '4 Verify', sub: 'minimal safe check' },
      { label: '5 Score + evidence', sub: 'CVSS' },
      { label: '6 Report' },
      { label: '7 Remediate + retest' },
    ],
    note: 'Loops back: new findings in step 4 can reveal new surface, so re-map.',
  },
  'C06-M03-F1': {
    type: 'compare',
    vs: true,
    columns: [
      { title: 'WEAK (lab vulnerable)', tone: 'red', items: ['session = base64(username)', 'Reversible and forgeable', 'No HttpOnly / Secure / SameSite', 'Server trusts the value'] },
      { title: 'STRONG (lab hardened)', tone: 'green', items: ['session = secrets.token_urlsafe(24)', 'Random and unforgeable', 'HttpOnly; Secure (HTTPS); SameSite=Strict', 'Server looks up a server-side session'] },
    ],
  },
  'C06-M03-F2': {
    type: 'rows',
    rows: [
      { label: 'Plain text', tone: 'red', items: ['WRONG: a breach reveals every password'] },
      { label: 'Fast hash', tone: 'red', items: ['WRONG: billions of guesses per second crack them'] },
      { label: 'Argon2id / bcrypt / scrypt', tone: 'green', items: ['RIGHT: per-user salt + work factor'] },
    ],
    note: 'Verify by recomputing hash(input, salt) and comparing with the stored value; a password hash is never reversible.',
  },
  'C06-M03-F3': {
    type: 'layers',
    pyramid: true,
    layers: [
      { label: 'Hardware key (WebAuthn)', sub: 'strongest: phishing-resistant, origin-bound', tone: 'green' },
      { label: '+ Push approval', sub: 'better, but MFA fatigue', tone: 'blue' },
      { label: '+ TOTP app', sub: 'better, but phishable in real time', tone: 'violet' },
      { label: '+ SMS code', sub: 'better, but SIM swap / interception', tone: 'orange' },
      { label: 'Password only', sub: 'weakest', tone: 'red' },
    ],
  },
  'C06-M05-F1': {
    type: 'graph',
    dir: 'LR',
    nodes: [
      { id: 'r', label: 'ROOT CAUSE', sub: 'untrusted DATA interpreted as CODE / markup', tone: 'dark' },
      { id: 's', label: 'Input → SQL string', sub: 'SQL injection', tone: 'red' },
      { id: 'h', label: 'Input → HTML output', sub: 'cross-site scripting', tone: 'red' },
      { id: 'sc', label: 'Cure: parameterise', sub: 'bind data separately', tone: 'green' },
      { id: 'hc', label: 'Cure: encode output', sub: 'render as text', tone: 'green' },
    ],
    edges: [{ from: 'r', to: 's' }, { from: 'r', to: 'h' }, { from: 's', to: 'sc' }, { from: 'h', to: 'hc' }],
    note: 'Keep data as data; never let input cross into the code or markup channel.',
  },
  'C06-M05-F2': {
    type: 'code',
    panels: [
      {
        title: 'Vulnerable: string formatting',
        tone: 'red',
        lines: [
          `q = "...WHERE username='%s'`,
          `     AND password='%s'" % (user, pw)`,
          '',
          "input: user = admin'--   pw = x",
          '',
          "...WHERE username='admin'--'",
          "   AND password='x'",
          '',
          '-- comments out the password check',
          '-> admin row returns -> logged in',
        ],
        highlight: ["admin'--", 'logged in'],
      },
      {
        title: 'Fixed: parameterised query',
        tone: 'green',
        lines: ['execute(', '  "...WHERE username=? AND password=?",', '  (user, pw)', ')', '', 'input stays data -> no bypass'],
      },
    ],
  },
  'C06-M05-F3': {
    type: 'rows',
    rows: [
      { label: 'Reflected', tone: 'red', items: ['/search?q=<script> is echoed into the response and runs (delivered via a link)'] },
      { label: 'Stored', tone: 'red', items: ['Review body <script> is saved and runs for every viewer'] },
      { label: 'DOM-based', tone: 'red', items: ['Client-side JavaScript writes input into the page unsafely'] },
      { label: 'Fix', tone: 'green', items: ['Encode output for its context (html.escape)', 'Content-Security-Policy', 'HttpOnly cookies'] },
    ],
  },
  'C06-M06-F1': {
    type: 'graph',
    dir: 'LR',
    nodes: [
      { id: 'v', label: 'Victim logged in', sub: 'session cookie set', tone: 'blue' },
      { id: 'a', label: 'Attacker page auto-submits', sub: 'POST app/account/update; the browser attaches the victim cookie', tone: 'red' },
      { id: 'x', label: 'Vulnerable', sub: 'server only checks the cookie: email changed as the victim', tone: 'red' },
      { id: 'f', label: 'Fixed', sub: 'per-session CSRF token the attacker cannot read + SameSite cookie: request rejected', tone: 'green' },
    ],
    edges: [{ from: 'v', to: 'a' }, { from: 'a', to: 'x' }, { from: 'a', to: 'f' }],
  },
  'C06-M06-F2': {
    type: 'graph',
    dir: 'LR',
    nodes: [
      { id: 'a', label: 'Attacker', tone: 'red' },
      { id: 'app', label: 'App /fetch?url=…', sub: 'inside the network', tone: 'orange' },
      { id: 'i', label: 'Internal service', tone: 'slate' },
      { id: 'm', label: '169.254.169.254', sub: 'cloud metadata', tone: 'slate' },
    ],
    edges: [
      { from: 'a', to: 'app', label: 'URL of their choice' },
      { from: 'app', to: 'i', label: 'server-side fetch' },
      { from: 'app', to: 'm', label: 'server-side fetch' },
    ],
    note: 'The app returns contents the attacker could not reach directly (SSRF). Fix: default-deny allowlist and block private, loopback and link-local ranges.',
  },
  'C06-M06-F3': {
    type: 'code',
    panels: [
      { title: 'Vulnerable', tone: 'red', lines: ['/download?file=../app.py', '', 'open(join(base, "../app.py"))', '-> escapes base', '-> returns the source code'], highlight: ['../'] },
      { title: 'Fixed', tone: 'green', lines: ['real = realpath(join(base, name))', 'if real is within base: serve', 'else: 403', '', 'better: map an id to a known file,', 'no user-supplied path at all'] },
    ],
  },
  'C06-M07-F1': {
    type: 'table',
    columns: ['Risk', 'Cause', 'Defence'],
    rows: [
      ['XXE (CWE-611)', 'Parser resolves external entities', 'Disable external entities / DTDs'],
      ['Deserialization (CWE-502)', 'Code-capable deserializer', 'Use JSON; sign and type-limit'],
      ['Business logic', 'Abusable workflow or rules', 'Enforce rules server-side'],
      ['API object access', 'Object id with no ownership check', 'Object-level authorisation'],
      ['API data exposure', 'Too many fields in or out', 'Return / accept only what is needed'],
    ],
  },
  'C06-M07-F3': {
    type: 'compare',
    columns: [
      { title: 'The CLIENT is untrusted', tone: 'red', items: ['Browser or API consumer', 'Every value it sends can be forged'] },
      { title: 'The SERVER enforces', tone: 'green', items: ['Security rules', 'Business rules', 'From trustworthy state'] },
    ],
    note: 'XXE, deserialization, logic flaws and API flaws all come from trusting the client.',
  },
  'C06-M08-F1': {
    type: 'flow',
    dir: 'TB',
    steps: [
      { label: 'Authorise', sub: 'scope.md' },
      { label: 'Map', sub: 'map.py' },
      { label: 'Verify', sub: 'findings.py', side: 'code review (codereview.py) runs alongside verify and fix' },
      { label: 'Score', sub: 'cvss.py' },
      { label: 'Report', sub: 'report.py' },
      { label: 'Remediate', sub: 'app_fixed.py' },
      { label: 'Retest', sub: 'retest.py: closure = proof the finding is gone', tone: 'green' },
    ],
  },
  'C06-M08-F2': {
    type: 'table',
    columns: ['Score', 'Finding', 'Mapping'],
    rowTones: ['red', 'orange', 'orange', 'orange', 'violet', 'violet', 'slate'],
    rows: [
      ['9.8 Critical', 'SQL injection (login)', 'A05 · CWE-89'],
      ['8.2 High', 'Broken access control /admin', 'A01 · CWE-284'],
      ['7.5 High', 'Path traversal', 'A01 · CWE-22'],
      ['7.5 High', 'SSRF', 'A01 · CWE-918'],
      ['6.5 Medium', 'IDOR; CSRF', 'A01 · CWE-639 / 352'],
      ['6.1–5.3 Medium', 'Reflected / stored XSS; session', 'A05 / A07'],
      ['3.1 Low', 'Missing security headers', 'A02 · CWE-693'],
    ],
  },
};
