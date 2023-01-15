import React from "react"
import { AiFillApi } from "react-icons/ai"
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa"
import { SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si"

function Stack() {
  const divSTyle =
    "group relative flex justify-center align-middle w-[100] h-[100]"
  const iconStyle =
    "hover:text-neongreen text-7xl group relative flex rounded-full border-b-2 border-white cursor-pointer"

  return (
    <div className="flex flex-row gap-16 mt-10 flex-wrap justify-center align-middle">
      <div className={divSTyle}>
        <FaHtml5 className={iconStyle} />
      </div>
      <div className={divSTyle}>
        <FaCss3Alt className={iconStyle} />
      </div>
      <div className={divSTyle}>
        <SiTailwindcss className={iconStyle} />
      </div>
      <div className={divSTyle}>
        <SiJavascript className={iconStyle} />
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
    </div>
  )
}

export default Stack
