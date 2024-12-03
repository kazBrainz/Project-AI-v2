import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { motion } from "framer-motion";

function SubmitPrompts() {
  const [showSubjectFilter, setShowSubjectFilter] = useState(false);
  const [showGradeFilter, setShowGradeFilter] = useState(false);
  return (
    <motion.form
      key="submit-prompts"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="mt-6 mb-6 lg:mb-14 lg:mt-[3.12rem]"
    >
      {/* ai-prompts */}
      <div>
        <label
          htmlFor="ai-prompts"
          className="text-base lg:text-2xl font-normal lg:font-medium text-black block"
        >
          Submit Your AI Prompt to Empower Educators
        </label>
        <textarea
          rows={18}
          className="resize-none rounded-xl bg-white w-full mt-4 lg:mt-6 p-5 outline-none text-sm lg:text-2xl font-normal lg:font-medium leading-[1.5rem] lg:leading-normal"
          placeholder="Example : Create a quiz on the periodic table for high school students."
        />
      </div>
      {/* description */}
      <div className="mt-6 lg:mt-[2.69rem]">
        <label
          htmlFor="description"
          className="text-black/70 text-xl lg:text-2xl font-medium"
        >
          Description
        </label>
        <textarea
          rows={8}
          className="resize-none rounded-xl bg-white w-full mt-4 lg:mt-6 p-5 outline-none font-medium text-sm lg:text-base leading-[1.5rem] lg:leading-normal"
          placeholder="Describe what the AI should generate and how it will support the lesson. Include any specific instructions or guidelines."
        />
      </div>
      <div className="mt-6 flex flex-col lg:flex-row items-center justify-between gap-y-6">
        <div className="w-full flex flex-col lg:flex-row items-center gap-3">
          {/* subject */}
          <div className="w-full lg:w-fit">
            <p className="text-black/50 mb-1 text-sm lg:text-base">
              Select Subject
            </p>
            <div
              className="bg-white rounded-2xl px-6 py-4 flex items-center justify-between w-full lg:w-[15.8rem] cursor-pointer"
              onClick={() => setShowSubjectFilter(!showSubjectFilter)}
            >
              <span className="text-base lg:text-xl font-normal lg:font-normal text-[#131313]">
                Subject
              </span>
              <span>
                {showSubjectFilter ? (
                  <IoMdArrowDropup size={24} />
                ) : (
                  <IoMdArrowDropdown size={24} />
                )}
              </span>
            </div>
          </div>
          {/* grade */}
          <div className="w-full lg:w-fit">
            <p className="text-black/50 mb-1 text-sm lg:text-base">
              Select Grade
            </p>
            <div
              className="bg-white rounded-2xl px-6 py-4 flex items-center justify-between w-full lg:w-[15.8rem] cursor-pointer"
              onClick={() => setShowGradeFilter(!showGradeFilter)}
            >
              <span className="text-base lg:text-xl font-normal text-[#131313]">
                Grade
              </span>
              <span>
                {showGradeFilter ? (
                  <IoMdArrowDropup size={24} />
                ) : (
                  <IoMdArrowDropdown size={24} />
                )}
              </span>
            </div>
          </div>
        </div>
        <button className="w-full lg:w-[32.5rem] py-[0.81rem] bg-[#003] text-white text-xl font-medium rounded-[2rem] lg:rounded-lg shadow-[0px,2px,2px,1px,rgba(46,64,87,0.25)]">
          Submit
        </button>
      </div>
    </motion.form>
  );
}

export default SubmitPrompts;
