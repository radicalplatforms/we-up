"use client";
import React, { useState, useEffect } from 'react';
import WeUpLogo from '../assets/weup.png';
import Image from 'next/image';
import HomeDropdown from '../components/HomeDropdown';
import {uploadImageToCloudflare} from './imageUpload';
import {withPageAuthRequired, getSession, Session} from '@auth0/nextjs-auth0/edge';
import {getUserAPI} from '../../util/api-helpers'
import { User } from '../../../../hono/src/utils/type-definitions'

export default withPageAuthRequired(async function Upload() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setSelectedFile(file);
        } else {
            console.log("No file selected or 'files' is null");
            setSelectedFile(null);
        }
        if (selectedFile) {
            try {
                await uploadImageToCloudflare(selectedFile, String(user?.id)) // replace with userId string if needed
                console.log('Upload successful');
                alert('Upload successful');
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }
    };

    return (
        <>

            {/* Container for full screen */}
            <div className='flex min-h-screen flex-col items-center justify-between p-16 bg-gray-50 space-y-4'>
            <div>
                <div>
                    <h1 className="lowercase text-center mb-8 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Group <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Info</mark></h1>
                </div>
                <div className="flex items-start gap-2.5">
                    {/* <Image src={WeUpLogo} className="w-8 h-8 rounded-full" alt={''} /> */}
                    <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-white rounded-e-xl rounded-es-xl dark:bg-gray-700">
                        <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                            {/* <span className="text-xl font-bold text-gray-900 dark:text-white">Asian Sensations</span> */}
                            <HomeDropdown />
                            {/* <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46p</span> */}
                        </div>

                        {/* Upload function */}
                        <div className="my-4 flex items-center justify-center w-full">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
                            </label>
                        </div> 

                        <p className="text-sm font-normal py-2.5 text-center text-gray-900 dark:text-white">Take a picture with your breakfast!</p>
                        <div className="flex my-1 space-x-1 justify-center">
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
                        <span className="mt-1 text-center text-xs font-normal text-gray-500 dark:text-gray-400">caitlinclark, +5 have submitted.</span>
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
        </div>

        </>
    );
}, {returnTo: '/profile'})

export const runtime = 'edge';