"use client"

import Footer from "@/components/footer"
import Nav from "@/components/nav"
import React from 'react';
import Link from "next/link"
import Slide from "@/components/slide"

function ClaimsAnalysis() {
  return (
    <>
      <Nav />
      <div className="font-poppins relative flex flex-col justify-center items-center pt-32 pb-16 w-full">
        <div className="relative space-y-8 flex flex-col justify-center items-start w-full px-4 sm:px-6 md:px-[10%] max-w-full">
          {/* Hero Section */}
          <div className="w-full flex flex-col items-center justify-center mb-12">
            <Slide>
              <h1 className="font-poppins text-white font-extrabold text-center text-3xl md:text-5xl mb-8">
                Claims Analysis
              </h1>
            </Slide>
            <Slide>
              <h2 className="text-sec font-semibold text-center text-lg md:text-2xl mb-12">
                Expert analysis and support for construction claims and disputes
              </h2>
            </Slide>
            <Slide>
              <img src="/claims-analysis.png" alt="Claims Analysis" className="w-full max-w-3xl mx-auto mb-8" />
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
                    Comprehensive Claims Assessment
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
                    Our claims analysis service provides comprehensive assessment of construction claims related to delays, disruptions, variations, and additional costs. We combine technical expertise with industry knowledge to deliver thorough, independent analyses.
                  </p>
                  <p>
                    Using advanced forensic scheduling techniques, we identify delay events and impacts such as change orders, differing site conditions, and design deficiencies. Our approach focuses on establishing causation and quantifying delays through detailed analysis of project documentation and schedules.
                  </p>
                </div>
              </Slide>
            </div>

            <div className="w-full md:w-1/2">
              <Slide>
                <div className="space-y-4 w-full">
                  <h3 className="font-semibold text-sec text-xl md:text-2xl">
                    Expert Methodology
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
                    We employ industry-recognized forensic scheduling techniques including Time Impact Analysis, Windows Analysis, As-Planned vs. As-Built Analysis, Impacted As-Planned Analysis, and Collapsed As-Built Analysis to ensure the most appropriate methodology for your specific situation.
                  </p>
                  <p>
                    Our experts carefully evaluate the availability of contemporaneous schedule updates, contract requirements, and the quality of available construction schedules to determine the most effective approach for your claim, ensuring robust results that stand up to scrutiny.
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
                  Our Claims Analysis Services
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
                  <h4 className="text-white font-bold text-lg">Delay Analysis</h4>
                  <p className="text-white text-sm md:text-base">
                    Detailed analysis of project delays using Critical Path Method (CPM) techniques to identify causes, establish entitlement, and quantify time impacts on project schedules.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Disruption & Productivity Loss</h4>
                  <p className="text-white text-sm md:text-base">
                    Assessment of productivity losses resulting from multiple changes, interference, and alterations in work sequence, using measured mile and other industry-accepted methodologies.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Quantum Assessment</h4>
                  <p className="text-white text-sm md:text-base">
                    Calculation and preparation of cost schedules for delay damages including extended field office overhead, unabsorbed home office overhead, standby equipment, and lost revenue.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Schedule Analysis</h4>
                  <p className="text-white text-sm md:text-base">
                    Forensic review of project schedules to identify critical path impacts, concurrent delays, and responsibility allocation between project stakeholders.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Claims Documentation</h4>
                  <p className="text-white text-sm md:text-base">
                    Preparation of comprehensive claims documentation including detailed narratives, supporting evidence, and visual presentations that clearly communicate complex technical issues.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Proactive Claims Management</h4>
                  <p className="text-white text-sm md:text-base">
                    Implementation of strategies to identify potential issues early, maintain proper documentation, and minimize the impact of claims on project delivery and stakeholder relationships.
                  </p>
                </div>
              </div>
            </Slide>
          </div>

          {/* Analysis Methods Section */}
          <div className="w-full py-8">
            <Slide>
              <div className="space-y-4 w-full">
                <h3 className="font-semibold text-sec text-xl md:text-2xl">
                  Forensic Scheduling Methods
                </h3>
                <hr
                  className="border-0 w-full"
                  style={{
                    backgroundColor: "#414141",
                    height: 1,
                  }}
                />
              </div>
              <div className="mt-6 space-y-6">
                <div className="bg-ft rounded-xl p-6 border-[3px] border-ftborder">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="md:col-span-1 flex items-center justify-center">
                      <div className="bg-darker rounded-full w-16 h-16 flex items-center justify-center">
                        <span className="text-sec font-bold text-xl">01</span>
                      </div>
                    </div>
                    <div className="md:col-span-4">
                      <h4 className="text-sec font-bold text-lg mb-2">Time Impact Analysis (TIA)</h4>
                      <p className="text-white text-sm md:text-base">
                        A forward-looking analysis that measures the impact of specific delay events on the project schedule by inserting delay activities into an updated schedule at the time of occurrence. This method is particularly effective when contemporaneous schedule updates are available.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-ft rounded-xl p-6 border-[3px] border-ftborder">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="md:col-span-1 flex items-center justify-center">
                      <div className="bg-darker rounded-full w-16 h-16 flex items-center justify-center">
                        <span className="text-sec font-bold text-xl">02</span>
                      </div>
                    </div>
                    <div className="md:col-span-4">
                      <h4 className="text-sec font-bold text-lg mb-2">Windows Analysis</h4>
                      <p className="text-white text-sm md:text-base">
                        Divides the project into discrete time periods or "windows" to analyze delays incrementally, allowing for a detailed understanding of critical path shifts and delay responsibility throughout the project timeline.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-ft rounded-xl p-6 border-[3px] border-ftborder">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="md:col-span-1 flex items-center justify-center">
                      <div className="bg-darker rounded-full w-16 h-16 flex items-center justify-center">
                        <span className="text-sec font-bold text-xl">03</span>
                      </div>
                    </div>
                    <div className="md:col-span-4">
                      <h4 className="text-sec font-bold text-lg mb-2">As-Planned vs. As-Built Analysis</h4>
                      <p className="text-white text-sm md:text-base">
                        Compares the planned schedule against what actually occurred, identifying variances and determining the causes and responsibilities for delays. This method is useful when detailed contemporaneous records are available.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          </div>

          {/* Benefits Section */}
          <div className="w-full py-8">
            <Slide>
              <div className="space-y-4 w-full">
                <h3 className="font-semibold text-sec text-xl md:text-2xl">
                  Benefits of Our Claims Analysis Services
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
                <p className="text-white">
                  Our claims analysis services provide numerous benefits to your organization, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white">
                  <li>Expert identification of delay events and their impacts on project schedules</li>
                  <li>Clear establishment of entitlement through detailed causation analysis</li>
                  <li>Accurate quantification of delays and associated costs</li>
                  <li>Strong, defensible documentation that stands up to scrutiny</li>
                  <li>Strategic advice on claim presentation and negotiation</li>
                  <li>Reduced risk of protracted disputes through comprehensive analysis</li>
                  <li>Expert support throughout dispute resolution processes</li>
                  <li>Knowledge transfer to improve future project management practices</li>
                </ul>
              </div>
            </Slide>
          </div>

          {/* CTA Section */}
          <div className="w-full py-8 flex flex-col items-center">
            <Slide>
              <div className="text-center max-w-2xl mx-auto space-y-6">
                <h3 className="text-sec font-bold text-xl md:text-2xl">
                  Need Expert Claims Analysis?
                </h3>
                <p className="text-white text-sm md:text-base">
                  Contact us today to discuss how our claims analysis services can help you resolve construction disputes efficiently and protect your interests.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                  <Link href="/contact">
                    <button className="bg-sec rounded-[40px] w-full sm:w-auto flex justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold">
                      Contact Us
                    </button>
                  </Link>
                  <Link href="/adhoc/forensics">
                    <button className="bg-transparent border-2 border-sec rounded-[40px] w-full sm:w-auto flex justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold text-white">
                      Back to Forensics
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

export default ClaimsAnalysis
