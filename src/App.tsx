import { FaRegCircle } from "react-icons/fa"
import About from "./components/About"
import Contacts from "./components/Contacts"
import Education from "./components/Education"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

// <div className="max-w-[1240px] mx-auto px-4 relative snap-y snap-mandatory h-screen w-screen overflow-x-hidden">
function App() {
  return (
    <div className="px-20 h-screen snap-y snap-mandatory overflow-scroll z-0">
      <head>
        <title>Edmilson's Portfolio</title>
      </head>
      {/* <section>
        <Navbar />
      </section> */}
      <section className="snap-start">
        <Hero />
      </section>
      <section className="snap-start">
        <About />
      </section>
      <section className="snap-start">
        <Education />
      </section>
      <section className="snap-start">
        <Projects />
      </section>
      <section className="snap-start">
        <Contacts />
      </section>
      <footer className="snap-start">
        <Footer />
      </footer>
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
