"use client"

import Footer from "@/components/footer"
import Hero from "@/components/marine/hero"
import CTA from "@/components/cta"

function Marine() {
  return (
    <>
      <Hero />
      <div className="mt-16 md:mt-24">
        <CTA 
          title="Ready to Navigate Your Next Project?"
          description="Contact us today to discuss how our marine engineering expertise can support your offshore and maritime operations."
          primaryButton={{ text: "Contact Us", href: "/contact" }}
          secondaryButton={{ text: "See All Our Services", href: "/marine/services" }}
        />
      </div>
      <Footer />
    </>
  )
}

export default Marine
