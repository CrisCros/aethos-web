'use client'

import { motion } from 'framer-motion'
import { EASE } from '@/lib/motion'
import { Layout, Search, MessageCircle, Zap, TrendingUp, ArrowRight, Mail, Calendar, FileText, Database } from 'lucide-react'
import { Link } from '@/i18n/navigation'

/* ─── Mini visuals ─────────────────────────────────────────────── */

function MiniSite() {
  return (
    <div className="mt-auto rounded-xl overflow-hidden" style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)' }}>
      <div className="flex items-center gap-2 px-3 py-2" style={{ background: 'var(--bg-muted)', borderBottom: '1px solid var(--border)' }}>
        <div className="flex gap-1">
          {[0,1,2].map(i => <span key={i} className="w-2 h-2 rounded-full" style={{ background: 'var(--border-strong)' }} />)}
        </div>
        <div className="flex-1 text-[10px] py-0.5 px-2 rounded" style={{ background: 'var(--bg-elevated)', color: 'var(--fg-3)', fontFamily: 'monospace' }}>
          yourbusiness.com
        </div>
      </div>
      <div className="p-3">
        <div className="flex flex-col gap-1.5 mb-3">
          <div className="h-2.5 rounded w-2/3" style={{ background: 'var(--border-strong)' }} />
          <div className="h-1.5 rounded w-11/12" style={{ background: 'var(--border)' }} />
          <div className="self-start mt-1 px-3 py-1 text-[10px] font-medium rounded text-white" style={{ background: '#7c5cff' }}>Book now</div>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {['linear-gradient(135deg,#fde68a,#f59e0b)', 'linear-gradient(135deg,#c4b5fd,#8b5cf6)', 'linear-gradient(135deg,#fbcfe8,#ec4899)'].map((bg, i) => (
            <div key={i} className="aspect-square rounded" style={{ background: bg, opacity: 0.45 }} />
          ))}
        </div>
      </div>
    </div>
  )
}

function MiniSearch() {
  return (
    <div className="mt-auto p-3 rounded-xl" style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)' }}>
      <div className="flex items-center gap-2 px-3 py-2 rounded-full text-xs mb-2.5" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--fg-3)' }}>
        <Search size={12} /><span>dentista madrid centro</span>
      </div>
      <div className="p-2 rounded-lg mb-1" style={{ background: 'var(--violet-50)', border: '1px solid var(--violet-200)' }}>
        <div className="text-[11px] font-medium mb-0.5" style={{ color: '#5a2dd8' }}>Clínica Dental Centro</div>
        <div className="text-[10px]" style={{ color: 'var(--fg-3)', fontFamily: 'monospace' }}>clinicacentro.es · ★★★★★ · 4.9</div>
        <div className="text-[10px] mt-0.5" style={{ color: 'var(--fg-2)' }}>Book online in 30 seconds</div>
      </div>
      <div className="p-2 rounded-lg opacity-40" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}>
        <div className="text-[11px] font-medium" style={{ color: 'var(--fg-2)' }}>Another clinic</div>
        <div className="text-[10px]" style={{ color: 'var(--fg-3)', fontFamily: 'monospace' }}>competitor.es</div>
      </div>
    </div>
  )
}

function MiniForm() {
  return (
    <div className="mt-auto p-3 rounded-xl" style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)' }}>
      {[{ label: 'Name', value: 'Anna Schmidt' }, { label: 'For', value: 'Kitchen remodel' }, { label: 'Budget', value: '€15–25k' }].map((r) => (
        <div key={r.label} className="flex gap-2.5 py-1.5 border-b last:border-0" style={{ borderColor: 'var(--border)' }}>
          <span className="text-[11px] w-12 flex-shrink-0" style={{ color: 'var(--fg-3)' }}>{r.label}</span>
          <span className="text-[11px] font-medium" style={{ color: 'var(--fg)' }}>{r.value}</span>
        </div>
      ))}
      <div className="flex items-center gap-2 mt-2.5 pt-2.5 border-t text-[11px]" style={{ borderColor: 'var(--border)', borderStyle: 'dashed' }}>
        <span style={{ color: 'var(--fg-3)' }}>Sent to</span>
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-medium" style={{ background: 'var(--violet-50)', color: '#5a2dd8' }}>
          <MessageCircle size={10} />Your inbox
        </span>
      </div>
    </div>
  )
}

