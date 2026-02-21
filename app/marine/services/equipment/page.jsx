"use client"

import Footer from "@/components/footer"
import Nav from "@/components/nav"
import Services from "@/components/marine/services"
import CTA from "@/components/cta"

function MarineEquipment() {
  return (
    <>
      <Nav />
      <div className="pt-20">
        <Services />
      </div>
      <CTA 
        title="Ready to Navigate Your Next Project?"
        description="Contact us today to discuss how our marine engineering expertise can support your offshore and maritime operations."
        primaryButton={{ text: "Contact Us", href: "/contact" }}
        secondaryButton={{ text: "Back to Services", href: "/marine/services" }}
      />
      <Footer />
    </>
  )
}

export default MarineEquipment
