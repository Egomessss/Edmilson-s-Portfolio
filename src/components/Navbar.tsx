import React, { Fragment, useState } from "react"
import { RiMenu5Line, RiCloseLine } from "react-icons/ri"
import { Dialog, Transition } from "@headlessui/react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { SiGmail } from "react-icons/si"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleModal = () => setIsOpen(prevState => !prevState)

  const closeModal = () => setIsOpen(false)

  const underline =
    "bg-left-bottom bg-gradient-to-r from-neongreen to-neongreen bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"

  const handleAnchor = () => setIsOpen(false)

  const [copied, setCopied] = useState(false)
  const handleGmail = () => {
    navigator.clipboard.writeText("ed.gomes97@gmail.com")
    setCopied(true!)
  }

  return (
    <nav>
      <div className="flex h-24 items-center justify-between">
        <h1 className="w-full cursor-pointer font-aquirebold ">EG</h1>
        
        <ul className="hidden whitespace-nowrap text-xl font-bold md:flex">
        <li className="p-4">
          <a
            href="http://tecedblog.com/"
            target="_blank"
            className="group transition-all duration-300 ease-in-out">
            <span className={underline}>Blog</span>
          </a>
        </li>
          <li className="p-4">
            <a
              className="group transition-all duration-300 ease-in-out"
              href="#about">
              <span className={underline}>About Me</span>
            </a>
          </li>

          <li className="p-4">
            <a
              className="group transition-all duration-300 ease-in-out"
              href="#education">
              <span className={underline}>Education</span>
            </a>
          </li>
          <li className="p-4">
            <a
              className="group transition-all duration-500 ease-in-out"
              href="#projects">
              <span className={underline}>Projects</span>
            </a>
          </li>
          <li className="p-4">
            <a
              className="group transition-all duration-300 ease-in-out"
              href="#contacts">
              <span className={underline}>Contact Me</span>
            </a>
          </li>
        </ul>
        {/* modal */}
        <div
          onClick={handleModal}
          className="block md:hidden">
          {isOpen ? (
            <RiCloseLine className="text-3xl" />
          ) : (
            <RiMenu5Line className="text-3xl" />
          )}
        </div>
      </div>
      {/* modal menu */}
      <Transition
        appear
        show={isOpen}
        as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-[#0E0E0E]" />
          </Transition.Child>

          <div className="fixed top-0">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full transform overflow-hidden    transition-all">
                  <div className="mb-32 flex h-full items-center justify-between py-4 px-4">
                    <h1>EG</h1>
                    <button onClick={handleModal}>
                      {isOpen ? (
                        <RiCloseLine className="text-3xl" />
                      ) : (
                        <RiMenu5Line className="text-3xl" />
                      )}
                    </button>
                  </div>
                  <div className="flex h-full flex-col ">
                    <ul className="flex flex-col gap-8 px-4 text-black">
                      <li className="text-right text-3xl font-bold text-white  ">
                        <a
                          onClick={handleAnchor}
                          href="#about">
                          About me
                        </a>
                      </li>
                      <li className="text-right text-3xl font-bold text-white ">
                        <a
                          onClick={handleAnchor}
                          href="#education">
                          Education
                        </a>
                      </li>
                      <li className="text-right text-3xl font-bold text-white ">
                        <a
                          onClick={handleAnchor}
                          href="#projects">
                          Projects
                        </a>
                      </li>
                      <li className="text-right text-3xl font-bold text-white ">
                        <a
                          onClick={handleAnchor}
                          href="#contacts">
                          Contact me
                        </a>
                      </li>
                    </ul>
                    <div className="mt-20 flex flex-wrap">
                      <button
                        onClick={handleGmail}
                        className="flex h-16 w-full items-center gap-2  bg-gradient-to-r from-[#4285F4]  via-[#D7322A] to-[#34A853] text-start">
                        {/* change the text size */}
                        <SiGmail className="border-r-2 px-1 text-4xl md:text-7xl" />
                        {copied ? (
                          <h1 className="text-4xl text-white md:text-7xl">
                            Copied!
                          </h1>
                        ) : (
                          <h1 className="text-4xl text-white md:text-7xl">
                            Gmail
                          </h1>
                        )}
                      </button>
                      <a
                        href="https://www.linkedin.com/in/egomessss/"
                        target="_blank"
                        className="flex h-16  w-full items-center gap-2 bg-[#0A66C2] text-start">
                        <AiFillLinkedin className="border-r-2 px-1 text-4xl md:text-7xl" />
                        <h1 className="text-4xl text-white md:text-7xl">
                          Linkedin
                        </h1>
                      </a>
                      <a
                        href="https://github.com/Egomessss/Egomessss"
                        target="_blank"
                        className="flex h-16 w-full items-center gap-2 bg-[#161B22] text-start">
                        <AiFillGithub className="border-r-2 px-1 text-4xl md:text-7xl" />
                        <h1 className="text-4xl text-white md:text-7xl">
                          Github
                        </h1>
                      </a>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </nav>
  )
}

export default Navbar
