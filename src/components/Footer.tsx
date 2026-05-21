import { Mail, MessageCircle } from 'lucide-react'
import { Link } from '@/i18n/navigation'

const STUDIO_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Work',     href: '/work'     },
  { label: 'About',   href: '/about'    },
  { label: 'Contact', href: '/contact'  },
]

const SERVICE_LINKS = [
  { label: 'Web design',     href: '/services' },
  { label: 'Landing pages',  href: '/services' },
  { label: 'SEO & search',   href: '/services' },
  { label: 'Lead capture',   href: '/services' },
  { label: 'Automations',    href: '/services' },
  { label: 'Dashboards',     href: '/services' },
]

const INDUSTRY_LINKS = [
  { label: 'Clinics',      href: '/work' },
  { label: 'Restaurants',  href: '/work' },
  { label: 'Real estate',  href: '/work' },
  { label: 'Construction', href: '/work' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-subtle)', borderTop: '1px solid var(--border)' }}>
      <div className="mx-auto px-5 py-14" style={{ maxWidth: '1240px' }}>
        <div className="grid gap-10 md:grid-cols-4 mb-12">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-block font-semibold text-xl tracking-tight mb-4" style={{ color: 'var(--fg)' }}>
              Aethos<span style={{ color: '#7c5cff' }}>.</span>
            </Link>
            <p className="text-sm leading-relaxed mb-5 max-w-[240px]" style={{ color: 'var(--fg-2)' }}>
              Modern websites and smart systems for businesses that want to grow without the complexity.
            </p>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:hello@aethos.studio" className="inline-flex items-center gap-2 text-sm" style={{ color: 'var(--fg-2)' }}>
                <Mail size={13} />hello@aethos.studio
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm" style={{ color: 'var(--fg-2)' }}>
                <MessageCircle size={13} />Start a conversation
              </Link>
            </div>
          </div>

          {/* Studio */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: 'var(--fg)' }}>Studio</div>
            <ul className="flex flex-col gap-3">
              {STUDIO_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm" style={{ color: 'var(--fg-2)' }}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: 'var(--fg)' }}>Services</div>
            <ul className="flex flex-col gap-3">
              {SERVICE_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm" style={{ color: 'var(--fg-2)' }}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: 'var(--fg)' }}>Industries</div>
            <ul className="flex flex-col gap-3">
              {INDUSTRY_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm" style={{ color: 'var(--fg-2)' }}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3" style={{ borderTop: '1px solid var(--border)' }}>
          <span className="text-xs" style={{ color: 'var(--fg-3)' }}>
            © {new Date().getFullYear()} Aethos Solutions. Made in Barcelona &amp; Bucharest.
          </span>
          <div className="flex items-center gap-4">
            {['Privacy', 'Terms'].map((item) => (
              <a key={item} href="#" className="text-xs" style={{ color: 'var(--fg-3)' }}>{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
