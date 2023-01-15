import React from "react"
import { AiOutlineSearch } from "react-icons/ai"
import SkillsCard from "./SkillsCard"

function Skills() {
  return (
    <div className="h-screen">
      <h2 className="text-3xl mb-5">Skills</h2>
      <p className="mb-5">
        When buidling or cloning web projects, I strongly adhere to these
        principles which make my websites both unique and scaleable.
      </p>
      <div className="grid 	grid-template-columns: repeat(2, minmax(0, 1fr)) gap-4">
        <div className="max-w-sm border bg-gray-900 border-gray-700">
          <div className="p-5">
            <AiOutlineSearch className="text-3xl mb-2" />
            <h3 className="mb-2 text-2xl tracking-tight">
              SEO(Search Engine Optimization)
            </h3>
            <p className="mb-3 font-normal text-gray-300">
              I employ best SEO practices like "Semantic HTML" and more on
              websites and projects I work on to improve the site visibility and
              rankings on Google.
            </p>
          </div>
        </div>
        <div className="max-w-sm border bg-gray-900 border-gray-700">
          <div className="p-5">
            <AiOutlineSearch className="text-3xl mb-2" />
            <h3 className="mb-2 text-2xl tracking-tight">
              SEO(Search Engine Optimization)
            </h3>
            <p className="mb-3 font-normal text-gray-300">
              I employ best SEO practices like "Semantic HTML" and more on
              websites and projects I work on to improve the site visibility and
              rankings on Google.
            </p>
          </div>
        </div>
        <div className="max-w-sm border bg-gray-900 border-gray-700">
          <div className="p-5">
            <AiOutlineSearch className="text-3xl mb-2" />
            <h3 className="mb-2 text-2xl tracking-tight">
              SEO(Search Engine Optimization)
            </h3>
            <p className="mb-3 font-normal text-gray-300">
              I employ best SEO practices like "Semantic HTML" and more on
              websites and projects I work on to improve the site visibility and
              rankings on Google.
            </p>
          </div>
        </div>
        <div className="max-w-sm border bg-gray-900 border-gray-700">
          <div className="p-5">
            <AiOutlineSearch className="text-3xl mb-2" />
            <h3 className="mb-2 text-2xl tracking-tight">
              SEO(Search Engine Optimization)
            </h3>
            <p className="mb-3 font-normal text-gray-300">
              I employ best SEO practices like "Semantic HTML" and more on
              websites and projects I work on to improve the site visibility and
              rankings on Google.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
