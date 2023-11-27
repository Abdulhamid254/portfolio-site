/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client"

import { motion } from "framer-motion"

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0  w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opcity duration-200 overflow-hidden">
        <motion.img
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{ duration: 1.2}}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{ once: true}}
        className="w-30 h-30 rounded-full xl:w-[200px} xl:h-[200px] object-cover object-center"
        src="/west.png" 
        alt=""
       
        />

            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">Frontend Developer</h4>
                <p className="font-bold text-2xl mt-1">Eclectics International Limited</p>
                <div className="flex space-x-2 my-2">
                    <img
                     className="h-10 w-10 rounded-full"
                     src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
                     alt=""/>

                <img
                     className="h-10 w-10 rounded-full"
                     src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
                     alt=""/>

                <img
                     className="h-10 w-10 rounded-full"
                     src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
                     alt=""/>    
                </div>
           <p className="uppercase py-5 text-gray-300">
            Started work.7th MARCH 2022 - Ended.17th NOV 2022
           </p>

           <p className="uppercase py-5 text-gray-300">
            Started work.1st APRIL 2019 - Ended.8th NOV 2019
           </p>


           <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>Reduced the number of reportedbugs from 2.1 to 1.0(per account per month)</li>
            <li>Increased the code coverage with test from 355 to 50%</li>
            <li>Increased the Sprint team velocity fro 40 to 60.This positively impacted the team's backlog tasks and reduced burnouts</li>
           </ul>

            </div>
            

    </article>
  )
}