"use client"

import Link from "next/link"
import { FaSeedling } from "react-icons/fa"
import { useState } from "react"
import { useUserProvider } from "@/context/UserContext"

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const { userProfile } = useUserProvider();
    return(
        <nav className="w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <Link href="/" className="flex ms-2 md:me-24">
                            <FaSeedling className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white mr-4"></FaSeedling>
                            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Infinite sprout</span>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        {
                            userProfile &&
                                <div className="flex items-center ms-3">
                                    <div>
                                        <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" onClick={() => setIsOpen(!isOpen)}>
                                            <span className="sr-only">Open user menu</span>
                                            <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                                        </button>
                                    </div>
                                    { isOpen && 
                                        <div className="fixed z-50 right-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" >
                                            Just a menu
                                        </div>
                                    }
                                </div>
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}