"use client"

import Footer from "@/components/footer"
import Nav from "@/components/marine/nav"
import React, { useState } from 'react';
import Link from "next/link"

function Water() {

  const data = [
    { brandModel: "RTD69", year: 2023, information: "RTD69 NEW unit PTO", price: "$1.31MM" },
    { brandModel: "RTD69", year: 2023, information: "RTD69 NEW ready to deliver", price: "$1.251MM" },
    { brandModel: "T4W", year: "New REBUILT", information: "T4W 70k pullback", price: "$625k" },
    { brandModel: "DR24", year: 2019, information: "DR24 1700 hours", price: "$1.75MM DEPOSIT" },
    { brandModel: "GEFCO 40K", year: 2019, information: "GEFCO 40K Mtd 2020 Peterbuilt", price: "$1.1M" },
    { brandModel: "Sandvik", year: 2019, information: "Sandvik BH Crawler drill", price: "$380k" },
    { brandModel: "GEFCO 40K", year: 2019, information: "GEFCO 40K 1000/350 3x4x13", price: "$845k" },
    { brandModel: "Simco", year: 2018, information: "Simco 7000", price: "$655k" },
    { brandModel: "Epiroc DB40", year: 2018, information: "Epiroc DB40 1070/350", price: "$725k", status: "Sold" },
    { brandModel: "TH60", year: 2015, information: "TH60 900/350 5x6 GD", price: "$750k" },
    { brandModel: "GEFCO 30K", year: 2014, information: "GEFCO 30K 5x6 GD 700ft", price: "$750k" },
    { brandModel: "T4BH", year: 2012, information: "T4BH 4500 hours", price: "$525k" },
    { brandModel: "Failing RC3000", year: 2012, information: "DRILL RIG Refurbished 2012", price: "Call" },
    { brandModel: "T685", year: 2011, information: "T685 6x6 low hours", price: "$725k" },
    { brandModel: "T4W", year: 2010, information: "T4W 70k pullback", price: "$475k" },
    { brandModel: "T685 R/C", year: 2010, information: "T685 R/C rig 5k hours", price: "$675k" },
    { brandModel: "T4BH", year: 2010, information: "T4BH rig 1250/350", price: "Call" },
    { brandModel: "GEFCO 30K", year: 2008, information: "GEFCO 30 K REBUILT", price: "$599k" },
    { brandModel: "T130", year: 2008, information: "T130 low hours>3k", price: "$700k" },
    { brandModel: "Atlas Copco T4W", year: 2007, information: "3300 ORIG HOURS $975K TOOLED", price: "$975K" },
    { brandModel: "RD20 III", year: 2007, information: "RD20 III ready to work", price: "$595k" },
    { brandModel: "T130", year: 2007, information: "T130 Tilt Head", price: "$495K" },
    { brandModel: "Versadrill V2000", year: 2007, information: "Versadrill V2000 Atlas Casing Hammer", price: "$630k" },
    { brandModel: "GEFCO 30K", year: 2007, information: "GEFCO 30K 1000/350 3X4X13", price: "$495K" },
    { brandModel: "RD20", year: 2007, information: "RD20 1250/350", price: "Call" },
    { brandModel: "T25K DRILTECH", year: 2006, information: "Driltech 1000/350 C15", price: "$530k" },
    { brandModel: "T4BH", year: 2006, information: "T4BH rig 1250/350", price: "Call" },
    { brandModel: "RD20 III", year: 2005, information: "RD20 III Mud pkg/Air/tooled", price: "$650k" },
    { brandModel: "TH60", year: 2004, information: "Rebuilt TH60 1070/350 Cummins", price: "$495k" },
    { brandModel: "T3W LT", year: 2004, information: "T3W LT 1070/350", price: "$450k" },
    { brandModel: "Driltech", year: 2004, information: "T25K Driltech C15 3k hours 900/350 2k hrs", price: "$395k" },
    { brandModel: "T130 Schramm", year: 2003, information: "T130 Schramm working rig", price: "$575k" },
    { brandModel: "FOREMOST DR24", year: 2000, information: "DR24 Sterling Truck Mounted Drill Rig", price: "$600k" },
    { brandModel: "Bucyrus-Erie 60L", year: 2000, information: "Mounted on 1999 Sterling Truck", price: "Call" },
    { brandModel: "TH60", year: 1999, information: "TH60 MTD INTL C12 500/250 5K HOURS", price: "$330K" },
    { brandModel: "Reichdrill T690", year: 1998, information: "Reichdrill T690", price: "$475k" },
    { brandModel: "SCHRAMM T-660w II", year: 1996, information: "REBUILT 1150/350 N14 525HP 1000FT PIPE TOOLED", price: "Call" },
    { brandModel: "T3W", year: 1995, information: "T3W rebuilt tooled", price: "$420k" },
    { brandModel: "T4W 70K", year: "1989-91", information: "T4W 70K KTA19C HR2 900/350 4K HOURS", price: "$395K" },
    { brandModel: "Bucyrus-Erie 36L", year: "", information: "Crane Carrier, Cummins 855 engine", price: "$160k" },
    { brandModel: "Gardner Denver 1000", year: "", information: "Mounted to 1989 Ford F-700", price: "Call" },
    { brandModel: "T3W", year: 1989, information: "T3W 825/300 Cummins tooled", price: "$295k" },
    { brandModel: "T3W", year: 1989, information: "T3W REBUILT Cummins GHH (not Mtd) 5x6", price: "$250k" },
    { brandModel: "Reichdrill T650WS", year: 1989, information: "Reichdrill T650WS", price: "$225k" },
    { brandModel: "T660 Schram", year: 1988, information: "T660 Schram rebuilt 8v92/825-300", price: "$395k" },
    { brandModel: "Speedstar SS 15 III", year: 1988, information: "Speedstar - 900/350 400 Cummins 700ft pipe", price: "$135k" },
    { brandModel: "T3W", year: 1987, information: "T3W on 94 Freightliner 825/300", price: "$295k" },
    { brandModel: "Jaswell J-2400", year: 1987, information: "J-2400 Mounted on Paystar 5000", price: "Call" },
    { brandModel: "T3W", year: 1985, information: "T3W Cummins rebuilt", price: "$300k" },
    { brandModel: "TH60", year: 1985, information: "TH60 750/250", price: "Call" },
    { brandModel: "Bucyrus-Erie 22W", year: 1985, information: "Series III Drilling Rig Mounted to a 1990 Ford F-800", price: "$60k" },
    { brandModel: "Reichdrill T650WS", year: 1985, information: "T650WS Mounted on International Truck", price: "Call" },
    { brandModel: "T650ws", year: 1981, information: "T650ws", price: "$275k" },
    { brandModel: "TH60", year: 1978, information: "TH60 5X6 600/250", price: "$175K" },
    { brandModel: "Reichdrill T650WS", year: 1977, information: "T650WS Mounted on Ford L8000", price: "Call" },
    { brandModel: "Speedster", year: 1971, information: "Speedstar in Toronto, Canada", price: "$25k" },
    { brandModel: "Bucyrus Erie 28-L", year: 1965, information: "Cable Tool Rig Well Driller, Cummins Diesel Engine", price: "Call" },
];
    

    const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(row =>
    Object.values(row).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  return (
    <>
    <Nav />
    <div className="bg-cover bg-center relative w-full">
      <div className="relative flex flex-col justify-center items-center pt-44 mb-[75px] md:mb-[150px] w-full">
        <div className=" space-y-24 flex flex-col justify-center items-center mx-4 md:mx-[10%]">
          <h1 className="font-poppins text-white font-extrabold text-center text-3xl md:text-5xl z-10">
            Water Drilling Rigs
          </h1>

    

          <div className="z-10 px-16 flex flex-col justify-center items-center space-y-10">
            
            <img
              src={"/glowing light.png"}
              className="absolute top-16 md:-top-20 z-0"
              alt="light"
            />
            

           
          </div>
        </div>
       
      </div>


      <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full md:w-64 p-2 border border-sec rounded-lg focus:ring-2 focus:ring-sec focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-sec text-dark font-bold text-xl">
            <tr>
              <th className="py-3 px-4 text-left">Brand Model</th>
              <th className="py-3 px-4 text-left">Year</th>
              <th className="py-3 px-4 text-left">Information</th>
             
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredData.map((row, index) => (
              <tr 
                key={index}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="py-2 px-4">{row.brandModel}</td>
                <td className="py-2 px-4">{row.year}</td>
                <td className="py-2 px-4">{row.information}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>



      <hr className="border-0 mb-14"
style={{
color: "",
backgroundColor: "#414141",
height: 1
}}
/>
    </div>


    <Footer />
    </>
  )
}

export default Water
