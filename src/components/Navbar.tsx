import React from "react"

function Navbar() {
  return (
  <nav>
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        <h1 className="w-full text-3xl font-aquirebold">Home</h1>
        <ul className="flex whitespace-nowrap">
            <li className="p-4">About</li>
            <li className="p-4">Why You Should Hire Me</li>
            <li className="p-4">Projects</li>
            <li className="p-4">Contact Me</li>
        </ul>
    </div>
  </nav>
  )
}

export default Navbar
