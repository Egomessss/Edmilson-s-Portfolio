import { useState } from "react"
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai"
import { MdDoneOutline } from "react-icons/md"
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
    setCopied((prev)=>!prev)
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
          <a
            className="group transition-all duration-300 ease-in-out "
            href="#">
            <AiOutlineArrowUp className="border-r-2 bg-gradient-to-r  from-white to-white  bg-[length:0%_2px] bg-left-bottom bg-no-repeat px-1 text-5xl transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]" />
          </a>

          <button onClick={handleGmail} className="group transition-all duration-300 ease-in-out ">
            {copied ? (
              <MdDoneOutline className="border-r-2  bg-gradient-to-r from-white  to-white bg-[length:0%_2px]  bg-left-bottom bg-no-repeat px-2 text-5xl font-bold transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]"/>
               
             
            ) : (
              <SiGmail className="border-r-2 bg-gradient-to-r  from-white  to-white bg-[length:0%_2px]  bg-left-bottom bg-no-repeat px-2 text-5xl  transition-all duration-500 ease-out  group-hover:bg-[length:100%_2px]" />
            )}
          </button>
          <a
            className="group transition-all duration-300 ease-in-out "
            href="https://www.linkedin.com/in/egomessss/">
            <AiFillLinkedin className="border-r-2 bg-gradient-to-r  from-white to-white  bg-[length:0%_2px] bg-left-bottom bg-no-repeat px-1 text-5xl transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]" />
          </a>
          <a
            className="group transition-all duration-300 ease-in-out "
            href="https://github.com/Egomessss/Egomessss">
            <AiFillGithub className="border-r-2 bg-gradient-to-r  from-white to-white  bg-[length:0%_2px] bg-left-bottom bg-no-repeat px-1 text-5xl transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]" />
          </a>

          <a
            className="group transition-all duration-300 ease-in-out "
            href="http://tecedblog.com/">
            <div className="flex flex-col  items-center justify-center  gap-2 border-r-2 bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-left-bottom bg-no-repeat px-1 text-xs transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
              <HiPencilAlt className="text-4xl" />
              <span className="font-bold">BLOG</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
