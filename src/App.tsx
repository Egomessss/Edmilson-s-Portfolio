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
      <div className="px-52 bg-hero bg-no-repeat bg-cover bg-center">
        <Navbar />
        <Hero />
      </div>
      <div className="mx-auto px-52">
        <About />
        <Education />
        <Projects />
        <Contacts />
        <Footer />
      </div>
    </div>
  )
}

export default App

