import React from "react";
import Slide from "../slide";

function Team() {
  return (
    <div className="font-poppins relative  flex flex-col justify-center items-center  mb-[20px]  w-full">
      <div className="relative space-y-4 flex flex-col justify-center items-start w-full px-4 md:px-[10%]">
        <div className="py-2 md:py-20 w-full flex flex-col md:flex-row  flex-1 text-white justify-start items-start space-y-8 md:space-y-0">
          
        <Slide>
  <div className="w-full md:w-3/4 space-y-6 px-4 md:px-0">
            <h2 className="font-extrabold text-left text-3xl md:text-[40px]/[60px] w-full">
              We are passionate<br /> about
              <span className="text-sec italic"> our work.</span>
            </h2>

            <div className="space-y-4 md:space-y-6 font-normal text-xs md:text-base">
              <p>
                Our team is passionate about delivering quality results. Each
                project is approached with dedication, aiming for excellence in
                construction, marine engineering, and hospitality.
              </p>
              <p>
                Bringing together experience and creativity, we solve challenges
                and meet client needs. We take pride in our work and enjoy
                collaborating to achieve great results.
              </p>
            </div>
          </div>
  </Slide>
          
  <Slide>
  <div className=" flex flex-col w-full justify-start items-start py-0 px-4 md:px-10 space-y-12 md:space-y-28">
            <div className="space-y-4 w-full">
              <div className="space-y-10 w-full">
                <div className="space-y-4">
                    <h4 className="font-semibold text-sm md:text-lg italic">
                  Our Team
                </h4>
                <hr
                  className="border-0 w-full"
                  style={{
                    color: "",
                    backgroundColor: "#414141",
                    height: 1,
                  }}
                />
                </div>
                
                <img src="/team.png" alt="" />
              </div>
            </div>
          </div>
  </Slide>
          
        </div>
      </div>
    </div>
  );
}

export default Team;
