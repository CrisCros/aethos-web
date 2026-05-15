'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Check, X } from 'lucide-react'
import { EASE } from '@/lib/motion'

type RowItem = { aspect: string; before: string; after: string }

interface SVGProps {
  dark?: boolean
  labels: {
    before: string; after: string; noSystem: string; leadsLost: string
    allAuto: string; zeroLost: string; formLabel: string
    autoLabel: string; autoSub: string; crmLabel: string
  }
}

function ComparisonSVG({ dark, labels }: SVGProps) {
  const beforeBg   = dark ? '#2a1515' : '#FEF2F2'
  const afterBg    = dark ? '#1a1028' : '#F5F3FF'
  const bubbleFill = dark ? '#1a1a1a' : 'white'
  const xCircle    = dark ? '#3b1a1a' : '#FEE2E2'
  const checkCircle= dark ? '#1e1535' : '#EDE9FE'
  const clockFill  = dark ? '#1a1a1a' : 'white'

  return (
    <svg viewBox="0 0 440 340" className="w-full max-w-lg mx-auto" aria-hidden="true">
      <rect x="4" y="4" width="200" height="332" rx="16" fill={beforeBg} />
      <rect x="236" y="4" width="200" height="332" rx="16" fill={afterBg} />

      <text x="104" y="36" textAnchor="middle" fontSize="13" fontWeight="700" fill="#EF4444">{labels.before}</text>
      <text x="336" y="36" textAnchor="middle" fontSize="13" fontWeight="700" fill="#7C3AED">{labels.after}</text>

      <rect x="30" y="60" width="64" height="32" rx="8" fill={bubbleFill} stroke="#FCA5A5" strokeWidth="1.5" />
      <text x="62" y="80" textAnchor="middle" fontSize="9" fill="#EF4444" fontWeight="500">📧 Lead</text>
      <rect x="110" y="90" width="64" height="32" rx="8" fill={bubbleFill} stroke="#FCA5A5" strokeWidth="1.5" />
      <text x="142" y="110" textAnchor="middle" fontSize="9" fill="#EF4444" fontWeight="500">📧 Lead</text>
      <rect x="40" y="140" width="64" height="32" rx="8" fill={bubbleFill} stroke="#FCA5A5" strokeWidth="1.5" />
      <text x="72" y="160" textAnchor="middle" fontSize="9" fill="#EF4444" fontWeight="500">📧 Lead</text>

      <circle cx="108" cy="76" r="10" fill={xCircle} /><text x="108" y="81" textAnchor="middle" fontSize="11" fill="#EF4444" fontWeight="700">✕</text>
      <circle cx="34" cy="125" r="10" fill={xCircle} /><text x="34" y="130" textAnchor="middle" fontSize="11" fill="#EF4444" fontWeight="700">✕</text>
      <circle cx="160" cy="138" r="10" fill={xCircle} /><text x="160" y="143" textAnchor="middle" fontSize="11" fill="#EF4444" fontWeight="700">✕</text>

      <circle cx="104" cy="205" r="32" fill={clockFill} stroke="#FCA5A5" strokeWidth="1.5" />
      <text x="104" y="213" textAnchor="middle" fontSize="24">⏰</text>

      <text x="104" y="272" textAnchor="middle" fontSize="11" fill="#EF4444" fontWeight="600">{labels.noSystem}</text>
      <text x="104" y="290" textAnchor="middle" fontSize="10" fill="#EF4444" opacity="0.65">{labels.leadsLost}</text>

      <rect x="272" y="56" width="128" height="36" rx="8" fill={bubbleFill} stroke="#7C3AED" strokeWidth="1.5" />
      <text x="336" y="78" textAnchor="middle" fontSize="10" fill="#7C3AED" fontWeight="600">{labels.formLabel}</text>

      <line x1="336" y1="92" x2="336" y2="116" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="4 3" />
      <polygon points="336,122 330,112 342,112" fill="#7C3AED" />

      <rect x="272" y="122" width="128" height="40" rx="8" fill="#7C3AED" />
      <text x="336" y="140" textAnchor="middle" fontSize="10" fill="white" fontWeight="600">{labels.autoLabel}</text>
      <text x="336" y="154" textAnchor="middle" fontSize="9" fill="white" opacity="0.8">{labels.autoSub}</text>

      <line x1="336" y1="162" x2="336" y2="186" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="4 3" />
      <polygon points="336,192 330,182 342,182" fill="#7C3AED" />

      <rect x="272" y="192" width="128" height="36" rx="8" fill={bubbleFill} stroke="#7C3AED" strokeWidth="1.5" />
      <text x="336" y="214" textAnchor="middle" fontSize="10" fill="#7C3AED" fontWeight="600">{labels.crmLabel}</text>

      <circle cx="408" cy="74" r="10" fill={checkCircle} /><text x="408" y="79" textAnchor="middle" fontSize="11" fill="#7C3AED" fontWeight="700">✓</text>
      <circle cx="408" cy="142" r="10" fill={checkCircle} /><text x="408" y="147" textAnchor="middle" fontSize="11" fill="#7C3AED" fontWeight="700">✓</text>
      <circle cx="408" cy="210" r="10" fill={checkCircle} /><text x="408" y="215" textAnchor="middle" fontSize="11" fill="#7C3AED" fontWeight="700">✓</text>

      <text x="336" y="272" textAnchor="middle" fontSize="11" fill="#7C3AED" fontWeight="600">{labels.allAuto}</text>
      <text x="336" y="290" textAnchor="middle" fontSize="10" fill="#7C3AED" opacity="0.65">{labels.zeroLost}</text>
    </svg>
  )
}

