import React from "react"
import { AiFillApi } from "react-icons/ai"
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa"
import { SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si"
import { DiGit } from "react-icons/di"
import { GoTools } from "react-icons/go"
function Stack() {
  const divSTyle =
    "border-[1px] border-neongreen rounded-xl group relative flex flex-col gap- justify-center items-center w-[200px] h-[120px] "
  const iconStyle =
    "p-2 hover:text-neongreen text-7xl group relative flex border-b-4 border-white cursor-pointer"
  const textStyle = "text-center font-aquirebold"

  return (
    <div className=" h-[400px]">
      <h2 className="mb-7 flex items-center gap-4">
        My tools{" "}
        <span>
          <GoTools />
        </span>
      </h2>
      <ul className="grid grid-cols-2 md:grid-cols-4  place-items-center gap-4">
        <li className={divSTyle}>
          <FaHtml5 className={iconStyle} />
          <p className={textStyle}>HTML</p>
        </li>
        <li className={divSTyle}>
          <FaCss3Alt className={iconStyle} />
          <p className={textStyle}>CSS</p>
        </li>
        <li className={divSTyle}>
          <SiTailwindcss className={iconStyle} />
          <p className={textStyle}>TailwindCSS</p>
        </li>
        <li className={divSTyle}>
          <SiJavascript className={iconStyle} />
          <p className={textStyle}>Javascript</p>
        </li>
        <li className={divSTyle}>
          <SiTypescript className={iconStyle} />
          <p className={textStyle}>Typescript</p>
        </li>
        <li className={divSTyle}>
          <FaReact className={iconStyle} />
          <p className={textStyle}>REact</p>
        </li>
        <li className={divSTyle}>
          <AiFillApi className={iconStyle} />
          <p className={textStyle}>API's</p>
        </li>
        <li className={divSTyle}>
          <DiGit className={iconStyle} />
          <p className={textStyle}>Git</p>
        </li>
      </ul>
    </div>
  )
}

export default Stack
