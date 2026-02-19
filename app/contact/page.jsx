import Nav from "../../components/nav";
import Footer from "../../components/footer";

function Contact() {
  return (
    <>
      <Nav />

      <div className="flex flex-col flex-1 justify-center items-center space-y-6 mt-24 mb-[20px] md:mb-[40px] px-4 md:px-16">
        <div className=" space-y-14 relative w-full">
          <div className=" w-full mx-0 md:mx-6 px-6 md:px-12">
            <h1 className=" opacity-60 font-poppins px-2 xl:px-16 text-white font-bold text-left text-xl md:text-3xl">
              Contact
            </h1>
          </div>

          <img
            src={"/glowing light.png"}
            className="absolute -top-12 md:-top-44 opacity-30 z-0"
            alt="light"
          />
          <div className=" flex flex-col justify-between md:flex-row p-0 mx-2 rounded-[20px] space-y-4">
            <div className=" flex justify-center items-start px-4 w-full md:w-1/2">
              <h1 className="text-center md:text-left font-extrabold text-[30px] md:text-[48px] text-white ">
                Get in touch
                <br />
                <span className="text-sec italic">with us</span>
              </h1>
            </div>

            <div className="z-10 w-full lg:w-3/5 flex justify-center items-center lg:mx-12 ">
              <div className=" mx-4 w-full  px-2 xl:px-20">
                <div className="md:space-y-6 lg:space-y-10 text-left ">
                  <div className="space-y-3">
                    <input
                      className="w-full bg-transparent border h-12 py-4 px-6 rounded-[8px] text-white"
                      placeholder="Name"
                    />
                    <input
                      className="w-full bg-transparent border h-12 py-4 px-6 rounded-[8px] text-white"
                      placeholder="Email"
                    />
                    <textarea
                      className="w-full bg-transparent border border-white py-4 px-6 rounded-[8px] text-white focus:border-white focus:border-2"
                      placeholder="Message"
                      rows={4}
                    />
                  </div>

                  <button className="bg-sec hover:bg-transparent hover:border-2 hover:border-sec hover:text-white my-6 rounded-[40px] flex w-full justify-center items-center text-center px-12 py-4 text-sm font-bold md:font-bold transition-all duration-150 transform hover:scale-105">
                    Submit!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col flex-1 justify-center items-center space-y-6 mt-6 mb-[10px] md:mb-[20px] px-4 md:px-16">
        <div className="w-full max-w-7xl">
          {/* Contact Information Section */}
          <div className="relative group">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-sec/5 rounded-full blur-3xl -z-10"></div>

            <div className="relative bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm rounded-[32px] p-6 md:p-10 border border-white/5">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                {/* Contact Details */}
                <div className="lg:w-1/2 w-full space-y-8">
                  <div className="space-y-2">
                    <span className="text-sec text-sm font-bold uppercase tracking-wider">Contact</span>
                    <h2 className="font-bold text-3xl md:text-4xl text-white leading-tight">
                      Get In Touch
                    </h2>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sec/20 to-sec/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-sec" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Phone</p>
                      <a href="tel:01256232342" className="text-white text-lg font-semibold hover:text-sec transition-colors">
                        01256232342
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sec/20 to-sec/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-sec" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-white/60 text-sm">General Inquiries</p>
                        <a href="mailto:info@hworldinc.com" className="text-white text-lg font-semibold hover:text-sec transition-colors">
                          info@hworldinc.com
                        </a>
                      </div>

                      <div>
                        <p className="text-white/60 text-xs">Construction Inquiries</p>
                        <a href="mailto:info@hworldinc.com" className="text-white text-md font-semibold hover:text-sec transition-colors">
                          construction@hworldinc.com
                        </a>
                      
                        <p className="text-white/60 text-xs">Marine Inquiries</p>
                        <a href="mailto:info@hworldinc.com" className="text-white text-lg font-semibold hover:text-sec transition-colors">
                          marine@hworldinc.com
                        </a>
                      </div>

                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sec/20 to-sec/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-sec" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">Head Office</p>
                      <p className="text-white text-base leading-relaxed">
                        United Kingdom | Basingstoke |<br />
                        Hampshire | RG22 5FE | United Kingdom
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="lg:w-1/2 w-full">
                  <div className="relative h-[400px] rounded-[24px] overflow-hidden shadow-2xl">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.8564773748437!2d-1.089!3d51.266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48742078a5f8f5f5%3A0x5f8f5f5f5f5f5f5!2sBasingstoke%2C%20UK!5e0!3m2!1sen!2s!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Department-Specific Contact Section */}
      {/* <div className="w-full flex flex-col flex-1 justify-center items-center space-y-6 mb-[10px] md:mb-[20px] px-4 md:px-16">
        <div className="w-full max-w-7xl">
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <span className="text-sec text-sm font-bold uppercase tracking-wider">Departments</span>
              <h2 className="font-bold text-2xl md:text-3xl text-white">
                Contact Our Teams
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Construction Department */}
              {/* <div className="relative group">
                <div className="relative bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm rounded-[24px] p-6 md:p-8 border border-white/5 hover:border-sec/20 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-sec/30 to-sec/10 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-sec" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="text-white text-xl font-bold">Construction</h3>
                    </div>
                    <p className="text-white/60 text-sm">
                      For construction projects, building inquiries, and infrastructure services
                    </p>
                    <a href="mailto:construction@hworldinc.com" className="flex items-center gap-2 text-sec font-semibold hover:text-orange-400 transition-colors group/link">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>construction@hworldinc.com</span>
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div> */}

              {/* Marine Department */}
              {/* <div className="relative group">
                <div className="relative bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm rounded-[24px] p-6 md:p-8 border border-white/5 hover:border-sec/20 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-sec/30 to-sec/10 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-sec" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </div>
                      <h3 className="text-white text-xl font-bold">Marine</h3>
                    </div>
                    <p className="text-white/60 text-sm">
                      For marine engineering, offshore services, and maritime operations
                    </p>
                    <a href="mailto:marine@hworldinc.com" className="flex items-center gap-2 text-sec font-semibold hover:text-orange-400 transition-colors group/link">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>marine@hworldinc.com</span>
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  */}

      <div className=" w-full flex flex-col flex-1 justify-start items-start space-y-6 mt-8 mb-[20px] md:mb-[40px] px-8 xl:px-56">
        <h2 className="text-3xl font-bold text-white">Our Other <span className="text-white">Offices</span></h2>

        <div className="flex space-x-4 justify-start items-start text-white font-semibold">
          <img src="/location.png" alt="" />
          <h4>
            <span className="text-sec">Scotland </span><br /> Aberdeen |   Aberdeenshire  |  AB11 6LZ  | United Kingdom.
          </h4>
        </div>
        <div className="flex space-x-4 justify-start items-start text-white font-semibold">
          <img src="/location.png" alt="" />
          <h4>
            <span className="text-sec">Latvia </span><br /> Basuskas Novads  |  Islices Pagasts  |  Kalnares  |  LV-3914 Bauska
          </h4>
        </div>
        <div className="flex space-x-4 justify-start items-start text-white font-semibold">
          <img src="/location.png" alt="" />
          <h4>
            <span className="text-sec">United State</span> <br />   Richmond  | 77407  | Texas  | United States.
          </h4>
        </div>
        <div className="flex space-x-4 justify-start items-start text-white font-semibold">
          <img src="/location.png" alt="" />
          <h4>
            <span className="text-sec">Nigeria</span> <br /> Ikate Lekki  | Lagos  | Nigeria
          </h4>
        </div>
      </div>
      <hr
        className="border-0 my-6 mx-4 md:mx-20"
        style={{
          color: "",
          backgroundColor: "#414141",
          height: 1,
        }}
      />

      <Footer />
    </>
  );
}

export default Contact;
