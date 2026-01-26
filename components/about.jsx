import Link from "next/link";
import { motion } from "motion/react";
import Slide from "@/components/slide";
import Image from "next/image";

function About() {
  return (
    <div className="w-full mb-[40px] md:mb-[50px] px-4 md:px-8 lg:px-16">
      <Slide>
        <div className="flex flex-col justify-center items-center space-y-3 mb-8 md:mb-12">
          <h1 className="text-white text-3xl md:text-4xl font-bold text-center">
            Why Choose <span className="text-sec italic">Hworld</span>
          </h1>
          <p className="text-white/80 text-sm md:text-base text-center max-w-2xl">
            Delivering excellence across industries with proven expertise and innovation
          </p>
        </div>
      </Slide>

      <Slide>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto items-center">
          {/* Image Section */}
          <div className="lg:w-1/2 w-full">
            <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden">
              <Image 
                src="/newconst.png" 
                alt="Hworld Construction Excellence" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 w-full flex flex-col justify-center space-y-6">
            <div className="space-y-5">
              {/* Multi-Sector Expertise */}
              <div className="flex gap-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 pt-1">
                  <div className="w-2 h-2 bg-sec rounded-full"></div>
                  <div className="w-0.5 h-full bg-sec/30 mx-auto mt-1"></div>
                </div>
                <div className="pb-2">
                  <h3 className="text-white font-bold text-lg mb-1">Multi-Sector Expertise</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Specializing in Construction, Marine Engineering, Deal Sourcing, and Adhoc Project Planning with decades of combined experience.
                  </p>
                </div>
              </div>

              {/* Innovation & Sustainability */}
              <div className="flex gap-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 pt-1">
                  <div className="w-2 h-2 bg-sec rounded-full"></div>
                  <div className="w-0.5 h-full bg-sec/30 mx-auto mt-1"></div>
                </div>
                <div className="pb-2">
                  <h3 className="text-white font-bold text-lg mb-1">Innovation & Sustainability</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Committed to cutting-edge solutions that prioritize environmental responsibility and long-term value creation.
                  </p>
                </div>
              </div>

              {/* Proven Track Record */}
              <div className="flex gap-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 pt-1">
                  <div className="w-2 h-2 bg-sec rounded-full"></div>
                  <div className="w-0.5 h-full bg-sec/30 mx-auto mt-1"></div>
                </div>
                <div className="pb-2">
                  <h3 className="text-white font-bold text-lg mb-1">Proven Excellence</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    From large-scale infrastructure to precision marine operations, we deliver projects that exceed expectations.
                  </p>
                </div>
              </div>

              {/* End-to-End Solutions */}
              <div className="flex gap-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 pt-1">
                  <div className="w-2 h-2 bg-sec rounded-full"></div>
                </div>
                <div className="pb-2">
                  <h3 className="text-white font-bold text-lg mb-1">End-to-End Solutions</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Comprehensive project planning and execution with seamless coordination across all service areas.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/about" className="inline-block">
                <button className="bg-sec hover:bg-transparent hover:border-2 hover:border-sec hover:text-white transition-all duration-150 rounded-[40px] px-8 py-3 text-sm md:text-base font-bold md:font-extrabold transform hover:scale-105">
                  Discover Our Story
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default About;
