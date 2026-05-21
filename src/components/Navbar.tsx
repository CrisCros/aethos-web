'use client'

import { useState, useEffect } from 'react'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { Globe, ChevronDown, Menu, X, ChevronRight } from 'lucide-react'

const LOCALES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'ro', label: 'Română' },
] as const

const NAV_LINKS = [
  { label: 'Services', href: '#solutions' },
  { label: 'Work',     href: '#work' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const switchLocale = (code: string) => {
    router.replace(pathname, { locale: code })
    setLangOpen(false)
    setMobileOpen(false)
  }

  const currentLocale = LOCALES.find((l) => l.code === locale) ?? LOCALES[0]

  return (
    <header
      className="sticky top-0 z-50 px-4 py-4"
      style={{ transition: 'all 220ms cubic-bezier(0.2,0.8,0.2,1)' }}
    >
      {/* Pill nav */}
      <nav
        className="flex items-center gap-6 mx-auto px-4 py-2.5 rounded-full"
        style={{
          maxWidth: '1100px',
          background: scrolled
            ? 'rgba(255,255,255,0.92)'
            : 'rgba(255,255,255,0.55)',
          backdropFilter: 'blur(20px) saturate(140%)',
          WebkitBackdropFilter: 'blur(20px) saturate(140%)',
          border: '1px solid rgba(255,255,255,0.7)',
          boxShadow: scrolled
            ? '0 4px 8px rgba(20,20,40,0.04), 0 24px 48px rgba(20,20,40,0.08), inset 0 1px 0 rgba(255,255,255,0.85)'
            : '0 2px 4px rgba(20,20,40,0.04), 0 8px 24px rgba(20,20,40,0.06), inset 0 1px 0 rgba(255,255,255,0.7)',
          transition: 'all 220ms cubic-bezier(0.2,0.8,0.2,1)',
        }}
      >
        {/* Logo */}
        <a href="#" className="flex-shrink-0 font-semibold text-lg tracking-tight" style={{ color: 'var(--fg)' }}>
          Aethos<span className="text-violet-600">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-0.5 ml-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-150"
              style={{ color: 'var(--fg-2)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.65)'
                e.currentTarget.style.color = 'var(--fg)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--fg-2)'
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-2">
          {/* Language picker — desktop */}
          <div className="hidden md:block relative">
            <button
              onClick={() => setLangOpen((o) => !o)}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-full transition-all duration-150"
              style={{ color: 'var(--fg-2)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.65)'
                e.currentTarget.style.color = 'var(--fg)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--fg-2)'
              }}
            >
              <Globe size={13} />
              {currentLocale.label.slice(0, 2).toUpperCase()}
              <ChevronDown size={11} className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
            </button>

            {langOpen && (
              <div
                className="absolute right-0 top-full mt-2 min-w-[180px] rounded-2xl overflow-hidden p-1.5 flex flex-col gap-0.5"
                style={{
                  background: '#fff',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-lg)',
                  zIndex: 10,
                }}
              >
                {LOCALES.map((loc) => (
                  <button
                    key={loc.code}
                    onClick={() => switchLocale(loc.code)}
                    className="flex items-center justify-between px-3 py-2.5 text-sm rounded-lg text-left w-full transition-colors"
                    style={{
                      background: locale === loc.code ? 'var(--violet-50)' : 'transparent',
                      color: locale === loc.code ? '#5a2dd8' : 'var(--fg)',
                    }}
                  >
                    {loc.label}
                    <span
                      className="text-[11px] font-medium px-2 py-0.5 rounded-full"
                      style={{ background: 'var(--violet-100)', color: '#5a2dd8' }}
                    >
                      {locale === loc.code ? 'Active' : loc.code === 'en' ? 'EN' : loc.code === 'es' ? 'ES' : 'RO'}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-full transition-all duration-150"
            style={{
              background: '#7c5cff',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.18), 0 1px 2px rgba(60,30,160,0.18), 0 4px 16px rgba(124,92,255,0.22)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#6a3df5'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#7c5cff'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Start a project
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: 'var(--fg)' }}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden mt-2 mx-auto rounded-2xl overflow-hidden"
          style={{
            maxWidth: '1100px',
            background: '#fff',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center justify-between px-4 py-3.5 text-sm font-medium border-b last:border-0"
              style={{ color: 'var(--fg)', borderColor: 'var(--border)' }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
              <ChevronRight size={15} style={{ color: 'var(--fg-muted)' }} />
            </a>
          ))}
          <div className="px-4 py-3 flex items-center gap-2 border-t" style={{ borderColor: 'var(--border)' }}>
            {LOCALES.map((loc) => (
              <button
                key={loc.code}
                onClick={() => switchLocale(loc.code)}
                className="px-3 py-1.5 text-xs font-medium rounded-full transition-colors"
                style={{
                  background: locale === loc.code ? 'var(--violet-100)' : 'var(--bg-muted)',
                  color: locale === loc.code ? '#5a2dd8' : 'var(--fg-2)',
                }}
              >
                {loc.code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
