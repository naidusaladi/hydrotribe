import React from 'react'
import logo from '../../assets/hy.png'
import { FaPeopleGroup } from "react-icons/fa6";
import { BiBullseye } from "react-icons/bi";

const About = () => {
  return (
    <>
    <div className='md:h-lvh flex justify-center py-3 md:items-center ' id='about' >
    
    <div className=' w-full px-5 md:w-1/2 md:px-0'>
      <h1 className='font-bold text-4xl py-4'><span className='text-green-500 font-bold'>About </span>HydroTribe <span className='font-serif text-5xl text-green-500'>.</span></h1>
      <p className='text-xl'>At hydrotribe, we are passionate about revolutionizing agriculture through innovative solutions. Specializing in customized indoor hydroponics, vertical faring & terrace gardening, we are committed to sustainability,efficiency & the future of food production</p>
      <h2 className='flex items-center gap-3 font-bold text-3xl py-4'><FaPeopleGroup className='text-5xl'/><span className='text-green-500 font-bold'>Our</span> Mission <span className='font-serif text-5xl text-green-500'>.</span></h2>
      <p className='text-xl'>We provide A to Z assistance in growing easy to maintain food gardens and air pockets using context-apt technology and services.</p>

      <h2 className='flex items-center gap-3 font-bold text-3xl py-2'><BiBullseye className='text-5xl' /><span className='text-green-500 font-bold'>Our</span> Vision <span className='font-serif text-5xl text-green-500'>.</span></h2>
      <p className='text-xl'>We dream of a world where food is free of poisonous chemicals, where everyone has access to clean food and air. We dream of a nation sparkling with a massive tribe of home farmers.</p>
          
    </div>
    <div className=' hidden md:block' >
        <img  className='' src={logo} width={400}/>
    </div>
    </div>
    </>
  )
}

export default About
