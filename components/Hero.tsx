/* eslint-disable @next/next/no-img-element */
'use client'

import  { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircle from "./BackgroundCircle"
import Image from "next/image";
import Link from 'next/link'



type Props ={}

export default function Hero({}: Props) {
    const [text, count ] = useTypewriter({
        words: [
            "Hi, Abdul Here!👋",
            "Guy-Who-Loves-💻-Computers.tsx",
            "<First🤔, solve the problem. Then, write the code/>"
        ],
        loop: true,
        delaySpeed:2000,
    })
  return (
    <>
    <div
      style={{
        // backgroundImage: 'url("https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0ODY0MjkwNg&ixlib=rb-1.2.1&q=85")',
        backgroundImage: 'url("/basics.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        position: 'relative', // Make sure the background covers the entire viewport
      }}
    >
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircle />
        <img
        src='/abdulpic.jpg'
        alt=""
        className="h-40 w-40 rounded-full relative mx-auto object-cover"
      />
      
      <div>
        <h2 className="text-sm uppercase text-white pb-2 tracking-[15px]">
             Software Engineer</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-18">
           <span className="mr-3">{text}</span>
           <Cursor cursorColor='#F7AB0A'/>
        </h1> 

        <div className="pt-5">
            <Link href='#about'>
            <button className="heroButton">About</button>
            </Link>

            <Link href='#experience'>
            <button className="heroButton">Experience</button>
            </Link>

            <Link href='#skills'>
            <button className="heroButton">Skills</button>
            </Link>

            <Link href='#projects'>
            <button className="heroButton">Projects</button>
            </Link>
        </div>
        </div> 
    </div>
</div>
</>
  )
}
