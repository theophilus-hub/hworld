import React from "react";
import Slide from "@/components/slide";

function Career() {
  return (
    <div className="w-full mb-[100px] " id="careers">
      <Slide>
        <div className="flex flex-col justify-center items-center space-y-4 mx-6 md:mx-[25%]">
          <h1 className="text-white text-4xl font-bold">Careers</h1>
          <h3 className="text-center text-white text-sm md:text-base font-normal">
            Join Hworld and help shape the future across industries. We offer
            opportunities for growth and a dynamic work environment. Explore our
            open positions and start your journey with us today.
          </h3>
        </div>
      </Slide>
      <Slide>
        <div className="flex flex-col flex-1 mt-4">
          <div className="flex items-center justify-center px-4 my-2 md:px-40 w-full">
            <img src="/career.png" />
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default Career;
