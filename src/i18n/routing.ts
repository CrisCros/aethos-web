import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['es', 'en', 'ro'],
  defaultLocale: 'es',
})

export type Locale = (typeof routing.locales)[number]
