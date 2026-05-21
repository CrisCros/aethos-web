import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ProblemsSection from '@/components/ProblemsSection'
import ServicesGrid from '@/components/ServicesGrid'
import BeforeAfterSection from '@/components/BeforeAfterSection'
import FeaturedWork from '@/components/FeaturedWork'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Aethos — Modern websites and smart systems for growing businesses',
  description:
    'We help clinics, restaurants, real-estate agencies and small B2B teams look more professional online, capture more leads, and save hours every week.',
}

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
