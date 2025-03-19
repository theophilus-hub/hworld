import Link from "next/link";
import { motion } from "motion/react";
import { LampContainer } from "./ui/lamp";
import Slide from "@/components/slide";

function About() {
  return (
    <div className="w-full mb-[100px] ">
      {/* <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 10 }}
        whileInView={{ opacity: 1, y: -400 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer> */}
      <Slide>
        <div className="flex flex-col justify-center items-center space-y-4 mx-6 md:mx-[25%]">
          <h1 className="text-white text-4xl font-bold">About Us</h1>
          <h3 className="text-center text-white text-sm md:text-base font-normal">
            At Hworld, we drive innovation across multiple sectors, including
            construction, marine engineering, and hospitality. Committed to
            sustainability and excellence, we deliver solutions that create
            lasting value for our clients and help shape a better future.
          </h3>
        </div>
      </Slide>

      <Slide>
        <div className="flex flex-col flex-1 mt-4">
          <div className="flex items-center justify-center px-4 my-2 md:px-40 w-full">
            <img src="/aboutnew.png" />
          </div>
        </div>
        <div className="relative mt-12 flex flex-col justify-center items-center space-y-8">
          <Link href={"about"}>
            <button className="bg-sec rounded-[40px] flex justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold">
              Learn More
            </button>
          </Link>
        </div>
      </Slide>
    </div>
  );
}

export default About;
