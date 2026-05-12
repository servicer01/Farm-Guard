import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { WhatIsFarmGuardSection } from "@/components/what-is-farmguard-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <WhatIsFarmGuardSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
