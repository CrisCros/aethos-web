'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function Footer() {
  const t = useTranslations('footer')
  const serviceLinks = t.raw('serviceLinks') as string[]

  const companyLinks = [
    { label: t('linkProcess'), href: '#proceso'   as const },
    { label: t('linkSectors'), href: '#sectores'  as const },
    { label: t('linkContact'), href: '#contacto'  as const },
    { label: 'hola@aethossolutions.es', href: 'mailto:hola@aethossolutions.es' as const },
  ]

  return (
    <footer className="bg-[#f5f5f7] dark:bg-[#111111] border-t border-[#d2d2d7] dark:border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <span className="text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold text-xl tracking-tight">
                Aethos<span className="text-violet-600">.</span>
              </span>
            </Link>
            <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-sm leading-relaxed max-w-xs mb-5">
              {t('tagline')}
            </p>
            <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-xs font-medium">
              {t('location')}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] uppercase tracking-wider mb-5">
              {t('servicesHeader')}
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#servicios"
                    className="text-[#6e6e73] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] uppercase tracking-wider mb-5">
              {t('companyHeader')}
            </h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[#6e6e73] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] text-sm transition-colors break-all"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#d2d2d7] dark:border-[#2a2a2a] pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-xs">
            {t('copyright', { year: new Date().getFullYear() })}
          </p>
          <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-xs">
            {t('madeWith')}
          </p>
        </div>
      </div>
    </footer>
  )
}
