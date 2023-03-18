import { AiFillGithub } from "react-icons/ai"
import { BsArrowReturnRight } from "react-icons/bs"

import firebnb from "../assets/images/firebnb.png"

function Projects() {
  return (
    <div
      id="projects"
      className="flex h-[1500px] flex-col gap-10">
      <div className="flex items-center gap-2">
        <BsArrowReturnRight className="text-3xl text-white" />
        <h2>My projects</h2>
      </div>

      <a
        className="block"
        href="https://github.com/Egomessss/Egomessss"
        target="_blank">
        <AiFillGithub className="h-[50px] text-4xl hover:text-neongreen" />
      </a>
      <div className="flex flex-col gap-y-48 md:gap-20">
        {/* firebnb */}

        <div className="relative md:h-1/2 md:w-1/2">
          <img
            src={firebnb}
            alt="airbnb clone"
          />
          <div className="absolute top-20 flex flex-col items-end gap-2 bg-[#101010]/80 px-2 md:top-24 md:left-96 md:w-[500px]">
            <h3 className="text-right">Airbnb Clone</h3>
            <p className="text-right text-neongreen">
              Javascript | React | Tailwind | Mapbox Api
            </p>
            <p className=" text-right">
              Airbnb clone with all the main navigation functionalities, which i
              did so i could learn a bit of UX and UI design before so i could
              get some inspiration for my future apps
            </p>
            <div className="flex justify-center gap-6 p-4 align-middle">
              <a
                href="#_"
                className="group relative px-4  py-2 text-black">
                <span className="absolute inset-0 h-full w-full -translate-x-2 -translate-y-2 transform bg-neongreen transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 h-full w-full border-2 border-white"></span>
                <span className="relative font-aquirebold">Live Demo</span>
              </a>
              <a
                href="#_"
                className="group  relative px-4 py-2 font-bold text-black">
                <span className="absolute inset-0 h-full w-full -translate-x-2 -translate-y-2 transform bg-neongreen transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 h-full w-full border-2 border-white"></span>
                <span className="relative font-aquirebold">Code</span>
              </a>
            </div>
          </div>
        </div>
        {/* portfolio */}

        <div className="flex md:flex-row-reverse">
          <div className="relative md:h-1/2 md:w-1/2">
            <img
              src={firebnb}
              alt="Personal portfolio"
            />
            <div className="absolute top-20 flex w-full flex-col items-center gap-2 bg-[#101010]/80 px-2 md:top-24 md:right-96 md:w-[500px]">
              <h3>My Personal Portfolio</h3>
              <p className="m-2 text-neongreen">
                Javascript | React | Tailwind
              </p>
              <p className=" text-center">
                A display of my creativity and simplicity
              </p>
              <div className="flex justify-center gap-6 p-4 align-middle">
                <a
                  href="#_"
                  className="group relative px-4  py-2 text-black">
                  <span className="absolute inset-0 h-full w-full -translate-x-2 -translate-y-2 transform bg-neongreen transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 h-full w-full border-2 border-white"></span>
                  <span className="relative font-aquirebold">Live Demo</span>
                </a>
                <a
                  href="#_"
                  className="group  relative px-4 py-2 font-bold text-black">
                  <span className="absolute inset-0 h-full w-full -translate-x-2 -translate-y-2 transform bg-neongreen transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 h-full w-full border-2 border-white"></span>
                  <span className="relative font-aquirebold">Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* u-Mov */}

        <div className="relative flex md:h-1/2 md:w-1/2">
          <img
            src={firebnb}
            alt="airbnb clone"
          />
          <div className="absolute top-20 flex flex-col items-start gap-2 bg-[#101010]/80 px-2 md:top-24 md:left-96 md:w-[500px]">
            <h3 className="text-left">u-Mov</h3>
            <p className="text-left text-neongreen">
              Typescript | Nextjs | Tailwind | Google API
            </p>
            <p className=" text-left">
              Urban movement made easy - everything someone needs when moving in
              one place.
              <span className="font-semibold">
                Disclaimer: In-Development, to be shown in interviews.
              </span>
            </p>
            <div className="flex justify-center gap-6 p-4 align-middle">
              <a
                href="#_"
                className="group relative px-4  py-2 text-black">
                <span className="absolute inset-0 h-full w-full -translate-x-2 -translate-y-2 transform bg-neongreen transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 h-full w-full border-2 border-white"></span>
                <span className="relative font-aquirebold">Live Demo</span>
              </a>
              <a
                href="#_"
                className="group  relative px-4 py-2 font-bold text-black">
                <span className="absolute inset-0 h-full w-full -translate-x-2 -translate-y-2 transform bg-neongreen transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 h-full w-full border-2 border-white"></span>
                <span className="relative font-aquirebold">Code</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
