'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import Link from 'next/link'
import { Menu, X, ChevronDown, Globe, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const LOCALES = ['es', 'en', 'ro'] as const
const LOCALE_LABELS: Record<string, string> = { es: 'ES', en: 'EN', ro: 'RO' }

export default function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    try { localStorage.setItem('aethos-dark', String(next)) } catch {}
  }

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
    setLangOpen(false)
    setMobileOpen(false)
  }

  const navLinks = [
    { label: t('services'), href: '#servicios' },
    { label: t('sectors'), href: '#sectores' },
    { label: t('process'), href: '#proceso' },
    { label: t('contact'), href: '#contacto' },
  ]

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#d2d2d7]/60 dark:border-[#2a2a2a]/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" locale={locale} className="flex items-center">
            <span className="text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold text-xl tracking-tight">
              Aethos<span className="text-violet-600">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#6e6e73] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-2">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              className="w-8 h-8 flex items-center justify-center rounded-lg text-[#6e6e73] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] hover:bg-[#f5f5f7] dark:hover:bg-[#1a1a1a] transition-colors"
            >
              {dark ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Language selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-[#6e6e73] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] text-sm font-medium transition-colors px-2 py-1 rounded-lg"
              >
                <Globe size={13} />
                {LOCALE_LABELS[locale]}
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 bg-white dark:bg-[#111111] border border-[#d2d2d7] dark:border-[#2a2a2a] rounded-xl shadow-lg overflow-hidden min-w-[72px]"
                  >
                    {LOCALES.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => switchLocale(loc)}
                        className={`block w-full text-left px-4 py-2.5 text-sm transition-colors ${
                          locale === loc
                            ? 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/30 font-medium'
                            : 'text-[#6e6e73] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] hover:bg-[#f5f5f7] dark:hover:bg-[#1a1a1a]'
                        }`}
                      >
                        {LOCALE_LABELS[loc]}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <a
              href="#contacto"
              className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors"
            >
              {t('cta')}
            </a>
          </div>

          {/* Mobile: dark toggle + menu */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-[#6e6e73] dark:text-[#a1a1a6] hover:bg-[#f5f5f7] dark:hover:bg-[#1a1a1a] transition-colors"
            >
              {dark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button
              className="p-2 text-[#1d1d1f] dark:text-[#f5f5f7]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[#d2d2d7]/60 dark:border-[#2a2a2a]/60 overflow-hidden"
          >
            <div className="px-4 py-5 flex flex-col gap-4 bg-white dark:bg-[#0a0a0a]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#1d1d1f] dark:text-[#f5f5f7] font-medium text-sm py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-2 border-t border-[#d2d2d7]/60 dark:border-[#2a2a2a]/60">
                {LOCALES.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => switchLocale(loc)}
                    className={`text-sm font-medium px-3 py-1.5 rounded-full transition-colors ${
                      locale === loc
                        ? 'bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400'
                        : 'text-[#6e6e73] dark:text-[#a1a1a6] hover:bg-[#f5f5f7] dark:hover:bg-[#1a1a1a]'
                    }`}
                  >
                    {LOCALE_LABELS[loc]}
                  </button>
                ))}
              </div>
              <a
                href="#contacto"
                className="bg-violet-600 text-white text-sm font-medium px-5 py-3 rounded-full text-center"
                onClick={() => setMobileOpen(false)}
              >
                {t('cta')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
