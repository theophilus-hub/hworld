"use client"

import Footer from "@/components/footer"
import Nav from "@/components/nav"
import React from 'react';
import Link from "next/link"
import Slide from "@/components/slide"

function ExpertWitness() {
  return (
    <>
      <Nav />
      <div className="font-poppins relative flex flex-col justify-center items-center pt-32 pb-16 w-full">
        <div className="relative space-y-8 flex flex-col justify-center items-start w-full px-4 sm:px-6 md:px-[10%] max-w-full">
          {/* Hero Section */}
          <div className="w-full flex flex-col items-center justify-center mb-12">
            <Slide>
              <h1 className="font-poppins text-white font-extrabold text-center text-3xl md:text-5xl mb-8">
                Expert Witness Services
              </h1>
            </Slide>
            <Slide>
              <h2 className="text-sec font-semibold text-center text-lg md:text-2xl mb-12">
                Independent, authoritative testimony for construction claims and disputes
              </h2>
            </Slide>
            <Slide>
              <img src="/expert-witness.png" alt="Expert Witness Services" className="w-full max-w-3xl mx-auto mb-8" />
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
                    Authoritative Expert Testimony
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
                    Our expert witness services provide independent, authoritative testimony for construction claims and disputes. We combine technical expertise with industry knowledge to deliver clear, objective opinions that stand up to scrutiny in mediation, arbitration, and court proceedings.
                  </p>
                  <p>
                    Our experts have extensive experience in all aspects of construction planning, scheduling, and project controls, allowing them to provide credible testimony on complex technical issues. We focus on presenting complex information in an accessible manner that helps judges, arbitrators, and juries understand the key issues.
                  </p>
                </div>
              </Slide>
            </div>

            <div className="w-full md:w-1/2">
              <Slide>
                <div className="space-y-4 w-full">
                  <h3 className="font-semibold text-sec text-xl md:text-2xl">
                    Comprehensive Forensic Analysis
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
                    We conduct thorough forensic analysis of project documentation, schedules, and performance data to identify the causes of delays, disruptions, and other issues. Our approach combines industry-standard methodologies with advanced analytical techniques to provide robust, defensible conclusions.
                  </p>
                  <p>
                    Our experts work closely with legal teams to understand the specific requirements of each case, ensuring that our analysis addresses the key issues and provides the evidence needed to support your position. We prepare detailed reports that clearly explain our findings and conclusions.
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
                  Our Expert Witness Services
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
                  <h4 className="text-white font-bold text-lg">Expert Reports</h4>
                  <p className="text-white text-sm md:text-base">
                    Preparation of comprehensive, well-documented expert reports that clearly present our analysis, findings, and opinions in a format that meets legal requirements and effectively communicates complex technical issues.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Deposition Testimony</h4>
                  <p className="text-white text-sm md:text-base">
                    Expert testimony during depositions, providing clear, concise answers to questions while maintaining the integrity and consistency of our expert opinions throughout the legal process.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Trial Testimony</h4>
                  <p className="text-white text-sm md:text-base">
                    Authoritative, persuasive testimony at trial that effectively communicates complex technical concepts to judges and juries, supported by clear visual aids and demonstrations as appropriate.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Forensic Schedule Analysis</h4>
                  <p className="text-white text-sm md:text-base">
                    Detailed analysis of project schedules using recognized methodologies such as Time Impact Analysis, Windows Analysis, and As-Planned vs. As-Built Analysis to identify and quantify delays.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Quantum Assessment</h4>
                  <p className="text-white text-sm md:text-base">
                    Expert evaluation of the financial impact of delays, disruptions, and other issues, including extended overhead, acceleration costs, loss of productivity, and other damages.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Litigation Support</h4>
                  <p className="text-white text-sm md:text-base">
                    Comprehensive support throughout the litigation process, including assistance with discovery, review of opposing expert reports, preparation of rebuttal opinions, and development of trial strategies.
                  </p>
                </div>
              </div>
            </Slide>
          </div>

          {/* Expert Areas Section */}
          <div className="w-full py-8">
            <Slide>
              <div className="space-y-4 w-full">
                <h3 className="font-semibold text-sec text-xl md:text-2xl">
                  Areas of Expertise
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
                      <h4 className="text-sec font-bold text-lg mb-2">Delay and Disruption Analysis</h4>
                      <p className="text-white text-sm md:text-base">
                        Expert analysis of project delays and disruptions, including identification of critical path impacts, concurrent delays, and responsibility allocation. We employ industry-standard methodologies to provide objective, defensible opinions on delay causation and impact.
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
                      <h4 className="text-sec font-bold text-lg mb-2">Standard of Care Assessment</h4>
                      <p className="text-white text-sm md:text-base">
                        Evaluation of whether project participants met the standard of care expected in the industry, including compliance with contract requirements, industry standards, and best practices in project planning, scheduling, and management.
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
                      <h4 className="text-sec font-bold text-lg mb-2">Construction Productivity Analysis</h4>
                      <p className="text-white text-sm md:text-base">
                        Analysis of productivity losses resulting from changes, interference, and other disruptions, using measured mile and other recognized methodologies to quantify the impact on labor productivity and project performance.
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
                  Benefits of Our Expert Witness Services
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
                  Our expert witness services provide numerous benefits to your organization, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white">
                  <li>Credible, independent testimony from experienced construction professionals</li>
                  <li>Clear, persuasive communication of complex technical issues</li>
                  <li>Robust analysis that stands up to cross-examination and scrutiny</li>
                  <li>Strategic support throughout the litigation or dispute resolution process</li>
                  <li>Comprehensive reports that effectively document findings and opinions</li>
                  <li>Industry-recognized methodologies that enhance the credibility of conclusions</li>
                  <li>Visual aids and demonstrations that help explain complex concepts</li>
                  <li>Objective assessment of project issues and responsibilities</li>
                </ul>
              </div>
            </Slide>
          </div>

          {/* CTA Section */}
          <div className="w-full py-8 flex flex-col items-center">
            <Slide>
              <div className="text-center max-w-2xl mx-auto space-y-6">
                <h3 className="text-sec font-bold text-xl md:text-2xl">
                  Need Expert Testimony for Your Case?
                </h3>
                <p className="text-white text-sm md:text-base">
                  Contact us today to discuss how our expert witness services can strengthen your position in construction disputes and claims.
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

export default ExpertWitness