function MiniFlow() {
  return (
    <div className="mt-auto flex flex-wrap items-center gap-2 p-3 rounded-xl" style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)' }}>
      {[
        { Icon: Mail,          label: 'New inquiry', accent: false },
        { Icon: Zap,           label: 'Auto-reply',  accent: true  },
        { Icon: MessageCircle, label: 'Team notified', accent: false },
        { Icon: Calendar,      label: 'Reminder set', accent: false },
      ].map((node, i, arr) => (
        <span key={node.label} className="flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs"
            style={node.accent
              ? { background: '#7c5cff', color: '#fff', border: '1px solid #6a3df5', boxShadow: '0 2px 8px rgba(124,92,255,0.3)' }
              : { background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--fg-2)' }
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
          <div key={s.label} className="flex-1 p-2 rounded-lg" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}>
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

function MiniLanding() {
  return (
    <div className="mt-auto p-3 rounded-xl" style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)' }}>
      <div className="text-center mb-2.5">
        <div className="h-2 rounded w-1/2 mx-auto mb-1.5" style={{ background: '#7c5cff', opacity: 0.7 }} />
        <div className="h-1.5 rounded w-3/4 mx-auto" style={{ background: 'var(--border-strong)' }} />
      </div>
      <div className="text-[11px] font-medium px-3 py-2 rounded-lg text-center text-white" style={{ background: '#7c5cff' }}>
        Get a free quote
      </div>
      <div className="mt-2 flex gap-1 justify-center">
        {['★', '★', '★', '★', '★'].map((s, i) => <span key={i} style={{ color: '#f59e0b', fontSize: '10px' }}>{s}</span>)}
        <span className="text-[10px] ml-1" style={{ color: 'var(--fg-3)' }}>48 reviews</span>
      </div>
    </div>
  )
}

function MiniDatabase() {
  return (
    <div className="mt-auto p-3 rounded-xl" style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)' }}>
      {[
        { name: 'Maria R.', status: 'Replied', days: '2d', color: '#ecfdf5', textColor: '#047857' },
        { name: 'Javier G.', status: 'New',    days: '1h', color: '#ece8ff', textColor: '#5a2dd8' },
        { name: 'Anna S.',   status: 'Booked', days: '3d', color: '#ecfdf5', textColor: '#047857' },
      ].map((r) => (
        <div key={r.name} className="flex items-center gap-2 py-1.5 border-b last:border-0" style={{ borderColor: 'var(--border)' }}>
          <div className="w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--violet-100)' }} />
          <span className="flex-1 text-[11px] font-medium" style={{ color: 'var(--fg)' }}>{r.name}</span>
          <span className="text-[9px]" style={{ color: 'var(--fg-3)' }}>{r.days}</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded-full font-medium" style={{ background: r.color, color: r.textColor }}>{r.status}</span>
        </div>
      ))}
    </div>
  )
}

/* ─── Section ──────────────────────────────────────────────────── */

const CELLS = [
  { id: 'websites',    Icon: Layout,       title: 'Modern websites',         body: 'Fast, beautiful, mobile-first. Built to reflect what your business actually does, not a generic template.',        mini: MiniSite,     lg: true,  wide: false },
  { id: 'seo',         Icon: Search,       title: 'SEO & local search',      body: 'Show up when people nearby search for what you offer. No guesswork.',                                              mini: MiniSearch,   lg: false, wide: false },
  { id: 'leads',       Icon: MessageCircle,title: 'Smart contact forms',     body: 'Every inquiry goes somewhere useful. No more lost messages.',                                                       mini: MiniForm,     lg: false, wide: false },
  { id: 'automations', Icon: Zap,          title: 'Practical automations',   body: 'Auto-replies, booking confirmations, reminders. Save hours every week without lifting a finger.',                  mini: MiniFlow,     lg: false, wide: true  },
  { id: 'dashboards',  Icon: TrendingUp,   title: 'Business dashboards',     body: 'See what\'s happening in your business at a glance. Leads, bookings, follow-ups.',                                mini: MiniDash,     lg: false, wide: false },
  { id: 'landing',     Icon: FileText,     title: 'Landing pages',           body: 'Dedicated pages for campaigns, offers and services. Built to convert visitors into clients.',                       mini: MiniLanding,  lg: false, wide: false },
  { id: 'crm',         Icon: Database,     title: 'Lead organization',       body: 'Never lose track of a potential client again. A simple, organized view of every conversation.',                    mini: MiniDatabase, lg: false, wide: false },
] as const

export default function ServicesGrid() {
  return (
    <section id="solutions" style={{ padding: 'clamp(64px,10vw,128px) 0' }}>
      <div className="mx-auto px-5" style={{ maxWidth: '1240px' }}>
        <motion.div
          className="text-center mx-auto mb-12"
          style={{ maxWidth: '720px' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span className="inline-block text-xs font-medium uppercase tracking-widest mb-3" style={{ color: '#6a3df5' }}>
            What we do
          </span>
          <h2 className="font-semibold mb-4" style={{ fontSize: 'clamp(28px,3.6vw,44px)', letterSpacing: '-0.03em', lineHeight: '1.1', color: 'var(--fg)' }}>
            Everything your business needs to look good, get found, and run smoothly.
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--fg-2)', lineHeight: '1.55' }}>
            No jargon. No unnecessary complexity. Just the right tools for where your business is right now.
          </p>
        </motion.div>

        <div className="bento">
          {CELLS.map(({ id, Icon, title, body, mini: Mini, lg, wide }, i) => (
            <motion.div
              key={id}
              className={`flex flex-col gap-3 p-6 rounded-[20px] overflow-hidden bento-cell${lg ? ' bento-lg' : wide ? ' bento-wide' : ''}`}
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 240ms cubic-bezier(0.2,0.8,0.2,1)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: EASE }}
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
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--violet-50)', color: '#5a2dd8' }}>
                  <Icon size={20} />
                </div>
                <h3 className="text-[17px] font-semibold" style={{ color: 'var(--fg)', letterSpacing: '-0.015em', margin: 0 }}>{title}</h3>
              </div>
              <p className="text-sm leading-relaxed m-0" style={{ color: 'var(--fg-2)' }}>{body}</p>
              <Mini />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-xl"
            style={{ background: 'var(--bg-elevated)', color: 'var(--fg)', border: '1px solid var(--border-strong)', boxShadow: 'var(--shadow-xs)' }}
          >
            See all services <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
