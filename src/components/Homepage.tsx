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
import { Link } from "react-router-dom"
import Sidebar from "./Sidebar"
import Navigation from "./Navigation"
import { useTypewriter } from "react-simple-typewriter"

function Homepage() {
  const [openWindow, setOpenWindow] = useState(false)

  const [text, count] = useTypewriter({
    words: [
      "The Illusive Developer That Can Center A Div",
      "The Solution To Your Coding Problems",
      "Passionate For Everything Tech",
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className="flex min-h-screen flex-col bg-[#1E1E1E]">
      {/*  */}

      <body className="flex flex-grow">
        {/* sidebar */}
        <Sidebar />
        <div className="w-full">
          <Navigation />
          <main className="relative flex h-full w-full flex-col items-center justify-center">
            <div className="h-[800px]">
              {openWindow ? (
                <WindowsModal text={text} />
              ) : (
                <div className="mt-10 flex flex-col">
                  <div>
                    <h1 className="mb-5">
                      <span>&lt;h1&gt;</span>Visual Studio Portfolio
                      <span>&lt;/h1&gt;</span>
                    </h1>
                    <h2 className="mb-10 text-white">
                      <span> &lt;h2&gt;</span>Frontend evolved
                      <span>&lt;/h2&gt;</span>
                    </h2>
                  </div>

                  <h3>
                    <span> &lt;h3&gt;</span>Start <span>&lt;/h3&gt;</span>
                  </h3>

                  <button
                    onClick={() => setOpenWindow(true)}
                    className="mt-4 flex items-center gap-4 text-blue-600"
                  >
                    <span> &lt;button&gt;</span>
                    <AiOutlineFolderOpen className="text-5xl" />
                    <p className="text-md">Open Folder...</p>
                    <span>&lt;/button&gt;</span>
                  </button>
                </div>
              )}
            </div>
          </main>
        </div>
      </body>

      <footer className="h-6 bg-[#007ACC]"></footer>
    </div>
  )
}

export default Homepage
