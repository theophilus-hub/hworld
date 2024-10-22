import Link from "next/link";
import React from "react";

function Services() {
  return (
    <div id="services" className="flex flex-col space-y-14 md:space-y-32 justify-center items-center mb-[150px] md:mb-[250px] ">
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
      <div className="w-full px-10 md:px-20 xl:px-72 space-y-20 md:space-y-48">

        <div className="flex flex-col md:flex-row h-full space-x-0 md:space-x-16 space-y-4 md:space-y-0">
          <img src="/marine1.png" alt="" />
          <div className="flex flex-col justify-center items-center md:items-start space-y-2 md:space-y-4">
            <h4 className="text-sec text-xl font-bold ">
            Rig Availability & Leasing
            </h4>
            <p className="text-xs md:text-base text-white text-center md:text-left">
            Our Rig Availability & Leasing service offers a comprehensive portfolio of land, water, and offshore rigs. We provide flexible access to rigs tailored to meet diverse project needs, ensuring efficient deployment across various environments.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse h-full space-x-0 space-y-4 md:space-y-0">
          <img src="/marine3.png" alt="" />
          <div className="pr-0 md:pr-16 flex flex-col justify-center items-center md:items-start space-y-2 md:space-y-4">
            <h4 className="text-sec text-xl font-bold ">
              Marine Design & Consultancy
            </h4>
            <p className="text-xs md:text-base text-white text-center md:text-left">
            Our Exploration & Development services focus on uncovering new
              opportunities in the marine industry. We combine innovative
              approaches with deep industry knowledge to explore, plan, and
              develop projects that drive growth and sustainability.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row h-full space-x-0 md:space-x-16 space-y-4 md:space-y-0">
          <img src="/marine2.png" alt="" />
          <div className="flex flex-col justify-center items-center md:items-start space-y-2 md:space-y-4">
            <h4 className="text-sec text-xl font-bold ">
            Transportation & Distribution
            </h4>
            <p className="text-xs md:text-base text-white text-center md:text-left">
            Our Transportation & Distribution services ensure the efficient movement of goods across maritime routes. We leverage reliable logistics and advanced technologies to optimize the safe and timely delivery of cargo.
            </p>
          </div>
        </div>
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
