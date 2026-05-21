'use client'

import { motion } from 'framer-motion'
import { EASE } from '@/lib/motion'
import { MessageCircle, Globe, Inbox, Search, Clock, FileText } from 'lucide-react'

const PROBLEMS = [
  {
    Icon: Globe,
    title: 'Your website doesn\'t reflect your business',
    body: 'It loads slowly, looks dated, and clients judge you before they ever call. First impressions matter.',
  },
  {
    Icon: Inbox,
    title: 'Client requests get lost',
    body: 'Messages pile up across WhatsApp, email and Instagram. Nobody knows what needs following up.',
  },
  {
    Icon: FileText,
    title: 'Everything runs on spreadsheets',
    body: 'Clients, quotes, bookings — all in one Excel file that only one person understands.',
  },
  {
    Icon: Search,
    title: 'People can\'t find you on Google',
    body: 'Even people who already know your name struggle to find you. New customers? Even harder.',
  },
  {
    Icon: MessageCircle,
    title: 'You\'re losing clients without knowing it',
    body: 'Forms go to a forgotten inbox. Calls aren\'t returned. People just book the next business on the list.',
  },
  {
    Icon: Clock,
    title: 'Hours lost to repetitive tasks',
    body: 'Confirming bookings, sending reminders, answering the same questions. Every. Single. Day.',
  },
]

export default function ProblemsSection() {
  return (
    <section style={{ padding: 'clamp(64px,10vw,128px) 0', background: 'var(--bg-subtle)' }}>
      <div className="mx-auto px-5" style={{ maxWidth: '1240px' }}>
        <motion.div
          className="text-center mx-auto mb-16"
          style={{ maxWidth: '720px' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span className="inline-block text-xs font-medium uppercase tracking-widest mb-3" style={{ color: '#6a3df5' }}>
            Sound familiar?
          </span>
          <h2
            className="font-semibold mb-4"
            style={{ fontSize: 'clamp(28px,3.6vw,44px)', letterSpacing: '-0.03em', lineHeight: '1.1', color: 'var(--fg)' }}
          >
            Most small businesses face the same problems.
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--fg-2)', lineHeight: '1.55' }}>
            None of these are unique to your business. And none of them require complicated technology to fix.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map(({ Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
              className="p-6 rounded-2xl"
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-xs)',
                transition: 'box-shadow 200ms, border-color 200ms, transform 200ms',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = 'var(--shadow-md)'
                el.style.borderColor = 'var(--violet-200)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'var(--shadow-xs)'
                el.style.borderColor = 'var(--border)'
              }}
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4" style={{ background: 'var(--violet-50)', color: '#5a2dd8' }}>
                <Icon size={19} />
              </div>
              <h3 className="font-semibold mb-2 text-base" style={{ color: 'var(--fg)', letterSpacing: '-0.01em' }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-2)' }}>{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
