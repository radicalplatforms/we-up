'use client'

import WeUpLogoBlack from '../assets/we-up-black.png';
import Image from 'next/image';

// @ts-ignore
export default function Navbar({linkText, linkHref}) {
  const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
    </svg>
  );

  var currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex flex-1 text-sm font-semibold ">
          {formattedDate}
        </div>
        <SunIcon />
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">WeUp.</span>
          <Image src={WeUpLogoBlack} className="h-8 w-auto" alt=""/>
        </a>
        <div className="flex flex-1 justify-end">
          {linkHref && linkText && (
            <a href={linkHref} className="text-sm font-semibold leading-6 text-gray-900">
              {linkText} <span aria-hidden="true">&rarr;</span>
            </a>
          )}
        </div>
      </nav>
    </header>
  )
}