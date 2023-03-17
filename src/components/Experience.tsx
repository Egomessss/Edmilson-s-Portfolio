import React from "react"
import { TbError404 } from "react-icons/tb"
import computer from "../assets/images/computer.png"
function Experience() {
  return (
    <div className="h-[1200px] relative">
      <h2 className="">Experience</h2>
      <h2>This is where you come in</h2>
      <h2>Are you willing to make your company great ? or greater?</h2>
      <h2>Im here to put in the work to make it happen</h2>
      {/* <div className="mt-24 md:mt-40">
        <img
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src={computer}
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-center flex-col">
            <TbError404 className="text-[200px] mx-auto" />
            <p className="text-center md:w-[700px]">
              Uncaught typeError : Cannot read property of undefined
              “experience” at &lt;workExperience/&gt;{" "}
            </p>
            <span className="underline">
              Hire me to fix this error in the future.
            </span>
          </div>
        </div>
      </div> */}
    </div>
  )
}

// absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
export default Experience
