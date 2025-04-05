import React from 'react'

function HeroSub() {
  return (
    <>
        <div className='absolute -bottom-[40px] md:-bottom-[50px] w-full px-6 md:px-12 lg:px-24 xl:px-36 '>
            <div className='w-full h-[80px] md:h-[100px] bg-notdark/85 backdrop-blur-sm rounded-3xl'>
                <div className='w-full h-full flex flex-row justify-between items-center px-4 md:px-24 lg:px-32'>
                    <div className='flex justify-center flex-col items-center  px-2 text-center space-y-2'>
                        <p className='text-sec font-semibold md:font-bold text-sm md:text-lg'>Trusted Networks</p>
                    </div>
                    <div className='h-1/2 w-[1px] bg-ftborder'></div>
                    <div className='flex justify-center flex-col items-center  px-2 text-center space-y-2'>
                        <p className='text-sec font-semibold md:font-bold text-sm md:text-lg'>Negotiation Edge</p>
                    </div>
                    <div className='h-1/2 w-[1px] bg-ftborder'></div>
                    <div className='flex justify-center flex-col items-center  px-2 text-center space-y-2'>
                        <p className='text-sec font-semibold md:font-bold text-sm md:text-lg'>Global Reach</p> 
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeroSub
