import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Link } from '@/i18n/navigation'
import { TrendingUp, ArrowRight, Check } from 'lucide-react'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'Case studies from clinics, restaurants, real-estate agencies and small B2B businesses. Real results from real clients.',
}

const PROJECTS = [
  {
    tag: 'Dental clinic',
    title: 'Online booking that filled the calendar',
    client: 'Clínica Dental Salamanca',
    location: 'Madrid, Spain',
    challenge: 'All bookings were made by phone. The receptionist was spending 2+ hours a day managing the schedule. Clients called during off-hours and got no response.',
    solution: 'We built a modern website with an integrated booking system. Clients pick their preferred slot online — the calendar updates automatically.',
    results: [
      { label: 'Online bookings', value: '+212%' },
      { label: 'Admin time saved', value: '2h/day' },
      { label: 'Response time', value: 'Instant' },
    ],
    what: ['Website redesign', 'Online booking system', 'Google Business optimization'],
    gradientClass: 'clinic',
  },
  {
    tag: 'Restaurant',
    title: 'A trattoria that people can actually find',
    client: 'Bella Vista',
    location: 'Barcelona, Spain',
    challenge: 'Great food, terrible online presence. Hidden on page 3 of Google. No dedicated booking flow. New customers couldn\'t find them even when searching directly.',
    solution: 'New website, embedded reservation system, complete Google Business overhaul and a local SEO strategy focused on the right neighborhoods.',
    results: [
      { label: 'Search ranking', value: 'Top 3' },
      { label: 'Monthly new covers', value: '+85' },
      { label: 'Online reservations', value: '+340%' },
    ],
    what: ['Website & brand', 'Reservation system', 'Local SEO'],
    gradientClass: 'restaurant',
  },
  {
    tag: 'Real estate',
    title: 'One organized inbox for every lead',
    client: 'Casa Plus',
    location: 'Valencia, Spain',
    challenge: 'Leads were coming from 5 different channels: email, WhatsApp, phone, Idealista, their website. Agents had no visibility. Leads slipped through constantly.',
    solution: 'A single smart contact form that captures all requests, routes them to the right agent, and sends an automatic first response. All organized in one view.',
    results: [
      { label: 'Leads dropped', value: '0' },
      { label: 'Response time', value: '< 5 min' },
      { label: 'Follow-up rate', value: '100%' },
    ],
    what: ['Lead capture system', 'Automated follow-ups', 'Agent dashboard'],
    gradientClass: 'realestate',
  },
  {
    tag: 'Construction',
    title: 'Quotes and clients without the spreadsheet chaos',
    client: 'Reforma Express',
    location: 'Bucharest, Romania',
    challenge: 'Client info scattered across phone notes and WhatsApp. No way to know the status of open quotes. Projects started without signed-off agreements.',
    solution: 'A simple job management system and a professional landing page for their renovation services. Quote requests go directly to a structured form.',
    results: [
      { label: 'Quote requests', value: '+180%' },
      { label: 'Admin time saved', value: '5h/week' },
      { label: 'Lost quotes', value: '0' },
    ],
    what: ['Service landing page', 'Quote request system', 'Job tracking dashboard'],
    gradientClass: 'construction',
  },
  {
    tag: 'B2B Services',
    title: 'A website that generates leads, not just traffic',
    client: 'ConsultPro',
    location: 'Cluj-Napoca, Romania',
    challenge: 'High traffic from existing referral network, but no way to capture visitors who weren\'t already warm leads. The website had no clear call-to-action.',
    solution: 'Redesigned website with a clear value proposition, a high-converting contact form, and a simple CRM to manage the incoming pipeline.',
    results: [
      { label: 'Lead conversion', value: '+3.2x' },
      { label: 'Qualified leads/month', value: '+24' },
      { label: 'Response time', value: 'Same day' },
    ],
    what: ['Website redesign', 'Lead capture & CRM', 'Email automations'],
    gradientClass: 'b2b',
  },
]

const GRADIENT_BG: Record<string, string> = {
  clinic:       'linear-gradient(135deg, #ece8ff 0%, #d9d1ff 100%)',
  restaurant:   'linear-gradient(135deg, #fce7f3 0%, #ddd6fe 100%)',
  realestate:   'linear-gradient(160deg, #f7f7fa 0%, #ece8ff 100%)',
  construction: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
  b2b:          'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
}

