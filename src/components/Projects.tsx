import React from "react"
import { AiFillGithub } from "react-icons/ai"
import ProjectsCards from "./ProjectsCards"
import ProjectsCardsBig from "./ProjectsCardsBig"

function Projects() {
  return (
    <div className="h-screen">
      <h1 className="py-2">Projects</h1>
      <a
        className="inline-block"
        href="https://github.com/Egomessss/Egomessss"
        target="_blank"
      >
        <AiFillGithub className="h-[50px] text-4xl hover:fill-current hover:text-neongreen" />
      </a>
      <ul className="grid h-[1000px] grid-cols-8 grid-rows-4 border-2 border-white">
        <li className="col-span-8 row-span-2 border-2 border-white h-full w-full">
          <ProjectsCards />
        </li>
        <li className="col-span-4 row-span-2 border-2 border-white"></li>
        <li className="col-span-2 border-2 border-white"></li>
        <li className="col-span-2 border-2 border-white"></li>
        <li className="col-span-2 border-2 border-white"></li>
        <li className="col-span-2 border-2 border-white"></li>
      </ul>
      {/* <div className="flex flex-col md:flex-row gap-2 md:gap-0 md:flex row mt-4 flex-wrap justify-center items-center">
        <ProjectsCardsBig />
        <ProjectsCards />
        <ProjectsCards />
      </div> */}
    </div>
  )
}

export default Projects
