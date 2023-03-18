import { motion } from "framer-motion"
import Navbar from "./Navbar"
import { Cursor, useTypewriter } from "react-simple-typewriter"

function Hero() {
  const [text] = useTypewriter({
    words: ["Creating", "Designing for", "Coding for"],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className="h-screen bg-hero bg-cover bg-center bg-no-repeat px-4 md:px-20 md:text-[50px] xl:px-52">
      <Navbar />
      <div className="flex h-[600px] flex-col items-end justify-center md:h-[900px] md:gap-14">
        <h1 className="whitespace-nowrap text-3xl md:text-[50px] lg:text-[70px] 2xl:text-[100px]">
          Quality is not an act
        </h1>
        <h1 className="text-3xl md:text-[50px] lg:text-[70px] 2xl:text-[100px]">
          it is a habit
        </h1>
        <h2 className="text-2xl text-white md:text-[50px] lg:text-[70px] 2xl:text-[80px]">
          {text} Impact
        </h2>
      </div>
    </div>
  )
}

export default Hero
