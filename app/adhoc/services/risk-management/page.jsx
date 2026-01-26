"use client"

import Footer from "@/components/footer"
import Nav from "@/components/nav"
import React from 'react';
import Link from "next/link"
import Slide from "@/components/slide"

function RiskManagement() {
  return (
    <>
      <Nav />
      <div className="font-poppins relative flex flex-col justify-center items-center pt-32 pb-16 w-full">
        <div className="relative space-y-8 flex flex-col justify-center items-start w-full px-4 sm:px-6 md:px-[10%] max-w-full">
          {/* Hero Section */}
          <div className="w-full flex flex-col items-center justify-center mb-12">
            <Slide>
              <h1 className="font-poppins text-white font-extrabold text-center text-3xl md:text-5xl mb-8">
                Risk Management
              </h1>
            </Slide>
            <Slide>
              <h2 className="text-sec font-semibold text-center text-lg md:text-2xl mb-12">
                Looking to control the impact of risks and maximise the realisation of opportunities?
              </h2>
            </Slide>
            <Slide>
              <img src="/risk-management.png" alt="Risk Management" className="w-full max-w-3xl mx-auto mb-8" />
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
                    Proactive Risk Identification
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
                    Good risk management is a proactive process of identification and mitigation. Metisplan looks at the bigger picture, from a whole programme perspective, with the skills and industry know-how to successfully aid both programmes and projects.
                  </p>
                  <p>
                    We work with both the programme and project team as early as possible, establishing and identifying risks in order to formulate a clear strategy to mitigate those risks and work towards a successful outcome.
                  </p>
                </div>
              </Slide>
            </div>

            <div className="w-full md:w-1/2">
              <Slide>
                <div className="space-y-4 w-full">
                  <h3 className="font-semibold text-sec text-xl md:text-2xl">
                    Robust Risk Processes
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
                    By establishing a robust risk process, we can continually identify new risks and work on risk mitigation wherever necessary, as well as identifying opportunities that arise within the programme or project.
                  </p>
                  <p>
                    Metisplan works with senior management to identify the customer's objectives and priorities, utilizing an efficient top-down approach. We also provide robust training and awareness of risk and opportunity to ensure all stakeholders understand the process.
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
                  Our Risk Management Services
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
                  <h4 className="text-white font-bold text-lg">Risk Identification & Assessment</h4>
                  <p className="text-white text-sm md:text-base">
                    Systematic identification and assessment of potential risks that could impact project objectives, including probability and impact analysis.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Risk Mitigation Strategies</h4>
                  <p className="text-white text-sm md:text-base">
                    Development of tailored strategies to mitigate identified risks, including preventive measures and contingency planning.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Schedule Risk Analysis (SRA)</h4>
                  <p className="text-white text-sm md:text-base">
                    Quantitative analysis of schedule risks using advanced modeling techniques to determine the probability of meeting key milestones and completion dates.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Cost Risk Analysis (CRA)</h4>
                  <p className="text-white text-sm md:text-base">
                    Assessment of potential cost impacts of identified risks, providing greater confidence in budget forecasts and contingency requirements.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Opportunity Management</h4>
                  <p className="text-white text-sm md:text-base">
                    Identification and maximization of potential opportunities within projects to enhance performance, reduce costs, or accelerate schedules.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Risk Training & Awareness</h4>
                  <p className="text-white text-sm md:text-base">
                    Comprehensive training programs to build risk awareness and management capabilities within your organization's project teams.
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
                  Benefits of Our Risk Management Services
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
                  Our risk management services deliver numerous benefits to your organization, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white transition-all duration-150 transform hover:scale-105">
                  <li>Increased confidence in project outcomes through systematic risk identification and mitigation</li>
                  <li>Reduced project uncertainty and improved decision-making</li>
                  <li>More accurate schedule and cost forecasts through quantitative risk analysis</li>
                  <li>Proactive management of potential issues before they impact project performance</li>
                  <li>Identification and realization of opportunities to enhance project outcomes</li>
                  <li>Enhanced stakeholder confidence through transparent risk reporting</li>
                  <li>Integration with 4D scheduling models for comprehensive risk visualization</li>
                  <li>Development of organizational risk management capabilities through training and knowledge transfer</li>
                </ul>
              </div>
            </Slide>
          </div>

          {/* CTA Section */}
          <div className="w-full py-8 flex flex-col items-center">
            <Slide>
              <div className="text-center max-w-2xl mx-auto space-y-6">
                <h3 className="text-sec font-bold text-xl md:text-2xl">
                  Ready to Manage Your Project Risks?
                </h3>
                <p className="text-white text-sm md:text-base">
                  Contact us today to discuss how our risk management services can help your organization identify, mitigate, and control project risks while maximizing opportunities.
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

export default RiskManagement

