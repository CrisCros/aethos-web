'use client'

import { motion } from 'framer-motion'
import { EASE } from '@/lib/motion'
import { TrendingUp, ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'

const PROJECTS = [
  {
    tag: 'Clinic',
    title: 'Online booking that filled the calendar',
    org: 'Clínica Dental Salamanca',
    desc: 'Replaced a phone-only booking process with a 30-second online flow. Now the calendar books itself.',
    stat: '+212% online bookings',
    preview: 'clinic',
  },
  {
    tag: 'Restaurant',
    title: 'A trattoria worth finding on Google',
    org: 'Bella Vista',
    desc: 'New website, smart booking system, local SEO. People now find them when they search "pasta near me".',
    stat: 'Top 3 local search results',
    preview: 'restaurant',
  },
  {
    tag: 'Real estate',
    title: 'One place for every client request',
    org: 'Casa Plus',
    desc: 'Listings, inquiries and viewings organized in one place. No more losing leads in WhatsApp threads.',
    stat: '0 leads dropped in 6 months',
    preview: 'realestate',
  },
] as const

const PREVIEW_BG: Record<string, string> = {
  clinic:     'linear-gradient(135deg, #ece8ff 0%, #d9d1ff 100%)',
  restaurant: 'linear-gradient(135deg, #fce7f3 0%, #ddd6fe 100%)',
  realestate: 'linear-gradient(160deg, #f7f7fa 0%, #ece8ff 100%)',
}

function ClinicMock() {
  return (
    <div className="w-56 rounded-xl p-3.5" style={{ background: 'var(--bg-elevated)', boxShadow: 'var(--shadow-md)' }}>
      <div className="h-2 rounded w-2/3 mb-1.5" style={{ background: '#beb0ff' }} />
      <div className="h-1.5 rounded w-11/12 mb-2" style={{ background: '#d9d1ff' }} />
      <div className="inline-block text-white text-[10px] font-medium px-3 py-1 rounded mb-3" style={{ background: '#7c5cff' }}>Book in 30 seconds</div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="aspect-square rounded" style={{ background: i === 3 ? '#7c5cff' : 'var(--bg-muted)' }} />
        ))}
      </div>
    </div>
  )
}

function RestaurantMock() {
  return (
    <div className="w-56 rounded-xl overflow-hidden" style={{ background: 'var(--bg-elevated)', boxShadow: 'var(--shadow-md)' }}>
      <div className="h-20" style={{ background: 'linear-gradient(135deg, #f59e0b, #ec4899)', opacity: 0.65 }} />
      <div className="px-3 py-2">
        <div className="h-2 rounded w-3/5 mb-1" style={{ background: 'var(--border-strong)' }} />
        <div className="text-[11px]" style={{ color: '#f59e0b' }}>★★★★★</div>
      </div>
    </div>
  )
}

function RealestateMock() {
  return (
    <div className="w-60 rounded-xl p-3 flex flex-col gap-1.5" style={{ background: 'var(--bg-elevated)', boxShadow: 'var(--shadow-md)' }}>
      {[{ tag: 'New', muted: false }, { tag: 'Viewed', muted: true }, { tag: 'Closed', muted: true }].map((r) => (
        <div key={r.tag} className="flex items-center gap-2 px-2 py-1.5 rounded" style={{ background: 'var(--bg-subtle)' }}>
          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#7c5cff' }} />
          <div className="flex-1 h-1.5 rounded" style={{ background: 'var(--border)' }} />
          <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full"
            style={r.muted ? { background: 'var(--bg-muted)', color: 'var(--fg-3)' } : { background: 'var(--violet-100)', color: '#5a2dd8' }}
          >{r.tag}</span>
        </div>
      ))}
    </div>
  )
}

const MOCKS: Record<string, React.FC> = {
  clinic: ClinicMock,
  restaurant: RestaurantMock,
  realestate: RealestateMock,
}

export default function FeaturedWork() {
  return (
    <section id="work" style={{ padding: 'clamp(64px,10vw,128px) 0' }}>
      <div className="mx-auto px-5" style={{ maxWidth: '1240px' }}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="inline-block text-xs font-medium uppercase tracking-widest mb-3" style={{ color: '#6a3df5' }}>
              Recent work
            </span>
            <h2 className="font-semibold" style={{ fontSize: 'clamp(28px,3.6vw,44px)', letterSpacing: '-0.03em', lineHeight: '1.1', color: 'var(--fg)' }}>
              Real businesses. Real results.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-xl"
              style={{ background: 'var(--bg-elevated)', color: 'var(--fg)', border: '1px solid var(--border-strong)', boxShadow: 'var(--shadow-xs)' }}
            >
              See all projects <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map(({ tag, title, org, desc, stat, preview }, i) => {
            const Mock = MOCKS[preview]
            return (
              <motion.article
                key={title}
                className="flex flex-col rounded-[18px] overflow-hidden"
                style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', transition: 'all 240ms cubic-bezier(0.2,0.8,0.2,1)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(-3px)'
                  el.style.boxShadow = 'var(--shadow-lg)'
                  el.style.borderColor = 'var(--violet-200)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'var(--shadow-sm)'
                  el.style.borderColor = 'var(--border)'
                }}
              >
                <div className="h-48 flex items-center justify-center p-6" style={{ background: PREVIEW_BG[preview] }}>
                  <Mock />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-full" style={{ background: 'var(--bg-muted)', color: 'var(--fg-2)', border: '1px solid var(--border)' }}>{tag}</span>
                    <span className="text-xs" style={{ color: 'var(--fg-3)' }}>{org}</span>
                  </div>
                  <h3 className="text-[18px] font-semibold mb-2" style={{ color: 'var(--fg)', letterSpacing: '-0.015em' }}>{title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--fg-2)' }}>{desc}</p>
                  <div className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full self-start" style={{ background: 'var(--success-50)', color: 'var(--success-500)', border: '1px solid #a7f3d0' }}>
                    <TrendingUp size={12} />{stat}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
