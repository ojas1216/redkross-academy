import React, { useState } from 'react';
import { Mail, KeyRound, User, AlertCircle, CheckCircle2, ArrowLeft } from 'lucide-react';
import { useAuth } from '../../services/auth/authContext';

const MESSAGES = {
  'auth/email-already-in-use': 'An account already exists for this email. Sign in instead (or use Google if you registered with Google).',
  'auth/invalid-credential': 'Email or password is incorrect.',
  'auth/wrong-password': 'Email or password is incorrect.',
  'auth/user-not-found': 'Email or password is incorrect.',
  'auth/invalid-email': 'Enter a valid email address.',
  'auth/weak-password': 'Use a password of at least 8 characters.',
  'auth/too-many-requests': 'Too many attempts. Please wait a few minutes and try again.',
  'auth/network-request-failed': 'Network problem. Check your connection and try again.',
  'auth/operation-not-allowed': 'Email sign-in is not enabled yet. Please use Google for now.',
};
const friendly = (err) => MESSAGES[err?.code] || err?.message || 'Something went wrong. Please try again.';

const inputCls =
  'w-full pl-10 pr-3 py-3 rounded-xl bg-[#0B1117]/70 border border-[#263440] focus:border-[#FF7A00] focus:outline-none text-sm text-white placeholder-[#64748B]';

function Field({ icon: Icon, ...props }) {
  return (
    <label className="relative block">
      <Icon className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
      <input className={inputCls} {...props} />
    </label>
  );
}

/**
 * Email sign-in / sign-up. New accounts get a confirmation link from the academy's
 * mailbox and can only sign in after clicking it.
 */
export default function EmailAuthPanel({ onSignedIn }) {
  const { loginWithEmail, registerWithEmail, resendVerification, requestPasswordReset } = useAuth();
  const [mode, setMode] = useState('signin'); // signin | signup | reset | sent
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [unverified, setUnverified] = useState(false);
  const [sentTo, setSentTo] = useState('');

  const go = (m) => {
    setMode(m);
    setError('');
    setNotice('');
    setUnverified(false);
  };

  const run = async (fn) => {
    setError('');
    setNotice('');
    setBusy(true);
    try {
      await fn();
    } catch (err) {
      setError(friendly(err));
    } finally {
      setBusy(false);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    const addr = email.trim();
    if (mode === 'signin') {
      return run(async () => {
        try {
          await loginWithEmail(addr, password);
          onSignedIn?.();
        } catch (err) {
          if (err.code === 'auth/email-not-verified') setUnverified(true);
          throw err;
        }
      });
    }
    if (mode === 'signup') {
      if (password.length < 8) return setError('Use a password of at least 8 characters.');
      if (password !== confirm) return setError('The two passwords do not match.');
      return run(async () => {
        const r = await registerWithEmail(addr, password, name.trim());
        setSentTo(r.email || addr);
        setPassword('');
        setConfirm('');
        setMode('sent');
        if (r.mailError) setError(`Your account was created, but the email could not be sent: ${friendly(r.mailError)} Go to sign in, enter your password and press "Send the link again".`);
      });
    }
    if (mode === 'reset') {
      return run(async () => {
        const r = await requestPasswordReset(addr);
        setNotice(r.message || 'If an account exists for that address, a reset link is on its way.');
      });
    }
    return undefined;
  };

  const resend = () =>
    run(async () => {
      if (!password) throw new Error('Enter your password above, then press "Send the link again".');
      const r = await resendVerification(email.trim(), password);
      setNotice(r.alreadyVerified ? 'This email is already confirmed. You can sign in.' : `A new link was sent to ${email.trim()}.`);
    });

  if (mode === 'sent') {
    return (
      <div className="space-y-4 text-sm">
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex gap-2.5">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          <div className="space-y-1 leading-relaxed">
            <div className="font-semibold">Check your inbox</div>
            <div>
              We sent a confirmation link to <b className="break-all">{sentTo}</b> from security@redkross.org.in. Click it to
              activate your account, then sign in. Check your spam folder if it hasn't arrived in a few minutes.
            </div>
          </div>
        </div>
        {error && <p className="text-xs text-red-400">{error}</p>}
        <button type="button" onClick={() => go('signin')} className="w-full py-3 rounded-xl bg-[#FF7A00] hover:bg-[#ff8d22] text-black font-semibold">
          Go to sign in
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-3" noValidate>
      {mode !== 'reset' ? (
        <div className="grid grid-cols-2 gap-1 p-1 rounded-xl bg-[#0B1117]/60 border border-[#263440] text-xs font-mono">
          {[
            ['signin', 'Sign in'],
            ['signup', 'Create account'],
          ].map(([m, label]) => (
            <button
              key={m}
              type="button"
              onClick={() => go(m)}
              className={`py-2 rounded-lg transition-colors ${mode === m ? 'bg-[#FF7A00] text-black font-semibold' : 'text-[#94A3B8] hover:text-white'}`}
            >
              {label}
            </button>
          ))}
        </div>
      ) : (
        <button type="button" onClick={() => go('signin')} className="flex items-center gap-1.5 text-xs text-[#94A3B8] hover:text-white">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to sign in
        </button>
      )}

      {mode === 'reset' && (
        <p className="text-xs text-[#94A3B8] leading-relaxed">Enter your account email and we'll send you a link to choose a new password.</p>
      )}

      {mode === 'signup' && (
        <Field icon={User} type="text" placeholder="Full name" autoComplete="name" maxLength={120} value={name} onChange={(e) => setName(e.target.value)} />
      )}
      <Field icon={Mail} type="email" placeholder="Email address" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      {mode !== 'reset' && (
        <Field
          icon={KeyRound}
          type="password"
          placeholder={mode === 'signup' ? 'Password (min. 8 characters)' : 'Password'}
          autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      )}
      {mode === 'signup' && (
        <Field icon={KeyRound} type="password" placeholder="Confirm password" autoComplete="new-password" required value={confirm} onChange={(e) => setConfirm(e.target.value)} />
      )}

      {error && (
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-2 text-xs text-red-400">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span className="leading-relaxed">{error}</span>
        </div>
      )}
      {notice && <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300">{notice}</div>}

      <button
        type="submit"
        disabled={busy || !email.trim() || (mode !== 'reset' && !password)}
        className="w-full py-3 rounded-xl bg-[#FF7A00] hover:bg-[#ff8d22] text-black font-semibold text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {busy ? 'Please wait…' : mode === 'signin' ? 'Sign in with email' : mode === 'signup' ? 'Create account' : 'Send reset link'}
      </button>

      {mode === 'signin' && (
        <div className="flex justify-between text-xs">
          <button type="button" onClick={() => go('reset')} className="text-[#94A3B8] hover:text-[#FF7A00]">
            Forgot password?
          </button>
          {unverified && (
            <button type="button" onClick={resend} disabled={busy} className="text-[#FF7A00] hover:underline">
              Send the link again
            </button>
          )}
        </div>
      )}
      {mode === 'signup' && (
        <p className="text-[11px] text-[#64748B] leading-relaxed">
          We'll email a confirmation link from security@redkross.org.in. Your account activates once you click it.
        </p>
      )}
    </form>
  );
}
