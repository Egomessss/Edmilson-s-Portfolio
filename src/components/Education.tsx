import React from "react"
import Experience from "./Experience"

function Education() {
  return (
    <div className="h-screen">
      <h2 className="text-3xl">Education</h2>
      <div className="h-30 w-full flex justify-center items-center">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2019-2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Urban Planning{" "}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Instituto de Geografia e Ordenamento do Território
            </p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2022-
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Computer Science
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Universidade Aberta
            </p>
          </li>
        </ol>
      </div>
      <Experience/>
    </div>
  )
}

export default Education
