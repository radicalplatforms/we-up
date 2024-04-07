'use client'

import WeUpLogoBlack from '../assets/we-up-black.png';
import Image from 'next/image';

// @ts-ignore
export default function Navbar({showBackHome}) {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex flex-1"></div>
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">WeUp.</span>
          <Image src={WeUpLogoBlack} className="h-8 w-auto" alt=""/>
        </a>
        <div className="flex flex-1 justify-end">{
          showBackHome ?
            <a href="/home" className="text-sm font-semibold leading-6 text-gray-900">
              Back home <span aria-hidden="true">&rarr;</span>
            </a> :
            <a href="/profile" className="text-sm font-semibold leading-6 text-gray-900">
              Profile <span aria-hidden="true">&rarr;</span>
            </a>
        }
        </div>
      </nav>
    </header>
  )
}
