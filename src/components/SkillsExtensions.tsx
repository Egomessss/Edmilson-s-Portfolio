import React from "react"
import { RiMoreLine } from "react-icons/ri"
import { VscClearAll, VscFilter, VscRefresh } from "react-icons/vsc"
import { Disclosure } from "@headlessui/react"
import { BsChevronDown, BsChevronUp } from "react-icons/bs"
function SkillsExtensions() {
  return (
    <div className="w-[300px] bg-[#252526]">
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
            <p className="w-4 rounded-xl bg-gray-400 text-xs mr-4">0</p>
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
            
          </Disclosure.Panel>
        </Disclosure>
      </div>
      <div className="">
        <Disclosure>
          <Disclosure.Button className="py-2">installed</Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
            Yes! You can purchase a license that you can share with your entire
            team.
          </Disclosure.Panel>
        </Disclosure>
      </div>
      <div className="">
        <Disclosure>
          <Disclosure.Button className="py-2">installed</Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
            Yes! You can purchase a license that you can share with your entire
            team.
          </Disclosure.Panel>
        </Disclosure>
      </div>
    </div>
  )
}

export default SkillsExtensions
