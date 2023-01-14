import React from "react"
import { motion } from "framer-motion"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackGroundCircles from "./BackGroundCircles"

function Hero() {
  const [text, count] = useTypewriter({
    words: ["Tech Lover", "Problem Solver"],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div>
 <motion.div
    initial={{
        x:500,
        opacity:0,
        scale:0.5,
    }}
    animate={{
        x:0,
        opacity:1,
        scale:1,
    }}
    transition={{duration:1}}>

    </motion.div>
    
    <motion.div
initial={{
    x:500,
    opacity:0,
    scale:0.5,
}}
animate={{
    x:0,
    opacity:1,
    scale:1,
}}
transition={{duration:1}}>
    {/* adicionar text a dizer"this is the story of a developer who could center a div in his first try" no inicio depois falho a center div , depois mete no centro, e digo "ok first try is impossible, but he gets the job done" isto em h1 acima da animacao do hero e depois dá fade out*/}
    <div className="h-screen flex flex-col space-y-12 items-center justify-center text-center overflow-hidden">
      <BackGroundCircles />
      <img
        src=""
        alt=""
      />
      <h1>Hi I'm Edmilson Gomes</h1>
      <h2>
        <span>{text}</span>
        <Cursor cursorColor="white" />
      </h2>
    </div>
    </motion.div>
    </div>
   
  )
}

export default Hero
 