import React from "react"
import { TbError404 } from "react-icons/tb"

function Experience() {
  return (
    <div className="mt-12">
      <h2 className="">Experience</h2>
      <div className="mt-40">
        <TbError404 className="text-9xl mx-auto" />
        <p className="text-center">
          Uncaught typeError : cannot set property “innerHTML” of null at
          &lt;workExperience&gt;{" "}
          <span className="underline"> Hire me to fix this error in the future.</span>
        </p>
      </div>
    </div>
  )
}

// absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
export default Experience
