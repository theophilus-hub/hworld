import React from 'react'
import Link from 'next/link'

function FeaturesCard({header, img, sub}) {
  return (
    <div className='flex flex-col justify-center items-center text-center px-2 py-4 space-y-4 border border-notdark rounded-xl'>
      <img src={img} alt="" className='rounded-xl'/>
      <div className='w-full flex flex-col items-center justify-center'>
        <h3 className='text-white text-md md:text-lg font-bold'>{header}</h3>
         <Link href={`/deals/list${sub}`} className="z-10">
                        <button className="z-10 bg-sec rounded-[40px] flex justify-center items-center text-center px-6 py-2 text-sm font-bold md:font-extrabold">
                          Details
                        </button>
                      </Link>
      </div>
        
    </div>
  )
}

export default FeaturesCard
