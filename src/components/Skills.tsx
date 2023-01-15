import React from "react"
import SkillsCard from "./SkillsCard"

function Skills() {
  return (
    <div className="h-screen">
      <h2 className="text-3xl ">Skills</h2>
      <p>
        When buidling or cloning web projects, I strongly adhere to these
        principles which make my websites both unique and scaleable.
      </p>
      <div className="grid 	grid-template-columns: repeat(2, minmax(0, 1fr)) gap-4">
        <SkillsCard />
        <SkillsCard />
        <SkillsCard />
        <SkillsCard />
      </div>
    </div>
  )
}

export default Skills
