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
        backgroundImage: 'url("/binary.gif")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        position: 'relative', // Make sure the background covers the entire viewport
      }}
    >
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircle />
        <Image
        src="/profilepic.jpg" 
        alt=""
        className="h-32 w-32 rounded-full relative mx-auto object-cover"
        width={60}
        height={60}
      />
      
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
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
