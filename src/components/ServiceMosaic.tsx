'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { EASE_OUT } from '@/lib/motion'
import { ArrowUpRight } from 'lucide-react'

const SERVICES = [
  {
    num: '01',
    href: '/services/design',
    titleKey: 'tile1Title',
    subKey: 'tile1Sub',
    hoverKey: 'tile1Hover',
    gradient: 'linear-gradient(150deg, #0F172A 0%, #1E3A8A 55%, #1D4ED8 100%)',
  },
  {
    num: '02',
    href: '/services/development',
    titleKey: 'tile2Title',
    subKey: 'tile2Sub',
    hoverKey: 'tile2Hover',
    gradient: 'linear-gradient(150deg, #0F172A 0%, #1E40AF 45%, #2563EB 100%)',
  },
  {
    num: '03',
    href: '/services/automation',
    titleKey: 'tile3Title',
    subKey: 'tile3Sub',
    hoverKey: 'tile3Hover',
    gradient: 'linear-gradient(150deg, #172554 0%, #1E3A8A 40%, #3B82F6 100%)',
  },
] as const

export default function ServiceMosaic() {
  const t = useTranslations('home.mosaic')

  return (
    <section id="services" style={{ padding: 'clamp(80px,11vw,150px) 0', background: 'var(--bg)' }}>
      <div className="mx-auto px-5" style={{ maxWidth: '1240px' }}>
        {/* Header — asymmetric editorial */}
        <motion.div
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
        >
          <div style={{ maxWidth: '640px' }}>
            <span className="eyebrow mb-5" style={{ color: 'var(--blue-primary)' }}>
              {t('eyebrow')}
            </span>
            <h2 className="display display-xl" style={{ color: 'var(--fg)' }}>
              {t('h2')}
            </h2>
          </div>
          <p
            className="md:text-right"
            style={{ fontSize: '16px', color: 'var(--fg-3)', lineHeight: '1.6', maxWidth: '340px' }}
          >
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Service index rows */}
        <div>
          {SERVICES.map(({ num, href, titleKey, subKey, hoverKey, gradient }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: EASE_OUT }}
            >
              <Link href={href} className="service-row group">
                <div
                  className="grid items-center gap-x-6 gap-y-3 py-9 md:py-11"
                  style={{ gridTemplateColumns: 'auto 1fr auto' }}
                >
                  {/* Numeral */}
                  <span
                    aria-hidden
                    className="serif-numeral select-none"
                    style={{
                      fontSize: 'clamp(28px, 3.4vw, 46px)',
                      color: 'var(--blue-300)',
                      minWidth: 'clamp(48px, 6vw, 84px)',
                    }}
                  >
                    {num}
                  </span>

                  {/* Title + sub */}
                  <div className="service-row-title" style={{ minWidth: 0 }}>
                    <h3
                      className="display"
                      style={{
                        fontSize: 'clamp(30px, 4.6vw, 58px)',
                        lineHeight: 1.05,
                        color: 'var(--fg)',
                        marginBottom: '8px',
                      }}
                    >
                      {t(titleKey)}
                    </h3>
                    <p style={{ fontSize: '15px', color: 'var(--fg-3)', lineHeight: '1.55', maxWidth: '440px' }}>
                      {t(subKey)}
                    </p>
                  </div>

                  {/* Hover panel (desktop) + arrow */}
                  <div className="flex items-center gap-6">
                    <div
                      className="service-row-panel hidden lg:flex flex-col justify-end rounded-2xl overflow-hidden relative"
                      style={{ width: '260px', height: '150px', background: gradient, padding: '18px' }}
                      aria-hidden
                    >
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'radial-gradient(circle at 80% 0%, rgba(147,197,253,0.25) 0%, transparent 55%)',
                        }}
                      />
                      <p
                        className="relative text-[13px] leading-snug"
                        style={{ color: 'rgba(255,255,255,0.88)' }}
                      >
                        {t(hoverKey)}
                      </p>
                    </div>

                    <span
                      className="service-row-arrow hidden md:flex items-center justify-center rounded-full flex-shrink-0"
                      style={{
                        width: '52px',
                        height: '52px',
                        background: 'var(--blue-primary)',
                        color: '#fff',
                        boxShadow: '0 8px 24px rgba(37,99,235,0.35)',
                      }}
                      aria-hidden
                    >
                      <ArrowUpRight size={20} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
