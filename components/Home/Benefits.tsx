import React from 'react'

function Benefits() {
  return (
    <div className="relative w-full h-[83vh] lg:h-[70vh] overflow-hidden">
        <div className='mt-16 mx-24'>
          <h1 className='text-7xl font-bold'>Benefits</h1>
        </div>
        <div className='mt-24 mx-24 flex justify-between text-lg lg:text-2xl gap-11'>
          <div>
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              className='h-[3em] w-[3em] lg:h-[4em] lg:w-[4em]'
            >
              <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
            </svg>
            <h2 className='mt-4 font-semibold'>Quality and Security</h2>
            <p className='text-pretty font-light'>
            Certified vehicles to take care of your trip at the best rates.
            </p>
          </div>
          <div>
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              className='h-[3em] w-[3em] lg:h-[4em] lg:w-[4em]'
            >
              <path
                fillRule="evenodd"
                d="M2.52 3.515A2.5 2.5 0 014.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 01.049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 00.381-.404l.792-1.848zM3 10a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2zM6 8a1 1 0 000 2h4a1 1 0 100-2H6zM2.906 5.189l.956-1.913A.5.5 0 014.309 3h7.382a.5.5 0 01.447.276l.956 1.913a.51.51 0 01-.497.731c-.91-.073-3.35-.17-4.597-.17-1.247 0-3.688.097-4.597.17a.51.51 0 01-.497-.731z"
              />
            </svg>
            <h2 className='mt-4 font-semibold'>Journey at your way</h2>
            <p className='text-pretty font-light'>
            From sports cars to comfortable trucks. You choose how to move.
            </p>
          </div>
          <div>
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              className='h-[3em] w-[3em] lg:h-[4em] lg:w-[4em]'
            >
              <path d="M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 2a1 1 0 00-1 1v1h14V3a1 1 0 00-1-1H2zm13 3H1v9a1 1 0 001 1h12a1 1 0 001-1V5z" />
              <path d="M11 7.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm-3 0a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm-2 3a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm-3 0a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1z" />
            </svg>
            <h2 className='mt-4 font-semibold'>Travel whenever you want</h2>
            <p className='text-pretty font-light'>
            Guaranteed availability in your vehicles just when you need it.
            </p>
          </div>
          <div>
            <svg
              viewBox="0 0 576 512"
              fill="currentColor"
              className='h-[3em] w-[3em] lg:h-[4em] lg:w-[4em]'
            >
              <path d="M400 256c0 61.9-50.1 112-112 112s-112-50.1-112-112 50.1-112 112-112 112 50.1 112 112zm-128-32v64h-8c-8.8 0-16 7.2-16 16s7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-8v-80c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16zM0 128c0-35.35 28.65-64 64-64h448c35.3 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128zm48 48v160c35.35 0 64 28.7 64 64h352c0-35.3 28.7-64 64-64V176c-35.3 0-64-28.7-64-64H112c0 35.3-28.65 64-64 64z" />
            </svg>
            <h2 className='mt-4 font-semibold'>Payment at Convenience</h2>
            <p className='text-pretty font-light'>
            Use your preferred payment method to confirm your trips.
            </p>
          </div>
        </div>
    </div>
  )
}
 
export default Benefits