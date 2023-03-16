import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function MyModal({isOpen, closeModal, openModal}) {
  

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}


   {/* <div
          className={
            nav
              ? "h-full w-[80%] easy-in-out duration-500 absolute top-14 right-0 md:hidden"
              : "fixed right-[-100%] top-0 h-full w-[60%] "
          }
          //  !prevent dropdown from showing when it reaches a certain width
        >
          <ul className="pt-20 uppercase p-4 bg-gray-800">
            <li className="p-4 border-b border-white cursor-pointer hover:underline">
              About Me
            </li>
          
            <li className="p-4 border-b border-white cursor-pointer hover:underline">
              Experience
            </li>
            <li className="p-4 border-b border-white cursor-pointer hover:underline">
              Projects
            </li>
          </ul>
        </div> */}

        {/* <Transition
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
              <div className="fixed inset-0 bg-black " />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95">
                  <Dialog.Panel className="w-full h-[100dvh] md:hidden bg-darkgray text-left transition-all">
                    <div className="">
                      <h1 className=" font-aquirebold cursor-pointer">
                        Home
                      </h1>
                      <div
                        onClick={openModal}
                        className="md:hidden">
                        {isOpen ? (
                          <RiCloseLine className="text-3xl" />
                        ) : (
                          <RiMenu5Line className="text-3xl" />
                        )}
                      </div>
                    </div>
                    <div className="flex">
                      <ul className="flex flex-col w-1/2 gap-2 text-black">
                        <li className="bg-white ">
                          <a href="">Link 1</a>
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
                    </div>
                    <div className="flex flex-wrap gap-5 w-1/2">
                      <button
                        onClick={() =>
                          navigator.clipboard.writeText("ed.gomes97@gmail.com")
                        }
                        className="bg-gradient-to-r from-[#4285F4] via-[#D7322A]  to-[#34A853] text-start">
                        <h1 className="text-white">
                          Gmail - Copy to clipboard
                        </h1>
                      </button>
                     
                      <button className="bg-[#0A66C2] text-start">
                        <h1 className="text-white">Linkedin</h1>
                      </button>
                      <button className="bg-[#161B22] text-start">
                        <h1 className="text-white">Github</h1>
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition> */}