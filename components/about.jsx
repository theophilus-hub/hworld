import Link from "next/link";

function About() {
  return (
    <div className="w-full mb-[150px] md:mb-[250px]">
      <div className="flex flex-col justify-center items-center space-y-4 mx-6 md:mx-[25%]">
        <h1 className="text-white text-4xl font-bold">About Us</h1>
        <h3 className="text-center text-white text-sm md:text-base font-normal">
          At Hworld, we drive innovation across multiple sectors, including
          construction, marine engineering, and hospitality. Committed to
          sustainability and excellence, we deliver solutions that create
          lasting value for our clients and help shape a better future.
        </h3>
      </div>
      <div className="flex flex-col flex-1 mt-4">
        <div className="flex items-center justify-center px-4 my-2 md:px-40 w-full">
          <img src="/about.png" />
        </div>
      </div>
      <div className="relative mt-20 flex flex-col justify-center items-center space-y-8">
        <Link href={"about"}>
          <button className="bg-sec rounded-[40px] flex justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default About;
