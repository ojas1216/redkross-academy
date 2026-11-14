/**
 * In-memory fixed-window rate limiting, designed for traffic that arrives through a
 * Cloudflare tunnel (every request reaches Node from 127.0.0.1).
 *
 * Two buckets per request:
 *  - per user  (signed-in requests, keyed on the token's uid): stops one account
 *    from hammering the API.
 *  - per IP, anonymous: a lower ceiling for callers without a token.
 *  - per IP    (everyone): a much higher ceiling, because a whole college batch can
 *    share one NAT address. Also caps anyone forging uids to dodge the user bucket.
 *
 * Runs in one process. If the API is ever scaled to several processes, move the
 * counters to Redis (or rely on Cloudflare rate-limiting rules).
 */
import crypto from 'crypto';

const LOOPBACK = new Set(['127.0.0.1', '::1', '::ffff:127.0.0.1']);

/**
 * Real client IP. Cloudflare's CF-Connecting-IP is only believed when the
 * connection itself comes from the local tunnel (cloudflared) or a trusted proxy,
 * so a direct caller cannot spoof it.
 */
export function clientIp(req) {
  const peer = req.socket?.remoteAddress || '';
  const cf = req.headers?.['cf-connecting-ip'];
  if (cf && (LOOPBACK.has(peer) || process.env.TRUST_CF_CONNECTING_IP === '1')) {
    return String(cf).trim().slice(0, 64);
  }
  return req.ip || peer || 'unknown';
}

/**
 * Bucket key for a signed-in caller: the uid from the JWT payload, read WITHOUT
 * verification. That is fine for counting (forging a uid only moves the caller into
 * another user bucket, and the per-IP bucket still applies); identity checks happen
 * in the handlers.
 */
export function tokenSubject(req) {
  const h = req.headers?.authorization || '';
  if (!h.startsWith('Bearer ')) return null;
  const parts = h.slice(7).split('.');
  if (parts.length !== 3) return null;
  try {
    const payload = JSON.parse(Buffer.from(parts[1], 'base64url').toString('utf8'));
    const sub = payload.user_id || payload.sub;
    if (typeof sub === 'string' && sub.length <= 128) return sub;
  } catch {
    // fall through
  }
  // Unparseable token: count by a hash of it (still per-caller, never the raw token).
  return `h:${crypto.createHash('sha256').update(h).digest('hex').slice(0, 16)}`;
}

export function createRateLimiter({ name, windowMs = 60000, perUser, perIp, perAnonIp, message = 'Too many requests. Please slow down.' }) {
  const buckets = new Map();

  const hit = (key, max, now) => {
    let rec = buckets.get(key);
    if (!rec || now - rec.start >= windowMs) {
      rec = { start: now, count: 0 };
      buckets.set(key, rec);
    }
    rec.count += 1;
    return rec.count > max ? Math.ceil((rec.start + windowMs - now) / 1000) : 0;
  };

  const sweep = setInterval(() => {
    const now = Date.now();
    for (const [k, rec] of buckets) if (now - rec.start >= windowMs) buckets.delete(k);
  }, Math.max(windowMs, 60000));
  sweep.unref?.();

  return function rateLimit(req, res, next) {
    const now = Date.now();
    const ip = clientIp(req);
    let retry = hit(`${name}:ip:${ip}`, perIp, now);
    const sub = tokenSubject(req);
    if (!retry && sub && perUser) retry = hit(`${name}:u:${sub}`, perUser, now);
    if (!retry && !sub && perAnonIp) retry = hit(`${name}:anon:${ip}`, perAnonIp, now);
    if (retry) {
      res.setHeader('Retry-After', String(retry));
      return res.status(429).json({ error: message, retryAfterSeconds: retry });
    }
    return next();
  };
}
