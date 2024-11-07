import { BookCreatedFlagContext } from '@/context/BookCreatedFlagContext'
import { getLocationList, createBooking } from '@/services'
import { useUser } from '@clerk/nextjs'
import React, { useContext, useEffect, useState } from 'react'

function Form({car}:any) {
  const [ formValue, setFormValue ] = useState({
    location:'',
    pickUpDate:'',
    dropOffDate:'',
    pickUpTime: '',
    dropOffTime: '',
    contactNumber: '',
    userName: 'Nestico',
    carId: {connect: {id: ""}}
    
  })

  const [ storeLocation, setStoreLocation] = useState<any>([])
  const { showToastMsg, setShowToastMsg } = useContext(BookCreatedFlagContext)

  useEffect(() => {
    getStoreLocation_()
  }, [])

  useEffect(() => {
    if(car){
      setFormValue({
        ...formValue,
          carId: {connect: 
            {id: car.id}
          }
      })
    }
  }, [car])

  const getStoreLocation_ = async () => {
    const result:any = await getLocationList()

    setStoreLocation(result.storeLocations)
  }

  const handleChange = (event:any) => {
    setFormValue({
      ...formValue,
      [event.target.name]:event.target.value
    })
  }

  const handleSubmit= async () => {
    try {
      const res = await createBooking(formValue)
      if(res) {
        setShowToastMsg(true)
      }
    } catch (error) {
      console.error("Error creating the reservation.", error)
    }
  }

  return (
    <div>
        <div className='flex flex-col w-full mb-5'>
            <label className='text-gray-600'>Pick Up Location</label>
            <select defaultValue={'DEFAULT'}  onChange={handleChange} className='select select-bordered w-full' name="location" id="location">
                <option value="DEFAULT" disabled>Location</option>
                {storeLocation&&storeLocation.map((loc:any, index: number)=> (
                    <option 
                      key={index}
                      value={loc.addresse}
                    >
                      {loc.addresse}
                    </option>
                ))}
            </select>
        </div>
        <div className='flex gap-5 mb-5'>
            <div className='flex flex-col w-full'>
                <label className='text-gray-600'>Pick up Date</label>
                <input type="date" placeholder='Type Here' name='pickUpDate' onChange={handleChange} min={new Date().toISOString().split("T")[0]} className='input input-bordered w-full'/>
            </div>
            <div className='flex flex-col w-full'>
                <label className='text-gray-600'>Drop off Date</label>
                <input type="date" placeholder='Type Here' name='dropOffDate' onChange={handleChange} className='input input-bordered w-full'/>
            </div>
        </div>
        <div className='flex gap-5 mb-5'>
            <div className='flex flex-col w-full'>
                <label className='text-gray-600'>Pick up Time</label>
                <input type="time" placeholder='Type Here' name='pickUpTime' onChange={handleChange} className='input input-bordered w-full'/>
            </div>
            <div className='flex flex-col w-full'>
                <label className='text-gray-600'>Drop off Time</label>
                <input type="time" placeholder='Type Here' name='dropOffTime' onChange={handleChange} className='input input-bordered w-full'/>
            </div>
        </div>
        <div className='flex flex-col w-full mb-6'>
            <label className='text-gray-600'>Contact Number</label>
            <input type="text" placeholder='Type Here' name='contactNumber' onChange={handleChange} className='input input-bordered w-full' />    
        </div>
        <button className='btn btn-outline w-full' onClick={handleSubmit} type="submit">Rent</button>
    </div>
  )
}

export default Form