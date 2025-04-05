import React from 'react'

function HeroSub() {
  return (
    <>
        <div className='absolute -bottom-[50px] md:-bottom-[75px] w-full px-6 md:px-12 lg:px-24 xl:px-36 '>
            <div className='w-full h-[100px] md:h-[150px] bg-notdark/85 backdrop-blur-sm rounded-3xl'>
                <div className='w-full h-full flex flex-row justify-between items-center px-4 md:px-24 lg:px-32'>
                    <div className='flex justify-center flex-col items-center  px-2 text-center space-y-2'>
                        <p className='text-sec font-semibold md:font-bold text-sm md:text-lg'>50+</p>
                        <p className='text-sec font-semibold md:font-bold text-sm md:text-lg'>Offshore Ops</p>
                    </div>
                    <div className='h-1/2 w-[1px] bg-ftborder'></div>
                    <div className='flex justify-center flex-col items-center  px-2 text-center space-y-2'>
                        <p className='text-sec font-semibold md:font-bold text-sm md:text-lg'>24/7</p>
                        <p className='text-sec font-semibold md:font-bold text-sm md:text-lg'>Support</p>
                    </div>
                    <div className='h-1/2 w-[1px] bg-ftborder'></div>
                    <div className='flex justify-center flex-col items-center  px-2 text-center space-y-2'>
                        <p className='text-sec font-semibold md:font-bold text-sm md:text-lg'>10+</p>
                        <p className='text-sec font-semibold md:font-bold text-sm md:text-lg'>Fleet Access</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeroSub
