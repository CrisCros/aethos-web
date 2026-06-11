import { Mail, MessageCircle } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'

export default async function Footer() {
  const t = await getTranslations('footer')

  const linkStyle   = { color: 'rgba(248,250,252,0.50)' } as const
  const headingStyle = {
    color: 'rgba(248,250,252,0.80)',
    fontSize: '11px',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
  }

  return (
    <footer style={{ background: '#020617', borderTop: '1px solid rgba(96,165,250,0.10)' }}>
      <div className="mx-auto px-5 py-14" style={{ maxWidth: '1240px' }}>
        <div className="grid gap-10 md:grid-cols-4 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block font-semibold text-xl tracking-tight mb-4" style={{ color: '#F8FAFC' }}>
              Aethos<span style={{ color: '#2563EB' }}>.</span>
            </Link>
            <p className="text-sm leading-relaxed mb-5 max-w-[240px]" style={{ color: 'rgba(248,250,252,0.50)' }}>
              {t('tagline')}
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:aethos.solutions@gmail.com"
                className="inline-flex items-center gap-2 text-sm"
                style={linkStyle}
              >
                <Mail size={13} />aethos.solutions@gmail.com
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm" style={linkStyle}>
                <MessageCircle size={13} />{t('startConversation')}
              </Link>
            </div>
          </div>

          {/* Studio */}
          <div>
            <div className="mb-5" style={headingStyle}>{t('studioLabel')}</div>
            <ul className="flex flex-col gap-3">
              <li><Link href="/"        className="text-sm" style={linkStyle}>{t('links.home')}</Link></li>
              <li><Link href="/services" className="text-sm" style={linkStyle}>{t('links.services')}</Link></li>
              <li><Link href="/work"    className="text-sm" style={linkStyle}>{t('links.work')}</Link></li>
              <li><Link href="/about"   className="text-sm" style={linkStyle}>{t('links.about')}</Link></li>
              <li><Link href="/contact" className="text-sm" style={linkStyle}>{t('links.contact')}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="mb-5" style={headingStyle}>{t('servicesLabel')}</div>
            <ul className="flex flex-col gap-3">
              <li><Link href="/services/design"      className="text-sm" style={linkStyle}>{t('links.design')}</Link></li>
              <li><Link href="/services/development" className="text-sm" style={linkStyle}>{t('links.development')}</Link></li>
              <li><Link href="/services/automation"  className="text-sm" style={linkStyle}>{t('links.automation')}</Link></li>
            </ul>
          </div>

          {/* Empty column for balance */}
          <div />
        </div>

        <div
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderTop: '1px solid rgba(96,165,250,0.10)' }}
        >
          <span className="text-xs" style={{ color: 'rgba(248,250,252,0.28)' }}>
            {t('copyright', { year: new Date().getFullYear() })}
          </span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs" style={{ color: 'rgba(248,250,252,0.28)' }}>{t('privacy')}</Link>
            <Link href="/terms" className="text-xs" style={{ color: 'rgba(248,250,252,0.28)' }}>{t('terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
