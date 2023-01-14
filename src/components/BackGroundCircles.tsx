import React from "react"
import {motion} from "framer-motion"

type Props = {}

function BackGroundCiclres({}: Props) {
  return (
    <div className="relative flex justify-center items-center">
      <div className=" absolute border border-neongreen rounded-full h-[450px] w-[450px] mt-52 animate-pulse" />
      <div className=" absolute border border-white rounded-full h-[550px] w-[550px] mt-52 animate-pulse" />
    </div>
  )
}

export default BackGroundCiclres
