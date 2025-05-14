"use client"

import Footer from "@/components/footer"
import Nav from "@/components/nav"
import React from 'react';
import Link from "next/link"
import Slide from "@/components/slide"

function FunctionalLead() {
  return (
    <>
      <Nav />
      <div className="font-poppins relative flex flex-col justify-center items-center pt-32 pb-16 w-full">
        <div className="relative space-y-8 flex flex-col justify-center items-start w-full px-4 sm:px-6 md:px-[10%] max-w-full">
          {/* Hero Section */}
          <div className="w-full flex flex-col items-center justify-center mb-12">
            <Slide>
              <h1 className="font-poppins text-white font-extrabold text-center text-3xl md:text-5xl mb-8">
                Functional Lead Service
              </h1>
            </Slide>
            <Slide>
              <h2 className="text-sec font-semibold text-center text-lg md:text-2xl mb-12">
                Could you benefit from an experienced and disciplined expert to act as a functional lead on your project?
              </h2>
            </Slide>
            <Slide>
              <img src="/functional-lead.png" alt="Functional Lead Service" className="w-full max-w-3xl mx-auto mb-8" />
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
                    Specialized Expertise
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
                    Creating and maintaining competitive advantage is expensive for any business, more so when you have to invest in and nurture skill-sets from scratch that do not naturally form part of your core-business.
                  </p>
                  <p>
                    Where the requisite skill-set is a planning function, Metisplan can help you get past that challenge of creating and managing the required resources. Our specialized expertise allows you to access top-tier planning capabilities without the overhead of developing them internally.
                  </p>
                </div>
              </Slide>
            </div>

            <div className="w-full md:w-1/2">
              <Slide>
                <div className="space-y-4 w-full">
                  <h3 className="font-semibold text-sec text-xl md:text-2xl">
                    Flexible Leadership Solutions
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
                    We can act as your functional lead for individual projects, or indeed a portfolio of projects managed as a programme of work, with a tried and trusted team that integrates seamlessly with your existing operations.
                  </p>
                  <p>
                    Our functional lead service can be engaged for appointments of specific durations, or for the express purpose of setting up and developing the planning function in your business for the long term, providing flexibility to meet your specific organizational needs.
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
                  Our Functional Lead Services
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
                  <h4 className="text-white font-bold text-lg">Planning & Scheduling Leadership</h4>
                  <p className="text-white text-sm md:text-base">
                    Expert leadership in developing and managing project schedules, ensuring activities are properly sequenced, resourced, and monitored throughout the project lifecycle.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Programme Management</h4>
                  <p className="text-white text-sm md:text-base">
                    Coordinated management of multiple related projects to achieve strategic objectives and benefits that would not be realized if the projects were managed individually.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Resource Management</h4>
                  <p className="text-white text-sm md:text-base">
                    Strategic allocation and optimization of resources across projects, ensuring appropriate skills and capacity are available when needed to meet project objectives.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Process Development</h4>
                  <p className="text-white text-sm md:text-base">
                    Establishment of standardized planning processes, methodologies, and best practices tailored to your organization's specific needs and industry requirements.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Team Building & Mentoring</h4>
                  <p className="text-white text-sm md:text-base">
                    Development of internal planning capabilities through knowledge transfer, training, and mentoring of your staff to build sustainable in-house expertise.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Stakeholder Management</h4>
                  <p className="text-white text-sm md:text-base">
                    Effective communication with project stakeholders, ensuring alignment of expectations, timely reporting, and collaborative resolution of planning-related issues.
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
                  Benefits of Our Functional Lead Service
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
                  Our functional lead service delivers numerous benefits to your organization, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white">
                  <li>Immediate access to specialized planning expertise without lengthy recruitment processes</li>
                  <li>Reduced overhead costs compared to maintaining full-time specialized staff</li>
                  <li>Implementation of industry best practices and proven methodologies</li>
                  <li>Scalable resources that can flex with your project demands</li>
                  <li>Knowledge transfer to build internal capabilities for long-term sustainability</li>
                  <li>Consistent application of planning standards across multiple projects</li>
                  <li>Independent perspective and objective assessment of planning challenges</li>
                  <li>Seamless integration with your existing project management structure</li>
                </ul>
              </div>
            </Slide>
          </div>

          {/* CTA Section */}
          <div className="w-full py-8 flex flex-col items-center">
            <Slide>
              <div className="text-center max-w-2xl mx-auto space-y-6">
                <h3 className="text-sec font-bold text-xl md:text-2xl">
                  Ready to Enhance Your Planning Capabilities?
                </h3>
                <p className="text-white text-sm md:text-base">
                  Contact us today to discuss how our functional lead service can help your organization develop and implement effective planning functions for your projects and programmes.
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

export default FunctionalLead

