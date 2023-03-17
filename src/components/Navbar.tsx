import React, { Fragment, useState } from "react"
import { RiMenu5Line, RiCloseLine } from "react-icons/ri"
import { Dialog, Transition } from "@headlessui/react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleModal = () => setIsOpen(prevState => !prevState)

  const closeModal = () => setIsOpen(false)

  const underline =
    "bg-left-bottom bg-gradient-to-r from-neongreen to-neongreen bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"

  return (
    <nav className=" x-10">
      <div className="flex justify-between items-center h-24">
        <h1 className="w-full font-aquirebold cursor-pointer">Home</h1>
        <ul className="hidden md:flex whitespace-nowrap">
          <li className="p-4">
            <a
              className="group transition-all duration-300 ease-in-out"
              href="#">
              <span className={underline}>About Me</span>
            </a>
          </li>

          <li className="p-4">
            <a
              className="group transition-all duration-300 ease-in-out"
              href="#">
              <span className={underline}>Education</span>
            </a>
          </li>
          <li className="p-4">
            <a
              className="group transition-all duration-500 ease-in-out"
              href="#">
              <span className={underline}>Experience</span>
            </a>
          </li>
          <li className="p-4">
            <a
              className="group transition-all duration-500 ease-in-out"
              href="#">
              <span className={underline}>Projects</span>
            </a>
          </li>
          <li className="p-4">
            <a
              className="group transition-all duration-300 ease-in-out"
              href="#">
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
            <div className="fixed inset-0 bg-black" />
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
                <Dialog.Panel className="w-full  transform overflow-hidden  bg-black  transition-all">
                  <div className="flex justify-between items-center">
                    <h1 className="w-full font-aquirebold cursor-pointer">
                      Home
                    </h1>
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
                  <div className="flex flex-col">
                    <ul className="flex flex-col gap-2 text-black">
                      <li className="bg-white ">
                        <a href="">About me</a>
                      </li>
                      <li className="bg-white ">
                        <a href="">Wishlist </a>
                      </li>
                      <li className="bg-white ">
                        <a href="">Log in</a>
                      </li>
                      <li className="bg-white ">
                        <a href=""> Sign up</a>
                      </li>
                      <li className="bg-white ">
                        <a href=""> Sign up</a>
                      </li>
                      <li className="bg-white ">
                        <a href=""> Sign up</a>
                      </li>
                      <li className="bg-white ">
                        <a href=""> Sign up</a>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-5 ">
                      <button
                        onClick={() =>
                          navigator.clipboard.writeText("ed.gomes97@gmail.com")
                        }
                        className="bg-gradient-to-r from-[#4285F4] via-[#D7322A]  to-[#34A853] text-start">
                        <h1 className="text-white text-7xl">
                          <p>Gmail</p> 
                          <p> - Copy to clipboard</p>
                        </h1>
                      </button>

                      <button className="bg-[#0A66C2] text-start w-full">
                        <h1 className="text-white text-7xl">Linkedin</h1>
                      </button>
                      <button className="bg-[#161B22] text-start w-full">
                        <h1 className="text-white text-7xl">Github</h1>
                      </button>
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
