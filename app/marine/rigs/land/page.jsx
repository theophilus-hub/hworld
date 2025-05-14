"use client"

import Footer from "@/components/footer"
import Nav from "@/components/nav"
import React, { useState } from 'react';
import Link from "next/link"

function Land() {

    const data = [
        { power: "3000 HP", make: "LTI-3000", rig: "Rig 727", year: "2015", location: "USA", mast: "156", load: "1700000", topDrive: "TDS 750 ton", mudPumps: "(3) LTI WH 1612" },
        { power: "3000 HP", make: "Gardner Denver 3000E", rig: "Rig 273", year: "2002", location: "USA", mast: "152", load: "1600000", topDrive: "None", mudPumps: "National 12-P-160 (3)" },
        { power: "3000 HP", make: "National 1625 DE", rig: "", year: "", location: "USA", mast: "156", load: "1600000", topDrive: "Canrig 750 ton", mudPumps: "(3) EMSCO 1,600" },
        { power: "3000 HP", make: "Drillmec", rig: "Rig 801", year: "2012", location: "Turkey", mast: "160", load: "2000000", topDrive: "750 tons", mudPumps: "(3) Drillmec 12T1600" },
        { power: "3000 HP", make: "Ideco E3000", rig: "Rig 35", year: "", location: "Mexico", mast: "152", load: "1600000", topDrive: "NOV TDS 500", mudPumps: "(3) HH RS-F 1600" },
        { power: "2200 HP", make: "Cameron LDW 1000K", rig: "Rig 403", year: "2019", location: "USA", mast: "142", load: "1000000", topDrive: "Cameron TD 500", mudPumps: "(3) CMP 1600" },
        { power: "2000 HP", make: "OIME 2000", rig: "Rig 16", year: "", location: "USA", mast: "150", load: "1000000", topDrive: "NOV TDS 11 500", mudPumps: "(3) Weatherford MP-16" },
        { power: "2000 HP", make: "Oilwell E-2000", rig: "", year: "", location: "USA", mast: "142", load: "1300000", topDrive: "CANRIG 500 ton", mudPumps: "(3) A-1700 PT triplex" },
        { power: "2000 HP", make: "National 1320-UE", rig: "Rig 15", year: "", location: "Mexico", mast: "142", load: "1000000", topDrive: "TDS-11SA-500 Tons", mudPumps: "(2) GD PZ-11" },
        { power: "2000 HP", make: "IDS AC", rig: "Rig 18", year: "", location: "USA", mast: "142", load: "850000", topDrive: "GDM-500", mudPumps: "(3) 1600hp Triplex AC" },
        { power: "2000 HP", make: "Continental Emsco C2", rig: "Rig 425", year: "2014", location: "USA", mast: "142", load: "1000000", topDrive: "TDS 11SA 500", mudPumps: "(2) Am Blk K-1600" },
        { power: "1600 HP", make: "1600 AC", rig: "Rig 9", year: "", location: "USA", mast: "136", load: "750000", topDrive: "Canrig 1035 500", mudPumps: "" },
        { power: "1500 HP", make: "Continental Emsco C1", rig: "Rig 20", year: "", location: "USA", mast: "142", load: "1000000", topDrive: "Canrig 1250AC 500", mudPumps: "" },
        { power: "1500 HP", make: "Continental Emsco C1", rig: "Rig 24", year: "", location: "USA", mast: "142", load: "1000000", topDrive: "Canrig 1250AC 500", mudPumps: "" },
        { power: "1500 HP", make: "Continental Emsco C1", rig: "Rig 26", year: "", location: "USA", mast: "142", load: "1000000", topDrive: "Canrig 1250AC 500", mudPumps: "" },
        { power: "1500 HP", make: "IDM DC-1500", rig: "Rig 7", year: "", location: "USA", mast: "136", load: "750000", topDrive: "Canrig 350", mudPumps: "BOMCO F-1600 (2)" },
        { power: "1500 HP", make: "NOV‐1500", rig: "Rig 10", year: "", location: "Mexico", mast: "136", load: "750000", topDrive: "", mudPumps: "(3) 1,300 HP Triplex" },
        { power: "1500 HP", make: "IDS AC", rig: "Rig 11", year: "", location: "USA", mast: "134", load: "750000", topDrive: "Canrig 350", mudPumps: "(3) 1600 HP Triples" },
        { power: "1500 HP", make: "IDS AC", rig: "Rig 38", year: "2012", location: "USA", mast: "142", load: "750000", topDrive: "Canrig 1035AC-500", mudPumps: "(3) GD PZ11 1600 HP" },
        { power: "1500 HP", make: "IDS AC", rig: "Rig 40", year: "2012", location: "USA", mast: "142", load: "750000", topDrive: "Canrig 1035AC-500", mudPumps: "(3) GD PZ11 1600 HP" },
        { power: "1500 HP", make: "1500E", rig: "", year: "", location: "USA", mast: "142", load: "768000", topDrive: "350", mudPumps: "" },
        { power: "1500 HP", make: "IDS AC", rig: "Rig 13", year: "", location: "USA", mast: "134", load: "750000", topDrive: "GDS 500", mudPumps: "(3) 1600HP Triplex AC" },
        { power: "1500 HP", make: "Alta AC", rig: "Rig 14", year: "", location: "USA", mast: "134", load: "750000", topDrive: "GDS 500", mudPumps: "(3) 1600HP Triplex AC" },
        { power: "1500 HP", make: "IDS AC", rig: "Rig 17", year: "", location: "USA", mast: "142", load: "750000", topDrive: "Canrig 350 ton", mudPumps: "(3) 1600HP Triplex AC" },
        { power: "1500 HP", make: "GD 1100E", rig: "Rig 312", year: "", location: "USA", mast: "142", load: "1000000", topDrive: "NOV TDS-11SA 500", mudPumps: "(2) NOV FD-1600" },
        { power: "1500 HP", make: "Oilwell 840E", rig: "Rig 1428", year: "", location: "USA", mast: "142", load: "", topDrive: "NOV TDS-11", mudPumps: "BOMCO F-1600 (2)" },
        { power: "1500 HP", make: "NOV 110UE", rig: "Rig 2", year: "", location: "USA", mast: "142", load: "1000000", topDrive: "CanRig 1250AC-500", mudPumps: "GD PZ-11 (3)" },
        { power: "1500 HP", make: "NOV 110UE", rig: "Rig 6", year: "", location: "USA", mast: "142", load: "768000", topDrive: "CanRig 1250AC-500", mudPumps: "BOMCO F-1600 (3)" },
        { power: "1500 HP", make: "NOV 110UE", rig: "Rig 7", year: "", location: "USA", mast: "142", load: "768000", topDrive: "CanRig 6027AC-600", mudPumps: "BOMCO F-1600 (3)" },
        { power: "1500 HP", make: "IDM DC-1500", rig: "Rig 7", year: "", location: "USA", mast: "136", load: "750000", topDrive: "Canrig 350", mudPumps: "BOMCO F-1600 (2)" },
        { power: "1200 HP", make: "Baker Hughes", rig: "Rig 9", year: "", location: "USA", mast: "120", load: "500000", topDrive: "Baker Hughes", mudPumps: "BOMCO F-1600 (2)" },
        { power: "1200 HP", make: "Baker Hughes", rig: "Rig 11", year: "", location: "USA", mast: "120", load: "500000", topDrive: "Baker Hughes", mudPumps: "BOMCO F-1600 (2)" },
        { power: "1200 HP", make: "Baker Hughes", rig: "Rig 13", year: "", location: "USA", mast: "120", load: "500000", topDrive: "Baker Hughes", mudPumps: "BOMCO F-1600 (2)" },
        { power: "1200 HP", make: "Baker Hughes", rig: "Rig 15", year: "", location: "USA", mast: "120", load: "500000", topDrive: "Baker Hughes", mudPumps: "BOMCO F-1600 (2)" },
        { power: "1200 HP", make: "Baker Hughes", rig: "Rig 17", year: "", location: "USA", mast: "120", load: "500000", topDrive: "Baker Hughes", mudPumps: "BOMCO F-1600 (2)" },
        { power: "1200 HP", make: "Baker Hughes", rig: "Rig 19", year: "", location: "USA", mast: "120", load: "500000", topDrive: "Baker Hughes", mudPumps: "BOMCO F-1600 (2)" },
        { power: "1200 HP", make: "Baker Hughes", rig: "Rig 21", year: "", location: "USA", mast: "120", load: "500000", topDrive: "Baker Hughes", mudPumps: "BOMCO F-1600 (2)" },
        { power: "1200 HP", make: "Baker Hughes", rig: "Rig 23", year: "", location: "USA", mast: "120", load: "500000", topDrive: "Baker Hughes", mudPumps: "BOMCO F-1600 (2)" },
        { power: "1200 HP", make: "Baker Hughes", rig: "Rig 25", year: "", location: "USA", mast: "120", load: "500000", topDrive: "Baker Hughes", mudPumps: "BOMCO F-1600 (2)" },
        { power: "1200 HP", make: "Baker Hughes", rig: "Rig 27", year: "", location: "USA", mast: "120", load: "500000", topDrive: "Baker Hughes", mudPumps: "BOMCO F-1600 (2)" },
        { power: "1200 HP", make: "Baker Hughes", rig: "Rig 29", year: "", location: "USA", mast: "120", load: "500000", topDrive: "Baker Hughes", mudPumps: "BOMCO F-1600 (2)" },
        { power: "1200 HP", make: "Baker Hughes", rig: "Rig 31", year: "", location: "USA", mast: "120", load: "500000", topDrive: "Baker Hughes", mudPumps: "BOMCO F-1600 (2)" },
        { power: "1200 HP", make: "Baker Hughes", rig: "Rig 33", year: "", location: "USA", mast: "120", load: "500000", topDrive: "Baker Hughes", mudPumps: "BOMCO F-1600 (2)" },
        { power: "1200 HP", make: "Baker Hughes", rig: "Rig 35", year: "", location: "USA", mast: "120", load: "500000", topDrive: "Baker Hughes", mudPumps: "BOMCO F-1600 (2)" },
        { power: "1200 HP", make: "Baker Hughes", rig: "Rig 37", year: "", location: "USA", mast: "120", load: "500000", topDrive: "Baker Hughes", mudPumps: "BOMCO F-1600 (2)" },
        { power: "1200 HP", make: "Baker Hughes", rig: "Rig 39", year: "", location: "USA", mast: "120", load: "500000", topDrive: "Baker Hughes", mudPumps: "BOMCO F-1600 (2)" },
        { power: "1200 HP", make: "Baker Hughes", rig: "Rig 41", year: "", location: "USA", mast: "120", load: "500000", topDrive: "Baker Hughes", mudPumps: "BOMCO F-1600 (2)" },
        { power: "1200 HP", make: "Baker Hughes", rig: "Rig 43", year: "", location: "USA", mast: "120", load: "500000", topDrive: "Baker Hughes", mudPumps: "BOMCO F-1600 (2)" },
        { power: "1200 HP", make: "Baker Hughes", rig: "Rig 45", year: "", location: "USA", mast: "120", load: "500000", topDrive: "Baker Hughes", mudPumps: "BOMCO F-1600 (2)" },
        { power: "1200 HP", make: "Baker Hughes", rig: "Rig 47", year: "", location: "USA", mast: "120", load: "500000", topDrive: "Baker Hughes", mudPumps: "BOMCO F-1600 (2)" },
        { power: "1200 HP", make: "Baker Hughes", rig: "Rig 49", year: "", location: "USA", mast: "120", load: "500000", topDrive: "Baker Hughes", mudPumps: "BOMCO F-1600 (2)" },
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
            Land Drilling Rigs
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
              <th className="py-3 px-4 text-left">Power</th>
              <th className="py-3 px-4 text-left">Make</th>
              <th className="py-3 px-4 text-left">Rig</th>
              <th className="py-3 px-4 text-left">Year</th>
              <th className="py-3 px-4 text-left">Location</th>
              <th className="py-3 px-4 text-left">Mast</th>
              <th className="py-3 px-4 text-left">Load</th>
              <th className="py-3 px-4 text-left">Top Drive</th>
              <th className="py-3 px-4 text-left">Mud Pumps</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredData.map((row, index) => (
              <tr 
                key={index}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="py-2 px-4">{row.power}</td>
                <td className="py-2 px-4">{row.make}</td>
                <td className="py-2 px-4">{row.rig}</td>
                <td className="py-2 px-4">{row.year}</td>
                <td className="py-2 px-4">{row.location}</td>
                <td className="py-2 px-4">{row.mast}</td>
                <td className="py-2 px-4">{row.load}</td>
                <td className="py-2 px-4">{row.topDrive}</td>
                <td className="py-2 px-4">{row.mudPumps}</td>
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

export default Land
