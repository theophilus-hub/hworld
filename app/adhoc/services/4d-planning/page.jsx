"use client"

import Footer from "@/components/footer"
import Nav from "@/components/nav"
import React from 'react';
import Link from "next/link"
import Slide from "@/components/slide"
import CTA from "@/components/cta"
import DarkVeil from "@/src/components/DarkVeil"

function FourDPlanning() {
  const services = [
    {
      title: "Claims Visualization",
      description: "Visualize your programme in detail, providing powerful supporting evidence for claims and dispute resolution through clear timeline representations.",
      icon: "📊"
    },
    {
      title: "Clash Detection",
      description: "Identify and resolve spatial conflicts before construction begins, preventing costly on-site issues through early visualization.",
      icon: "🔍"
    },
    {
      title: "Sequencing",
      description: "Compare as-built progress to the plan through spatial coordination, creating optimal construction sequences.",
      icon: "📐"
    },
    {
      title: "Scenario Options",
      description: "Test multiple construction approaches to identify the most efficient and cost-effective solutions.",
      icon: "🎯"
    },
    {
      title: "Progress Visualization",
      description: "Simplify complex data into clear, accessible 3D visualizations for all stakeholders.",
      icon: "📈"
    },
    {
      title: "Stakeholder Communication",
      description: "Ensure everyone from site workers to board members understands project timelines through intuitive visual tools.",
      icon: "🤝"
    }
  ];

  const benefits = [
    "Time and cost efficiency through early identification of potential issues",
    "Peace of mind through 3D visualization of progress against planned work",
    "Simplified progress data accessible to all stakeholders",
    "Early detection of construction issues before they occur on site",
    "Enhanced stakeholder engagement through clear visual communication",
    "Improved decision-making based on accurate visual representations",
    "Reduced rework and on-site waste through pre-construction virtual testing",
    "Better coordination between different trades and construction phases"
  ];

  return (
    <>
      <Nav />
      
      {/* Hero Section - Compact with DarkVeil */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* DarkVeil Background - Mobile */}
        <div className="absolute inset-0 w-full h-full z-0 lg:hidden">
          <DarkVeil
            hueShift={-150}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={0.8}
            scanlineFrequency={1}
            warpAmount={0.8}
            resolutionScale={1}
          />
        </div>
        {/* DarkVeil Background - Desktop */}
        <div className="absolute inset-0 w-full h-full z-0 hidden lg:block">
          <DarkVeil
            hueShift={-150}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={0.8}
            scanlineFrequency={1}
            warpAmount={0.8}
            resolutionScale={1.25}
          />
        </div>
        
        <img
          src="/glowing light.png"
          className="absolute top-0 left-1/2 -translate-x-1/2 opacity-40 z-0"
          alt="light"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-28 pb-12">
          <Slide>
            <span className="inline-block px-4 py-2 rounded-full bg-sec/10 border border-sec/30 text-sec text-sm font-medium mb-6">
              Award-Winning Specialists
            </span>
          </Slide>
          <Slide>
            <h1 className="font-poppins text-white font-extrabold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              4D <span className="text-sec">Planning</span>
            </h1>
          </Slide>
          <Slide>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              Helping you deal with claims, clash detection, sequencing & scenario options 
              within construction projects through cutting-edge visualization technology.
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

      {/* Quote Section */}
      <section className="relative py-6 md:py-8 bg-gradient-to-b from-dark to-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Slide>
            <div className="relative">
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-sec/20 text-[120px] font-serif leading-none">"</span>
              <blockquote className="text-white text-xl md:text-2xl lg:text-3xl font-light italic leading-relaxed relative z-10">
                Redesign should take place on the computer, not on the construction site.
              </blockquote>
              <cite className="block mt-6 text-sec font-medium not-italic">
                — Sir John Egan, 1998
              </cite>
            </div>
          </Slide>
        </div>
      </section>

      {/* About Section - Two Columns */}
      <section className="py-6 md:py-8 bg-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Slide>
              <div className="relative">
                <img 
                  src="/services/1.png" 
                  alt="4D Planning Visualization" 
                  className="rounded-2xl shadow-2xl shadow-black/50"
                />
                <div className="absolute -bottom-4 right-2 md:-bottom-6 md:-right-6 bg-sec text-dark px-4 py-2 md:px-6 md:py-4 rounded-xl font-bold text-sm md:text-lg shadow-lg">
                  Synchro • Revit • AutoCAD
                </div>
              </div>
            </Slide>
            
            <div className="space-y-8">
              <Slide>
                <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight">
                  Visualized Project Planning with 
                  <span className="text-sec"> Advanced Software</span>
                </h2>
              </Slide>
              <Slide>
                <p className="text-white/70 text-base md:text-lg leading-relaxed">
                  4D planning is key to Metisplan's approach—providing the right data in a 
                  visualized manner at the right time to make the best decisions on complex 
                  projects, even before construction begins.
                </p>
              </Slide>
              <Slide>
                <p className="text-white/70 text-base md:text-lg leading-relaxed">
                  We combine industry-standard planning software with Synchro, seamlessly 
                  integrating with 3D modeling CAD software like Revit and AutoCAD to deliver 
                  market-leading visualization capabilities.
                </p>
              </Slide>
              <Slide>
                <div className="flex items-center gap-4 pt-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-sec/50 to-transparent"></div>
                  <span className="text-sec text-sm font-medium">Industry Leading Technology</span>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-6 md:py-8 bg-dark relative overflow-hidden">
        <img
          src="/glowing light.png"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
          alt="light"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <Slide>
              <span className="text-sec text-sm font-semibold tracking-wider uppercase">What We Offer</span>
              <h2 className="text-white font-bold text-3xl md:text-4xl mt-3">
                Our 4D Planning Services
              </h2>
            </Slide>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Slide key={index}>
                <div className="group h-full bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.06] hover:border-sec/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-5">{service.icon}</div>
                  <h3 className="text-white font-bold text-xl mb-3 group-hover:text-sec transition-colors">
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
                <h2 className="text-white font-bold text-3xl md:text-4xl mt-3 mb-8">
                  Benefits of Our <span className="text-sec">4D Planning</span> Services
                </h2>
              </Slide>
              <Slide>
                <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
                  Transform your project delivery with visualization technology that provides 
                  clarity, reduces risk, and improves stakeholder alignment throughout the 
                  construction lifecycle.
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
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <Slide key={index}>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-sec/20 transition-all duration-300">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sec/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-sec" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white/80 text-sm md:text-base">{benefit}</p>
                  </div>
                </Slide>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title="Ready to Transform Your Project Planning?"
        description="Contact us today to discuss how our 4D planning services can help your organization visualize, optimize, and successfully deliver your construction projects."
        primaryButton={{ text: "Contact Us", href: "/contact" }}
        secondaryButton={{ text: "Back to Services", href: "/adhoc/services" }}
      />
      
      <Footer />
    </>
  )
}

export default FourDPlanning

