import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Navbar />

      <div className=" flex flex-col h-full w-full justify-center items-center ">
        <div className="relative h-[600px] w-5/6 flex items-center justify-center">
        
          <Image
            src={"/img/Hero.png"} 
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="z-0 rounded-lg"
          />

      
          <button className="bg-black text-white py-2 px-4 rounded-lg z-20 mt-20">
            Get Started
          </button>
        </div>
        <div className="flex flex-row justify-evenly w-full mx-4 items-center mt-4 space-x-20">
          <h1 className="border border-[#E0E0E0] text-xl text-textcolor px-2 py-6"> Helpdel empowers college students and aspiring developers by offering real-time, industry-ready solutions in Computer Science <br/> and Artificial Intelligence.

We bridge the gap between ideas and execution — many students have innovative concepts but struggle <br/> to build them due to limited exposure or technical challenges. <br/> At Helpdel, our team of experts helps turn those ideas into impactful, working projects.</h1>
          <Link href={"/contactus"}> 
          <Button className="bg-textcolor text-white px-4 py-6 text-lg ">Contact Us!</Button> 
          </Link>
          
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
          <h3 className='text-4xl font-bold text-center'>
          <span></span>
          <span className='text-gray-700'>Your Idea</span>,{' '}
          <span className='text-blue-600'>Our Expertise</span>,{' '}
          <span className='text-teal-800'>One Brilliant Project</span>
      </h3>
      </div>
      </div>
    </>
  );
}
