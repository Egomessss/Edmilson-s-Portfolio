import { motion } from "framer-motion"


function Hero() {
  return (
    <div className="h-[1200px] flex justify-end items-center">
      <div className="w-full h-[400px] flex flex-col space-y-8  text-right">
        <h1 className="md:text-[100px]">Quality is not a act</h1>
        <h1 className="md:text-[100px]">it's an habit</h1>
        <h1 className="md:text-[80px] text-white">Designing for Impact</h1>
      </div>
    </div>
  )
}

export default Hero
