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

function Hero2() {
  const [openWindow, setOpenWindow] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-[#1E1E1E]">
      {/*  */}

      <body className="flex flex-grow">
        {/* sidebar */}
        <aside className="flex w-14 flex-col justify-between bg-[#333333] p-3">
          <div className="">
            {" "}
            <ul className="flex flex-col items-center justify-center gap-6">
              <li className="p-2">
                <AiOutlineMenu className="text-xl" />
                {/* <p></p> */}
              </li>
              <li className="flex items-center gap-2">
                <TbFiles className="text-2xl" />
                {/* <p>About</p> */}
              </li>
              <li>
                <VscSearch className="text-2xl" />
                {/* <p>Education</p> */}
              </li>
              <li>
                <VscSourceControl className="text-2xl" />
                {/* <p>Experience</p> */}
              </li>
              <li>
                <VscDebugAltSmall className="text-2xl" />
                <p></p>
              </li>
              <li>
                <VscExtensions className="text-2xl" />
                {/* <p>Projects</p> */}
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center gap-6">
            <button>
              <VscAccount className="text-2xl" />
            </button>
            <button>
              <VscSettingsGear className="text-2xl" />
            </button>
          </div>
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

export default Hero2
