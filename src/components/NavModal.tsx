import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa"

function SearchModal({ closeSearchModal }: any) {
  return (
    <div className="fixed top-20 left-0 z-50 flex h-screen w-full flex-col  overflow-y-auto overflow-x-hidden bg-black  px-6 py-6 outline-none focus:outline-none">
      <ul className="flex h-[450px] flex-col gap-4 text-end">
        <li className="flex h-[100px] items-center justify-end gap-8">
          <FaArrowRight className="text-2xl" /> <h2>About me</h2>
        </li>
        <li className="h-[100px]">
          <h2>Education & Experience</h2>
        </li>
        <li className="h-[100px]">
          <h2>Projects</h2>
        </li>
        <li className="h-[100px]">
          <h2>Contact me</h2>
        </li>
      </ul>
      <div className="-mx-6 flex h-[200px] bg-white">
        <a
          className="flex w-full items-center justify-center bg-[rgb(10,102,194)] "
          href="https://www.linkedin.com/in/egomessss/"
          target="_blank"
        >
          <FaLinkedin className="text-5xl" />
        </a>
        <a
          className="flex w-full items-center justify-center bg-[rgb(22,27,34)]  "
          href="https://github.com/Egomessss/Egomessss"
          target="_blank"
        >
          <FaGithub className="text-5xl" />
        </a>
      </div>
    </div>
  )
}

export default SearchModal
