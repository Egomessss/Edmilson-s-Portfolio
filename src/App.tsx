import { FaRegCircle } from "react-icons/fa"
import About from "./components/About"
import Contacts from "./components/Contacts"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
// <div className="max-w-[1240px] mx-auto px-4 relative snap-y snap-mandatory h-screen w-screen overflow-x-hidden">
function App() {
  return (
    <div className="max-w-[1240px] mx-auto px-4">
      <head>
        <title>Edmilson's Portfolio</title>
      </head>
      <body>
        <header>
          <Navbar />
        </header>
        <section>
          <Hero />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Education />
        </section>

        <section>
          <Projects />
        </section>
        <section>
          <Contacts />
        </section>
        <footer>
          <Footer />
        </footer>
      </body>
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
