import React, { Component, useState } from 'react';
import WeUpLogo from '../assets/weup.png';
import Image from 'next/image';
import HomeDropdown from '../components/HomeDropdown';
import {uploadImageToCloudflare} from './imageUpload';
import {withPageAuthRequired, getSession} from '@auth0/nextjs-auth0/edge';
import {getUserAPI} from '../../util/api-helpers'
import FileUploadComponent from './FileUploadComponent';


export default async function Upload() {
    // const session = await getSession();
    // const user = await getUserAPI(session?.user.email);

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
                        <FileUploadComponent userId={"igk3t7lx2projnzyxqwvty4t"} />

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
}