import { useState } from "react"
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai"
import { SiGmail } from "react-icons/si"
import About from "./components/About"
import Contacts from "./components/Contacts"
import Education from "./components/Education"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div className="bg-[#0E0E0E]">
      <Hero />
      <div className="mx-auto px-4 md:px-20 lg:px-40 xl:px-52">
        <About />
        <Education />
        <Projects />
        <Contacts />
      </div>
      <Sidebar />
    </div>
  )
}

export default App
