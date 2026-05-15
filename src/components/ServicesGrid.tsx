'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Globe, Zap, Users, MessageSquare, BarChart3, Wrench } from 'lucide-react'
import { EASE } from '@/lib/motion'

const ICONS = [Globe, Zap, Users, MessageSquare, BarChart3, Wrench]

type ServiceItem = { title: string; desc: string }

export default function ServicesGrid() {
  const t = useTranslations('services')
  const items = t.raw('items') as ServiceItem[]

  return (
    <section className="bg-[#f5f5f7] dark:bg-[#111111] py-24" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center mb-16"
        >
          <p className="text-violet-600 text-sm font-semibold uppercase tracking-wider mb-4">
            {t('sectionLabel')}
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1d1d1f] dark:text-[#f5f5f7] mb-5">
            {t('h2')}
          </h2>
          <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-lg max-w-2xl mx-auto leading-relaxed">
            {t('body')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(({ title, desc }, i) => {
            const Icon = ICONS[i]
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className="group bg-white dark:bg-[#1a1a1a] border border-[#d2d2d7] dark:border-[#2a2a2a] rounded-[20px] p-6 hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:border-violet-200 dark:hover:border-violet-800/50 transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 bg-violet-50 dark:bg-violet-900/30 group-hover:bg-white dark:group-hover:bg-violet-900/40 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon size={19} className="text-violet-600" />
                </div>
                <h3 className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-2 text-base">
                  {title}
                </h3>
                <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-sm leading-relaxed">{desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
