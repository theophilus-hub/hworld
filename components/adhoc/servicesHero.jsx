"use client"
import Link from "next/link";
import Slide from "../slide";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

function ServicesHero() {
  return (
    <div className="bg-cover bg-center relative w-full pt-20">
      <div className="relative flex flex-col justify-center items-center pt-20 mb-[75px] md:mb-[100px] w-full">
        <div className="space-y-16 flex flex-col justify-center items-center mx-2 md:mx-3 lg:mx-[5%]">
          <Slide>
            <h1 className="font-poppins text-white font-extrabold text-center text-3xl md:text-5xl z-10">
              Our Professional Services
            </h1>
          </Slide>
          
          <Slide>
            <div className="w-full flex flex-col justify-center items-center px-[10%]">
              <img src="/adhocservice.png" alt="Professional Services" className="rounded-2xl h-[30%]"/>
            </div>
          </Slide>
          
          <div className="z-10 px-2 md:px-8 lg:px-12 flex flex-col justify-center items-center space-y-10">
            <Slide>
              <h4 className="text-left text-white text-sm md:text-base">
                Welcome to our comprehensive services page, where you can discover
                our full range of professional planning and project management solutions.
                Whether you need project management office support, planning management,
                or specialized services like cost management and risk analysis, we have
                the expertise to meet your needs. Our extensive service portfolio is
                designed to support projects of any size and complexity, ensuring optimal
                performance and efficiency. Browse through our offerings to find the
                perfect solution for your operations, and contact us to discuss how we
                can tailor our services to your specific requirements.
              </h4>
            </Slide>
            
            <img
              src={"/glowing light.png"}
              className="absolute -top-12 md:-top-16 z-0"
              alt="light"
            />
            
            <div className="w-full py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-4">
                <Slide>
                  <div className="bg-ft rounded-3xl md:h-80 px-3 lg:px-5 py-4 lg:py-8 border-[3px] border-ftborder flex flex-col items-start md:items-center justify-between space-y-3 md:space-y-4">
                    <div className="flex space-x-2 items-center justify-center">
                      <img src="/ft1.png" alt="" />
                      <h2 className="font-bold text-sec text-sm lg:text-lg">
                        Project Management
                      </h2>
                    </div>
                    <div className="my-2">
                      <p className="text-white text-xs md:text-xs lg:text-sm">
                        Comprehensive project management services include PMO setup and functional lead services to ensure your projects are delivered on time and within budget.
                      </p>
                    </div>
                    <div className="mt-auto pt-2">
                      <Link href={"/adhoc/services/pmo"} className="z-10">
                        <button className="z-10 bg-sec rounded-[40px] flex justify-center items-center text-center px-6 py-2 text-sm font-bold md:font-extrabold">
                          Explore
                        </button>
                      </Link>
                    </div>
                  </div>
                </Slide>
                
                <Slide>
                  <div className="bg-ft rounded-3xl md:h-80 px-3 lg:px-5 py-4 lg:py-8 border-[3px] border-ftborder flex flex-col items-start md:items-center justify-between space-y-3 md:space-y-4">
                    <div className="flex space-x-2 items-center">
                      <img src="/ft2.png" alt="" />
                      <h2 className="font-bold text-sec text-sm lg:text-lg">
                        Planning & Controls
                      </h2>
                    </div>
                    <div className="my-2">
                      <p className="text-white text-xs md:text-xs lg:text-sm">
                        Expert planning services cover everything from concept planning to document management and 4D planning for optimal project execution.
                      </p>
                    </div>
                    <div className="mt-auto pt-2">
                      <Link href={"/adhoc/services/planning-management"} className="z-10">
                        <button className="z-10 bg-sec rounded-[40px] flex justify-center items-center text-center px-6 py-2 text-sm font-bold md:font-extrabold">
                          Explore 
                        </button>
                      </Link>
                    </div>
                  </div>
                </Slide>
                
                <Slide>
                  <div className="bg-ft rounded-3xl md:h-80 px-3 lg:px-5 py-4 lg:py-8 border-[3px] border-ftborder flex flex-col items-start md:items-center justify-between space-y-3 md:space-y-4">
                    <div className="flex space-x-2 items-center">
                      <img src="/ft3.png" alt="" />
                      <h2 className="font-bold text-sec text-sm lg:text-lg">
                        Financial Services
                      </h2>
                    </div>
                    <div className="my-2">
                      <p className="text-white text-xs md:text-xs lg:text-sm">
                        Strategic financial services include cost management and project estimations to help you maintain financial control over your projects.
                      </p>
                    </div>
                    <div className="mt-auto pt-2">
                      <Link href={"/adhoc/services/cost-management"} className="z-10">
                        <button className="z-10 bg-sec rounded-[40px] flex justify-center items-center text-center px-6 py-2 text-sm font-bold md:font-extrabold">
                          Explore
                        </button>
                      </Link>
                    </div>
                  </div>
                </Slide>
                <Slide>
                  <div className="bg-ft rounded-3xl md:h-80 px-3 lg:px-5 py-4 lg:py-8 border-[3px] border-ftborder flex flex-col items-start md:items-center justify-between space-y-3 md:space-y-4">
                    <div className="flex space-x-2 items-center">
                      <img src="/ft1.png" alt="" />
                      <h2 className="font-bold text-sec text-sm lg:text-lg">
                        Document Management
                      </h2>
                    </div>
                    <div className="my-2">
                      <p className="text-white text-xs md:text-xs lg:text-sm">
                        Efficient document management services ensure all project documentation is properly organized and accessible to stakeholders.
                      </p>
                    </div>
                    <div className="mt-auto pt-2">
                      <Link href={"/adhoc/services/document-management"} className="z-10">
                        <button className="z-10 bg-sec rounded-[40px] flex justify-center items-center text-center px-6 py-2 text-sm font-bold md:font-extrabold">
                          Explore
                        </button>
                      </Link>
                    </div>
                  </div>
                </Slide>

                <Slide>
                  <div className="bg-ft rounded-3xl md:h-80 px-3 lg:px-5 py-4 lg:py-8 border-[3px] border-ftborder flex flex-col items-start md:items-center justify-between space-y-3 md:space-y-4">
                    <div className="flex space-x-2 items-center">
                      <img src="/ft2.png" alt="" />
                      <h2 className="font-bold text-sec text-sm lg:text-lg">
                        Risk Management
                      </h2>
                    </div>
                    <div className="my-2">
                      <p className="text-white text-xs md:text-xs lg:text-sm">
                        Proactive risk management services help identify and mitigate potential risks to ensure your projects stay on track.
                      </p>
                    </div>
                    <div className="mt-auto pt-2">
                      <Link href={"/adhoc/services/risk-management"} className="z-10">
                        <button className="z-10 bg-sec rounded-[40px] flex justify-center items-center text-center px-6 py-2 text-sm font-bold md:font-extrabold">
                          Explore
                        </button>
                      </Link>
                    </div>
                  </div>
                </Slide>

                <Slide>
                  <div className="bg-ft rounded-3xl md:h-80 px-3 lg:px-5 py-4 lg:py-8 border-[3px] border-ftborder flex flex-col items-start md:items-center justify-between space-y-3 md:space-y-4">
                    <div className="flex space-x-2 items-center">
                      <img src="/ft3.png" alt="" />
                      <h2 className="font-bold text-sec text-sm lg:text-lg">
                        4D Planning
                      </h2>
                    </div>
                    <div className="my-2">
                      <p className="text-white text-xs md:text-xs lg:text-sm">
                        Advanced 4D planning services combine scheduling with 3D models to create visual simulations of your project's progress.
                      </p>
                    </div>
                    <div className="mt-auto pt-2">
                      <Link href={"/adhoc/services/4d-planning"} className="z-10">
                        <button className="z-10 bg-sec rounded-[40px] flex justify-center items-center text-center px-6 py-2 text-sm font-bold md:font-extrabold">
                          Explore
                        </button>
                      </Link>
                    </div>
                  </div>
                </Slide>

                <Slide>
                  <div className="bg-ft rounded-3xl md:h-80 px-3 lg:px-5 py-4 lg:py-8 border-[3px] border-ftborder flex flex-col items-start md:items-center justify-between space-y-3 md:space-y-4">
                    <div className="flex space-x-2 items-center">
                      <img src="/ft1.png" alt="" />
                      <h2 className="font-bold text-sec text-sm lg:text-lg">
                        Commercial Management
                      </h2>
                    </div>
                    <div className="my-2">
                      <p className="text-white text-xs md:text-xs lg:text-sm">
                        Specialized commercial management services cover contract administration and procurement strategies to protect your financial interests.
                      </p>
                    </div>
                    <div className="mt-auto pt-2">
                      <Link href={"/adhoc/services/commercial-management"} className="z-10">
                        <button className="z-10 bg-sec rounded-[40px] flex justify-center items-center text-center px-6 py-2 text-sm font-bold md:font-extrabold">
                          Explore
                        </button>
                      </Link>
                    </div>
                  </div>
                </Slide>

                <Slide>
                  <div className="bg-ft rounded-3xl md:h-80 px-3 lg:px-5 py-4 lg:py-8 border-[3px] border-ftborder flex flex-col items-start md:items-center justify-between space-y-3 md:space-y-4">
                    <div className="flex space-x-2 items-center">
                      <img src="/ft2.png" alt="" />
                      <h2 className="font-bold text-sec text-sm lg:text-lg">
                        Project Estimations
                      </h2>
                    </div>
                    <div className="my-2">
                      <p className="text-white text-xs md:text-xs lg:text-sm">
                        Precise project estimation services provide accurate cost and time forecasts to help you plan effectively.
                      </p>
                    </div>
                    <div className="mt-auto pt-2">
                      <Link href={"/adhoc/services/project-estimations"} className="z-10">
                        <button className="z-10 bg-sec rounded-[40px] flex justify-center items-center text-center px-6 py-2 text-sm font-bold md:font-extrabold">
                          Explore
                        </button>
                      </Link>
                    </div>
                  </div>
                </Slide>

                <Slide>
                  <div className="bg-ft rounded-3xl md:h-80 px-3 lg:px-5 py-4 lg:py-8 border-[3px] border-ftborder flex flex-col items-start md:items-center justify-between space-y-3 md:space-y-4">
                    <div className="flex space-x-2 items-center">
                      <img src="/ft3.png" alt="" />
                      <h2 className="font-bold text-sec text-sm lg:text-lg">
                        Functional Lead Service
                      </h2>
                    </div>
                    <div className="my-2">
                      <p className="text-white text-xs md:text-xs lg:text-sm">
                        Dedicated functional lead services provide specialized leadership across key project functions to ensure best practices.
                      </p>
                    </div>
                    <div className="mt-auto pt-2">
                      <Link href={"/adhoc/services/functional-lead"} className="z-10">
                        <button className="z-10 bg-sec rounded-[40px] flex justify-center items-center text-center px-6 py-2 text-sm font-bold md:font-extrabold">
                          Explore
                        </button>
                      </Link>
                    </div>
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

export default ServicesHero;
