"use client"

import Footer from "@/components/footer"
import Nav from "@/components/nav"
import React from 'react';
import Link from "next/link"
import Slide from "@/components/slide"

function ProjectEstimations() {
  return (
    <>
      <Nav />
      <div className="font-poppins relative flex flex-col justify-center items-center pt-32 pb-16 w-full">
        <div className="relative space-y-8 flex flex-col justify-center items-start w-full px-4 sm:px-6 md:px-[10%] max-w-full">
          {/* Hero Section */}
          <div className="w-full flex flex-col items-center justify-center mb-12">
            <Slide>
              <h1 className="font-poppins text-white font-extrabold text-center text-3xl md:text-5xl mb-8">
                Project Estimations
              </h1>
            </Slide>
            <Slide>
              <h2 className="text-sec font-semibold text-center text-lg md:text-2xl mb-12">
                We're able to provide you with expert judgements across all areas of project estimation - inc. bid submission and tendering
              </h2>
            </Slide>
            <Slide>
              <img src="/project-estimations.png" alt="Project Estimations" className="w-full max-w-3xl mx-auto mb-8" />
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
                    Robust Estimation Approach
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
                    Estimates have, and will continue to be, the focus of any project. Metisplan works with customers to refine their documentation, focusing on the total project scope to ensure a robust estimate is prepared.
                  </p>
                  <p>
                    Our approach includes having a sufficient change process in place so that any additional work has an underpinning cost prior to any approval to proceed, providing clarity and control throughout the project lifecycle.
                  </p>
                </div>
              </Slide>
            </div>

            <div className="w-full md:w-1/2">
              <Slide>
                <div className="space-y-4 w-full">
                  <h3 className="font-semibold text-sec text-xl md:text-2xl">
                    Collaborative Estimation Process
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
                    Metisplan will work alongside you to prepare a project estimate for any stage of your project, evaluate any third-party estimates, and provide benchmarks and auditing throughout the project.
                  </p>
                  <p>
                    We have expertise in all aspects of project estimating and will work to ensure that your programme or project has the right information when it is needed, enabling informed decision-making and accurate financial planning.
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
                  Our Project Estimation Services
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
                  <h4 className="text-white font-bold text-lg">Conceptual Estimating</h4>
                  <p className="text-white text-sm md:text-base">
                    Early-stage cost estimates based on conceptual designs and project requirements, providing a foundation for initial budgeting and feasibility assessments.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Detailed Project Estimates</h4>
                  <p className="text-white text-sm md:text-base">
                    Comprehensive cost estimates for projects at various stages of development, incorporating detailed scope, quantities, rates, and allowances.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Bid Preparation & Tendering</h4>
                  <p className="text-white text-sm md:text-base">
                    Professional assistance in preparing competitive bids for construction projects, ensuring accurate pricing and comprehensive scope coverage.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Third-Party Estimate Evaluation</h4>
                  <p className="text-white text-sm md:text-base">
                    Independent assessment of estimates prepared by other parties, identifying potential gaps, risks, or opportunities for optimization.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Benchmarking & Auditing</h4>
                  <p className="text-white text-sm md:text-base">
                    Comparison of project costs against industry benchmarks and continuous auditing throughout the project to ensure estimate accuracy and cost control.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Change Management Estimating</h4>
                  <p className="text-white text-sm md:text-base">
                    Rapid and accurate estimation of proposed changes to project scope, providing cost implications before approvals to maintain budget control.
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
                  Benefits of Our Project Estimation Services
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
                  Our project estimation services deliver numerous benefits to your organization, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white">
                  <li>Increased confidence in project budgets through robust estimation methodologies</li>
                  <li>Improved bid competitiveness while maintaining appropriate profit margins</li>
                  <li>Early identification of cost risks and opportunities for value engineering</li>
                  <li>Enhanced decision-making through accurate cost information at all project stages</li>
                  <li>Reduced financial surprises through comprehensive scope coverage and change management</li>
                  <li>Better resource planning based on detailed cost breakdowns</li>
                  <li>Independent validation of estimates through third-party reviews and benchmarking</li>
                  <li>Continuous improvement of estimation accuracy through project feedback and auditing</li>
                </ul>
              </div>
            </Slide>
          </div>

          {/* CTA Section */}
          <div className="w-full py-8 flex flex-col items-center">
            <Slide>
              <div className="text-center max-w-2xl mx-auto space-y-6">
                <h3 className="text-sec font-bold text-xl md:text-2xl">
                  Ready to Improve Your Project Estimations?
                </h3>
                <p className="text-white text-sm md:text-base">
                  Contact us today to discuss how our project estimation services can help your organization develop more accurate budgets and win more competitive bids.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                  <Link href="/contact">
                    <button className="bg-sec rounded-[40px] w-full sm:w-auto flex justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold">
                      Contact Us
                    </button>
                  </Link>
                  <Link href="/adhoc/services">
                    <button className="bg-transparent border-2 border-sec rounded-[40px] w-full sm:w-auto flex justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold text-white">
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

export default ProjectEstimations

