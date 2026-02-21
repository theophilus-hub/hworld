"use client";

import React, { useState } from 'react'
import dynamic from 'next/dynamic'

const PdfThumbnail = dynamic(() => import('./pdf-thumbnail'), { 
  ssr: false, 
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-darker">
      <div className="flex flex-col items-center space-y-2">
        <div className="w-6 h-6 border-2 border-sec border-t-transparent rounded-full animate-spin"></div>
        <span className="text-white/50 text-xs">Loading preview...</span>
      </div>
    </div>
  ) 
})
const PdfViewer = dynamic(() => import('./pdf-viewer'), { ssr: false })

function ListingCard({
  header, 
  pdfUrl,
  category = "Infrastructure", 
  description = "Premium opportunity in the energy sector"
}) {
  const [showPdf, setShowPdf] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div 
        className='group flex flex-col bg-ft border border-ftborder/30 rounded-2xl overflow-hidden hover:border-sec/40 hover:shadow-xl hover:shadow-sec/10 transition-all duration-300 h-full w-full'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* PDF Thumbnail as card image */}
        <div 
          className='relative w-full h-44 md:h-48 overflow-hidden cursor-pointer' 
          onClick={() => setShowPdf(true)}
        >
          {pdfUrl ? (
            <PdfThumbnail pdfUrl={pdfUrl} width={320} />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-darker">
              <span className="text-white/40 text-sm">No preview</span>
            </div>
          )}
          {/* Hover overlay */}
          <div className={`absolute inset-0 bg-sec/20 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-white/90 rounded-full p-3 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Content section */}
        <div className='flex flex-col flex-1 p-4 md:p-5 space-y-3'>
          <div className='space-y-2'>
            <span className='inline-block text-sec text-[10px] md:text-xs font-semibold uppercase tracking-wider bg-sec/10 px-2 py-1 rounded-full'>{category}</span>
            <h3 className='text-white text-sm md:text-base font-bold leading-snug line-clamp-2'>{header}</h3>
            <p className='text-white/60 text-xs md:text-sm line-clamp-2 leading-relaxed'>{description}</p>
          </div>
          
          <div className='pt-1 mt-auto'>
            <button 
              onClick={() => setShowPdf(true)}
              className="bg-sec hover:bg-sec/90 text-gray-900 rounded-xl w-full flex justify-center items-center text-center px-4 py-2.5 text-xs md:text-sm font-bold transition-all duration-200 hover:shadow-lg hover:shadow-sec/20"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* PDF Preview Modal */}
      <PdfViewer
        pdfUrl={pdfUrl}
        isOpen={showPdf}
        onClose={() => setShowPdf(false)}
        title={header}
      />
    </>
  )
}

export default ListingCard
