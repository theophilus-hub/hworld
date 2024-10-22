import Nav from "../../components/nav";
import Footer from "../../components/footer";

function Contact() {
  return (
    <>
      <Nav />

      <div className="flex flex-col flex-1 justify-center items-center space-y-6 mt-20  mb-[75px] md:mb-[150px] px-4 md:px-16">
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

                  <button className="bg-sec my-6 rounded-[40px] flex w-full justify-center items-center text-center px-12 py-4 text-sm font-bold md:font-bold">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full flex flex-col flex-1 justify-center items-center space-y-6 mt-32  mb-[75px] md:mb-[150px] px-8  xl:px-56">
        <div className="flex w-full flex-col-reverse md:flex-row justify-between items-center bg-notdark rounded-3xl ">
          <div className="text-white mx-0 md:mx-12 space-y-8 w-full md:w-1/2 flex flex-col px-6 py-8 md:px-8 font-semibold text-sm md:text-xl">
            <div className="flex space-x-4 justify-start items-center">
              <img src="/phone.png" alt="" />
              <h4>+44 (0)12 5627 9041</h4>
            </div>
            <div className="flex space-x-4 justify-start items-center">
              <img src="/mail.png" alt="" />
              <div className="space-y-1">
                <h4>info@hworldinc.com</h4>
                <h4>construction@hworldinc.com</h4>
                <h4>marine@hworldinc.com</h4>
              </div>
            </div>
            <div className="flex space-x-4 justify-start items-start">
              <img src="/location.png" alt="" />
              <h4>
              Head Office  <br /> United Kingdom  |  Basingstoke |  Hampshire  |  RG22 5FE  | United Kingdom
              </h4>
            </div>
            
          </div>
          <div>
            <img src="/map.png" className="rounded-2xl h-full" alt="" />
          </div>
        </div>
      </div>

<div className=" w-full flex flex-col flex-1 justify-start items-start space-y-6 mt-32  mb-[75px] md:mb-[150px] px-8  xl:px-56">
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
        className="border-0 my-16 mx-4 md:mx-20"
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
