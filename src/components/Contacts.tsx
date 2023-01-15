import React from "react"
import Footer from "./Footer"
// !para validar form
// https://tailwindcomponents.com/component/floating-label-contact-form

function Contacts() {
  return (
    <div className=" h-screen">
      <h2 className="text-4xl font-medium">Contact Me</h2>
      <div className="flex items-center justify-start mt-20">
        <div className="mx-auto w-full max-w-lg">
          <p className="mt-3"></p>

          <form
            action="https://api.web3forms.com/submit"
            className="mt-10"
          >
            <input
              type="hidden"
              name="access_key"
              value="YOUR_ACCESS_KEY_HERE"
            />
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative z-0">
                <input
                  type="text"
                  name="name"
                  className="peer block w-full appearance-none border-0 border-b  bg-transparent py-2.5 px-0 text-md white focus:border-neongreen focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-md text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-neongreen peer-focus:dark:text-neongreen">
                  Your name
                </label>
              </div>
              <div className="relative z-0">
                <input
                  type="text"
                  name="email"
                  className="peer block w-full appearance-none border-0 border-b  bg-transparent py-2.5 px-0 text-md white focus:border-neongreen focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-md text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-neongreen peer-focus:dark:text-neongreen">
                  Your email
                </label>
              </div>
              <div className="relative z-0">
                <input
                  type="text"
                  name="email"
                  className="peer block w-full appearance-none border-0 border-b  bg-transparent py-2.5 px-0 text-md white focus:border-neongreen focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-md text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-neongreen peer-focus:dark:text-neongreen">
                  Subject
                </label>
              </div>
              <div className="relative z-0 col-span-2">
                <textarea
                  name="message"
                  rows="5"
                  className="peer block w-full appearance-none border-0 border-b  bg-transparent py-2.5 px-0 text-md white focus:border-neongreen focus:outline-none focus:ring-0"
                  placeholder=" "
                ></textarea>
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-md text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-neongreen peer-focus:dark:text-neongreen">
                  Your message
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="mt-5 rounded-md bg-black px-10 py-2 text-white"
            >
              <a
                href="#_"
                className="relative px-6 py-3 font-bold text-black group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-neongreen group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-4 border-white"></span>
                <span className="relative font-aquirebold">Send Message</span>
              </a>
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contacts
