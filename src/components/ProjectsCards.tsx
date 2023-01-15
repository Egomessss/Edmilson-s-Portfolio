import React from "react"
import Stack from "./Stack"
import StackProjects from "./StackProjects"

function ProjectsCards() {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="src\assets\images\project1.webp"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h3>
          <StackProjects />
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className="flex gap-6">
        <a
          href="#_"
          className="relative px-4 py-2 font-bold text-black group"
        >
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-neongreen group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full border-2 border-white"></span>
          <span className="relative font-aquirebold">Live Demo</span>
        </a>
        <a
          href="#_"
          className="relative  px-4 py-2 font-bold text-black group"
        >
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-neongreen group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full border-2 border-white"></span>
          <span className="relative font-aquirebold">Code</span>
        </a>
        </div>
       
      </div>
    </div>
  )
}

export default ProjectsCards
