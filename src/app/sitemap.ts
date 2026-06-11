import type { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'
import { SITE_URL, buildAlternates } from '@/lib/seo'

const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/design', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/development', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/automation', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/work', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/privacy', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.2, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const entries: MetadataRoute.Sitemap = []

  for (const { path, priority, changeFrequency } of ROUTES) {
    const { languages } = buildAlternates(routing.defaultLocale, path)

    for (const locale of routing.locales) {
      entries.push({
        url: `${SITE_URL}/${locale}${path === '/' ? '' : path}`,
        lastModified,
        changeFrequency,
        priority,
        alternates: { languages },
      })
    }
  }

  return entries
}
