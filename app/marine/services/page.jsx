"use client"

import Footer from "@/components/footer"
import Nav from "@/components/nav"
import Features from "@/components/marine/features"
import CTA from "@/components/cta"
import Link from "next/link"
import Slide from "@/components/slide"

function MarineServices() {
  return (
    <>
      <Nav />
      <div className="pt-28 pb-12">
        <Features />
        
        {/* Navigation Cards to Equipment & Rigs */}
        <div className="flex flex-col space-y-8 justify-center items-center mb-[40px] md:mb-[50px] w-full px-10 md:px-20 xl:px-44">
          <Slide>
            <div className="text-center space-y-4 w-full">
              <h2 className="font-bold text-2xl md:text-4xl text-white">
                Explore Our <span className="text-sec italic">Services</span>
              </h2>
              <p className="text-white text-xs md:text-base font-normal text-center">
                Choose from our comprehensive range of marine solutions
              </p>
            </div>
          </Slide>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            <Slide>
              <Link href="/marine/services/equipment">
                <div className="bg-ft rounded-3xl px-6 py-8 border-[3px] border-ftborder flex flex-col items-center justify-center space-y-4 hover:border-sec transition-all duration-300 cursor-pointer h-full">
                  <img src="/ft1.png" alt="" className="w-12 h-12" />
                  <h3 className="font-bold text-sec text-lg md:text-xl text-center">
                    Equipment & Solutions
                  </h3>
                  <p className="text-white text-sm text-center">
                    Comprehensive marine equipment, design consultancy, and transportation services
                  </p>
                  <button className="bg-sec hover:bg-sec/90 text-dark rounded-full px-6 py-2 text-sm font-bold transition-all duration-300">
                    Explore
                  </button>
                </div>
              </Link>
            </Slide>
            
            <Slide>
              <Link href="/marine/rigs">
                <div className="bg-ft rounded-3xl px-6 py-8 border-[3px] border-ftborder flex flex-col items-center justify-center space-y-4 hover:border-sec transition-all duration-300 cursor-pointer h-full">
                  <img src="/ft2.png" alt="" className="w-12 h-12" />
                  <h3 className="font-bold text-sec text-lg md:text-xl text-center">
                    Drilling Rigs
                  </h3>
                  <p className="text-white text-sm text-center">
                    Access our portfolio of land, water, and offshore drilling rigs for lease
                  </p>
                  <button className="bg-sec hover:bg-sec/90 text-dark rounded-full px-6 py-2 text-sm font-bold transition-all duration-300">
                    Explore
                  </button>
                </div>
              </Link>
            </Slide>
          </div>
        </div>
      </div>
      
      <CTA 
        title="Ready to Navigate Your Next Project?"
        description="Contact us today to discuss how our marine engineering expertise can support your offshore and maritime operations."
        primaryButton={{ text: "Contact Us", href: "/contact" }}
        secondaryButton={{ text: "Back to Marine", href: "/marine" }}
      />
      <Footer />
    </>
  )
}

export default MarineServices
