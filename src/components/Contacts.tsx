import { useState } from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { BsArrowReturnRight } from "react-icons/bs"
import { SiGmail } from "react-icons/si"

function Contacts() {
  const [copied, setCopied] = useState(false)

  const handleGmail = () => {
    navigator.clipboard.writeText("ed.gomes97@gmail.com")
    setCopied(true!)
  }

  return (
    <div
      id="contacts"
      className="h-[500px] md:h-[700px] md:py-20">
      <div className="flex items-center gap-2">
        <BsArrowReturnRight className="text-3xl text-white" />
        <h2>Looking to reach out?</h2>
      </div>
      <div className="mt-20 flex flex-wrap">
        <button
          aria-label="copy gmail to clipboard"
          onClick={handleGmail}
          className="flex h-16 w-full items-center gap-2  bg-gradient-to-r from-[#4285F4]  via-[#D7322A] to-[#34A853] text-start">
          {/* change the text size */}
          <SiGmail className="border-r-2 px-1 py-2 text-4xl md:text-6xl" />
          {copied ? (
            <h1 className="text-4xl text-white md:text-6xl">Copied!</h1>
          ) : (
            <h1 className="text-4xl text-white md:text-6xl">Gmail</h1>
          )}
        </button>
        <a
          href="https://www.linkedin.com/in/egomessss/"
          target="_blank"
          aria-label="link to linkedin"
          className="flex h-16  w-full items-center gap-2 bg-[#0A66C2] text-start">
          <AiFillLinkedin className="border-r-2 px-1 py-2 text-4xl md:text-6xl" />
          <h1 className="text-4xl text-white md:text-6xl">Linkedin</h1>
        </a>
        <a
          href="https://github.com/Egomessss/Egomessss"
          target="_blank"
          className="flex h-16 w-full items-center gap-2 bg-[#161B22] text-start">
          <AiFillGithub className="border-r-2 px-1 py-2 text-4xl md:text-6xl" />
          <h1 className="text-4xl text-white md:text-6xl">Github</h1>
        </a>
      </div>
      <footer className="h-24 pt-20">
        <span className="block text-white sm:text-center">
          ©
          <a
            href="https://flowbite.com/"
            className="hover:underline">
            Edmilson Gomes 2023
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  )
}

export default Contacts
