import React from "react"
import { TbError404 } from "react-icons/tb"

function Experience() {
  return (
    <div className="h-screen">
      <h2 className="text-3xl">Experience</h2>
      <div className="flex flex-col justify-center items-center">
        <TbError404 className="text-9xl" />
        <p className="text-3xl text-center">
          Uncaught typeError : cannot set property “innerHTML” of null at
          &lt;workExperience&gt; Hire me to fix this error in the future.
        </p>
      </div>
    </div>
  )
}

export default Experience
