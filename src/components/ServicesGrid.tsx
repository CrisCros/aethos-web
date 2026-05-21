'use client'

import { motion } from 'framer-motion'
import { EASE } from '@/lib/motion'
import { Layout, Search, MessageCircle, Zap, TrendingUp, ArrowRight, Mail, Calendar } from 'lucide-react'

/* ─── Mini visuals ─────────────────────────────────────────────── */

function MiniSite() {
  return (
    <div className="mt-auto rounded-xl overflow-hidden" style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)' }}>
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-3 py-2" style={{ background: 'var(--bg-muted)', borderBottom: '1px solid var(--border)' }}>
        <div className="flex gap-1">
          {[0,1,2].map(i => <span key={i} className="w-2 h-2 rounded-full" style={{ background: 'var(--border-strong)' }} />)}
        </div>
        <div className="flex-1 text-[10px] py-0.5 px-2 rounded" style={{ background: '#fff', color: 'var(--fg-3)', fontFamily: 'monospace' }}>
          bellavista.cat
        </div>
      </div>
      <div className="p-3">
        <div className="flex flex-col gap-1.5 mb-3">
          <div className="h-2.5 rounded w-2/3" style={{ background: 'var(--border-strong)' }} />
          <div className="h-1.5 rounded w-11/12" style={{ background: 'var(--border)' }} />
          <div
            className="self-start mt-1 px-3 py-1 text-[10px] font-medium rounded text-white"
            style={{ background: '#7c5cff' }}
          >Book a table</div>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            'linear-gradient(135deg,#fde68a,#f59e0b)',
            'linear-gradient(135deg,#c4b5fd,#8b5cf6)',
            'linear-gradient(135deg,#fbcfe8,#ec4899)',
          ].map((bg, i) => (
            <div key={i} className="aspect-square rounded" style={{ background: bg, opacity: 0.4 }} />
          ))}
        </div>
      </div>
    </div>
  )
}

function MiniSearch() {
  return (
    <div className="mt-auto p-3 rounded-xl" style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)' }}>
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-full text-xs mb-2.5"
        style={{ background: '#fff', border: '1px solid var(--border)', color: 'var(--fg-3)' }}
      >
        <Search size={12} /><span>dentista barrio Salamanca</span>
      </div>
      <div className="p-2 rounded-lg mb-1" style={{ background: 'var(--violet-50)', border: '1px solid var(--violet-200)' }}>
        <div className="text-[11px] font-medium mb-0.5" style={{ color: '#5a2dd8' }}>Clínica Dental Salamanca</div>
        <div className="text-[10px]" style={{ color: 'var(--fg-3)', fontFamily: 'monospace' }}>clinicasalamanca.es · ★★★★★ · 4.9</div>
        <div className="text-[10px] mt-0.5" style={{ color: 'var(--fg-2)' }}>Book online in 30 seconds</div>
      </div>
      <div className="p-2 rounded-lg opacity-40" style={{ background: '#fff', border: '1px solid var(--border)' }}>
        <div className="text-[11px] font-medium" style={{ color: 'var(--fg-2)' }}>Other clinic</div>
        <div className="text-[10px]" style={{ color: 'var(--fg-3)', fontFamily: 'monospace' }}>competitor.es</div>
      </div>
    </div>
  )
}

function MiniForm() {
  return (
    <div className="mt-auto p-3 rounded-xl" style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)' }}>
      {[
        { label: 'Name',   value: 'Anna Schmidt' },
        { label: 'For',    value: 'Kitchen remodel' },
        { label: 'Budget', value: '€15–25k' },
      ].map((row) => (
        <div key={row.label} className="flex gap-2.5 py-1.5 border-b last:border-0" style={{ borderColor: 'var(--border)' }}>
          <span className="text-[11px] w-12 flex-shrink-0" style={{ color: 'var(--fg-3)' }}>{row.label}</span>
          <span className="text-[11px] font-medium" style={{ color: 'var(--fg)' }}>{row.value}</span>
        </div>
      ))}
      <div className="flex items-center gap-2 mt-2.5 pt-2.5 border-t text-[11px]" style={{ borderColor: 'var(--border)', borderStyle: 'dashed' }}>
        <span style={{ color: 'var(--fg-3)' }}>Routed to</span>
        <span
          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-medium"
          style={{ background: 'var(--violet-50)', color: '#5a2dd8' }}
        >
          <MessageCircle size={10} />Carlos · WhatsApp
        </span>
      </div>
    </div>
  )
}

