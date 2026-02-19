import React from "react";


function About() {
  return (
    <div className="font-poppins relative  flex flex-col justify-center items-center mt-24 mb-[10px] w-full">
      <div className="relative space-y-4 flex flex-col justify-center items-start w-full px-4 md:px-[10%]">
        <h1 className="opacity-60 font-poppins px-4 text-white font-bold text-left text-xl md:text-3xl">
          About Us
        </h1>
        <img
          src={"/glowing light.png"}
          className="absolute -top-12 md:-top-28 opacity-30 z-0"
          alt="light"
        />

        <div className="py-6 w-full flex flex-col md:flex-row  flex-1 text-white justify-start items-start space-y-4 md:space-y-0">
          <h2 className="font-extrabold px-4 text-left text-3xl md:text-5xl/[70px] w-full">
            We are your <br />
            partners in every <br />
            <span className="text-sec italic"> possibility.</span>
          </h2>
          <div className=" flex flex-col w-full justify-start items-start py-0 px-4 md:px-10 space-y-6 md:space-y-8">
            <div className="space-y-4">
              <div className="space-y-4 w-full">
                <h4 className="font-semibold text-sm md:text-lg italic">
                  Our Company
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
              <div className="space-y-4 md:space-y-6 font-normal text-xs md:text-base">
                <p>
                  We drive innovation and deliver sustainable solutions across the industries we serve. We are committed to exceeding client expectations by consistently providing high-quality services in ad hoc planning, construction, marine engineering, and global deal sourcing. Through collaboration and forward-thinking approaches, we create lasting value in everything we do.
                </p>
                <p>
                  We focus on shaping a better future by integrating advanced technology, sustainable practices, and a customer-first mindset. At Hworld, we believe that fostering growth and innovation enables us to make a meaningful and positive impact on the industries and communities we serve.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-4 w-full">
                <h4 className="font-semibold text-sm md:text-lg italic">
                  Our Mission
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
              <div className="space-y-4 md:space-y-6 font-normal text-xs md:text-base">
                <p>
                  Hworld is a versatile organisation with expertise across multiple industries, including project planning, construction, marine engineering, and deal sourcing. We are committed to delivering innovative solutions that prioritise sustainability, quality, and client satisfaction. Our ability to adapt to evolving industry demands enables us to consistently deliver value across all sectors we serve.
                </p>
               <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