export default function BeforeAfterSection() {
  const t = useTranslations('beforeAfter')
  const rows = t.raw('rows') as RowItem[]

  const svgLabels = {
    before:    t('svgBefore'),
    after:     t('svgAfter'),
    noSystem:  t('svgNoSystem'),
    leadsLost: t('svgLeadsLost'),
    allAuto:   t('svgAllAuto'),
    zeroLost:  t('svgZeroLost'),
    formLabel: t('svgFormLabel'),
    autoLabel: t('svgAutoLabel'),
    autoSub:   t('svgAutoSub'),
    crmLabel:  t('svgCrmLabel'),
  }

  return (
    <section className="py-24 bg-[#f5f5f7] dark:bg-[#111111]">
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="dark:hidden"><ComparisonSVG labels={svgLabels} /></div>
            <div className="hidden dark:block"><ComparisonSVG dark labels={svgLabels} /></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="bg-white dark:bg-[#1a1a1a] rounded-[20px] border border-[#d2d2d7] dark:border-[#2a2a2a] overflow-hidden">
              <div className="grid grid-cols-3 bg-[#f5f5f7] dark:bg-[#111111] border-b border-[#d2d2d7] dark:border-[#2a2a2a]">
                <div className="p-4 text-xs font-semibold text-[#6e6e73] dark:text-[#a1a1a6] uppercase tracking-wide">
                  {t('colSituation')}
                </div>
                <div className="p-4 text-xs font-semibold text-red-500 border-l border-[#d2d2d7] dark:border-[#2a2a2a] text-center uppercase tracking-wide">
                  {t('colBefore')}
                </div>
                <div className="p-4 text-xs font-semibold text-violet-600 border-l border-[#d2d2d7] dark:border-[#2a2a2a] text-center uppercase tracking-wide">
                  {t('colAfter')}
                </div>
              </div>

              {rows.map(({ aspect, before, after }, i) => (
                <motion.div
                  key={aspect}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 + i * 0.06 }}
                  className="grid grid-cols-3 border-b border-[#d2d2d7]/50 dark:border-[#2a2a2a]/50 last:border-0"
                >
                  <div className="p-4 text-xs font-medium text-[#1d1d1f] dark:text-[#f5f5f7] flex items-center">
                    {aspect}
                  </div>
                  <div className="p-4 border-l border-[#d2d2d7]/50 dark:border-[#2a2a2a]/50 flex items-start gap-1.5">
                    <X size={12} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-[#6e6e73] dark:text-[#a1a1a6] leading-snug">{before}</span>
                  </div>
                  <div className="p-4 border-l border-[#d2d2d7]/50 dark:border-[#2a2a2a]/50 flex items-start gap-1.5">
                    <Check size={12} className="text-violet-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-[#1d1d1f] dark:text-[#f5f5f7] font-medium leading-snug">{after}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
