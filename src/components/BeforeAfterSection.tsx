'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { EASE_OUT } from '@/lib/motion'
import { X, Check } from 'lucide-react'

export default function BeforeAfterSection() {
  const t            = useTranslations('home.beforeAfter')
  const withoutItems = t.raw('withoutItems') as string[]
  const withItems    = t.raw('withItems')    as string[]

  return (
    <section style={{ padding: 'clamp(64px,10vw,120px) 0', background: 'var(--bg-subtle)' }}>
      <div className="mx-auto px-5" style={{ maxWidth: '1240px' }}>
        {/* Eyebrow + subtitle */}
        <motion.div
          className="text-center mx-auto mb-12"
          style={{ maxWidth: '580px' }}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
        >
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#2563EB' }}
          >
            {t('eyebrow')}
          </span>
          <p
            style={{
              fontSize: 'clamp(15px,1.2vw,17px)',
              color: 'var(--fg-2)',
              lineHeight: '1.58',
            }}
          >
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Split comparison panel */}
        <div
          className="grid md:grid-cols-2 rounded-[24px] overflow-hidden"
          style={{ boxShadow: '0 8px 48px rgba(2,6,23,0.14), 0 0 0 1px var(--border)' }}
        >
          {/* LEFT — Without Aethos */}
          <motion.div
            className="p-8 md:p-12"
            style={{
              background: 'var(--bg)',
              borderRight: '1px solid var(--border)',
            }}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
          >
            <h2
              className="display mb-8"
              style={{
                fontSize: 'clamp(24px,3.2vw,38px)',
                color: 'var(--fg-3)',
              }}
            >
              {t('h2Without')}
            </h2>
            <ul className="flex flex-col gap-4">
              {withoutItems.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.38, delay: i * 0.05, ease: EASE_OUT }}
                >
                  <span
                    className="flex items-center justify-center flex-shrink-0 rounded-full"
                    style={{
                      width: '20px',
                      height: '20px',
                      marginTop: '2px',
                      background: 'var(--bg-muted)',
                      border: '1px solid var(--border-strong)',
                    }}
                  >
                    <X size={10} style={{ color: 'var(--fg-3)' }} />
                  </span>
                  <span
                    className="text-sm leading-relaxed"
                    style={{
                      color: 'var(--fg-3)',
                      textDecoration: 'line-through',
                      textDecorationColor: 'var(--border-strong)',
                    }}
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT — With Aethos */}
          <motion.div
            className="p-8 md:p-12"
            style={{
              background: 'linear-gradient(140deg, #1E3A8A 0%, #1D4ED8 50%, #2563EB 100%)',
            }}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08, ease: EASE_OUT }}
          >
            <h2
              className="display mb-8"
              style={{
                fontSize: 'clamp(24px,3.2vw,38px)',
                color: '#ffffff',
              }}
            >
              {t('h2With')}
            </h2>
            <ul className="flex flex-col gap-4">
              {withItems.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.38, delay: i * 0.05 + 0.08, ease: EASE_OUT }}
                >
                  <span
                    className="flex items-center justify-center flex-shrink-0 rounded-full"
                    style={{
                      width: '20px',
                      height: '20px',
                      marginTop: '2px',
                      background: 'rgba(255,255,255,0.15)',
                      border: '1px solid rgba(255,255,255,0.28)',
                    }}
                  >
                    <Check size={10} style={{ color: '#93C5FD' }} />
                  </span>
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.90)' }}
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
