import React from "react"
import { AiFillApi } from "react-icons/ai"
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa"
import { SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si"
import { DiGit } from "react-icons/di"
import { GoTools } from "react-icons/go"
function Stack() {
  const divSTyle =
    "border-[1px] rounded-xl group relative flex flex-col  justify-center items-center w-[200px] h-[120px] "

  const textStyle = "text-center font-aquirebold"
  

  return (
    <div className=" h-[400px]">
      <h2 className="mb-7 flex items-center gap-4">
        My tools
        <span>
          <GoTools />
        </span>
      </h2>
      <ul className="grid grid-cols-2 place-items-center  gap-4 md:grid-cols-4">
        <li className={divSTyle}>
          <FaHtml5 className="relative flex cursor-pointer border-b-4 border-white p-2 text-7xl text-[#D84924]" />
          <p className={textStyle}>HTML</p>
        </li>
        <li className={divSTyle}>
          <FaCss3Alt className="relative flex cursor-pointer border-b-4 border-white p-2 text-7xl text-[#0066B6]" />
          <p className={textStyle}>CSS</p>
        </li>
        <li className={divSTyle}>
          <SiTailwindcss className="relative flex cursor-pointer border-b-4 border-white p-2 text-7xl text-[#38BDF8]" />
          <p className={textStyle}>TailwindCSS</p>
        </li>
        <li className={divSTyle}>
          <SiJavascript className="relative flex cursor-pointer border-b-4 border-white p-2 text-7xl text-[#EAD41C]" />
          <p className={textStyle}>Javascript</p>
        </li>
        <li className={divSTyle}>
          <SiTypescript className="relative flex cursor-pointer border-b-4 border-white p-2 text-7xl text-[#2F72BC]" />
          <p className={textStyle}>Typescript</p>
        </li>
        <li className={divSTyle}>
          <FaReact className="relative flex cursor-pointer border-b-4 border-white p-2 text-7xl text-[#00D1F2]" />
          <p className={textStyle}>REact</p>
        </li>
        <li className={divSTyle}>
          <AiFillApi className="relative flex cursor-pointer border-b-4 border-white p-2 text-7xl text-white" />
          <p className={textStyle}>API's</p>
        </li>
        <li className={divSTyle}>
          <DiGit className="relative flex cursor-pointer border-b-4 border-white p-2 text-7xl text-[#E44C30]" />
          <p className={textStyle}>Git</p>
        </li>
      </ul>
    </div>
  )
}

export default Stack
