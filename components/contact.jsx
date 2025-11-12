import { Textarea } from "flowbite-react";
import Slide from "@/components/slide";
import { motion } from "motion/react";
import { LampContainer } from "./ui/lamp";

function Contact() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center space-y-6 mb-[30px] md:mb-[60px] px-4 md:px-16">
      <div className="space-y-14">
        <div className=" flex flex-col justify-between md:flex-row p-0 mx-2 rounded-[20px] space-y-4">
          <Slide>
            <div className=" flex justify-center items-start px-4">
              <h1 className="text-center md:text-left font-extrabold text-[30px] md:text-[48px] text-white">
                Ready for your next project? Get in touch
                <br />
                <span className="text-sec italic">with us</span>
              </h1>
            </div>
          </Slide>

          <div className=" w-full lg:w-3/5 flex justify-center items-center lg:mx-12 ">
            <div className=" mx-4 w-full  px-2 xl:px-20">
              <div className="md:space-y-6 lg:space-y-10 text-left ">
                <div className="space-y-3">
                  <Slide>
                    <input
                      className="w-full bg-transparent border h-12 py-4 px-6 rounded-[8px] text-white"
                      placeholder="Name"
                    />
                  </Slide>
                  <Slide>
                    <input
                      className="w-full bg-transparent border h-12 py-4 px-6 rounded-[8px] text-white"
                      placeholder="Email"
                    />
                  </Slide>
                  <Slide>
                    <textarea
                      className="w-full bg-transparent border border-white py-4 px-6 rounded-[8px] text-white focus:border-white focus:border-2"
                      placeholder="Message"
                      rows={4}
                    />
                  </Slide>
                </div>

                <button className="bg-sec my-6 rounded-[40px] flex w-full justify-center items-center text-center px-12 py-4 text-sm font-bold md:font-bold">
                  Submit!
                </button>
              </div>
            </div>
          </div>
        </div>
{/* <LampContainer className={''}>
      <motion.h1
        initial={{ opacity: 0.5, y: -30 }}
        whileInView={{ opacity: 1, y: -100 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Hworld
      </motion.h1>
    </LampContainer> */}
        <hr
          className="border-0"
          style={{
            color: "",
            backgroundColor: "#414141",
            height: 1,
          }}
        />
      </div>
    </div>
  );
}

export default Contact;
