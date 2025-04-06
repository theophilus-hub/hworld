import React from "react";
import Slide from "../slide";

function Values() {
  return (
    <div className="font-poppins relative  flex flex-col justify-center items-center  mb-[50px] md:mb-[100px] w-full">
      <div className="relative space-y-4 flex flex-col justify-center items-start w-full px-4 md:px-8 lg:px-[10%]">
        <div className=" py-12 md:py-20 w-full flex flex-col md:grid md:grid-cols-2   text-white justify-start items-start space-y-8 md:space-y-0">
        <Slide>
  <div className="w-full md:w-full space-y-6 px-4 ">
            <h2 className="font-extrabold text-left text-3xl md:text-[40px]/[60px] w-full">
              We
              <span className="text-sec italic"> believe </span>
              in the same things and that’s why we are thriving.
            </h2>
          </div>
  </Slide>
          
          
          <img
          src={"/glowing light.png"}
          className="absolute -bottom-10 md:-bottom-32  opacity-30"
          alt="light"
        />

          <div className=" flex flex-col w-full justify-start items-start py-0 px-4 md:px-8 space-y-12 md:space-y-28">
            <div className="space-y-4 w-full">
              <div className="space-y-10 w-full">
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm md:text-lg italic">
                    Core Values
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

                <div className="grid grid-cols-2 gap-x-2 md:gap-x-6 gap-y-10 md:gap-y-20 justify-center items-start">
                <Slide>
   <div className="space-y-2  w-full flex flex-col items-start justify-start ">
                    <img src="/bulb.png" alt="" />
                    <h2 className="font-bold text-base md:text-lg">Innovation</h2>
                    <p className="font-normal text-xs md:text-sm">
                      We embrace creativity and forward-thinking, continually
                      seeking new ways to deliver value to our clients.
                    </p>
                  </div>
  </Slide>
  <Slide>
  <div className="space-y-2  w-full flex flex-col items-start justify-start ">
                    <img src="/shake.png" alt="" />
                    <h2 className="font-bold text-base md:text-lg">Collaboration</h2>
                    <p className="font-normal text-xs md:text-sm">
                      We believe in the power of teamwork and work closely
                      together to achieve our common goals.
                    </p>
                  </div>
  </Slide>
  <Slide>
  <div className="space-y-2  w-full flex flex-col items-start justify-start ">
                    <img src="/shield.png" alt="" />
                    <h2 className="font-bold text-base md:text-lg">Collaboration</h2>
                    <p className="font-normal text-xs md:text-sm">
                      We conduct our business with the highest ethical
                      standards, ensuring trust and transparency in all our
                      relationships.
                    </p>
                  </div>
  </Slide>
  <Slide>
  <div className="space-y-2  w-full flex flex-col items-start justify-start ">
                    <img src="/heart.png" className=" " alt="" />
                    <h2 className="font-bold text-base md:text-lg">Respect</h2>
                    <p className="font-normal text-xs md:text-sm">
                      We value diversity and treat everyone with respect,
                      fostering an inclusive environment where all voices are
                      heard.
                    </p>
                  </div>
  </Slide>
  <Slide>
  <div className=" space-y-2  w-full flex flex-col items-start justify-start ">
                    <img src="/star.png" alt="" />
                    <h2 className="font-bold text-base md:text-lg">Excellence</h2>
                    <p className="font-normal text-xs md:text-sm">
                      We strive for the highest level of quality in everything
                      we do, from the smallest detail to the largest project.
                    </p>
                  </div>
  </Slide>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;
