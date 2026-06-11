'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { usePathname, useRouter, Link } from '@/i18n/navigation'
import { Moon, Sun, Menu, X, ChevronDown, Globe, ChevronRight, Palette, Code2, Zap, ArrowRight } from 'lucide-react'
import { EASE_OUT } from '@/lib/motion'

const LOCALES = ['en', 'es', 'ro'] as const

const SERVICE_ICONS = { design: Palette, development: Code2, automation: Zap }

// Routes whose hero is the fixed dark navy — the unscrolled transparent bar
// must render light text there regardless of theme.
const DARK_HERO_ROUTES = ['/', '/work', '/about', '/contact']

const menuMotion = {
  initial: { opacity: 0, y: -6, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit:    { opacity: 0, y: -4, scale: 0.98 },
  transition: { duration: 0.18, ease: EASE_OUT },
} as const

export default function Navbar() {
  const locale    = useLocale()
  const pathname  = usePathname()
  const router    = useRouter()
  const t         = useTranslations('nav')

  const [scrolled,      setScrolled]      = useState(false)
  const [mobileOpen,    setMobileOpen]    = useState(false)
  const [langOpen,      setLangOpen]      = useState(false)
  const [servicesOpen,  setServicesOpen]  = useState(false)
  const [theme,         setTheme]         = useState<'light' | 'dark'>('light')
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = saved === 'dark' || (saved == null && prefersDark)
    // One-time sync from browser-only storage/media APIs after mount (SSR has no access to either).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(isDark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', isDark)
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

  const isServicesActive = pathname === '/services' ||
    pathname.startsWith('/services/')

  // Transparent bar over a dark hero → invert to light text (any theme)
  const inverse = DARK_HERO_ROUTES.includes(pathname) && !scrolled && !mobileOpen

  const navVars = (inverse
    ? {
        '--nav-fg': '#F8FAFC',
        '--nav-fg-dim': 'rgba(203,213,225,0.80)',
        '--nav-hover-bg': 'rgba(255,255,255,0.07)',
        '--nav-accent': '#60A5FA',
      }
    : {
        '--nav-fg': 'var(--fg)',
        '--nav-fg-dim': 'var(--fg-2)',
        '--nav-hover-bg': 'var(--bg-muted)',
        '--nav-accent': 'var(--blue-primary)',
      }) as React.CSSProperties

  const SERVICE_ITEMS = [
    { key: 'design',      href: '/services/design',      Icon: SERVICE_ICONS.design      },
    { key: 'development', href: '/services/development', Icon: SERVICE_ICONS.development },
    { key: 'automation',  href: '/services/automation',  Icon: SERVICE_ICONS.automation  },
  ] as const

  const LOCALE_LABELS: Record<string, string> = {
    en: t('langEN'),
    es: t('langES'),
    ro: t('langRO'),
  }

  const NAV_LINKS = [
    { label: t('work'),    href: '/work'    },
    { label: t('about'),   href: '/about'   },
    { label: t('contact'), href: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className={`navbar-bar${scrolled || mobileOpen ? ' scrolled' : ''}`} style={navVars}>
        <nav className="flex items-center gap-1 mx-auto px-5" style={{ maxWidth: '1240px' }}>
          {/* Brand — logo mark + serif wordmark */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center gap-2.5 mr-6"
            style={{ textDecoration: 'none' }}
          >
            <Image
              src="/brand/aethos-mark.png"
              alt=""
              width={26}
              height={20}
              priority
              style={{ width: '26px', height: '20px', objectFit: 'contain' }}
            />
            <span
              className="display flex items-baseline gap-px"
              style={{ fontSize: '21px', fontWeight: 500, color: 'var(--nav-fg)', letterSpacing: '-0.01em' }}
            >
              Aethos
              <span aria-hidden style={{ color: 'var(--nav-accent)' }}>.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1 flex-1">
            <Link
              href="/"
              className={`nav-link nav-underline px-4 py-2 text-sm font-medium${pathname === '/' ? ' active' : ''}`}
            >
              {t('home')}
            </Link>

            {/* Services dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => setServicesOpen((o) => !o)}
                onBlur={(e) => {
                  if (!servicesRef.current?.contains(e.relatedTarget as Node)) {
                    setServicesOpen(false)
                  }
                }}
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
                className={`nav-link nav-underline flex items-center gap-1.5 px-4 py-2 text-sm font-medium${isServicesActive ? ' active' : ''}`}
              >
                {t('services')}
                <ChevronDown
                  size={12}
                  aria-hidden
                  style={{
                    transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 200ms cubic-bezier(0.23,1,0.32,1)',
                  }}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setServicesOpen(false)} />
                    <motion.div
                      role="menu"
                      className="nav-menu absolute left-0 top-full mt-3 w-[264px] p-2 flex flex-col gap-0.5 z-20"
                      style={{ transformOrigin: 'top left' }}
                      {...menuMotion}
                    >
                      {SERVICE_ITEMS.map(({ key, href, Icon }) => {
                        const isActive = pathname === href
                        return (
                          <Link
                            key={key}
                            href={href}
                            role="menuitem"
                            onClick={() => setServicesOpen(false)}
                            className="nav-menu-item flex items-center gap-3 px-3 py-2.5 rounded-xl"
                          >
                            <span
                              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                              style={{
                                background: isActive ? 'var(--blue-100)' : 'var(--blue-50)',
                                color: 'var(--blue-primary)',
                              }}
                            >
                              <Icon size={14} />
                            </span>
                            <span
                              className="text-sm font-medium"
                              style={{ color: isActive ? 'var(--blue-primary)' : 'var(--fg)' }}
                            >
                              {t(`servicesMenu.${key}` as Parameters<typeof t>[0])}
                            </span>
                          </Link>
                        )
                      })}
                      <div style={{ height: '1px', background: 'var(--border)', margin: '4px 10px' }} />
                      <Link
                        href="/services"
                        role="menuitem"
                        onClick={() => setServicesOpen(false)}
                        className="nav-menu-item flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium"
                        style={{ color: 'var(--fg-2)' }}
                      >
                        {t('services')}
                        <ArrowRight size={13} aria-hidden style={{ color: 'var(--blue-primary)' }} />
                      </Link>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link nav-underline px-4 py-2 text-sm font-medium${pathname === link.href ? ' active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="ml-auto flex items-center gap-1.5">
            {/* Theme toggle — icon swaps with a small rotation */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? t('lightMode') : t('darkMode')}
              className="nav-link w-9 h-9 hidden md:flex items-center justify-center"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  className="flex"
                  initial={{ rotate: -60, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 60, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.18, ease: EASE_OUT }}
                >
                  {isDark ? <Sun size={15} /> : <Moon size={15} />}
                </motion.span>
              </AnimatePresence>
            </button>

            {/* Language switcher */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setLangOpen((o) => !o)}
                aria-haspopup="menu"
                aria-expanded={langOpen}
                aria-label={t('selectLanguage')}
                className="nav-link flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-semibold"
                style={{ letterSpacing: '0.06em' }}
              >
                <Globe size={13} aria-hidden />
                {locale.toUpperCase()}
              </button>

              <AnimatePresence>
                {langOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                    <motion.div
                      role="menu"
                      aria-label={t('selectLanguage')}
                      className="nav-menu absolute right-0 top-full mt-3 min-w-[176px] p-2 flex flex-col gap-0.5 z-20"
                      style={{ transformOrigin: 'top right' }}
                      {...menuMotion}
                    >
                      {LOCALES.map((loc) => (
                        <button
                          key={loc}
                          role="menuitemradio"
                          aria-checked={locale === loc}
                          onClick={() => switchLocale(loc)}
                          className="nav-menu-item flex items-center justify-between px-3 py-2.5 text-sm rounded-xl text-left w-full"
                          style={{ color: locale === loc ? 'var(--blue-primary)' : 'var(--fg)', fontWeight: locale === loc ? 600 : 400 }}
                        >
                          {LOCALE_LABELS[loc]}
                          {locale === loc && (
                            <span
                              aria-hidden
                              className="rounded-full"
                              style={{ width: '5px', height: '5px', background: 'var(--blue-primary)' }}
                            />
                          )}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="btn hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 text-[13px] font-semibold text-white rounded-full ml-2"
              style={{
                background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 60%, #1D4ED8 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.20), 0 4px 18px rgba(37,99,235,0.32)',
              }}
            >
              {t('cta')}
              <ArrowRight size={13} aria-hidden />
            </Link>

            {/* Mobile hamburger */}
            <button
              className="nav-link md:hidden w-10 h-10 flex items-center justify-center"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? t('closeMenu') : t('menu')}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu — frosted glass panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            className="nav-menu md:hidden mx-4 mt-2 overflow-hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: EASE_OUT }}
          >
            <div className="p-2">
              <Link
                href="/"
                className="nav-menu-item flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-medium"
                style={{ color: pathname === '/' ? 'var(--blue-primary)' : 'var(--fg)' }}
                onClick={() => setMobileOpen(false)}
              >
                {t('home')}
                <ChevronRight size={15} aria-hidden style={{ color: 'var(--fg-muted)' }} />
              </Link>

              <Link
                href="/services"
                className="nav-menu-item flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-medium"
                style={{ color: isServicesActive ? 'var(--blue-primary)' : 'var(--fg)' }}
                onClick={() => setMobileOpen(false)}
              >
                {t('services')}
                <ChevronRight size={15} aria-hidden style={{ color: 'var(--fg-muted)' }} />
              </Link>
              <div className="flex flex-col">
                {SERVICE_ITEMS.map(({ key, href, Icon }) => (
                  <Link
                    key={key}
                    href={href}
                    className="nav-menu-item flex items-center gap-3 pl-7 pr-4 py-3 rounded-xl text-sm"
                    style={{ color: pathname === href ? 'var(--blue-primary)' : 'var(--fg-2)' }}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--blue-50)', color: 'var(--blue-primary)' }}
                    >
                      <Icon size={13} aria-hidden />
                    </span>
                    {t(`servicesMenu.${key}` as Parameters<typeof t>[0])}
                  </Link>
                ))}
              </div>

              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-menu-item flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-medium"
                  style={{ color: pathname === link.href ? 'var(--blue-primary)' : 'var(--fg)' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                  <ChevronRight size={15} aria-hidden style={{ color: 'var(--fg-muted)' }} />
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="px-4 pb-3">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn flex items-center justify-center gap-2 px-5 py-3.5 text-[14px] font-semibold text-white rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 60%, #1D4ED8 100%)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.20), 0 4px 18px rgba(37,99,235,0.32)',
                }}
              >
                {t('cta')}
                <ArrowRight size={14} aria-hidden />
              </Link>
            </div>

            {/* Locale + theme row */}
            <div
              className="px-4 py-3.5 flex flex-wrap items-center gap-2"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              {LOCALES.map((loc) => (
                <button
                  key={loc}
                  onClick={() => switchLocale(loc)}
                  className="px-3.5 py-1.5 text-xs font-semibold rounded-full"
                  style={{
                    letterSpacing: '0.06em',
                    background: locale === loc ? 'var(--blue-100)' : 'var(--bg-muted)',
                    color: locale === loc ? 'var(--blue-primary)' : 'var(--fg-2)',
                    transition: 'background-color 160ms ease, color 160ms ease',
                  }}
                >
                  {loc.toUpperCase()}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className="ml-auto flex items-center gap-1.5 text-xs font-medium"
                style={{ color: 'var(--fg-2)' }}
              >
                {isDark ? <Sun size={13} aria-hidden /> : <Moon size={13} aria-hidden />}
                {isDark ? t('lightMode') : t('darkMode')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
