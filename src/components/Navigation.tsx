import React from "react"
import { GoX } from "react-icons/go"

function Navigation() {
  return (
    <div>
      {" "}
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
    </div>
  )
}

export default Navigation
