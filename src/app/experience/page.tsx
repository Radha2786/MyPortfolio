import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function ExperiencePage() {
  const data = [
    {
      title: "Valiance Solutions",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-white text-xl md:text-2xl font-bold leading-normal ">
            Software Developer Intern
            <br></br>
            <em className="text-xs text-white font-normal">
              (April 2024 - September 2024)
            </em>
          </p>

          {/* <div className="grid grid-cols-2 gap-4"> */}
          <p className="text-justify text-gray-400 mt-4">
            As an SDE Intern at Valiance Solutions, I am gained invaluable
            experience working with a diverse tech stack including React and
            NodeJS. My responsibilities involved developing and maintaining
            user-centric web applications, collaborating with cross-functional
            teams to design scalable & intutive solutions, and ensuring optimal
            performance and user experience. This opportunity significantly
            enhanced my proficiency in both frontend and backend development,
            and deepened my understanding of software engineering principles to
            deliver robust and high-quality applications.
          </p>
          {/* </div> */}
        </div>
      ),
    },
    {
      title: "Pankh AI",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-white text-xl md:text-2xl font-bold leading-normal ">
            Frontend Developer Intern
            <br></br>
            <em className="text-xs text-white font-normal">
              (November 2024 - Present)
            </em>
          </p>

          {/* <div className="grid grid-cols-2 gap-4"> */}
          <p className="text-justify text-gray-400 mt-4">
            As a Frontend Developer Intern at Pankh AI, I gained invaluable
            experience working with modern technologies such as React and
            Appwrite. My role involved designing and maintaining user-centric
            web applications, collaborating closely with cross-functional teams
            to deliver scalable and intuitive solutions, and optimizing
            performance for seamless user experiences. This opportunity
            significantly enhanced my expertise in frontend development,
            strengthened my problem-solving skills, and deepened my
            understanding of software engineering principles to deliver robust
            and high-quality applications.
          </p>
          {/* </div> */}
        </div>
      ),
    },
  ];
  return (
    <div className="w-full bg-gray-900">
      <Timeline data={data} />
    </div>
  );
}
