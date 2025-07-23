'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
export default function contactus() {
    const [isSubmitted, setSubmitted] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [college, setCollege] = useState('')
    const [branch, setBranch] = useState('')
    const [project, setProject] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
       
  }
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat px-4 sm:px-12 py-10 "
      style={{ backgroundImage: "url('/img/Contactpagebg.png')" }}  
    >
    <div className="max-w-4xl mx-auto bg-white bg-opacity-80 p-8 rounded-xl shadow-lg z-10 relative">
    <h1 className="text-3xl font-bold mb-2 text-center">How can we help you ?</h1>
    <p className="text-center text-gray-700 mb-6">
    Let us know by contacting us below, would love to connect !!
    </p>

    <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input placeholder="Name" className="input input-bordered w-full" />
        <input placeholder="Enter Email" className="input input-bordered w-full" />
        <input placeholder="Enter College Name" className="input input-bordered w-full" />
        <input placeholder="Branch" className="input input-bordered w-full" />
        </div>
        <input placeholder="Enter Project Title" className="input input-bordered w-full" />
        <textarea placeholder="Description" rows={5} className="textarea textarea-bordered w-full" />
        <button className="btn btn-primary w-full mt-2">Submit</button>
    </form>
</div>

<div className="flex items-start -ml-14">
    <Image src="/img/java.png" alt="java" width={200} height={252} />
  </div>
  {/* Python */}
  <div className="flex items-start justify-end -mr-2 mt-0">
    <Image src="/img/python.png" alt="python" width={160} height={204} />
  </div>
  {/* Go */}
  <div className="flex items-start pl-12 -mt-12" >
    <Image src="/img/go.png" alt="go" width={220} height={180} />
  </div>
  {/* C */}
  <div className="flex items-end justify-end pr-20">
    <Image src="/img/clogo.png" alt="c" width={130} height={120} />
  </div>
<div className="text-center mt-10 text-gray-800">
  <p className="mb-2">Connect with us on</p>
  <div className="flex justify-center gap-4">
    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
      <img src="/img/linkedin.png" className="h-6 w-6" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noreferrer">
      <img src="/img/instagram1.jpg" className="h-6 w-6" />
    </a>
  </div>
</div>


</div>
  )
}