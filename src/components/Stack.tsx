import React from "react"
import { AiFillApi } from "react-icons/ai"
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa"
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiAngular,
  SiRedux,
  SiSass,
  SiSvelte,
  SiVuedotjs,
} from "react-icons/si"
import { DiGit } from "react-icons/di"
import { BsArrowReturnRight } from "react-icons/bs"
function Stack() {
  const divSTyle =
    "group relative flex gap-2 justify-center items-center w-[180px] h-[120px] bg-white border-neongreen border-2"
  const iconStyle =
    " p-2 text-black text-7xl group relative flex cursor-pointer"
  const textStyle = "text-center text-black relative font-aquirebold"

  return (
    <div>
      <div className=" mb-8 flex items-center gap-2">
        <BsArrowReturnRight className="text-white text-3xl" />
        <h2>My tools</h2>
      </div>
      <div className="flex flex-row gap-8 mt-4 flex-wrap justify-center items-center">
        <div className="relative px-6 py-3 font-bold text-black group w-[200px] h-[120px] flex items-center">
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-white group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full border-4 border-neongreen"></span>
          <FaHtml5 className={iconStyle} />
          <p className={textStyle}>HTML</p>
        </div>
        <div className="relative px-6 py-3 font-bold text-black group w-[200px] h-[120px] flex items-center">
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-white group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full border-4 border-neongreen"></span>
          <FaCss3Alt className={iconStyle} />
          <p className={textStyle}>CSS</p>
        </div>
        <div className="relative px-6 py-3 font-bold text-black group w-[200px] h-[120px] flex items-center">
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-white group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full border-4 border-neongreen"></span>
          <SiTailwindcss className={iconStyle} />
          <p className={textStyle}>Tailwind</p>
        </div>
       
        <div className="relative px-6 py-3 font-bold text-black group w-[200px] h-[120px] flex items-center">
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-white group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full border-4 border-neongreen"></span>
          <SiJavascript className={iconStyle} />
          <p className={textStyle}>Javascript</p>
        </div>
        <div className="relative px-6 py-3 font-bold text-black group w-[200px] h-[120px] flex items-center">
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-white group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full border-4 border-neongreen"></span>
          <FaReact className={iconStyle} />
          <p className={textStyle}>React</p>
        </div>
        <div className="relative px-6 py-3 font-bold text-black group w-[200px] h-[120px] flex items-center">
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-white group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full border-4 border-neongreen"></span>
          <AiFillApi className={iconStyle} />
          <p className={textStyle}>API's</p>
        </div>
        <div className="relative px-6 py-3 font-bold text-black group w-[200px] h-[120px] flex items-center">
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-white group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full border-4 border-neongreen"></span>
          <DiGit className={iconStyle} />
          <p className={textStyle}>Git</p>
        </div>
      </div>
    </div>
  )
}

export default Stack
