import React from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { Cursor } from "react-simple-typewriter"

function WindowsModal({ text }) {
  return (
    <div className="absolute top-1/2 left-1/2 flex h-[1000px] w-[1200px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center space-y-8 overflow-hidden bg-inherit text-center">
      <div className="text-left ">
        <h1 className="text-[80px]">Hi,</h1>
        <h1 className="text-[80px] text-white">I'm Edmilson Gomes</h1>
        <h1 className="text-[80px]">A Frontend developer</h1>
      </div>
      <h2 className="h-[200px]">
        <span className="text-white">{text}</span>
        <Cursor cursorColor="white" />
      </h2>
      <div className="flex gap-2">
        <a
          href="https://www.linkedin.com/in/egomessss/"
          target="_blank"
        >
          <AiFillLinkedin className="text-4xl hover:fill-current hover:text-neongreen" />
        </a>
        <a
          href="https://github.com/Egomessss/Egomessss"
          target="_blank"
        >
          {" "}
          <AiFillGithub className="text-4xl hover:fill-current hover:text-neongreen" />
        </a>
      </div>
      <a
        href="#_"
        className="group relative px-6 py-3 font-bold text-black"
      >
        <span className="absolute inset-0 h-full w-full -translate-x-2 -translate-y-2 transform bg-neongreen transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
        <span className="absolute inset-0 h-full w-full border-4 border-white"></span>
        <span className="relative font-aquirebold">Resume</span>
      </a>
    </div>
  )
}

export default WindowsModal
