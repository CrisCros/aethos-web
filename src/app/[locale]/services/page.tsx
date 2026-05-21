import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Link } from '@/i18n/navigation'
import {
  Layout, FileText, Search, MessageCircle,
  Database, Zap, BarChart2, ArrowRight, Check,
} from 'lucide-react'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Web design, landing pages, SEO, smart contact forms, lead organization, automations and dashboards — practical tools for growing businesses.',
}

const SERVICES = [
  {
    Icon: Layout,
    title: 'Web Design',
    problem: 'Your current website looks old, loads slowly, or doesn\'t represent your business well.',
    solution: 'A fast, modern website that reflects your business and gives visitors a reason to contact you.',
    outcomes: ['Credible first impression', 'Mobile-friendly and fast', 'Clear call-to-action on every page'],
  },
  {
    Icon: FileText,
    title: 'Landing Pages',
    problem: 'You run promotions, ads or campaigns but have nowhere dedicated to send people.',
    solution: 'Purpose-built pages for specific offers, services or campaigns — designed to convert.',
    outcomes: ['More leads from every campaign', 'Clear offer and simple form', 'Trackable results'],
  },
  {
    Icon: Search,
    title: 'SEO & Local Search',
    problem: 'People in your area are searching for what you do — but they\'re finding your competitors instead.',
    solution: 'We help your business show up in local search results and Google Maps for the right keywords.',
    outcomes: ['More organic traffic', 'Google Business Profile optimization', 'Long-term visibility'],
  },
  {
    Icon: MessageCircle,
    title: 'Smart Contact Forms',
    problem: 'Inquiries get lost across WhatsApp, email and Instagram. Nobody knows who replied to what.',
    solution: 'One smart form that routes requests to the right place and sends an instant acknowledgement.',
    outcomes: ['Every inquiry captured', 'Instant automatic reply', 'Team notified immediately'],
  },
  {
    Icon: Database,
    title: 'Lead Organization',
    problem: 'Your client list lives in a WhatsApp group, three spreadsheets, and someone\'s memory.',
    solution: 'A simple, organized view of every lead and client — who they are, where they came from, what\'s next.',
    outcomes: ['Never lose a client again', 'Clear follow-up pipeline', 'Works on mobile'],
  },
  {
    Icon: Zap,
    title: 'Practical Automations',
    problem: 'You spend hours confirming bookings, sending reminders, and answering the same questions.',
    solution: 'Quiet systems that handle the repetitive stuff automatically — so you don\'t have to.',
    outcomes: ['Save hours every week', 'Consistent client communication', 'Runs while you work'],
  },
  {
    Icon: BarChart2,
    title: 'Business Dashboards',
    problem: 'You don\'t know how many leads you have, where they come from, or what\'s actually working.',
    solution: 'A simple overview of what matters: leads, bookings, follow-ups — all in one screen.',
    outcomes: ['See your business at a glance', 'Know what\'s working', 'Make better decisions faster'],
  },
]

const HOW_WE_WORK = [
  { step: '01', title: 'We listen first', desc: 'A 30-minute conversation to understand your business, your problems and what would actually make a difference.' },
  { step: '02', title: 'We build what fits', desc: 'Not a standard template or a bloated system. Only what your business needs right now.' },
  { step: '03', title: 'You launch and grow', desc: 'We hand everything over clearly. You own it completely. We stay available when you need us.' },
]

