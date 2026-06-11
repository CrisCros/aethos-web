'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { EASE_OUT } from '@/lib/motion'

export default function HowWeWorkSection() {
  const t     = useTranslations('home.howWeWork')
  const steps = t.raw('steps') as { num: string; title: string; desc: string }[]

  return (
    <section style={{ padding: 'clamp(80px,11vw,150px) 0', background: 'var(--bg)' }}>
      <div className="mx-auto px-5" style={{ maxWidth: '1240px' }}>
        <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-start">
          {/* Left — sticky header */}
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
          </motion.div>

          {/* Right — vertical steps with connector */}
          <div className="relative">
            {/* Connector line */}
            <div
              aria-hidden
              className="absolute hidden sm:block"
              style={{
                left: 'clamp(30px, 3vw, 44px)',
                top: '48px',
                bottom: '48px',
                width: '1px',
                background: 'linear-gradient(to bottom, var(--blue-200), var(--border) 85%, transparent)',
              }}
            />

            <div className="flex flex-col" style={{ gap: 'clamp(40px, 5vw, 64px)' }}>
              {steps.map(({ num, title, desc }, i) => (
                <motion.div
                  key={num}
                  className="grid items-start gap-x-8"
                  style={{ gridTemplateColumns: 'auto 1fr' }}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: i * 0.06, ease: EASE_OUT }}
                >
                  {/* Numeral medallion */}
                  <span
                    className="serif-numeral select-none relative flex items-center justify-center rounded-full"
                    aria-hidden
                    style={{
                      width: 'clamp(60px, 6vw, 88px)',
                      height: 'clamp(60px, 6vw, 88px)',
                      fontSize: 'clamp(22px, 2.4vw, 32px)',
                      color: 'var(--blue-primary)',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--blue-200)',
                      boxShadow: 'var(--shadow-md)',
                    }}
                  >
                    {num}
                  </span>

                  <div style={{ paddingTop: 'clamp(6px, 1vw, 16px)' }}>
                    <h3
                      className="display mb-2.5"
                      style={{ fontSize: 'clamp(20px, 2.2vw, 28px)', color: 'var(--fg)', lineHeight: 1.2 }}
                    >
                      {title}
                    </h3>
                    <p className="leading-relaxed" style={{ fontSize: '15px', color: 'var(--fg-2)', maxWidth: '460px' }}>
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