function MiniFlow() {
  return (
    <div className="mt-auto flex flex-wrap items-center gap-2 p-3 rounded-xl" style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)' }}>
      {[
        { Icon: Mail,          label: 'Form submit',  accent: false },
        { Icon: Zap,           label: 'Add to CRM',   accent: true  },
        { Icon: MessageCircle, label: 'Auto-reply',   accent: false },
        { Icon: Calendar,      label: 'Notify team',  accent: false },
      ].map((node, i, arr) => (
        <span key={node.label} className="flex items-center gap-1.5">
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs"
            style={node.accent
              ? { background: '#7c5cff', color: '#fff', border: '1px solid #6a3df5', boxShadow: '0 2px 8px rgba(124,92,255,0.3)' }
              : { background: '#fff', border: '1px solid var(--border)', color: 'var(--fg-2)' }
            }
          >
            <node.Icon size={12} />{node.label}
          </span>
          {i < arr.length - 1 && <ArrowRight size={12} style={{ color: 'var(--fg-muted)', flexShrink: 0 }} />}
        </span>
      ))}
    </div>
  )
}

function MiniDash() {
  return (
    <div className="mt-auto p-3 rounded-xl" style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)' }}>
      <div className="flex gap-2 mb-2.5">
        {[{ label: 'Leads', val: '42' }, { label: 'Booked', val: '18' }].map((s) => (
          <div key={s.label} className="flex-1 p-2 rounded-lg" style={{ background: '#fff', border: '1px solid var(--border)' }}>
            <span className="block text-[10px]" style={{ color: 'var(--fg-3)' }}>{s.label}</span>
            <b className="text-[18px] font-semibold" style={{ color: 'var(--fg)', letterSpacing: '-0.02em' }}>{s.val}</b>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 120 36" className="w-full">
        <path d="M0,28 L20,22 L40,24 L60,14 L80,18 L100,8 L120,12" stroke="#7c5cff" strokeWidth="1.5" fill="none" />
        <circle cx="120" cy="12" r="2.5" fill="#7c5cff" />
      </svg>
    </div>
  )
}

/* ─── Section ──────────────────────────────────────────────────── */

const CELLS = [
  {
    id: 'websites',
    Icon: Layout,
    title: 'Modern websites',
    body: 'Fast, beautiful, easy to update. Built around what your business actually does, not generic templates.',
    mini: MiniSite,
    lg: true,
    wide: false,
  },
  {
    id: 'seo',
    Icon: Search,
    title: 'SEO foundations',
    body: 'Show up when people search for what you do, in the cities you serve.',
    mini: MiniSearch,
    lg: false,
    wide: false,
  },
  {
    id: 'leads',
    Icon: MessageCircle,
    title: 'Lead capture',
    body: 'Every form routes somewhere useful. No more lost messages.',
    mini: MiniForm,
    lg: false,
    wide: false,
  },
  {
    id: 'automations',
    Icon: Zap,
    title: 'Practical automations',
    body: 'Auto-replies, booking confirmations, lead routing. Quiet work behind the scenes.',
    mini: MiniFlow,
    lg: false,
    wide: true,
  },
  {
    id: 'dashboards',
    Icon: TrendingUp,
    title: 'Dashboards',
    body: 'One screen that finally shows what\'s actually going on.',
    mini: MiniDash,
    lg: false,
    wide: false,
  },
] as const

export default function ServicesGrid() {
  return (
    <section id="solutions" style={{ padding: 'clamp(64px,10vw,128px) 0' }}>
      <div className="mx-auto px-5" style={{ maxWidth: '1240px' }}>
        {/* Header */}
        <motion.div
          className="text-center mx-auto mb-12"
          style={{ maxWidth: '720px' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span className="inline-block text-xs font-medium uppercase tracking-widest mb-3" style={{ color: '#6a3df5' }}>
            What we build
          </span>
          <h2
            className="font-semibold mb-4"
            style={{ fontSize: 'clamp(28px,3.6vw,44px)', letterSpacing: '-0.03em', lineHeight: '1.1', color: 'var(--fg)' }}
          >
            A small, complete toolkit for getting found, getting leads, and getting organized.
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="bento">
          {CELLS.map(({ id, Icon, title, body, mini: Mini, lg, wide }, i) => (
            <motion.div
              key={id}
              className={`flex flex-col gap-3 p-6 rounded-[20px] overflow-hidden relative bento-cell${lg ? ' bento-lg' : wide ? ' bento-wide' : ''}`}
              style={{
                background: '#fff',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 240ms cubic-bezier(0.2,0.8,0.2,1)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(-3px)'
                el.style.boxShadow = 'var(--shadow-lg)'
                el.style.borderColor = 'var(--violet-200)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'var(--shadow-sm)'
                el.style.borderColor = 'var(--border)'
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--violet-50)', color: '#5a2dd8' }}
                >
                  <Icon size={21} />
                </div>
                <h3 className="text-[18px] font-semibold" style={{ color: 'var(--fg)', letterSpacing: '-0.015em', margin: 0 }}>
                  {title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed m-0" style={{ color: 'var(--fg-2)' }}>{body}</p>
              <Mini />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
