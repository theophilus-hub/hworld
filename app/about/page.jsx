"use client"

import Nav from "@/components/nav"
import AboutSub from "../../components/about/about"
import Team from "../../components/about/team"
import Career from "../../components/about/career"
import Values from "../../components/about/values"
import CTA from "@/components/cta"
import Footer from "../../components/footer"

function About() {
  return (
    <>
    <Nav />
    <AboutSub />
    <Team />
    <Values />
    <CTA 
      title="Ready to Learn More About Us?"
      description="Get in touch to discover how Hworld's expertise and values can support your next project."
      primaryButton={{ text: "Contact Us", href: "/contact" }}
      secondaryButton={{ text: "Back to Homepage", href: "/" }}
    />
    <Footer />
    
    </>
  )
}

export default About