export default async function ServicesPage({
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
          style={{ padding: 'clamp(60px,8vw,120px) 0 clamp(40px,6vw,80px)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(50% 50% at 20% 10%, rgba(139,106,255,.15) 0%, transparent 60%),
                radial-gradient(40% 40% at 85% 20%, rgba(236,72,153,.07) 0%, transparent 65%)
              `,
            }}
          />
          <div className="relative z-10 mx-auto px-5 text-center" style={{ maxWidth: '880px' }}>
            <span className="inline-block text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#6a3df5' }}>
              Our services
            </span>
            <h1
              className="font-semibold mb-6"
              style={{ fontSize: 'clamp(36px,5vw,60px)', letterSpacing: '-0.035em', lineHeight: '1.05', color: 'var(--fg)' }}
            >
              Everything your business needs to look good, get found, and run smoothly.
            </h1>
            <p style={{ fontSize: 'clamp(17px,1.4vw,19px)', color: 'var(--fg-2)', lineHeight: '1.55', maxWidth: '640px', margin: '0 auto 32px' }}>
              No jargon. No unnecessary systems. We focus on what will actually move the needle for your business right now.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white font-medium px-6 py-3.5 rounded-xl text-sm"
              style={{ background: '#7c5cff', boxShadow: '0 4px 16px rgba(124,92,255,0.28)' }}
            >
              Talk to us about your business <ArrowRight size={15} />
            </Link>
          </div>
        </section>

        {/* Services list */}
        <section style={{ padding: 'clamp(48px,8vw,96px) 0' }}>
          <div className="mx-auto px-5" style={{ maxWidth: '1240px' }}>
            <div className="flex flex-col gap-5">
              {SERVICES.map(({ Icon, title, problem, solution, outcomes }, i) => (
                <article
                  key={title}
                  className="grid md:grid-cols-[1fr_1fr_1fr] gap-6 p-7 rounded-2xl"
                  style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-xs)' }}
                >
                  {/* Left: service name */}
                  <div className="flex flex-col gap-3">
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl self-start" style={{ background: 'var(--violet-50)', color: '#5a2dd8' }}>
                      <Icon size={20} />
                    </div>
                    <h2 className="text-xl font-semibold" style={{ color: 'var(--fg)', letterSpacing: '-0.02em' }}>{title}</h2>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-2)' }}>
                      <span className="font-medium" style={{ color: 'var(--fg)' }}>The problem: </span>
                      {problem}
                    </p>
                  </div>

                  {/* Middle: solution */}
                  <div className="flex flex-col justify-start">
                    <div className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: '#6a3df5' }}>What we do</div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-2)' }}>{solution}</p>
                  </div>

                  {/* Right: outcomes */}
                  <div className="flex flex-col justify-start">
                    <div className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: 'var(--fg-3)' }}>Business outcomes</div>
                    <ul className="flex flex-col gap-2">
                      {outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2 text-sm" style={{ color: 'var(--fg-2)' }}>
                          <Check size={14} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--success-500)' }} />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How we work */}
        <section style={{ padding: 'clamp(48px,8vw,96px) 0', background: 'var(--bg-subtle)' }}>
          <div className="mx-auto px-5" style={{ maxWidth: '1240px' }}>
            <div className="text-center mx-auto mb-12" style={{ maxWidth: '600px' }}>
              <h2 className="font-semibold mb-4" style={{ fontSize: 'clamp(24px,3vw,36px)', letterSpacing: '-0.03em', color: 'var(--fg)' }}>
                How we work
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--fg-2)', lineHeight: '1.55' }}>
                Simple, fast and focused on your business — not on complicated processes.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {HOW_WE_WORK.map(({ step, title, desc }) => (
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
            <h2 className="font-semibold mb-4" style={{ fontSize: 'clamp(26px,3.5vw,40px)', letterSpacing: '-0.03em', color: 'var(--fg)' }}>
              Not sure which services you need?
            </h2>
            <p className="mb-8" style={{ fontSize: '16px', color: 'var(--fg-2)', lineHeight: '1.55' }}>
              Tell us about your business and we&apos;ll suggest exactly what makes sense for where you are right now.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white font-medium px-6 py-3.5 rounded-xl text-sm"
              style={{ background: '#7c5cff', boxShadow: '0 4px 16px rgba(124,92,255,0.28)' }}
            >
              Start a conversation <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
