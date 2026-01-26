"use client"

import Footer from "@/components/footer"
import Nav from "@/components/nav"
import React from 'react';
import Link from "next/link"
import Slide from "@/components/slide"

function CostManagement() {
  return (
    <>
      <Nav />
      <div className="font-poppins relative flex flex-col justify-center items-center pt-32 pb-16 w-full overflow-x-hidden">
        <div className="relative space-y-8 flex flex-col justify-center items-start w-full px-4 sm:px-6 md:px-[10%] max-w-full">
          {/* Hero Section */}
          <div className="w-full flex flex-col items-center justify-center mb-12">
            <Slide>
              <h1 className="font-poppins text-white font-extrabold text-center text-3xl md:text-5xl mb-8">
                Cost Management
              </h1>
            </Slide>
            <Slide>
              <h2 className="text-sec font-semibold text-center text-lg md:text-2xl mb-12">
                Our expert forecasting methodologies predict and prevent budget overruns, controlling your project costs
              </h2>
            </Slide>
            <Slide>
              <img src="/cost-management.png" alt="Cost Management" className="w-full max-w-3xl mx-auto mb-8" />
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
                    Baseline Management for Project Success
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
                    Baseline management, whether cost or planning, is the cornerstone of any programme or project's success. Metisplan offers a service that is both experienced and tried and tested across a wide spectrum of major capital infrastructure programmes.
                  </p>
                  <p>
                    Accurate forecasting allows for better control of your costs and gives management a platform to aid in better decision making when managing any programme or project. Our commitment is to ensure you have the right platform to access the right information at the right time.
                  </p>
                </div>
              </Slide>
            </div>

            <div className="w-full md:w-1/2">
              <Slide>
                <div className="space-y-4 w-full">
                  <h3 className="font-semibold text-sec text-xl md:text-2xl">
                    Proven Processes and Systems
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
                    Unlike our competitors, we do not reinvent the wheel at your cost. Instead, we use proven processes and systems alongside both assurance and governance methodologies ensuring right-first-time data.
                  </p>
                  <p>
                    Metisplan's reputation is testimony to our commitment to working with our clients from start to finish, whether setting up the project or programme from scratch or resolving issues and getting projects back on track, with the right people for the job specification.
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
                  Our Cost Management Services
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
                  <h4 className="text-white font-bold text-lg">Budget Development & Planning</h4>
                  <p className="text-white text-sm md:text-base">
                    Establishing realistic budgets and cost plans aligned with project scope, schedule, and quality requirements to provide a solid financial foundation.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Cost Estimating & Forecasting</h4>
                  <p className="text-white text-sm md:text-base">
                    Developing detailed cost estimates and forecasts using industry-standard methodologies and historical data to ensure accuracy and reliability.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Cash Flow Management</h4>
                  <p className="text-white text-sm md:text-base">
                    Creating and monitoring cash flow projections to ensure adequate funding throughout the project lifecycle and optimize financial resources.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Value Engineering</h4>
                  <p className="text-white text-sm md:text-base">
                    Identifying opportunities to reduce costs without sacrificing functionality or quality through systematic analysis of design and construction methods.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Earned Value Management</h4>
                  <p className="text-white text-sm md:text-base">
                    Implementing earned value techniques to measure project performance against the baseline plan and forecast final costs and completion dates.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Change Management</h4>
                  <p className="text-white text-sm md:text-base">
                    Evaluating the cost impact of proposed changes and managing the change process to minimize disruption and maintain budget control.
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
                  Benefits of Our Cost Management Services
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
                  Our cost management services deliver numerous benefits to your organization, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white transition-all duration-150 transform hover:scale-105">
                  <li>Improved financial predictability and control throughout the project lifecycle</li>
                  <li>Early identification of potential cost overruns and proactive mitigation strategies</li>
                  <li>Better informed decision-making through accurate and timely cost information</li>
                  <li>Optimized resource allocation and improved return on investment</li>
                  <li>Enhanced stakeholder confidence through transparent cost reporting</li>
                  <li>Reduced financial risk through systematic cost management processes</li>
                  <li>Integration of cost and schedule management for comprehensive project control</li>
                  <li>Knowledge capture for continuous improvement in cost estimation and control</li>
                </ul>
              </div>
            </Slide>
          </div>

          {/* CTA Section */}
          <div className="w-full py-8 flex flex-col items-center">
            <Slide>
              <div className="text-center max-w-2xl mx-auto space-y-6">
                <h3 className="text-sec font-bold text-xl md:text-2xl">
                  Ready to Take Control of Your Project Costs?
                </h3>
                <p className="text-white text-sm md:text-base">
                  Contact us today to discuss how our cost management services can help your organization deliver projects within budget and maximize financial performance.
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

export default CostManagement
