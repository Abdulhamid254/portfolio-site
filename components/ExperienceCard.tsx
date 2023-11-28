/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

"use client"

import { motion } from "framer-motion"

type ExperienceCardProps = {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  logos: string[];
};

export default function ExperienceCard({
  title,
  company,
  startDate,
  endDate,
  achievements,
  logos,
}: ExperienceCardProps) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0  w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-30 h-30 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="/west.png" // Assuming logos is an array of image paths
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{title}</h4>
        <p className="font-bold text-2xl mt-1">{company}</p>
        <div className="flex space-x-2 my-2">
          {logos.map((logo, index) => (
            <img
              key={index}
              className="h-10 w-10 rounded-full"
              src={logo}
              alt=""
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work.{startDate} - Ended.{endDate}
        </p>

        {/* Map through achievements */}
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
