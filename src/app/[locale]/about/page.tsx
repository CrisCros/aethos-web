import type { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Link } from '@/i18n/navigation'
import { ArrowRight, Heart, Zap, Lock } from 'lucide-react'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })
  return {
    title: 'About',
    description: t('body1'),
  }
}

const VALUE_ICONS = [Heart, Zap, Lock]

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: 'about' })
  const values = t.raw('approach.values') as { title: string; desc: string }[]
  const statItems = [
    { value: '2024', label: t('stats.founded') },
    { value: '2',    label: t('stats.countries') },
    { value: '3',    label: t('stats.languages') },
  ]

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden" style={{ padding: 'clamp(60px,8vw,120px) 0' }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            background: `radial-gradient(50% 50% at 20% 10%, rgba(139,106,255,.14) 0%, transparent 60%),radial-gradient(40% 40% at 85% 20%, rgba(236,72,153,.06) 0%, transparent 65%)`,
          }} />
          <div className="relative z-10 mx-auto px-5" style={{ maxWidth: '1240px' }}>
            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
              <div>
                <span className="inline-block text-xs font-medium uppercase tracking-widest mb-5" style={{ color: '#6a3df5' }}>
                  {t('eyebrow')}
                </span>
                <h1 className="font-semibold mb-6" style={{ fontSize: 'clamp(34px,5vw,56px)', letterSpacing: '-0.035em', lineHeight: '1.06', color: 'var(--fg)' }}>
                  {t('h1')}
                </h1>
                <p className="mb-5" style={{ fontSize: 'clamp(16px,1.3vw,18px)', color: 'var(--fg-2)', lineHeight: '1.6', maxWidth: '520px' }}>
                  {t('body1')}
                </p>
                <p className="mb-8" style={{ fontSize: '16px', color: 'var(--fg-2)', lineHeight: '1.6', maxWidth: '520px' }}>
                  {t('body2')}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-white font-medium px-5 py-3 rounded-xl text-sm"
                  style={{ background: '#7c5cff', boxShadow: '0 4px 16px rgba(124,92,255,0.28)' }}
                >
                  {t('ctaButton')} <ArrowRight size={15} />
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {statItems.map(({ value, label }) => (
                  <div key={label} className="p-6 rounded-2xl" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
                    <div className="text-4xl font-semibold mb-1" style={{ letterSpacing: '-0.04em', background: 'linear-gradient(135deg, #8b6aff 0%, #6a3df5 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{value}</div>
                    <div className="text-sm" style={{ color: 'var(--fg-2)' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our approach */}
        <section style={{ padding: 'clamp(64px,10vw,112px) 0', background: 'var(--bg-subtle)' }}>
          <div className="mx-auto px-5" style={{ maxWidth: '1240px' }}>
            <div className="text-center mx-auto mb-12" style={{ maxWidth: '600px' }}>
              <h2 className="font-semibold mb-4" style={{ fontSize: 'clamp(26px,3.5vw,40px)', letterSpacing: '-0.03em', color: 'var(--fg)' }}>
                {t('approach.title')}
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--fg-2)', lineHeight: '1.55' }}>{t('approach.subtitle')}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {values.map(({ title, desc }, i) => {
                const Icon = VALUE_ICONS[i]
                return (
                  <div key={title} className="p-7 rounded-2xl" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-xs)' }}>
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-5" style={{ background: 'var(--violet-50)', color: '#5a2dd8' }}>
                      <Icon size={19} />
                    </div>
                    <h3 className="font-semibold mb-3" style={{ color: 'var(--fg)', fontSize: '17px' }}>{title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-2)' }}>{desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'clamp(48px,8vw,96px) 0' }}>
          <div className="mx-auto px-5 text-center" style={{ maxWidth: '540px' }}>
            <h2 className="font-semibold mb-4" style={{ fontSize: 'clamp(24px,3vw,36px)', letterSpacing: '-0.03em', color: 'var(--fg)' }}>
              {t('cta.title')}
            </h2>
            <p className="mb-8" style={{ fontSize: '16px', color: 'var(--fg-2)', lineHeight: '1.55' }}>
              {t('cta.subtitle')}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white font-medium px-6 py-3.5 rounded-xl text-sm"
              style={{ background: '#7c5cff', boxShadow: '0 4px 16px rgba(124,92,255,0.28)' }}
            >
              {t('cta.button')} <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
