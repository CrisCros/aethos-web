import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { ArrowRight, Check, Palette, Code2 } from 'lucide-react'
import { buildAlternates } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.serviceAutomation' })

  return {
    title: { absolute: t('title') },
    description: t('description'),
    alternates: buildAlternates(locale, '/services/automation'),
    openGraph: { title: t('title'), description: t('description') },
    twitter: { title: t('title'), description: t('description') },
  }
}

export default async function AutomationPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  void params
  const t    = await getTranslations('serviceAutomation')
  const tNav = await getTranslations('nav.servicesMenu')

  const automateItems = t.raw('automateItems') as string[]
  const changesItems  = t.raw('changesItems')  as string[]
  const processSteps  = t.raw('processSteps')  as { num: string; title: string; desc: string }[]

  return (
    <main id="main-content">
      {/* Hero */}
      <section style={{ padding: 'clamp(80px,12vw,140px) 0 clamp(64px,10vw,100px)', background: 'var(--bg)' }}>
        <div className="mx-auto px-5" style={{ maxWidth: '800px' }}>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: '#2563EB' }}>
            {t('eyebrow')}
          </span>
          <h1 className="font-semibold mb-5" style={{ fontSize: 'clamp(32px,5vw,56px)', letterSpacing: '-0.035em', lineHeight: '1.08', color: 'var(--fg)' }}>
            {t('h1')}
          </h1>
          <p style={{ fontSize: 'clamp(16px,1.3vw,18px)', color: 'var(--fg-2)', lineHeight: '1.6', maxWidth: '600px' }}>
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Problem */}
      <section style={{ padding: 'clamp(48px,6vw,80px) 0', background: 'var(--bg-subtle)' }}>
        <div className="mx-auto px-5" style={{ maxWidth: '800px' }}>
          <h2 className="font-semibold mb-4" style={{ fontSize: 'clamp(20px,2.4vw,28px)', letterSpacing: '-0.025em', color: 'var(--fg)' }}>
            {t('problemTitle')}
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--fg-2)', lineHeight: '1.65' }}>
            {t('problemBody')}
          </p>
        </div>
      </section>

      {/* What we automate + What changes */}
      <section style={{ padding: 'clamp(64px,8vw,100px) 0', background: 'var(--bg)' }}>
        <div className="mx-auto px-5" style={{ maxWidth: '1100px' }}>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-semibold mb-6" style={{ fontSize: 'clamp(18px,2vw,24px)', letterSpacing: '-0.02em', color: 'var(--fg)' }}>
                {t('whatWeAutomate')}
              </h2>
              <ul className="flex flex-col gap-3">
                {automateItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--blue-50)', color: '#2563EB' }}>
                      <Check size={13} />
                    </span>
                    <span className="text-sm font-medium" style={{ color: 'var(--fg)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-semibold mb-6" style={{ fontSize: 'clamp(18px,2vw,24px)', letterSpacing: '-0.02em', color: 'var(--fg)' }}>
                {t('whatChanges')}
              </h2>
              <ul className="flex flex-col gap-3">
                {changesItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--blue-50)', color: '#2563EB' }}>
                      <Check size={13} />
                    </span>
                    <span className="text-sm font-medium" style={{ color: 'var(--fg)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: 'clamp(64px,8vw,100px) 0', background: 'var(--bg-subtle)' }}>
        <div className="mx-auto px-5" style={{ maxWidth: '1100px' }}>
          <h2 className="font-semibold mb-10" style={{ fontSize: 'clamp(22px,2.8vw,32px)', letterSpacing: '-0.03em', color: 'var(--fg)' }}>
            {t('processTitle')}
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {processSteps.map(({ num, title, desc }) => (
              <div key={num} className="p-6 rounded-[18px]" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}>
                <div className="font-bold mb-4" style={{ fontSize: '42px', letterSpacing: '-0.05em', lineHeight: '1', color: '#2563EB' }}>
                  {num}
                </div>
                <h3 className="font-semibold mb-2" style={{ fontSize: '16px', color: 'var(--fg)', letterSpacing: '-0.015em' }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-2)' }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Also from Aethos */}
      <section style={{ padding: 'clamp(48px,6vw,80px) 0', background: 'var(--bg)' }}>
        <div className="mx-auto px-5" style={{ maxWidth: '1100px' }}>
          <h2 className="font-semibold mb-6" style={{ fontSize: 'clamp(18px,2vw,22px)', color: 'var(--fg)', letterSpacing: '-0.02em' }}>
            {t('moreServicesTitle')}
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services/design"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium"
              style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)', color: 'var(--fg)' }}
            >
              <Palette size={14} /> {tNav('design')} <ArrowRight size={13} />
            </Link>
            <Link
              href="/services/development"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium"
              style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)', color: 'var(--fg)' }}
            >
              <Code2 size={14} /> {tNav('development')} <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(64px,8vw,100px) 0', background: '#0F172A' }}>
        <div className="mx-auto px-5 text-center" style={{ maxWidth: '640px' }}>
          <h2 className="font-semibold mb-4" style={{ fontSize: 'clamp(24px,3vw,36px)', letterSpacing: '-0.03em', color: '#F8FAFC' }}>
            {t('cta')}
          </h2>
          <p className="mb-7" style={{ fontSize: '17px', color: 'rgba(248,250,252,0.60)', lineHeight: '1.55' }}>
            {t('ctaSubtitle')}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded-xl text-sm text-white"
            style={{ background: '#2563EB', boxShadow: '0 4px 20px rgba(37,99,235,0.35)' }}
          >
            {t('cta')} <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  )
}
