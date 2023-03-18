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
    <div className="h-[500px] md:h-[700px] md:py-20">
      <div className="flex items-center gap-2">
        <BsArrowReturnRight className="text-3xl text-white" />
        <h2>Looking to reach out?</h2>
      </div>
      <div className="mt-20 flex flex-wrap">
        <button
          onClick={handleGmail}
          className="flex h-16 w-full items-center gap-2  bg-gradient-to-r from-[#4285F4]  via-[#D7322A] to-[#34A853] text-start">
          {/* change the text size */}
          <SiGmail className="border-r-2 px-1 text-4xl md:text-7xl" />
          {copied ? (
            <h1 className="text-4xl text-white md:text-7xl">Copied!</h1>
          ) : (
            <h1 className="text-4xl text-white md:text-7xl">Gmail</h1>
          )}
        </button>
        <button className="flex h-16  w-full items-center gap-2 bg-[#0A66C2] text-start">
          <AiFillLinkedin className="border-r-2 px-1 text-4xl md:text-7xl" />
          <h1 className="text-4xl text-white md:text-7xl">Linkedin</h1>
        </button>
        <button className="flex h-16 w-full items-center gap-2 bg-[#161B22] text-start">
          <AiFillGithub className="border-r-2 px-1 text-4xl md:text-7xl" />
          <h1 className="text-4xl text-white md:text-7xl">Github</h1>
        </button>
      </div>
      <footer className="h-24 py-20">
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
