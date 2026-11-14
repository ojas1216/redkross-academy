export default {
  'C16-M01-F1': {
    type: 'tree',
    root: { label: 'SSID "HimalayaCorp"', sub: 'a NAME, not a security boundary', tone: 'dark' },
    children: [
      { label: 'BSSID 02:11:aa:00:00:01', sub: 'legitimate AP radio', tone: 'green' },
      { label: 'BSSID …:02', sub: 'legitimate AP radio', tone: 'green' },
      { label: 'Unknown BSSID', sub: 'an attacker advertising the same name: evil twin', tone: 'red' },
    ],
    note: 'Radio is a broadcast medium: anyone in range hears it (car park, next floor, street).',
  },
  'C16-M01-F2': {
    type: 'rows',
    rows: [
      { label: 'Data frames', tone: 'blue', items: ['The traffic itself (encrypted under WPA2 / WPA3)'] },
      { label: 'Control frames', tone: 'slate', items: ['Medium access: ACK, RTS / CTS'] },
      { label: 'Management frames', tone: 'orange', items: ['Beacon', 'Probe', 'Auth', 'ASSOCIATION', 'DEAUTHENTICATION'] },
    ],
    note: 'Unprotected management frames let an attacker forge DEAUTH and knock clients off (DoS, or push them to an evil twin). Defence: Protected Management Frames (802.11w), required by WPA3.',
  },
  'C16-M02-F2': {
    type: 'compare',
    columns: [
      { title: 'Personal (PSK / SAE)', tone: 'orange', items: ['One shared secret', 'Simple', 'Home, small office, guest', 'Use WPA3-Personal with a strong passphrase'] },
      { title: 'Enterprise (802.1X)', tone: 'green', items: ['Per-user / per-device auth via RADIUS + EAP', 'Revocable and accountable', 'Corporate networks', 'Use WPA3-Enterprise'] },
    ],
  },
  'C16-M02-F3': {
    type: 'rows',
    rows: [
      { label: 'Do', tone: 'green', items: ['WPA3 (or WPA2-AES); never WEP / TKIP', 'PMF required (802.11w)', 'WPS disabled', 'Strong, long random passphrase', 'Unique admin credentials; firmware patched', 'Guest on a separate, isolated VLAN'] },
      { label: 'Do NOT rely on', tone: 'red', items: ['MAC filtering (spoofable)', 'SSID hiding (hygiene only)'] },
    ],
  },
  'C16-M03-F1': {
    type: 'flow',
    dir: 'TB',
    steps: [
      { label: 'Scope + authorise', tone: 'slate' },
      { label: 'Inventory', sub: 'SSIDs / BSSIDs + baseline', tone: 'blue' },
      { label: 'Configuration review', sub: 'each AP against the baseline', tone: 'violet' },
      { label: 'Rogue / evil-twin detection', sub: 'observed vs inventory', tone: 'red' },
      { label: 'Report → re-test', sub: 'findings + remediation', tone: 'green' },
    ],
    note: 'Everything is done from DATA (configuration + scan results); the assessor transmits nothing.',
  },
  'C16-M04-F1': {
    type: 'flow',
    steps: [
      { label: 'Discover', tone: 'slate' },
      { label: 'Pair', sub: 'keys agreed', tone: 'blue' },
      { label: 'Bond', sub: 'keys stored', tone: 'violet' },
      { label: 'Encrypted link', tone: 'green' },
    ],
    note: 'BR/EDR (Classic) carries audio, files and legacy use; BLE is low power (wearables, IoT). Security depends on the association model (MITM protection?) and the key agreement strength.',
  },
  'C16-M04-F3': {
    type: 'grid',
    cols: 2,
    tiles: [
      { label: 'Authenticated association', sub: 'not Just Works', tone: 'green' },
      { label: 'LE Secure Connections', tone: 'green' },
      { label: 'Discoverable on demand / limited', sub: 'not always on', tone: 'blue' },
      { label: 'No default or fixed PIN', tone: 'blue' },
      { label: 'Maximum encryption key size', sub: '16 bytes', tone: 'violet' },
      { label: 'Review and prune bonded devices', tone: 'violet' },
      { label: 'Disable Bluetooth when unused', tone: 'orange' },
      { label: 'Patch firmware', tone: 'orange' },
    ],
    note: 'Bluetooth hardening checklist.',
  },
  'C16-M05-F1': {
    type: 'compare',
    columns: [
      { title: 'App A sandbox', tone: 'blue', items: ['Own UID, enforced by the kernel', 'Private data: private FROM OTHER APPS by default'] },
      { title: 'App B sandbox', tone: 'violet', items: ['Own UID, enforced by the kernel', 'Private data: private FROM OTHER APPS by default'] },
    ],
    note: 'Shared resources (network, camera, location) are gated by PERMISSIONS. Components can be EXPORTED and called by other apps, which is a risk if they are sensitive.',
  },
  'C16-M05-F2': {
    type: 'rows',
    rows: [
      { label: 'Correct', tone: 'green', items: ['Sensitive data → INTERNAL (app-private) storage, ENCRYPTED', 'Keys → the platform KEYSTORE (hardware-backed)'] },
      { label: 'Insecure', tone: 'red', items: ['External / shared storage', 'Logs', 'Hard-coded in the app'] },
    ],
  },
  'C16-M06-F1': {
    type: 'compare',
    columns: [
      { title: 'STATIC (no execution)', tone: 'blue', items: ['Read the manifest, config and code', 'Finds: permissions, exports, cleartext, secrets, crypto, WebView', 'Do it first: broad and safe'] },
      { title: 'DYNAMIC (controlled device / emulator)', tone: 'orange', items: ['Run the app', 'Observes: actual traffic (TLS?), runtime storage, logs, platform behaviour', 'Confirms runtime behaviour'] },
    ],
  },
  'C16-M07-F1': {
    type: 'graph',
    dir: 'LR',
    fixedDir: true,
    nodes: [
      { id: 'a', label: 'Mobile app', sub: 'untrusted client', tone: 'red' },
      { id: 'b', label: 'API / backend', sub: 'the security boundary', tone: 'green' },
    ],
    edges: [{ from: 'a', to: 'b', label: 'hostile network' }],
    note: 'The app cannot enforce security; the API must: authenticate every request (validated, expiring tokens), enforce TLS, authorise every object and action server-side, rate-limit, validate input, return minimal data and generic errors.',
  },
  'C16-M07-F2': {
    type: 'grid',
    cols: 3,
    tiles: [
      { tag: '1', label: 'Authentication', sub: 'validated, short-lived, revocable tokens; no client trust', tone: 'blue' },
      { tag: '2', label: 'Transport', sub: 'strong TLS everywhere (pinning optional)', tone: 'violet' },
      { tag: '3', label: 'Backend hardening', sub: 'per-request authorisation, rate limiting, input validation, generic errors, minimal data, logging', tone: 'green' },
    ],
  },
  'C16-M07-F3': {
    type: 'flow',
    steps: [
      { label: 'Insecure config', sub: 'no auth, non-expiring tokens, cleartext, no authz, no rate limit, verbose errors, excess data → 7 findings, 5 HIGH: FAIL', tone: 'red' },
      { label: 'Apply controls', sub: 'validated / expiring tokens, TLS, per-request authz, rate limit, generic errors, minimal data', tone: 'orange' },
      { label: 'Hardened config', sub: '0 findings: PASS', tone: 'green' },
    ],
  },
  'C16-M08-F1': {
    type: 'compare',
    columns: [
      { title: 'Radio edge', tone: 'blue', items: ['Wi-Fi hardening + rogue / evil-twin detection', 'Bluetooth / BLE'] },
      { title: 'Mobile', tone: 'orange', items: ['App: storage, crypto, platform, insecure data handling', 'API: auth, transport, authorisation, rate limiting'] },
    ],
    note: 'Principles: the network is hostile → encrypt; the client is untrusted → enforce server-side; verify controls (FAIL → PASS); stay authorised, offline and do no harm.',
  },
  'C16-M08-F2': {
    type: 'table',
    columns: ['Area', 'Before', 'After / to fix'],
    rowTones: ['green', 'green', 'green', 'orange', 'red'],
    rows: [
      ['Wi-Fi (enforcing)', '10 findings, 6 HIGH', '0: PASS'],
      ['Bluetooth (enforcing)', '6 findings, 3 HIGH', '0: PASS'],
      ['API (enforcing)', '7 findings, 5 HIGH', '0: PASS'],
      ['App (detective)', '16 findings, 9 HIGH', 'To fix'],
      ['Rogue scan (detective)', '2 evil-twin APs', 'To fix'],
    ],
    note: 'All 3 enforcing control domains moved from FAIL to PASS.',
  },
  'C16-M08-F3': {
    type: 'grid',
    cols: 3,
    tiles: [
      { tag: '1', label: 'Scope + authorisation', sub: 'authorised, offline, do no harm', tone: 'slate' },
      { tag: '2', label: 'Method + tools', sub: 'the lab reviewers', tone: 'blue' },
      { tag: '3', label: 'Findings by area + severity', sub: 'Wi-Fi / BT / app / API / rogue', tone: 'red' },
      { tag: '4', label: 'Enforcing evidence', sub: 'FAIL → PASS for 3 control domains', tone: 'green' },
      { tag: '5', label: 'Remediation → secure baseline', sub: 'verification: re-run to PASS', tone: 'orange' },
      { tag: '6', label: 'Summary + detail', sub: 'for decision-makers and engineers', tone: 'violet' },
    ],
  },
};
