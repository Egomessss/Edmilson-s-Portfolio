import { AiFillApi } from "react-icons/ai"
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa"
import { SiTailwindcss, SiJavascript } from "react-icons/si"

import { DiGit } from "react-icons/di"
import { BsArrowReturnRight } from "react-icons/bs"
function Stack() {
  const divStyle =
    "relative px-6 py-3 font-bold text-black group w-[200px] h-[120px] flex items-center cursor-pointer"
  const spanStyle =
    "absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-white group-hover:translate-x-0 group-hover:translate-y-0"
  const iconStyle =
    " p-2 text-neongreen text-7xl group relative flex"
  const textStyle = "text-center text-neongreen relative font-aquirebold"

  return (
    <div>
      <div className=" mb-8 flex items-center gap-2">
        <BsArrowReturnRight className="text-white text-3xl" />
        <h2>My tools</h2>
      </div>
      <div className="flex flex-row gap-8 mt-4 flex-wrap justify-center items-center">
        <div className={divStyle}>
          <span className={spanStyle}></span>
          <span className="absolute inset-0 w-full h-full border-4 border-white"></span>
          <FaHtml5 className={iconStyle} />
          <p className={textStyle}>HTML</p>
        </div>
        <div className={divStyle}>
          <span className={spanStyle}></span>
          <span className="absolute inset-0 w-full h-full border-4 border-white"></span>
          <FaCss3Alt className={iconStyle} />
          <p className={textStyle}>CSS</p>
        </div>
        <div className={divStyle}>
          <span className={spanStyle}></span>
          <span className="absolute inset-0 w-full h-full border-4 border-white"></span>
          <SiTailwindcss className={iconStyle} />
          <p className={textStyle}>Tailwind</p>
        </div>

        <div className={divStyle}>
          <span className={spanStyle}></span>
          <span className="absolute inset-0 w-full h-full border-4 border-white"></span>
          <SiJavascript className={iconStyle} />
          <p className={textStyle}>Javascript</p>
        </div>
        <div className={divStyle}>
          <span className={spanStyle}></span>
          <span className="absolute inset-0 w-full h-full border-4 border-white"></span>
          <FaReact className={iconStyle} />
          <p className={textStyle}>React</p>
        </div>
        <div className={divStyle}>
          <span className={spanStyle}></span>
          <span className="absolute inset-0 w-full h-full border-4 border-white"></span>
          <AiFillApi className={iconStyle} />
          <p className={textStyle}>API's</p>
        </div>
        <div className={divStyle}>
          <span className={spanStyle}></span>
          <span className="absolute inset-0 w-full h-full border-4 border-white"></span>
          <DiGit className={iconStyle} />
          <p className={textStyle}>Git</p>
        </div>
      </div>
    </div>
  )
}

export default Stack
