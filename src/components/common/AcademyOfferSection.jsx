import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Coins, PackageOpen, FileText, ArrowRight } from 'lucide-react';

/**
 * What the Academy offers today and what is coming: all 22 cybersecurity courses free,
 * Academy credits collected now for later use, paid course bundles announced as coming soon.
 * Wording is deliberately modest: the courses are foundational editions, credits have no cash
 * value, and nothing is on sale yet.
 */
const CARD =
  'p-6 rounded-2xl bg-gradient-to-b from-[#18120B]/80 via-[#0C1017]/80 to-[#06090E]/90 border border-[#FF7A00]/25 backdrop-blur-xl hover:border-[#FFA439]/60 transition-all duration-300 shadow-xl shadow-black/60 hover:shadow-[0_0_25px_rgba(255,122,0,0.2)] group flex flex-col';
const ICON =
  'w-10 h-10 rounded-xl bg-[#FF7A00]/15 border border-[#FF7A00]/40 flex items-center justify-center text-[#FFA439] mb-3.5 shadow-[0_0_12px_rgba(255,122,0,0.25)]';
const BADGE = 'inline-block self-start mb-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider';

const ITEMS = [
  {
    icon: BookOpen,
    badge: { text: 'Free now', cls: 'bg-emerald-500/15 text-emerald-300 border border-emerald-400/30' },
    title: 'All 22 cybersecurity courses are free',
    body: (
      <>
        Every lesson, quiz and final assessment is free to study. Most courses are currently foundational editions that
        cover the essentials; fuller, deeper editions are being written course by course. Free courses will stay free.
      </>
    ),
    link: { to: '/academy/cybersecurity', text: 'Browse the courses' },
  },
  {
    icon: Coins,
    badge: { text: 'Collect now', cls: 'bg-[#FF7A00]/15 text-[#FFA439] border border-[#FF7A00]/40' },
    title: 'Collect Academy credits for later',
    body: (
      <>
        Pass module assessments and finals to collect Academy credits in your wallet. Keep them: they will be usable on
        upcoming course bundles and learning resources such as playbooks, templates and lab packs. Credits have no cash
        value and cannot be transferred or withdrawn.
      </>
    ),
  },
  {
    icon: PackageOpen,
    badge: { text: 'Coming soon', cls: 'bg-sky-500/15 text-sky-300 border border-sky-400/30' },
    title: 'Paid course bundles',
    body: (
      <>
        Advanced bundles with guided practicals, assessed case work, incident playbooks and ready-to-use templates are in
        preparation. Nothing is on sale yet; prices and details will be announced here first.
      </>
    ),
    extras: ['Incident playbooks', 'Report and policy templates', 'Hands-on lab packs'],
  },
];

export default function AcademyOfferSection() {
  return (
    <section id="free-courses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 scroll-mt-28">
      <div className="text-center mb-8">
        <h2 className="font-royal font-bold text-white text-2xl sm:text-3xl">Free to learn, more on the way</h2>
        <p className="mt-2 text-sm text-slate-400 max-w-2xl mx-auto">
          Start with the free courses today, collect credits as you learn, and use them when the advanced bundles arrive.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ITEMS.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '100px 0px' }}
            transition={{ duration: 0.4, delay: 0.05 * (i + 1), ease: [0.16, 1, 0.3, 1] }}
            className={CARD}
          >
            <div className={ICON}>
              <it.icon className="w-5 h-5" aria-hidden="true" />
            </div>
            <span className={`${BADGE} ${it.badge.cls}`}>{it.badge.text}</span>
            <h3 className="font-royal font-bold text-white text-base mb-1.5 group-hover:text-[#FFA439] transition-colors">{it.title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">{it.body}</p>
            {it.extras && (
              <ul className="mt-3 space-y-1">
                {it.extras.map((e) => (
                  <li key={e} className="flex items-center gap-2 text-xs text-slate-400">
                    <FileText className="w-3.5 h-3.5 text-[#FFA439]" aria-hidden="true" />
                    {e}
                  </li>
                ))}
              </ul>
            )}
            {it.link && (
              <Link
                to={it.link.to}
                className="mt-4 inline-flex items-center gap-1.5 self-start text-xs font-mono font-bold uppercase tracking-wider text-[#FFA439] hover:text-white"
              >
                {it.link.text}
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
