import React from "react"
import { TbError404 } from "react-icons/tb"
import Experience from "./Experience"

function Education() {
  return (
    <div className="h-screen">
      <h1 className="">Education</h1>
      
      <div className="flex flex-col">
        {/* education content */}
        <div className="h-[500px] flex justify-center items-center">
          <ol className="relative border-l border-gray-200">
            <li className="mb-4 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white "></div>
              <time className="mb-1 text-sm font-normal leading-none  ">
                2022-
              </time>
              <h3 className="font-semibold  ">Computer Science</h3>
              <p className="mb-4 text-base font-normal ">Universidade Aberta</p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white "></div>
              <time className="mb-1 text-sm font-normal leading-none  ">
                2019-2022
              </time>
              <h3 className="font-semibold  ">Urban Planning </h3>
              <p className="mb-4 text-base font-normal ">
                Instituto de Geografia e Ordenamento do Território
              </p>
            </li>
          </ol>
        </div>
        <div className="">
          <h1 className="">Experience</h1>
          <div className="h-[500px] flex flex-col justify-center">
            <TbError404 className="text-9xl mx-auto" />
            <h1 className="text-center">
              Uncaught typeError : cannot set property “textContent” of null at
              &lt;workExperience&gt;{" "}
              <span className="underline text-white">
                Hire me to fix this error in the future.
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
