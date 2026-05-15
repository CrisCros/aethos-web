'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { EASE } from '@/lib/motion'
import { FileText, Zap, MessageSquare, Database, RefreshCw, Clock, CheckCircle2, BarChart2, Shield } from 'lucide-react'

const STEP_ICONS = [FileText, Zap, MessageSquare, Database, RefreshCw]
const RESULT_ICONS = [Clock, CheckCircle2, BarChart2, Shield]

type StepItem   = { num: string; title: string; desc: string }
type ResultItem = { title: string; desc: string }

export default function WorkflowSection() {
  const t = useTranslations('workflow')
  const steps   = t.raw('steps')   as StepItem[]
  const results = t.raw('results') as ResultItem[]

  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0a]" id="proceso">
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

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-12">
          {steps.map(({ num, title, desc }, i) => {
            const Icon = STEP_ICONS[i]
            return (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className="relative border border-[#d2d2d7] dark:border-[#2a2a2a] rounded-[16px] p-5 h-full bg-white dark:bg-[#111111]"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold text-[#d2d2d7] dark:text-[#3a3a3a]">{num}</span>
                  <div className="w-8 h-8 bg-violet-50 dark:bg-violet-900/30 rounded-lg flex items-center justify-center">
                    <Icon size={14} className="text-violet-600" />
                  </div>
                </div>
                <h3 className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] text-sm mb-1.5">{title}</h3>
                <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-xs leading-relaxed">{desc}</p>

                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-7 items-center justify-center">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                      <path
                        d="M0 8H16M16 8L10 2M16 8L10 14"
                        stroke="#d2d2d7"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="dark:stroke-[#3a3a3a]"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Results */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {results.map(({ title, desc }, i) => {
            const Icon = RESULT_ICONS[i]
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className="bg-violet-50 dark:bg-violet-900/20 border border-violet-100 dark:border-violet-800/30 rounded-[16px] p-5"
              >
                <Icon size={18} className="text-violet-600 dark:text-violet-400 mb-3" />
                <h4 className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] text-sm mb-1">{title}</h4>
                <p className="text-violet-700/60 dark:text-violet-400/60 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
