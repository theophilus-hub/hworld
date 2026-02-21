"use client"
import Link from "next/link";
import Slide from "../slide";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

function ForensicsHero() {
  return (
    <div className="bg-cover bg-center relative w-full pt-20">
      <div className="relative flex flex-col justify-center items-center pt-20 mb-[30px] md:mb-[40px] w-full">
        <div className="space-y-16 flex flex-col justify-center items-center mx-4 lg:mx-[10%]">
          <Slide>
            <h1 className="font-poppins text-white font-extrabold text-center text-3xl md:text-5xl z-10">
              Forensic Planning & Analysis
            </h1>
          </Slide>
          
          {/* <Slide>
            <img src="/adhoc-forensics.png" alt="Forensic Planning & Analysis" />
          </Slide> */}
          
          <div className="z-10 px-4 md:px-16 flex flex-col justify-center items-center space-y-10">
            <Slide>
              <h4 className="text-left text-white text-sm md:text-base">
                Our forensic planning and analysis services provide expert support for construction 
                claims and disputes. We combine technical expertise with industry knowledge to deliver 
                thorough, independent assessments that stand up to scrutiny. Whether you're facing 
                delay claims, disruption issues, or need expert witness testimony, our team provides 
                the detailed analysis and clear documentation needed to support your position and 
                resolve disputes efficiently.
              </h4>
            </Slide>
            
            <img
              src={"/glowing light.png"}
              className="absolute -top-12 md:-top-16 z-0"
              alt="light"
            />
            
            <div className="w-full py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4">
                <Slide>
                  <div className="bg-ft rounded-3xl md:h-72 px-4 lg:px-6 py-4 lg:py-8 border-[3px] border-ftborder flex flex-col items-start md:items-center justify-between space-y-4">
                    <div className="flex space-x-2 items-center justify-center">
                      <img src="/ft1.png" alt="" />
                      <h2 className="font-bold text-sec text-sm lg:text-lg">
                        Claims Analysis
                      </h2>
                    </div>
                    <div>
                      <p className="text-white text-xs md:text-sm lg:text-base">
                        Our claims analysis service provides detailed assessment of delay, disruption, 
                        and cost impact claims, helping you understand liability and quantify damages.
                      </p>
                    </div>
                    <Link href={"/adhoc/forensics/claims-analysis"} className="z-10">
                      <button className="z-10 bg-sec rounded-[40px] flex justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold">
                        Explore
                      </button>
                    </Link>
                  </div>
                </Slide>
                
                <Slide>
                  <div className="bg-ft rounded-3xl md:h-72 px-4 lg:px-6 py-4 lg:py-8 border-[3px] border-ftborder flex flex-col items-start md:items-center justify-between space-y-4">
                    <div className="flex space-x-2 items-center">
                      <img src="/ft2.png" alt="" />
                      <h2 className="font-bold text-sec text-sm lg:text-lg">
                        Dispute Resolution
                      </h2>
                    </div>
                    <div>
                      <p className="text-white text-xs md:text-sm lg:text-base">
                        We provide expert support for mediation, adjudication, arbitration, and litigation, 
                        helping to resolve disputes efficiently and minimize project disruption.
                      </p>
                    </div>
                    <Link href={"/adhoc/forensics/dispute-resolution"} className="z-10">
                      <button className="z-10 bg-sec rounded-[40px] flex justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold">
                        Explore 
                      </button>
                    </Link>
                  </div>
                </Slide>
                
                <Slide>
                  <div className="bg-ft rounded-3xl md:h-72 px-4 lg:px-6 py-4 lg:py-8 border-[3px] border-ftborder flex flex-col items-start md:items-center justify-between space-y-4">
                    <div className="flex space-x-2 items-center">
                      <img src="/ft3.png" alt="" />
                      <h2 className="font-bold text-sec text-sm lg:text-lg">
                        Expert Witness
                      </h2>
                    </div>
                    <div>
                      <p className="text-white text-xs md:text-sm lg:text-base">
                        Our experienced professionals provide expert witness testimony on planning, 
                        delay analysis, and quantum matters, delivering clear, objective opinions.
                      </p>
                    </div>
                    <Link href={"/adhoc/forensics/expert-witness"} className="z-10">
                      <button className="z-10 bg-sec rounded-[40px] flex justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold">
                        Explore
                      </button>
                    </Link>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
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
  );
}

export default ForensicsHero;
