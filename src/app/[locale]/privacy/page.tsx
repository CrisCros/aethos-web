import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { buildAlternates } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.privacy' })

  return {
    title: { absolute: t('title') },
    description: t('description'),
    alternates: buildAlternates(locale, '/privacy'),
    robots: { index: false, follow: true },
    openGraph: { title: t('title'), description: t('description') },
    twitter: { title: t('title'), description: t('description') },
  }
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  void params
  const t = await getTranslations('privacy')

  const sections = t.raw('sections') as { title: string; body: string }[]

  return (
    <main id="main-content">
      {/* Hero */}
      <section style={{ padding: 'clamp(80px,12vw,140px) 0 clamp(48px,7vw,80px)', background: 'var(--bg)' }}>
        <div className="mx-auto px-5" style={{ maxWidth: '760px' }}>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: '#2563EB' }}>
            {t('eyebrow')}
          </span>
          <h1 className="font-semibold mb-3" style={{ fontSize: 'clamp(32px,5vw,48px)', letterSpacing: '-0.035em', lineHeight: '1.08', color: 'var(--fg)' }}>
            {t('h1')}
          </h1>
          <p className="text-sm" style={{ color: 'var(--fg-3)' }}>
            {t('updated')}
          </p>
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: '0 0 clamp(64px,10vw,120px)', background: 'var(--bg)' }}>
        <div className="mx-auto px-5" style={{ maxWidth: '760px' }}>
          <p className="mb-10" style={{ fontSize: '17px', color: 'var(--fg-2)', lineHeight: '1.7' }}>
            {t('intro')}
          </p>

          <div className="flex flex-col gap-8">
            {sections.map(({ title, body }) => (
              <div key={title} className="pt-8" style={{ borderTop: '1px solid var(--border)' }}>
                <h2 className="font-semibold mb-3" style={{ fontSize: '20px', letterSpacing: '-0.02em', color: 'var(--fg)' }}>
                  {title}
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--fg-2)', lineHeight: '1.7' }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