export default async function WorkPage({
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
                radial-gradient(50% 50% at 20% 10%, rgba(139,106,255,.14) 0%, transparent 60%),
                radial-gradient(40% 40% at 85% 20%, rgba(236,72,153,.06) 0%, transparent 65%)
              `,
            }}
          />
          <div className="relative z-10 mx-auto px-5 text-center" style={{ maxWidth: '720px' }}>
            <span className="inline-block text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#6a3df5' }}>
              Case studies
            </span>
            <h1
              className="font-semibold mb-6"
              style={{ fontSize: 'clamp(36px,5vw,60px)', letterSpacing: '-0.035em', lineHeight: '1.05', color: 'var(--fg)' }}
            >
              Real businesses. Real results.
            </h1>
            <p style={{ fontSize: 'clamp(17px,1.4vw,19px)', color: 'var(--fg-2)', lineHeight: '1.55', maxWidth: '560px', margin: '0 auto' }}>
              We work with small businesses across Spain and Romania. Here&apos;s what changes when they get the right tools.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section style={{ padding: 'clamp(32px,5vw,64px) 0 clamp(64px,10vw,128px)' }}>
          <div className="mx-auto px-5" style={{ maxWidth: '1240px' }}>
            <div className="flex flex-col gap-6">
              {PROJECTS.map(({ tag, title, client, location, challenge, solution, results, what, gradientClass }) => (
                <article
                  key={title}
                  className="rounded-2xl overflow-hidden"
                  style={{ border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
                >
                  {/* Header strip */}
                  <div className="h-24 flex items-center px-8" style={{ background: GRADIENT_BG[gradientClass] }}>
                    <div>
                      <span
                        className="inline-block text-[11px] font-medium px-2.5 py-1 rounded-full mb-2"
                        style={{ background: 'rgba(255,255,255,0.7)', color: 'var(--fg-2)' }}
                      >{tag}</span>
                      <h2 className="text-xl font-semibold" style={{ color: 'var(--fg)', letterSpacing: '-0.02em' }}>{title}</h2>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="grid md:grid-cols-[2fr_1.2fr] gap-0" style={{ background: 'var(--bg-elevated)' }}>
                    {/* Left */}
                    <div className="p-7 md:border-r" style={{ borderColor: 'var(--border)' }}>
                      <div className="flex items-center gap-3 mb-6">
                        <div>
                          <div className="font-semibold text-sm" style={{ color: 'var(--fg)' }}>{client}</div>
                          <div className="text-xs" style={{ color: 'var(--fg-3)' }}>{location}</div>
                        </div>
                      </div>

                      <div className="mb-5">
                        <div className="text-xs font-medium uppercase tracking-wider mb-2" style={{ color: 'var(--error-500)' }}>The challenge</div>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-2)' }}>{challenge}</p>
                      </div>

                      <div>
                        <div className="text-xs font-medium uppercase tracking-wider mb-2" style={{ color: '#6a3df5' }}>What we built</div>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--fg-2)' }}>{solution}</p>
                        <div className="flex flex-wrap gap-2">
                          {what.map((w) => (
                            <span key={w} className="text-xs px-3 py-1.5 rounded-full" style={{ background: 'var(--bg-subtle)', color: 'var(--fg-2)', border: '1px solid var(--border)' }}>{w}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: results */}
                    <div className="p-7 flex flex-col justify-between">
                      <div>
                        <div className="text-xs font-medium uppercase tracking-wider mb-5" style={{ color: 'var(--success-500)' }}>Results</div>
                        <div className="flex flex-col gap-4">
                          {results.map(({ label, value }) => (
                            <div key={label}>
                              <div
                                className="text-3xl font-semibold mb-0.5"
                                style={{
                                  letterSpacing: '-0.03em',
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
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: 'clamp(48px,8vw,96px) 0', background: 'var(--bg-subtle)' }}>
          <div className="mx-auto px-5 text-center" style={{ maxWidth: '640px' }}>
            <h2 className="font-semibold mb-4" style={{ fontSize: 'clamp(26px,3.5vw,40px)', letterSpacing: '-0.03em', color: 'var(--fg)' }}>
              Your business could be next.
            </h2>
            <p className="mb-8" style={{ fontSize: '16px', color: 'var(--fg-2)', lineHeight: '1.55' }}>
              Tell us about your business and we&apos;ll show you what&apos;s possible for where you are right now.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white font-medium px-6 py-3.5 rounded-xl text-sm"
              style={{ background: '#7c5cff', boxShadow: '0 4px 16px rgba(124,92,255,0.28)' }}
            >
              Start a project <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
