import React from "react";
import Slide from "../slide";

function Services() {
  return (
    <div className="font-poppins relative  flex flex-col justify-center items-center  mb-[20px] md:mb-[40px] w-full">
      <div className="relative space-y-4 flex flex-col justify-center items-start w-full px-4 md:px-8 lg:px-[10%]">
        <div className=" py-2 md:py-4 w-full flex flex-col md:grid md:grid-cols-2   text-white justify-start items-start space-y-2 md:space-y-0">
        <Slide>
  <div className="w-full  space-y-1 px-4 ">
            <h2 className="font-extrabold text-left text-3xl md:text-[40px]/[60px] w-full">
            Service <br />
              <span className="text-sec italic"> Categories </span>
             
            </h2>
          </div>
  </Slide>
          
          
          <img
          src={"/glowing light.png"}
          className="absolute -bottom-10 md:-bottom-32  opacity-30"
          alt="light"
        />

          <div className=" flex flex-col w-full justify-start items-start py-0 px-4 md:px-8 space-y-1 md:space-y-2">
            <div className="space-y-4 w-full">
              <div className="space-y-4 w-full">
                

                <div className="grid grid-cols-2 gap-x-2 md:gap-x-6 gap-y-5 md:gap-y-10 justify-center items-start">
                <Slide>
   <div className="space-y-2  w-full flex flex-col items-start justify-start ">
                    <img src="/bulb.png" alt="" />
                    <h2 className="font-bold text-base md:text-lg">Project Planning</h2>
                    <p className="font-normal text-xs md:text-sm">
                    Quick-turn project frameworks, feasibility checks, and mobilization plans.
                    </p>
                  </div>
  </Slide>
  <Slide>
  <div className="space-y-2  w-full flex flex-col items-start justify-start ">
                    <img src="/shake.png" alt="" />
                    <h2 className="font-bold text-base md:text-lg">Skilled Manpower</h2>
                    <p className="font-normal text-xs md:text-sm">
                    Certified professionals for short-notice deployment — engineers, techs, logistics experts.
                    </p>
                  </div>
  </Slide>
  <Slide>
  <div className="space-y-2  w-full flex flex-col items-start justify-start ">
                    <img src="/shield.png" alt="" />
                    <h2 className="font-bold text-base md:text-lg">Equipment & Logistics Support</h2>
                    <p className="font-normal text-xs md:text-sm">
                    Temporary setups, machinery rental, or transport for short-term needs.
                    </p>
                  </div>
  </Slide>
  <Slide>
  <div className="space-y-2  w-full flex flex-col items-start justify-start ">
                    <img src="/heart.png" className=" " alt="" />
                    <h2 className="font-bold text-base md:text-lg">Site Operations</h2>
                    <p className="font-normal text-xs md:text-sm">
                    Rapid setup of operational stations, field teams, and support hubs.
                    </p>
                  </div>
  </Slide>
  <Slide>
  <div className=" space-y-2  w-full flex flex-col items-start justify-start ">
                    <img src="/star.png" alt="" />
                    <h2 className="font-bold text-base md:text-lg"> Special Projects</h2>
                    <p className="font-normal text-xs md:text-sm">
                    Custom, undefined, or unusual task execution — we step in when others can’t.
                    </p>
                  </div>
  </Slide>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <Slide>
           <div className=" flex flex-col w-full justify-start items-start py-0 px-4 md:px-10 space-y-2 md:space-y-6">
            <div className="space-y-4 w-full">
              <div className="space-y-10 w-full">
                <img src="/adhocgrid1.png" alt="" className="rounded-3xl" />
              </div>
            </div>
          </div>
        </Slide>
       
      </div>
    </div>
  );
}

export default Services;
