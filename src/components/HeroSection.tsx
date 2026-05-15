'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ArrowRight, Zap, LayoutDashboard, Users, Database, BarChart3, Settings } from 'lucide-react'
import { EASE } from '@/lib/motion'

function fadeDelay(i: number) {
  return { delay: i * 0.1, duration: 0.7, ease: EASE }
}

const leadData = [
  { initials: 'AV', name: 'Ana Villanueva', source: 'Formulario web', color: 'violet' },
  { initials: 'CP', name: 'Carlos Pérez',   source: 'WhatsApp',       color: 'blue' },
  { initials: 'MS', name: 'María Sánchez',  source: 'Instagram',      color: 'green' },
]

const sidebarIcons = [LayoutDashboard, Users, Database, BarChart3, Settings]

const statusClasses: Record<string, string> = {
  violet: 'bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400',
  blue:   'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  green:  'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400',
}

const statusKeys = ['statusNew', 'statusInProgress', 'statusWon'] as const

export default function HeroSection() {
  const t = useTranslations('hero')
  const d = useTranslations('hero.dashboard')

  const sidebarLabels = [
    d('sidebarDashboard'), d('sidebarLeads'), d('sidebarCrm'),
    d('sidebarReports'), d('sidebarConfig'),
  ]
  const metrics = [
    { label: d('metricLeadsMonth'),  value: '47',   accent: true  },
    { label: d('metricConverted'),   value: '18',   accent: false },
    { label: d('metricConvRate'),    value: '38%',  accent: true  },
    { label: d('metricAvgResponse'), value: '1.8m', accent: false },
  ]
  const statuses = [d('statusNew'), d('statusInProgress'), d('statusWon')]

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white dark:bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-[radial-gradient(#d2d2d740_1px,transparent_1px)] dark:bg-[radial-gradient(#2a2a2a60_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={fadeDelay(0)}
              className="inline-flex items-center gap-2 bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800/50 text-violet-700 dark:text-violet-400 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-7"
            >
              <Zap size={11} />
              {t('eyebrow')}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={fadeDelay(1)}
              className="text-5xl lg:text-6xl font-bold text-[#1d1d1f] dark:text-[#f5f5f7] leading-[1.08] tracking-tight mb-6"
            >
              {t('h1Line1')}
              <br />
              {t('h1Line2')}{' '}
              <span className="text-violet-600">{t('h1Accent')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={fadeDelay(2)}
              className="text-[#6e6e73] dark:text-[#a1a1a6] text-lg leading-relaxed mb-8 max-w-lg"
            >
              {t('subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={fadeDelay(3)}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3.5 rounded-full transition-colors text-sm"
              >
                {t('cta1')}
                <ArrowRight size={15} />
              </a>
              <a
                href="#proceso"
                className="inline-flex items-center justify-center gap-2 border border-[#d2d2d7] dark:border-[#2a2a2a] hover:border-[#1d1d1f] dark:hover:border-[#f5f5f7] text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold px-6 py-3.5 rounded-full transition-all text-sm"
              >
                {t('cta2')}
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={fadeDelay(4)}
              className="mt-7 text-xs text-[#6e6e73] dark:text-[#a1a1a6]"
            >
              {t.rich('tagline', {
                strong: (chunks) => (
                  <strong className="text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold">
                    {chunks}
                  </strong>
                ),
              })}
            </motion.p>
          </div>

          {/* Right: dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={fadeDelay(2)}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-violet-100/60 dark:bg-violet-900/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-violet-50 dark:bg-violet-900/10 rounded-full blur-2xl -z-10" />

            <div className="rounded-2xl border border-[#d2d2d7] dark:border-[#2a2a2a] overflow-hidden shadow-2xl shadow-violet-100/40 dark:shadow-violet-900/20">
              {/* Browser bar */}
              <div className="bg-[#f5f5f7] dark:bg-[#1a1a1a] border-b border-[#d2d2d7] dark:border-[#2a2a2a] px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500/80 block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500/80 block" />
                  <span className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500/80 block" />
                </div>
                <div className="flex-1 bg-white dark:bg-[#0a0a0a] border border-[#d2d2d7] dark:border-[#2a2a2a] rounded-md px-3 py-1 text-[11px] text-[#6e6e73] dark:text-[#a1a1a6]">
                  app.aethossolutions.es/dashboard
                </div>
              </div>

              {/* Dashboard content */}
              <div className="flex bg-white dark:bg-[#111111]" style={{ minHeight: '390px' }}>
                {/* Sidebar */}
                <div className="w-40 bg-[#f5f5f7] dark:bg-[#0f0f0f] border-r border-[#d2d2d7] dark:border-[#2a2a2a] p-4 flex-shrink-0">
                  <div className="text-xs font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-6 tracking-tight">
                    Aethos<span className="text-violet-600">.</span>
                  </div>
                  <nav className="flex flex-col gap-0.5">
                    {sidebarLabels.map((label, i) => {
                      const Icon = sidebarIcons[i]
                      return (
                        <div
                          key={label}
                          className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-[11px] font-medium ${
                            i === 0
                              ? 'bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400'
                              : 'text-[#6e6e73] dark:text-[#a1a1a6]'
                          }`}
                        >
                          <Icon size={12} />
                          {label}
                        </div>
                      )
                    })}
                  </nav>
                </div>

                {/* Main */}
                <div className="flex-1 p-5 min-w-0">
                  <p className="text-[11px] font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-4">
                    {d('title')}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {metrics.map(({ label, value, accent }) => (
                      <div
                        key={label}
                        className="bg-[#f5f5f7] dark:bg-[#1a1a1a] rounded-xl p-3 border border-[#d2d2d7]/50 dark:border-[#2a2a2a]/50"
                      >
                        <p className="text-[9px] text-[#6e6e73] dark:text-[#a1a1a6] mb-1 font-medium">
                          {label}
                        </p>
                        <p className={`text-xl font-bold leading-none ${accent ? 'text-violet-600' : 'text-[#1d1d1f] dark:text-[#f5f5f7]'}`}>
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Leads */}
                  <div>
                    <p className="text-[9px] font-semibold text-[#1d1d1f] dark:text-[#a1a1a6] uppercase tracking-wider mb-2">
                      {d('recentLeads')}
                    </p>
                    <div className="flex flex-col gap-1">
                      {leadData.map((lead, i) => (
                        <div
                          key={lead.initials}
                          className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-[#f5f5f7] dark:hover:bg-[#1a1a1a] transition-colors"
                        >
                          <div className="w-7 h-7 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-400 text-[9px] font-bold flex items-center justify-center flex-shrink-0">
                            {lead.initials}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[10px] font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] truncate">
                              {lead.name}
                            </p>
                            <p className="text-[9px] text-[#6e6e73] dark:text-[#a1a1a6] truncate">
                              {lead.source}
                            </p>
                          </div>
                          <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${statusClasses[lead.color]}`}>
                            {statuses[i]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
