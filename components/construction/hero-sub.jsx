import React from 'react'

function HeroSub() {
  return (
    <>
        <div className='absolute -bottom-[75px] md:-bottom-[100px] w-full px-6 md:px-12 lg:px-24 xl:px-36 '>
            <div className='w-full h-[150px] md:h-[200px] bg-notdark/85 backdrop-blur-sm rounded-3xl'>
                <div className='w-full h-full flex flex-row justify-between items-center px-4 lg:px-24'>
                    <div className='flex justify-center flex-col items-center  px-2 text-center space-y-2'>
                        <p className='text-sec font-semibold md:font-bold text-sm md:text-lg'>200+</p>
                        <p className='text-sec font-semibold md:font-bold text-sm md:text-lg'>Completed Projects</p>
                    </div>
                    <div className='h-1/2 w-[1px] bg-ftborder'></div>
                    <div className='flex justify-center flex-col items-center  px-2 text-center space-y-2'>
                        <p className='text-sec font-semibold md:font-bold text-sm md:text-lg'>30+</p>
                        <p className='text-sec font-semibold md:font-bold text-sm md:text-lg'>Nationwide Offices</p>
                    </div>
                    <div className='h-1/2 w-[1px] bg-ftborder'></div>
                    <div className='flex justify-center flex-col items-center  px-2 text-center space-y-2'>
                        <p className='text-sec font-semibold md:font-bold text-sm md:text-lg'>100+</p>
                        <p className='text-sec font-semibold md:font-bold text-sm md:text-lg'>Engineering Proffesionals</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeroSub
