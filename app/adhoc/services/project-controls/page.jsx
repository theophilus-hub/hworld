"use client"

import Footer from "@/components/footer"
import Nav from "@/components/nav"
import React from 'react';
import Link from "next/link"
import Slide from "@/components/slide"

function ProjectControls() {
  return (
    <>
      <Nav />
      <div className="font-poppins relative flex flex-col justify-center items-center pt-32 pb-16 w-full">
        <div className="relative space-y-8 flex flex-col justify-center items-start w-full px-4 sm:px-6 md:px-[10%] max-w-full">
          {/* Hero Section */}
          <div className="w-full flex flex-col items-center justify-center mb-12">
            <Slide>
              <h1 className="font-poppins text-white font-extrabold text-center text-3xl md:text-5xl mb-8">
                Project Controls
              </h1>
            </Slide>
            <Slide>
              <h2 className="text-sec font-semibold text-center text-lg md:text-2xl mb-12">
                Our project controls service ensures that your project runs efficiently and successfully
              </h2>
            </Slide>
            <Slide>
              <img src="/project-controls.png" alt="Project Controls" className="w-full max-w-3xl mx-auto mb-8" />
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
                    Managing Complex Projects
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
                    Construction and engineering projects are always complex in nature. They require the close coordination of personnel and a range of project controls to ensure that projects are carried out efficiently and successfully.
                  </p>
                  <p>
                    As specialists in all aspects of construction planning for both small and large-scale projects, Metisplan has spent many years developing the knowledge and expertise to help your company implement effective project controls.
                  </p>
                </div>
              </Slide>
            </div>

            <div className="w-full md:w-1/2">
              <Slide>
                <div className="space-y-4 w-full">
                  <h3 className="font-semibold text-sec text-xl md:text-2xl">
                    Integrated Control Systems
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
                    Our approach to project controls integrates multiple disciplines including cost management, schedule management, risk management, and document control to provide a comprehensive view of project performance.
                  </p>
                  <p>
                    We take a data-driven approach to project controls, utilizing advanced analytics and reporting tools to transform project data into actionable insights. This enables early identification of trends and issues, allowing for proactive management and timely corrective actions.
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
                  Our Project Controls Services
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
                  <h4 className="text-white font-bold text-lg">Cost Control</h4>
                  <p className="text-white text-sm md:text-base">
                    Monitoring and managing project costs through detailed budgeting, cost tracking, forecasting, and variance analysis to ensure financial objectives are met.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Schedule Management</h4>
                  <p className="text-white text-sm md:text-base">
                    Preparation and maintenance of construction schedules, including baseline development, progress tracking, and recovery planning to keep projects on time.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Risk Management</h4>
                  <p className="text-white text-sm md:text-base">
                    Identifying potential risks, assessing their impact, and providing recommendations to manage and mitigate risks throughout the project lifecycle.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Document Control</h4>
                  <p className="text-white text-sm md:text-base">
                    Implementing systems and procedures to ensure all project documentation is properly managed, stored, and accessible to relevant stakeholders.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Performance Monitoring</h4>
                  <p className="text-white text-sm md:text-base">
                    Monitoring projects on behalf of our clients, providing regular status reports, and identifying potential issues before they impact project objectives.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-lg">Earned Value Management</h4>
                  <p className="text-white text-sm md:text-base">
                    Implementing earned value techniques to measure project performance against the baseline plan, integrating schedule and cost metrics for comprehensive analysis.
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
                  Benefits of Our Project Controls Services
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
                  Our project controls services deliver numerous benefits to your organization, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white">
                  <li>Enhanced visibility into project performance through integrated reporting and analytics</li>
                  <li>Early identification of potential issues allowing for proactive management</li>
                  <li>Improved decision-making based on accurate and timely project information</li>
                  <li>Better resource allocation and utilization across project activities</li>
                  <li>Increased accountability through clear performance metrics and targets</li>
                  <li>Reduced project risks through systematic identification and mitigation strategies</li>
                  <li>Improved stakeholder communication and confidence through transparent reporting</li>
                  <li>Consistent project delivery methodologies leading to more predictable outcomes</li>
                </ul>
              </div>
            </Slide>
          </div>

          {/* CTA Section */}
          <div className="w-full py-8 flex flex-col items-center">
            <Slide>
              <div className="text-center max-w-2xl mx-auto space-y-6">
                <h3 className="text-sec font-bold text-xl md:text-2xl">
                  Ready to Enhance Your Project Controls?
                </h3>
                <p className="text-white text-sm md:text-base">
                  Contact us today to discuss how our project controls services can help your organization deliver projects more efficiently and successfully.
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

export default ProjectControls

