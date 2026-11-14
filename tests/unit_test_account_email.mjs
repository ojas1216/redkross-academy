/**
 * /api/account-email - verification and password-reset mail (no database, no real SMTP).
 * Token verification, Firebase action-code generation and the SMTP transport are stubbed.
 */
import assert from 'assert';
import nodemailer from 'nodemailer';
import { setTokenVerifier, setActionLinkGenerator, resolveUser } from '../api/_auth.js';
import { setMailTransport } from '../api/_mail.js';
import handler, { resetMailThrottle } from '../api/account-email.js';

process.env.PUBLIC_BASE_URL = 'https://academy.example.test';
process.env.MAIL_FROM = 'RedKross Academy <security@redkross.org.in>';

const sent = [];
const transport = nodemailer.createTransport({ jsonTransport: true });
setMailTransport({
  sendMail: async (msg) => {
    const info = await transport.sendMail(msg);
    sent.push(JSON.parse(info.message));
    return info;
  },
});

const people = {
  newbie: { uid: 'u_new', email: 'newbie@example.com', email_verified: false, firebase: { sign_in_provider: 'password' } },
  done: { uid: 'u_done', email: 'done@example.com', email_verified: true, firebase: { sign_in_provider: 'password' } },
  google: { uid: 'u_g', email: 'g@gmail.com', email_verified: true, firebase: { sign_in_provider: 'google.com' } },
};
setTokenVerifier(async (t) => people[t] || null);
const generated = [];
setActionLinkGenerator(async (kind, email) => {
  if (email === 'nobody@example.com') {
    const e = new Error('no user');
    e.code = 'auth/user-not-found';
    throw e;
  }
  generated.push({ kind, email });
  return `code-${kind}-${generated.length}`;
});

async function call(body, { token, ip = '203.0.113.5', host } = {}) {
  let statusCode = 0;
  let payload;
  const res = {
    setHeader() {},
    status(c) { statusCode = c; return this; },
    json(d) { payload = d; return this; },
    end() { return this; },
  };
  const headers = {};
  if (token) headers.authorization = `Bearer ${token}`;
  if (host) headers.host = host;
  await handler({ method: 'POST', headers, body, socket: { remoteAddress: ip }, ip }, res);
  return { statusCode, body: payload };
}

let passed = 0;
let failed = 0;
async function it(name, fn) {
  try {
    await fn();
    passed++;
    console.log(`[PASS] ${name}`);
  } catch (err) {
    failed++;
    console.error(`[FAIL] ${name}\n  ${err.message}`);
  }
}

await it('verify: requires a token', async () => {
  const r = await call({ action: 'verify' });
  assert.strictEqual(r.statusCode, 401);
});

await it('verify: sends the link to the token email, from MAIL_FROM, pointing at PUBLIC_BASE_URL', async () => {
  sent.length = 0;
  const r = await call({ action: 'verify', email: 'attacker@evil.test' }, { token: 'newbie', host: 'evil.test' });
  assert.strictEqual(r.statusCode, 200, JSON.stringify(r.body));
  assert.strictEqual(sent.length, 1);
  assert.strictEqual(sent[0].to[0].address, 'newbie@example.com');
  assert.strictEqual(sent[0].from.address, 'security@redkross.org.in');
  assert.ok(sent[0].html.includes('https://academy.example.test/auth/action?mode=verifyEmail&amp;oobCode=code-VERIFY_EMAIL-'));
  assert.ok(!JSON.stringify(sent[0]).includes('evil.test'), 'request host/body must not leak into the mail');
  assert.ok(sent[0].text.includes('/auth/action?mode=verifyEmail&oobCode='));
});

await it('verify: one mail per minute per address', async () => {
  const r = await call({ action: 'verify' }, { token: 'newbie' });
  assert.strictEqual(r.statusCode, 429);
  assert.strictEqual(r.body.code, 'COOLDOWN');
});

await it('verify: already-verified and Google accounts send nothing', async () => {
  sent.length = 0;
  assert.strictEqual((await call({ action: 'verify' }, { token: 'done' })).body.alreadyVerified, true);
  assert.strictEqual((await call({ action: 'verify' }, { token: 'google' })).statusCode, 400);
  assert.strictEqual(sent.length, 0);
});

await it('reset: same answer for existing and unknown accounts; mail only to existing', async () => {
  resetMailThrottle();
  sent.length = 0;
  const a = await call({ action: 'reset', email: 'Done@Example.com ' });
  const b = await call({ action: 'reset', email: 'nobody@example.com' });
  assert.strictEqual(a.statusCode, 200);
  assert.deepStrictEqual(a.body, b.body);
  assert.strictEqual(sent.length, 1);
  assert.strictEqual(sent[0].to[0].address, 'done@example.com');
  assert.ok(sent[0].html.includes('mode=resetPassword'));
});

await it('reset: cooldown is silent (no account probing), invalid email is rejected', async () => {
  sent.length = 0;
  const r = await call({ action: 'reset', email: 'done@example.com' });
  assert.strictEqual(r.statusCode, 200);
  assert.strictEqual(sent.length, 0);
  assert.strictEqual((await call({ action: 'reset', email: 'not-an-email' })).statusCode, 400);
});

await it('per-IP hourly limit stops mass mailing from one address', async () => {
  resetMailThrottle();
  process.env.MAIL_PER_IP_HOURLY = '3';
  const codes = [];
  for (let i = 0; i < 5; i++) codes.push((await call({ action: 'reset', email: `p${i}@example.com` }, { ip: '198.51.100.9' })).statusCode);
  delete process.env.MAIL_PER_IP_HOURLY;
  assert.deepStrictEqual(codes, [200, 200, 200, 429, 429]);
});

await it('unknown action -> 400; GET -> 405', async () => {
  assert.strictEqual((await call({ action: 'spam' })).statusCode, 400);
  let code = 0;
  await handler({ method: 'GET', headers: {} }, { setHeader() {}, status(c) { code = c; return this; }, json() { return this; }, end() {} });
  assert.strictEqual(code, 405);
});

await it('unverified email+password identity cannot get an account', async () => {
  await assert.rejects(
    resolveUser({ uid: 'u_new', email: 'newbie@example.com', emailVerified: false, provider: 'password' }, { create: true }),
    (e) => e.status === 403 && e.message === 'EMAIL_NOT_VERIFIED'
  );
});

console.log(`--- ACCOUNT EMAIL: ${passed} PASSED, ${failed} FAILED ---`);
process.exit(failed ? 1 : 0);
