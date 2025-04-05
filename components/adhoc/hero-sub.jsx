import React from 'react'

function HeroSub() {
  return (
    <>
        <div className='absolute -bottom-[40px] md:-bottom-[50px] w-full px-6 md:px-12 lg:px-24 xl:px-36 '>
            <div className='w-full h-[80px] md:h-[100px] bg-notdark/85 backdrop-blur-sm rounded-3xl'>
                <div className='w-full h-full flex flex-row justify-between items-center px-4 md:px-24 lg:px-32'>
                    <div className='flex justify-center flex-col items-center  px-2 text-center space-y-2'>
                        <p className='text-sec font-semibold md:font-bold text-sm md:text-lg'>Rapid Response</p>
                    </div>
                    <div className='h-1/2 w-[1px] bg-ftborder'></div>
                    <div className='flex justify-center flex-col items-center  px-2 text-center space-y-2'>
                        <p className='text-sec font-semibold md:font-bold text-sm md:text-lg'>Multi-Sector</p>
                    </div>
                    <div className='h-1/2 w-[1px] bg-ftborder'></div>
                    <div className='flex justify-center flex-col items-center  px-2 text-center space-y-2'>
                        <p className='text-sec font-semibold md:font-bold text-sm md:text-lg'>Task-Focused</p> 
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeroSub
