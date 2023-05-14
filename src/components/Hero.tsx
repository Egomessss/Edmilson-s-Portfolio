import Navbar from "./Navbar"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import image from "../assets/images/myself.png"

function Hero() {
  const [text] = useTypewriter({
    words: ["it is a habit", "it is a lifestyle", "it is a passion"],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    // <div className="h-screen bg-hero bg-cover bg-center bg-no-repeat px-4 md:px-20 md:text-[50px] xl:px-52">
    <div className="relative  flex h-[100vh] w-full ">
      <Navbar />
      <div className="relative h-full w-1/2 ">
        <h1 className="absolute right-0 top-[35%]  w-[9.5rem] text-3xl text-white drop-shadow-2xl lg:top-[15%] lg:right-44 lg:h-40 lg:w-[380px] lg:break-words  lg:text-7xl">
          Creating Change
        </h1>
      </div>
      <div className="relative h-full w-1/2 bg-white">
        <h1 className="absolute left-0 bottom-1/3 w-48  text-3xl text-black drop-shadow-2xl lg:bottom-[35%] lg:left-44  lg:w-[480px] lg:text-7xl">
          Developing Impact
        </h1>
      </div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform  text-[200px]   drop-shadow-2xl lg:top-1/3 lg:text-[600px]">
        &
      </h1>
      <h1 className="absolute top-[70%] left-[45%] w-80 -translate-x-1/2 -translate-y-1/2 transform text-sm drop-shadow-2xl lg:top-[75%] lg:left-[47.5%] lg:w-[850px] lg:text-4xl ">
        Quality is not an act <span className="text-black">{text}</span>
      </h1>

      <img
        src={image}
        className="absolute bottom-0 left-1/2 h-44 -translate-x-1/2 transform lg:h-72 "
        alt=""
      />
    </div>
  )
}

export default Hero
