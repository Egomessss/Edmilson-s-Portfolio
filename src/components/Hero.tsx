import Navbar from "./Navbar"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import image from "../assets/images/myself.png"

function Hero() {
  const [text] = useTypewriter({
    words: ["Creating", "Designing for", "Coding for"],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    // <div className="h-screen bg-hero bg-cover bg-center bg-no-repeat px-4 md:px-20 md:text-[50px] xl:px-52">
    <div className="flex h-screen relative ">
      <div className="h-full w-1/2"></div>
      <div className="h-full w-1/2 bg-white"></div>
      <h1 className="text-[600px] absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 drop-shadow-2xl">&</h1>
      <img src={image} className="h-96 absolute bottom-0 left-1/2 transform -translate-x-1/2 " alt="" />
      {/* <h1 className="text-[600px] absolute text-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl ">&</h1> */}

      {/* <Navbar />
      <div className="flex h-[600px] flex-col items-end justify-center md:h-[900px] md:gap-14">
        <h1 className="whitespace-nowrap text-3xl md:text-[50px] lg:text-[70px] 2xl:text-[100px]">
          Quality is not an act
        </h1>
        <h1 className="text-3xl md:text-[50px] lg:text-[70px] 2xl:text-[100px]">
          it is a habit
        </h1>
        <h2 className="text-2xl text-white md:text-[50px] lg:text-[70px] 2xl:text-[80px]">
          <span>
            {text}
            <Cursor cursorColor="white" /> impact
          </span>
        </h2>
      </div> */}
    </div>
  )
}

export default Hero
