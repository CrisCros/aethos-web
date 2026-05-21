import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Link } from '@/i18n/navigation'
import { ArrowRight, Heart, Zap, Lock } from 'lucide-react'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'A small digital studio helping local businesses look more professional online and stop drowning in manual work. Based in Barcelona and Bucharest.',
}

const VALUES = [
  {
    Icon: Heart,
    title: 'We listen before we build',
    desc: 'Every business is different. We ask questions, understand your situation, and only suggest what will actually make a difference for you — not what\'s trendy.',
  },
  {
    Icon: Zap,
    title: 'Fast, practical, no fluff',
    desc: 'We move quickly and focus on what works. No 3-month discovery phases. No unnecessary complexity. You see results in weeks, not quarters.',
  },
  {
    Icon: Lock,
    title: 'You own everything, always',
    desc: 'Your website, your domain, your data. No lock-in, no hostage fees. If you ever want to leave, you take everything with you. No questions asked.',
  },
]

export default async function AboutPage({
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
        {/* Hero */}
        <section
          className="relative overflow-hidden"
          style={{ padding: 'clamp(60px,8vw,120px) 0' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(50% 50% at 20% 10%, rgba(139,106,255,.14) 0%, transparent 60%),
                radial-gradient(40% 40% at 85% 20%, rgba(236,72,153,.06) 0%, transparent 65%)
              `,
            }}
          />
          <div className="relative z-10 mx-auto px-5" style={{ maxWidth: '1240px' }}>
            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
              <div>
                <span className="inline-block text-xs font-medium uppercase tracking-widest mb-5" style={{ color: '#6a3df5' }}>
                  About Aethos
                </span>
                <h1
                  className="font-semibold mb-6"
                  style={{ fontSize: 'clamp(34px,5vw,56px)', letterSpacing: '-0.035em', lineHeight: '1.06', color: 'var(--fg)' }}
                >
                  We build websites and systems for businesses that have better things to do than manage spreadsheets.
                </h1>
                <p className="mb-6" style={{ fontSize: 'clamp(16px,1.3vw,18px)', color: 'var(--fg-2)', lineHeight: '1.6', maxWidth: '520px' }}>
                  Aethos is a small digital studio focused on one thing: helping real businesses look more professional online, get more clients, and stop losing time to repetitive manual work.
                </p>
                <p className="mb-8" style={{ fontSize: '16px', color: 'var(--fg-2)', lineHeight: '1.6', maxWidth: '520px' }}>
                  We&apos;re based in Barcelona and Bucharest, and we work with businesses across Spain, Romania and beyond. We speak English, Spanish, Romanian — and we speak business.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-white font-medium px-5 py-3 rounded-xl text-sm"
                  style={{ background: '#7c5cff', boxShadow: '0 4px 16px rgba(124,92,255,0.28)' }}
                >
                  Say hello <ArrowRight size={15} />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '2024', label: 'Founded' },
                  { value: '2',    label: 'People' },
                  { value: '2',    label: 'Countries' },
                  { value: '3',    label: 'Languages' },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="p-6 rounded-2xl"
                    style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
                  >
                    <div
                      className="text-4xl font-semibold mb-1"
                      style={{
                        letterSpacing: '-0.04em',
                        background: 'linear-gradient(135deg, #8b6aff 0%, #6a3df5 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >{value}</div>
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
                How we&apos;re different
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--fg-2)', lineHeight: '1.55' }}>
                We&apos;re not a large agency with account managers and project trackers. We&apos;re two people who care about building things that actually work.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {VALUES.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="p-7 rounded-2xl"
                  style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-xs)' }}
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-5" style={{ background: 'var(--violet-50)', color: '#5a2dd8' }}>
                    <Icon size={19} />
                  </div>
                  <h3 className="font-semibold mb-3" style={{ color: 'var(--fg)', fontSize: '17px' }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-2)' }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section style={{ padding: 'clamp(64px,10vw,112px) 0' }}>
          <div className="mx-auto px-5" style={{ maxWidth: '1240px' }}>
            <div className="text-center mx-auto mb-12" style={{ maxWidth: '500px' }}>
              <h2 className="font-semibold mb-4" style={{ fontSize: 'clamp(26px,3.5vw,40px)', letterSpacing: '-0.03em', color: 'var(--fg)' }}>
                The team
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--fg-2)', lineHeight: '1.55' }}>
                Small enough to actually know your project. Experienced enough to deliver what works.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-5" style={{ maxWidth: '720px', margin: '0 auto' }}>
              {[
                {
                  name: 'Dario',
                  role: 'Design & Strategy',
                  bio: 'Focused on websites that look great and work even better. I talk to clients, understand the business, and make sure every project makes sense.',
                  location: 'Barcelona, Spain',
                },
                {
                  name: 'Andrei',
                  role: 'Development & Systems',
                  bio: 'I build what Dario designs and add the systems that save time. Clean code, practical automations, reliable results.',
                  location: 'Bucharest, Romania',
                },
              ].map(({ name, role, bio, location }) => (
                <div
                  key={name}
                  className="flex-1 p-7 rounded-2xl"
                  style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-semibold mb-5"
                    style={{
                      background: 'linear-gradient(135deg, #ece8ff 0%, #d9d1ff 100%)',
                      color: '#5a2dd8',
                    }}
                  >
                    {name[0]}
                  </div>
                  <div className="font-semibold text-lg mb-0.5" style={{ color: 'var(--fg)' }}>{name}</div>
                  <div className="text-sm font-medium mb-1" style={{ color: '#6a3df5' }}>{role}</div>
                  <div className="text-xs mb-4" style={{ color: 'var(--fg-3)' }}>{location}</div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-2)' }}>{bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'clamp(48px,8vw,96px) 0', background: 'var(--bg-subtle)' }}>
          <div className="mx-auto px-5 text-center" style={{ maxWidth: '540px' }}>
            <h2 className="font-semibold mb-4" style={{ fontSize: 'clamp(24px,3vw,36px)', letterSpacing: '-0.03em', color: 'var(--fg)' }}>
              Want to work together?
            </h2>
            <p className="mb-8" style={{ fontSize: '16px', color: 'var(--fg-2)', lineHeight: '1.55' }}>
              Tell us about your business. A 30-minute call, no pressure, and we&apos;ll tell you honestly what we can do.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white font-medium px-6 py-3.5 rounded-xl text-sm"
              style={{ background: '#7c5cff', boxShadow: '0 4px 16px rgba(124,92,255,0.28)' }}
            >
              Get in touch <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
