import { AiFillApi } from "react-icons/ai"
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa"
import { SiTailwindcss, SiJavascript } from "react-icons/si"

import { DiGit } from "react-icons/di"
import { BsArrowReturnRight } from "react-icons/bs"
function Stack() {
  const divStyle =
    "relative justify-center items-center font-bold text-black group w-[160px] md:w-[200px] h-[120px] flex items-center cursor-pointer"
  const spanStyle =
    "absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-white group-hover:translate-x-0 group-hover:translate-y-0"
  const spanStyle2 = "absolute inset-0 h-full w-full border-4 border-white"
  const iconStyle =
    " md:p-2  text-black text-3xl mx-1 md:mx-0 md:text-7xl group relative flex"
  const textStyle = "text-center text-black relative font-aquirebold"

  return (
    <div>
      <div className="flex items-center gap-2 py-10 md:py-20">
        <BsArrowReturnRight className="text-3xl text-white" />
        <h2>My tools</h2>
      </div>
      <div className="mt-4 flex flex-row flex-wrap items-center justify-center gap-8">
        <div className={divStyle}>
          <span className={spanStyle}></span>
          <span className={spanStyle2}></span>
          <FaHtml5 className={iconStyle} />
          <p className={textStyle}>HTML</p>
        </div>
        <div className={divStyle}>
          <span className={spanStyle}></span>
          <span className={spanStyle2}></span>
          <FaCss3Alt className={iconStyle} />
          <p className={textStyle}>CSS</p>
        </div>
        <div className={divStyle}>
          <span className={spanStyle}></span>
          <span className={spanStyle2}></span>
          <SiTailwindcss className={iconStyle} />
          <p className={textStyle}>Tailwind</p>
        </div>

        <div className={divStyle}>
          <span className={spanStyle}></span>
          <span className={spanStyle2}></span>
          <SiJavascript className={iconStyle} />
          <p className={textStyle}>Javascript</p>
        </div>
        <div className={divStyle}>
          <span className={spanStyle}></span>
          <span className={spanStyle2}></span>
          <FaReact className={iconStyle} />
          <p className={textStyle}>React</p>
        </div>
        <div className={divStyle}>
          <span className={spanStyle}></span>
          <span className={spanStyle2}></span>
          <AiFillApi className={iconStyle} />
          <p className={textStyle}>API's</p>
        </div>
        <div className={divStyle}>
          <span className={spanStyle}></span>
          <span className={spanStyle2}></span>
          <DiGit className={iconStyle} />
          <p className={textStyle}>Git</p>
        </div>
      </div>
    </div>
  )
}

export default Stack
