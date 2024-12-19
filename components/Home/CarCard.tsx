import React, { useEffect, useState } from 'react'
import { FaGasPump } from "react-icons/fa"
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { PiSteeringWheelFill } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";


function CarCard(props:any) {
  const [ car, setCar ] = useState<any>()

  useEffect(() => {
    if(props.car){
        setCar(props.car)
    }
  },[props.car])

    return car&&(
        <div className='group mx-4 my-6 py-6 ease-in-out transition-all duration-500 rounded-3xl bg-gray-50 p-2 sm: hover:bg-white border-[3px] cursor-pointer border-grey-200 hover:border-blue-500'>
            <h2 className='text-[20px] font-medium mb-2'>{car.name}</h2>
            <h2 className='text-[28px] font-bold mb-2'>
                <span className='text-[12px] font-light'>$ </span>
                {car.price}
                <span className='text-[12px] font-light'> /day</span>
            </h2>
            <div className='w-full flex justify-center'>
            <img alt={car.name} src={car.image?.url} width={220} height={200} className='w-[250px] justify-center h-[150px] mb-3 object-contain'></img>
            </div>
            <div className='flex justify-between group-hover:hidden ease-in-out transition-all duration-500'>
                <div className='text-center text-gray-500'>
                    <PiSteeringWheelFill className='w-full text-[22px] mb-3' />
                    <h2 className='line-clamp-5 text-[14px] font-light'>{car.carType}</h2>
                </div>
                <div className='text-center text-gray-500'>
                    <MdAirlineSeatReclineNormal className='w-full text-[22px] mb-3'/> 
                    <h2 className='line-clamp-5 text-[14px] font-light'>{car.seat} Seat</h2>
                </div>
                <div className='text-center text-gray-500'>
                    <FaGasPump className='w-full text-[22px] mb-3'/>
                    <h2 className='line-clamp-5 text-[14px] font-light'>{car.carAvg} MPG</h2>
                </div>
            </div>
            <button className='hidden group-hover:flex ease-in-out transition-all duration-500 h-14 p-2 w-full space-x-2 bg-gradient-to-r items-center justify-center from-blue-400 to-indigo-600 rounded-3xl text-white'>
                <span className='items-center justify-center'>Rent Now!</span>
                <FaArrowRight className='text-white'/>
            </button>
        </div>
  )
}

export default CarCard