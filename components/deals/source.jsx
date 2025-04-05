import React from "react";


function Source() {
  return (
    <div className="font-poppins relative  flex flex-col justify-center items-center mt-20 mb-[50px] md:mb-[100px] w-full">
      <div className="relative space-y-4 flex flex-col justify-center items-start w-full px-4 md:px-[10%]">
        
        <img
          src={"/glowing light.png"}
          className="absolute -top-12 md:-top-28 opacity-30 z-0"
          alt="light"
        />

        <div className="py-4 md:py-6 w-full flex flex-col text-white justify-start items-start space-y-8 md:space-y-0">
          <h2 className="font-extrabold px-4 text-left text-3xl md:text-5xl/[70px] w-full">
            What We <br />
            <span className="text-sec italic">Source</span>
          </h2>
          <div className=" flex flex-col w-full justify-start items-start py-4 md:py-8 px-4 space-y-8 md:space-y-12">
            <div className="space-y-4">
              <div className="space-y-4 w-full">
                <h4 className="font-semibold text-sm md:text-lg italic text-sec">
                Infrastructure & Construction Projects
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
                We connect investors and contractors with viable, high-impact projects — locally and globally — including roads, bridges, buildings, and more.
                </p>
               
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-4 w-full">
                <h4 className="font-semibold text-sm md:text-lg italic text-sec">
                Oil & Gas Opportunities
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
                From upstream licensing rounds to downstream distribution deals, we plug you into lucrative energy assets and partnerships.
                </p>
               
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-4 w-full">
                <h4 className="font-semibold text-sm md:text-lg italic text-sec">
                Equipment & Supply Deals
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
                Access large-scale supply contracts, equipment sourcing deals, and turnkey delivery options for engineering and industrial needs.
                </p>
               
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-4 w-full">
                <h4 className="font-semibold text-sm md:text-lg italic text-sec">
                Government Contracts
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
                We monitor and source tenders, procurements, and public-private partnership opportunities across multiple sectors.
                </p>
               
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Source;
