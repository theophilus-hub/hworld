"use client"

import Link from "next/link";
import React from "react";
import Slide from "../slide";

function Services() {
  return (
    <div id="services" className="flex flex-col space-y-14 md:space-y-32 justify-center items-center mb-[40px] md:mb-[50px] ">
     <Slide>
      <div className="text-center space-y-4 w-full xl:w-[75%] px-4">
        <h2 className="font-bold text-2xl md:text-5xl text-white">
          Marine services <span className="text-sec italic">for you</span>
        </h2>
        <p className="text-white text-xs md:text-base font-normal text-center">
          We provide comprehensive marine solutions tailored to meet the unique
          needs of the industry,
          delivering quality and innovation across all our projects.
        </p>
      </div>
     </Slide>
     
      
      <div className="w-full px-10 md:px-20 xl:px-44 space-y-16 md:space-y-28">

<Slide>
  <div className="flex flex-col justify-between md:flex-row h-full w-full  space-y-4 md:space-y-0 px-0 md:px-8">
          <div className="w-full h-full">
                      <img src="/marine1.png" alt="" className=" h-full w-full " />
          </div>
          <div className="mx-0 md:mx-4 w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-2 md:space-y-2">
            <h4 className="text-sec text-xl font-bold ">
            Rig Availability & Leasing
            </h4>
            <p className="text-xs md:text-sm lg:text-base text-white text-center md:text-left">
            Our Rig Availability & Leasing service offers a comprehensive portfolio of land, water, and offshore rigs. We provide flexible access to rigs tailored to meet diverse project needs, ensuring efficient deployment across various environments.
            </p>
          </div>
        </div>
</Slide>
<Slide>
   <div className="flex flex-col justify-evenly md:flex-row-reverse h-full w-full  space-y-4 md:space-y-0 px-0 md:px-8">        
        
        <div className="w-full h-full">
          <img src="/marine3.png" alt="" className=" h-full w-full " />
        </div>
          
        <div className="mx-0 md:mx-4 w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-2 md:space-y-2">
        <h4 className="text-sec text-xl font-bold ">
              Marine Design & Consultancy
            </h4>
            <p className="text-xs md:text-sm lg:text-base text-white text-center md:text-left">
            Our Exploration & Development services focus on uncovering new
              opportunities in the marine industry. We combine innovative
              approaches with deep industry knowledge to explore, plan, and
              develop projects that drive growth and sustainability.
            </p>
          </div>
        </div>
  </Slide>

       
  <Slide>
  <div className="flex flex-col justify-between md:flex-row h-full w-full  space-y-4 md:space-y-0 px-0 md:px-8">        
          
          <div className="w-full h-full">
          <img src="/marine2.png" alt="" className=" h-full w-full " />
        </div>
          
        <div className="mx-0 md:mx-4 w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-2 md:space-y-2">
        <h4 className="text-sec text-xl font-bold ">
            Transportation & Distribution
            </h4>
            <p className="text-xs md:text-sm lg:text-base text-white text-center md:text-left">
            Our Transportation & Distribution services ensure the efficient movement of goods across maritime routes. We leverage reliable logistics and advanced technologies to optimize the safe and timely delivery of cargo.
            </p>
          </div>
        </div>
  </Slide>
        
      </div>
      <Link href={"/marine/rigs"} className="z-10" >
          <button className="z-10 bg-sec rounded-[40px] flex justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold">
            See all Available Drilling Rigs
          </button>
        </Link>
    </div>
  );
}

export default Services;
