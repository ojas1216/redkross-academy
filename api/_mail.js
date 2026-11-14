/**
 * Outbound mail.
 *
 * Transport (first one configured wins):
 *   1. SMTP  - SMTP_HOST, SMTP_PORT (587 = STARTTLS, 465 = TLS), SMTP_USER, SMTP_PASS.
 *              Used with the mailcow server: mail leaves as MAIL_FROM
 *              (e.g. "RedKross Academy <security@redkross.org.in>").
 *   2. Resend - RESEND_API_KEY.
 * No credentials are hard-coded. Mail from the public forms always goes to
 * ADMIN_INBOX_EMAIL - callers cannot choose that recipient (that made
 * /api/send-email an open relay). Account mail (verification / password reset)
 * goes only to the address on the Firebase account, never to a body-supplied one.
 */
import nodemailer from 'nodemailer';

export function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function adminInbox() {
  return process.env.ADMIN_INBOX_EMAIL || '';
}

export function isEmail(s) {
  return typeof s === 'string' && s.length <= 254 && /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']+$/.test(s);
}

function mailFrom() {
  return process.env.MAIL_FROM || 'RedKross Academy <onboarding@resend.dev>';
}

const oneLine = (s, max = 200) => String(s ?? '').replace(/[\r\n]+/g, ' ').slice(0, max);

let smtpTransport = null;
let smtpKey = '';

/** Exposed for tests: replaces the SMTP transport (e.g. nodemailer jsonTransport). */
export function setMailTransport(t) {
  smtpTransport = t;
  smtpKey = t ? 'injected' : '';
}

function getSmtp() {
  if (smtpKey === 'injected') return smtpTransport;
  const host = process.env.SMTP_HOST;
  if (!host) return null;
  const port = Number(process.env.SMTP_PORT || 587);
  const key = `${host}:${port}:${process.env.SMTP_USER || ''}`;
  if (smtpTransport && smtpKey === key) return smtpTransport;
  smtpTransport = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    requireTLS: port !== 465,
    auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS || '' } : undefined,
    pool: true,
    maxConnections: 3,
    connectionTimeout: 15000,
    greetingTimeout: 10000,
    socketTimeout: 30000,
    disableFileAccess: true,
    disableUrlAccess: true,
    tls: { minVersion: 'TLSv1.2', servername: process.env.SMTP_TLS_SERVERNAME || host },
  });
  smtpKey = key;
  return smtpTransport;
}

export function mailConfigured() {
  return Boolean(getSmtp() || process.env.RESEND_API_KEY);
}

/**
 * Low-level send to ONE validated recipient. Returns { sent, id?, reason? }.
 * Callers must decide the recipient from trusted data, never from request bodies.
 */
export async function sendMail({ to, subject, html, text, replyTo }) {
  if (!isEmail(to)) return { sent: false, reason: 'BAD_RECIPIENT' };
  const smtp = getSmtp();
  if (smtp) {
    try {
      const info = await smtp.sendMail({
        from: mailFrom(),
        to,
        ...(isEmail(replyTo) ? { replyTo } : {}),
        subject: oneLine(subject),
        html,
        text,
      });
      return { sent: true, id: info.messageId };
    } catch (err) {
      console.error('[mail] SMTP error:', err?.code || '', err?.responseCode || '', err?.message);
      return { sent: false, reason: 'MAIL_PROVIDER_ERROR' };
    }
  }
  const key = process.env.RESEND_API_KEY;
  if (!key) return { sent: false, reason: 'MAIL_NOT_CONFIGURED' };
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: mailFrom(),
      to: [to],
      ...(isEmail(replyTo) ? { reply_to: replyTo } : {}),
      subject: oneLine(subject),
      html,
      ...(text ? { text } : {}),
    }),
  });
  if (!res.ok) {
    console.error('[mail] Resend error', res.status, await res.text().catch(() => ''));
    return { sent: false, reason: 'MAIL_PROVIDER_ERROR' };
  }
  const data = await res.json().catch(() => ({}));
  return { sent: true, id: data.id };
}

export async function sendAdminMail({ subject, html, replyTo }) {
  const to = adminInbox();
  if (!to) return { sent: false, reason: 'MAIL_NOT_CONFIGURED' };
  return sendMail({ to, subject, html, replyTo });
}

/** Branded, table-based HTML that renders in Gmail / Outlook, plus a plain-text part. */
export function accountEmail({ heading, intro, buttonText, url, outro }) {
  const safeUrl = escapeHtml(url);
  const html = `<!doctype html><html><body style="margin:0;background:#f4f5f7;font-family:Helvetica,Arial,sans-serif;color:#1f2937">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:32px 12px"><tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#ffffff;border-radius:12px;border-top:4px solid #ff7a00">
<tr><td style="padding:28px 32px 8px;font-size:13px;font-weight:bold;letter-spacing:.08em;color:#ff7a00">REDKROSS ACADEMY</td></tr>
<tr><td style="padding:0 32px;font-size:22px;font-weight:bold;color:#111827">${escapeHtml(heading)}</td></tr>
<tr><td style="padding:14px 32px 0;font-size:15px;line-height:1.6">${escapeHtml(intro)}</td></tr>
<tr><td style="padding:24px 32px"><a href="${safeUrl}" style="display:inline-block;background:#ff7a00;color:#ffffff;text-decoration:none;font-weight:bold;padding:12px 22px;border-radius:8px">${escapeHtml(buttonText)}</a></td></tr>
<tr><td style="padding:0 32px;font-size:12px;line-height:1.6;color:#6b7280">If the button doesn't work, copy this link into your browser:<br><a href="${safeUrl}" style="color:#ff7a00;word-break:break-all">${safeUrl}</a></td></tr>
<tr><td style="padding:18px 32px 28px;font-size:12px;line-height:1.6;color:#6b7280">${escapeHtml(outro)}</td></tr>
</table>
<p style="font-size:11px;color:#9ca3af;margin-top:16px">RedKross Academy &middot; This is an automated security message.</p>
</td></tr></table></body></html>`;
  const text = `${heading}\n\n${intro}\n\n${buttonText}: ${url}\n\n${outro}\n\n- RedKross Academy`;
  return { html, text };
}
