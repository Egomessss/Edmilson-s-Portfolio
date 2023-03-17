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
    <div className="  bg-[#101010]">
      <head>
        <title>Edmilson's Portfolio</title>
      </head>
      {/* border-l-4 border-neongreen */}
      <div className="px-20 bg-hero bg-no-repeat bg-cover bg-center">
        <Navbar />
        <Hero />
      </div>
      <div className="mx-auto px-20">
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contacts />
        <Footer />
      </div>
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
