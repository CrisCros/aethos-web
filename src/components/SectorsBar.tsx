'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Building2, Heart, Hammer, Car, Briefcase, UtensilsCrossed } from 'lucide-react'
import { EASE } from '@/lib/motion'

const ICONS = [Building2, Heart, Hammer, Car, Briefcase, UtensilsCrossed]

export default function SectorsBar() {
  const t = useTranslations('sectors')
  const items = t.raw('items') as string[]

  return (
    <section
      className="py-14 border-y border-[#d2d2d7] dark:border-[#2a2a2a] bg-white dark:bg-[#0a0a0a]"
      id="sectores"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-center text-[#6e6e73] dark:text-[#a1a1a6] text-sm font-medium mb-8"
        >
          {t('label')}
        </motion.p>

        <div className="flex flex-wrap justify-center gap-3">
          {items.map((label, i) => {
            const Icon = ICONS[i]
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
                className="flex items-center gap-2 border border-[#d2d2d7] dark:border-[#2a2a2a] bg-white dark:bg-[#111111] hover:border-violet-300 dark:hover:border-violet-700 hover:bg-violet-50 dark:hover:bg-violet-900/20 text-[#1d1d1f] dark:text-[#f5f5f7] text-sm font-medium px-4 py-2.5 rounded-full transition-all duration-200 cursor-default select-none"
              >
                <Icon size={14} className="text-violet-600" />
                {label}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
