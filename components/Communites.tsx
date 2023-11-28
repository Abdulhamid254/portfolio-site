"use client"

import { motion } from 'framer-motion'
import CommunitesCard from './CommunitesCard';

type Community = {
  heading: string;
  title: string;
  img: string,
  paragraph: string;
};


type Props = {}

const communites: Community[] = 
[
  {
  heading:"Angular Kenya",
  title:"Member, Angular Kenya",
  img:"/angular ke.png",
  paragraph:"Angular Kenya is a community of developers passionate about sharing knowledge about the Angular framework, experiences, best practices, and guidance while learning from others simultaneously.",
  },

  {
    heading:"NUSO",
    title:"Member, NUSO",
    img:"/nuso.jpg",
    paragraph:"NUSO is a community of university students  & youths passionate about sharing knowledge about the Education, experiences, career-guidance, Mentorships, and guidance  from different career spheres while mentoring upcoming youths.",
    },

]

function Communites({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="h-screen flex relative overflow-hidden flex-col text-lft  md:flex-col max-w-full px-10 justify-evenly mx-auto items-center"
  >
    <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl mb-8">
      Communites
    </h3>

    <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
    {communites.map((community, index) => (
          <CommunitesCard
            key={index}
            heading={community.heading}
            img={community.img}
            title={community.title}
            paragraph={community.paragraph}
           
          />
        ))}
      
    </div>
  </motion.div>
  )
}

export default Communites