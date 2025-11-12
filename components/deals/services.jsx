"use client";

import Link from "next/link";
import React from "react";
import Slide from "../slide";

function Services() {
  return (
    <div
      id="services"
      className="flex flex-col  space-y-8 md:space-y-16 justify-center items-center mb-[40px] md:mb-[50px] "
    >
      <Slide >
        <div className="text-center flex flex-col margin-auto space-y-4 w-full md:px-24 xl:px-44 px-4">
          <h2 className="font-bold text-2xl md:text-5xl text-white">
          Unlocking Global <span className="text-sec italic">Opportunities</span>
          </h2>
          <p className="text-white text-xs md:text-base font-normal text-center">
          At Hworld, we don’t just identify opportunities — we unlock them. From billion-dollar infrastructure projects to niche government contracts, oil & gas ventures, construction deals, and international trade, our deal sourcing network is designed to put the right opportunities in the right hands.
          </p>
        </div>
      </Slide>

    <Slide>
      <div className="flex flex-col justify-center items-center">
        <Link href={"/deals/list"} className="z-10">
        <button className="z-10 bg-sec rounded-[40px] flex justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold">
          See All Available Deals
        </button>
      </Link>
      </div>
       
    </Slide>
     
    </div>
  );
}

export default Services;
