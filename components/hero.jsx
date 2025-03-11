"use client";

import React from "react";
import Link from "next/link";
import { FlipWords } from "./ui/flip-words";
import { useScroll, useTransform } from "motion/react";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";
 
function Hero() {

  const words = ["Industries", "Construction", "Marine", "Trade", "Ventures"];
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
 
    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.25, 7]);
     const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.2, 7]);
     const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.15, 7]);
     const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.12, 7]);
     const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0.25, 7]);
    
  return (
    <>
     <div className="flex flex-col justify-center items-center mt-20 mb-[100px] md:mb-[120px] w-full">
      <div className="space-y-4 flex flex-col justify-center items-center mx-2 md:mx-[15%]">
        <h1 className="font-poppins text-white font-extrabold text-center text-3xl md:text-5xl">
          Building the Future
          <br />
          Across  <FlipWords words={words} className='text-white' /> <br />
        </h1>
     
        <div className="relative  flex flex-col justify-center items-center space-y-8">
          <h4 className=" text-center text-white text-sm md:text-base">
            From construction to marine engineering, and innovative hospitality
            solutions,Hworld is shaping tomorrow's world with sustainable,
            cutting-edge expertise.
          </h4>
          <img
            src={"/glowing light.png"}
            className="absolute top-4 md:-top-28 z-0"
            alt="light"
          />
          <Link href={"about"} className="z-10" >
          <button className=" z-10 bg-sec rounded-[40px] flex justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold">
            Learn More
          </button>
        </Link>
        </div>
      </div> 
      
    </div>
     {/* <GoogleGeminiEffect
               pathLengths={[
                 pathLengthFirst,
                 pathLengthSecond,
                 pathLengthThird,
                 pathLengthFourth,
                 pathLengthFifth,
               ]}
             /> */}
    </>
   
  );
}

export default Hero;
