import React from "react"
import SkillsCard from "./SkillsCards"
import Stack from "./Stack"

function Skills() {
  return (
    <div className="mt-8">
      <h2 className="text-3xl mb-5">Why You Should Hire Me</h2>
      <p className="mb-5">
        When buidling or cloning web projects, I strongly adhere to these
        principles which make my websites both unique and scaleable, while using the latest and greatest stacks.
      </p>
      <SkillsCard/>
      <Stack/>
    </div>
  )
}

export default Skills
