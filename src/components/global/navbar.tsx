import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'

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
    <div className='flex items-center justify-between w-full fixed p-3 bg-transparent text-foreground z-[1000]'>
        <div>
            <h3 className=''>Roomeo.</h3>
        </div>

        <nav className='hidden md:flex items-center gap-8 text-lg'>
            <ul className='flex items-center gap-8'>
                {links.map((link,index) => (
                    <li key={index} className='hover:scale-105 transition duration-300'>
                        <Link href={link.path} className='text-md hover:text-secondary transition duration-300'>{link.name}</Link>
                    </li>
                ))}
            </ul>
            <Link href='/sign-in'>
                <Button className='text-md text-foreground'>Sign In</Button>
            </Link>
        </nav>
    </div>
  )
}

export default MainNavbar