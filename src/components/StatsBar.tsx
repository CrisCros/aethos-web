'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { EASE } from '@/lib/motion'

type StatItem = { number: string; label: string }

const ACCENTS = [true, false, true, false]

export default function StatsBar() {
  const t = useTranslations('stats')
  const items = t.raw('items') as StatItem[]

  return (
    <section className="border-y border-[#d2d2d7] dark:border-[#2a2a2a] bg-white dark:bg-[#0a0a0a] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {items.map(({ number, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              className="text-center"
            >
              <p className={`text-4xl lg:text-5xl font-bold tracking-tight mb-1.5 ${
                ACCENTS[i] ? 'text-violet-600' : 'text-[#1d1d1f] dark:text-[#f5f5f7]'
              }`}>
                {number}
              </p>
              <p className="text-sm text-[#6e6e73] dark:text-[#a1a1a6] font-medium">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
