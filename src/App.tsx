import { FaRegCircle } from "react-icons/fa"
import About from "./components/About"
import Contacts from "./components/Contacts"
import Education from "./components/Education"
import Hero from "./components/Hero"
import Projects from "./components/Projects"

// <div className="max-w-[1240px] mx-auto px-4 relative snap-y snap-mandatory h-screen w-screen overflow-x-hidden">
function App() {
  return (
    <div className="z-0 h-screen px-4 md:snap-y md:snap-mandatory md:overflow-scroll md:px-20">
      <head>
        <title>Edmilson's Portfolio</title>
      </head>
      <section className="md:snap-start">
        <Hero />
      </section>
      <section className="md:snap-start">
        <About />
      </section>
      <section className="md:snap-start">
        <Education />
      </section>
      <section className="md:snap-start">
        <Projects />
      </section>
      <section className="md:snap-start">
        <Contacts />
      </section>
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
// add side tabs that is sticky
