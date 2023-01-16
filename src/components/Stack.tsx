import React from "react"
import { AiFillApi } from "react-icons/ai"
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa"
import { SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si"
import { DiGit } from "react-icons/di"
function Stack() {
  const divSTyle =
    "group relative flex flex-col gap-2 justify-center items-center w-[80px] h-[120px] "
  const iconStyle =
    " p-2 hover:text-neongreen text-7xl group relative flex border-b-4 border-white cursor-pointer"
  const textStyle = "text-center font-aquirebold"

  return (
    <div className="flex flex-row gap-8 mt-24 flex-wrap justify-center items-center">
      <div className={divSTyle}>
        <FaHtml5 className={iconStyle} />
        <p className={textStyle}>HTML</p>
      </div>
      <div className={divSTyle}>
        <FaCss3Alt className={iconStyle} />
        <p className={textStyle}>CSS</p>
      </div>
      <div className={divSTyle}>
        <SiTailwindcss className={iconStyle} />
        <p className={textStyle}>Tailwind</p>
      </div>
      <div className={divSTyle}>
        <SiJavascript className={iconStyle} />
        <p className={textStyle}>Javascript</p>
      </div>
      <div className={divSTyle}>
        <SiTypescript className={iconStyle} />
        <p className={textStyle}>Typescript</p>
      </div>
      <div className={divSTyle}>
        <FaReact className={iconStyle} />
        <p className={textStyle}>REact</p>
      </div>
      <div className={divSTyle}>
        <AiFillApi className={iconStyle} />
        <p className={textStyle}>API's</p>
      </div>
      <div className={divSTyle}>
        <DiGit className={iconStyle} />
        <p className={textStyle}>Git</p>
      </div>
    </div>
  )
}

export default Stack
