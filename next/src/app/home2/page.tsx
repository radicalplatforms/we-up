"use client";
import React, {useState, Component} from 'react';
import WeUpLogo from '../assets/weup.png';
import Image from 'next/image';
import HomeDropdown from '../components/HomeDropdown';
import Navbar from '../components/Navbar';
import LineChart from '../charts/LineChart';
import GroupInfo from '../components/GroupInfo';
import FeedInfo from '../components/FeedInfo';

export default function Home2() {

  const [isUp, setIsUp] = useState(false);
  const handleClick = () => {
    setIsUp(true);
  };

  return (
    <>
      <Navbar linkText={"Profile"} linkHref={"/profile"}/>
      {/* Container for full screen */}
      <div className='flex min-h-screen flex-col items-center justify-between p-4 bg-gray-50 space-y-4'>

        {/* Group Info + Prompt */}
        <GroupInfo/>

        {/* Feed */}
        <FeedInfo isUp={isUp} handleClick={handleClick}/>
      </div>
    </>
  );
}

