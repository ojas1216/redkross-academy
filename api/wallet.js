import { sql, json, cors, serverError } from './_db.js';
import { requireUser } from './_auth.js';

/** GET /api/wallet - the caller's token ledger (admins may pass ?userId= to inspect another account). */
export default async function handler(req, res) {
  if (cors(req, res)) return;
  if (req.method !== 'GET') return json(res, { error: 'Method not allowed' }, 405);
  try {
    const ctx = await requireUser(req, res);
    if (!ctx) return;
    const target = ctx.isAdmin && req.query?.userId ? String(req.query.userId) : ctx.user.id;
    const [wallet] = await sql`
      SELECT COALESCE(SUM(amount), 0) AS balance,
             COALESCE(SUM(amount) FILTER (WHERE amount > 0), 0) AS total_earned,
             -COALESCE(SUM(amount) FILTER (WHERE amount < 0), 0) AS total_spent,
             (SELECT COALESCE(json_agg(page ORDER BY page.created_at DESC, page.id DESC), '[]'::json)
              FROM (
                SELECT id, amount, COALESCE(transaction_type, 'reward') AS transaction_type, description, created_at
                FROM reward_ledger WHERE user_id = ${target} ORDER BY created_at DESC, id DESC LIMIT 500
              ) AS page) AS transactions
      FROM reward_ledger WHERE user_id = ${target}
    `;
    return json(res, {
      balance: Number(wallet.balance),
      total_earned: Number(wallet.total_earned),
      total_spent: Number(wallet.total_spent),
      transactions: wallet.transactions,
    });
  } catch (error) {
    return serverError(res, error, 'api/wallet');
  }
}
