"use client"

import Footer from "@/components/footer"
import Hero from "@/components/adhoc/hero"
import Overview from "@/components/adhoc/overview"
import Services from "@/components/adhoc/services"
import CTA from "@/components/cta"

function Adhoc() {
  return (
    <>
  
    <Hero />
    <Overview />
    {/* <Services /> */}
    <CTA 
      title="Ready to Transform Your Project Planning?"
      description="Contact us today to discuss how our project planning expertise can help your organization deliver projects more effectively."
      primaryButton={{ text: "Contact Us", href: "/contact" }}
      secondaryButton={{ text: "Back to Homepage", href: "/" }}
    />
    <Footer />
    </>
  )
}

export default Adhoc
