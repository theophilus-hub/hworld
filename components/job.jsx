import Link from "next/link";
import Slide from "@/components/slide";
import Image from "next/image";

function Job() {
  return (
    <div
      id="solution"
      className="flex flex-col flex-1 justify-center items-center space-y-6 mb-[40px] md:mb-[50px] px-4 md:px-16 lg:px-40"
    >
      <Slide>
        <div className="space-y-4 mx-2 md:mx-[25%]">
          <h1 className="text-center text-4xl text-white font-bold">
            What <span className="text-sec italic">we</span> do
          </h1>
          <p className="text-center text-white font-normal text-base">
            At Hworld, we provide innovative solutions in construction, marine
            engineering, and hospitality, delivering excellence and reliability
            across all our services.
          </p>
        </div>
      </Slide>

      <div className="space-y-14 w-full">
        <Slide>
          <div className="relative max-w-7xl mx-auto group">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-sec/5 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm rounded-[32px] p-6 md:p-10 border border-white/5">
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                {/* Left section with number and image */}
                <div className="lg:w-[45%] w-full space-y-6">
                  {/* Service number badge */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-sec to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-sec/20">
                      <span className="text-3xl font-black text-white">01</span>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-sec/50 to-transparent"></div>
                  </div>
                  
                  {/* Image container with decorative frame */}
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-br from-sec/20 to-transparent rounded-[28px] blur-xl"></div>
                    <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-2xl">
                      <Image 
                        src="/adhoc.jpg" 
                        alt="Project Planning Services" 
                        fill 
                        className="object-cover" 
                        priority
                      />
                      {/* Image overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </div>
                    {/* Decorative accent */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sec/10 rounded-full blur-2xl"></div>
                  </div>
                </div>
                
                {/* Right section with content */}
                <div className="lg:w-[55%] w-full flex flex-col justify-center space-y-6">
                  {/* Title with accent */}
                  <div className="space-y-3">
                    <div className="inline-block">
                      <span className="text-sec text-sm font-bold uppercase tracking-wider">Service</span>
                    </div>
                    <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                      Adhoc Project Planning
                    </h2>
                  </div>
                  
                  {/* Description */}
                  <p className="text-white/70 text-base md:text-lg leading-relaxed">
                    Expert planning services for construction and marine projects. We deliver tailored solutions with precision scheduling and resource optimization.
                  </p>
                  
                  {/* Key features */}
                  <div className="grid grid-cols-2 gap-4 py-2">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-sec rounded-full"></div>
                      <span className="text-white/60 text-sm">Precision Scheduling</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-sec rounded-full"></div>
                      <span className="text-white/60 text-sm">Resource Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-sec rounded-full"></div>
                      <span className="text-white/60 text-sm">Expert Planning</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-sec rounded-full"></div>
                      <span className="text-white/60 text-sm">Tailored Solutions</span>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="pt-2">
                    <Link href="/adhoc">
                      <button className="group/btn bg-sec transition-all duration-300 rounded-full px-10 py-4 text-base font-bold shadow-xl shadow-sec/20 hover:shadow-2xl hover:shadow-sec/30 flex items-center gap-3">
                        <span>Explore Service</span>
                        <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        
        <Slide>
          <div className="relative max-w-7xl mx-auto group">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-sec/5 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm rounded-[32px] p-6 md:p-10 border border-white/5">
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                {/* Left section with number and image */}
                <div className="lg:w-[45%] w-full space-y-6">
                  {/* Service number badge */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-sec to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-sec/20">
                      <span className="text-3xl font-black text-white">02</span>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-sec/50 to-transparent"></div>
                  </div>
                  
                  {/* Image container with decorative frame */}
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-br from-sec/20 to-transparent rounded-[28px] blur-xl"></div>
                    <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-2xl">
                      <Image 
                        src="/newconst2.png" 
                        alt="Construction Services" 
                        fill 
                        className="object-cover" 
                        priority
                      />
                      {/* Image overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </div>
                    {/* Decorative accent */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sec/10 rounded-full blur-2xl"></div>
                  </div>
                </div>
                
                {/* Right section with content */}
                <div className="lg:w-[55%] w-full flex flex-col justify-center space-y-6">
                  {/* Title with accent */}
                  <div className="space-y-3">
                    <div className="inline-block">
                      <span className="text-sec text-sm font-bold uppercase tracking-wider">Service</span>
                    </div>
                    <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                      Construction
                    </h2>
                  </div>
                  
                  {/* Description */}
                  <p className="text-white/70 text-base md:text-lg leading-relaxed">
                    Building innovative, sustainable structures from residential to large-scale infrastructure. Quality, efficiency, and safety in every project.
                  </p>
                  
                  {/* Key features */}
                  <div className="grid grid-cols-2 gap-4 py-2">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-sec rounded-full"></div>
                      <span className="text-white/60 text-sm">Residential Projects</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-sec rounded-full"></div>
                      <span className="text-white/60 text-sm">Infrastructure</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-sec rounded-full"></div>
                      <span className="text-white/60 text-sm">Quality Assured</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-sec rounded-full"></div>
                      <span className="text-white/60 text-sm">Safety First</span>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="pt-2">
                    <Link href="/construction">
                      <button className="group/btn bg-sec transition-all duration-300 rounded-full px-10 py-4 text-base font-bold shadow-xl shadow-sec/20 hover:shadow-2xl hover:shadow-sec/30 flex items-center gap-3">
                        <span>Explore Service</span>
                        <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        
        <Slide>
          <div className="relative max-w-7xl mx-auto group">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-sec/5 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm rounded-[32px] p-6 md:p-10 border border-white/5">
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                {/* Left section with number and image */}
                <div className="lg:w-[45%] w-full space-y-6">
                  {/* Service number badge */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-sec to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-sec/20">
                      <span className="text-3xl font-black text-white">03</span>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-sec/50 to-transparent"></div>
                  </div>
                  
                  {/* Image container with decorative frame */}
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-br from-sec/20 to-transparent rounded-[28px] blur-xl"></div>
                    <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-2xl">
                      <Image 
                        src="/mar1.jpg" 
                        alt="Marine Services" 
                        fill 
                        className="object-cover" 
                        priority
                      />
                      {/* Image overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </div>
                    {/* Decorative accent */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sec/10 rounded-full blur-2xl"></div>
                  </div>
                </div>
                
                {/* Right section with content */}
                <div className="lg:w-[55%] w-full flex flex-col justify-center space-y-6">
                  {/* Title with accent */}
                  <div className="space-y-3">
                    <div className="inline-block">
                      <span className="text-sec text-sm font-bold uppercase tracking-wider">Service</span>
                    </div>
                    <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                      Marine
                    </h2>
                  </div>
                  
                  {/* Description */}
                  <p className="text-white/70 text-base md:text-lg leading-relaxed">
                    Expert marine engineering from infrastructure design to maintenance and operational support. Reliability and innovation in every project.
                  </p>
                  
                  {/* Key features */}
                  <div className="grid grid-cols-2 gap-4 py-2">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-sec rounded-full"></div>
                      <span className="text-white/60 text-sm">Infrastructure Design</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-sec rounded-full"></div>
                      <span className="text-white/60 text-sm">Maintenance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-sec rounded-full"></div>
                      <span className="text-white/60 text-sm">Operational Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-sec rounded-full"></div>
                      <span className="text-white/60 text-sm">Innovation Driven</span>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="pt-2">
                    <Link href="/marine">
                      <button className="group/btn bg-sec transition-all duration-300 rounded-full px-10 py-4 text-base font-bold shadow-xl shadow-sec/20 hover:shadow-2xl hover:shadow-sec/30 flex items-center gap-3">
                        <span>Explore Service</span>
                        <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide>
          <div className="relative max-w-7xl mx-auto group">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-sec/5 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm rounded-[32px] p-6 md:p-10 border border-white/5">
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                {/* Left section with number and image */}
                <div className="lg:w-[45%] w-full space-y-6">
                  {/* Service number badge */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-sec to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-sec/20">
                      <span className="text-3xl font-black text-white">04</span>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-sec/50 to-transparent"></div>
                  </div>
                  
                  {/* Image container with decorative frame */}
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-br from-sec/20 to-transparent rounded-[28px] blur-xl"></div>
                    <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-2xl">
                      <Image 
                        src="/deal.png" 
                        alt="Deal Sourcing" 
                        fill 
                        className="object-cover" 
                        priority
                      />
                      {/* Image overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </div>
                    {/* Decorative accent */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sec/10 rounded-full blur-2xl"></div>
                  </div>
                </div>
                
                {/* Right section with content */}
                <div className="lg:w-[55%] w-full flex flex-col justify-center space-y-6">
                  {/* Title with accent */}
                  <div className="space-y-3">
                    <div className="inline-block">
                      <span className="text-sec text-sm font-bold uppercase tracking-wider">Service</span>
                    </div>
                    <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                      Deal Sourcing
                    </h2>
                  </div>
                  
                  {/* Description */}
                  <p className="text-white/70 text-base md:text-lg leading-relaxed">
                    Identifying high-value investment opportunities in construction and marine sectors. Strong connections and market insights for long-term growth.
                  </p>
                  
                  {/* Key features */}
                  <div className="grid grid-cols-2 gap-4 py-2">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-sec rounded-full"></div>
                      <span className="text-white/60 text-sm">Investment Opportunities</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-sec rounded-full"></div>
                      <span className="text-white/60 text-sm">Market Insights</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-sec rounded-full"></div>
                      <span className="text-white/60 text-sm">Strong Connections</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-sec rounded-full"></div>
                      <span className="text-white/60 text-sm">Long-term Growth</span>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="pt-2">
                    <Link href="/deals">
                      <button className="group/btn bg-sec transition-all duration-300 rounded-full px-10 py-4 text-base font-bold shadow-xl shadow-sec/20 hover:shadow-2xl hover:shadow-sec/30 flex items-center gap-3">
                        <span>Explore Service</span>
                        <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

      </div>
    </div>
  );
}

export default Job;
