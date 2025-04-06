import React from "react";
import Slide from "../slide";

function Career() {
  return (
    <Slide>
      <div className="font-poppins relative  flex flex-col justify-center items-center  mb-[100px] md:mb-[250px] w-full">
      <div className=" relative space-y-4 flex flex-col justify-center items-start w-full px-4 md:px-[10%]">
      
   <div className="space-y-4 w-full">
          <h4 className="text-white font-semibold text-sm md:text-lg italic">
            Careers
          </h4>
          <hr
            className="border-0 w-full"
            style={{
              color: "",
              backgroundColor: "#414141",
              height: 1,
            }}
          />
          <h2 className="text-white font-extrabold text-center text-3xl md:text-[40px]/[60px] w-full">
            We believe success is driven by <br />
            <span className="text-sec italic">talented indivuals.</span>
          </h2>
        </div>
 
       
        <div className=" py-12 md:py-20 w-full flex flex-col md:flex-row  flex-1 text-white justify-start items-start space-y-8 md:space-y-0">
          <div className="w-full md:w-3/4 space-y-6 px-4 md:px-0">
            <div className="space-y-4 md:space-y-6 font-normal text-xs md:text-base">
              <p>
                We believe in building a team that’s passionate, driven, and
                ready to make an impact. Every role at Hworld offers the
                opportunity to grow, innovate, and contribute to meaningful
                projects across construction, marine engineering, and
                hospitality.
              </p>
              <p>
                Our work environment encourages collaboration, creativity, and
                continuous learning. We’re always looking for talented
                individuals who share our commitment to excellence and are
                excited to shape the future with us.
              </p>
            </div>
          </div>

          <div className=" flex flex-col w-full justify-start items-start py-0 px-4 md:px-10 space-y-12 md:space-y-28">
            <div className="space-y-4 w-full">
              <div className="space-y-10 w-full">
                <img src="/careers.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Slide>
    
  );
}

export default Career;
