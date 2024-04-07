"use client";
import React, { useState, useEffect } from 'react';
import WeUpLogo from '../assets/weup.png';
import Image from 'next/image';
import HomeDropdown from '../components/HomeDropdown';
import Navbar from '../components/Navbar';
import LineChart from '../charts/LineChart';
import GroupInfo from '../components/GroupInfo';
import FeedInfo from '../components/FeedInfo';
import LoadingScreen from '../components/LoadingScreen';

export default function Home2() {

    const [isUp, setIsUp] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const handleClick = () => {
        setIsUp(true);
    };
      
    
    useEffect(() => {
        // Simulate a network request to fetch data
        setTimeout(() => {
            setIsLoading(false);
        }, 1000); // 1 seconds delay
    }, []);

    if (isLoading) {
        return <LoadingScreen />;   
    }

    return (
        <>
        <div className="transition-all duration-500 ease-in-out">
            <Navbar linkText={"Profile"} linkHref={"/profile"}/>
            {/* Container for full screen */}
            <div className='flex min-h-screen flex-col items-center justify-between p-4 bg-gray-50 space-y-4'>
            {/* Group Info */}
            <GroupInfo />
            {/* Feed */}
            <FeedInfo isUp={isUp} handleClick={handleClick}/>
            </div>
        </div>

        </>
    );
}

