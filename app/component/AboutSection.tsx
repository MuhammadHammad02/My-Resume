import React from 'react'
import Image from 'next/image'

const skills = [
    { skill: "HTML" },
    { skill: "Tailwind CSS" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "Python" },
    { skill: "Next.js" },
    { skill: "Git" },
    { skill: "GitHub" },
    { skill: "Jupyter Notebooks" },
  ]

const AboutSection = () => {
  return (
   <section id='about'>
    <div className='my-12 pb-12 md:pt-16 md:pb-48'>
        <h1 className='text-center font-bold text-4xl pb-2'>About Me</h1>
        <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10'>
            <div className='md:w-1/2'>
                <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>Get to know me</h1>
                <p>My name is Muhammad Hammad I am switching my career in Emerging Technology. I have learned <span className='text-yellow-600 font-semibold'>Typescript , Next.Js 13 and Tailwind CSS </span> 
                I have created<span className='text-yellow-600 font-semibold'> Panaverse Dao </span> and <span className='text-yellow-600 font-semibold'> PIAIC </span> websites.   

                </p>
                <br/>
                <p>
                 I have completed my MBA from Karachi University Business School in 2018. I have 5 years of experience in Accounts in The Citizens Foundation.
                </p>
                </div>
                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>My Skills</h1>
                    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-yellow-600 px-4 py-2 mr-2 mt-2 text-gray-700 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image src="/b.png" alt="" width={325} height={325} className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"/>
                </div>
                
        </div>
        
    </div>
    
    
   </section>
  )
}

export default AboutSection
