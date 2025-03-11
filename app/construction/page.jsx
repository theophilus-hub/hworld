import React from 'react'

function Construction() {
  return (
    <div>
      <div>
        <h1>Construction</h1>
      
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-black">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Under Construction</h2>
              <p className="text-xl text-gray-300">We're working hard to bring you something amazing.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-opacity-20 bg-white backdrop-blur-lg p-6 rounded-lg border border-gray-600">
                <h3 className="text-2xl font-semibold text-white mb-4">What We're Building</h3>
                <p className="text-gray-300">
                  Our team is dedicated to creating a seamless experience that matches
                  the quality and style you've come to expect from our website.
                </p>
              </div>
              
              <div className="bg-opacity-20 bg-white backdrop-blur-lg p-6 rounded-lg border border-gray-600">
                <h3 className="text-2xl font-semibold text-white mb-4">Coming Soon</h3>
                <p className="text-gray-300">
                  We're implementing the same design principles, animations, and
                  functionality that you love throughout our website.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-300 mb-4">Check back soon for updates!</p>
              <div className="animate-pulse">
                <svg className="w-6 h-6 mx-auto text-blue-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Construction
