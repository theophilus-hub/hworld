"use client"

import Footer from "@/components/footer"
import Nav from "@/components/nav"
import React from 'react';
import Link from "next/link"
import Slide from "@/components/slide"

function FourDPlanning() {
  return (
    <>
      <Nav />
      <div className="font-poppins relative flex flex-col justify-center items-center pt-32 pb-16 w-full">
        <div className="relative space-y-8 flex flex-col justify-center items-start w-full px-4 sm:px-6 md:px-[10%] max-w-full">
          {/* Hero Section */}
          <div className="w-full flex flex-col items-center justify-center mb-12">
            <Slide>
              <h1 className="font-poppins text-white font-extrabold text-center text-3xl md:text-5xl mb-8">
                4D Planning
              </h1>
            </Slide>
            <Slide>
              <h2 className="text-sec font-semibold text-center text-lg md:text-2xl mb-12">
                We're an award-winning 4D planning specialist, helping deal with claims, clash detection, sequencing & scenario options within construction projects.
              </h2>
            </Slide>
            <Slide>
              <img src="/4d-planning.png" alt="4D Planning" className="w-full max-w-3xl mx-auto mb-8" />
            </Slide>
          </div>

          <img
            src={"/glowing light.png"}
            className="absolute -top-12 md:-top-28 opacity-30 z-0"
            alt="light"
          />

          {/* Main Content Section */}
          <div className="py-8 w-full flex flex-col md:flex-row flex-1 text-white justify-start items-start space-y-8 md:space-y-0 md:space-x-12">
            <div className="w-full md:w-1/2">
              <Slide>
                <div className="space-y-4 w-full">
                  <h3 className="font-semibold text-sec text-xl md:text-2xl">
                    Visualized Project Planning
                  </h3>
                  <hr
                    className="border-0 w-full"
                    style={{
                      backgroundColor: "#414141",
                      height: 1,
                    }}
                  />
                </div>
                <div className="space-y-4 md:space-y-6 font-normal text-sm md:text-base mt-4">
                  <p>
                    4D planning is a key part of Metisplan's approach in providing the right data and information in a visualized manner and at the right time to make the best decisions on the most complex projects even before construction has started.
                  </p>
                  <p>
                    As Sir John Egan noted in 1998, "Redesign should take place on the computer, not on the construction site." We use 4D planning to ensure that correct information is provided to our clients, in a visualized manner that is accessible to all.
                  </p>
                </div>
              </Slide>
            </div>

            <div className="w-full md:w-1/2">
              <Slide>
                <div className="space-y-4 w-full">
                  <h3 className="font-semibold text-sec text-xl md:text-2xl">
                    Advanced Software Integration
                  </h3>
                  <hr
                    className="border-0 w-full"
                    style={{
                      backgroundColor: "#414141",
                      height: 1,
                    }}
                  />
                </div>
                <div className="space-y-4 md:space-y-6 font-normal text-sm md:text-base mt-4">
                  <p>
                    Metisplan combines existing industry standard planning software with Synchro for its 4D planning, which seamlessly integrates with various 3D modeling CAD software, such as Revit and AutoCAD.
                  </p>
                  <p>
                    With support provided from the early stages of planning, we can help you make the best decisions at the optimal time, regardless of the complexities and specification of each project, using market-leading software to aid communication with project stakeholders.
                  </p>
                </div>
              </Slide>
            </div>
          </div>

          {/* Services Section */}
          <div className="w-full py-8">
            <Slide>
              <div className="space-y-4 w-full">
                <h3 className="font-semibold text-sec text-xl md:text-2xl">
                  Our 4D Planning Services
                </h3>
                <hr
                  className="border-0 w-full"
                  style={{
                    backgroundColor: "#414141",
                    height: 1,
                  }}
                />
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Claims Visualization</h4>
                  <p className="text-white text-sm md:text-base">
                    Allowing clients to visualize their programme in detail, providing powerful supporting evidence for claims and dispute resolution through clear timeline representations.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Clash Detection</h4>
                  <p className="text-white text-sm md:text-base">
                    Identifying and resolving spatial conflicts before construction begins, visualizing complex delivery sequences that are time-dependent to prevent costly on-site issues.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Sequencing</h4>
                  <p className="text-white text-sm md:text-base">
                    Comparing as-built progress to the plan through spatial coordination, creating optimal construction sequences that minimize disruption and maximize efficiency.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Scenario Options</h4>
                  <p className="text-white text-sm md:text-base">
                    Implementing at tender planning through to claims, testing multiple construction approaches to identify the most efficient and cost-effective solutions.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Progress Visualization</h4>
                  <p className="text-white text-sm md:text-base">
                    Creating visual representations of project progress against planned work, simplifying complex data into clear, accessible 3D visualizations for all stakeholders.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Stakeholder Communication</h4>
                  <p className="text-white text-sm md:text-base">
                    Enhancing communication with all project stakeholders through intuitive visual tools, ensuring everyone from site workers to board members understands project timelines.
                  </p>
                </div>
              </div>
            </Slide>
          </div>

          {/* Benefits Section */}
          <div className="w-full py-8">
            <Slide>
              <div className="space-y-4 w-full">
                <h3 className="font-semibold text-sec text-xl md:text-2xl">
                  Benefits of Our 4D Planning Services
                </h3>
                <hr
                  className="border-0 w-full"
                  style={{
                    backgroundColor: "#414141",
                    height: 1,
                  }}
                />
              </div>
              <div className="mt-6 space-y-4 font-normal text-sm md:text-base">
                <p className="text-white transition-all duration-150 transform hover:scale-105">
                  Our 4D planning services deliver numerous benefits to your organization, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white transition-all duration-150 transform hover:scale-105">
                  <li>Time and cost efficiency through early identification of potential issues</li>
                  <li>Peace of mind and confidence through 3D visualization of progress against planned work</li>
                  <li>Simplified progress data that's accessible to technical and non-technical stakeholders</li>
                  <li>Early detection of construction issues before they occur on site</li>
                  <li>Enhanced stakeholder engagement through clear visual communication</li>
                  <li>Improved decision-making based on accurate visual representations</li>
                  <li>Reduced rework and on-site waste through pre-construction virtual testing</li>
                  <li>Better coordination between different trades and construction phases</li>
                </ul>
              </div>
            </Slide>
          </div>

          {/* CTA Section */}
          <div className="w-full py-8 flex flex-col items-center">
            <Slide>
              <div className="text-center max-w-2xl mx-auto space-y-6">
                <h3 className="text-sec font-bold text-xl md:text-2xl">
                  Ready to Transform Your Project Planning?
                </h3>
                <p className="text-white text-sm md:text-base">
                  Contact us today to discuss how our 4D planning services can help your organization visualize, optimize, and successfully deliver your construction projects.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                  <Link href="/contact">
                    <button className="bg-sec hover:bg-transparent hover:border-2 hover:border-sec hover:text-white rounded-[40px] w-full sm:w-auto flex justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold transition-all duration-150 transform hover:scale-105">
                      Contact Us
                    </button>
                  </Link>
                  <Link href="/adhoc/services">
                    <button className="bg-transparent border-2 border-sec hover:bg-sec hover:text-black rounded-[40px] w-full sm:w-auto flex justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold text-white transition-all duration-150 transform hover:scale-105">
                      Back to Services
                    </button>
                  </Link>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default FourDPlanning

