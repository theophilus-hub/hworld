"use client"

import Footer from "@/components/footer"
import Nav from "@/components/nav"
import React from 'react';
import Link from "next/link"
import Slide from "@/components/slide"
import CTA from "@/components/cta"
import DarkVeil from "@/src/components/DarkVeil"

function DisputeResolution() {
  const services = [
    { title: "Negotiation Support", description: "Expert assistance in direct negotiations to achieve amicable settlements." },
    { title: "Mediation Services", description: "Support throughout mediation including position statements and technical analysis." },
    { title: "Arbitration Support", description: "Comprehensive assistance for arbitration proceedings and submissions." },
    { title: "Litigation Assistance", description: "Expert support from case preparation through settlement negotiations." },
    { title: "Dispute Avoidance Strategies", description: "Proactive measures to identify issues and prevent disputes." },
    { title: "Multi-Party Dispute Management", description: "Specialized expertise handling complex disputes with multiple stakeholders." }
  ];

  const benefits = [
    "Faster resolution saving time and resources",
    "Reduced costs through efficient management",
    "Preservation of business relationships",
    "Confidentiality protecting sensitive information",
    "Expert technical support strengthening your position",
    "Flexible solutions tailored to your needs",
    "Reduced stress and disruption to operations",
    "Higher satisfaction through participation"
  ];

  return (
    <>
      <Nav />
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 lg:hidden"><DarkVeil hueShift={-150} noiseIntensity={0} scanlineIntensity={0} speed={0.8} scanlineFrequency={1} warpAmount={0.8} resolutionScale={1} /></div>
        <div className="absolute inset-0 w-full h-full z-0 hidden lg:block"><DarkVeil hueShift={-150} noiseIntensity={0} scanlineIntensity={0} speed={0.8} scanlineFrequency={1} warpAmount={0.8} resolutionScale={1.25} /></div>
        <img src="/glowing light.png" className="absolute top-0 left-1/2 -translate-x-1/2 opacity-40 z-0" alt="light" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-28 pb-12">
          <Slide><span className="inline-block px-4 py-2 rounded-full bg-sec/10 border border-sec/30 text-sec text-sm font-medium mb-6">Forensic Planning Services</span></Slide>
          <Slide><h1 className="font-poppins text-white font-extrabold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">Dispute <span className="text-sec">Resolution</span></h1></Slide>
          <Slide><p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">Effective strategies for resolving construction disputes efficiently through mediation, arbitration, and litigation.</p></Slide>
          <Slide>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact"><button className="bg-sec hover:bg-sec/90 text-dark rounded-full px-8 py-4 text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sec/20">Get Expert Support</button></Link>
              <a href="#services"><button className="bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 text-white rounded-full px-8 py-4 text-sm font-bold transition-all duration-300">Explore Services</button></a>
            </div>
          </Slide>
        </div>
      </section>

      <section className="py-6 md:py-8 bg-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Slide>
              <div className="relative">
                <img src="/services/9.png" alt="Dispute Resolution" className="rounded-2xl shadow-2xl shadow-black/50" />
                <div className="absolute -bottom-4 right-2 md:-bottom-6 md:-right-6 bg-sec text-dark px-4 py-2 md:px-6 md:py-4 rounded-xl font-bold text-sm md:text-lg shadow-lg">Collaborative Approach</div>
              </div>
            </Slide>
            <div className="space-y-6">
              <Slide><h2 className="text-white font-bold text-3xl md:text-4xl leading-tight">Strategic <span className="text-sec">Dispute Management</span></h2></Slide>
              <Slide><p className="text-white/70 text-base md:text-lg leading-relaxed">We focus on identifying core issues, analyzing evidence, and developing strategic plans to achieve favorable outcomes while preserving business relationships.</p></Slide>
              <Slide><p className="text-white/70 text-base md:text-lg leading-relaxed">Our experts work collaboratively with all parties to find consensual solutions using active listening, clear communication, and problem-solving.</p></Slide>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-6 md:py-8 bg-dark relative overflow-hidden">
        <img src="/glowing light.png" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" alt="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-10">
            <Slide>
              <span className="text-sec text-sm font-semibold tracking-wider uppercase">What We Offer</span>
              <h2 className="text-white font-bold text-3xl md:text-4xl mt-3">Our Dispute Resolution Services</h2>
            </Slide>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Slide key={index}>
                <div className="group h-full bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-sec/30 transition-all duration-300">
                  <h3 className="text-white font-bold text-lg mb-3 group-hover:text-sec transition-colors">{service.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>
                </div>
              </Slide>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8 bg-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Slide>
                <span className="text-sec text-sm font-semibold tracking-wider uppercase">Why Choose Us</span>
                <h2 className="text-white font-bold text-3xl md:text-4xl mt-3 mb-6">Benefits of Our <span className="text-sec">Dispute Resolution</span></h2>
              </Slide>
              <Slide><p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">Resolve construction conflicts efficiently while protecting your interests and maintaining relationships.</p></Slide>
              <Slide><Link href="/contact"><button className="bg-sec hover:bg-sec/90 text-dark rounded-full px-8 py-4 text-sm font-bold transition-all duration-300 hover:scale-105">Get Started Today</button></Link></Slide>
            </div>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <Slide key={index}>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-sec/20 transition-all duration-300">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-sec/10 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-sec" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <p className="text-white/80 text-sm">{benefit}</p>
                  </div>
                </Slide>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA title="Need Help Resolving a Construction Dispute?" description="Contact us today to discuss how our dispute resolution services can help resolve conflicts efficiently." primaryButton={{ text: "Contact Us", href: "/contact" }} secondaryButton={{ text: "Back to Forensics", href: "/adhoc/forensics" }} />
      <Footer />
    </>
  )
}

export default DisputeResolution
