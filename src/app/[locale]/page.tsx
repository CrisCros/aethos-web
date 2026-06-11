import type { Metadata } from 'next'
import { buildAlternates } from '@/lib/seo'
import HeroSection from '@/components/HeroSection'
import ServiceMosaic from '@/components/ServiceMosaic'
import ProblemsSection from '@/components/ProblemsSection'
import BeforeAfterSection from '@/components/BeforeAfterSection'
import HowWeWorkSection from '@/components/HowWeWorkSection'
import FeaturedWork from '@/components/FeaturedWork'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    alternates: buildAlternates(locale, '/'),
  }
}

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <ServiceMosaic />
      <ProblemsSection />
      <BeforeAfterSection />
      <HowWeWorkSection />
      <FeaturedWork />
      <FAQSection />
      <CTASection />
    </main>
  )
}
