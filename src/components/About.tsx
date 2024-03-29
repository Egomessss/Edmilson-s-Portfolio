import { BsArrowReturnRight } from "react-icons/bs"
import Stack from "./Stack"
import idea from "../assets/images/idea.webp"
import knowledge from "../assets/images/knowledge.webp"
import problems from "../assets/images/problems.webp"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"

function About() {
  const [text] = useTypewriter({
    words: [
      "A Frontend Developer That Can Center A Div",
      "Tech Lover",
      "Problem Solver",
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className="min-h-[1800px] py-10 md:h-[1400px] md:py-20">
      <div className="flex items-center gap-2">
        <BsArrowReturnRight className="text-3xl text-white" />
        <h2 id="about">About Me</h2>
      </div>

      <div className="flex flex-col gap-4 md:w-[600px]">
        <h3 className="h-20 py-8">
          <span>{text}</span>
          <Cursor cursorColor="white" />
        </h3>

        <div className="flex gap-2 py-8">
          <a
            href="https://www.linkedin.com/in/egomessss/"
            target="_blank">
            <AiFillLinkedin className="text-5xl hover:fill-current hover:text-neongreen" />
          </a>
          <a
            href="https://github.com/Egomessss/Egomessss"
            target="_blank">
            <AiFillGithub className="text-5xl hover:fill-current hover:text-neongreen" />
          </a>
          <a
            href="https://drive.google.com/file/d/1cEbbLkMagnuIny-cFhmmXP2PSwkC28UM/view?usp=sharing"
            target="_blank"
            className="group relative mx-3 w-36 px-6 py-3 font-bold text-black">
            <span className="absolute inset-0 h-full w-full -translate-x-2 -translate-y-2 transform bg-neongreen transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 h-full w-full border-4 border-white"></span>
            <span className="relative font-aquirebold">Resume</span>
          </a>
        </div>
      </div>

      {/* mid section */}
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <p>
            Hi there! I'm Edmilson, a
            <span className="mx-2 font-bold text-neongreen">
              frontend developer from Lisbon, Portugal
            </span>
            who has passion for
            <span className="mx-2 font-bold text-neongreen">
              problem-solving and creating applications that aim to solve real world
              problems.
            </span>
          </p>

          <img
            className="h-40"
            src={idea}
            alt="man with a lamp head"
          />
        </div>

        <br />
        <div className="flex flex-row-reverse items-center gap-4">
          <p>
            I began my journey as
            <span className="mx-2 font-bold text-neongreen">self taught,</span>
            but that wasn't enough, so I enrolled in a
            <span className="mx-2 font-bold text-neongreen">
              computer science degree,
            </span>
            as I believe that step will take my skills to the next level.
          </p>

          <img
            className="h-40"
            src={knowledge}
            alt="magnifiying glass"
          />
        </div>

        <br />
        <div className="flex items-center gap-4">
          <p>
            I enjoy the
            <span className="mx-2 font-bold text-neongreen">challenge </span>
            of taking a project from conception to completion, and
            <span className="mx-2 font-bold text-neongreen">
              I pride myself on my ability to troubleshoot and find creative
              solutions to even the most difficult problems.
            </span>
          </p>

          <img
            className="h-40"
            src={problems}
            alt="problem solver"
          />
        </div>
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
