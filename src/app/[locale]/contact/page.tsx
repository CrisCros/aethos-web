import type { Metadata } from 'next'
import { getTranslations, getLocale } from 'next-intl/server'
import { Mail, Clock, Globe } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import { buildAlternates } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.contact' })

  return {
    title: { absolute: t('title') },
    description: t('description'),
    alternates: buildAlternates(locale, '/contact'),
    openGraph: { title: t('title'), description: t('description') },
    twitter: { title: t('title'), description: t('description') },
  }
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  void params
  const t      = await getTranslations('contact')
  const locale = await getLocale()

  const steps = t.raw('steps') as { step: string; title: string; desc: string }[]

  return (
    <main id="main-content">
      {/* Conversion split — dark narrative panel + form */}
      <section
        className="relative overflow-hidden grain"
        style={{ background: '#020617', padding: 'clamp(140px,15vw,200px) 0 clamp(80px,10vw,130px)' }}
      >
        <div className="blueprint-grid" aria-hidden />
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            width: '640px',
            height: '640px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 62%)',
            top: '-200px',
            left: '-120px',
          }}
        />

        <div className="relative z-10 mx-auto px-5 grid lg:grid-cols-[6fr_6fr] gap-14 lg:gap-20 items-start" style={{ maxWidth: '1240px' }}>
          {/* Left — narrative + reassurance */}
          <div>
            <span className="eyebrow mb-6" style={{ color: '#60A5FA' }}>
              {t('eyebrow')}
            </span>
            <h1 className="display mb-6" style={{ fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1.05, color: '#F8FAFC' }}>
              {t('h1')}
            </h1>
            <p className="mb-12" style={{ fontSize: 'clamp(16px,1.4vw,18px)', color: 'rgba(203,213,225,0.8)', lineHeight: '1.65', maxWidth: '480px' }}>
              {t('subtitle')}
            </p>

            {/* What happens next — numbered serif steps */}
            <h2 className="display mb-7" style={{ fontSize: '22px', color: '#F8FAFC' }}>
              {t('whatHappensTitle')}
            </h2>
            <div className="flex flex-col gap-7 mb-12">
              {steps.map(({ step, title, desc }) => (
                <div key={step} className="flex items-start gap-5">
                  <span
                    aria-hidden
                    className="serif-numeral select-none flex-shrink-0"
                    style={{ fontSize: '32px', color: '#60A5FA', minWidth: '36px', paddingTop: '2px' }}
                  >
                    {step}
                  </span>
                  <div>
                    <div className="font-semibold mb-1" style={{ fontSize: '16px', color: '#F8FAFC', letterSpacing: '-0.015em' }}>
                      {title}
                    </div>
                    <div className="text-sm leading-relaxed" style={{ color: 'rgba(148,163,184,0.95)', maxWidth: '380px' }}>
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact facts */}
            <div
              className="flex flex-col gap-5 rounded-2xl p-6"
              style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(96,165,250,0.16)', maxWidth: '420px' }}
            >
              <div className="flex items-center gap-3.5">
                <Mail size={16} style={{ color: '#60A5FA', flexShrink: 0 }} />
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: 'rgba(148,163,184,0.8)' }}>
                    {t('emailLabel')}
                  </div>
                  <a href="mailto:aethos.solutions@gmail.com" className="text-sm font-medium" style={{ color: '#F8FAFC' }}>
                    aethos.solutions@gmail.com
                  </a>
                </div>
              </div>
              <div style={{ height: '1px', background: 'rgba(96,165,250,0.14)' }} />
              <div className="flex items-center gap-3.5">
                <Clock size={16} style={{ color: '#60A5FA', flexShrink: 0 }} />
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: 'rgba(148,163,184,0.8)' }}>
                    {t('responseLabel')}
                  </div>
                  <div className="text-sm" style={{ color: 'rgba(203,213,225,0.9)' }}>{t('responseValue')}</div>
                </div>
              </div>
              <div style={{ height: '1px', background: 'rgba(96,165,250,0.14)' }} />
              <div className="flex items-center gap-3.5">
                <Globe size={16} style={{ color: '#60A5FA', flexShrink: 0 }} />
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: 'rgba(148,163,184,0.8)' }}>
                    {t('languagesLabel')}
                  </div>
                  <div className="text-sm" style={{ color: 'rgba(203,213,225,0.9)' }}>{t('languagesValue')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — elevated form */}
          <div
            className="rounded-3xl lg:sticky"
            style={{
              top: '110px',
              background: 'var(--bg)',
              padding: 'clamp(10px, 1.5vw, 18px)',
              boxShadow: '0 0 0 1px rgba(96,165,250,0.18), 0 40px 100px rgba(2,6,23,0.6)',
            }}
          >
            <ContactForm locale={locale} />
          </div>
        </div>
      </section>
    </main>
  )
}
