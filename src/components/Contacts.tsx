import React, { useRef, useState } from "react"
import Footer from "./Footer"
import Navigation from "./Navigation"
import Sidebar from "./Sidebar"
// !para validar form
// https://tailwindcomponents.com/component/floating-label-contact-form

function Contacts() {
  return (
    <div className="flex min-h-screen flex-col bg-[#1E1E1E]">
      {/*  */}
      <body className="flex flex-grow">
        {/* sidebar */}
        <Sidebar />
        <div className="w-full">
          <Navigation />
          <main className="relative flex h-full  w-full flex-col  items-center justify-center">
            <h2 className="text-white">Contact me</h2>
            <div className="flex gap-5">
              <button
                onClick={() =>
                  navigator.clipboard.writeText("ed.gomes97@gmail.com")
                }
                className="group relative px-6 py-3 font-bold text-black"
              >
                <span className="absolute inset-0 h-full w-full -translate-x-2 -translate-y-2 transform bg-white transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 h-full w-full border-4 border-neongreen"></span>
                <span className="relative font-aquirebold">Copy</span>
              </button>
              <h1>ed.gomes97@gmail.com</h1>
            </div>
          </main>
        </div>
      </body>

      <footer className="h-6 bg-[#007ACC]"></footer>
    </div>
  )
}

export default Contacts
