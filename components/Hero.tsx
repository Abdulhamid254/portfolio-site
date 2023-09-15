'use client'

import  { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircle from "./BackgroundCircle"
import Image from "next/image";


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
        <h1>
           <span>{text}</span>
           <Cursor cursorColor='#F7AB0A'/>
        </h1> 
        </div> 
    </div>
</div>
</>
  )
}
