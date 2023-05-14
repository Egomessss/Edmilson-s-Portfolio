import { useState } from "react"
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai"
import { HiPencilAlt } from "react-icons/hi"
import { SiGmail } from "react-icons/si"
import About from "./components/About"
import Contacts from "./components/Contacts"
import Education from "./components/Education"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Navbar from "./components/Navbar"

function App() {
  const [copied, setCopied] = useState(false)

  const handleGmail = () => {
    navigator.clipboard.writeText("ed.gomes97@gmail.com")
    setCopied(true!)
  }

  return (
    <div className="scroll-smooth">
      <Hero />
      <div className="mx-auto px-4 md:px-20 xl:px-52">
        <About />
        <Education />
        <Projects />
        <Contacts />
      </div>
      <div>
        <div className="fixed left-0 top-96 z-50 hidden flex-col space-y-3 bg-transparent px-5 py-3 md:flex">
          <a href="#">
            <AiOutlineArrowUp className="border-r-2 px-1  text-5xl hover:fill-neongreen" />
          </a>
          <button
            aria-label="copy gmail to clipboard"
            onClick={handleGmail}
            className="flex h-16 w-full items-center gap-2  text-start">
            {copied ? (
              <p className="border-r-2 px-1 font-bold">Copied!</p>
            ) : (
              <SiGmail className="border-r-2 px-2  text-5xl hover:fill-neongreen" />
            )}
          </button>
          <a
            href="https://www.linkedin.com/in/egomessss/"
            target="_blank"
            aria-label="link to linkedin"
            className="flex h-16  w-full items-center gap-2  text-start">
            <AiFillLinkedin className="border-r-2 px-1  text-5xl hover:fill-neongreen" />
          </a>
          <a
            href="https://github.com/Egomessss/Egomessss"
            target="_blank"
            className="flex h-16 w-full items-center gap-2  text-start">
            <AiFillGithub className="border-r-2 px-1  text-5xl hover:fill-neongreen" />
          </a>
          <a
            href="http://tecedblog.com/"
            target="_blank"
            className="flex w-full  flex-col items-center gap-2  border-r-2 px-1 text-start text-xs font-bold hover:text-neongreen ">
            <HiPencilAlt className=" text-4xl hover:fill-neongreen" />
            <span>BLOG</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
