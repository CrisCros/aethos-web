'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { EASE_OUT } from '@/lib/motion'

export default function ProblemsSection() {
  const t     = useTranslations('home.problems')
  const items = t.raw('items') as { title: string; body: string }[]

  return (
    <section style={{ padding: 'clamp(80px,11vw,150px) 0', background: 'var(--bg-subtle)' }}>
      <div className="mx-auto px-5" style={{ maxWidth: '1240px' }}>
        <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-start">
          {/* Left — sticky editorial headline */}
          <motion.div
            className="lg:sticky"
            style={{ top: '120px' }}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE_OUT }}
          >
            <span className="eyebrow mb-5" style={{ color: 'var(--blue-primary)' }}>
              {t('eyebrow')}
            </span>
            <h2 className="display display-lg mb-6" style={{ color: 'var(--fg)' }}>
              {t('h2')}
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--fg-2)', lineHeight: '1.65', maxWidth: '420px' }}>
              {t('subtitle')}
            </p>
            <span
              aria-hidden
              className="accent-line mt-8"
              style={{ width: '64px', background: 'var(--blue-primary)' }}
            />
          </motion.div>

          {/* Right — numbered editorial list */}
          <div className="divider-list">
            {items.map(({ title, body }, i) => (
              <motion.div
                key={title}
                className="grid items-start gap-x-6 py-7"
                style={{ gridTemplateColumns: 'auto 1fr' }}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE_OUT }}
              >
                <span
                  aria-hidden
                  className="serif-numeral select-none"
                  style={{
                    fontSize: 'clamp(26px, 2.6vw, 36px)',
                    color: 'var(--blue-300)',
                    minWidth: '56px',
                    paddingTop: '2px',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3
                    className="font-semibold mb-1.5"
                    style={{ fontSize: '17px', color: 'var(--fg)', letterSpacing: '-0.015em', lineHeight: '1.35' }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-2)', maxWidth: '480px' }}>
                    {body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
