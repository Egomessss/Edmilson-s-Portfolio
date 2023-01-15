import React, { useState } from "react"
import { RiMenu5Line, RiCloseLine } from "react-icons/ri"

function Navbar() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const underline =
    "bg-left-bottom bg-gradient-to-r from-neongreen to-neongreen bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"

  return (
    <nav className="relative">
      <div className="flex justify-between items-center h-24">
        <h1 className="w-full text-3xl font-aquirebold cursor-pointer">Home</h1>
        <ul className="hidden md:flex whitespace-nowrap">
          <li className="p-4">
            <a
              className="group text-white transition-all duration-300 ease-in-out"
              href="#"
            >
              <span className={underline}>About Me</span>
            </a>
          </li>

          <li className="p-4">
          
            <a
              className="group text-white transition-all duration-500 ease-in-out"
              href="#"
            >
              <span className={underline}>Why You Should Hire Me</span>
            </a>
          </li>
          <li className="p-4">
            <a
              className="group text-white transition-all duration-300 ease-in-out"
              href="#"
            >
              <span className={underline}>Education</span>
            </a>
          </li>
          <li className="p-4">
            <a
              className="group text-white transition-all duration-500 ease-in-out"
              href="#"
            >
              <span className={underline}>Experience</span>
            </a>
          </li>
          <li className="p-4">
            <a
              className="group text-white transition-all duration-500 ease-in-out"
              href="#"
            >
              <span className={underline}>Projects</span>
            </a>
          </li>
          <li className="p-4">
            <a
              className="group text-white transition-all duration-300 ease-in-out"
              href="#"
            >
              <span className={underline}>Contact Me</span>
            </a>
          </li>
        </ul>
        <div
          onClick={handleNav}
          className="block md:hidden"
        >
          {nav ? (
            <RiCloseLine className="text-3xl" />
          ) : (
            <RiMenu5Line className="text-3xl" />
          )}
        </div>
        <div
          className={
            nav
              ? "h-full w-[80%] easy-in-out duration-500 absolute top-14 right-0 md:hidden"
              : "fixed right-[-100%] top-0 h-full w-[60%]"
          }
          //  !prevent dropdown from showing when it reaches a certain width
        >
          <ul className="pt-20 uppercase p-4">
            <li className="p-4 border-b border-white cursor-pointer hover:underline">
              About Me
            </li>
            <li className="p-4 border-b border-white cursor-pointer hover:underline">
              Why You Should Hire Me
            </li>
            <li className="p-4 border-b border-white cursor-pointer hover:underline">
              Experience
            </li>
            <li className="p-4 border-b border-white cursor-pointer hover:underline">
              Projects
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
