import { routing } from '@/i18n/routing'

export const SITE_URL = 'https://aethos.solutions'

/**
 * Builds canonical + hreflang alternates for a given pathname (e.g. '/' or '/services').
 * All locales use a prefixed path (/en, /es, /ro), including the default locale.
 */
export function buildAlternates(locale: string, pathname: string) {
  const path = pathname === '/' ? '' : pathname
  const languages: Record<string, string> = {}

  for (const loc of routing.locales) {
    languages[loc] = `${SITE_URL}/${loc}${path}`
  }
  languages['x-default'] = `${SITE_URL}/${routing.defaultLocale}${path}`

  return {
    canonical: `${SITE_URL}/${locale}${path}`,
    languages,
  }
}
