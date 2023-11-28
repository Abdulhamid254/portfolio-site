"use client"

import { motion } from "framer-motion"
import { SocialIcon } from 'react-social-icons'

type ProjectsCardProps = {
  img: string;
  title: string;
  description: string;
};

export default function ProjectsCard({
  title,
  description,
  img,

}: ProjectsCardProps) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0  w-[500px] h-[800px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
        <h4 className="text-4xl font-semibold text-center text-gray-500">{title}</h4>
        <p className="text-lg text-center md:text-left mt-3">{description}</p>
      </div>

      {/* <div className='flex items-center space-x-4'>
            <SocialIcon url="https://github.com/Angular-Kenya" />
            <SocialIcon  url="https://www.linkedin.com/company/angular-kenya/?originalSubdomain=ke"  />
            <SocialIcon url="https://twitter.com/angular_kenya" />
          </div> */}
    </article>
  );
}