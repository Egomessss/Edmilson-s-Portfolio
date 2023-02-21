import React from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { GoX } from "react-icons/go"
import { RiMenu2Line } from "react-icons/ri"

function Hero2() {
  return (
    <div className="flex min-h-screen flex-col bg-[#1E1E1E]">
      {/*  */}

      <body className="flex flex-grow">
        {/* sidebar */}
        <nav className="w-14 bg-[#333333]">
            <ul className="flex items-center justify-center">
                <li className="p-2"><AiOutlineMenu /></li>
            </ul>
          
        </nav>
        <div className="w-full">
          <nav className="w-full bg-[#333333]">
            <ul>
              <li className="flex items-center gap-2">
                <p>Welcome</p>
                <GoX />
              </li>
            </ul>
          </nav>
          <main className="">main</main>
        </div>
      </body>

      <footer className="h-6 bg-[#007ACC]"></footer>
    </div>
  )
}

export default Hero2
