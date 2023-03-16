import React from "react"
import { BsArrowReturnRight } from "react-icons/bs"
import Skills from "./Skills"
import SkillsCard from "./SkillsCards"
import Stack from "./Stack"
import idea from "../assets/images/idea.png"
import knowledge from "../assets/images/knowledge.png"
import problems from "../assets/images/problems.png"

function About() {
  return (
    <div className="h-[2000px]">
      <h2 className="text-3xl mb-8 flex items-center gap-2">
        <BsArrowReturnRight className="text-3xl text-white" />
        <p>About Me</p>
      </h2>
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
        <div className="">
          <Stack />
        </div>
      </div>
    </div>
  )
}

export default About
