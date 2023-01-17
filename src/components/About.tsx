import React from "react"
import Skills from "./Skills"
import SkillsCard from "./SkillsCards"
import Stack from "./Stack"

function About() {
  return (
    <div className="md:h-screen">
      <h2 className="text-3xl mb-8">About Me</h2>
      <div className=" flex flex-col gap-1">
        <div className="">
          <p>
            Hi there! I'm Edmilson, a front-end developer from Lisbon, Portugal
            who has passion for problem-solving and creating beautiful and
            user-friendly websites. I began my journey as self taught but as
            that wasn't enough for me i enrolled in an computer science degree
            because I believe that knowledge is power and it will make me
            improve my skills, problem solving and let stay up-to-date with the
            latest development technologies as you can see in my tools and
            projects sections where I show how I integrate the latest and best
            tools.
          </p>
        </div>
        <br />
        <div className="">
          <p>
            I enjoy the challenge of taking a project from conception to
            completion, and I pride myself on my ability to troubleshoot and
            find creative solutions to even the most difficult problems. In my
            free time, I enjoy experimenting with new technologies and
            frameworks, and I am always on the lookout for new ways to enhance
            the user experience. Thank you for visiting my page, and please feel
            free to contact me if you have any questions or would like to work
            together on a project.
          </p>
        </div>
        <div className="mt-4">
          <h3 className="mb-5">My Coding Phylosophy and Tools</h3>
          <p className="mb-5">
            When buidling or cloning web projects, I strongly adhere to these
            principles which make my websites both unique and scaleable, while
            using the latest and greatest stacks.
          </p>
          <SkillsCard />
          <Stack />
        </div>
      </div>
    </div>
  )
}

export default About
