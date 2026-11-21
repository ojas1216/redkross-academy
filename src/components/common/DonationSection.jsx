import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Mail, ExternalLink } from 'lucide-react';

/**
 * Donation call-to-action for the main site.
 *
 * The donation destination is configuration, never hard-coded payment details:
 *   VITE_DONATION_URL    - the organisation's own donation page (payment gateway or bank-details page)
 *   VITE_DONATION_EMAIL  - optional contact address (default contact@redkross.org.in)
 * Until VITE_DONATION_URL is set the section asks supporters to write in instead.
 * No tax-deduction (80G) or other benefit is claimed here; add that wording only once the
 * organisation's adviser has confirmed it.
 */
const DONATION_URL = (import.meta.env.VITE_DONATION_URL || '').trim();
const DONATION_EMAIL = (import.meta.env.VITE_DONATION_EMAIL || 'contact@redkross.org.in').trim();
const SAFE_URL = /^https:\/\//i.test(DONATION_URL) ? DONATION_URL : '';

const USES = [
  'Keeping all 22 cybersecurity courses free',
  'Writing fuller course editions and original lab datasets',
  'Fee waivers on future practicals for students who need them',
];

export default function DonationSection() {
  return (
    <section id="donate" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '100px 0px' }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1A120A]/90 via-[#0C1017]/85 to-[#06090E]/95 border border-[#FF7A00]/30 shadow-xl shadow-black/60 grid gap-6 md:grid-cols-[1.4fr_1fr] items-center"
      >
        <div>
          <div className="w-11 h-11 rounded-xl bg-[#FF7A00]/15 border border-[#FF7A00]/40 flex items-center justify-center text-[#FFA439] mb-4">
            <HeartHandshake className="w-5 h-5" aria-hidden="true" />
          </div>
          <h2 className="font-royal font-bold text-white text-2xl">Support free cybersecurity education</h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            RedKross Academy keeps its courses free for every learner. Donations help us keep it that way and build more.
          </p>
          <ul className="mt-4 space-y-1.5">
            {USES.map((u) => (
              <li key={u} className="text-xs text-slate-400 flex gap-2">
                <span className="text-[#FFA439]" aria-hidden="true">•</span>
                {u}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          {SAFE_URL ? (
            <a
              href={SAFE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#E05300] hover:from-[#FFA439] hover:to-[#FF7A00] text-black font-mono font-bold text-xs uppercase tracking-wider"
            >
              Donate
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          ) : (
            <p className="text-xs text-slate-400 md:text-right">Online donations are opening soon.</p>
          )}
          <a
            href={`mailto:${DONATION_EMAIL}?subject=${encodeURIComponent('Supporting RedKross Academy')}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#FF7A00]/50 text-[#FFA439] hover:text-white hover:border-[#FFA439] font-mono font-bold text-xs uppercase tracking-wider"
          >
            <Mail className="w-3.5 h-3.5" aria-hidden="true" />
            Write to us about supporting
          </a>
          <p className="text-[11px] text-slate-500 md:text-right max-w-xs">
            Donations do not buy course access, credits or certificates.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
