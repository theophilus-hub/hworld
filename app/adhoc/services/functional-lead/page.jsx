"use client"

import Footer from "@/components/footer"
import Nav from "@/components/nav"
import React from 'react';
import Link from "next/link"
import Slide from "@/components/slide"
import CTA from "@/components/cta"
import DarkVeil from "@/src/components/DarkVeil"

function FunctionalLead() {
  const services = [
    {
      title: "Planning & Scheduling Leadership",
      description: "Expert leadership in developing and managing project schedules throughout the lifecycle.",
    },
    {
      title: "Programme Management",
      description: "Coordinated management of multiple projects to achieve strategic objectives.",
    },
    {
      title: "Resource Management",
      description: "Strategic allocation and optimization of resources across projects.",
    },
    {
      title: "Process Development",
      description: "Standardized planning processes tailored to your organization's needs.",
    },
    {
      title: "Team Building & Mentoring",
      description: "Knowledge transfer and training to build sustainable in-house expertise.",
    },
    {
      title: "Stakeholder Management",
      description: "Effective communication ensuring alignment and collaborative resolution.",
    }
  ];

  const benefits = [
    "Immediate access to specialized planning expertise",
    "Reduced overhead costs vs full-time specialized staff",
    "Implementation of industry best practices",
    "Scalable resources that flex with project demands",
    "Knowledge transfer for long-term sustainability",
    "Consistent planning standards across projects",
    "Independent perspective on planning challenges",
    "Seamless integration with existing structures"
  ];

  return (
    <>
      <Nav />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 lg:hidden">
          <DarkVeil hueShift={-150} noiseIntensity={0} scanlineIntensity={0} speed={0.8} scanlineFrequency={1} warpAmount={0.8} resolutionScale={1} />
        </div>
        <div className="absolute inset-0 w-full h-full z-0 hidden lg:block">
          <DarkVeil hueShift={-150} noiseIntensity={0} scanlineIntensity={0} speed={0.8} scanlineFrequency={1} warpAmount={0.8} resolutionScale={1.25} />
        </div>
        
        <img src="/glowing light.png" className="absolute top-0 left-1/2 -translate-x-1/2 opacity-40 z-0" alt="light" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-28 pb-12">
          <Slide>
            <span className="inline-block px-4 py-2 rounded-full bg-sec/10 border border-sec/30 text-sec text-sm font-medium mb-6">
              Experienced & Disciplined Experts
            </span>
          </Slide>
          <Slide>
            <h1 className="font-poppins text-white font-extrabold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Functional <span className="text-sec">Lead</span>
            </h1>
          </Slide>
          <Slide>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              Access top-tier planning capabilities without the overhead of developing them internally. We integrate seamlessly with your operations.
            </p>
          </Slide>
          <Slide>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <button className="bg-sec hover:bg-sec/90 text-dark rounded-full px-8 py-4 text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sec/20">
                  Start Your Project
                </button>
              </Link>
              <a href="#services">
                <button className="bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 text-white rounded-full px-8 py-4 text-sm font-bold transition-all duration-300">
                  Explore Services
                </button>
              </a>
            </div>
          </Slide>
        </div>
      </section>

      {/* About Section */}
      <section className="py-6 md:py-8 bg-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Slide>
              <div className="relative">
                <img src="/funclead.png" alt="Functional Lead Service" className="rounded-2xl shadow-2xl shadow-black/50" />
                <div className="absolute -bottom-4 right-2 md:-bottom-6 md:-right-6 bg-sec text-dark px-4 py-2 md:px-6 md:py-4 rounded-xl font-bold text-sm md:text-lg shadow-lg">
                  Flexible Solutions
                </div>
              </div>
            </Slide>
            
            <div className="space-y-6">
              <Slide>
                <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight">
                  Specialized Expertise 
                  <span className="text-sec"> On Demand</span>
                </h2>
              </Slide>
              <Slide>
                <p className="text-white/70 text-base md:text-lg leading-relaxed">
                  Creating competitive advantage is expensive, especially when investing in skill-sets outside your core business. We help you access planning capabilities without that overhead.
                </p>
              </Slide>
              <Slide>
                <p className="text-white/70 text-base md:text-lg leading-relaxed">
                  We act as your functional lead for individual projects or portfolios, with specific duration appointments or long-term planning function development.
                </p>
              </Slide>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-6 md:py-8 bg-dark relative overflow-hidden">
        <img src="/glowing light.png" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" alt="light" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-10">
            <Slide>
              <span className="text-sec text-sm font-semibold tracking-wider uppercase">What We Offer</span>
              <h2 className="text-white font-bold text-3xl md:text-4xl mt-3">Our Functional Lead Services</h2>
            </Slide>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Slide key={index}>
                <div className="group h-full bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-sec/30 transition-all duration-300">
                  <h3 className="text-white font-bold text-lg mb-3 group-hover:text-sec transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Slide>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-6 md:py-8 bg-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Slide>
                <span className="text-sec text-sm font-semibold tracking-wider uppercase">Why Choose Us</span>
                <h2 className="text-white font-bold text-3xl md:text-4xl mt-3 mb-6">
                  Benefits of Our <span className="text-sec">Functional Lead</span>
                </h2>
              </Slide>
              <Slide>
                <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
                  Develop and implement effective planning functions for your projects and programmes with our tried and trusted team.
                </p>
              </Slide>
              <Slide>
                <Link href="/contact">
                  <button className="bg-sec hover:bg-sec/90 text-dark rounded-full px-8 py-4 text-sm font-bold transition-all duration-300 hover:scale-105">
                    Get Started Today
                  </button>
                </Link>
              </Slide>
            </div>
            
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <Slide key={index}>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-sec/20 transition-all duration-300">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-sec/10 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-sec" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white/80 text-sm">{benefit}</p>
                  </div>
                </Slide>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA 
        title="Ready to Enhance Your Planning Capabilities?"
        description="Contact us today to discuss how our functional lead service can help your organization develop effective planning functions."
        primaryButton={{ text: "Contact Us", href: "/contact" }}
        secondaryButton={{ text: "Back to Services", href: "/adhoc/services" }}
      />
      
      <Footer />
    </>
  )
}

export default FunctionalLead

