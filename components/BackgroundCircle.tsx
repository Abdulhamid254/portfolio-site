import { motion } from "framer-motion"

type Props = {}

function BackgroundCircle({}: Props) {
  return (
    <motion.div 
     initial={{
        opacity:0, 
     }}
     animate={{
        scale:[1,2,2,3,1],
        opacity: [0.1,0.2,0.4,0.8,0.1,1.0],
        borderRadius:["20%","20%","50%","80%","20%"]
     }}
     transition={{
        duration: 2.5,
     }}
    className="relative flex justify-center items-center">
        <div className="absolute border border-[#3333] rounded-full h-[200] w-[200] mt-52 animate-ping"/>
        <div className="absolute border border-[#3333] rounded-full h-[300] w-[300] mt-52 "/>
        <div className="absolute border border-[#3333] rounded-full h-[500] w-[500] mt-52 "/>
        <div className="absolute border border-[#F7AB0A] opacity-20 rounded-full h-[650] w-[650] mt-52 animate-pulse"/>
        <div className="absolute border border-[#3333] rounded-full h-[800]  w-[800] mt-52"/>
    </motion.div>
  )
}

export default BackgroundCircle