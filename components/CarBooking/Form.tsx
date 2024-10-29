import React from 'react'

function Form() {
  return (
    <div>
        <div className='flex flex-col w-full mb-5'>
            <label className='text-gray-600'>Pick Up Location</label>
            <select defaultValue={'DEFAULT'} className='select select-bordered w-full max-w-lg' name="location" id="location">
                <option value="DEFAULT" disabled>Location</option>
                <option value="candelaria">Sambil de La Candelaria, Caracas</option>
                <option value="altamira">Plaza Francia, Caracas</option>
                <option value="hatillo">Paseo el Hatillo, Caracas</option>
            </select>
        </div>
        <div className='flex flex-col gap-5 mb-5'>
            <div className='flex flex-col w-full'>
                <label className='text-gray-600'>Pick Up Date</label>
                <input type="date" placeholder='Type Here' min={new Date().toISOString().split("T")[0]} className='input input-bordered w-full max-w-lg'/>
            </div>
            <div className='flex flex-col w-full'>
                <label className='text-gray-600'>Drop off Date</label>
                <input type="date" placeholder='Type Here' className='input input-bordered w-full max-w-lg'/>
            </div>
        </div>
        <div className='flex flex-col w-full mb-6'>
            <label className='text-gray-600'>Contact Number</label>
            <input type="text" placeholder='Type Here' className='input input-bordered w-full max-w-lg' />    
        </div>
        <button className='btn btn-outline w-full' type="submit">Submit</button>
    </div>
  )
}

export default Form