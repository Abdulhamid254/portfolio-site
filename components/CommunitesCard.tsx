/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

"use client"

import { motion } from "framer-motion"
import { SocialIcon } from 'react-social-icons'

type CommunitesCardProps = {
  heading: string;
  title: string;
  img: string,
  paragraph: string;
};

export default function CommunitesCard({
  title,
  heading,
  img,
  paragraph, // Fix the parameter name here
}: CommunitesCardProps) {
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
        className="w-80 h-50  xl:w-[600px] xl:h-[100px] object-cover object-center"
        src={img}
        alt=""
      />

      <div className="px-0 md:px-5">
        <h4 className="text-3xl font-bold text-gray-500">{heading}</h4>
        <p className="font-bold text-2xl mt-3">{title}</p>
        <p className="text-2xl mt-3">{paragraph}</p>
      </div>

      <div className='flex items-center space-x-4'>
            <SocialIcon url="https://github.com/Angular-Kenya" />
            <SocialIcon  url="https://www.linkedin.com/company/angular-kenya/?originalSubdomain=ke"  />
            <SocialIcon url="https://twitter.com/angular_kenya" />
          </div>
    </article>
  );
}