import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <div className="relative  flex flex-col justify-center items-center mt-20 mb-[150px] md:mb-[250px] w-full">
      <div className="space-y-4 flex flex-col justify-center items-center mx-4 md:mx-[20%]">
        <h1 className="font-poppins text-white font-extrabold text-center text-3xl md:text-5xl">
          Building the Future
          <br />
          Across Industries
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
          <button className="z-10 bg-sec rounded-[40px] flex justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold">
            Learn More
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
