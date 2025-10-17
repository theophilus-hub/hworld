import Link from "next/link";
import Slide from "@/components/slide";
import Image from "next/image";

function Job() {
  return (
    <div
      id="solution"
      className="flex flex-col flex-1 justify-center items-center space-y-6 mb-[100px] md:mb-[130px] px-4 md:px-16 lg:px-40"
    >
      <Slide>
        <div className="space-y-4 mx-2 md:mx-[25%]">
          <h1 className="text-center text-4xl text-white font-bold">
            What <span className="text-sec italic">we</span> do
          </h1>
          <p className="text-center text-white font-normal text-base">
            At Hworld, we provide innovative solutions in construction, marine
            engineering, and hospitality, delivering excellence and reliability
            across all our services.
          </p>
        </div>
      </Slide>

      <div className="space-y-14 w-full">
        <Slide>
          <div className="overflow-hidden flex flex-col justify-between md:flex-row bg-notdark p-0 mx-2 rounded-[20px] space-y-4 md:space-y-0">
            <div className="md:w-3/5 h-[200px] sm:h-[250px] md:h-[300px] relative overflow-hidden">
              <Image 
                src="/adhoc.jpg" 
                alt="Project Planning Services" 
                fill 
                className="object-cover rounded-t-xl md:rounded-tr-none md:rounded-l-xl" 
                priority
              />
            </div>
            <div className="md:w-2/5 flex justify-center items-center py-4 md:py-0">
              <div className="mx-4 px-2 xl:px-12 w-full">
                <div className="space-y-3 md:space-y-4 lg:space-y-6 text-left">
                  <h1 className="font-bold text-lg lg:text-xl text-white">
                    Adhoc Project Planning
                  </h1>
                  <p className="text-xs lg:text-sm font-normal text-white">
                    Expert planning services for construction and marine projects. We deliver tailored solutions with precision scheduling and resource optimization.
                  </p>
                  <Link href="/adhoc" className="block">
                    <button className="bg-sec my-4 md:my-6 rounded-[40px] flex w-full justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        
        <Slide>
          <div className="overflow-hidden flex flex-col justify-between md:flex-row bg-notdark p-0 mx-2 rounded-[20px] space-y-4 md:space-y-0">
            <div className="md:w-3/5 h-[200px] sm:h-[250px] md:h-[300px] relative overflow-hidden">
              <Image 
                src="/job1.png" 
                alt="Construction Services" 
                fill 
                className="object-cover rounded-t-xl md:rounded-tr-none md:rounded-l-xl" 
                priority
              />
            </div>
            <div className="md:w-2/5 flex justify-center items-center py-4 md:py-0">
              <div className="mx-4 px-2 xl:px-12 w-full">
                <div className="space-y-3 md:space-y-4 lg:space-y-6 text-left">
                  <h1 className="font-bold text-lg lg:text-xl text-white">
                    Construction
                  </h1>
                  <p className="text-xs lg:text-sm font-normal text-white">
                    Building innovative, sustainable structures from residential to large-scale infrastructure. Quality, efficiency, and safety in every project.
                  </p>
                  <Link href="/construction" className="block">
                    <button className="bg-sec my-4 md:my-6 rounded-[40px] flex w-full justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        
        <Slide>
          <div className="overflow-hidden flex flex-col justify-between md:flex-row bg-notdark p-0 mx-2 rounded-[20px] space-y-4 md:space-y-0">
            <div className="md:w-3/5 h-[200px] sm:h-[250px] md:h-[300px] relative overflow-hidden">
              <Image 
                src="/job3.png" 
                alt="Marine Services" 
                fill 
                className="object-cover rounded-t-xl md:rounded-tr-none md:rounded-l-xl" 
                priority
              />
            </div>
            <div className="md:w-2/5 flex justify-center items-center py-4 md:py-0">
              <div className="mx-4 px-2 xl:px-12 w-full">
                <div className="space-y-3 md:space-y-4 lg:space-y-6 text-left">
                  <h1 className="font-bold text-lg lg:text-xl text-white">
                    Marine
                  </h1>
                  <p className="text-xs lg:text-sm font-normal text-white">
                    Expert marine engineering from infrastructure design to maintenance and operational support. Reliability and innovation in every project.
                  </p>
                  <Link href="/marine" className="block">
                    <button className="bg-sec my-4 md:my-6 rounded-[40px] flex w-full justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide>
          <div className="overflow-hidden flex flex-col justify-between md:flex-row bg-notdark p-0 mx-2 rounded-[20px] space-y-4 md:space-y-0">
            <div className="md:w-3/5 h-[200px] sm:h-[250px] md:h-[300px] relative overflow-hidden">
              <Image 
                src="/deal.png" 
                alt="Deal Sourcing" 
                fill 
                className="object-cover rounded-t-xl md:rounded-tr-none md:rounded-l-xl" 
                priority
              />
            </div>
            <div className="md:w-2/5 flex justify-center items-center py-4 md:py-0">
              <div className="mx-4 px-2 xl:px-12 w-full">
                <div className="space-y-3 md:space-y-4 lg:space-y-6 text-left">
                  <h1 className="font-bold text-lg lg:text-xl text-white">
                    Deal Sourcing
                  </h1>
                  <p className="text-xs lg:text-sm font-normal text-white">
                    Identifying high-value investment opportunities in construction and marine sectors. Strong connections and market insights for long-term growth.
                  </p>
                  <Link href="/deals" className="block">
                    <button className="bg-sec my-4 md:my-6 rounded-[40px] flex w-full justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slide>

      </div>
    </div>
  );
}

export default Job;
