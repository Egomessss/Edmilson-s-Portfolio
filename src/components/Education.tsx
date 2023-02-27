import React from "react"
import { TbError404 } from "react-icons/tb"

import Experience from "./Experience"
import Navigation from "./Navigation"
import Sidebar from "./Sidebar"
import Stack from "./Stack"

function Education() {
  return (
    <div className="flex min-h-screen flex-col bg-[#1E1E1E]">
      {/*  */}
      <body className="flex flex-grow">
        {/* sidebar */}
        <Sidebar />

        <div className="w-full">
          <Navigation />
          <main className="relative flex flex-col  h-full w-full  items-center justify-center">
          <h2 className="mb-5">Committed to my education</h2>
          <p>help me branch out and continue my committed pursue of knowledge</p>
              <div className="flex h-[500px] items-center justify-center">
                <ol className="relative border-l-red-500 border-l-4">
                  <li className="mb-4 ml-4">
                    <div className="absolute -left-[0.72rem] mt-1.5 h-5 w-5 rounded-full bg-blue-500 "></div>
                    <time className="mb-1 text-sm font-normal leading-none  ">
                      2022-
                    </time>
                    <h3 className="font-semibold  ">Computer Science</h3>
                    <p className="mb-4 text-base font-normal ">
                      Universidade Aberta
                    </p>
                  </li>
                  <li className="mb-10 ml-4">
                    <div className="absolute -left-[0.72rem] mt-1.5 h-5 w-5 rounded-full bg-green-500 "></div>
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
          
          </main>
        </div>
      </body>

      <footer className="h-6 bg-[#007ACC]"></footer>
    </div>
    // <div className="h-screen">
    //   <h1 className="">Education</h1>

    //   <div className="flex flex-col">
    //     {/* education content */}
    //     <div className="h-[500px] flex justify-center items-center">
    //       <ol className="relative border-l border-gray-200">
    //         <li className="mb-4 ml-4">
    //           <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white "></div>
    //           <time className="mb-1 text-sm font-normal leading-none  ">
    //             2022-
    //           </time>
    //           <h3 className="font-semibold  ">Computer Science</h3>
    //           <p className="mb-4 text-base font-normal ">Universidade Aberta</p>
    //         </li>
    //         <li className="mb-10 ml-4">
    //           <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white "></div>
    //           <time className="mb-1 text-sm font-normal leading-none  ">
    //             2019-2022
    //           </time>
    //           <h3 className="font-semibold  ">Urban Planning </h3>
    //           <p className="mb-4 text-base font-normal ">
    //             Instituto de Geografia e Ordenamento do Território
    //           </p>
    //         </li>
    //       </ol>
    //     </div>
    //     <div className="">
    //       <h1 className="">Experience</h1>
    //       <div className="h-[500px] flex flex-col justify-center">
    //         <TbError404 className="text-9xl mx-auto" />
    //         <h2 className="text-center">
    //           Uncaught typeError : cannot set property “textContent” of null at
    //           &lt;workExperience&gt;{" "}
    //           <span className="underline text-white">
    //             Hire me to fix this error in the future.
    //           </span>
    //         </h2>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Education
