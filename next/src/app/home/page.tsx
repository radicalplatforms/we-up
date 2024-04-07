import React, { Component } from 'react';
import HomeDropdown from '../components/HomeDropdown';
import WeUpLogo from '../assets/weup.png';
import Image from 'next/image';
import LineChart from '../charts/LineChart';

export default function Home() {
      
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

        <div className='flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100 dark:bg-gray-900'>
            
            <div className="grid grid-cols-2 gap-8">
                <div className="space-y-8">
                    <HomeDropdown />
                    <div className="flex gap-1">
                        <div className="relative">
                            <Image src={WeUpLogo} className="w-10 h-10 rounded-full" alt={''} />
                            <MoonIndicator />
                        </div>
                        <div className="relative">
                            <Image src={WeUpLogo} className="w-10 h-10 rounded-full" alt={''} />
                            <SunIndicator />
                        </div>
                        <div className="relative">
                            <Image src={WeUpLogo} className="w-10 h-10 rounded-full" alt={''} />
                            <span className="top-0 start-7 absolute w-3.5 h-3.5 bg-red-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
                        </div>
                        <div className="relative">
                            <Image src={WeUpLogo} className="w-10 h-10 rounded-full" alt={''} />
                            <span className="top-0 start-7 absolute w-3.5 h-3.5 bg-red-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between max-w-sm p-6 bg-white border-2 border-gray-300 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <div>
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Sleep Group Rules</h5>
                            <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
                                1. All members must aim for at least 7-9 hours of sleep each night.<br/>
                                2. No electronic devices in the bedroom after 9 PM.<br/>
                                3. Daily sleep logs must be updated by 10 AM the following morning.<br/>
                                4. Weekly group discussions on sleep quality and improvement strategies.<br/>
                                5. Respect all member&apos; experiences and suggestions.<br/>
                                6. Maintain a positive and supportive environment.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <Image src={WeUpLogo} className="aspect-photo" alt={''} />
                </div>
            </div>



            <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 my-4 w-full md:w-3/4 lg:w-1/2">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Sleep Data
                </h2>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                    <LineChart />
                </div>
            </div>
            
            <div>
                <ul role="list" className="sm:w-screen md:w-full px-32 divide-y divide-gray-200 dark:divide-gray-700">
                <li className="py-3 sm:py-4 bg-white dark:bg-gray-800 rounded-lg shadow-md my-2">
            <div className="flex items-center space-x-3 rtl:space-x-reverse px-4">
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
                <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                    <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                    Available
                </span>
            </div>
            <Image src={WeUpLogo} className="my-4 w-full" alt={''} />
        </li>
        <li className="py-3 sm:py-4 bg-white dark:bg-gray-800 rounded-lg shadow-md my-2">
            <div className="flex items-center space-x-3 rtl:space-x-reverse px-4">
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
                <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                    <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                    Available
                </span>
            </div>
            <Image src={WeUpLogo} className="my-4 w-full" alt={''} />
        </li>
                </ul>
            </div>
        </div>
        </>
    );
}