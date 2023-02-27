import React from "react"
import { RiMoreLine } from "react-icons/ri"
import { VscClearAll, VscFilter, VscRefresh } from "react-icons/vsc"
import { Disclosure } from "@headlessui/react"
import { BsChevronDown, BsChevronUp } from "react-icons/bs"

function SkillsExtensions({children}) {
  return (
    <div className="w-[300px] bg-[#252526]">
      {children}
    </div>
  )
}

export default SkillsExtensions
