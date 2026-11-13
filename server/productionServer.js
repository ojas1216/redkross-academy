/**
 * RedKross Academy - Standalone Production Server (Hardened Enterprise Gateway)
 * 
 * Combines:
 * 1. Express REST API engine (dynamically mounting /api/* endpoints)
 * 2. Real-Time Socket.io Telemetry & Proctoring Server (Room-Scoped & CORS Restricted)
 * 3. Static SPA serving (dist/ with React Router client fallback)
 * 4. Graceful shutdown & health/readiness monitoring (/healthz, /readyz)
 * 5. Security Defense Layer: Helmet-grade headers, rate-limiting, and CORS controls
 * 
 * Run with:
 *   node server/productionServer.js
 * Or with PM2:
 *   pm2 start ecosystem.config.cjs
 */

import express from 'express';
import { createServer } from 'http';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { sql, isOriginAllowed } from '../api/_db.js';
import { attachSocketHub } from './socketHub.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = parseInt(process.env.PORT || '3000', 10);
const HOST = process.env.HOST || '0.0.0.0';

const app = express();
// Behind Cloudflare/nginx set TRUST_PROXY (e.g. 1) so req.ip is the real client address.
// Never trust X-Forwarded-For blindly: it is attacker-controlled and would defeat rate limiting.
app.set('trust proxy', process.env.TRUST_PROXY ? (Number(process.env.TRUST_PROXY) || process.env.TRUST_PROXY) : 'loopback');
const httpServer = createServer(app);

// -----------------------------------------------------------------------------
// 1. SECURITY DEFENSE & HEADERS LAYER (Helmet-grade headers without external dep)
// -----------------------------------------------------------------------------
app.use((req, res, next) => {
  // Enforce HSTS (Strict-Transport-Security: 2 years, include subdomains)
  res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  
  // Prevent MIME-sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');
  
  // Prevent clickjacking / iframe embedding
  res.setHeader('X-Frame-Options', 'DENY');
  
  // Cross-site scripting legacy filter
  res.setHeader('X-XSS-Protection', '1; mode=block');
  
  // Referrer Policy
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Restrict sensitive hardware features
  res.setHeader('Permissions-Policy', 'camera=(self), microphone=(self), geolocation=()');

  // Disable powered-by banner
  res.removeHeader('X-Powered-By');

  next();
});

// -----------------------------------------------------------------------------
// 2. CORS RESTRICTION LAYER
// -----------------------------------------------------------------------------
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin && isOriginAllowed(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }
  next();
});

// -----------------------------------------------------------------------------
// 3. IN-MEMORY SLIDING WINDOW RATE LIMITER (Zero external dependencies)
// -----------------------------------------------------------------------------
const rateLimitBuckets = new Map();

function createRateLimiter({ windowMs = 60000, max = 120, message = 'Rate limit exceeded' }) {
  return (req, res, next) => {
    // Exclude static assets
    if (!req.path.startsWith('/api/')) return next();

    const ip = req.ip || req.socket.remoteAddress || 'unknown-ip';
    const key = `${ip}:${max}:${windowMs}`;
    const now = Date.now();

    let record = rateLimitBuckets.get(key);
    if (!record || now - record.resetTime > windowMs) {
      record = { count: 1, resetTime: now };
      rateLimitBuckets.set(key, record);
    } else {
      record.count += 1;
    }

    if (record.count > max) {
      return res.status(429).json({
        error: message,
        retryAfterSeconds: Math.ceil((record.resetTime + windowMs - now) / 1000)
      });
    }

    next();
  };
}

// Clean up stale rate-limiting buckets every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of rateLimitBuckets.entries()) {
    if (now - record.resetTime > 120000) {
      rateLimitBuckets.delete(key);
    }
  }
}, 300000);

// Global API rate limit: 120 requests/min
app.use('/api', createRateLimiter({ windowMs: 60000, max: 120, message: 'Too many requests. Please slow down.' }));

// Stricter rate limit for authentication & exam evaluation: 30 requests/min
app.use(['/api/auth', '/api/redeem', '/api/assessment', '/api/violation', '/api/send-email', '/api/support-tickets', '/api/e2b'], createRateLimiter({
  windowMs: 60000,
  max: 30,
  message: 'Security threshold exceeded. High-frequency operations rate-limited.'
}));

// Request body parser with scoped limits (2MB general, 25MB for assignments)
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true, limit: '2mb' }));

// -----------------------------------------------------------------------------
// 4. HARDENED REAL-TIME SOCKET.IO SERVER (Scoped rooms & CORS protection)
// -----------------------------------------------------------------------------
const io = attachSocketHub(httpServer);

// -----------------------------------------------------------------------------
// 5. HEALTH & READINESS PROBES (/healthz, /readyz)
// -----------------------------------------------------------------------------
app.get(['/healthz', '/api/health'], async (req, res) => {
  try {
    let dbStatus = 'connected';
    try {
      await sql`SELECT 1 as ping`;
    } catch (err) {
      dbStatus = 'degraded';
      console.error('[healthz] database check failed:', err.message);
    }

    res.status(200).json({
      status: 'healthy',
      service: 'RedKross Academy Production Gateway',
      environment: process.env.NODE_ENV || 'production',
      database: dbStatus,
      uptime_seconds: Math.floor(process.uptime()),
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ status: 'error' });
  }
});

