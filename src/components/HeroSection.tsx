'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { EASE_OUT } from '@/lib/motion'
import ArchitecturalLightVisual from '@/components/hero/ArchitecturalLightVisual'

export default function HeroSection() {
  const t = useTranslations('home.hero')
  const reduceMotion = useReducedMotion()

  const words = t('h1').split(' ')
  const services = t('servicesLine').split('·').map((s) => s.trim())
  const trust = [t('trust1'), t('trust2'), t('trust3')]

  return (
    <section
      className="relative overflow-hidden grain"
      style={{ background: '#020617', minHeight: '100svh', display: 'flex', flexDirection: 'column' }}
    >
      {/* Architectural light portal — right side on desktop, lower half on mobile */}
      <div className="absolute pointer-events-none inset-x-0 bottom-0 h-[58vh] lg:inset-y-0 lg:left-auto lg:right-0 lg:h-auto lg:w-[62vw]">
        <ArchitecturalLightVisual />
      </div>

      <div
        className="relative z-10 mx-auto px-5 w-full flex-1 flex flex-col"
        style={{ maxWidth: '1240px' }}
      >
        {/* Editorial copy block */}
        <div
          className="flex-1 flex items-center"
          style={{ paddingTop: 'clamp(120px, 13vw, 170px)', paddingBottom: '48px' }}
        >
          <div style={{ maxWidth: '620px' }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE_OUT }}
              className="mb-7"
            >
              <span className="eyebrow inline-flex items-center gap-3" style={{ color: 'rgba(147,197,253,0.92)' }}>
                <span
                  aria-hidden
                  style={{ width: '22px', height: '1px', background: '#3B82F6', boxShadow: '0 0 8px rgba(59,130,246,0.9)' }}
                />
                {t('eyebrow')}
              </span>
            </motion.div>

            {/* Headline — word-by-word mask reveal, last word in editorial blue */}
            <h1
              className="display mb-7"
              style={{ fontSize: 'clamp(40px, 5.4vw, 76px)', lineHeight: 1.04, color: '#F8FAFC', maxWidth: '18ch' }}
            >
              {words.map((word, i) => {
                const isLast = i === words.length - 1
                return (
                  <span key={i} className="inline-block overflow-hidden align-bottom" style={{ paddingBottom: '0.12em', marginBottom: '-0.12em' }}>
                    <motion.span
                      className={isLast ? 'serif-italic inline-block' : 'inline-block'}
                      style={isLast ? { fontSize: '1em', color: '#60A5FA' } : undefined}
                      initial={reduceMotion ? false : { y: '110%' }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.7, delay: 0.12 + i * 0.05, ease: EASE_OUT }}
                    >
                      {word}
                    </motion.span>
                    {i < words.length - 1 && <span>&nbsp;</span>}
                  </span>
                )
              })}
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: EASE_OUT }}
              style={{
                fontSize: 'clamp(16px, 1.35vw, 18px)',
                color: 'rgba(203,213,225,0.80)',
                lineHeight: '1.7',
                maxWidth: '480px',
                marginBottom: '40px',
              }}
            >
              {t('subtitle')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: EASE_OUT }}
            >
              <Link
                href="/contact"
                className="btn btn-primary inline-flex items-center gap-2.5 font-semibold px-7 py-4 rounded-full text-[15px]"
                style={{
                  background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 60%, #1D4ED8 100%)',
                  color: '#fff',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.22), 0 8px 32px rgba(37,99,235,0.40)',
                }}
              >
                {t('cta1')} <ArrowRight size={16} aria-hidden />
              </Link>
              <Link
                href="/work"
                className="btn btn-ghost inline-flex items-center gap-2 font-medium px-7 py-4 rounded-full text-[15px]"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  color: '#E2E8F0',
                  border: '1px solid rgba(148,163,184,0.25)',
                }}
              >
                {t('cta2')}
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom line — trust · scroll cue · services */}
        <motion.div
          className="flex flex-wrap items-end justify-between gap-x-10 gap-y-5"
          style={{ paddingBottom: 'clamp(28px, 4vw, 44px)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.0, ease: EASE_OUT }}
        >
          <p className="text-[13px] font-medium" style={{ color: 'rgba(148,163,184,0.75)', maxWidth: '300px', lineHeight: 1.6, margin: 0 }}>
            {trust.map((item, i) => (
              <span key={item}>
                {item}
                {i < trust.length - 1 && (
                  <span aria-hidden style={{ color: 'rgba(96,165,250,0.6)', padding: '0 8px' }}>·</span>
                )}
              </span>
            ))}
          </p>

          {/* Scroll cue */}
          <div className="hidden md:flex flex-col items-center gap-2.5" aria-hidden>
            <span
              className="text-[11px] font-semibold uppercase"
              style={{ letterSpacing: '0.18em', color: 'rgba(148,163,184,0.6)' }}
            >
              {t('scroll')}
            </span>
            <span className="scroll-cue-line" />
          </div>

          <p className="text-[13px] font-medium" style={{ color: 'rgba(203,213,225,0.85)', margin: 0 }}>
            {services.map((item, i) => (
              <span key={item} style={{ whiteSpace: 'nowrap' }}>
                {item}
                {i < services.length - 1 && (
                  <span aria-hidden style={{ color: '#3B82F6', padding: '0 10px' }}>·</span>
                )}
              </span>
            ))}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
