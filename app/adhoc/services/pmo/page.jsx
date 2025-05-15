"use client"

import Footer from "@/components/footer"
import Nav from "@/components/nav"
import React from 'react';
import Link from "next/link"
import Slide from "@/components/slide"

function PMO() {
  return (
    <>
      <Nav />
      <div className="font-poppins relative flex flex-col justify-center items-center pt-32 pb-16 w-full">
        <div className="relative space-y-8 flex flex-col justify-center items-start w-full px-4 sm:px-6 md:px-[10%] max-w-full">
          {/* Hero Section */}
          <div className="w-full flex flex-col items-center justify-center mb-12">
            <Slide>
              <h1 className="font-poppins text-white font-extrabold text-center text-3xl md:text-5xl mb-8">
                Project Management Office (PMO)
              </h1>
            </Slide>
            <Slide>
              <h2 className="text-sec font-semibold text-center text-sm md:text-base mb-12">
                Whether your project is small or large, gain assistance with all aspects of programme and project management
              </h2>
            </Slide>
            <Slide>
              <img src="/pmo.png" alt="Project Management Office" className="w-full max-w-3xl mx-auto mb-8 rounded-2xl" />
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
                    Today's Construction Challenges
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
                    Today's construction projects face many challenges and require management that is both effective and efficient. As specialists in all aspects of construction planning for both small and large-scale projects, Metisplan has spent many years developing the knowledge and expertise to help your company with its project planning and management.
                  </p>
                  <p>
                    Our Project Management Office (PMO) services provide a centralized approach to managing projects, ensuring consistent methodologies, governance frameworks, and oversight needed for successful project delivery.
                  </p>
                </div>
              </Slide>
            </div>

            <div className="w-full md:w-1/2">
              <Slide>
                <div className="space-y-4 w-full">
                  <h3 className="font-semibold text-sec text-xl md:text-2xl">
                    Reducing Risk for Your Business
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
                    By working with a resource-driven programme, we are confident that your project will be properly budgeted in accordance with your needs. Our services will ensure that any conflicts are resolved efficiently, all activities are well coordinated, and that your project will be well-scheduled and concluded on time.
                  </p>
                  <p>
                    We can be commissioned to work on specific aspects of your project or to take on a wider planning and monitoring role, adapting our approach to meet your specific requirements and objectives.
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
                  Our PMO Services
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
                  <h4 className="text-white font-bold text-lg">PMO Setup & Implementation</h4>
                  <p className="text-white text-sm md:text-base">
                    Establishing governance structures, processes, and tools to support effective project management across your organization.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Methodology Development</h4>
                  <p className="text-white text-sm md:text-base">
                    Creating standardized project management methodologies tailored to your organization's specific needs and industry requirements.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Portfolio Management</h4>
                  <p className="text-white text-sm md:text-base">
                    Prioritizing and managing multiple projects to ensure alignment with strategic objectives and optimal resource allocation.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Resource Management</h4>
                  <p className="text-white text-sm md:text-base">
                    Planning and allocating resources effectively across projects to maximize productivity and minimize conflicts.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Performance Monitoring</h4>
                  <p className="text-white text-sm md:text-base">
                    Tracking project progress, identifying variances, and implementing corrective actions to keep projects on track.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Quality Assurance</h4>
                  <p className="text-white text-sm md:text-base">
                    Ensuring projects meet quality standards through regular reviews, audits, and continuous improvement processes.
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
                  Benefits of Our PMO Services
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
                  Our PMO services deliver numerous benefits to your organization, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white">
                  <li>Improved project success rates through standardized methodologies and best practices</li>
                  <li>Enhanced visibility and control over project portfolios</li>
                  <li>Reduced project risks through early identification and mitigation strategies</li>
                  <li>More efficient resource utilization across multiple projects</li>
                  <li>Better alignment between projects and organizational strategies</li>
                  <li>Consistent project delivery and quality outcomes</li>
                  <li>Improved stakeholder communication and engagement</li>
                  <li>Knowledge capture and transfer for continuous improvement</li>
                </ul>
              </div>
            </Slide>
          </div>

          {/* CTA Section */}
          <div className="w-full py-8 flex flex-col items-center">
            <Slide>
              <div className="text-center max-w-2xl mx-auto space-y-6">
                <h3 className="text-sec font-bold text-xl md:text-2xl">
                  Ready to Transform Your Project Management?
                </h3>
                <p className="text-white text-sm md:text-base">
                  Contact us today to discuss how our PMO services can help your organization deliver projects more effectively and efficiently.
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

export default PMO

