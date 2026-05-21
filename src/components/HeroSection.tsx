'use client'

import { ArrowRight, CheckCircle, Stethoscope, UtensilsCrossed, Building2, HardHat, Scissors, Users, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { EASE } from '@/lib/motion'

const INDUSTRY_ICONS = [Stethoscope, UtensilsCrossed, Building2, HardHat, Scissors, Users]

function HeroVisual() {
  return (
    <div className="relative" style={{ minHeight: '460px' }}>
      <div className="card-elevated p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium" style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)', color: 'var(--fg)' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--success-500)', boxShadow: '0 0 0 3px rgba(16,185,129,0.18)' }} />
            Aethos · Lead inbox
          </div>
          <div className="inline-flex p-0.5 rounded-lg" style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)' }}>
            {['Today', 'Week', 'Month'].map((s, i) => (
              <button key={s} className="px-2.5 py-1 text-[11px] font-medium rounded-md"
                style={i === 0 ? { background: 'var(--bg-elevated)', color: 'var(--fg)', boxShadow: 'var(--shadow-xs)' } : { color: 'var(--fg-3)' }}
              >{s}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-3">
          {[{ label: 'New leads', num: '14', delta: '+5', up: true }, { label: 'Replied', num: '11', delta: '78%', up: false }, { label: 'Booked', num: '6', delta: '+2', up: true }].map((s) => (
            <div key={s.label} className="p-2.5 rounded-xl" style={{ background: 'var(--bg-subtle)' }}>
              <div className="text-[10px] mb-0.5" style={{ color: 'var(--fg-3)' }}>{s.label}</div>
              <div className="text-xl font-semibold flex items-baseline gap-1.5" style={{ color: 'var(--fg)', letterSpacing: '-0.02em' }}>
                {s.num}
                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded" style={s.up ? { background: 'var(--success-50)', color: '#047857' } : { background: 'var(--bg-muted)', color: 'var(--fg-3)' }}>{s.delta}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-3">
          <svg viewBox="0 0 320 60" preserveAspectRatio="none" width="100%" height="60">
            <defs><linearGradient id="hv-g" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#7c5cff" stopOpacity="0.22" /><stop offset="100%" stopColor="#7c5cff" stopOpacity="0" /></linearGradient></defs>
            <path d="M0,46 C30,40 50,33 70,35 C100,37 120,20 150,18 C180,17 210,30 240,26 C270,23 290,12 320,8 L320,60 L0,60 Z" fill="url(#hv-g)" />
            <path d="M0,46 C30,40 50,33 70,35 C100,37 120,20 150,18 C180,17 210,30 240,26 C270,23 290,12 320,8" fill="none" stroke="#7c5cff" strokeWidth="1.8" />
          </svg>
        </div>

        <div className="flex flex-col gap-2">
          {[
            { i: 'MR', n: 'Maria Rossi',   m: 'Table for 6, Saturday · WhatsApp', bg: '#fde68a', tc: '#92400e', badge: 'New',     bs: { background: '#ece8ff', color: '#5a2dd8' } },
            { i: 'JG', n: 'Javier García', m: 'Apartment viewing · Form',          bg: '#bfdbfe', tc: '#1e40af', badge: 'Replied', bs: { background: '#ecfdf5', color: '#047857' } },
            { i: 'AS', n: 'Anna Schmidt',  m: 'Kitchen remodel · Email',           bg: '#fbcfe8', tc: '#9d174d', badge: 'Booked',  bs: { background: '#ecfdf5', color: '#047857' } },
          ].map((r) => (
            <div key={r.n} className="flex items-center gap-2.5 p-2 rounded-xl" style={{ border: '1px solid var(--border)', background: 'var(--bg-elevated)' }}>
              <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-[11px] font-semibold" style={{ background: r.bg, color: r.tc }}>{r.i}</div>
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-medium truncate" style={{ color: 'var(--fg)' }}>{r.n}</div>
                <div className="text-[10px] truncate" style={{ color: 'var(--fg-3)' }}>{r.m}</div>
              </div>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-full flex-shrink-0" style={r.bs}>{r.badge}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card-elevated absolute hidden lg:block animate-float-a p-3" style={{ right: '-24px', top: '56px', width: '220px' }}>
        <div className="flex items-center gap-1.5 text-[11px] font-medium mb-2" style={{ color: '#7c5cff' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"/></svg>
          Auto-reply sent
          <span className="ml-auto text-[10px] font-normal" style={{ color: 'var(--fg-3)' }}>2s ago</span>
        </div>
        <div className="text-[11px] leading-snug p-2.5 rounded-xl" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--fg)' }}>
          Thanks Maria! Table reserved for 6 on Saturday at 8pm. — Bella Vista
        </div>
      </div>

      <div className="card-elevated absolute hidden lg:block animate-float-b p-4" style={{ left: '-28px', bottom: '24px', width: '180px' }}>
        <TrendingUp size={16} className="absolute right-3.5 top-3.5" style={{ color: '#7c5cff' }} />
        <div className="text-3xl font-semibold mb-1" style={{ letterSpacing: '-0.03em', background: 'linear-gradient(135deg, #8b6aff 0%, #6a3df5 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>+38%</div>
        <div className="text-[11px] leading-snug" style={{ color: 'var(--fg-2)' }}>More booked tables<br />since launch</div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  const t = useTranslations('home.hero')

  const industries = [t('industry1'), t('industry2'), t('industry3'), t('industry4'), t('industry5'), t('industry6')]

  return (
    <section className="relative overflow-hidden" style={{ padding: 'clamp(40px,6vw,80px) 0' }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(50% 50% at 15% 5%, rgba(139,106,255,.22) 0%, transparent 60%),
          radial-gradient(45% 40% at 90% 15%, rgba(236,72,153,.10) 0%, transparent 65%),
          radial-gradient(60% 50% at 50% 100%, rgba(159,122,234,.08) 0%, transparent 70%)`,
      }} />

      <div className="relative z-10 mx-auto px-5" style={{ maxWidth: '1240px' }}>
        <div className="grid lg:grid-cols-[1.05fr_1fr] items-center" style={{ gap: 'clamp(32px,5vw,64px)' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
            <div className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest mb-5 px-3 py-1.5 rounded-full" style={{ color: '#6a3df5', background: 'var(--violet-50)', border: '1px solid var(--violet-200)' }}>
              {t('eyebrow')}
            </div>

            <h1 className="font-semibold mb-6" style={{ fontSize: 'clamp(40px,6vw,72px)', letterSpacing: '-0.035em', lineHeight: '1.02', color: 'var(--fg)' }}>
              {t('h1Before')} <span className="serif-italic">{t('h1Accent')}</span> {t('h1After')}
            </h1>

            <p className="mb-8 max-w-[540px]" style={{ fontSize: 'clamp(17px,1.4vw,19px)', color: 'var(--fg-2)', lineHeight: '1.55' }}>
              {t('subtitle')}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/contact" className="inline-flex items-center gap-2 text-white font-medium px-5 py-3 rounded-xl text-sm" style={{ background: '#7c5cff', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.18), 0 4px 16px rgba(124,92,255,0.22)' }}>
                {t('cta1')} <ArrowRight size={15} />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 font-medium px-5 py-3 rounded-xl text-sm" style={{ background: 'var(--bg-elevated)', color: 'var(--fg)', border: '1px solid var(--border-strong)', boxShadow: 'var(--shadow-xs)' }}>
                {t('cta2')}
              </Link>
            </div>

            <div className="flex flex-wrap gap-5 text-[13px]" style={{ color: 'var(--fg-3)' }}>
              {[t('trust1'), t('trust2'), t('trust3')].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle size={13} style={{ color: 'var(--success-500)' }} />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease: EASE }} className="hidden lg:block">
            <HeroVisual />
          </motion.div>
        </div>

        <div className="flex flex-wrap items-center gap-7 mt-20">
          <span className="text-[11px] uppercase tracking-widest" style={{ color: 'var(--fg-3)', fontFamily: 'ui-monospace, monospace' }}>{t('builtFor')}</span>
          {industries.map((label, i) => {
            const Icon = INDUSTRY_ICONS[i]
            return (
              <span key={label} className="inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: 'var(--fg-2)' }}>
                <Icon size={15} style={{ color: '#7c5cff' }} />
                {label}
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}
