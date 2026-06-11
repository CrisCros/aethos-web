'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { EASE_OUT } from '@/lib/motion'
import { ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'

export default function CTASection() {
  const t = useTranslations('home.cta')

  return (
    <section
      id="contact"
      className="relative overflow-hidden grain"
      style={{ background: '#020617' }}
    >
      {/* Top marquee — repeated invitation */}
      <div
        className="marquee relative z-10"
        aria-hidden
        style={{ borderBottom: '1px solid rgba(96,165,250,0.14)', padding: '20px 0' }}
      >
        {[0, 1].map((copy) => (
          <div className="marquee-track" key={copy}>
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={`${copy}-${i}`}
                className="display inline-flex items-center"
                style={{
                  fontSize: 'clamp(20px, 2.4vw, 32px)',
                  color: 'rgba(148,163,184,0.45)',
                  whiteSpace: 'nowrap',
                  paddingRight: '32px',
                  textTransform: 'none',
                }}
              >
                {t('eyebrow')}
                <span style={{ color: 'rgba(96,165,250,0.55)', paddingLeft: '32px', fontSize: '0.55em' }}>✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Glow */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          width: 'min(760px, 90vw)',
          height: 'min(760px, 90vw)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.26) 0%, transparent 62%)',
          left: '50%',
          top: '55%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div
        className="relative z-10 mx-auto px-5 text-center"
        style={{ maxWidth: '920px', padding: 'clamp(96px,12vw,180px) 20px' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE_OUT }}
        >
          <h2
            className="display mb-7"
            style={{
              fontSize: 'clamp(34px, 5.6vw, 72px)',
              lineHeight: 1.06,
              color: '#F8FAFC',
            }}
          >
            {t('h2')}
          </h2>

          <p
            className="mx-auto mb-11"
            style={{
              fontSize: 'clamp(16px,1.4vw,19px)',
              color: 'rgba(203,213,225,0.75)',
              maxWidth: '580px',
              lineHeight: '1.65',
            }}
          >
            {t('subtitle')}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/contact"
              className="btn btn-primary inline-flex items-center gap-2.5 font-semibold px-8 py-4.5 rounded-full"
              style={{
                fontSize: '16px',
                padding: '18px 36px',
                background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 60%, #1D4ED8 100%)',
                color: '#fff',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.22), 0 12px 40px rgba(37,99,235,0.5)',
              }}
            >
              {t('cta1')} <ArrowRight size={17} />
            </Link>
            <Link
              href="/services"
              className="btn btn-ghost inline-flex items-center gap-2 font-medium rounded-full"
              style={{
                fontSize: '15px',
                padding: '17px 32px',
                background: 'rgba(255,255,255,0.04)',
                color: '#E2E8F0',
                border: '1px solid rgba(148,163,184,0.25)',
              }}
            >
              {t('cta2')}
            </Link>
          </div>

          {/* Direct email — human touch */}
          <p className="mt-10 text-sm" style={{ color: 'rgba(148,163,184,0.7)' }}>
            <a
              href="mailto:aethos.solutions@gmail.com"
              className="font-medium"
              style={{ color: '#93C5FD', textDecorationColor: 'rgba(96,165,250,0.4)', textDecoration: 'underline', textUnderlineOffset: '4px' }}
            >
              aethos.solutions@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
