import About from "./components/About"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"

function App() {
  return (
    <div className="max-w-[1240px] mx-auto px-4">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education/>
      <Experience />
    </div>
  )
}

export default App
