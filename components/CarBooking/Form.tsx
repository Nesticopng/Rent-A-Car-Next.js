import { getLocationList } from '@/services'
import React, {useEffect, useState} from 'react'

function Form() {
  const [ storeLocation, setStoreLocation] = useState<any>([])

  useEffect(() => {
    getStoreLocation_()
  }, [])

  const getStoreLocation_ = async () => {
    const result:any = await getLocationList()
    setStoreLocation(result.storeLocation)
  }

  return (
    <div>
        <div className='flex flex-col w-full mb-5'>
            <label className='text-gray-600'>Pick Up Location</label>
            <select defaultValue={'DEFAULT'} className='select select-bordered w-full' name="location" id="location">
                <option value="DEFAULT" disabled>Location</option>
                {storeLocation&&storeLocation.map((loc:any, index: number)=> (
                    <option key={index} value={loc?.address}>{loc?.address}</option>
                ))}
            </select>
        </div>
        <div className='flex flex-col gap-5 mb-5'>
            <div className='flex flex-col w-full'>
                <label className='text-gray-600'>Pick up Date</label>
                <input type="date" placeholder='Type Here' min={new Date().toISOString().split("T")[0]} className='input input-bordered w-full'/>
            </div>
            <div className='flex flex-col w-full'>
                <label className='text-gray-600'>Drop off Date</label>
                <input type="date" placeholder='Type Here' className='input input-bordered w-full'/>
            </div>
        </div>
        <div className='flex flex-col w-full mb-6'>
            <label className='text-gray-600'>Contact Number</label>
            <input type="text" placeholder='Type Here' className='input input-bordered w-full' />    
        </div>
        <button className='btn btn-outline w-full' type="submit">Submit</button>
    </div>
  )
}

export default Form