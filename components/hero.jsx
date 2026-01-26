"use client";

import dynamic from "next/dynamic";
import React from "react";
import Link from "next/link";
import { FlipWords } from "./ui/flip-words";
import { useScroll, useTransform } from "motion/react";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";
import DarkVeil from "@/src/components/DarkVeil";
const NoSSRGlobe = dynamic(() => import("@/components/hworldGlobe"), {
  ssr: false,
});

function Hero() {
  const words = ["Industries", "Construction", "Marine", "Trade", "Ventures"];
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <>
      <div className="relative flex flex-col justify-center items-center mt-0 mb-0 w-full min-h-screen overflow-hidden">
        {/* DarkVeil Background - Mobile (lower resolution scale) */}
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
          src={"/glowing light.png"}
          className="absolute top-4 md:-top-28 z-20 pointer-events-none"
          alt="light"
        />
        
        {/* Main content grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 px-4 sm:px-8 md:px-12 py-6 mt-16 md:mt-8 w-full max-w-7xl mx-auto h-full items-center z-10">
          
          {/* Text content */}
          <div className="lg:col-span-3 space-y-6 flex flex-col justify-center items-center lg:items-start order-1">
            <h1 className="font-poppins text-white font-extrabold text-center lg:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
              Building the Future <br />
              Across <FlipWords words={words} className="text-white" />
            </h1>
            
            <div className="space-y-6 flex flex-col items-center lg:items-start max-w-2xl">
              <h4 className="text-center lg:text-left text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
                From construction to marine engineering, and innovative hospitality solutions, Hworld is shaping tomorrow's world with sustainable, cutting-edge expertise.
              </h4>
              
              <Link href={"about"} className="z-10 group">
                <button className="bg-sec hover:bg-transparent hover:border-2 hover:border-sec hover:text-white transition-all duration-150 rounded-[40px] flex justify-center items-center text-center px-8 py-3 text-sm md:text-base font-bold md:font-extrabold transform hover:scale-105">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          
          {/* Globe section */}
          <div className="lg:col-span-2 w-full flex justify-center items-center order-2">
            <div className="relative w-full max-w-md lg:max-w-full aspect-square">
              {/* Globe container with better responsive sizing */}
              <div className="w-full h-full min-h-[280px] sm:min-h-[320px] md:min-h-[400px] lg:min-h-[450px] xl:min-h-[500px]">
                <NoSSRGlobe />
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Optional: Scroll indicator for mobile */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:hidden">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
