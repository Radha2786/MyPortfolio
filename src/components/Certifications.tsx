import React from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
// import {certifications} from "../data/certifications";
import { certifications } from "@/app/data/certifications";

export function Certifications() {

  // console.log(projects);
  certifications.map((project,index)=>(
    console.log(project.ImgSrc)
  ))
  const words = [
    {
      text: "Certifications",
      className: "text-purple-500 dark:text-purple-500 text-center text-2xl md:text-4xl lg:text-4xl",
    },
  ];

  return (
    <div className="text-center flex justify-center align-center items-center flex-col mt-16">
      <h1 className="text-center text-purple-500 text-[4rem] font-bold">
        <TypewriterEffectSmooth className="text-center" words={words} />
      </h1>
      <div className="flex gap-10 items-center justify-center flex-wrap mt-10">

      
      {certifications.map((project,index)=>(
        

        <CardContainer key={index} className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-purple-500"
          >
            {project.Name}
          </CardItem>
         
          {/* <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {project.Desc}
          </CardItem> */}
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={project.ImgSrc}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-xl  text-neutral-600 dark:text-gray-300"
          >
            {project.Company}
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-sm text-neutral-600 dark:text-gray-400"
          >
            {project.IssueDate}
          </CardItem>
          <div className="flex justify-between items-center mt-12">
            <CardItem
              translateZ={20}
              as={Link}
              href={project?.Link || "#"}
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white border border-purple-500 dark:border-purple-500 bg-purple-500 dark:bg-purple-500 hover:bg-transparent hover:text-black dark:hover:text-black hover:border-purple-500 dark:hover:border-white"
            >
              View Credential →
            </CardItem>
            
           
          </div>
        </CardBody>
      </CardContainer>

      
      
      )
      
      )}
      </div>

      <div className="text-sm pt-60 sm:mt-20 font-light text-center relative z-20 text-gray-400 max-w-7xl pb-8">
        Thanks for checking out :) | © Radha Sharma
      </div>
      
     </div>
  );
}
