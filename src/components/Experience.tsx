import React from "react"
import { TbError404 } from "react-icons/tb"
import Navigation from "./Navigation"

import Sidebar from "./Sidebar"
import Stack from "./Stack"

function Experience() {
  return (
    <div className="flex min-h-screen flex-col bg-[#1E1E1E]">
      {/*  */}
      <body className="flex flex-grow">
        {/* sidebar */}
        <Sidebar />

        <div className="w-full">
          <Navigation />
          <main className="relative flex  h-full w-full  items-center justify-center">
            <div className="mt-12">
              <h2 className="">Experience</h2>
              <div className="mt-24 md:mt-40">
                <TbError404 className="mx-auto text-9xl" />
                <p className="text-center">
                  Uncaught typeError : cannot set property “textContent” of null
                  at &lt;workExperience&gt;{" "}
                  <span className="underline">
                    {" "}
                    Hire me to fix this error in the future.
                  </span>
                </p>
              </div>
            </div>
          </main>
        </div>
      </body>

      <footer className="h-6 bg-[#007ACC]"></footer>
    </div>
  )
}

// absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
export default Experience
