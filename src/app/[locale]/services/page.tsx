import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { ArrowRight, Palette, Code2, Zap, Check } from 'lucide-react'
import { buildAlternates } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.services' })

  return {
    title: { absolute: t('title') },
    description: t('description'),
    alternates: buildAlternates(locale, '/services'),
    openGraph: { title: t('title'), description: t('description') },
    twitter: { title: t('title'), description: t('description') },
  }
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  void params
  const t = await getTranslations('services')

  const pillars = [
    { key: 'design',      Icon: Palette, href: '/services/design',      title: t('pillar1Title'), text: t('pillar1Text'), cta: t('pillar1Cta') },
    { key: 'development', Icon: Code2,   href: '/services/development', title: t('pillar2Title'), text: t('pillar2Text'), cta: t('pillar2Cta') },
    { key: 'automation',  Icon: Zap,     href: '/services/automation',  title: t('pillar3Title'), text: t('pillar3Text'), cta: t('pillar3Cta') },
  ]

  const includedItems = t.raw('includedItems') as string[]

  return (
    <main id="main-content">
      {/* Hero */}
      <section style={{ padding: 'clamp(80px,12vw,140px) 0 clamp(64px,10vw,100px)', background: 'var(--bg)' }}>
        <div className="mx-auto px-5 text-center" style={{ maxWidth: '800px' }}>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: '#2563EB' }}>
            {t('eyebrow')}
          </span>
          <h1 className="font-semibold mb-5" style={{ fontSize: 'clamp(32px,5vw,56px)', letterSpacing: '-0.035em', lineHeight: '1.08', color: 'var(--fg)' }}>
            {t('h1')}
          </h1>
          <p className="mx-auto mb-8" style={{ fontSize: 'clamp(16px,1.3vw,18px)', color: 'var(--fg-2)', maxWidth: '600px', lineHeight: '1.6' }}>
            {t('subtitle')}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded-xl text-sm text-white"
            style={{ background: '#2563EB', boxShadow: '0 4px 20px rgba(37,99,235,0.30)' }}
          >
            {t('ctaHero')} <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Pillars */}
      <section style={{ padding: 'clamp(64px,8vw,100px) 0', background: 'var(--bg-subtle)' }}>
        <div className="mx-auto px-5" style={{ maxWidth: '1240px' }}>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map(({ key, Icon, href, title, text, cta }) => (
              <div
                key={key}
                className="flex flex-col rounded-[20px] p-8"
                style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'var(--blue-50)', color: '#2563EB' }}
                >
                  <Icon size={22} />
                </div>
                <h2 className="font-semibold mb-3" style={{ fontSize: '20px', color: 'var(--fg)', letterSpacing: '-0.02em' }}>
                  {title}
                </h2>
                <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: 'var(--fg-2)' }}>
                  {text}
                </p>
                <Link
                  href={href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold"
                  style={{ color: '#2563EB' }}
                >
                  {cta} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section style={{ padding: 'clamp(64px,8vw,100px) 0', background: 'var(--bg)' }}>
        <div className="mx-auto px-5" style={{ maxWidth: '900px' }}>
          <h2 className="font-semibold text-center mb-10" style={{ fontSize: 'clamp(24px,3vw,36px)', letterSpacing: '-0.03em', color: 'var(--fg)' }}>
            {t('whatIncluded')}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {includedItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border)' }}
              >
                <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--blue-50)', color: '#2563EB' }}>
                  <Check size={13} />
                </span>
                <span className="text-sm font-medium" style={{ color: 'var(--fg)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not sure CTA */}
      <section style={{ padding: 'clamp(64px,8vw,100px) 0', background: 'var(--bg-subtle)' }}>
        <div className="mx-auto px-5 text-center" style={{ maxWidth: '640px' }}>
          <h2 className="font-semibold mb-4" style={{ fontSize: 'clamp(22px,2.8vw,32px)', letterSpacing: '-0.03em', color: 'var(--fg)' }}>
            {t('notSure.title')}
          </h2>
          <p className="mb-7" style={{ fontSize: '17px', color: 'var(--fg-2)', lineHeight: '1.55' }}>
            {t('notSure.subtitle')}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded-xl text-sm text-white"
            style={{ background: '#2563EB', boxShadow: '0 4px 20px rgba(37,99,235,0.25)' }}
          >
            {t('notSure.cta')} <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  )
}
