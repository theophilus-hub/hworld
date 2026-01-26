import React from 'react'
import Link from 'next/link'

function FeaturesCard({
  header, 
  img, 
  sub, 
  category = "Infrastructure", 
  description = "Premium opportunity in the energy sector"
}) {
  return (
    <div className='flex flex-col bg-ft border-2 border-ftborder rounded-xl overflow-hidden hover:border-sec/50 transition-all duration-200 h-full max-w-sm mx-auto'>
      {/* Fixed height image container with top positioning */}
      <div className='relative w-full h-56 overflow-hidden bg-darker'>
        <img 
          src={img} 
          alt={header} 
          className='w-full h-full object-cover object-top'
        />
      </div>
      
      {/* Content section with cleaner layout */}
      <div className='flex flex-col flex-1 p-4 space-y-4'>
        <div className='space-y-3'>
          <span className='text-sec text-xs font-semibold uppercase tracking-wide'>{category}</span>
          <h3 className='text-white text-lg font-bold leading-tight'>{header}</h3>
          <p className='text-white/70 text-sm line-clamp-3'>{description}</p>
        </div>
        
        <div className='pt-2 mt-auto'>
          <Link href={`/deals/list${sub}`} className="block w-full">
            <button className="bg-sec hover:bg-transparent hover:border-2 hover:border-sec hover:text-white rounded-[40px] w-full flex justify-center items-center text-center px-4 py-3 text-sm font-bold transition-all duration-150 transform hover:scale-105">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturesCard
