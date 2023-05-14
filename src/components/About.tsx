import { BsArrowReturnRight } from "react-icons/bs"
import Stack from "./Stack"
import idea from "../assets/images/idea.png"
import knowledge from "../assets/images/knowledge.png"
import problems from "../assets/images/problems.png"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { RiLightbulbFlashFill } from "react-icons/ri"
import { SlMagnifier } from "react-icons/sl"
import { VscDebugConsole } from "react-icons/vsc"

function About() {
  const [text, count] = useTypewriter({
    words: [
      "A Frontend Developer That Can Center A Div",
      "Tech Lover",
      "Problem Solver",
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className="h-[1700px] py-10 md:h-[1400px] md:py-20">
      <div className="flex items-center gap-2">
        <BsArrowReturnRight className="text-3xl text-white" />
        <h2 id="about">About Me</h2>
      </div>

      <div className="flex flex-col gap-4 md:w-[600px]">
        <h3>
          <span>{text}</span>
          <Cursor cursorColor="white" />
        </h3>

        <div className="flex flex-wrap gap-2 gap-y-4 py-8">
          <a
            href="https://www.linkedin.com/in/egomessss/"
            target="_blank"
            className="group relative mx-3 w-36 px-6 py-3 font-bold text-white">
            <span className="absolute inset-0 h-full w-full -translate-x-2 -translate-y-2 transform border-2 border-white bg-black transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 h-full w-full border-4 border-white"></span>
            <div className="relative flex items-center">
              {" "}
              <AiFillLinkedin className=" text-3xl text-white" />
              <span className="font-bold text-white">Linkedin</span>
            </div>
          </a>
          <a
            href="https://github.com/Egomessss/Egomessss"
            target="_blank"
            className="group relative mx-3 w-36 px-6 py-3 font-bold text-white">
            <span className="absolute inset-0 h-full w-full -translate-x-2 -translate-y-2 transform border-2 border-white bg-black transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 h-full w-full border-4 border-white"></span>
            <div className="relative flex items-center">
              {" "}
              <AiFillGithub className=" text-3xl text-white " />
              <span className="font-bold text-white">GITHUB</span>
            </div>
          </a>

          <a
            href="https://drive.google.com/file/d/1cEbbLkMagnuIny-cFhmmXP2PSwkC28UM/view?usp=sharing"
            target="_blank"
            className="group relative mx-3 w-36 px-6 py-3 font-bold text-white">
            <span className="absolute inset-0 h-full w-full -translate-x-2 -translate-y-2 transform border-2 border-white bg-black transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 h-full w-full border-4 border-white"></span>
            <span className="relative font-aquirebold">Resume</span>
          </a>
        </div>
      </div>

      {/* mid section */}
      <div className="flex items-center gap-4">
        <p>
          Hi there! I'm Edmilson, a
          <span className="mx-2 font-bold text-white ">
            front-end developer from Lisbon, Portugal
          </span>
          who has passion for
          <span className="mx-2 font-bold text-white ">
            problem-solving and creating applications that aim to solve real
            problems.
          </span>
        </p>
        <RiLightbulbFlashFill className="text-7xl w-52" />
      </div>

      <br />
      <div className="flex flex-row-reverse items-center gap-4">
        <p>
          I began my journey as
          <span className="mx-2 font-bold text-white ">self taught</span>
          but as that wasn't enough for me I enrolled in a
          <span className="mx-2 font-bold text-white ">
            computer science degree
          </span>
          because I believe that knowledge is power and it will make me improve
          my technical abilities.
        </p>
        <SlMagnifier className="text-7xl w-52" />
      </div>

      <br />
      <div className="flex items-center gap-4">
        <p>
          I enjoy the
          <span className="mx-2 font-bold text-white ">challenge </span>
          of taking a project from conception to completion, and
          <span className="mx-2 font-bold text-white ">
            I pride myself on my ability to troubleshoot and find creative
            solutions to even the most difficult problems.
          </span>
        </p>
        <VscDebugConsole className="text-7xl w-52" />
      </div>

      <div className=" flex flex-col gap-1">
        <div>
          <Stack />
        </div>
      </div>
    </div>
  )
}

export default About
