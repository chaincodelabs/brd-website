'use client'

import { useState } from 'react'
import Pill from "./Pill"
import Link from 'next/link'

const headerMenu = [
    {
        name: 'Event',
        uri: '/#event'
    },
    {
        name: 'Format',
        uri: '/#format'
    },
    {
        name: 'Research Prize',
        uri: '/#prize'
    },
    {
        name: 'Agenda',
        uri: '/#agenda'
    }
]

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return(
        <header className="flex flex-col font-sans gap-2 lg:flex-row items-center lg:justify-between">
            <div className="flex flex-row justify-between w-full items-center p-6 lg:basis-1/3">
                <div className="flex flex-row gap-4 items-center w-full">
                    <Link href="/" className="font-sans font-black !text-white text-3xl !no-underline">BRD<span className="text-rose-500">25</span></Link>
                    <Pill text="Midtown NYC" uri="https://chaincode.com" />
                    
                </div>
                <button 
                    onClick={toggleMenu}
                    className="lg:hidden text-white hover:text-gray-300 transition-colors cursor-pointer"
                    aria-label="Toggle menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3.75 10.5A.75.75 0 0 1 3 9.75V3.752a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75V9.75a.75.75 0 0 1-.75.75h-6Zm10.5 0a.75.75 0 0 1-.75-.75V3.752a.75.75 0 0 1 .75-.75h5.998a.75.75 0 0 1 .75.75V9.75a.75.75 0 0 1-.75.75H14.25ZM3.75 21a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-6Zm10.5 0a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75h5.998a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H14.25Z"/>
                    </svg>
                </button>
            </div>
            <ul className={`bg-black/20 transition-all duration-300 ease-in-out w-full ${
                isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            } lg:max-h-none lg:opacity-100 lg:overflow-visible lg:bg-transparent lg:flex lg:flex-row lg:basis-2/3 lg:justify-end lg:pr-3`}>
            {headerMenu.map((item, index) => (
                <li key={index}>
                    <a 
                        href={item.uri} 
                        className="!text-white !no-underline py-4 px-4 block hover:bg-black/20 active:bg-black/20 lg:px-3 lg:hover:bg-black/10 lg:active:bg-black/10"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {item.name}
                    </a>
                </li>
            ))}
            </ul>
        </header>
    )
}