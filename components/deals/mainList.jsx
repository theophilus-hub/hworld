import React from "react";
import Slide from "../slide";
import ListingCard from "./listing-card";

function MainList() {
  return (
    <div className="flex flex-col space-y-6 md:space-y-20 justify-center items-center mb-[40px] md:mb-[50px] ">
      <Slide>
        <div className="text-center space-y-4 w-full max-w-4xl mx-auto px-4">
          <h2 className="font-bold text-2xl md:text-5xl text-white">
            Active 
            <span className="text-sec italic"> Listings</span>
          </h2>
          <p className="text-white text-xs md:text-sm lg:text-base font-normal text-center">
            Versatile expertise across multiple industries, delivering
            excellence in every project.
          </p>
        </div>
      </Slide>

      <div className=" w-full px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 justify-items-center">
          <Slide>
            <ListingCard
              header={"Gas Turbine Plant"}
              sub={"/"}
              img={"/gasturbine.png"}
              category="Energy & Power"
              description="State-of-the-art gas turbine facility with advanced efficiency systems and environmental controls"
            />
          </Slide>
          <Slide>
            <ListingCard
              header={"CPP Power Plant"}
              sub={"/"}
              img={"/powerplant.png"}
              category="Energy & Power"
              description="Combined cycle power plant with high-efficiency generation and grid integration capabilities"
            />
          </Slide>
          <Slide>
            <ListingCard
              header={"CCGT Power Plant"}
              sub={"/"}
              img={"/powerplant2.png"}
              category="Energy & Power"
              description="Combined Cycle Gas Turbine facility featuring cutting-edge technology and sustainable operations"
            />
          </Slide>
          <Slide>
            <ListingCard
              header={"Oil Refinery"}
              sub={"/"}
              img={"/oilref.png"}
              category="Oil & Gas"
              description="Modern refinery complex with advanced processing capabilities and environmental compliance systems"
            />
          </Slide>
          {/* <Slide>
            <ListingCard
              header={"Electrical Engineering"}
              sub={"Roads, bridges, highways, Railways, Airports, Ports"}
              img={"/confeatures5.png"}
            />
          </Slide>
          <Slide>
            <ListingCard
              header={"Energy"}
              sub={"Power plants (renewable energy, e.t.c) Wind farms, solar farms Oil and gas infrastructure"}
              img={"/confeatures6.png"}
            />
          </Slide> */}
        </div>
      </div>
      
      {/* Horizontal separator line */}
      <div className="w-full flex justify-center px-4 md:px-16 mt-8 md:mt-12">
        <hr
          className="border-0 w-full max-w-6xl"
          style={{
            backgroundColor: "#414141",
            height: 1,
          }}
        />
      </div>
    </div>
  );
}

export default MainList;
