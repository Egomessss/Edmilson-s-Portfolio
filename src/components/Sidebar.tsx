import { Disclosure } from "@headlessui/react"
import React, { useState } from "react"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { MdOutlineAlternateEmail } from "react-icons/md"
import { RiMoreLine } from "react-icons/ri"
import {
  VscAccount,
  VscExtensions,
  VscSourceControl,
  VscDebugAltSmall,
  VscSearch,
  VscHome,
  VscClearAll,
  VscFilter,
  VscRefresh,
} from "react-icons/vsc"
import { Link } from "react-router-dom"
import SkillsExtensions from "./SkillsExtensions"

function Sidebar() {
  const [openSkillsExtension, setOpenSkillsExtension] = useState(false)
  const [openExperienceExtension, setOpenExperienceExtension] = useState(false)

  const toogleSkillsExtension = () => {
    setOpenSkillsExtension((current) => !current)
  }

  const toogleExperienceExtension = () => {
    setOpenExperienceExtension((current) => !current)
  }
  return (
    <div className="flex">
      <aside className="flex w-16 flex-col justify-between bg-[#333333] p-3">
        <ul className="flex flex-col items-center justify-center gap-6">
          <li className="p-2">
            <Link to={"/"}>
              {" "}
              <button className="flex flex-col items-center justify-center gap-2">
                <VscHome className="text-3xl" />
                <p className="text-[10px]">Home</p>
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
                onClick={toogleSkillsExtension}
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
              <button
                onClick={toogleExperienceExtension}
                className="flex flex-col items-center justify-center gap-2"
              >
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

        <button className="flex flex-col items-center justify-center gap-2">
          <AiFillLinkedin className="text-3xl" />
        </button>
        <button className="flex flex-col items-center justify-center gap-2">
          <AiFillGithub className="text-3xl" />
        </button>
      </aside>
      {openSkillsExtension && (
        <SkillsExtensions>
          {" "}
          <div className="flex justify-between px-5 py-4 ">
            <p className="text-xs">EXTENSIONS</p>
            <div className="flex items-center gap-2">
              <VscFilter />
              <VscRefresh />
              <VscClearAll className="text-gray-500" />
              <RiMoreLine />
            </div>
          </div>
          <div className="flex justify-center">
            <input
              className="w-[260px] bg-[#3C3C3C]"
              type="text"
            />
          </div>
          <div className="">
            <Disclosure>
              <Disclosure.Button className="flex w-full items-center justify-between py-2">
                <div className="flex items-center">
                  <BsChevronDown />
                  <p className="text-xs">INSTALLED</p>
                </div>
                <p className="mr-4 w-4 rounded-xl bg-gray-400 text-xs">0</p>
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500"></Disclosure.Panel>
            </Disclosure>
          </div>
          <div className="">
            <Disclosure>
              <Disclosure.Button className="py-2">installed</Disclosure.Button>
              <Disclosure.Panel className="text-gray-500">
                Yes! You can purchase a license that you can share with your
                entire team.
              </Disclosure.Panel>
            </Disclosure>
          </div>
          <div className="">
            <Disclosure>
              <Disclosure.Button className="py-2">installed</Disclosure.Button>
              <Disclosure.Panel className="text-gray-500">
                Yes! You can purchase a license that you can share with your
                entire team.
              </Disclosure.Panel>
            </Disclosure>
          </div>
        </SkillsExtensions>
      )}
      {openExperienceExtension && (
        <SkillsExtensions>
          <div className="flex justify-between px-5 py-4 ">
            <p className="text-xs">EXTENSIONS</p>
            <div className="flex items-center gap-2">
              <VscFilter />
              <VscRefresh />
              <VscClearAll className="text-gray-500" />
              <RiMoreLine />
            </div>
          </div>
          <div className="flex justify-center">
            <input
              className="w-[260px] bg-[#3C3C3C]"
              type="text"
            />
          </div>
          <div className="">
            <Disclosure>
              <Disclosure.Button className="flex w-full items-center justify-between py-2">
                <div className="flex items-center">
                  <BsChevronDown />
                  <p className="text-xs">INSTALLED</p>
                </div>
                <p className="mr-4 w-4 rounded-xl bg-gray-400 text-xs">0</p>
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500"></Disclosure.Panel>
            </Disclosure>
          </div>
          <div className="">
            <Disclosure>
              <Disclosure.Button className="py-2">installed</Disclosure.Button>
              <Disclosure.Panel className="text-gray-500">
                Yes! You can purchase a license that you can share with your
                entire team.
              </Disclosure.Panel>
            </Disclosure>
          </div>
          <div className="">
            <Disclosure>
              <Disclosure.Button className="py-2">installed</Disclosure.Button>
              <Disclosure.Panel className="text-gray-500">
                Yes! You can purchase a license that you can share with your
                entire team.
              </Disclosure.Panel>
            </Disclosure>
          </div>
        </SkillsExtensions>
      )}
    </div>
  )
}

export default Sidebar
