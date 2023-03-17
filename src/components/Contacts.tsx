import React from "react"
import Footer from "./Footer"
// !para validar form
// https://tailwindcomponents.com/component/floating-label-contact-form

function Contacts() {
  return (
    <div className="h-[1000px">
      <h2 className="font-medium pb-20">Contact Me</h2>
      <div className="flex flex-col gap-5">
        <button
          onClick={() => navigator.clipboard.writeText("ed.gomes97@gmail.com")}
          className="bg-gradient-to-r from-[#4285F4] via-[#D7322A]  to-[#34A853] text-start ">
            {/* change the text size */}
          <h1 className="text-white text-xl">Gmail - Copy to clipboard</h1>
        </button>
        {/* bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 */}
        <button className="bg-[#0A66C2] text-start">
          <h1 className="text-white">Linkedin</h1>
        </button>
        <button className="bg-[#161B22] text-start">
          <h1 className="text-white">Github</h1>
        </button>
      </div>
    </div>
  )
}

export default Contacts
