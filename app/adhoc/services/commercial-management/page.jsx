"use client"

import Footer from "@/components/footer"
import Nav from "@/components/nav"
import React from 'react';
import Link from "next/link"
import Slide from "@/components/slide"

function CommercialManagement() {
  return (
    <>
      <Nav />
      <div className="font-poppins relative flex flex-col justify-center items-center pt-32 pb-16 w-full">
        <div className="relative space-y-8 flex flex-col justify-center items-start w-full px-4 sm:px-6 md:px-[10%] max-w-full">
          {/* Hero Section */}
          <div className="w-full flex flex-col items-center justify-center mb-12">
            <Slide>
              <h1 className="font-poppins text-white font-extrabold text-center text-3xl md:text-5xl mb-8">
                Commercial Management
              </h1>
            </Slide>
            <Slide>
              <h2 className="text-sec font-semibold text-center text-lg md:text-2xl mb-12">
                From project conception to final account agreements, our team can fulfil your commercial needs during a full project lifecycle.
              </h2>
            </Slide>
            <Slide>
              <img src="/commercial-management.png" alt="Commercial Management" className="w-full max-w-3xl mx-auto mb-8" />
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
                    Comprehensive Financial Insight
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
                    At Metisplan, our commercial team understands the need to fully comprehend where your project is heading financially. We know that simply reporting costs is not enough.
                  </p>
                  <p>
                    You want to understand why and where money needs spending and how this will impact your budget in the future. Our approach provides complete financial transparency and proactive management to ensure project success.
                  </p>
                </div>
              </Slide>
            </div>

            <div className="w-full md:w-1/2">
              <Slide>
                <div className="space-y-4 w-full">
                  <h3 className="font-semibold text-sec text-xl md:text-2xl">
                    Value-Driven Management
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
                    Our team will commercially manage your project to ensure it delivers the best value for money by controlling costs and managing change control with both clients and sub-contractors.
                  </p>
                  <p>
                    We focus on maximizing project value while maintaining quality standards, creating a balanced approach that protects your financial interests throughout the entire project lifecycle.
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
                  Our Commercial Management Services
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
                  <h4 className="text-white font-bold text-lg">Tendering & Sub-Contracting</h4>
                  <p className="text-white text-sm md:text-base">
                    Our Quantity Surveyors can advise and write sub-contracts to help deliver your project and manage the sub-contractor through to their scope completion, including the tender process and assessment.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Cost Reporting & Forecasting</h4>
                  <p className="text-white text-sm md:text-base">
                    Detailed reporting of current costs and projection of future expenses throughout the project's life cycle, providing clear visibility of financial performance and trends.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Change Control Management</h4>
                  <p className="text-white text-sm md:text-base">
                    Systematic management of changes to project scope, ensuring proper documentation, evaluation, approval, and implementation of changes with minimal financial impact.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Applications for Payment</h4>
                  <p className="text-white text-sm md:text-base">
                    Reviewing and assessing applications for payment from sub-contractors, ensuring they align with contract terms, completed work, and project milestones.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Final Accounting</h4>
                  <p className="text-white text-sm md:text-base">
                    Expert management of complex final accounts, reviewing your project and agreeing on final accounts in accordance with contracts, both upstream with clients and downstream with sub-contractors.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Contract Administration</h4>
                  <p className="text-white text-sm md:text-base">
                    Comprehensive management of contractual obligations, ensuring compliance with terms and conditions, and maintaining proper documentation throughout the project.
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
                  Benefits of Our Commercial Management Services
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
                  Our commercial management services deliver numerous benefits to your organization, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white transition-all duration-150 transform hover:scale-105">
                  <li>Enhanced financial visibility and control throughout the project lifecycle</li>
                  <li>Improved cash flow management through accurate forecasting and payment processing</li>
                  <li>Reduced financial risks through proactive change management and contract administration</li>
                  <li>Optimized procurement processes leading to better value from sub-contractors</li>
                  <li>Minimized disputes through clear contractual arrangements and documentation</li>
                  <li>Streamlined final account settlements, reducing delays in project closure</li>
                  <li>Better decision-making through comprehensive financial reporting and analysis</li>
                  <li>Protection of profit margins through effective cost control and value engineering</li>
                </ul>
              </div>
            </Slide>
          </div>

          {/* CTA Section */}
          <div className="w-full py-8 flex flex-col items-center">
            <Slide>
              <div className="text-center max-w-2xl mx-auto space-y-6">
                <h3 className="text-sec font-bold text-xl md:text-2xl">
                  Ready to Enhance Your Commercial Management?
                </h3>
                <p className="text-white text-sm md:text-base">
                  Contact us today to discuss how our commercial management services can help your organization achieve better financial outcomes for your construction projects.
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

export default CommercialManagement

