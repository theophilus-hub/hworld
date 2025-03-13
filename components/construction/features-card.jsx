import React from 'react'

function FeaturesCard({header, img, sub}) {
  return (
    <div className='flex flex-col justify-center items-center text-center px-2 py-4 space-y-6'>
      <img src={img} alt="" />
      <div className=''>
        <h3 className='text-sec text-md md:text-lg font-bold'>{header}</h3>
        <p className='text-white text-xs md:text-sm font-normal'>{sub}</p>
      </div>
        
    </div>
  )
}

export default FeaturesCard
