'use client'

import { motion } from 'framer-motion'
import { EASE } from '@/lib/motion'
import { Inbox, Layout, FileText, AlertCircle, Search, Clock } from 'lucide-react'

const PROBLEMS = [
  { Icon: Inbox,       title: 'Leads buried in WhatsApp',   body: 'Messages get lost between two phones and four chats. Nobody knows who replied.' },
  { Icon: Layout,      title: 'An outdated website',        body: 'It loads slowly, looks like 2014, and most visitors leave before doing anything.' },
  { Icon: FileText,    title: 'Spreadsheet chaos',          body: 'Clients, quotes, bookings — all in one Excel that only one person actually understands.' },
  { Icon: AlertCircle, title: 'Lost potential clients',     body: 'Forms go to a forgotten inbox. Calls aren\'t returned. People book the next business on the list.' },
  { Icon: Search,      title: 'Invisible on Google',        body: 'Even people who already know your name struggle to find you. New customers? Never.' },
  { Icon: Clock,       title: 'Hours of repetitive work',   body: 'Confirming bookings, sending invoices, answering the same questions. Every. Single. Day.' },
]

export default function ProblemsSection() {
  return (
    <section style={{ padding: 'clamp(64px,10vw,128px) 0', background: 'var(--bg-subtle)' }}>
      <div className="mx-auto px-5" style={{ maxWidth: '1240px' }}>
        {/* Header */}
        <motion.div
          className="text-center mx-auto mb-16"
          style={{ maxWidth: '720px' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span
            className="inline-block text-xs font-medium uppercase tracking-widest mb-3"
            style={{ color: '#6a3df5' }}
          >
            The problem
          </span>
          <h2
            className="font-semibold mb-4"
            style={{ fontSize: 'clamp(28px,3.6vw,44px)', letterSpacing: '-0.03em', lineHeight: '1.1', color: 'var(--fg)' }}
          >
            Sound familiar?
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--fg-2)', lineHeight: '1.55' }}>
            Most small businesses we meet are losing time and clients to the same handful of problems. None of them are technical. All of them are fixable.
          </p>
        </motion.div>

        {/* 3-col grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map(({ Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              className="group p-6 rounded-2xl transition-all duration-200"
              style={{
                background: '#fff',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-xs)',
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
              <div
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4"
                style={{ background: 'var(--violet-50)', color: '#5a2dd8' }}
              >
                <Icon size={19} />
              </div>
              <h3
                className="font-semibold mb-2 text-base"
                style={{ color: 'var(--fg)', letterSpacing: '-0.01em' }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-2)' }}>
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
