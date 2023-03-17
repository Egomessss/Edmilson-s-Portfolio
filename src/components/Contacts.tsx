import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { SiGmail } from "react-icons/si"

function Contacts() {
  return (
    <div className="h-[1000px">
      <h2 className="font-medium pb-20">Contact Me</h2>
      <div className="flex flex-col gap-5">
        <button
          onClick={() => navigator.clipboard.writeText("ed.gomes97@gmail.com")}
          className="bg-gradient-to-r from-[#4285F4] via-[#D7322A]  to-[#34A853] text-start  flex items-center gap-2">
          {/* change the text size */}
          <SiGmail  className="text-7xl border-r-2 px-1"/>
          <h1 className="text-white md:text-7xl">Gmail - Copy to clipboard</h1>
        </button>
        <button className="bg-[#0A66C2] text-start flex items-center gap-2">
          <AiFillLinkedin className="text-7xl border-r-2 px-1" />
          <h1 className="text-white md:text-7xl">Linkedin</h1>
        </button>
        <button className="bg-[#161B22] text-start flex items-center gap-2">
          <AiFillGithub className="text-7xl border-r-2 px-1" />
          <h1 className="text-white md:text-7xl">Github</h1>
        </button>
      </div>
    </div>
  )
}

export default Contacts
