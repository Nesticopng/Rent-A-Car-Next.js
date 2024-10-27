import React from 'react'
import { Lato } from 'next/font/google'
import { UserButton } from "@clerk/nextjs"

const lato = Lato({ subsets: ['latin'], weight: "900", style: "italic" })

function NavBar() {
  return (
    <div className='flex items-center justify-between p-5 shadow-sm'>
        <h1 className={`${lato.className} text-2xl`}>Rent-a-Car</h1>
        <div className='hidden md:flex gap-5 '>
            <h2 className='hover:bg-blue-500 p-2 px-3 cursor-pointer rounded-2xl hover:text-white ease-in-out duration-300'>Home</h2>
            <h2 className='hover:bg-blue-500 p-2 px-3 cursor-pointer rounded-2xl hover:text-white ease-in-out duration-300'>History</h2>
            <h2 className='hover:bg-blue-500 p-2 px-3 cursor-pointer rounded-2xl hover:text-white ease-in-out duration-300'>Contact Us</h2>
        </div>
        <UserButton />
    </div>
  )
}

export default NavBar