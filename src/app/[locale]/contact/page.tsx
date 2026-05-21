import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { Mail, MessageCircle, Clock } from 'lucide-react'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Tell us about your business. A 30-minute call, no pitch, no pressure. We listen and tell you honestly how we can help.',
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Navbar />
      <main>
        <section style={{ padding: 'clamp(60px,8vw,100px) 0 clamp(64px,10vw,120px)' }}>
          <div className="mx-auto px-5" style={{ maxWidth: '1100px' }}>
            {/* Header */}
            <div className="text-center mx-auto mb-14" style={{ maxWidth: '640px' }}>
              <span className="inline-block text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#6a3df5' }}>
                Get in touch
              </span>
              <h1
                className="font-semibold mb-4"
                style={{ fontSize: 'clamp(34px,5vw,56px)', letterSpacing: '-0.035em', lineHeight: '1.06', color: 'var(--fg)' }}
              >
                Let&apos;s talk about your business.
              </h1>
              <p style={{ fontSize: 'clamp(17px,1.4vw,19px)', color: 'var(--fg-2)', lineHeight: '1.55' }}>
                Tell us what you&apos;re working on. We&apos;ll ask a few questions and tell you honestly whether we can help.
              </p>
            </div>

            {/* Two-column layout */}
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
              {/* Form */}
              <ContactForm />

              {/* Right: info */}
              <div className="flex flex-col gap-6">
                <div className="p-7 rounded-2xl" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
                  <h2 className="font-semibold mb-5" style={{ color: 'var(--fg)', fontSize: '17px' }}>What happens next</h2>
                  <ol className="flex flex-col gap-5">
                    {[
                      { step: '1', title: 'We read your message', desc: 'Same day, usually within a few hours.' },
                      { step: '2', title: '30-minute call', desc: 'We listen to your situation, ask a few questions. No sales pitch.' },
                      { step: '3', title: 'We send a plan', desc: 'A clear proposal within 48 hours — what we\'d do, how long, and what it costs.' },
                    ].map(({ step, title, desc }) => (
                      <li key={step} className="flex gap-4">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5"
                          style={{ background: 'var(--violet-100)', color: '#5a2dd8' }}
                        >{step}</div>
                        <div>
                          <div className="text-sm font-semibold mb-0.5" style={{ color: 'var(--fg)' }}>{title}</div>
                          <div className="text-sm" style={{ color: 'var(--fg-2)' }}>{desc}</div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="p-7 rounded-2xl" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}>
                  <h2 className="font-semibold mb-5" style={{ color: 'var(--fg)', fontSize: '17px' }}>Other ways to reach us</h2>
                  <div className="flex flex-col gap-3.5">
                    <a
                      href="mailto:hello@aethos.studio"
                      className="flex items-center gap-3 text-sm"
                      style={{ color: 'var(--fg-2)' }}
                    >
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'var(--bg-subtle)', color: 'var(--fg-2)' }}>
                        <Mail size={16} />
                      </div>
                      <div>
                        <div className="font-medium" style={{ color: 'var(--fg)' }}>Email</div>
                        <div>hello@aethos.studio</div>
                      </div>
                    </a>
                    <div className="flex items-center gap-3 text-sm" style={{ color: 'var(--fg-2)' }}>
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'var(--bg-subtle)', color: 'var(--fg-2)' }}>
                        <Clock size={16} />
                      </div>
                      <div>
                        <div className="font-medium" style={{ color: 'var(--fg)' }}>Response time</div>
                        <div>Same day, usually within a few hours</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm" style={{ color: 'var(--fg-2)' }}>
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'var(--bg-subtle)', color: 'var(--fg-2)' }}>
                        <MessageCircle size={16} />
                      </div>
                      <div>
                        <div className="font-medium" style={{ color: 'var(--fg)' }}>Languages</div>
                        <div>English · Spanish · Romanian</div>
                      </div>
                    </div>
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
