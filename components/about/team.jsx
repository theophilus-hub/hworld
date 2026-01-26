import React from "react";
import Slide from "../slide";

function Team() {
  return (
    <div className="font-poppins relative flex flex-col justify-center items-center w-full">
      
      {/* Team Section */}
      <div className="relative w-full px-4 md:px-[10%] py-8 md:py-16">
        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          <Slide className="w-full lg:w-1/2">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-sec text-sm font-semibold uppercase tracking-wider">
                  Our Team
                </span>
                <h2 className="text-white font-extrabold text-3xl md:text-[42px]/[52px]">
                  Driven by Passion,<br />
                  <span className="text-sec italic">Defined by Excellence</span>
                </h2>
              </div>

              <div className="space-y-5 text-white/80 text-sm md:text-base leading-relaxed">
                <p>
                  Our team is passionate about delivering high-quality results. Every project 
                  is approached with dedication and a commitment to excellence across 
                  construction, marine engineering, and hospitality.
                </p>
                <p>
                  By bringing together experience and creativity, we solve complex challenges 
                  and respond effectively to our clients' needs. We take pride in our work 
                  and value collaboration as a key driver of success.
                </p>
                <p>
                  At Hworld, our strength lies in our people. We have assembled a team of 
                  dedicated professionals who bring diverse expertise and a shared commitment 
                  to delivering exceptional outcomes across every project we undertake.
                </p>
                <p>
                  Our collaborative culture enables us to tackle complex challenges with 
                  innovative solutions. Together, we combine industry knowledge with creative 
                  thinking to exceed expectations and build lasting partnerships with our clients.
                </p>
              </div>
            </div>
          </Slide>

          <Slide className="w-full lg:w-1/2">
            <div className="space-y-4 h-full">
              <div className="flex items-center gap-3">
                <h4 className="text-white font-semibold text-sm md:text-lg italic">
                  Our Team
                </h4>
                <hr className="border-0 flex-1 h-[1px] bg-[#414141]" />
              </div>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="/team.png" 
                  alt="Hworld Team" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </Slide>
          
        </div>
      </div>

    </div>
  );
}

export default Team;
