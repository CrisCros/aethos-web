import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import BrowserMock, { MOCK_VARIANTS } from '@/components/BrowserMock'
import { buildAlternates } from '@/lib/seo'

const MOCK_URLS = [
  'aethos.studio/concepts/local-business',
  'aethos.studio/concepts/landing',
  'aethos.studio/concepts/enquiries',
  'aethos.studio/concepts/automation',
  'aethos.studio/concepts/dashboard',
]

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.work' })

  return {
    title: { absolute: t('title') },
    description: t('description'),
    alternates: buildAlternates(locale, '/work'),
    openGraph: { title: t('title'), description: t('description') },
    twitter: { title: t('title'), description: t('description') },
  }
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  void params
  const t = await getTranslations('work')

  const projects     = t.raw('projects')     as { tag: string; title: string; desc: string; tags: string[] }[]
  const conceptLabel = t('conceptLabel')

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
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 62%)',
            top: '-220px',
            left: '30%',
          }}
        />
        <div className="relative z-10 mx-auto px-5" style={{ maxWidth: '1240px' }}>
          <span className="eyebrow mb-6" style={{ color: '#60A5FA' }}>
            {t('eyebrow')}
          </span>
          <h1 className="display display-hero mb-7" style={{ color: '#F8FAFC', maxWidth: '14ch' }}>
            {t('h1')}
          </h1>
          <p style={{ fontSize: 'clamp(16px,1.4vw,19px)', color: 'rgba(203,213,225,0.8)', lineHeight: '1.65', maxWidth: '560px' }}>
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Showcase — alternating editorial rows */}
      <section style={{ padding: 'clamp(72px,9vw,130px) 0', background: 'var(--bg)' }}>
        <div className="mx-auto px-5 flex flex-col" style={{ maxWidth: '1240px', gap: 'clamp(72px, 9vw, 140px)' }}>
          {projects.map(({ tag, title, desc, tags }, i) => {
            const mockFirst = i % 2 === 0

            return (
              <article
                key={title}
                className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center"
              >
                {/* Visual */}
                <div className={`relative ${mockFirst ? '' : 'lg:order-2'}`}>
                  <div
                    aria-hidden
                    className="absolute pointer-events-none"
                    style={{
                      inset: '-10%',
                      background: 'radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 65%)',
                    }}
                  />
                  <div className="relative" style={{ transform: `rotate(${mockFirst ? '-1deg' : '1deg'})` }}>
                    <BrowserMock variant={MOCK_VARIANTS[i % MOCK_VARIANTS.length]} url={MOCK_URLS[i % MOCK_URLS.length]} />
                  </div>
                </div>

                {/* Info */}
                <div className={mockFirst ? '' : 'lg:order-1'}>
                  <span
                    aria-hidden
                    className="serif-numeral select-none block mb-4"
                    style={{ fontSize: 'clamp(36px,4vw,56px)', color: 'var(--blue-300)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="text-[11px] font-semibold px-3 py-1 rounded-full"
                      style={{ background: 'var(--blue-50)', color: 'var(--blue-primary)', border: '1px solid var(--blue-100)' }}
                    >
                      {tag}
                    </span>
                    <span
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                      style={{ background: 'var(--bg-muted)', color: 'var(--fg-3)' }}
                    >
                      {conceptLabel}
                    </span>
                  </div>
                  <h2 className="display mb-4" style={{ fontSize: 'clamp(26px,3.2vw,42px)', lineHeight: 1.1, color: 'var(--fg)' }}>
                    {title}
                  </h2>
                  <p className="mb-6" style={{ fontSize: '16px', color: 'var(--fg-2)', lineHeight: '1.65', maxWidth: '440px' }}>
                    {desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tg) => (
                      <span
                        key={tg}
                        className="text-xs px-3 py-1.5 rounded-full"
                        style={{ background: 'var(--bg-subtle)', color: 'var(--fg-3)', border: '1px solid var(--border)' }}
                      >
                        {tg}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
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
