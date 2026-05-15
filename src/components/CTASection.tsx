'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import { EASE } from '@/lib/motion'

export default function CTASection() {
  const t = useTranslations('cta')

  return (
    <section className="bg-violet-600 py-28" id="contacto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="text-violet-200 text-sm font-semibold uppercase tracking-wider mb-5">
            {t('sectionLabel')}
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {t('h2Line1')}
            <br />
            {t('h2Line2')}
          </h2>
          <p className="text-violet-200 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            {t('body')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:hola@aethossolutions.es"
              className="inline-flex items-center justify-center gap-2 bg-white text-violet-600 font-semibold px-8 py-4 rounded-full hover:bg-violet-50 transition-colors text-sm"
            >
              {t('cta1')}
              <ArrowRight size={15} />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-sm"
            >
              {t('cta2')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
