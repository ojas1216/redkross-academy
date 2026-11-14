import { json, cors, serverError } from './_db.js';
import { verifyRequest, createActionCode } from './_auth.js';
import { sendMail, mailConfigured, isEmail, accountEmail } from './_mail.js';
import { clientIp } from '../server/rateLimit.js';

/**
 * POST /api/account-email - account emails sent from the academy's own mailbox
 * (MAIL_FROM, e.g. security@redkross.org.in via mailcow SMTP).
 *
 *   { action: 'verify' }          Bearer <Firebase ID token of an email+password account>
 *                                 Sends the "confirm your email" link to the token's email.
 *   { action: 'reset', email }    No auth. Sends a password-reset link if that account
 *                                 exists. Always answers the same way (no account probing).
 *
 * The link points at PUBLIC_BASE_URL/auth/action (never at a request-supplied host).
 * Abuse limits (in memory, per server process): per address one mail a minute and
 * MAIL_PER_ADDRESS_DAILY (default 5) a day; per IP MAIL_PER_IP_HOURLY (default 20) an hour;
 * overall MAIL_DAILY_CAP (default 2000) a day, so a bot cannot burn the relay quota.
 */

const DAY = 24 * 60 * 60 * 1000;
const HOUR = 60 * 60 * 1000;
const COOLDOWN = 60 * 1000;
const num = (v, d) => (Number.isFinite(Number(v)) && Number(v) > 0 ? Number(v) : d);

const perAddress = new Map(); // email -> { last, day, count }
const perIp = new Map(); // ip -> { hour, count }
let totals = { day: 0, count: 0 };

/** Exposed for tests. */
export function resetMailThrottle() {
  perAddress.clear();
  perIp.clear();
  totals = { day: 0, count: 0 };
}

function throttle(email, ip, now = Date.now()) {
  const day = Math.floor(now / DAY);
  const hour = Math.floor(now / HOUR);
  if (totals.day !== day) totals = { day, count: 0 };
  if (totals.count >= num(process.env.MAIL_DAILY_CAP, 2000)) return 'DAILY_CAP';

  const ipRec = perIp.get(ip);
  if (ipRec && ipRec.hour === hour && ipRec.count >= num(process.env.MAIL_PER_IP_HOURLY, 20)) return 'IP_LIMIT';

  const rec = perAddress.get(email);
  if (rec && now - rec.last < COOLDOWN) return 'COOLDOWN';
  if (rec && rec.day === day && rec.count >= num(process.env.MAIL_PER_ADDRESS_DAILY, 5)) return 'ADDRESS_LIMIT';

  perAddress.set(email, { last: now, day, count: rec && rec.day === day ? rec.count + 1 : 1 });
  perIp.set(ip, { hour, count: ipRec && ipRec.hour === hour ? ipRec.count + 1 : 1 });
  totals.count++;
  if (perAddress.size > 50000) perAddress.clear();
  if (perIp.size > 50000) perIp.clear();
  return null;
}

function baseUrl() {
  return (process.env.PUBLIC_BASE_URL || 'http://localhost:5173').replace(/\/+$/, '');
}

function actionUrl(mode, oobCode) {
  const u = new URL('/auth/action', baseUrl());
  u.searchParams.set('mode', mode);
  u.searchParams.set('oobCode', oobCode);
  return u.toString();
}

const LIMIT_MESSAGE = {
  COOLDOWN: 'An email was just sent. Please wait a minute before asking for another.',
  ADDRESS_LIMIT: 'Too many emails for this address today. Please try again tomorrow.',
  IP_LIMIT: 'Too many requests from your network. Please try again later.',
  DAILY_CAP: 'Email sending is paused for today. Please try again later.',
};

export default async function handler(req, res) {
  if (cors(req, res)) return;
  if (req.method !== 'POST') return json(res, { error: 'Method not allowed' }, 405);

  const body = req.body || {};
  const action = body.action;
  try {
    if (!mailConfigured()) return json(res, { error: 'Email is not configured on the server.' }, 503);

    if (action === 'verify') {
      const identity = await verifyRequest(req);
      if (!identity) return json(res, { error: 'Authentication required' }, 401);
      if (identity.provider !== 'password') return json(res, { error: 'Only email sign-ups need verification.' }, 400);
      if (identity.emailVerified) return json(res, { ok: true, alreadyVerified: true });
      if (!isEmail(identity.email)) return json(res, { error: 'Account has no valid email.' }, 400);

      const limited = throttle(identity.email, clientIp(req));
      if (limited) return json(res, { error: LIMIT_MESSAGE[limited], code: limited }, 429);

      const code = await createActionCode('VERIFY_EMAIL', identity.email);
      const mail = accountEmail({
        heading: 'Confirm your email address',
        intro: 'Welcome to RedKross Academy. Click the button below to confirm this email address and activate your account.',
        buttonText: 'Confirm my email',
        url: actionUrl('verifyEmail', code),
        outro: "If you didn't create a RedKross Academy account, you can ignore this email; the account stays inactive.",
      });
      const sent = await sendMail({ to: identity.email, subject: 'Confirm your RedKross Academy account', ...mail });
      if (!sent.sent) return json(res, { error: 'Could not send the email. Please try again shortly.' }, 502);
      return json(res, { ok: true });
    }

    if (action === 'reset') {
      const email = String(body.email || '').trim().toLowerCase();
      if (!isEmail(email)) return json(res, { error: 'Enter a valid email address.' }, 400);
      const generic = { ok: true, message: 'If an account exists for that address, a reset link is on its way.' };

      const limited = throttle(email, clientIp(req));
      if (limited === 'COOLDOWN' || limited === 'ADDRESS_LIMIT') return json(res, generic);
      if (limited) return json(res, { error: LIMIT_MESSAGE[limited], code: limited }, 429);

      let code;
      try {
        code = await createActionCode('PASSWORD_RESET', email);
      } catch (err) {
        if (err?.code === 'auth/user-not-found' || err?.code === 'auth/email-not-found') return json(res, generic);
        throw err;
      }
      const mail = accountEmail({
        heading: 'Reset your password',
        intro: 'Someone (hopefully you) asked to reset the password for this RedKross Academy account. The link works once and expires in one hour.',
        buttonText: 'Choose a new password',
        url: actionUrl('resetPassword', code),
        outro: "If you didn't ask for this, ignore this email; your password stays the same.",
      });
      const sent = await sendMail({ to: email, subject: 'Reset your RedKross Academy password', ...mail });
      if (!sent.sent) console.error('[account-email] reset mail failed:', sent.reason);
      return json(res, generic);
    }

    return json(res, { error: 'Unknown action' }, 400);
  } catch (err) {
    if (err?.code === 'NO_SERVICE_ACCOUNT') {
      console.error('[account-email]', err.message);
      return json(res, { error: 'Email sign-up is not configured on the server yet.' }, 503);
    }
    return serverError(res, err);
  }
}
