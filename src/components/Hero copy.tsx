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
    <div className="h-screen flex justify-end items-end">
      <div className="w-[800px] h-[400px] flex flex-col space-y-8 items-center justify-center text-center">
        <h1>Hi! I'm Edmilson Gomes</h1>
        <h2 className="">
          <span>{text}</span>
          <Cursor cursorColor="white" />
        </h2>
        <div className="flex gap-2">
          <a
            href="https://www.linkedin.com/in/egomessss/"
            target="_blank">
            <AiFillLinkedin className="text-4xl hover:fill-current hover:text-neongreen" />
          </a>
          <a
            href="https://github.com/Egomessss/Egomessss"
            target="_blank">
            {" "}
            <AiFillGithub className="text-4xl hover:fill-current hover:text-neongreen" />
          </a>
        </div>
        <a
          href="#_"
          className="relative px-6 py-3 font-bold text-black group">
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-neongreen group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full border-4 border-white"></span>
          <span className="relative font-aquirebold">Resume</span>
        </a>
      </div>
    </div>
  )
}

export default Hero


