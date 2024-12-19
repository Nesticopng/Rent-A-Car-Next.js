"use client"
import React from 'react'
import Image from 'next/image'

function Hero() {
  const handleScroll = () => {
    const carsSection = document.getElementById("cars-section")
    
    carsSection?.scrollIntoView({ behavior: "smooth" })
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mt-9'>
        <div className='mb-8 md:mb-0'>
            <h2 className='text-[40px] md:text-[60px] font-bold leading-tight'>Premiun Car Rental in your Area</h2>
            <h2 className='text-[20px] text-gray-500 pr-20 mt-5'>Book the selected car effortlessly, Pay for driving only, Book the Car Now</h2>
            <div className='flex md:hidden'>
              <button onClick={handleScroll} className='mx-auto items-center justify-center py-2 px-5 mt-5 bg-blue-500 text-[110%] text-white font-semibold rounded-full shadow-lg hover:shadow-2xl shadow-indigo-500/70 hover:scale-105 transition-all'>Explore Cars</button>
            </div>
            <button onClick={handleScroll} className='hidden md:flex items-center justify-center p-2 mt-5 bg-blue-500 text-[110%] text-white font-medium px-4 rounded-full shadow-lg hover:shadow-2xl shadow-indigo-500/70 hover:scale-105 transition-all'>Explore Cars</button>
        </div>
        <div>
            <Image src={'/HeroSection.png'} alt='Hero BMW M5' width={1500} height={1500}/>
        </div>
    </div>
  )
}

export default Hero