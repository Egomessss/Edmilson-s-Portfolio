import React from "react"
import { motion } from "framer-motion"
import { Cursor, useTypewriter } from "react-simple-typewriter"

function Hero() {
  const [text, count] = useTypewriter({
    words: ["Tech Lover", "Problem Solver"],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div>
      <motion.div>
        <img
          src=""
          alt=""
        />
        <h1>Hi I'm Edmilson Gomes</h1>

        <h2>
          <span>
            {text}
            <Cursor cursorColor="white" />
          </span>
        </h2>
      </motion.div>
    </div>
  )
}

export default Hero
