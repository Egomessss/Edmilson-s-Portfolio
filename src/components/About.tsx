import { BsArrowReturnRight } from "react-icons/bs"
import Stack from "./Stack"
import idea from "../assets/images/idea.png"
import knowledge from "../assets/images/knowledge.png"
import problems from "../assets/images/problems.png"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"

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
    <div className="h-[2000px]">
      <h2 className="text-3xl mb-8 flex items-center gap-2">
        <BsArrowReturnRight className="text-3xl text-white" />
        <p>About Me</p>
      </h2>
      <div className=" w-[600px] flex gap-4 flex-col">
        {" "}
        <h2 className="">
          <span>{text}</span>
          <Cursor cursorColor="white" />
        </h2>
        <div className="flex gap-2">
          <a
            href="https://www.linkedin.com/in/egomessss/"
            target="_blank">
            <AiFillLinkedin className="text-4xl hover:fill-current hover:text-neongreen" />
          </a>
          <a
            href="https://github.com/Egomessss/Egomessss"
            target="_blank">
            {" "}
            <AiFillGithub className="text-4xl hover:fill-current hover:text-neongreen" />
          </a>
        </div>
        <a
          href="#_"
          className="relative w-36 px-6 py-3 font-bold text-black group">
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-neongreen group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full border-4 border-white"></span>
          <span className="relative font-aquirebold">Resume</span>
        </a>
      </div>

      <div className="flex items-center">
        <div className="">
          <p>
            Hi there! I'm Edmilson, a
            <span className="font-bold text-neongreen mx-2">
              front-end developer from Lisbon, Portugal
            </span>
            who has passion for
            <span className="font-bold text-neongreen mx-2">
              problem-solving and creating beautiful and user-friendly websites.
            </span>
          </p>
        </div>
        <img
          className="h-40"
          src={idea}
          alt=""
        />
      </div>

      <br />
      <div className="flex flex-row-reverse items-center">
        <div>
          {" "}
          <p>
            I began my journey as
            <span className="font-bold text-neongreen mx-2">self taught</span>
            but as that wasn't enough for me I enrolled in a
            <span className="font-bold text-neongreen mx-2">
              computer science degree
            </span>
            because I believe that knowledge is power and it will make me
            improve my technical abilities.
          </p>
        </div>
        <img
          className="h-40"
          src={knowledge}
          alt=""
        />
      </div>

      <br />
      <div className="flex items-center">
        <div>
          <p>
            I enjoy the
            <span className="font-bold text-neongreen mx-2">challenge </span>
            of taking a project from conception to completion, and
            <span className="font-bold text-neongreen mx-2">
              I pride myself on my ability to troubleshoot and find creative
              solutions to even the most difficult problems.
            </span>
          </p>
        </div>
        <img
          className="h-40"
          src={problems}
          alt=""
        />
      </div>

      <div className=" flex flex-col gap-1">
        <div className=""><Stack /></div>
      </div>
    </div>
  )
}

export default About
