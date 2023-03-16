import React from "react"
import Experience from "./Experience"

function Education() {
  return (
    <div className="h-[800px] mt-32 md:mt-0">
      <h2 className="">Education</h2>
      <p>I'm commited to my education</p>
      <div className="h-30 mt-24 md:mt-32 flex justify-center items-center">
        <ol className="relative border-l border-gray-200"> 
        <li className="mb-4 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white "></div>
            <time className="mb-1 text-sm font-normal leading-none  ">
              2022-2025
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
    </div>
  )
}

export default Education
