"use client"

import Footer from "@/components/footer"
import Nav from "@/components/nav"
import React from 'react';
import Link from "next/link"
import Slide from "@/components/slide"

function DisputeResolution() {
  return (
    <>
      <Nav />
      <div className="font-poppins relative flex flex-col justify-center items-center pt-32 pb-16 w-full">
        <div className="relative space-y-8 flex flex-col justify-center items-start w-full px-4 sm:px-6 md:px-[10%] max-w-full">
          {/* Hero Section */}
          <div className="w-full flex flex-col items-center justify-center mb-12">
            <Slide>
              <h1 className="font-poppins text-white font-extrabold text-center text-3xl md:text-5xl mb-8">
                Dispute Resolution
              </h1>
            </Slide>
            <Slide>
              <h2 className="text-sec font-semibold text-center text-lg md:text-2xl mb-12">
                Effective strategies for resolving construction disputes efficiently and cost-effectively
              </h2>
            </Slide>
            <Slide>
              <img src="/dispute-resolution.png" alt="Dispute Resolution" className="w-full max-w-3xl mx-auto mb-8" />
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
                    Strategic Dispute Management
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
                    Our dispute resolution services provide expert support for resolving construction conflicts through mediation, arbitration, and litigation. We combine technical expertise with industry knowledge to deliver effective strategies that minimize disruption and protect your interests.
                  </p>
                  <p>
                    We understand that construction disputes can arise from various factors including delays, disruptions, variations, and quality issues. Our approach focuses on identifying the core issues, analyzing the available evidence, and developing a strategic plan to achieve the most favorable outcome.
                  </p>
                </div>
              </Slide>
            </div>

            <div className="w-full md:w-1/2">
              <Slide>
                <div className="space-y-4 w-full">
                  <h3 className="font-semibold text-sec text-xl md:text-2xl">
                    Collaborative Resolution Approach
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
                    We believe in the value of resolving disputes amicably whenever possible. Our experts work collaboratively with all parties to find consensual solutions that satisfy everyone involved, using skills such as active listening, clear communication, and problem-solving.
                  </p>
                  <p>
                    When more formal resolution methods are required, we provide comprehensive support throughout the process, ensuring your position is clearly presented and your interests are protected. Our goal is to achieve efficient resolution while maintaining business relationships.
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
                  Our Dispute Resolution Services
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
                  <h4 className="text-white font-bold text-lg">Negotiation Support</h4>
                  <p className="text-white text-sm md:text-base">
                    Expert assistance in direct negotiations between parties, helping to identify common ground, develop creative solutions, and achieve amicable settlements without formal proceedings.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Mediation Services</h4>
                  <p className="text-white text-sm md:text-base">
                    Support throughout the mediation process, including preparation of position statements, technical analysis, and expert guidance to help reach a mutually acceptable resolution.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Arbitration Support</h4>
                  <p className="text-white text-sm md:text-base">
                    Comprehensive assistance for arbitration proceedings, including preparation of detailed submissions, technical evidence, and expert representation to secure a favorable arbitration award.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Litigation Assistance</h4>
                  <p className="text-white text-sm md:text-base">
                    Expert support throughout the litigation process, from case preparation and discovery to expert testimony and settlement negotiations, ensuring your position is effectively presented.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Dispute Avoidance Strategies</h4>
                  <p className="text-white text-sm md:text-base">
                    Proactive measures to identify potential issues early, implement effective contract management practices, and establish clear communication channels to prevent disputes from arising.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Multi-Party Dispute Management</h4>
                  <p className="text-white text-sm md:text-base">
                    Specialized expertise in handling complex disputes involving multiple stakeholders, coordinating resolution efforts, and developing comprehensive settlement frameworks.
                  </p>
                </div>
              </div>
            </Slide>
          </div>

          {/* Resolution Methods Section */}
          <div className="w-full py-8">
            <Slide>
              <div className="space-y-4 w-full">
                <h3 className="font-semibold text-sec text-xl md:text-2xl">
                  Dispute Resolution Methods
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
                      <h4 className="text-sec font-bold text-lg mb-2">Negotiation</h4>
                      <p className="text-white text-sm md:text-base">
                        A direct process where parties work together to find consensual solutions that satisfy everyone involved. Effective negotiation relies on active listening, clear communication, and problem-solving skills to understand needs and reach satisfactory agreements.
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
                      <h4 className="text-sec font-bold text-lg mb-2">Mediation</h4>
                      <p className="text-white text-sm md:text-base">
                        An alternative dispute resolution system involving a neutral third party who helps the disputing parties reach an amicable settlement. Mediation provides flexibility, allowing parties to initiate the process at any project stage and maintain control over the final outcome.
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
                      <h4 className="text-sec font-bold text-lg mb-2">Arbitration</h4>
                      <p className="text-white text-sm md:text-base">
                        A more formal process where parties agree to appoint a neutral arbitrator who issues a final and binding decision. Arbitration offers flexibility in selecting arbitrators and procedures while providing confidentiality that protects sensitive information and trade secrets.
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
                  Benefits of Our Dispute Resolution Services
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
                  Our dispute resolution services provide numerous benefits to your organization, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white transition-all duration-150 transform hover:scale-105">
                  <li>Faster resolution compared to traditional litigation, saving time and resources</li>
                  <li>Reduced costs through efficient dispute management and early resolution</li>
                  <li>Preservation of business relationships through collaborative approaches</li>
                  <li>Confidentiality that protects sensitive business information</li>
                  <li>Expert technical support that strengthens your position</li>
                  <li>Flexible solutions tailored to your specific dispute and business needs</li>
                  <li>Reduced stress and disruption to ongoing projects and operations</li>
                  <li>Higher satisfaction with outcomes through participation in the resolution process</li>
                </ul>
              </div>
            </Slide>
          </div>

          {/* CTA Section */}
          <div className="w-full py-8 flex flex-col items-center">
            <Slide>
              <div className="text-center max-w-2xl mx-auto space-y-6">
                <h3 className="text-sec font-bold text-xl md:text-2xl">
                  Need Help Resolving a Construction Dispute?
                </h3>
                <p className="text-white text-sm md:text-base">
                  Contact us today to discuss how our dispute resolution services can help you resolve construction conflicts efficiently and protect your business interests.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                  <Link href="/contact">
                    <button className="bg-sec hover:bg-transparent hover:border-2 hover:border-sec hover:text-white rounded-[40px] w-full sm:w-auto flex justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold transition-all duration-150 transform hover:scale-105">
                      Contact Us
                    </button>
                  </Link>
                  <Link href="/adhoc/forensics">
                    <button className="bg-transparent border-2 border-sec hover:bg-sec hover:text-black rounded-[40px] w-full sm:w-auto flex justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold text-white transition-all duration-150 transform hover:scale-105">
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

export default DisputeResolution
