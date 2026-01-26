"use client"

import Footer from "@/components/footer"
import Nav from "@/components/nav"
import React from 'react';
import Link from "next/link"
import Slide from "@/components/slide"

function PlanningManagement() {
  return (
    <>
      <Nav />
      <div className="font-poppins relative flex flex-col justify-center items-center pt-32 pb-16 w-full">
        <div className="relative space-y-8 flex flex-col justify-center items-start w-full px-4 sm:px-6 md:px-[10%] max-w-full">
          {/* Hero Section */}
          <div className="w-full flex flex-col items-center justify-center mb-12">
            <Slide>
              <h1 className="font-poppins text-white font-extrabold text-center text-3xl md:text-5xl mb-8">
                Planning Management
              </h1>
            </Slide>
            <Slide>
              <h2 className="text-sec font-semibold text-center text-sm md:text-base mb-12">
                From concept through to forensic planning - discover planning services that cover your complete requirements
              </h2>
            </Slide>
            <Slide>
              <img src="/planman.png" alt="Planning Management" className="w-full max-w-3xl mx-auto mb-8 rounded-2xl" />
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
                    Expert Planning for Construction Projects
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
                    As specialists in all aspects of construction planning for both small and large-scale projects, Metisplan has spent many years developing the knowledge and expertise to help your company with effective project planning and management.
                  </p>
                  <p>
                    Using advanced software like Acumen Fuse, we can take an objective and realistic view of programmes of work, including the actual progress to-date, helping to identify whether critical delivery points in the programme are likely to be met.
                  </p>
                </div>
              </Slide>
            </div>

            <div className="w-full md:w-1/2">
              <Slide>
                <div className="space-y-4 w-full">
                  <h3 className="font-semibold text-sec text-xl md:text-2xl">
                    Optimizing Project Performance
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
                    Beyond progress reporting, we can identify the inherent risks in your programme and ensure that built-in allowances for risk management are realistic, providing everyone with the confidence that work will be completed on time and on budget.
                  </p>
                  <p>
                    Each of our consultant planners approaches the task of developing a programme by gaining an understanding of the scope of work, timescales, and relevant project phasing, while observing how the key objectives of time, cost and quality are balanced.
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
                  Our Planning Management Services
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
                  <h4 className="text-white font-bold text-lg">Construction Delivery Programmes</h4>
                  <p className="text-white text-sm md:text-base">
                    Development of original programmes for client acceptance, ensuring full compliance with contract requirements and engaging the project delivery team.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Progress Monitoring & Reporting</h4>
                  <p className="text-white text-sm md:text-base">
                    Providing detailed monitoring reports against baseline, highlighting any variance in the programme of work and offering solutions to keep projects on track.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Claims Evaluation & Quantification</h4>
                  <p className="text-white text-sm md:text-base">
                    Expert analysis and support for claims situations, helping to defend and protect your project against claims with detailed documentation and evidence.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Forensic Planning</h4>
                  <p className="text-white text-sm md:text-base">
                    Specialized forensic planning services to put together cases for project extensions of time (EOT) and analyze delays for dispute resolution.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">4D Planning & BIM Integration</h4>
                  <p className="text-white text-sm md:text-base">
                    Combining traditional scheduling with 3D models to create visual simulations of project progress, enhancing communication and decision-making.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Resource Planning & Optimization</h4>
                  <p className="text-white text-sm md:text-base">
                    Strategic resource allocation and optimization to maximize efficiency and minimize conflicts across project timelines.
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
                  Benefits of Our Planning Management Services
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
                  Our planning management services deliver numerous benefits to your organization, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white transition-all duration-150 transform hover:scale-105">
                  <li>Improved project predictability through realistic and achievable schedules</li>
                  <li>Early identification of potential delays and proactive mitigation strategies</li>
                  <li>Enhanced resource utilization and cost control</li>
                  <li>Better coordination between different project stakeholders</li>
                  <li>Increased transparency in project progress reporting</li>
                  <li>Stronger position in claims situations with detailed documentation</li>
                  <li>Visual communication of complex scheduling information through 4D planning</li>
                  <li>Continuous improvement through lessons learned and historical data analysis</li>
                </ul>
              </div>
            </Slide>
          </div>

          {/* CTA Section */}
          <div className="w-full py-8 flex flex-col items-center">
            <Slide>
              <div className="text-center max-w-2xl mx-auto space-y-6">
                <h3 className="text-sec font-bold text-xl md:text-2xl">
                  Ready to Optimize Your Project Planning?
                </h3>
                <p className="text-white text-sm md:text-base">
                  Contact us today to discuss how our planning management services can help your organization deliver projects more effectively and efficiently.
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

export default PlanningManagement

