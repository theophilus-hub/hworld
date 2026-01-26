"use client"

import Link from "next/link";

function Footer() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center space-y-6 mb-[20px] md:mb-[40px] px-4 md:px-16">
      <div className="space-y-6 md:space-y-14">
        <div className=" flex flex-col justify-between md:flex-row p-0 mx-2 rounded-[20px] space-y-4 ">
          <div className="space-y-8 flex flex-col justify-center items-start px-4">
            <div>
              <img src="/hworld.png" className="w-1/2" alt="" />
            </div>

            <div className="space-y-2">
              <h2 className="text-white font-medium">
                Privacy Policy | Terms of Service
              </h2>

              <div className="flex space-x-2">
                <img src="copyright.png" alt="" />

                <h4 className="text-[#888888] font-bold text-sm">
                  2024 All Rights Reserved
                </h4>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center ">
            <div className=" w-full  px-2 xl:px-20">
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2 font-semibold text-sm text-white flex flex-col">
                  <h1 className="text-notdark">H-World</h1>
                  <Link href={"/"} className="hover:text-sec transition-colors duration-300">Home</Link>
                  <Link href={"/about"} className="hover:text-sec transition-colors duration-300">About Us</Link>
                  <Link href={"/contact"} className="hover:text-sec transition-colors duration-300">Contact Us</Link>
                  
                </div>
                <div className="space-y-2 font-semibold text-sm text-white flex flex-col">
                  <h1 className="text-notdark">Services</h1>
                  <Link href={"/adhoc"} className="hover:text-sec transition-colors duration-300">
                    Adhoc project <br /> planning
                  </Link>
                  <Link href={"/construction"} className="hover:text-sec transition-colors duration-300">
                    Engineering
                    <br />& Construction
                  </Link>
                  <Link href={"/marine"} className="hover:text-sec transition-colors duration-300">Marine</Link>
                  <Link href={"/deals"} className="hover:text-sec transition-colors duration-300">Deal sourcing</Link>
                </div>
                <div className="space-y-2 font-semibold text-sm text-white flex flex-col">
                  <h1 className="text-notdark">Follow Us</h1>
                  <Link href={"/"} className="hover:text-sec transition-colors duration-300">Instagram</Link>
                  <Link href={"/"} className="hover:text-sec transition-colors duration-300">Facebook</Link>
                  <Link href={"/"} className="hover:text-sec transition-colors duration-300">LinkedIn</Link>
                  <Link href={"/"} className="hover:text-sec transition-colors duration-300">Twitter</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
