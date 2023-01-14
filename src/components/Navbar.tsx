import React, { useState } from "react"
import { RiMenu5Line, RiCloseLine } from "react-icons/ri"

function Navbar() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        <h1 className="w-full text-3xl font-aquirebold">Home</h1>
        <ul className="hidden md:flex whitespace-nowrap">
          <li className="p-4">
            <a
              className="group text-white transition-all duration-300 ease-in-out"
              href="#"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
               About
              </span>
            </a>
          </li>
          <li className="p-4">Why You Should Hire Me</li>
          <li className="p-4">Projects</li>
          <li className="p-4">Contact Me</li>
        </ul>
        <div
          onClick={handleNav}
          className="block md:hidden"
        >
          {!nav ? (
            <RiCloseLine className="text-3xl" />
          ) : (
            <RiMenu5Line className="text-3xl" />
          )}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 h-full w-[60%] border-r border-r-white easy-in-out duration-500"
              : "fixed left-[-100%] top-0 h-full w-[60%] border-r border-r-white"
          }
        >
          <ul className="pt-20 uppercase p-4">
            <li className="p-4 border-b border-white">About</li>
            <li className="p-4 border-b border-white">
              Why You Should Hire Me
            </li>
            <li className="p-4 border-b border-white">Projects</li>
            <li className="p-4 border-b border-white">Contact Me</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
