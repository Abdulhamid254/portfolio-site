/* eslint-disable react/no-unescaped-entities */
"use client"

import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function About ({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5}}
     
     className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="top-24 uppercase tracking-[10px] text-gray-500 text-2xl md:absolute ">
            About
        </h3>

        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x:0}}
          viewport={{once: true}}
          src='/abdulpic.jpg'
          className='mb-5 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'/>


          <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4-xl font-semibold'>
                Here is a{" "}
                <span className='underline decoration-[#F7AB0A]/50'>
                    little
                </span>
                {" "} background
            </h4>
            <p className='text-base'>
              Hi there,my name is Abdulhamid Medi(yes, like late Koffi Annan the mediator) Nassur.I am a Software Engineer previous worked at Eclectics International Limited as a Frontend developer.Majorly in Angular and Nextjs on the frontend.
              Then on the Backend Nestjs and Java Springboot.I graduated from Multimedia University with a Bachelors degree in Information Technology.

              I am an intentive mid-level fullstack developer(leveraging on Angular/Nextjs and SpringBoot) who creates great web applications designs.
              I'm also known for architecting customer-facing prducts that deliver unique experiences while complying with internal coding standards and technical requirements.
            </p>

          <div className='flex items-center space-x-4'>
            <SocialIcon url="https://github.com/Abdulhamid254" />
            <SocialIcon  url="https://www.linkedin.com/in/abdulhamid-nassur-350198134/"  />
            <SocialIcon network="twitter" bgColor="#3a3939" />
          </div>

          </div>
    </motion.div>
  )
}