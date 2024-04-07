"use client";
import { useState } from "react";
import LineChart from "../charts/LineChart";
import HomeDropdown from "./HomeDropdown";
import Image from 'next/image';
import WeUpLogo from '../assets/weup.png';

export default function Home2() {

    const [isUp, setIsUp] = useState(false);
    const handleClick = () => {
        setIsUp(true);
    };

    const handleImageUpload = (event: { target: { files: any[]; }; }) => {
        const file = event.target.files[0];
        if (file) {
        setIsUp(true);
        }
    };

    return (
        <>
                    {/* Group Info + Prompt */}
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="pt-2 pb-3 md:flex text-center md:items-center md:justify-between">
                            <h1 className="lowercase text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl">My <mark className="px-2 text-white bg-blue-600 rounded">Wakeup Times</mark></h1>
                            <div className="mt-4 items-center justify-between py-2 px-6 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                                <LineChart />
                            </div>
                        </div>

                        <div>
                            <h1 className="lowercase text-2xl text-center mb-1 p-4 font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Today&apos;s <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Prompt</mark></h1>
                        </div>

                        <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                            <HomeDropdown />
                        </div>

                        <div className="my-3 items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                                <div className="items-center justify-between p-2 dark:bg-gray-700 dark:border-gray-600">
                                    <time className="text-xs font-semibold text-gray-600 sm:order-last">Rules</time>
                                    <div className="text-xs font-normal text-gray-500 dark:text-gray-300">                                
                                        1. All members must aim for at least 7-9 hours of sleep each night.<br/>
                                        2. No electronic devices in the bedroom after 9 PM.<br/>
                                        3. Daily sleep logs must be updated by 10 AM the following morning.<br/>
                                    </div>
                                </div>
                        </div>        
                        
                        <div className="my-3 items-center justify-between p-6 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                    <span className="text-sm font-semibold text-gray-900 dark:text-white">zachedey</span>
                                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46p</span>
                                </div>
                                <p className="text-sm font-normal pt-1 pb-2.5 text-gray-900 dark:text-white">Take a picture with your breakfast!</p>
                                <div className="flex my-1 space-x-1">
                                    <div className="relative">
                                        <Image src={WeUpLogo} className="w-8 h-8 rounded-full" alt={''} />
                                    </div>
                                    <div className="relative">
                                        <Image src={WeUpLogo} className="w-8 h-8 rounded-full" alt={''} />
                                    </div>
                                    <div className="relative">
                                        <Image src={WeUpLogo} className="w-8 h-8 rounded-full" alt={''} />
                                    </div>
                                    <div className="relative">
                                        <Image src={WeUpLogo} className="w-8 h-8 rounded-full" alt={''} />
                                    </div>
                                </div>
                                <span className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">caitlinclark, +3 have submitted.</span>
                        </div>
            
                    </div>
        </>
    );
}