import React from "react"
import { AiFillGithub } from "react-icons/ai"
import Navigation from "./Navigation"

import ProjectsCards from "./ProjectsCards"
import ProjectsCardsBig from "./ProjectsCardsBig"
import Sidebar from "./Sidebar"
import Stack from "./Stack"

function Projects() {
  return (
    <div className="flex min-h-screen flex-col bg-[#1E1E1E]">
      {/*  */}
      <body className="flex flex-grow">
        {/* sidebar */}
        <Sidebar />

        <div className="w-full">
          <Navigation />
          <main className="relative flex flex-col  h-full w-full  items-center justify-center">
            <h1 className="py-2">Projects</h1>
            <a
              className="inline-block"
              href="https://github.com/Egomessss/Egomessss"
              target="_blank"
            >
              <AiFillGithub className="h-[50px] text-4xl hover:fill-current hover:text-neongreen" />
            </a>
            <ul className="grid h-[1000px] w-[1500px] grid-cols-9 grid-rows-5 border-2 border-white">
              <li className="col-span-6 row-span-3 h-full w-full border-2 border-white">
                <ProjectsCards />
              </li>
              <li className="col-span-3 row-span-3 border-2 border-white"></li>
              <li className="col-span-3 row-span-2 border-2 border-white"></li>
              <li className="col-span-3 row-span-2 border-2 border-white"></li>
              <li className="col-span-3 row-span-2 border-2 border-white"></li>
            </ul>
            {/* <div className="flex flex-col md:flex-row gap-2 md:gap-0 md:flex row mt-4 flex-wrap justify-center items-center">
        <ProjectsCardsBig />
        <ProjectsCards />
        <ProjectsCards />
      </div> */}
          </main>
        </div>
      </body>

      <footer className="h-6 bg-[#007ACC]"></footer>
    </div>
    // <div className="h-screen">

    // </div>
  )
}

export default Projects
