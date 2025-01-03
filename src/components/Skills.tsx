"use client"
import React from 'react'
import { skills } from '../app/data/skills'
import { motion } from 'framer-motion'
import { text } from 'stream/consumers'
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

export const Skills = () => {

    const words = [
        {
            text: "Skills",
            className: "text-purple-500 dark:text-purple-500 text-center"
        },
        {
            text: "and Tech Stack",
            className: "text-purple-500 dark:text-purple-500 text-center"
        }
    ]

  return (
    
    <div className='text-center flex justify-center align-center items-center flex-col'>
      <h1 className='text-center text-purple-500 text-[4rem] font-bold'>
        <TypewriterEffectSmooth className='text-center' words={words} />
        </h1>
      <motion.div className='flex gap-10 items-center justify-center flex-wrap mt-10'>
       {skills.map((skill,index)=>(
        
        <div key={index} className=''>
            <div className='flex flex-col justify-center align-center items-center bg-purple-800/5 border-[1px] border-purple-800 w-40 h-40 p-5 rounded-xl hover:bg-purple-500/30 transition duration-1000 ease-out'>
                <img src={skill.image} className='w-16 h-16 object-cover' alt='image1'/>
                <h4 className='font-extrabold text-1xl text-purple-500'>
                    {skill.name}
                </h4>
            </div>
            </div>
       ))}

        </motion.div>
    </div>
  )
}


