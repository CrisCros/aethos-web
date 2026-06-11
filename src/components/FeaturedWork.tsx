'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { EASE_OUT } from '@/lib/motion'
import { ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import BrowserMock, { MOCK_VARIANTS } from '@/components/BrowserMock'

const MOCK_URLS = [
  'aethos.studio/concepts/local-business',
  'aethos.studio/concepts/landing',
  'aethos.studio/concepts/enquiries',
  'aethos.studio/concepts/automation',
  'aethos.studio/concepts/dashboard',
]

export default function FeaturedWork() {
  const t        = useTranslations('home.work')
  const tWork    = useTranslations('work')
  const projects = tWork.raw('projects') as { tag: string; title: string; desc: string; tags: string[] }[]
  const conceptLabel = tWork('conceptLabel')

  const [featured, ...rest] = projects

  return (
    <section
      id="work"
      className="relative overflow-hidden grain"
      style={{ padding: 'clamp(88px,11vw,160px) 0', background: '#020617' }}
    >
      <div className="blueprint-grid" aria-hidden />
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          width: '640px',
          height: '640px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 65%)',
          top: '-180px',
          right: '-160px',
        }}
      />

      <div className="relative z-10 mx-auto px-5" style={{ maxWidth: '1240px' }}>
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
        >
          <div style={{ maxWidth: '560px' }}>
            <span className="eyebrow mb-5" style={{ color: '#60A5FA' }}>
              {t('eyebrow')}
            </span>
            <h2 className="display display-xl" style={{ color: '#F8FAFC' }}>
              {t('h2')}
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-5">
            <p style={{ fontSize: '15px', color: 'rgba(148,163,184,0.9)', lineHeight: '1.6', maxWidth: '340px' }}>
              {t('subtitle')}
            </p>
            <Link
              href="/work"
              className="btn inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full"
              style={{
                background: 'rgba(255,255,255,0.05)',
                color: '#E2E8F0',
                border: '1px solid rgba(148,163,184,0.25)',
              }}
            >
              {t('viewAll')} <ArrowRight size={15} />
            </Link>
          </div>
        </motion.div>

        {/* Featured concept — large split */}
        <motion.article
          className="grid lg:grid-cols-[7fr_5fr] gap-10 lg:gap-16 items-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: EASE_OUT }}
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute pointer-events-none"
              style={{
                inset: '-12%',
                background: 'radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 65%)',
              }}
            />
            <div className="relative animate-float-a">
              <BrowserMock variant={MOCK_VARIANTS[0]} url={MOCK_URLS[0]} />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-5">
              <span
                className="text-[11px] font-semibold px-3 py-1 rounded-full"
                style={{ background: 'rgba(37,99,235,0.25)', color: '#93C5FD', border: '1px solid rgba(96,165,250,0.3)' }}
              >
                {featured.tag}
              </span>
              <span
                className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(148,163,184,0.9)' }}
              >
                {conceptLabel}
              </span>
            </div>
            <h3 className="display mb-4" style={{ fontSize: 'clamp(26px,3vw,40px)', lineHeight: 1.12, color: '#F8FAFC' }}>
              {featured.title}
            </h3>
            <p className="mb-6" style={{ fontSize: '16px', color: 'rgba(203,213,225,0.8)', lineHeight: '1.65', maxWidth: '440px' }}>
              {featured.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {featured.tags.map((tg) => (
                <span
                  key={tg}
                  className="text-xs px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(148,163,184,0.95)', border: '1px solid rgba(148,163,184,0.2)' }}
                >
                  {tg}
                </span>
              ))}
            </div>
          </div>
        </motion.article>

        {/* Remaining concepts — showcase grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {rest.map(({ tag, title, desc }, i) => (
            <motion.article
              key={title}
              className="rounded-3xl p-6 md:p-8"
              style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(96,165,250,0.14)' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.08, ease: EASE_OUT }}
            >
              <div className="mb-6">
                <BrowserMock variant={MOCK_VARIANTS[i + 1]} url={MOCK_URLS[i + 1]} />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(37,99,235,0.22)', color: '#93C5FD' }}
                >
                  {tag}
                </span>
                <span
                  className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(148,163,184,0.9)' }}
                >
                  {conceptLabel}
                </span>
              </div>
              <h3 className="display mb-2" style={{ fontSize: '22px', color: '#F8FAFC', lineHeight: 1.2 }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(148,163,184,0.95)' }}>
                {desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
