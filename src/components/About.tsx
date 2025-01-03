"use client";
import React from 'react'
import { TypewriterEffect } from './ui/typewriter-effect';

export const About = () => {
    const words = [
        {
            text:"Hello,",
            className: "text-blue-500 dark:text-purple-500",
        },
        {
            text:"I'm",
            className: "text-blue-500 dark:text-purple-500",
        },
        {
            text:"Radha",
            className: "text-blue-500 dark:text-purple-500",
        },
        {
            text:"Sharma",
            className: "text-blue-500 dark:text-purple-500",
        }
    ];
  return (
    <div className='py-10 bg-gray-900 flex flex-col gap-2 pl-2 ml-2 mt-24 '>
      <h1 className='text-2xl font-bold'><TypewriterEffect className='text-left ml-4' words={words} /></h1>
      <div className='flex'>
        <p className='leading-relaxed text-base ml-4'>
         A passionate and results-driven Full Stack Developer currently in my final year of B.Tech at GLA University, Mathura. With over <br></br>one years of industry experience in web development, I specialize in crafting dynamic and scalable applications using the MERN stack, <br></br>Next.js, Docker, and modern UI frameworks like Tailwind CSS and ShadCN.<br></br><br></br>  
        I am currently working as a Software Developer Intern at Pankh.Ai and a former SDE Intern at Valiance Solutions, where I honed my skills in building and optimizing large-scale applications using JavaScript, TypeScript, React, and Node.js. These experiences have enabled me to deliver innovative and user-friendly solutions while collaborating with cross-functional teams.  
        <br></br><br></br>In addition to development, I am deeply committed to enhancing my problem-solving abilities through data structures and algorithms, actively solving challenges on LeetCode. 
        {/* Currently, I am working on two exciting projects - VideoTube, a video streaming website inspired by YouTube, and a client project where I am developing an automation tool for creating Workflows.  */}
        Driven by curiosity and discipline, I thrive in collaborative environments, working diligently to deliver cutting-edge applications.
        </p>
        <img src='https://i.postimg.cc/hPDy1GG0/dp.jpg' alt='Radha Sharma' className=' about mt-0 mr-16 mb-4 ml-4 '/>
      </div>
    </div>
  )
}


