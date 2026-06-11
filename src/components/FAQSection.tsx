'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Plus } from 'lucide-react'
import { EASE_OUT } from '@/lib/motion'

export default function FAQSection() {
  const t = useTranslations('home.faq')
  const items = t.raw('items') as { q: string; a: string }[]
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  }

  return (
    <section style={{ padding: 'clamp(64px,10vw,120px) 0', background: 'var(--bg-subtle)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto px-5 grid lg:grid-cols-[4fr_8fr] gap-12 lg:gap-20 items-start" style={{ maxWidth: '1240px' }}>
        <motion.div
          className="lg:sticky"
          style={{ top: '120px' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
        >
          <span className="eyebrow mb-5" style={{ color: 'var(--blue-primary)' }}>
            {t('eyebrow')}
          </span>
          <h2 className="display display-lg mb-5" style={{ color: 'var(--fg)' }}>
            {t('h2')}
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--fg-2)', lineHeight: '1.6', maxWidth: '360px' }}>
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="divider-list">
          {items.map(({ q, a }, i) => {
            const isOpen = openIndex === i

            return (
              <motion.div
                key={q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.04, ease: EASE_OUT }}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    className="w-full flex items-center justify-between gap-4 text-left py-6"
                  >
                    <span
                      className="font-semibold"
                      style={{ fontSize: 'clamp(16px,1.4vw,18px)', color: 'var(--fg)', letterSpacing: '-0.015em' }}
                    >
                      {q}
                    </span>
                    <span
                      aria-hidden
                      className="flex-shrink-0 flex items-center justify-center rounded-full"
                      style={{
                        width: '28px',
                        height: '28px',
                        background: 'var(--blue-50)',
                        color: '#2563EB',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform 250ms cubic-bezier(0.23,1,0.32,1)',
                      }}
                    >
                      <Plus size={15} />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-button-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE_OUT }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        className="pb-6 pr-12"
                        style={{ fontSize: '15px', color: 'var(--fg-2)', lineHeight: '1.7', maxWidth: '620px' }}
                      >
                        {a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
