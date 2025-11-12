"use client";

import Link from "next/link";
import React from "react";
import Slide from "../slide";

function Services() {
  return (
    <div
      id="services"
      className="flex flex-col space-y-14 md:space-y-32 justify-center items-center mb-[40px] md:mb-[50px] "
    >
      <Slide>
        <div className="text-center space-y-4 w-full xl:w-[75%] px-4">
          <h2 className="font-bold text-2xl md:text-5xl text-white">
            How we are here <span className="text-sec italic">for you</span>
          </h2>
          <p className="text-white text-xs md:text-base font-normal text-center">
            Providing reliable, innovative, and high-quality construction
            solutions tailored to your needs.
          </p>
        </div>
      </Slide>

      <div className="w-full px-10 md:px-20 xl:px-44 space-y-16 md:space-y-28">
        <Slide>
          <div className="flex flex-col justify-between md:flex-row h-full w-full  space-y-4 md:space-y-0 px-0 md:px-8">
            <div className="w-full h-full">
              <img src="/con1.png" alt="" className=" h-full w-full " />
            </div>
            <div className="mx-0 md:mx-4 w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-2 md:space-y-2">
              <h4 className="text-sec text-xl font-bold ">
                Design & Engineering
              </h4>
              <p className="text-xs md:text-sm lg:text-base text-white text-center md:text-left">
                Our expert team transforms ideas into reality with
                precision-driven design and engineering solutions. From concept
                development to structural planning, we ensure every project is
                built on innovation, efficiency, and sustainability.
              </p>
            </div>
          </div>
        </Slide>
        <Slide>
          <div className="flex flex-col justify-evenly md:flex-row-reverse h-full w-full  space-y-4 md:space-y-0 px-0 md:px-8">
            <div className="w-full h-full">
              <img src="/con2.png" alt="" className=" h-full w-full " />
            </div>

            <div className="mx-0 md:mx-4 w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-2 md:space-y-2">
              <h4 className="text-sec text-xl font-bold ">
                Project Planning & Consultancy
              </h4>
              <p className="text-xs md:text-sm lg:text-base text-white text-center md:text-left">
                We provide strategic project planning and expert consultancy to
                ensure seamless execution from start to finish. Our team
                optimizes resources, mitigates risks, and delivers
                cost-effective solutions tailored to your construction goals.
              </p>
            </div>
          </div>
        </Slide>

        <Slide>
          <div className="flex flex-col justify-between md:flex-row h-full w-full  space-y-4 md:space-y-0 px-0 md:px-8">
            <div className="w-full h-full">
              <img src="/con3.png" alt="" className=" h-full w-full " />
            </div>

            <div className="mx-0 md:mx-4 w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-2 md:space-y-2">
              <h4 className="text-sec text-xl font-bold ">
                Maintenance & Operations
              </h4>
              <p className="text-xs md:text-sm lg:text-base text-white text-center md:text-left">
                We ensure the longevity and efficiency of your structures with
                expert maintenance and operational support. From routine
                inspections to specialized repairs, our team keeps your
                facilities running safely and smoothly.
              </p>
            </div>
          </div>
        </Slide>
      </div>
      <Link href={"/construction/services"} className="z-10">
        <button className="z-10 bg-sec rounded-[40px] flex justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold">
          See All Our Services
        </button>
      </Link>
    </div>
  );
}

export default Services;
