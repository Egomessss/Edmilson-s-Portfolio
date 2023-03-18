import About from "./components/About"
import Contacts from "./components/Contacts"
import Education from "./components/Education"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

function App() {
  return (
    <div className="bg-[#0E0E0E]">
      <Hero />
      <div className="mx-auto px-4 md:px-20 xl:px-52">
        <About />
        <Education />
        <Projects />
        {/* <Contacts />
        <Footer /> */}
      </div>
    </div>
  )
}

export default App
