import React from "react"
import { AiFillGithub } from "react-icons/ai"

import firebnb from "../assets/images/firebnb.png"
import portfolio from "../assets/images/portfolio.png"

function Projects() {
  return (
    <div className="h-[1800px] flex flex-col gap-10">
      <h2 className="block">Projects</h2>
      <a
        className="block"
        href="https://github.com/Egomessss/Egomessss"
        target="_blank">
        <AiFillGithub className="text-4xl hover:text-neongreen h-[50px]" />
      </a>
      <div className="flex flex-col gap-20 ">
        {/* firebnb */}
        <div className="flex ">
          <div className="w-1/2 h-1/2 relative">
            <img
              className=""
              src={firebnb}
              alt="airbnb clone"
            />
            <div className="w-[500px] bg-[#101010]/80 absolute top-24 left-96 flex flex-col items-end">
              <h3 className="text tracking-tight  ">
               Airbnb Clone
              </h3>
              <p className="text-neongreen m-2">
                Javascript | React | Tailwind | Mapbox Api
              </p>
              <p className=" text-center">
               Airbnb clone with all the main navigation functionalities, which i did so i could learn a bit of UX and UI design before so i could get some inspiration for my future apps
              </p>
              <div className="flex justify-center align-middle p-4 gap-6">
                <a
                  href="#_"
                  className="relative px-4 py-2  text-black group">
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-neongreen group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-2 border-white"></span>
                  <span className="relative font-aquirebold">Live Demo</span>
                </a>
                <a
                  href="#_"
                  className="relative  px-4 py-2 font-bold text-black group">
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-neongreen group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-2 border-white"></span>
                  <span className="relative font-aquirebold">Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* portfolio */}
        <div className="flex flex-row-reverse">
          <div className="w-1/2 h-1/2 relative">
            <img
              className=""
              src={firebnb}
              alt=""
            />
            <div className="w-[500px] bg-[#101010]/80 absolute top-24 right-96 flex flex-col items-end">
              <h3 className="text tracking-tight  ">
                Amazon E-commerce Store Clone
              </h3>
              <p className="text-neongreen m-2">
                Typescript | React | Tailwind | Api
              </p>
              <p className=" text-center">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <div className="flex justify-center align-middle p-4 gap-6">
                <a
                  href="#_"
                  className="relative px-4 py-2  text-black group">
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-neongreen group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-2 border-white"></span>
                  <span className="relative font-aquirebold">Live Demo</span>
                </a>
                <a
                  href="#_"
                  className="relative  px-4 py-2 font-bold text-black group">
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-neongreen group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-2 border-white"></span>
                  <span className="relative font-aquirebold">Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* firebnb */}
        <div className="flex ">
          <div className="w-1/2 h-1/2 relative">
            <img
              className=""
              src={firebnb}
              alt=""
            />
            <div className="w-[500px] bg-[#101010]/80 absolute top-24 left-96 flex flex-col items-end">
              <h3 className="text tracking-tight  ">
                Amazon E-commerce Store Clone
              </h3>
              <p className="text-neongreen m-2">
                Typescript | React | Tailwind | Api
              </p>
              <p className=" text-center">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <div className="flex justify-center align-middle p-4 gap-6">
                <a
                  href="#_"
                  className="relative px-4 py-2  text-black group">
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-neongreen group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-2 border-white"></span>
                  <span className="relative font-aquirebold">Live Demo</span>
                </a>
                <a
                  href="#_"
                  className="relative  px-4 py-2 font-bold text-black group">
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-neongreen group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-2 border-white"></span>
                  <span className="relative font-aquirebold">Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
