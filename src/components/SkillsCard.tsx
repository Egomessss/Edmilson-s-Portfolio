import React from "react"
import { AiOutlineSearch } from "react-icons/ai"

function SkillsCard() {
  return (
    <div>
      <div className="max-w-sm border rounded-lg shadow-md bg-gray-900 border-gray-700">
        <div className="p-5">
          <AiOutlineSearch className="text-3xl" />
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
  )
}

export default SkillsCard
