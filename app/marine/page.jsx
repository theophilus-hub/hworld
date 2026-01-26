"use client"

import Footer from "@/components/footer"
import Hero from "@/components/marine/hero"
import Services from "@/components/marine/services"
import Features from "@/components/marine/features"
import CTA from "@/components/cta"

function Marine() {
  return (
    <>
  
    <Hero />
    <Services />
    <Features />
    <CTA 
      title="Ready to Navigate Your Next Project?"
      description="Contact us today to discuss how our marine engineering expertise can support your offshore and maritime operations."
      primaryButton={{ text: "Contact Us", href: "/contact" }}
      secondaryButton={{ text: "Back to Homepage", href: "/" }}
    />
    <Footer />
    </>
  )
}

export default Marine
