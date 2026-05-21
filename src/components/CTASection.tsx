'use client'

import { motion } from 'framer-motion'
import { EASE } from '@/lib/motion'
import { ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{
        padding: 'clamp(64px,10vw,128px) 0',
        background: `
          radial-gradient(80% 80% at 30% 0%, rgba(124,92,255,0.55) 0%, transparent 60%),
          radial-gradient(60% 60% at 80% 100%, rgba(236,72,153,0.28) 0%, transparent 65%),
          linear-gradient(180deg, #1a1a24 0%, #0d0d12 100%)
        `,
      }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(50% 50% at 15% 5%, rgba(139,106,255,.18) 0%, transparent 60%),
          radial-gradient(45% 40% at 90% 15%, rgba(236,72,153,.08) 0%, transparent 65%)
        `,
      }} />

      <div className="relative z-10 mx-auto px-5 text-center" style={{ maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span className="inline-block text-xs font-medium uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Let&apos;s talk
          </span>

          <h2
            className="font-semibold mb-4"
            style={{ fontSize: 'clamp(32px,5vw,56px)', letterSpacing: '-0.035em', lineHeight: '1.05', color: '#fff' }}
          >
            Let&apos;s build something that actually{' '}
            <span className="serif-italic inverse">helps</span>{' '}
            your business grow.
          </h2>

          <p className="mx-auto mb-8" style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)', maxWidth: '560px', lineHeight: '1.55' }}>
            A 30-minute call. No sales pitch. We listen, ask a few questions, and tell you honestly whether we can help.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-medium px-6 py-3.5 rounded-xl text-sm"
              style={{ background: '#fff', color: '#14141c', boxShadow: '0 4px 20px rgba(0,0,0,0.18)' }}
            >
              Tell us about your business <ArrowRight size={15} />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-medium px-6 py-3.5 rounded-xl text-sm"
              style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.25)' }}
            >
              See our work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
