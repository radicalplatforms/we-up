"use client";
import { useState } from "react";
import LineChart from "../charts/LineChart";
import HomeDropdown from "./HomeDropdown";
import Image from 'next/image';
import WeUpLogo from '../assets/weup.png';

export default function FeedInfo({ isUp, handleClick }: { isUp: any, handleClick: any }) {

    const handleImageUpload = (event: { target: { files: any[]; }; }) => {
        const file = event.target.files[0];
        if (file) {
            handleClick();
        }
    };

    return (
        <>
                {/* Fixed upload button */}
                <div className='fixed bottom-0 w-full flex justify-center items-center z-10 px-4 sm:px-0'>
                    <button onClick={handleClick} className='my-8 px-5 py-2 bg-blue-500 text-white text-sm sm:text-base font-bold tracking-wide rounded-full focus:outline-none shadow-lg hover:bg-blue-600 transition-colors duration-200 transform hover:scale-105'>
                        I&apos;m up!
                    </button>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                                <input id="dropzone-file" type="file" className="hidden"/>
                            </label>
                        </div> 
                         <div className="pt-4">
                    <div>
                        <h1 className="lowercase text-center my-6 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold leading-none tracking-tight text-gray-900 dark:text-white">Today&apos;s <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Feed</mark></h1>
                    </div>
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