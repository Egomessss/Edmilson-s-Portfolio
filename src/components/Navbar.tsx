import React, { useState } from "react"
import { RiMenu5Line, RiCloseLine } from "react-icons/ri"
import NavModal from "./NavModal"

function Navbar() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const underline =
    "bg-left-bottom bg-gradient-to-r from-neongreen to-neongreen bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"

  return (
    <nav className="relative">
      <div className="flex h-24 items-center justify-between">
        <h1 className="w-full cursor-pointer font-aquirebold">Home</h1>
        <ul className="hidden whitespace-nowrap md:flex">
          <li className="p-4">
            <a
              className="group transition-all duration-300 ease-in-out"
              href="#"
            >
              <span className={underline}>About Me</span>
            </a>
          </li>

          <li className="p-4">
            <a
              className="group transition-all duration-300 ease-in-out"
              href="#"
            >
              <span className={underline}>Education</span>
            </a>
          </li>
          <li className="p-4">
            <a
              className="group transition-all duration-500 ease-in-out"
              href="#"
            >
              <span className={underline}>Experience</span>
            </a>
          </li>
          <li className="p-4">
            <a
              className="group transition-all duration-500 ease-in-out"
              href="#"
            >
              <span className={underline}>Projects</span>
            </a>
          </li>
          <li className="p-4">
            <a
              className="group transition-all duration-300 ease-in-out"
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
          {/* mobile nav */}
          {nav ? (
            <RiCloseLine className="text-6xl" />
          ) : (
            <RiMenu5Line className="text-6xl" />
          )}
        </div>
        {nav && <NavModal closeSearchModal={handleNav}/>}
      </div>
    </nav>
  )
}

export default Navbar
