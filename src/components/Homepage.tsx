import React, { useState } from "react"
import { AiOutlineFolderOpen, AiOutlineMenu } from "react-icons/ai"
import { GoX } from "react-icons/go"
import { RiMenu2Line } from "react-icons/ri"
import { TbFiles } from "react-icons/tb"
import {
  VscAccount,
  VscDebugAltSmall,
  VscExtensions,
  VscSearch,
  VscSettingsGear,
  VscSourceControl,
} from "react-icons/vsc"
import WindowsModal from "./WindowsModal"

import { MdOutlineAlternateEmail } from "react-icons/md"
function Homepage() {
  const [openWindow, setOpenWindow] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-[#1E1E1E]">
      {/*  */}

      <body className="flex flex-grow">
        {/* sidebar */}
        <aside className="flex w-16 flex-col justify-between bg-[#333333] p-3">
          <ul className="flex flex-col items-center justify-center gap-6">
            <li className="p-2">
              <button className="flex flex-col items-center justify-center gap-2">
                <h4>Home</h4>
              </button>
              {/* <p></p> */}
            </li>
            <button className="flex flex-col items-center justify-center gap-2">
              <VscAccount className="text-3xl" />
              <p className="text-[10px]">About</p>
            </button>
            <li>
              <button className="flex flex-col items-center justify-center gap-2">
                <VscExtensions className="text-3xl" />
                <p className="text-[10px]">Skills</p>
              </button>
              {/* <p>Projects</p> */}
            </li>

            <li>
              <button className="flex flex-col items-center justify-center gap-2">
                <VscSourceControl className="text-3xl" />
                <p className="text-[10px]">Education</p>
              </button>
              {/* <p>Experience</p> */}
            </li>
            <li>
              <button className="flex flex-col items-center justify-center gap-2">
                <VscDebugAltSmall className="text-3xl" />
                <p className="text-[10px]">Experience</p>
              </button>
            </li>

            <li>
              <button className="flex flex-col items-center justify-center gap-2">
                <VscSearch className="text-3xl" />
                <p className="text-[10px]">Projects</p>
              </button>
              {/* <p>Education</p> */}
            </li>
          </ul>
          <button className="flex flex-col items-center justify-center gap-2">
            {" "}
            <MdOutlineAlternateEmail className="text-3xl" />
            <p className="text-[10px]">Contact me</p>
          </button>
        </aside>
        <div className="w-full">
          <nav className="h-8 w-full bg-[#333333]  ">
            <ul className="flex gap-5 text-xs">
              <li className="flex items-center gap-2">
                <p>Welcome</p>
                <GoX />
              </li>
              <li className="flex items-center gap-2">
                <p>Welcome</p>
                <GoX />
              </li>
              <li className="flex items-center gap-2">
                <p>Welcome</p>
                <GoX />
              </li>
              <li className="flex items-center gap-2">
                <p>Welcome</p>
                <GoX />
              </li>
            </ul>
          </nav>
          <main className="relative flex h-full w-full flex-col items-center justify-center">
            <div className="h-[800px]">
              <div>
                <h1 className="mb-5">Visual Studio Portfolio</h1>
                <h2>Frontend evolved</h2>
              </div>

              <div className="mt-10 flex flex-col">
                <h3>Start</h3>

                <button
                  onClick={() => setOpenWindow(true)}
                  className="mt-4 flex items-center gap-4 text-blue-600"
                >
                  <AiOutlineFolderOpen className="text-xl" />
                  <p className="text-sm">Open Folder...</p>
                </button>
              </div>
            </div>
            {openWindow && <WindowsModal />}
          </main>
        </div>
      </body>

      <footer className="h-6 bg-[#007ACC]"></footer>
    </div>
  )
}

export default Homepage
