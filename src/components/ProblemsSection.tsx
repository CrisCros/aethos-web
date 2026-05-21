'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { EASE } from '@/lib/motion'
import { MessageCircle, Globe, Inbox, Search, Clock, FileText } from 'lucide-react'

const ICONS = [Globe, Inbox, FileText, Search, MessageCircle, Clock]

export default function ProblemsSection() {
  const t = useTranslations('home.problems')
  const items = t.raw('items') as { title: string; body: string }[]

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
            {t('eyebrow')}
          </span>
          <h2 className="font-semibold mb-4" style={{ fontSize: 'clamp(28px,3.6vw,44px)', letterSpacing: '-0.03em', lineHeight: '1.1', color: 'var(--fg)' }}>
            {t('h2')}
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--fg-2)', lineHeight: '1.55' }}>{t('subtitle')}</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, body }, i) => {
            const Icon = ICONS[i]
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
                className="p-6 rounded-2xl"
                style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-xs)', transition: 'box-shadow 200ms, border-color 200ms, transform 200ms' }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = 'var(--shadow-md)'; el.style.borderColor = 'var(--violet-200)' }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'var(--shadow-xs)'; el.style.borderColor = 'var(--border)' }}
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4" style={{ background: 'var(--violet-50)', color: '#5a2dd8' }}>
                  <Icon size={19} />
                </div>
                <h3 className="font-semibold mb-2 text-base" style={{ color: 'var(--fg)', letterSpacing: '-0.01em' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-2)' }}>{body}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
