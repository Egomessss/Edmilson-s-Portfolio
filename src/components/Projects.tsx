import React from "react"
import ProjectsCards from "./ProjectsCards"

function Projects() {
  return (
    <div className="h-screen">
      <h2 className="text-3xl py-5">Projects</h2>
      <div className="flex flex-row gap-6 mt-20 flex-wrap justify-center items-center">
        <ProjectsCards />
        <ProjectsCards />
        <ProjectsCards />
      </div>
    </div>
  )
}

export default Projects
