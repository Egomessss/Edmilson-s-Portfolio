import { BsArrowReturnRight } from "react-icons/bs"


function Education() {
  return (
    <div className="h-[800px] mt-32 md:mt-0">
      <div className=" mb-8 flex items-center gap-2">
        <BsArrowReturnRight className="text-white text-3xl" />
        <h2>Education</h2>
      </div>

      <div className="h-full w-full flex justify-center items-center">
        <ol className="h-1/2 relative border-l border-gray-200">
          <li className="mt-20 ml-4">
            <span className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white "></span>
            <time className="mb-1 text-sm font-normal leading-none  ">
              2022-2025
            </time>
            <h3 className="font-semibold">Computer Science</h3>
            <p className="mb-4 text-base font-normal ">Universidade Aberta</p>
          </li>
          <li className="mt-24 ml-4">
            <span className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white "></span>
            <time className="mb-1 text-sm font-normal leading-none  ">
              2019-2022
            </time>
            <h3 className="font-semibold  ">Urban Planning </h3>
            <p className="mb-4 text-base font-normal ">
              Instituto de Geografia e Ordenamento do Território
            </p>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Education
