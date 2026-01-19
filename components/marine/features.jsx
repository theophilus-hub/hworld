import React from "react";
import Slide from "../slide";

function Features() {
  return (
    <div className="flex flex-col space-y-6 md:space-y-32 justify-center items-center mb-[40px] md:mb-[50px] w-full">
      <Slide>
        <div className="text-center space-y-4 w-full px-4 md:px-20 xl:px-44 mx-auto">
          <h2 className="font-bold text-2xl md:text-5xl text-white">
            Solutions Designed to Drive
            <br />
            <span className="text-sec italic">Your Success</span>
          </h2>
          <p className="text-white text-xs md:text-sm lg:text-base font-normal text-center">
            We provide tailored services and innovative solutions to ensure your
            projects succeed, no matter the scale or environment.
          </p>
        </div>
      </Slide>

      <div className=" w-full px-10 md:px-20 xl:px-72">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-4 md:gap-y-8">
          <Slide>
            <div className="bg-ft rounded-3xl md:h-52 px-4 lg:px-6 py-4 lg:py-8 border-[3px] border-ftborder flex flex-col items-start justify-start space-y-4">
              <div className="flex space-x-2 items-center">
                <img src="ft1.png" alt="" />
                <h2 className="font-bold text-sec text-sm lg:text-lg">
                  Flexible Leasing
                </h2>
              </div>
              <div>
                <p className="text-white text-xs md:text-sm lg:text-base">
                  Select flexible terms, starting from just 2 years, to keep
                  your projects running smoothly without the burden of upfront
                  capital.
                </p>
              </div>
            </div>
          </Slide>

          <Slide>
            <div className="bg-ft rounded-3xl md:h-52 px-4 lg:px-6 py-4 lg:py-8 border-[3px] border-ftborder flex flex-col items-start justify-start space-y-4">
              <div className="flex space-x-2 items-center">
                <img src="ft2.png" alt="" />
                <h2 className="font-bold text-sec text-sm lg:text-lg">
                  Reliable Rigs
                </h2>
              </div>
              <div>
                <p className="text-white text-xs md:text-sm lg:text-base">
                  Our rigs require minimal maintenance and include a stock of
                  spare parts, guaranteeing continuous operations without
                  delays.
                </p>
              </div>
            </div>
          </Slide>

          <Slide>
            <div className="bg-ft rounded-3xl md:h-52 px-4 lg:px-6 py-4 lg:py-8 border-[3px] border-ftborder flex flex-col items-start justify-start space-y-4">
              <div className="flex space-x-2 items-center">
                <img src="ft3.png" alt="" />
                <h2 className="font-bold text-sec text-sm lg:text-lg">
                  Customized Agreements
                </h2>
              </div>
              <div>
                <p className="text-white text-xs md:text-sm lg:text-base">
                  Customize your lease to align with tender requirements or
                  drilling scope, offering maximum operational flexibility.
                </p>
              </div>
            </div>
          </Slide>

          <Slide>
            <div className="bg-ft rounded-3xl md:h-52 px-4 lg:px-6 py-4 lg:py-8 border-[3px] border-ftborder flex flex-col items-start justify-start space-y-4">
              <div className="flex space-x-2 items-center">
                <img src="ft1.png" alt="" />
                <h2 className="font-bold text-sec text-sm lg:text-lg">
                  Growth Without Cost
                </h2>
              </div>
              <div>
                <p className="text-white text-xs md:text-sm lg:text-base">
                  Grow your rig fleet without the initial capital expenses or
                  concerns about depreciation.
                </p>
              </div>
            </div>
          </Slide>

          <Slide>
            <div className="bg-ft rounded-3xl md:h-52 px-4 lg:px-6 py-4 lg:py-8 border-[3px] border-ftborder flex flex-col items-start justify-start space-y-4">
              <div className="flex space-x-2 items-center">
                <img src="ft2.png" alt="" />
                <h2 className="font-bold text-sec text-sm lg:text-lg">
                  Decades of Experience
                </h2>
              </div>
              <div>
                <p className="text-white text-xs md:text-sm lg:text-base">
                  Utilize our extensive experience in drilling and oil field
                  services to guarantee the success of your project.
                </p>
              </div>
            </div>
          </Slide>
          <Slide>
            <div className="bg-ft rounded-3xl md:h-52 px-4 lg:px-6 py-4 lg:py-8 border-[3px] border-ftborder flex flex-col items-start justify-start space-y-4">
              <div className="flex space-x-2 items-center">
                <img src="ft3.png" alt="" />
                <h2 className="font-bold text-sec text-sm lg:text-lg">
                  Comprehensive Support
                </h2>
              </div>
              <div>
                <p className="text-white text-xs md:text-sm lg:text-base">
                  Our team is ready to assist you from lease agreement to
                  operational deployment, facilitating a seamless process.
                </p>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default Features;
