import About from "./components/About"
import Contacts from "./components/Contacts"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  return (
    <div className="max-w-[1240px] mx-auto px-4">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
