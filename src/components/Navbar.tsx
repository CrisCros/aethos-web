'use client'

import { useState, useEffect } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter, Link } from '@/i18n/navigation'
import { Moon, Sun, Menu, X, ChevronDown, Globe, ChevronRight } from 'lucide-react'

const LOCALES = ['en', 'es', 'ro'] as const

export default function Navbar() {
  const locale    = useLocale()
  const pathname  = usePathname()
  const router    = useRouter()
  const t         = useTranslations('nav')

  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen,   setLangOpen]   = useState(false)
  const [theme,      setTheme]      = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = saved === 'dark' || (saved == null && prefersDark)
    setTheme(isDark ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    localStorage.setItem('theme', next)
  }

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
    setLangOpen(false)
    setMobileOpen(false)
  }

  const isDark = theme === 'dark'

  const NAV_LINKS = [
    { label: t('services'), href: '/services' },
    { label: t('work'),     href: '/work'     },
    { label: t('about'),    href: '/about'    },
    { label: t('contact'),  href: '/contact'  },
  ]

  const LOCALE_LABELS: Record<string, string> = {
    en: t('langEN'),
    es: t('langES'),
    ro: t('langRO'),
  }

  const navBg = scrolled
    ? isDark ? 'rgba(18,18,26,0.94)' : 'rgba(255,255,255,0.94)'
    : isDark ? 'rgba(18,18,26,0.55)' : 'rgba(255,255,255,0.55)'
  const navBorder = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.7)'
  const navShadow = scrolled
    ? `0 4px 8px rgba(20,20,40,0.05), 0 24px 48px rgba(20,20,40,0.08), inset 0 1px 0 ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.85)'}`
    : `0 2px 4px rgba(20,20,40,0.04), 0 8px 24px rgba(20,20,40,0.06), inset 0 1px 0 ${isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.7)'}`

  return (
    <header className="sticky top-0 z-50 px-4 py-4">
      <nav
        className="flex items-center gap-3 mx-auto px-4 py-2.5 rounded-full"
        style={{
          maxWidth: '1100px',
          background: navBg,
          backdropFilter: 'blur(20px) saturate(140%)',
          WebkitBackdropFilter: 'blur(20px) saturate(140%)',
          border: `1px solid ${navBorder}`,
          boxShadow: navShadow,
          transition: 'all 220ms cubic-bezier(0.2,0.8,0.2,1)',
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 font-semibold text-lg tracking-tight" style={{ color: 'var(--fg)' }}>
          Aethos<span style={{ color: '#7c5cff' }}>.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-0.5 ml-3 flex-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-150"
                style={{
                  color: isActive ? 'var(--fg)' : 'var(--fg-2)',
                  background: isActive ? (isDark ? 'rgba(124,92,255,0.15)' : 'rgba(124,92,255,0.08)') : 'transparent',
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Right actions */}
        <div className="ml-auto flex items-center gap-1">
          {/* Dark mode toggle */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? t('lightMode') : t('darkMode')}
            className="w-9 h-9 hidden md:flex items-center justify-center rounded-full transition-colors"
            style={{ color: 'var(--fg-2)' }}
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Language switcher */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setLangOpen((o) => !o)}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-full transition-all duration-150"
              style={{ color: 'var(--fg-2)' }}
            >
              <Globe size={13} />
              {locale.toUpperCase()}
              <ChevronDown size={11} className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
            </button>

            {langOpen && (
              <>
                {/* Backdrop to close */}
                <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                <div
                  className="absolute right-0 top-full mt-2 min-w-[160px] rounded-2xl overflow-hidden p-1.5 flex flex-col gap-0.5 z-20"
                  style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)' }}
                >
                  {LOCALES.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => switchLocale(loc)}
                      className="flex items-center justify-between px-3 py-2.5 text-sm rounded-xl text-left w-full transition-colors"
                      style={{
                        background: locale === loc ? 'var(--violet-50)' : 'transparent',
                        color: locale === loc ? '#5a2dd8' : 'var(--fg)',
                      }}
                    >
                      {LOCALE_LABELS[loc]}
                      {locale === loc && (
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full" style={{ background: 'var(--violet-100)', color: '#5a2dd8' }}>✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-full ml-1"
            style={{ background: '#7c5cff', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.18), 0 4px 16px rgba(124,92,255,0.22)' }}
          >
            {t('cta')}
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full"
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
          style={{ maxWidth: '1100px', background: 'var(--bg-elevated)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)' }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between px-5 py-4 text-sm font-medium border-b last:border-0"
                style={{ color: isActive ? '#7c5cff' : 'var(--fg)', borderColor: 'var(--border)' }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
                <ChevronRight size={15} style={{ color: 'var(--fg-muted)' }} />
              </Link>
            )
          })}

          {/* Mobile locale switcher */}
          <div className="px-5 py-3 flex flex-wrap items-center gap-2 border-t" style={{ borderColor: 'var(--border)' }}>
            {LOCALES.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className="px-3 py-1.5 text-xs font-medium rounded-full transition-colors"
                style={{
                  background: locale === loc ? 'var(--violet-100)' : 'var(--bg-muted)',
                  color: locale === loc ? '#5a2dd8' : 'var(--fg-2)',
                }}
              >
                {loc.toUpperCase()}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="ml-auto flex items-center gap-1.5 text-xs"
              style={{ color: 'var(--fg-2)' }}
            >
              {isDark ? <Sun size={13} /> : <Moon size={13} />}
              {isDark ? t('lightMode') : t('darkMode')}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
