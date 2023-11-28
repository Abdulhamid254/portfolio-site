"use client"

import { motion } from "framer-motion"
import Image from "next/image";


type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      id: 1,
      img: "/capture 1.png",
      title: "Agrimarketplace solution",
      paragraph: "Description for the Weather App project.",
    },
    {
      id: 2,
      img: "/kcb.png",
      title: "KCB FieldAgent Portal",
      paragraph: "Description for the KCB FieldAgent Portal project.",
    },
    {
      id: 2,
      img: "/kcb.png",
      title: "Weather Forecast",
      paragraph: "A simple Weather Forecast app built using Nextjs,Tremor,Graphql,stepzen, Tailwind CSS, OpenWeather API & HERE Geocoding API. The project is currently Open-Sourced, ready for use for the community.",
    },
    {
      id: 2,
      img: "/kcb.png",
      title: "AirBnb web application",
      paragraph: "An Airbnb web application built for tracking customers’ enquiries and bookings for Holidays utilizing Nextjs, TypeScript and tailwind css",
    },
    // Add more projects as needed
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-35 h-screen"
          >
            <motion.img
            initial={{ 
              y: -300,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once: true }}
             src={project.img} alt="" width={150} height={100} />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                {/* <span className="underline decoration-[#F7AB0A]">
                  {i + 1} of {projects.length}
                </span> */}
                {project.title}
              </h4>
              
              <p className="text-lg text-center md:text-left">

              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;