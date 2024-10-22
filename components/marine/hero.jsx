import React from "react";
import Link from "next/link";
import Nav from "./nav";

function Hero() {
  return (
    <>
      <div
        className="bg-cover bg-center relative w-full"
        style={{ backgroundImage: "url('/bgmarine.png')" }}
      >
        <div className="relative z-20 w-full ">
          <Nav />
        </div>

        <div className="relative flex flex-col justify-center items-center py-44 mb-[150px] md:mb-[250px] w-full">
          <div className="space-y-4 flex flex-col justify-center items-center mx-4 md:mx-[20%]">
            <h1 className="font-poppins text-white font-extrabold text-center text-3xl md:text-5xl z-10">
              MARINE SERVICES
            </h1>

            <div className="z-10  flex flex-col justify-center items-center space-y-10">
              <h4 className=" text-center text-white text-sm md:text-base">
                Advanced Solutions for a Sustainable Marine Future
              </h4>
              <img
                src={"/glowing light.png"}
                className="absolute top-16 md:-top-20 z-0"
                alt="light"
              />
              <Link href={"#services"} className="z-10">
                <button className="z-10 bg-sec rounded-[40px] flex justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold">
                  Explore Services
                </button>
              </Link>
              <img src="/arrows.png" alt="" />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-over opacity-85 z-0"></div>
      </div>
    </>
  );
}

export default Hero;
