import { FaRegCircle } from "react-icons/fa"
import About from "./components/About"
import Contacts from "./components/Contacts"
import Education from "./components/Education"
import Footer from "./components/Footer"
import Hero from "./components/Hero"

import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import { BsCode, BsCodeSlash } from "react-icons/bs"
import Experience from "./components/Experience"


function App() {
  return (
    <div className="">
      <head>
        <title>Edmilson's Portfolio</title>
      </head>
      {/* border-l-4 border-neongreen */}
      <Navbar />
      <div className="border-l-4 border-neongreen relative my-40 max-w-6xl mx-auto px-8">
        <Hero />
        <About />
        <Education />
        <Experience/>
        <Projects />

        <div></div>
        {/* <div className='absolute left-0 top-52 border-l-4 border-neongreen h-[5100px]'> */}
        <BsCode />
        <BsCodeSlash />
        {/* </div> */}
      </div>
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
// add scroll snap
// add circle for scroll snap
// card animations on hover
// standarize h's and text sizes
// add links to a tags
// improve about me layout
// unbreak mobile