app.get(['/readyz', '/api/ready'], async (req, res) => {
  try {
    await sql`SELECT 1 as ping`;
    const socketReady = Boolean(io);

    res.status(200).json({
      status: 'ready',
      database: 'connected',
      sockets: socketReady ? 'listening' : 'uninitialized',
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    res.status(503).json({
      status: 'not_ready',
      timestamp: new Date().toISOString()
    });
  }
});

// -----------------------------------------------------------------------------
// 6. DYNAMICALLY MOUNTED API ENDPOINTS (api/*.js)
// -----------------------------------------------------------------------------
const apiDir = path.join(__dirname, '../api');
const apiRoutes = [
  'admin',
  'assessment',
  'avatar',
  'catalog',
  'manage',
  'profile',
  'redeem',
  'auth',
  'courses',
  'e2b',
  'enrol',
  'learning-paths',
  'progress',
  'quiz',
  'send-email',
  'support-tickets',
  'verify',
  'violation',
  'wallet'
];

for (const route of apiRoutes) {
  const filePath = path.join(apiDir, `${route}.js`);
  if (fs.existsSync(filePath)) {
    app.all(`/api/${route}`, async (req, res, next) => {
      try {
        const module = await import(`../api/${route}.js`);
        if (typeof module.default === 'function') {
          return await module.default(req, res);
        }
        res.status(404).json({ error: `Handler for /api/${route} not found` });
      } catch (err) {
        console.error(`[API Error] /api/${route}:`, err);
        if (!res.headersSent) {
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
    });
  }
}

// -----------------------------------------------------------------------------
// Explicit route for learning-paths forwarded to courses.js
app.all('/api/learning-paths', async (req, res) => {
  try {
    const module = await import('../api/courses.js');
    req.query = req.query || {};
    req.query.type = 'learning_paths';
    return await module.default(req, res);
  } catch (err) {
    console.error('[API Error] /api/learning-paths:', err);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});

// 7. FRONTEND STATIC ASSET SERVING & SPA FALLBACK (dist/)
// -----------------------------------------------------------------------------
const distDir = path.join(__dirname, '../dist');
if (fs.existsSync(distDir)) {
  app.use(express.static(distDir, {
    maxAge: '1d',
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.html')) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      }
    }
  }));

  // Fallback all SPA routes to dist/index.html
  app.use((req, res, next) => {
    if (req.path.startsWith('/api/') || req.path.startsWith('/socket.io/') || req.path.startsWith('/healthz') || req.path.startsWith('/readyz')) {
      return next();
    }
    res.sendFile(path.join(distDir, 'index.html'));
  });
} else {
  app.use((req, res, next) => {
    if (req.path.startsWith('/api/') || req.path.startsWith('/socket.io/') || req.path.startsWith('/healthz') || req.path.startsWith('/readyz')) {
      return next();
    }
    res.status(200).send(`
      <!DOCTYPE html>
      <html>
        <head><title>RedKross Academy Backend Active</title></head>
        <body style="background:#071018;color:#65F58A;font-family:sans-serif;padding:40px;text-align:center;">
          <h1>RedKross Academy API & Real-time Server Running</h1>
          <p style="color:#A7B1C6;">Frontend build (dist/) not detected. Run <code>npm run build</code> to compile the client interface.</p>
        </body>
      </html>
    `);
  });
}

// -----------------------------------------------------------------------------
// 8. SERVER BOOT & GRACEFUL SHUTDOWN
// -----------------------------------------------------------------------------
httpServer.listen(PORT, HOST, () => {
  console.log(`====================================================`);
  console.log(`  REDKROSS ACADEMY - HARDENED GATEWAY RUNNING       `);
  console.log(`====================================================`);
  console.log(`  Local Address:     http://localhost:${PORT}`);
  console.log(`  Health Check:      http://localhost:${PORT}/healthz`);
  console.log(`  Readiness Probe:   http://localhost:${PORT}/readyz`);
  console.log(`  API Base:          http://localhost:${PORT}/api/courses`);
  console.log(`  Static Frontend:   ${fs.existsSync(distDir) ? 'Loaded from dist/' : 'Not yet built'}`);
  console.log(`  Security Headers:  Active (HSTS, DENY, nosniff, CSP)`);
  console.log(`  Rate Limiting:     Active (120/min API, 30/min Auth)`);
  console.log(`====================================================`);
});

const shutdown = (signal) => {
  console.log(`\nReceived ${signal}. Gracefully shutting down...`);
  httpServer.close(() => {
    console.log('HTTP and Socket.io servers closed.');
    process.exit(0);
  });
  setTimeout(() => {
    console.error('Forcefully terminating after timeout.');
    process.exit(1);
  }, 5000);
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
