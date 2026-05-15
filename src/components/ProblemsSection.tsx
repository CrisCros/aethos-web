'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { EASE } from '@/lib/motion'

type ProblemItem = { num: string; title: string; desc: string }

export default function ProblemsSection() {
  const t = useTranslations('problems')
  const items = t.raw('items') as ProblemItem[]

  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="lg:sticky lg:top-24"
          >
            <p className="text-violet-600 text-sm font-semibold uppercase tracking-wider mb-5">
              {t('sectionLabel')}
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1d1d1f] dark:text-[#f5f5f7] leading-tight mb-6">
              {t('h2')}
            </h2>
            <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-lg leading-relaxed">
              {t('body')}
            </p>
          </motion.div>

          <div className="flex flex-col gap-0">
            {items.map(({ num, title, desc }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className="flex gap-6 py-7 border-b border-[#d2d2d7]/60 dark:border-[#2a2a2a]/60 first:border-t last:border-b-0"
              >
                <span className="text-2xl font-bold text-[#d2d2d7] dark:text-[#3a3a3a] flex-shrink-0 leading-none mt-0.5">
                  {num}
                </span>
                <div>
                  <h3 className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-2 text-base">
                    {title}
                  </h3>
                  <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
