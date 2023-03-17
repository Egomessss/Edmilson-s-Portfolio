import React from "react"
import { motion } from "framer-motion"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai"

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "A Frontend Developer That Can Center A Div",
      "Tech Lover",
      "Problem Solver",
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className="h-[1200px] flex justify-end items-center">
      <div className="w-full h-[400px] flex flex-col space-y-8  text-right">
        <h1 className="text-[80px]">Quality is not a act its a habit</h1>
        <h1 className="text-[60px]">Frontend Elevated</h1>
      </div>
    </div>
  )
}

export default Hero
