import type { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { Mail, Clock, MessageCircle } from 'lucide-react'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'contact' })
  return { title: 'Contact', description: t('subtitle') }
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: 'contact' })
  const steps = t.raw('steps') as { step: string; title: string; desc: string }[]

  return (
    <>
      <Navbar />
      <main>
        <section style={{ padding: 'clamp(60px,8vw,100px) 0 clamp(64px,10vw,120px)' }}>
          <div className="mx-auto px-5" style={{ maxWidth: '1100px' }}>
            <div className="text-center mx-auto mb-14" style={{ maxWidth: '640px' }}>
              <span className="inline-block text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#6a3df5' }}>{t('eyebrow')}</span>
              <h1 className="font-semibold mb-4" style={{ fontSize: 'clamp(34px,5vw,56px)', letterSpacing: '-0.035em', lineHeight: '1.06', color: 'var(--fg)' }}>
                {t('h1')}
              </h1>
              <p style={{ fontSize: 'clamp(17px,1.4vw,19px)', color: 'var(--fg-2)', lineHeight: '1.55' }}>{t('subtitle')}</p>
            </div>

            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
              <ContactForm locale={locale} />

              <div className="flex flex-col gap-6">
                <div className="p-7 rounded-2xl" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
                  <h2 className="font-semibold mb-5" style={{ color: 'var(--fg)', fontSize: '17px' }}>{t('whatHappensTitle')}</h2>
                  <ol className="flex flex-col gap-5">
                    {steps.map(({ step, title, desc }) => (
                      <li key={step} className="flex gap-4">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5" style={{ background: 'var(--violet-100)', color: '#5a2dd8' }}>{step}</div>
                        <div>
                          <div className="text-sm font-semibold mb-0.5" style={{ color: 'var(--fg)' }}>{title}</div>
                          <div className="text-sm" style={{ color: 'var(--fg-2)' }}>{desc}</div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="p-7 rounded-2xl" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}>
                  <h2 className="font-semibold mb-5" style={{ color: 'var(--fg)', fontSize: '17px' }}>{t('otherWaysTitle')}</h2>
                  <div className="flex flex-col gap-3.5">
                    {[
                      { Icon: Mail,          label: t('emailLabel'),    value: 'hello@aethos.studio', href: 'mailto:hello@aethos.studio' },
                      { Icon: Clock,         label: t('responseLabel'), value: t('responseValue'),    href: null },
                      { Icon: MessageCircle, label: t('languagesLabel'),value: t('languagesValue'),   href: null },
                    ].map(({ Icon, label, value, href }) => (
                      <div key={label} className="flex items-center gap-3 text-sm" style={{ color: 'var(--fg-2)' }}>
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'var(--bg-subtle)', color: 'var(--fg-2)' }}><Icon size={16} /></div>
                        <div>
                          <div className="font-medium" style={{ color: 'var(--fg)' }}>{label}</div>
                          {href ? <a href={href} style={{ color: 'var(--fg-2)' }}>{value}</a> : <div>{value}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
