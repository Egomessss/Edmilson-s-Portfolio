import React, { useState } from "react"
import Extensions from "./SkillsExtensions"
import Navigation from "./Navigation"

import Sidebar from "./Sidebar"
import SkillsCard from "./SkillsCards"
import Stack from "./Stack"
import SkillsExtensions from "./SkillsExtensions"

function Skills() {
  return (
    <div className="flex min-h-screen flex-col bg-[#1E1E1E]">
      {/*  */}
      <body className="flex flex-grow">
        {/* sidebar */}
        <Sidebar />

        <div className="w-full">
          <Navigation />
          <main className="relative flex  h-full w-full  items-center justify-center">
            <div className=" w-[800px]">
              <h2 className="mb-5">Why You Should Hire Me</h2>
              <p className="mb-5">
                When buidling or cloning web projects, I strongly adhere to
                these principles which make my websites both unique and
                scaleable, while using the latest and greatest stacks.
              </p>

              <Stack />
            </div>
          </main>
        </div>
      </body>

      <footer className="h-6 bg-[#007ACC]"></footer>
    </div>
  )
}

export default Skills
