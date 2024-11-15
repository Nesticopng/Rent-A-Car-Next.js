"use client"
import Link from "next/link";
import { UserButton, SignInButton, useAuth } from "@clerk/nextjs";

export default function Nav() {
    const { userId } = useAuth()

    return (
        <div className="navbar bg-base-100 text-base-content sticky top-0 z-[10000] flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)] shadow-sm">
            <div className="flex-1">
                <Link href="/" className="md:ml-5 btn btn-ghost text-xl">Rent a Car</Link>
            </div>
            <div className="flex-none">
                <div className="flex-none hidden md:block">
                    <ul className="menu menu-horizontal px-1 items-center text-base antialiased font-sans font-semibold">
                        <li><Link href="/">Home</Link></li>
                        <li><Link className="ml-2" href="https://wa.link/zktknj">Contact Us</Link></li>
                        {!userId && <li className="ml-2"><SignInButton /></li>}
                        <div className="ml-6 flex items-center h-full"><UserButton /></div>
                    </ul>
                </div>
                <div className="flex-none drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer-4" className="flex-none btn btn-square btn-ghost md:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-5 w-5 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 text-right">
                            <div className="flex items-center justify-between">
                                <Link href="/" className="w-[70%] btn btn-ghost text-xl">Rent a Car</Link>
                                <UserButton />
                            </div>
                            <div className="divider"></div>
                            <li className="text-base antialiased font-sans font-medium"><Link href="/">Home</Link></li>
                            <li className="text-base antialiased font-sans font-medium"><Link href="https://wa.link/zktknj">Contact Us</Link></li>
                            {!userId && <li className="text-base antialiased font-sans font-medium mt-auto"><SignInButton /></li>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}