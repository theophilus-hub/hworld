"use client"

import Footer from "@/components/footer"
import Hero from "@/components/construction/hero"
import CTA from "@/components/cta"

function Construction() {
  return (
    <>
      <Hero />
      <div className="mt-16 md:mt-24">
        <CTA 
          title="Ready to Build Your Vision?"
          description="Contact us today to discuss how our construction expertise can bring your project to life with precision and excellence."
          primaryButton={{ text: "Contact Us", href: "/contact" }}
          secondaryButton={{ text: "See All Our Services", href: "/construction/services" }}
        />
      </div>
      <Footer />
    </>
  )
}

export default Construction
