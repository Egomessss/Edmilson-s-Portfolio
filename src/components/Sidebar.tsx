import React, { useState } from "react"
import { AiOutlineArrowUp, AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { SiGmail } from "react-icons/si"

function Sidebar() {
  const [copied, setCopied] = useState(false)

  const handleGmail = () => {
    navigator.clipboard.writeText("ed.gomes97@gmail.com")
    setCopied(true!)
  }

  return (
    <div className="fixed left-0 top-96 z-50 hidden flex-col space-y-3 bg-transparent px-2  md:flex">
      <a href="#">
        <AiOutlineArrowUp className="border-r-2 px-1  md:text-4xl lg:text-5xl" />
      </a>
      <button
        aria-label="copy gmail to clipboard"
        onClick={handleGmail}
        className="flex h-16 w-full items-center gap-2  text-start">
        {copied ? (
          <p className="border-r-2 px-1 font-bold">Copied!</p>
        ) : (
          <SiGmail className="border-r-2 px-1  md:text-4xl lg:text-5xl" />
        )}
      </button>
      <a
        href="https://www.linkedin.com/in/egomessss/"
        target="_blank"
        aria-label="link to linkedin"
        className="flex h-16  w-full items-center gap-2  text-start">
        <AiFillLinkedin className="border-r-2 px-1  md:text-4xl lg:text-5xl" />
      </a>
      <a
        href="https://github.com/Egomessss/Egomessss"
        target="_blank"
        className="flex h-16 w-full items-center gap-2  text-start">
        <AiFillGithub className="border-r-2 px-1  md:text-4xl lg:text-5xl" />
      </a>
    </div>
  )
}

export default Sidebar
