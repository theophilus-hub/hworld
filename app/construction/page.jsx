"use client"

import Footer from "@/components/footer"
import Hero from "@/components/construction/hero"
import Services from "@/components/construction/services"
import Features from "@/components/construction/features"
import CTA from "@/components/cta"

function Construction() {
  return (
    <>
  
    <Hero />
    <Services />
    <Features />
    <CTA 
      title="Ready to Build Your Vision?"
      description="Contact us today to discuss how our construction expertise can bring your project to life with precision and excellence."
      primaryButton={{ text: "Contact Us", href: "/contact" }}
      secondaryButton={{ text: "Back to Homepage", href: "/" }}
    />
    <Footer />
    </>
  )
}

export default Construction
