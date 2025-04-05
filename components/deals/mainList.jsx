import React from "react";
import Slide from "../slide";
import ListingCard from "./listing-card";

function MainList() {
  return (
    <div className="flex flex-col space-y-6 md:space-y-20 justify-center items-center mb-[100px] md:mb-[130px] ">
      <Slide>
        <div className="text-center space-y-4 w-full xl:w-[75%] px-4">
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

      <div className=" w-full px-10 md:px-20 xl:px-72">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-4 md:gap-y-8">
          <Slide>
            <ListingCard
              header={"Gas Turbine Plant"}
              sub={"/"}
              img={"/gasturbine.png"}
            />
          </Slide>
          <Slide>
            <ListingCard
              header={"CPP Power Plant"}
              sub={"/"}
              img={"/powerplant.png"}
            />
          </Slide>
          <Slide>
            <ListingCard
              header={"CCGT Power Plant"}
              sub={"/"}
              img={"/powerplant2.png"}
            />
          </Slide>
          <Slide>
            <ListingCard
              header={"Oil Refinery"}
              sub={"/"}
              img={"/oilref.png"}
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
    </div>
  );
}

export default MainList;
