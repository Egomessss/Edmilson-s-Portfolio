import React from "react"
import { AiFillGithub } from "react-icons/ai"
import ProjectsCards from "./ProjectsCards"
import ProjectsCardsBig from "./ProjectsCardsBig"

function Projects() {
  return (
    <div className="md:h-screen mt-40 md:mt-0">
      <h2 className="py-2">Projects</h2>
      <a
        className="inline-block"
        href="https://github.com/Egomessss/Egomessss"
        target="_blank"
      >
        <AiFillGithub className="text-4xl hover:fill-current hover:text-neongreen h-[50px]" />
      </a>
      <div className="flex flex-col md:flex-row gap-2 md:gap-0 md:flex row mt-4 flex-wrap justify-center items-center">
        <ProjectsCardsBig />
        <ProjectsCards />
        <ProjectsCards />
      </div>
    </div>
  )
}

export default Projects
