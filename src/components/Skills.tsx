import React from "react"
import SkillsCard from "./SkillsCards"
import Stack from "./Stack"

function Skills() {
  return (
    <div className="">
      <h2 className="text-3xl mb-5">Why You Should Hire Me</h2>
      <h3 className="text-xl mb-5">Skills & Tech Stack</h3>
      <p className="mb-5">
        When buidling or cloning web projects, I strongly adhere to these
        principles which make my websites both unique and scaleable.
      </p>
      <SkillsCard/>
      <Stack/>
    </div>
  )
}

export default Skills
