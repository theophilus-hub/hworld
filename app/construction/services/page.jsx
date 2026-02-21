"use client"

import Footer from "@/components/footer"
import Nav from "@/components/nav"
import Services from "@/components/construction/services"
import Features from "@/components/construction/features"
import CTA from "@/components/cta"

function ConstructionServices() {
  return (
    <>
      <Nav />
      <div className="pt-20">
        <Services />
        <Features />
      </div>
      <CTA 
        title="Ready to Build Your Vision?"
        description="Contact us today to discuss how our construction expertise can bring your project to life with precision and excellence."
        primaryButton={{ text: "Contact Us", href: "/contact" }}
        secondaryButton={{ text: "Back to Construction", href: "/construction" }}
      />
      <Footer />
    </>
  )
}

export default ConstructionServices
