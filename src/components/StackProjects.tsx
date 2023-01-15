import React from "react"
import { AiFillApi } from "react-icons/ai"
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa"
import { SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si"
import { DiGit } from "react-icons/di"
function StackProjects() {
  const divSTyle =
    "group relative flex flex-col gap-2 justify-center items-center w-[40px] h-[40px] "
  const iconStyle =
    " p-2 hover:text-neongreen text-5xl group relative flex  border-b-2 border-white cursor-pointer"
  return (
    <div className="flex flex-row gap-4 flex-wrap justify-center items-center">
      <div className={divSTyle}>
        <FaHtml5 className={iconStyle} />
      </div>
      <div className={divSTyle}>
        <SiTailwindcss className={iconStyle} />
      </div>
      <div className={divSTyle}>
        <SiTypescript className={iconStyle} />
      </div>
      <div className={divSTyle}>
        <FaReact className={iconStyle} />
      </div>
      <div className={divSTyle}>
        <AiFillApi className={iconStyle} />
      </div>
      <div className={divSTyle}>
        <DiGit className={iconStyle} />
     
      </div>
    </div>
  )
}

export default StackProjects
