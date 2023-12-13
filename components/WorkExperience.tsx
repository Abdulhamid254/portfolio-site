"use client"

import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type WorkExperience = {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  logos: string[];
};

type Props = {};

const workExperiences: WorkExperience[] = [
  {
    title: "Fullstack Developer",
    company: "Cana Hospital Limited",
    startDate: "28th FEB 2022",
    endDate: "-",
    achievements: [
      "Revised,Modular & updated old code bases to modern development Standards, reducing 40% operating costs",
      "Increased the code coverage with tests from 35% to 50%",
      "Increased the Sprint team velocity from 40 to 60. This positively impacted the team's backlog tasks and reduced burnouts",
    ],
    logos: ["/graphql.png", "/mysql.png", "/nextjs.png", "/postgres.png","/springboot.png"],
  },
  {
    title: "Frontend Developer",
    company: "Eclectics International Limited",
    startDate: "31ST JAN 2022",
    endDate: "17th NOV 2022",
    achievements: [
      "Reduced the number of reported bugs from 2.1 to 1.0 (per account per month)",
      "Delivered Bulk Payout service to production with live customer service",
      "Reduced  customer onboarding time from an average of 2 sprints.i.e  from 4weeks to 1 sprint",
    ],
    logos: ["/angular.png", "/graphql.png", "/mysql.png", "/nextjs.png", "/postgres.png", "/nestjsz.png","/springboot.png"],
  },
  // {
  //   title: "Frontend Software Developer - Attachee",
  //   company: "Another Company",
  //   startDate: "1st APRIL 2019",
  //   endDate: "8th NOV 2019",
  //   achievements: [
  //     "Developing functional specifications and system design specification for web systems.",
  //     "Actual system Implementation through coding and functional creation.",
  //     "Actual system Implementation through coding and functional creation",
  
  //   ],
  //   logos: ["/css.png", "/html.png", "/js.png", "/git.png"],
  // },
  // Add more work experiences as needed
];

export default function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft  md:flex-col max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl mb-8">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {workExperiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            company={experience.company}
            startDate={experience.startDate}
            endDate={experience.endDate}
            achievements={experience.achievements}
            logos={experience.logos}
          />
        ))}
      </div>
    </motion.div>
  );
}