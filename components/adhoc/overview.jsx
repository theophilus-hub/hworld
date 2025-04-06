"use client";

import Link from "next/link";
import React from "react";
import Slide from "../slide";

function Overview() {
  return (
    <div
      id="services"
      className="flex flex-col  space-y-8 md:space-y-16 justify-center items-center mb-[100px] md:mb-[130px] "
    >
      <Slide >
        <div className="text-center flex flex-col margin-auto space-y-4 w-full md:px-24 xl:px-44 px-4">
          <h2 className="font-bold text-2xl md:text-5xl text-white">
          Flexible Support for <span className="text-sec italic">Critical </span> Moments
          </h2>
          <p className="text-white text-xs md:text-base font-normal text-center">
          Hworld’s Adhoc Services division is built to fill the gaps — fast. Whether it’s last-minute manpower, urgent logistics, technical backup, or on-the-fly project execution, we deploy trusted teams and tools to keep your operations moving. From construction and oil & gas to logistics and emergency planning, our support scales with your need.
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

export default Overview;
