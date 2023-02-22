import { FaRegCircle } from "react-icons/fa"
import { Route, Routes } from "react-router-dom"
import About from "./components/About"
import Contacts from "./components/Contacts"
import Education from "./components/Education"
import Hero from "./components/Hero"
import Homepage from "./components/Homepage"
import Hero2 from "./components/Homepage"
import Projects from "./components/Projects"

// <div className="z-0 h-screen px-4 md:snap-y md:snap-mandatory md:overflow-scroll md:px-20">
function App() {
  return (
    <div className="">
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />
        <Route
          path="/Hero"
          element={<Hero2 />}
        />
        <Route
          path="/About"
          element={<About />}
        />
        {/* <Route
          path="/"
          element={<Homepage />}
        />
        <Route
          path="/"
          element={<Homepage />}
        />
        <Route
          path="/"
          element={<Homepage />}
        /> */}
      </Routes>
      {/* <head>
        <title>Edmilson's Portfolio</title>
      </head>
      <section className="md:snap-start">
        <Hero2 />
      </section>
      <section className="md:snap-start">
        <Hero />
      </section> */}
      {/* <section className="md:snap-start">
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
      </section> */}
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
