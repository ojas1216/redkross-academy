export default {
  'C15-M01-F1': {
    type: 'rows',
    arrow: true,
    header: ['Security goal', 'Primitive that provides it'],
    rows: [
      { label: 'Confidentiality', items: ['Encryption (AEAD)', 'KEM / key exchange'] },
      { label: 'Integrity', items: ['MAC', 'AEAD tag', 'Signature'] },
      { label: 'Authenticity', items: ['MAC (shared key)', 'Signature (private key)'] },
      { label: 'Non-repudiation', items: ['Signature + key custody'] },
      { label: 'Forward secrecy', items: ['Ephemeral key exchange'] },
    ],
  },
  'C15-M01-F2': {
    type: 'flow',
    dir: 'TB',
    steps: [
      { label: 'Entropy sources', sub: 'hardware noise, interrupts, CPU RNG', tone: 'slate' },
      { label: 'Kernel CSPRNG', sub: 'getrandom / BCryptGenRandom', tone: 'blue' },
      { label: 'os.urandom / secrets.token_*', side: 'keys, nonces, salts, tokens', tone: 'green' },
    ],
    note: 'Never use random.Random for security values: it is deterministic from its seed.',
  },
  'C15-M01-F3': {
    type: 'scale',
    ticks: [
      { label: '13 bits', sub: 'PIN' },
      { label: '38 bits', sub: '8 lowercase chars' },
      { label: '78 bits', sub: '12 mixed chars' },
      { label: '128 bits', sub: 'random key' },
      { label: '256 bits', sub: 'AES-256 key' },
    ],
    bands: [
      { from: 0, to: 1, label: 'seconds to brute-force', tone: 'red' },
      { from: 1, to: 2, label: 'hours', tone: 'orange' },
      { from: 2, to: 4, label: 'out of reach for classical brute force', tone: 'green' },
    ],
    note: 'Values from the execution-tested lab; time labels are qualitative.',
  },
  'C15-M02-F2': {
    type: 'graph',
    dir: 'LR',
    fixedDir: true,
    nodes: [
      { id: 'k', label: 'Key', tone: 'dark' },
      { id: 'n', label: 'Nonce', tone: 'violet' },
      { id: 'a', label: 'AAD', sub: 'associated data (authenticated, not encrypted)', tone: 'slate' },
      { id: 'p', label: 'Plaintext', tone: 'blue' },
      { id: 'e', label: 'AES-GCM / ChaCha20-Poly1305', sub: 'encrypt + authenticate', tone: 'orange' },
      { id: 'o', label: 'Ciphertext ‖ 16-byte tag', tone: 'green' },
    ],
    edges: [{ from: 'k', to: 'e' }, { from: 'n', to: 'e' }, { from: 'a', to: 'e' }, { from: 'p', to: 'e' }, { from: 'e', to: 'o' }],
    note: 'Decrypt with the same key, nonce and AAD to get the plaintext back; any change to any input raises InvalidTag.',
  },
  'C15-M02-F3': {
    type: 'graph',
    dir: 'LR',
    fixedDir: true,
    nodes: [
      { id: 'f', label: 'File', tone: 'slate' },
      { id: 'dek', label: 'DEK', sub: 'data encryption key', tone: 'blue' },
      { id: 'kms', label: 'KMS: KEK', sub: 'wrap: authorised + logged', tone: 'dark' },
      { id: 'st', label: 'Stored together', sub: '[wrapped DEK | key_id | ciphertext]', tone: 'green' },
    ],
    edges: [
      { from: 'f', to: 'st', label: 'AES-GCM with the DEK → ciphertext' },
      { from: 'dek', to: 'kms', label: 'wrap' },
      { from: 'kms', to: 'st', label: 'wrapped DEK' },
    ],
    note: 'Decrypt: KMS unwraps the wrapped DEK → DEK → AES-GCM decrypt. The master key (KEK) never leaves the KMS.',
  },
  'C15-M03-F1': {
    type: 'rows',
    rows: [
      { label: 'Encrypt / KEM', tone: 'blue', items: ['Sender encrypts with B.public → ciphertext → B.private recovers the data key'] },
      { label: 'Sign', tone: 'orange', items: ['A.private signs → signature → anyone verifies with A.public'] },
      { label: 'Key agreement', tone: 'green', items: ['A.private + B.public == B.private + A.public → shared secret → HKDF'] },
    ],
  },
  'C15-M03-F2': {
    type: 'bars',
    caption: 'Public key size for about 128-bit security',
    bars: [
      { label: 'RSA-3072', value: 422, display: '422 B', tone: 'red' },
      { label: 'P-256', value: 91, display: '91 B', tone: 'orange' },
      { label: 'Ed25519', value: 44, display: '44 B', tone: 'green' },
    ],
  },
  'C15-M03-F3': {
    type: 'sequence',
    actors: [
      { id: 'c', label: 'Client', sub: 'ephemeral key c', tone: 'blue' },
      { id: 's', label: 'Server', sub: 'ephemeral key s + certificate key', tone: 'dark' },
    ],
    messages: [
      { from: 'c', to: 's', label: 'c.pub' },
      { from: 's', to: 'c', label: 's.pub + signature(s.pub…, certificate key)', dashed: true },
    ],
    note: 'The client verifies the signature with the certificate (Module 5). Both compute X25519(…) → HKDF(info) → session keys, then discard c and s, which gives forward secrecy.',
  },
  'C15-M04-F3': {
    type: 'bars',
    log: true,
    caption: 'Password-guessing rate on the lab machine, one core (log scale)',
    bars: [
      { label: 'sha256', value: 1980414, display: '~1,980,414 guesses / s', tone: 'red' },
      { label: 'scrypt 2^14', value: 24, display: '~24 guesses / s', tone: 'green' },
      { label: 'pbkdf2 600k', value: 5, display: '~5 guesses / s', tone: 'green' },
    ],
    note: 'Slow password hashes are about five orders of magnitude slower to attack than a fast hash.',
  },
  'C15-M05-F1': {
    type: 'flow',
    dir: 'TB',
    steps: [
      { label: 'Tamarind Lab Root CA', sub: 'self-signed, CA:TRUE, 3650 days; kept OFFLINE in real life', tone: 'dark' },
      { label: 'Tamarind Lab Issuing CA', sub: 'CA:TRUE, pathlen:0, 1825 days', tone: 'blue' },
      { label: 'track.tamarind.example', sub: 'CA:FALSE, serverAuth, SAN, 90 days', tone: 'green' },
    ],
    note: 'Each certificate is signed by the one above it.',
  },
  'C15-M05-F2': {
    type: 'table',
    columns: ['Validation step', 'Fails when', 'Lab error'],
    rows: [
      ['Build the path', 'The intermediate is missing', 'error 20, depth 0'],
      ['Trust anchor', 'The root is not trusted', 'error 20, depth 1'],
      ['Validity', 'After notAfter', 'error 10'],
      ['Name match', 'The host is not in the SAN', 'error 62'],
      ['Policy checks', 'Signatures, constraints, key usage, revocation', '—'],
    ],
  },
  'C15-M05-F3': {
    type: 'compare',
    columns: [
      { title: 'Sign', tone: 'orange', items: ['message → hash → digest', 'sign(digest, private key) → signature'] },
      { title: 'Verify', tone: 'green', items: ["message' → hash → digest'", 'verify(public key, signature) → valid / invalid'] },
    ],
    note: 'Trust in the public key comes from a certificate, signed by an issuer, chaining up to a trusted root.',
  },
  'C15-M06-F1': {
    type: 'sequence',
    actors: [
      { id: 'c', label: 'Client', tone: 'blue' },
      { id: 's', label: 'Server', tone: 'dark' },
    ],
    messages: [
      { from: 'c', to: 's', label: 'ClientHello: versions, suites, key_share X25519, SNI' },
      { from: 's', to: 'c', label: 'ServerHello: key_share → ECDHE secret → HKDF keys', dashed: true },
      { from: 's', to: 'c', label: '{EncryptedExtensions, Certificate, CertificateVerify, Finished} (encrypted)', dashed: true },
      { from: 'c', to: 's', label: '{Finished} after verifying chain + hostname + signature' },
      { from: 'c', to: 's', label: 'Application data, AEAD-protected, in both directions' },
    ],
    note: 'TLS 1.3 completes the handshake in one round trip (1-RTT).',
  },
  'C15-M06-F3': {
    type: 'bars',
    caption: 'Maximum public TLS certificate validity (CA/B Forum SC-081v3)',
    bars: [
      { label: 'Before Mar 2026', value: 398, display: '398 days', tone: 'slate' },
      { label: 'From 15 Mar 2026', value: 200, display: '200 days (in effect, Nov 2026)', tone: 'orange' },
      { label: 'From 15 Mar 2027', value: 100, display: '100 days', tone: 'violet' },
      { label: 'From 15 Mar 2029', value: 47, display: '47 days', tone: 'red' },
    ],
    note: 'Automate issuance and renewal (ACME) and keep an inventory of every endpoint.',
  },
  'C15-M07-F1': {
    type: 'code',
    panels: [
      {
        title: 'Nonce reuse in a stream cipher',
        tone: 'red',
        lines: [
          'C1 = P1 XOR KS(key, nonce)',
          'C2 = P2 XOR KS(key, nonce)     (same nonce!)',
          '',
          'C1 XOR C2 = P1 XOR P2          (the keystream cancels)',
          '',
          'know P1  ->  P2 = (C1 XOR C2) XOR P1',
        ],
        highlight: ['same nonce', 'P2 = '],
      },
    ],
    note: 'The lab recovered P2 this way. Never reuse a nonce with the same key.',
  },
  'C15-M07-F3': {
    type: 'layers',
    layers: [
      { label: '1  Protocols / services', sub: 'TLS, KMS, HSM: prefer these', tone: 'green' },
      { label: '2  High-level libraries', sub: 'libsodium, Tink, Fernet / AEAD classes', tone: 'blue' },
      { label: '3  Low-level "hazmat" primitives', sub: 'only with expert review', tone: 'orange' },
      { label: 'Never', sub: 'home-made algorithms or protocols', tone: 'red' },
    ],
  },
  'C15-M08-F1': {
    type: 'graph',
    dir: 'LR',
    fixedDir: true,
    nodes: [
      { id: 'pp', label: 'Passphrase', tone: 'slate' },
      { id: 'salt', label: 'Random salt', tone: 'slate' },
      { id: 'kdf', label: 'scrypt', sub: 'N = 2^17, r = 8, p = 1', tone: 'violet' },
      { id: 'key', label: '32-byte key', tone: 'dark' },
      { id: 'h', label: 'Header (36 B)', sub: 'RKC1 | kdf | log2n | r | p | salt | nonce', tone: 'blue' },
      { id: 'pt', label: 'Plaintext', tone: 'slate' },
      { id: 'gcm', label: 'AES-256-GCM', sub: 'key, nonce, AAD = header', tone: 'orange' },
      { id: 'out', label: 'Output file', sub: 'header ‖ ciphertext ‖ 16-byte tag', tone: 'green' },
    ],
    edges: [
      { from: 'pp', to: 'kdf' }, { from: 'salt', to: 'kdf' }, { from: 'kdf', to: 'key' }, { from: 'key', to: 'gcm' },
      { from: 'h', to: 'gcm' }, { from: 'pt', to: 'gcm' }, { from: 'gcm', to: 'out' },
    ],
  },
  'C15-M08-F2': {
    type: 'flow',
    dir: 'TB',
    steps: [
      { label: 'Length ≥ 36 + 16 bytes?', tone: 'slate' },
      { label: 'Magic / KDF id correct?', tone: 'slate' },
      { label: 'Parameters within bounds?', tone: 'slate' },
      { label: 'Derive the key', tone: 'violet' },
      { label: 'AEAD decrypt with the header as AAD', tone: 'orange' },
      { label: 'OK: write via a temp file + replace', tone: 'green' },
    ],
    note: 'Any failure: a generic error, exit code 1 (authentication) or 2 (input), and no partial output.',
  },
};
