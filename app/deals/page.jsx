"use client"

import Footer from "@/components/footer"
import Hero from "@/components/deals/hero"
import Services from "@/components/deals/services"
import Source from "@/components/deals/source"
import CTA from "@/components/cta"

function Deals() {
  return (
    <>
  
    <Hero />
    <Services />
    <Source />
    <CTA 
      title="Ready to Explore Opportunities?"
      description="Contact us today to discover how our deals and trading expertise can help you find the right solutions for your business."
      primaryButton={{ text: "Contact Us", href: "/contact" }}
      secondaryButton={{ text: "Back to Homepage", href: "/" }}
    />
    
    <Footer />
    </>
  )
}

export default Deals
