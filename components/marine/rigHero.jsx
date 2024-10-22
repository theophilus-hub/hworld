import Link from "next/link";
import Nav from "./nav";

function RigHero() {
  return (
    <div className="bg-cover bg-center relative w-full">
      <div className="relative flex flex-col justify-center items-center pt-44 mb-[75px] md:mb-[150px] w-full">
        <div className=" space-y-24 flex flex-col justify-center items-center mx-4 md:mx-[10%]">
          <h1 className="font-poppins text-white font-extrabold text-center text-3xl md:text-5xl z-10">
            Explore Our Rig Fleet
          </h1>

          <img src="/rig.png" alt="" />

          <div className="z-10 px-4 md:px-16 flex flex-col justify-center items-center space-y-10">
            <h4 className=" text-left text-white text-sm md:text-base">
              Welcome to our dedicated rig fleet page, where you can discover
              our comprehensive range of available drilling rigs. Whether you're
              looking for land, water, or offshore drilling solutions, we have
              the right equipment to meet your needs. Our extensive fleet is
              designed to support a variety of projects, ensuring optimal
              performance and efficiency. Browse through our offerings to find
              the perfect rig for your operations, and stay tuned as we
              categorize our rigs for easy navigation and selection. Your
              project’s success starts here!
            </h4>
            <img
              src={"/glowing light.png"}
              className="absolute top-16 md:-top-20 z-0"
              alt="light"
            />
            

            <div className=" w-full py-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4 ">
                <div className="bg-ft rounded-3xl md:h-72 px-4 md:px-6 py-4 md:py-8 border-[3px] border-ftborder flex flex-col items-start justify-between space-y-4">
                  <div className="flex space-x-2 items-center">
                    <img src="/ft1.png" alt="" />
                    <h2 className="font-bold text-sec text-sm md:text-lg">
                      Land Drilling Rigs
                    </h2>
                  </div>
                  <div>
                    <p className="text-white text-xs md:text-base">
                      Discover our robust selection of land drilling rigs,
                      engineered for efficiency and versatility in a variety of
                      terrains.
                    </p>
                  </div>
                  <Link href={"/marine/rigs/land"} className="z-10">
                    <button className="z-10 bg-sec rounded-[40px] flex justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold">
                      Explore
                    </button>
                  </Link>
                </div>

                <div className="bg-ft rounded-3xl md:h-72 px-4 md:px-6 py-4 md:py-8 border-[3px] border-ftborder flex flex-col items-start justify-start space-y-4">
                  <div className="flex space-x-2 items-center">
                    <img src="/ft2.png" alt="" />
                    <h2 className="font-bold text-sec text-sm md:text-lg">
                      Water Drilling Rigs
                    </h2>
                  </div>
                  <div>
                    <p className="text-white text-xs md:text-base">
                      Explore our advanced water drilling rigs, designed for
                      optimal performance in aquatic environments and
                      challenging conditions.
                    </p>
                  </div>
                  <Link href={"/marine/rigs/water"} className="z-10">
                    <button className="z-10 bg-sec rounded-[40px] flex justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold">
                      Explore 
                    </button>
                  </Link>
                </div>

                <div className="bg-ft rounded-3xl md:h-72 px-4 md:px-6 py-4 md:py-8 border-[3px] border-ftborder flex flex-col items-start justify-start space-y-4">
                  <div className="flex space-x-2 items-center">
                    <img src="/ft3.png" alt="" />
                    <h2 className="font-bold text-sec text-sm md:text-lg">
                      Offshore Drilling Rigs
                    </h2>
                  </div>
                  <div>
                    <p className="text-white text-xs md:text-base">
                      Check out our state-of-the-art offshore drilling rigs,
                      built to withstand harsh marine conditions while
                      delivering reliable results.
                    </p>
                  </div>
                  <Link href={"/marine/rigs/offshore"} className="z-10">
                    <button className="z-10 bg-sec rounded-[40px] flex justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold">
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <hr className="border-0 mb-14"
style={{
color: "",
backgroundColor: "#414141",
height: 1
}}
/>
    </div>
  );
}

export default RigHero;
