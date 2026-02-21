"use client";
import Link from "next/link";
import Slide from "../slide";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

function ListHero() {
  return (
    <div className="bg-cover bg-center relative w-full pt-20">
      <div className="relative flex flex-col justify-center items-center pt-20 mb-[30px] md:mb-[40px] w-full">
        <div className=" space-y-16 flex flex-col justify-center items-center mx-4 lg:mx-[10%]">
          {/* <Slide>
            <h1 className="font-poppins text-white font-extrabold text-center text-3xl md:text-5xl z-10">
              Available Opportunities
            </h1>
          </Slide>

          <Slide>
            <img
              src="/dealslist2.jpg"
              alt=""
              className=" rounded-xl h-[40%] w-full"
            />
          </Slide>

          <div className="z-10 px-4 md:px-16 flex flex-col justify-center items-center space-y-10">
            <Slide>
              <h4 className=" text-left text-white text-sm md:text-base">
                Explore a curated lineup of verified, high-impact deals across
                construction, energy, government contracts, equipment supply,
                and global trade. Each opportunity is sourced with precision and
                vetted for value — ready for serious players looking to take
                action.
              </h4>
            </Slide>

            <img
              src={"/glowing light.png"}
              className="absolute -top-12 md:-top-16 z-0"
              alt="light"
            />
          </div> */}
        </div>
      </div>
     
    </div>
  );
}

export default ListHero;
