import { Textarea } from "flowbite-react";

function Contact() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center space-y-6 mb-[75px] md:mb-[150px] px-4 md:px-16">
    
    <div className="space-y-14">
      <div className=" flex flex-col justify-between md:flex-row p-0 mx-2 rounded-[20px] space-y-4">
       
        <div className=" flex justify-center items-start px-4">
          
          <h1 className='text-center md:text-left font-extrabold text-[30px] md:text-[48px] text-white'>Ready for your next project? Get in touch<br /><span className='text-sec italic'>with us</span></h1>
        </div>


        <div className=" w-full lg:w-3/5 flex justify-center items-center lg:mx-12 ">
          <div className=" mx-4 w-full  px-2 xl:px-20">
            <div className="md:space-y-6 lg:space-y-10 text-left ">
                <div className='space-y-3'>
                                  <input className='w-full bg-transparent border h-12 py-4 px-6 rounded-[8px] text-white' placeholder='Name'/>
                                  <input className='w-full bg-transparent border h-12 py-4 px-6 rounded-[8px] text-white' placeholder='Email'/>
                                  <textarea className='w-full bg-transparent border border-white py-4 px-6 rounded-[8px] text-white focus:border-white focus:border-2' placeholder='Message' rows={4}/>
                </div>

              <button className="bg-sec my-6 rounded-[40px] flex w-full justify-center items-center text-center px-12 py-4 text-sm font-bold md:font-bold">
                Submit!
              </button>
              
            </div>
          </div>
        </div>
      </div>

      <hr className="border-0"
style={{
color: "",
backgroundColor: "#414141",
height: 1
}}
/>
    </div>
   
  </div>
  )
}

export default Contact
