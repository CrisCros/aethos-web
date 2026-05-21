import { Mail, MessageCircle } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'

export default async function Footer() {
  const t = await getTranslations('footer')
  const tNav = await getTranslations('nav')

  return (
    <footer style={{ background: 'var(--bg-subtle)', borderTop: '1px solid var(--border)' }}>
      <div className="mx-auto px-5 py-14" style={{ maxWidth: '1240px' }}>
        <div className="grid gap-10 md:grid-cols-4 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block font-semibold text-xl tracking-tight mb-4" style={{ color: 'var(--fg)' }}>
              Aethos<span style={{ color: '#7c5cff' }}>.</span>
            </Link>
            <p className="text-sm leading-relaxed mb-5 max-w-[240px]" style={{ color: 'var(--fg-2)' }}>{t('tagline')}</p>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:hello@aethos.studio" className="inline-flex items-center gap-2 text-sm" style={{ color: 'var(--fg-2)' }}>
                <Mail size={13} />hello@aethos.studio
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm" style={{ color: 'var(--fg-2)' }}>
                <MessageCircle size={13} />{t('startConversation')}
              </Link>
            </div>
          </div>

          {/* Studio */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: 'var(--fg)' }}>{t('studioLabel')}</div>
            <ul className="flex flex-col gap-3">
              {([['services', '/services'], ['work', '/work'], ['about', '/about'], ['contact', '/contact']] as const).map(([key, href]) => (
                <li key={key}><Link href={href} className="text-sm" style={{ color: 'var(--fg-2)' }}>{t(`links.${key}`)}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: 'var(--fg)' }}>{t('servicesLabel')}</div>
            <ul className="flex flex-col gap-3">
              {(['webDesign', 'landingPages', 'seo', 'leadCapture', 'automations', 'dashboards'] as const).map((key) => (
                <li key={key}><Link href="/services" className="text-sm" style={{ color: 'var(--fg-2)' }}>{t(`links.${key}`)}</Link></li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: 'var(--fg)' }}>{t('industriesLabel')}</div>
            <ul className="flex flex-col gap-3">
              {(['clinics', 'restaurants', 'realestate', 'construction'] as const).map((key) => (
                <li key={key}><Link href="/work" className="text-sm" style={{ color: 'var(--fg-2)' }}>{t(`links.${key}`)}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3" style={{ borderTop: '1px solid var(--border)' }}>
          <span className="text-xs" style={{ color: 'var(--fg-3)' }}>
            {t('copyright', { year: new Date().getFullYear() })}
          </span>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs" style={{ color: 'var(--fg-3)' }}>{t('privacy')}</a>
            <a href="#" className="text-xs" style={{ color: 'var(--fg-3)' }}>{t('terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
