import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='text-black'>
          <Image src={"/img/logo.png"} alt="HelpDel Logo" width={100} height={18} />
    </div>
  )
}

export default Logo