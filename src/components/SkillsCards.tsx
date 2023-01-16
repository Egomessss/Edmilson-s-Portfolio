import React from "react"
import {
  AiOutlineCode,
  AiOutlineSearch,
  AiOutlineShake,
  AiOutlineUser,
} from "react-icons/ai"

function SkillsCard() {
  return (
    <div className="grid md:grid-cols-4 gap-4">
      <div className="w-full bg-gray-800  border-b-2 border-r-2 ">
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
      <div className="w-full bg-gray-800  border-b-2 border-r-2">
        <div className="p-5">
          <AiOutlineShake className="text-3xl mb-2" />
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
      <div className="w-full bg-gray-800  border-b-2 border-r-2">
        <div className="p-5">
          <AiOutlineCode className="text-3xl mb-2" />
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
      <div className="w-full bg-gray-800  border-b-2 border-r-2">
        <div className="p-5">
          <AiOutlineUser className="text-3xl mb-2" />
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
