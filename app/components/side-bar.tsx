"use client"

import { FaCog, FaCoins, FaEnvelope, FaFlask, FaPlusCircle, FaRegistered, FaSeedling, FaSign, FaSignInAlt, FaStore, FaSubscript, FaTractor, FaUser, FaWallet } from "react-icons/fa"
import Link from "next/link";
import { useUserProvider } from "@/context/UserContext";

export default function SideBar() {
    const { userProfile } = useUserProvider();
    return (
        <aside id="logo-sidebar" className="z-40 w-80 p-2 h-screen transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <li>
                        <Link href="/links" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FaSeedling></FaSeedling>
                            <span className="ms-3">Sproutslink</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/messages" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FaEnvelope></FaEnvelope>
                            <span className="flex-1 ms-3 whitespace-nowrap">Messages</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/coming-soon" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FaStore></FaStore>
                            <span className="flex-1 ms-3 whitespace-nowrap">Market</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/coming-soon" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FaTractor></FaTractor>
                            <span className="flex-1 ms-3 whitespace-nowrap">Farm</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/coming-soon" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FaWallet></FaWallet>
                            <span className="flex-1 ms-3 whitespace-nowrap">Wallet</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/coming-soon" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FaFlask></FaFlask>
                            <span className="flex-1 ms-3 whitespace-nowrap">Labs</span>
                        </Link>
                    </li>
                    {
                        userProfile &&
                            <li>
                                <Link href="/coming-soon" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <FaUser></FaUser>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
                                </Link>
                            </li>
                    }
                    {
                        userProfile &&
                        <li>
                            <Link href="/coming-soon" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <FaCog></FaCog>
                                <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
                            </Link>
                        </li>
                    }
                    {
                        !userProfile &&
                        <li>
                            <Link href="/coming-soon" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <FaSignInAlt></FaSignInAlt>
                                <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                            </Link>
                        </li>
                    }
                    {
                        !userProfile &&
                        <li>
                            <Link href="/coming-soon" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <FaPlusCircle></FaPlusCircle>
                                <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                            </Link>
                        </li>
                    }
                </ul>
            </div>
        </aside>
    )
}