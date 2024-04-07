"use client";
import React, { useState, Component } from 'react';
import WeUpLogo from '../assets/weup.png';
import Image from 'next/image';
import HomeDropdown from '../components/HomeDropdown';
import Navbar from '../components/Navbar';
import LineChart from '../charts/LineChart';

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
          
    const MoonIndicator = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="top-0 start-7 absolute w-3.5 h-3.5 bg-white border-2 border-white dark:border-gray-800 rounded-full">
          <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
        </svg>
    );

    const SunIndicator = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="top-0 start-7 absolute w-3.5 h-3.5 bg-amber-300 border-2 border-amber-300 dark:border-gray-800 rounded-full">
            <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
        </svg>
    );
      
    return (
        <>
            <Navbar showBackHome={false} />

            {/* Fixed upload button */}
            <div className='fixed bottom-0 w-full flex justify-center items-center z-10'>
                <button onClick={handleClick} className='my-8 px-5 py-2 bg-blue-500 text-white text-sm font-bold tracking-wide rounded-full focus:outline-none shadow-lg hover:bg-blue-600 transition-colors duration-200'>
                    I'm up!
                </button>
            </div>

            {/* Container for full screen */}
            <div className='flex min-h-screen flex-col items-center justify-between p-4 bg-gray-50 space-y-4'>

            {/* User Post */}
            {/* <div className="py-3 sm:py-4 bg-white dark:bg-gray-800 rounded-lg shadow-md my-2">
                <div className="flex items-center space-x-3 px-4">
                    <div className="flex-shrink-0">
                        <Image src={WeUpLogo} className="w-8 h-8 rounded-full" alt={''} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 truncate dark:text-white">
                            gocats
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            07:05a
                        </p>
                    </div>
                </div>
                <Image src={WeUpLogo} className="my-4 w-full" alt={''} />
            </div> */}

                {/* Group Info + Prompt */}
                <div>
                    <div>
                        <h1 className="lowercase text-center my-2 p-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">My <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Wakeup Times</mark></h1>
                    </div>
                    <div className="my-4 items-center justify-between p-1 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                        <LineChart />
                    </div>

                    <div>
                        <h1 className="lowercase text-center my-2 p-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Today&apos;s <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Prompt</mark></h1>
                    </div>
                    
                    <div className="mt-1 mb-6 items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">zachedey</span>
                                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46p</span>
                            </div>
                            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">Take a picture with your breakfast!</p>
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
                    <div className="flex items-start gap-2.5">
                        {/* <Image src={WeUpLogo} className="w-8 h-8 rounded-full" alt={''} /> */}
                        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-6 border-gray-200 bg-white rounded-xl dark:bg-gray-700">
                            <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                                {/* <span className="text-xl font-bold text-gray-900 dark:text-white">Asian Sensations</span> */}
                                <HomeDropdown />
                                {/* <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46p</span> */}
                            </div>
                            
                            <div className="mt-4 mb-2 items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                                <time className="text-xs font-semibold text-gray-600 sm:order-last">Rules</time>
                                <div className="text-xs font-normal text-gray-500 dark:text-gray-300">                                
                                    1. All members must aim for at least 7-9 hours of sleep each night.<br/>
                                    2. No electronic devices in the bedroom after 9 PM.<br/>
                                    3. Daily sleep logs must be updated by 10 AM the following morning.<br/>
                                </div>
                            </div>

                            {/* Upload function */}

                            <div className="my-2 flex items-center justify-center w-full">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    {isUp ? (
                                    <Image src={WeUpLogo} className="w-full h-64 object-cover rounded-lg" alt={''} />
                                    ) : (
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    )}
                                    <input id="dropzone-file" type="file" className="hidden" onChange={handleImageUpload} />
                                </label>
                                </div>

                        </div>
                        <div id="dropdownDots" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reply</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Forward</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Copy</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                {/* Feed */}
                <div className="pt-4">
                    <div>
                        <h1 className="lowercase text-center mb-2 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Today&apos;s <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Feed</mark></h1>
                    </div>
                    <div className="flex items-start gap-2.5">
                        <div id="dropdownDots" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reply</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Forward</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Copy</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                {/* Feed */}
                <div style={{ filter: isUp ? 'none' : 'blur(16px)' }}>
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        <li className="py-3 sm:py-4 bg-white dark:bg-gray-800 rounded-lg shadow-md my-2">
                            <div className="flex items-center space-x-3 px-4">
                                <div className="flex-shrink-0">
                                    <Image src={WeUpLogo} className="w-8 h-8 rounded-full" alt={''} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-gray-900 truncate dark:text-white">
                                        zachedey
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        07:01 AM
                                    </p>
                                </div>
                            </div>
                            <Image src={WeUpLogo} className="my-4 w-full" alt={''} />
                        </li>
                        <li className="py-3 sm:py-4 bg-white dark:bg-gray-800 rounded-lg shadow-md my-2">
                            <div className="flex items-center space-x-3 px-4">
                                <div className="flex-shrink-0">
                                    <Image src={WeUpLogo} className="w-8 h-8 rounded-full" alt={''} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-gray-900 truncate dark:text-white">
                                        zachedey
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        07:01 AM
                                    </p>
                                </div>
                            </div>
                            <Image src={WeUpLogo} className="my-4 w-full" alt={''} />
                        </li>
                    </ul>
                </div>

            </div>
        </>
    );
}

