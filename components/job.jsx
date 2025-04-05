import Link from "next/link";
import Slide from "@/components/slide";

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

      <div className="space-y-14">
      <Slide>
          <div className="overflow-hidden flex flex-col justify-between md:flex-row bg-notdark p-0 mx-2 rounded-[20px] space-y-4">
            <div className="">
              <img src="/deal.png" className="rounded-r-xl" alt="" />
            </div>
            <div className=" md:w-2/5 flex justify-center items-center lg:mx-12 ">
              <div className=" mx-4  px-2 xl:px-20 ">
                <div className="md:space-y-6 lg:space-y-10 text-left ">
                  <h1 className="font-bold text-lg lg:text-xl whitespace-nowrap text-white">
                    Adhoc Services
                  </h1>
                  <p className="text-xs lg:text-sm font-normal text-white">
                    At Hworld, we specialize in identifying high-value
                    investment opportunities across construction and marine
                    sectors. With strong industry connections and market
                    insights, we source deals that align with your investment
                    goals, ensuring long-term value and growth.
                  </p>
                  <Link href={"deals"}>
                    <button className="bg-sec my-6 rounded-[40px] flex w-full justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide>
          <div className="overflow-hidden flex flex-col justify-between md:flex-row bg-notdark p-0 mx-2 rounded-[20px] space-y-4">
            <div className="">
              <img src="/job1.png" className="rounded-r-xl" alt="" />
            </div>
            <div className=" md:w-2/5 flex justify-center items-center lg:mx-12 ">
              <div className=" mx-4  px-2 xl:px-20 ">
                <div className="md:space-y-6 lg:space-y-10 text-left ">
                  <h1 className="font-bold text-lg lg:text-xl whitespace-nowrap text-white">
                    Construction Services
                  </h1>
                  <p className="text-xs lg:text-sm font-normal text-white">
                    Our construction services at Hworld focus on building
                    innovative, sustainable structures. We handle everything
                    from residential and commercial projects to large-scale
                    infrastructure, delivering quality, efficiency, and safety
                    in every build.
                  </p>
                  <Link href={"construction"}>
                    <button className="bg-sec my-6 rounded-[40px] flex w-full justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slide>
<Slide>
          <div className="overflow-hidden flex flex-col justify-between md:flex-row bg-notdark p-0 mx-2 rounded-[20px] space-y-4">
            <div className="">
              <img src="/job3.png" className="rounded-r-xl" alt="" />
            </div>
            <div className=" md:w-2/5 flex justify-center items-center lg:mx-12 ">
              <div className=" mx-4  px-2 xl:px-20 ">
                <div className="md:space-y-6 lg:space-y-10 text-left ">
                  <h1 className="font-bold text-lg lg:text-xl whitespace-nowrap text-white">
                    Marine Services
                  </h1>
                  <p className="text-xs lg:text-sm font-normal text-white">
                    Hworld delivers expert marine engineering solutions, from
                    designing and building maritime infrastructure to
                    maintenance and operational support. We ensure reliability
                    and innovation in every marine project we undertake.
                  </p>
                  <Link href={"marine"}>
                    <button className="bg-sec my-6 rounded-[40px] flex w-full justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide>
          <div className="overflow-hidden flex flex-col justify-between md:flex-row bg-notdark p-0 mx-2 rounded-[20px] space-y-4">
            <div className="">
              <img src="/deal.png" className="rounded-r-xl" alt="" />
            </div>
            <div className=" md:w-2/5 flex justify-center items-center lg:mx-12 ">
              <div className=" mx-4  px-2 xl:px-20 ">
                <div className="md:space-y-6 lg:space-y-10 text-left ">
                  <h1 className="font-bold text-lg lg:text-xl whitespace-nowrap text-white">
                    Deal Sourcing
                  </h1>
                  <p className="text-xs lg:text-sm font-normal text-white">
                    At Hworld, we specialize in identifying high-value
                    investment opportunities across construction and marine
                    sectors. With strong industry connections and market
                    insights, we source deals that align with your investment
                    goals, ensuring long-term value and growth.
                  </p>
                  <Link href={"deals"}>
                    <button className="bg-sec my-6 rounded-[40px] flex w-full justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold">
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
