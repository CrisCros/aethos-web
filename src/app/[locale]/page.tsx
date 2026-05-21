import { setRequestLocale } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ProblemsSection from '@/components/ProblemsSection'
import ServicesGrid from '@/components/ServicesGrid'
import BeforeAfterSection from '@/components/BeforeAfterSection'
import FeaturedWork from '@/components/FeaturedWork'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemsSection />
        <ServicesGrid />
        <BeforeAfterSection />
        <FeaturedWork />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
