import Image from 'next/image'
import React from 'react'
import png from "../../public/h.png"

const HeroSection = () => {
  return (
    <section id="home">
        <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
            <div className='md:mt-2 md:w-1/2'>
                <Image className='rounded-2xl shadow-2xl' src={png} alt="" width={300} height={300} />

            </div>
            <div className='md:mt-2 w-3/5'>
                <h1 className='font-bold text-4xl mt-6 md:text-7xl md:mt-0'>Hi, I am Muhammad Hammad</h1>
                <p className='text-lg mt-4 mb-6 md:text-2xl'>I am a 
                <span className='font-bold text-yellow-600'> Account Assistant </span>
                in The Citizens Foundation. Now I am learning AI and Web 3.0 Metaverse in PIAIC batch 36 & 38 Karachi.</p>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
