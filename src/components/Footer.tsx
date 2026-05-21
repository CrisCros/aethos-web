'use client'

import { Mail, MessageCircle } from 'lucide-react'

const STUDIO_LINKS = [
  { label: 'Services', href: '#solutions' },
  { label: 'Work',     href: '#work' },
  { label: 'Contact',  href: '#contact' },
]

const SERVICE_LINKS = [
  { label: 'Web design',    href: '#solutions' },
  { label: 'SEO & presence',href: '#solutions' },
  { label: 'Lead capture',  href: '#solutions' },
  { label: 'Dashboards',    href: '#solutions' },
]

const INDUSTRY_LINKS = [
  { label: 'Clinics',      href: '#work' },
  { label: 'Restaurants',  href: '#work' },
  { label: 'Real estate',  href: '#work' },
  { label: 'Construction', href: '#work' },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg-subtle)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="mx-auto px-5 py-14" style={{ maxWidth: '1240px' }}>
        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-4 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-semibold text-xl tracking-tight mb-4" style={{ color: 'var(--fg)' }}>
              Aethos<span style={{ color: '#7c5cff' }}>.</span>
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-[240px]" style={{ color: 'var(--fg-2)' }}>
              Modern websites and smart systems for businesses that want to grow without the complexity.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:hello@aethos.studio"
                className="inline-flex items-center gap-2 text-sm transition-colors"
                style={{ color: 'var(--fg-2)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#7c5cff' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--fg-2)' }}
              >
                <Mail size={13} />hello@aethos.studio
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm transition-colors"
                style={{ color: 'var(--fg-2)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#7c5cff' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--fg-2)' }}
              >
                <MessageCircle size={13} />WhatsApp us
              </a>
            </div>
          </div>

          {/* Studio */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: 'var(--fg)' }}>
              Studio
            </div>
            <ul className="flex flex-col gap-3">
              {STUDIO_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm transition-colors"
                    style={{ color: 'var(--fg-2)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--fg)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--fg-2)' }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: 'var(--fg)' }}>
              Services
            </div>
            <ul className="flex flex-col gap-3">
              {SERVICE_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm transition-colors"
                    style={{ color: 'var(--fg-2)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--fg)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--fg-2)' }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: 'var(--fg)' }}>
              Industries
            </div>
            <ul className="flex flex-col gap-3">
              {INDUSTRY_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm transition-colors"
                    style={{ color: 'var(--fg-2)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--fg)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--fg-2)' }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <span className="text-xs" style={{ color: 'var(--fg-3)' }}>
            © {new Date().getFullYear()} Aethos Solutions. Made in Barcelona &amp; Bucharest.
          </span>
          <div className="flex items-center gap-4">
            {['Privacy', 'Terms', 'Imprint'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors"
                style={{ color: 'var(--fg-3)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--fg)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--fg-3)' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
