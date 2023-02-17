import React from "react"
import Footer from "./Footer"
// !para validar form
// https://tailwindcomponents.com/component/floating-label-contact-form

function Contacts() {
  return (
    <div className="h-screen">
      <h1 className=" font-medium">Contact Me</h1>
      <div className="flex flex-col">
        <div className="flex h-[500px] items-center justify-center">
          <form
            action="https://api.web3forms.com/submit"
            className="w-[800px]"
          >
            <input
              type="hidden"
              name="access_key"
              value="YOUR_ACCESS_KEY_HERE"
            />
            <div className="grid gap-12 sm:grid-cols-2">
              <div className="relative z-0">
                <input
                  type="text"
                  name="name"
                  className="text-md white peer block w-full appearance-none  border-0 border-b bg-transparent py-2.5 px-0 focus:border-neongreen focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="text-md absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-neongreen peer-focus:dark:text-neongreen">
                  Your name
                </label>
              </div>
              <div className="relative z-0">
                <input
                  type="text"
                  name="email"
                  className="text-md white peer block w-full appearance-none  border-0 border-b bg-transparent py-2.5 px-0 focus:border-neongreen focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="text-md absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-neongreen peer-focus:dark:text-neongreen">
                  Your email
                </label>
              </div>
              <div className="relative z-0">
                <input
                  type="text"
                  name="email"
                  className="text-md white peer block w-full appearance-none  border-0 border-b bg-transparent py-2.5 px-0 focus:border-neongreen focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="text-md absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-neongreen peer-focus:dark:text-neongreen">
                  Subject
                </label>
              </div>
              <div className="relative z-0 col-span-2">
                <textarea
                  name="message"
                  className="text-md white peer block w-full appearance-none  border-0 border-b bg-transparent py-2.5 px-0 focus:border-neongreen focus:outline-none focus:ring-0"
                  placeholder=" "
                ></textarea>
                <label className="text-md absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-neongreen peer-focus:dark:text-neongreen">
                  Your message
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="mt-5 rounded-md bg-black px-10 py-2"
            >
              <a
                href="#_"
                className="group relative px-6 py-3 font-bold text-black"
              >
                <span className="absolute inset-0 h-full w-full -translate-x-2 -translate-y-2 transform bg-neongreen transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 h-full w-full border-4 border-white"></span>
                <span className="relative font-aquirebold">Send Message</span>
              </a>
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Contacts
