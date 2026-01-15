import React from "react";
import Slide from "../slide";
import FeaturesCard from "./features-card";

function Features() {
  return (
    <div className="flex flex-col space-y-6 md:space-y-20 justify-center items-center mb-[40px] md:mb-[50px] w-full">
      <Slide>
        <div className="text-center space-y-4 w-full px-4 md:px-20 xl:px-44 mx-auto">
          <h2 className="font-bold text-2xl md:text-5xl text-white">
            We aren't limited to one
            <span className="text-sec italic"> Sector</span>
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
            <FeaturesCard
              header={"Infrastructure"}
              sub={"Roads, bridges, highways, Railways, Airports, Ports"}
              img={"/confeatures1.png"}
            />
          </Slide>
          <Slide>
            <FeaturesCard
              header={"Residential"}
              sub={"Housing developments Apartments and condominiums Private homes"}
              img={"/confeatures2.png"}
            />
          </Slide>
          <Slide>
            <FeaturesCard
              header={"Commercial & Industrial"}
              sub={"Office buildings Retail stores, malls Manufacturing facilities Warehouses and distribution centers"}
              img={"/confeatures3.png"}
            />
          </Slide>
          <Slide>
            <FeaturesCard
              header={"Mechanical  Engineering"}
              sub={"Roads, bridges, highways, Railways, Airports, Ports"}
              img={"/confeatures4.png"}
            />
          </Slide>
          <Slide>
            <FeaturesCard
              header={"Electrical Engineering"}
              sub={"Roads, bridges, highways, Railways, Airports, Ports"}
              img={"/confeatures5.png"}
            />
          </Slide>
          <Slide>
            <FeaturesCard
              header={"Energy"}
              sub={"Power plants (renewable energy, e.t.c) Wind farms, solar farms Oil and gas infrastructure"}
              img={"/confeatures6.png"}
            />
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default Features;
