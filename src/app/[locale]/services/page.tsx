import type { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Link } from '@/i18n/navigation'
import { Layout, FileText, Search, MessageCircle, Database, Zap, BarChart2, ArrowRight, Check } from 'lucide-react'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'services' })
  return { title: 'Services', description: t('subtitle') }
}

const SERVICE_ICONS = [Layout, FileText, Search, MessageCircle, Database, Zap, BarChart2]

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: 'services' })
  const items = t.raw('items') as { title: string; problem: string; solution: string; outcomes: string[] }[]
  const steps = t.raw('howWeWork.steps') as { step: string; title: string; desc: string }[]

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden" style={{ padding: 'clamp(60px,8vw,120px) 0 clamp(40px,6vw,80px)' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(50% 50% at 20% 10%, rgba(139,106,255,.15) 0%, transparent 60%),radial-gradient(40% 40% at 85% 20%, rgba(236,72,153,.07) 0%, transparent 65%)` }} />
          <div className="relative z-10 mx-auto px-5 text-center" style={{ maxWidth: '880px' }}>
            <span className="inline-block text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#6a3df5' }}>{t('eyebrow')}</span>
            <h1 className="font-semibold mb-6" style={{ fontSize: 'clamp(36px,5vw,60px)', letterSpacing: '-0.035em', lineHeight: '1.05', color: 'var(--fg)' }}>
              {t('h1')}
            </h1>
            <p style={{ fontSize: 'clamp(17px,1.4vw,19px)', color: 'var(--fg-2)', lineHeight: '1.55', maxWidth: '640px', margin: '0 auto 32px' }}>
              {t('subtitle')}
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-white font-medium px-6 py-3.5 rounded-xl text-sm" style={{ background: '#7c5cff', boxShadow: '0 4px 16px rgba(124,92,255,0.28)' }}>
              {t('ctaHero')} <ArrowRight size={15} />
            </Link>
          </div>
        </section>

        {/* Services list */}
        <section style={{ padding: 'clamp(48px,8vw,96px) 0' }}>
          <div className="mx-auto px-5" style={{ maxWidth: '1240px' }}>
            <div className="flex flex-col gap-5">
              {items.map(({ title, problem, solution, outcomes }, i) => {
                const Icon = SERVICE_ICONS[i]
                return (
                  <article key={title} className="grid md:grid-cols-[1fr_1fr_1fr] gap-6 p-7 rounded-2xl" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-xs)' }}>
                    <div className="flex flex-col gap-3">
                      <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl self-start" style={{ background: 'var(--violet-50)', color: '#5a2dd8' }}><Icon size={20} /></div>
                      <h2 className="text-xl font-semibold" style={{ color: 'var(--fg)', letterSpacing: '-0.02em' }}>{title}</h2>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-2)' }}>
                        <span className="font-medium" style={{ color: 'var(--fg)' }}>{t('problemLabel')}: </span>{problem}
                      </p>
                    </div>
                    <div>
                      <div className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: '#6a3df5' }}>{t('whatWeDoLabel')}</div>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-2)' }}>{solution}</p>
                    </div>
                    <div>
                      <div className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: 'var(--fg-3)' }}>{t('outcomesLabel')}</div>
                      <ul className="flex flex-col gap-2">
                        {outcomes.map((o) => (
                          <li key={o} className="flex items-start gap-2 text-sm" style={{ color: 'var(--fg-2)' }}>
                            <Check size={14} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--success-500)' }} />{o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* How we work */}
        <section style={{ padding: 'clamp(48px,8vw,96px) 0', background: 'var(--bg-subtle)' }}>
          <div className="mx-auto px-5" style={{ maxWidth: '1240px' }}>
            <div className="text-center mx-auto mb-12" style={{ maxWidth: '600px' }}>
              <h2 className="font-semibold mb-4" style={{ fontSize: 'clamp(24px,3vw,36px)', letterSpacing: '-0.03em', color: 'var(--fg)' }}>{t('howWeWork.title')}</h2>
              <p style={{ fontSize: '16px', color: 'var(--fg-2)', lineHeight: '1.55' }}>{t('howWeWork.subtitle')}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map(({ step, title, desc }) => (
                <div key={step} className="p-6 rounded-2xl" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}>
                  <div className="text-3xl font-bold mb-4" style={{ color: 'var(--violet-200)', letterSpacing: '-0.03em', fontFamily: 'ui-monospace, monospace' }}>{step}</div>
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--fg)', fontSize: '17px' }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-2)' }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'clamp(64px,10vw,100px) 0' }}>
          <div className="mx-auto px-5 text-center" style={{ maxWidth: '640px' }}>
            <h2 className="font-semibold mb-4" style={{ fontSize: 'clamp(26px,3.5vw,40px)', letterSpacing: '-0.03em', color: 'var(--fg)' }}>{t('notSure.title')}</h2>
            <p className="mb-8" style={{ fontSize: '16px', color: 'var(--fg-2)', lineHeight: '1.55' }}>{t('notSure.subtitle')}</p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-white font-medium px-6 py-3.5 rounded-xl text-sm" style={{ background: '#7c5cff', boxShadow: '0 4px 16px rgba(124,92,255,0.28)' }}>
              {t('notSure.cta')} <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
