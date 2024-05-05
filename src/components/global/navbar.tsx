import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ModeToggle } from '../toggles/mode-toggle'

type Links= {
    name: string,
    path: string
}

type MainNavbarProps = {
    links: Links[]

}

const MainNavbar = () => {

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Connect', path: '/connect' },
        { name: 'Listings', path: '/listings' },
        { name: 'Profile', path: '/profile' },
        { name: 'Blog', path: '/blog' },
        
    ]

  return (
    <div className='flex items-center justify-between w-full fixed py-2 pl-2 pr-8 bg-transparent backdrop-blur-md text-foreground z-[1000]'>
        <div className='flex items-center gap-2'>
            <ModeToggle />
            <h3 className='text-foreground'>Roomeo.</h3>
        </div>

        <nav className='hidden md:inline'>
            <ul className='flex items-center gap-8'>
                {links.map((link,index) => (
                    <li key={index} className='hover:scale-105 transition duration-300'>
                        <Link href={link.path} className='text-lg hover:text-muted dark:hover:text-primary transition duration-300'>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default MainNavbar