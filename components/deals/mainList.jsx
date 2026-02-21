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

      <div className="w-full px-4 md:px-12 lg:px-20 xl:px-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          <Slide>
            <ListingCard
              header={"400 MW GE-Alstom Power Plant"}
              pdfUrl={"/pdf/400 MW GE-Alstom HW Brochure.docx.pdf"}
              category="Energy & Power"
              description="400 MW GE-Alstom gas turbine power plant with advanced combined cycle technology for high-efficiency electricity generation."
            />
          </Slide>
          <Slide>
            <ListingCard
              header={"810 MW GE Frame 9 Power Plant"}
              pdfUrl={"/pdf/810 MW GE Frame 9 Based HW Brochure .docx.pdf"}
              category="Energy & Power"
              description="810 MW GE Frame 9 based combined cycle power plant offering large-scale power generation with proven turbine technology."
            />
          </Slide>
          <Slide>
            <ListingCard
              header={"Oil Refinery Asset"}
              pdfUrl={"/pdf/HW - Oil Refinary Asset.pdf"}
              category="Oil & Gas"
              description="Comprehensive oil refinery asset with full processing capabilities for crude oil refining and petroleum product distribution."
            />
          </Slide>
          <Slide>
            <ListingCard
              header={"NOV 1500hp AC Rig 827"}
              pdfUrl={"/pdf/TDS  -Ideal NOV 1500hp AC Rig 827.pdf"}
              category="Drilling Rigs"
              description="Ideal NOV 1500 horsepower AC drilling rig (#827) equipped for demanding drilling operations across diverse environments."
            />
          </Slide>
          <Slide>
            <ListingCard
              header={"Drillmec 2000hp Rig 67"}
              pdfUrl={"/pdf/TDS - Drillmec 2000 hp Rig 67.pdf"}
              category="Drilling Rigs"
              description="Drillmec 2000 horsepower drilling rig (#67) designed for heavy-duty drilling applications with high-performance capabilities."
            />
          </Slide>
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
