import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import { buildAlternates } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.about' })

  return {
    title: { absolute: t('title') },
    description: t('description'),
    alternates: buildAlternates(locale, '/about'),
    openGraph: { title: t('title'), description: t('description') },
    twitter: { title: t('title'), description: t('description') },
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  void params
  const t = await getTranslations('about')

  const values = t.raw('approach.values') as { title: string; desc: string }[]

  return (
    <main id="main-content">
      {/* Hero — dark editorial */}
      <section
        className="relative overflow-hidden grain"
        style={{ padding: 'clamp(150px,16vw,220px) 0 clamp(72px,9vw,120px)', background: '#020617' }}
      >
        <div className="blueprint-grid" aria-hidden />
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            width: '620px',
            height: '620px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 62%)',
            top: '-200px',
            right: '5%',
          }}
        />
        <div className="relative z-10 mx-auto px-5" style={{ maxWidth: '1240px' }}>
          <span className="eyebrow mb-6" style={{ color: '#60A5FA' }}>
            {t('eyebrow')}
          </span>
          <h1 className="display display-hero mb-7" style={{ color: '#F8FAFC', maxWidth: '16ch' }}>
            {t('h1')}
          </h1>
          <p style={{ fontSize: 'clamp(16px,1.4vw,19px)', color: 'rgba(203,213,225,0.8)', lineHeight: '1.65', maxWidth: '600px' }}>
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Story — asymmetric editorial split */}
      <section style={{ padding: 'clamp(80px,10vw,140px) 0', background: 'var(--bg)' }}>
        <div className="mx-auto px-5 grid lg:grid-cols-[7fr_5fr] gap-14 lg:gap-24 items-start" style={{ maxWidth: '1240px' }}>
          <div>
            {/* Lead paragraph — serif pull-quote scale */}
            <p
              className="display mb-10"
              style={{ fontSize: 'clamp(22px,2.6vw,34px)', lineHeight: 1.35, color: 'var(--fg)' }}
            >
              {t('body1')}
            </p>
            <div className="flex flex-col gap-6" style={{ maxWidth: '560px' }}>
              <p style={{ fontSize: '17px', color: 'var(--fg-2)', lineHeight: '1.75' }}>{t('body2')}</p>
              <p style={{ fontSize: '17px', color: 'var(--fg-2)', lineHeight: '1.75' }}>{t('body3')}</p>
            </div>
          </div>

          {/* Visual — studio connection card */}
          <div className="lg:sticky" style={{ top: '120px' }}>
            <div
              className="relative overflow-hidden rounded-3xl grain"
              style={{
                background: 'linear-gradient(160deg, #0F172A 0%, #1E3A8A 55%, #1D4ED8 100%)',
                padding: 'clamp(32px, 4vw, 48px)',
                boxShadow: 'var(--shadow-xl)',
              }}
            >
              <div
                aria-hidden
                className="absolute pointer-events-none"
                style={{
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(147,197,253,0.25) 0%, transparent 60%)',
                  top: '-100px',
                  right: '-80px',
                }}
              />

              {/* ES ↔ RO connection */}
              <div className="relative flex items-center justify-between mb-12" style={{ paddingTop: '8px' }}>
                {[
                  { code: 'ES', place: 'La Rioja' },
                  { code: 'RO', place: 'Alba Iulia' },
                ].map(({ code, place }, i) => (
                  <div key={code} className={i === 1 ? 'text-right' : ''}>
                    <div
                      className="display"
                      style={{ fontSize: 'clamp(36px,4vw,52px)', color: '#F8FAFC', lineHeight: 1 }}
                    >
                      {code}
                    </div>
                    <div className="text-xs font-medium uppercase tracking-widest mt-2" style={{ color: 'rgba(191,219,254,0.75)' }}>
                      {place}
                    </div>
                  </div>
                ))}
                {/* Connector */}
                <div
                  aria-hidden
                  className="absolute left-0 right-0 flex items-center"
                  style={{ top: '26px', padding: '0 76px' }}
                >
                  <span style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(191,219,254,0.6), transparent)' }} />
                </div>
              </div>

              <p
                className="serif-italic relative"
                style={{ fontSize: 'clamp(18px,1.8vw,24px)', color: '#BFDBFE', lineHeight: 1.4 }}
              >
                {t('imageCaption')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats — dark band with serif numerals */}
      <section className="relative overflow-hidden grain" style={{ padding: 'clamp(64px,8vw,100px) 0', background: '#020617' }}>
        <div className="relative z-10 mx-auto px-5 grid grid-cols-3 gap-6" style={{ maxWidth: '1000px' }}>
          {[
            { label: t('stats.founded'), value: '2025' },
            { label: t('stats.countries'), value: '2' },
            { label: t('stats.languages'), value: '3' },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <div className="display" style={{ fontSize: 'clamp(44px,6vw,84px)', color: '#F8FAFC', lineHeight: 1 }}>
                {value}
              </div>
              <div className="text-xs font-medium uppercase tracking-widest mt-3" style={{ color: 'rgba(96,165,250,0.85)' }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values — numbered editorial rows */}
      <section style={{ padding: 'clamp(80px,10vw,140px) 0', background: 'var(--bg)' }}>
        <div className="mx-auto px-5 grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-start" style={{ maxWidth: '1240px' }}>
          <div className="lg:sticky" style={{ top: '120px' }}>
            <h2 className="display display-lg mb-5" style={{ color: 'var(--fg)' }}>
              {t('approach.title')}
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--fg-2)', lineHeight: '1.6', maxWidth: '400px' }}>
              {t('approach.subtitle')}
            </p>
          </div>

          <div className="divider-list">
            {values.map(({ title, desc }, i) => (
              <div key={title} className="grid items-start gap-x-7 py-8" style={{ gridTemplateColumns: 'auto 1fr' }}>
                <span
                  aria-hidden
                  className="serif-numeral select-none"
                  style={{ fontSize: 'clamp(30px,3vw,44px)', color: 'var(--blue-300)', minWidth: '64px', paddingTop: '2px' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="display mb-2.5" style={{ fontSize: 'clamp(20px,2.2vw,28px)', color: 'var(--fg)', lineHeight: 1.2 }}>
                    {title}
                  </h3>
                  <p className="leading-relaxed" style={{ fontSize: '15px', color: 'var(--fg-2)', maxWidth: '460px' }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden grain" style={{ padding: 'clamp(80px,10vw,140px) 0', background: '#020617' }}>
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            width: '560px',
            height: '560px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37,99,235,0.24) 0%, transparent 62%)',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div className="relative z-10 mx-auto px-5 text-center" style={{ maxWidth: '720px' }}>
          <h2 className="display mb-5" style={{ fontSize: 'clamp(30px,4.4vw,56px)', lineHeight: 1.08, color: '#F8FAFC' }}>
            {t('cta.title')}
          </h2>
          <p className="mb-9" style={{ fontSize: '17px', color: 'rgba(203,213,225,0.75)', lineHeight: '1.6' }}>
            {t('cta.subtitle')}
          </p>
          <Link
            href="/contact"
            className="btn btn-primary inline-flex items-center gap-2.5 font-semibold rounded-full text-white"
            style={{
              fontSize: '16px',
              padding: '18px 36px',
              background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 60%, #1D4ED8 100%)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.22), 0 12px 40px rgba(37,99,235,0.5)',
            }}
          >
            {t('cta.button')} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}
