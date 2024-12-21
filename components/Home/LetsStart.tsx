import React from 'react'

function LetsStart() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/LetsStart/HeroLetsStart.webm" type="video/webm" />
        Tu navegador no soporta videos en HTML5.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/90 to-black/40"></div>
      <div className="relative z-10 text-center text-white md:mt-[-13%] 2xl:mt-[-23%]">
        <h1 className="text-4xl font-bold md:text-7xl 2xl:text-8xl">Start Your Journey</h1>
        <p className="mt-4 sm:text-lg md:text-2xl">Discover the perfect car for your next adventure.</p>
        <div className="mt-8">
          <button className="px-6 py-3 bg-gray-200/90 text-black font-semibold text-xl rounded-lg hover:bg-gray-50 transition duration-300 hover:shadow-xl hover:scale-105">
          Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default LetsStart