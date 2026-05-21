'use client'

import { motion } from 'framer-motion'
import { EASE } from '@/lib/motion'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{
        padding: 'clamp(64px,10vw,128px) 0',
        background: `
          radial-gradient(80% 80% at 30% 0%, rgba(124,92,255,0.55) 0%, transparent 60%),
          radial-gradient(60% 60% at 80% 100%, rgba(236,72,153,0.30) 0%, transparent 65%),
          linear-gradient(180deg, #25252e 0%, #08080d 100%)
        `,
      }}
    >
      {/* Mesh overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(50% 50% at 15% 5%, rgba(139,106,255,.20) 0%, transparent 60%),
            radial-gradient(45% 40% at 90% 15%, rgba(236,72,153,.10) 0%, transparent 65%)
          `,
        }}
      />

      <div className="relative z-10 mx-auto px-5 text-center" style={{ maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span
            className="inline-block text-xs font-medium uppercase tracking-widest mb-4"
            style={{ color: 'rgba(255,255,255,0.75)' }}
          >
            Let&apos;s get started
          </span>

          <h2
            className="font-semibold mb-4"
            style={{
              fontSize: 'clamp(32px,5vw,56px)',
              letterSpacing: '-0.035em',
              lineHeight: '1.05',
              color: '#fff',
            }}
          >
            Let&apos;s build something that actually{' '}
            <span className="serif-italic inverse">helps</span>{' '}
            your business grow.
          </h2>

          <p
            className="mx-auto mb-8"
            style={{
              fontSize: '17px',
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '560px',
              lineHeight: '1.55',
            }}
          >
            A 30-minute call. No sales pitch. We listen, ask questions, and tell you whether we&apos;re a fit.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:hello@aethos.studio"
              className="inline-flex items-center gap-2 font-medium px-6 py-3.5 rounded-xl text-sm transition-all duration-150"
              style={{
                background: '#fff',
                color: '#14141c',
                boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(-1px)'
                el.style.boxShadow = '0 10px 32px rgba(0,0,0,0.24)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = '0 4px 20px rgba(0,0,0,0.18)'
              }}
            >
              Start a project <ArrowRight size={15} />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 font-medium px-6 py-3.5 rounded-xl text-sm transition-all duration-150"
              style={{
                background: 'transparent',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.28)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(255,255,255,0.10)'
                el.style.borderColor = 'rgba(255,255,255,0.5)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'transparent'
                el.style.borderColor = 'rgba(255,255,255,0.28)'
              }}
            >
              See our work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
