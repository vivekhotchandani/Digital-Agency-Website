import React from 'react'
import Image from 'next/image'
// import { ContactForm } from '@/components/ContactForm'

export default function page() {
  return (
    <div className='flex flex-col justify-center items-center -mb-11'>   
      <div className='flex flex-row justify-center items-center mx-8 gap-16 mt-0'>
        <div className='flex flex-col justify-center text-justify '>

          <h1 className='text-[64px] text-black text-justify'>About</h1>
          <h1 className='text-3xl text-[#828282] my-4'>At Helpdel ,We provide Various Solutions to the <br /> increasing need of the future!</h1>
          <h1 className='text-2xl text-black '>
          Helpdel is a company dealing with making solutions for the college project,students are often stuck in their college projects  due to lack of knowledge , domain expertise and various other factors. At Helpdel, we take a step forward and help the students in making their college projects.In this hectic times , the students get lots of tasks Simultaneousy which increase their problems and we provide them good solutions which the students can showcase to their college professors and get to know about their project and learn the things by looking at your practical project .
          Let&apos;s Create a Community of building high end models.
          <br />You come with the Idea , We help you transform.
          </h1>
        </div>
        <Image src={"/img/about.png"} alt='about' width={640} height={555}/>
      </div>
      <div className='my-1'>
      </div>
  <div className='flex flex-row justify-start w-full px-56'>
        <h2 className='text-4xl justify'> Our Motto: </h2>
        </div>
       
        <div className='flex flex-row items-center justify-center '>
        <h3 className='text-5xl font-bold text-center'>
          <span></span>
          <span className='text-green-600'>Your Idea</span>,{' '}
          <span className='text-blue-600'>Our Expertise</span>,{' '}
          <span className='text-red-600'>One Brilliant Project</span>
      </h3>
      </div> 
    <div className='my-2'/>   
 <div className="grid grid-cols-2 grid-rows-2 w-full  h-[32vh] mx-auto  relative my-0">
  
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
       
</div>    
    </div>
    
  )
}
