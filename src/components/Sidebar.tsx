import React, { useState } from "react"
import { MdOutlineAlternateEmail } from "react-icons/md"
import {
  VscAccount,
  VscExtensions,
  VscSourceControl,
  VscDebugAltSmall,
  VscSearch,
} from "react-icons/vsc"
import { Link } from "react-router-dom"
import SkillsExtensions from "./SkillsExtensions"

function Sidebar() {
  const [openExtension, setOpenExtension] = useState(false)

  const toogleExtension = () => {
    setOpenExtension((current) => !current)
  }
  return (
    <div className="flex">
      <aside className="flex w-16 flex-col justify-between bg-[#333333] p-3">
        <ul className="flex flex-col items-center justify-center gap-6">
          <li className="p-2">
            <Link to={"/"}>
              {" "}
              <button className="flex flex-col items-center justify-center gap-2">
                <h4>Home</h4>
              </button>
              {/* <p></p> */}
            </Link>
          </li>
          <Link to={"/About"}>
            <button className="flex flex-col items-center justify-center gap-2">
              <VscAccount className="text-3xl" />
              <p className="text-[10px]">About</p>
            </button>
          </Link>
          <Link to={"/Skills"}>
            {" "}
            <li>
              <button
                onClick={toogleExtension}
                className="flex flex-col items-center justify-center gap-2"
              >
                <VscExtensions className="text-3xl" />
                <p className="text-[10px]">Skills</p>
              </button>
              {/* <p>Projects</p> */}
            </li>
          </Link>
          <Link to={"/Education"}>
            <li>
              <button className="flex flex-col items-center justify-center gap-2">
                <VscSourceControl className="text-3xl" />
                <p className="text-[10px]">Education</p>
              </button>
              {/* <p>Experience</p> */}
            </li>
          </Link>
          <Link to={"/Experience"}>
            <li>
              <button className="flex flex-col items-center justify-center gap-2">
                <VscDebugAltSmall className="text-3xl" />
                <p className="text-[10px]">Experience</p>
              </button>
            </li>
          </Link>

          <Link to={"/Projects"}>
            <li>
              <button className="flex flex-col items-center justify-center gap-2">
                <VscSearch className="text-3xl" />
                <p className="text-[10px]">Projects</p>
              </button>
              {/* <p>Education</p> */}
            </li>
          </Link>
        </ul>
        <Link to={"/Contacts"}>
          <button className="flex flex-col items-center justify-center gap-2">
            <MdOutlineAlternateEmail className="text-3xl" />
            <p className="text-[10px]">Contact me</p>
          </button>
        </Link>
      </aside>
      {openExtension && <SkillsExtensions />}
    </div>
  )
}

export default Sidebar
