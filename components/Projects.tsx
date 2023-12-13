"use client"

import { motion } from "framer-motion"
import Image from "next/image";


type Props = {};

function Projects({}: Props) {
  const projects = [
    {
   
      img: "/capture 1.png",
      title: "Agri-Marketplace",
      description: "Developed an  Agri-marketplace solution for latia kenya.Platform where agri-buisness can access services under one roof. The website was in-charge of ensuring farmers access markets, farm products, technology, financial services and workforce solutions.",
       
    },
    {
      
      img: "/kcb.png",
      title: "KCB FieldAgent Portal",
      description: "Played a pivitol role in development of KCB field agent portal.Web-application that keeps tabs of field agents on the field based on their geo-location(Counties/Constituencies/Wards).Also keeps tracks of the onboarded agency-banking users under regional field-agents.",
    },
    {
    
      img: "/weather.png",
      title: "Weather Forecast",
      description: "A simple Weather Forecast app built using Nextjs,Tremor,Graphql,ApolloClient,stepzen, Tailwind CSS, OpenWeather API & HERE Geocoding API. The project is currently Open-Sourced, ready for use for the community.",
    },
    {
   
      img: "/airbnb.png",
      title: "AirBnb web application",
      description: "An Airbnb web application built for tracking customers’ enquiries and bookings for Holidays.Keeps record for the overall time of the stay as well as the number  of guests.Utilizing Nextjs, TypeScript and tailwind css.",
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

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
            initial={{ 
              y: -300,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once: true }}
             src={project.img} alt="" width={500} height={70} />
             {/* <Image  src={project.img} alt="" width={150} height={100} /> */}

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                {/* <span className="underline decoration-[#F7AB0A]">
                  {i + 1} of {projects.length}
                </span> */}
                {project.title}
              </h4>
              
              <p className="text-2xl text-center text-gray-500 md:text-left">
                  {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"/>
    </motion.div>
  );
}

export default Projects;
