"use client"

import Footer from "@/components/footer"
import Nav from "@/components/nav"
import React from 'react';
import Link from "next/link"
import Slide from "@/components/slide"

function DocumentManagement() {
  return (
    <>
      <Nav />
      <div className="font-poppins relative flex flex-col justify-center items-center pt-32 pb-16 w-full">
        <div className="relative space-y-8 flex flex-col justify-center items-start w-full px-4 sm:px-6 md:px-[10%] max-w-full">
          {/* Hero Section */}
          <div className="w-full flex flex-col items-center justify-center mb-12">
            <Slide>
              <h1 className="font-poppins text-white font-extrabold text-center text-3xl md:text-5xl mb-8">
                Document Management
              </h1>
            </Slide>
            <Slide>
              <h2 className="text-sec font-semibold text-center text-lg md:text-2xl mb-12">
                Need help organising, storing and protecting documents during the project lifecycle?
              </h2>
            </Slide>
            <Slide>
              <img src="/document-management.png" alt="Document Management" className="w-full max-w-3xl mx-auto mb-8" />
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
                    Expert Document Control
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
                    Metisplan provides experienced document controllers at all levels, offering assistance with day-to-day project documentation, management of metadata requirements, and oversight and audit.
                  </p>
                  <p>
                    Our experienced personnel work collaboratively ensuring a seamless transition between client and contractor in order to prepare and manage your documentation with accuracy and efficiency.
                  </p>
                </div>
              </Slide>
            </div>

            <div className="w-full md:w-1/2">
              <Slide>
                <div className="space-y-4 w-full">
                  <h3 className="font-semibold text-sec text-xl md:text-2xl">
                    Comprehensive Document Systems
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
                    We establish robust document management systems tailored to your project needs, including metadata numbering conventions, electronic sorting and filing, and efficient storage and retrieval processes.
                  </p>
                  <p>
                    In addition to managing your documents, we prepare regular and ad-hoc reports for management, providing valuable insights into document status, compliance, and project information flow.
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
                  Our Document Management Services
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
                  <h4 className="text-white font-bold text-lg">Metadata Management</h4>
                  <p className="text-white text-sm md:text-base">
                    Establishing and maintaining consistent metadata numbering conventions to ensure proper document identification, categorization, and retrieval.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Document Control</h4>
                  <p className="text-white text-sm md:text-base">
                    Day-to-day management of project documentation, including version control, distribution, and tracking of document status throughout the project lifecycle.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Electronic Filing Systems</h4>
                  <p className="text-white text-sm md:text-base">
                    Implementation of electronic sorting and filing systems to organize documents logically and ensure quick and efficient access to information.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Document Storage & Retrieval</h4>
                  <p className="text-white text-sm md:text-base">
                    Efficient storage and retrieval processes for both electronic and hard copy documents, ensuring information is accessible when needed.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Management Reporting</h4>
                  <p className="text-white text-sm md:text-base">
                    Preparation of regular and ad-hoc document management reports, providing insights into document status, compliance, and information flow.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Staff Training</h4>
                  <p className="text-white text-sm md:text-base">
                    Training for your employees – from basic user to document management and audit/oversight – to maintain accurate, up-to-date records.
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
                  Benefits of Our Document Management Services
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
                  Our document management services deliver numerous benefits to your organization, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white">
                  <li>Improved information accessibility and reduced time spent searching for documents</li>
                  <li>Enhanced document security and protection of sensitive project information</li>
                  <li>Consistent document naming and classification for easier identification</li>
                  <li>Streamlined document approval and distribution processes</li>
                  <li>Reduced risk of using outdated or incorrect document versions</li>
                  <li>Improved collaboration between project stakeholders through shared document access</li>
                  <li>Comprehensive audit trails for document changes and approvals</li>
                  <li>Knowledge transfer to your team through targeted training programs</li>
                </ul>
              </div>
            </Slide>
          </div>

          {/* CTA Section */}
          <div className="w-full py-8 flex flex-col items-center">
            <Slide>
              <div className="text-center max-w-2xl mx-auto space-y-6">
                <h3 className="text-sec font-bold text-xl md:text-2xl">
                  Ready to Streamline Your Document Management?
                </h3>
                <p className="text-white text-sm md:text-base">
                  Contact us today to discuss how our document management services can help your organization organize, store, and protect critical project documentation.
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

export default DocumentManagement

