"use client"

import Footer from "@/components/footer"
import Nav from "@/components/marine/nav"
import React, { useState } from 'react';
import Link from "next/link"

function Offshore() {

  const data = [
    { year: 2024, type: "Jackup", comments: "350-400ft availability for Wet/Dry Lease in 4th quarter", price: "N/A" },
    { year: 2024, type: "Jackup", comments: "JU2000E", price: "$170MM-$180MM" },
    { year: 2024, type: "Jackup", comments: "DSJ 400", price: "$170MM-$180MM" },
    { year: 2024, type: "SemiSub", comments: "Availability in 4th quarter 2024 onward to 12k ft. WD", price: "N/A" },
    { year: 2018, type: "Jackup", comments: "Ensco 69 overhauled in 2018", price: "$25MM" },
    { year: 2015, type: "Jackup", comments: "JU2000E - in Europe ready to ship", price: "$105MM" },
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
            Offshore Drilling Rigs
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
              <th className="py-3 px-4 text-left">Year</th>
              <th className="py-3 px-4 text-left">Type</th>
              <th className="py-3 px-4 text-left">Comments</th>
              <th className="py-3 px-4 text-left">Price</th>
            
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredData.map((row, index) => (
              <tr 
                key={index}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="py-2 px-4">{row.year}</td>
                <td className="py-2 px-4">{row.type}</td>
                <td className="py-2 px-4">{row.comments}</td>
                <td className="py-2 px-4">{row.price}</td>
               
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

export default Offshore

