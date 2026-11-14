import React, { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { applyActionCode, verifyPasswordResetCode, confirmPasswordReset } from 'firebase/auth';
import { CheckCircle2, AlertCircle, KeyRound, MailCheck } from 'lucide-react';
import { auth } from '../../services/auth/firebase';

const CODE_ERRORS = {
  'auth/expired-action-code': 'This link has expired. Request a new one from the sign-in page.',
  'auth/invalid-action-code': 'This link is invalid or has already been used. Request a new one from the sign-in page.',
  'auth/user-disabled': 'This account has been disabled.',
  'auth/user-not-found': 'This account no longer exists.',
  'auth/weak-password': 'Use a password of at least 8 characters.',
};
const message = (err) => CODE_ERRORS[err?.code] || err?.message || 'Something went wrong. Please try again.';

/**
 * Landing page for the links in account emails (sent by /api/account-email):
 *   /auth/action?mode=verifyEmail&oobCode=...    confirms the address
 *   /auth/action?mode=resetPassword&oobCode=...  lets the user choose a new password
 */
export default function AuthActionPage() {
  const [params] = useSearchParams();
  const mode = params.get('mode');
  const code = params.get('oobCode') || '';
  const [state, setState] = useState('working'); // working | done | form | error
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [busy, setBusy] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return; // StrictMode runs effects twice; a code works only once
    started.current = true;
    if (!code || !['verifyEmail', 'resetPassword'].includes(mode)) {
      setError('This link is incomplete. Open it straight from the email, or request a new one.');
      setState('error');
      return;
    }
    const job =
      mode === 'verifyEmail'
        ? applyActionCode(auth, code).then(async () => {
            if (auth.currentUser) await auth.currentUser.reload().catch(() => {});
            setState('done');
          })
        : verifyPasswordResetCode(auth, code).then((addr) => {
            setEmail(addr);
            setState('form');
          });
    job.catch((err) => {
      setError(message(err));
      setState('error');
    });
  }, [code, mode]);

  const submitReset = async (e) => {
    e.preventDefault();
    if (password.length < 8) return setError('Use a password of at least 8 characters.');
    if (password !== confirm) return setError('The two passwords do not match.');
    setBusy(true);
    setError('');
    try {
      await confirmPasswordReset(auth, code, password);
      setState('done');
    } catch (err) {
      setError(message(err));
    } finally {
      setBusy(false);
    }
  };

  const inputCls =
    'w-full px-3 py-3 rounded-xl bg-[#0B1117]/70 border border-[#263440] focus:border-[#FF7A00] focus:outline-none text-sm text-white placeholder-[#64748B]';

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12 relative z-10">
      <div className="max-w-md w-full ultra-glass-panel rounded-2xl p-6 sm:p-8 space-y-5">
        <div className="flex items-center gap-2.5 text-white">
          {mode === 'resetPassword' ? <KeyRound className="w-5 h-5 text-[#FF7A00]" /> : <MailCheck className="w-5 h-5 text-[#FF7A00]" />}
          <h1 className="font-royal text-xl font-bold">{mode === 'resetPassword' ? 'Reset your password' : 'Confirm your email'}</h1>
        </div>

        {state === 'working' && (
          <div className="flex items-center gap-3 text-sm text-[#94A3B8]">
            <div className="w-5 h-5 border-2 border-[#FF7A00] border-t-transparent rounded-full animate-spin" />
            Checking your link…
          </div>
        )}

        {state === 'done' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex gap-2.5 text-sm">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              <span>{mode === 'resetPassword' ? 'Your password has been changed.' : 'Your email is confirmed and your account is active.'}</span>
            </div>
            <Link to="/login" className="block text-center w-full py-3 rounded-xl bg-[#FF7A00] hover:bg-[#ff8d22] text-black font-semibold text-sm">
              Sign in
            </Link>
          </div>
        )}

        {state === 'form' && (
          <form onSubmit={submitReset} className="space-y-3">
            <p className="text-xs text-[#94A3B8]">
              New password for <b className="text-white break-all">{email}</b>
            </p>
            <input className={inputCls} type="password" placeholder="New password (min. 8 characters)" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input className={inputCls} type="password" placeholder="Confirm new password" autoComplete="new-password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
            {error && <p className="text-xs text-red-400">{error}</p>}
            <button type="submit" disabled={busy || !password} className="w-full py-3 rounded-xl bg-[#FF7A00] hover:bg-[#ff8d22] text-black font-semibold text-sm disabled:opacity-50">
              {busy ? 'Saving…' : 'Save new password'}
            </button>
          </form>
        )}

        {state === 'error' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex gap-2.5 text-sm">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>{error}</span>
            </div>
            <Link to="/login" className="block text-center text-sm text-[#FF7A00] hover:underline">
              Back to sign in
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
