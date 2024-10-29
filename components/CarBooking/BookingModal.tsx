import React from 'react'
import CarCard from '../Home/CarCard'
import { IoClose } from "react-icons/io5";
import Form from './Form';

function BookingModal({car}:any) {
  return (
    <form method="dialog" className="modal-box w-11/12 max-w-5xl">
        <div className='border-b-[1px] pb-2 flex justify-between'>
            <h3 className='text-[30px] font-light text-gray-700'>Rent a Car Now!</h3>
            <button className='btn'>Close<IoClose /></button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className=''>
                <CarCard car={car} />
            </div>
            <div className=''>
                <Form />
            </div>
        </div>
    </form>
  )
}

export default BookingModal