import React from 'react'
import Logo from './Logo'
import { Button } from './ui/button'
import Link from 'next/link'

const AboutNavbar = () => {
  return (
    <div className='flex flex-row justify-between items-center p-4 mx-4 text-textcolor'>
        <div className='flex flex-row items-center'>
            <Logo/>
              <h1 className='text-5xl '>We as Helpdel</h1>
        </div>
        <Link href={"/"}>
        <Button className='text-white bg-textcolor p-6 mr-8 text-xl' >Back To Home</Button>
        </Link>
    </div>
  )
}

export default AboutNavbar