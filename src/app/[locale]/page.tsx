import { setRequestLocale } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import StatsBar from '@/components/StatsBar'
import ProblemsSection from '@/components/ProblemsSection'
import SectorsBar from '@/components/SectorsBar'
import ServicesGrid from '@/components/ServicesGrid'
import WorkflowSection from '@/components/WorkflowSection'
import BeforeAfterSection from '@/components/BeforeAfterSection'
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
        <StatsBar />
        <ProblemsSection />
        <SectorsBar />
        <ServicesGrid />
        <WorkflowSection />
        <BeforeAfterSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
