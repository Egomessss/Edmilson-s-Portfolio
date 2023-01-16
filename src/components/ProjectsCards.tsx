import React from "react"

function ProjectsCards() {
  return (
    <div className="flex flex-row max-w-sm md:max-w-xl max-h-82 relative group">
      <img
        className="pointer"
        src="src\assets\images\project1.webp"
        alt=""
      />
      {/* Hover effect */}
      <div className=" flex flex-col max-w-sm h-full opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 justify-center items-center bg-gray-800">
        <h3 className="text tracking-tight text-gray-900 dark:text-white">
          Amazon E-commerce Store Clone
        </h3>
        <p className="text-neongreen m-2">
          Typescript | React | Tailwind | Api{" "}
        </p>
        <p className="text-white text-center">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className="flex justify-center align-middle p-4 gap-6">
          <a
            href="#_"
            className="relative px-4 py-2  text-black group"
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
