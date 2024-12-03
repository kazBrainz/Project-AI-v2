"use client";

import Image from "next/image";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { promptsFilter } from "@/data";
import { TbFilterFilled } from "react-icons/tb";
import AvailablePrompts from "./AvailablePrompts";
import SubmitPrompts from "./SubmitPrompts";
import { IoIosArrowForward } from "react-icons/io";
import { MdCheck } from "react-icons/md";

function Prompts() {
  const [activeTab, setActiveTab] = useState("view-ai-prompts");
  const [showPromptsFilter, setShowPromptsFilter] = useState(false);
  const [showFilterSub, setShowFilterSub] = useState("");
  return (
    <div className="bg-[#F4F7FA] py-8">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between">
          {/* desktop_filter */}
          <div className="relative">
            <div
              className="bg-white rounded-2xl w-[25.375rem] py-4 px-6 text-[#131313] text-xl hidden lg:flex items-center justify-between cursor-pointer"
              onClick={() => setShowPromptsFilter(!showPromptsFilter)}
            >
              <span>Filter</span>
              <Image
                src="/images/ai-prompts/filter-icon.svg"
                alt="filter-icon"
                width={24}
                height={25}
              />
            </div>
            <AnimatePresence>
              {showPromptsFilter && (
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bg-white shadow-lg rounded-2xl w-full px-4 top-[70px] z-[15] space-y-4 max-h-[400px] overflow-y-auto hidden lg:block"
                >
                  {promptsFilter.map((filter) => (
                    <div key={filter.id}>
                      <div
                        className="bg-white text-[#131313] text-2xl rounded-2xl py-5 px-2 flex items-center justify-between cursor-pointer"
                        style={{
                          boxShadow:
                            "0px 4px 4px 0px rgba(176, 176, 176, 0.15)",
                        }}
                      >
                        <p>{filter.name}</p>
                        {filter.name === "Subjects" ||
                        filter.name === "Grades" ? (
                          <motion.div
                            initial={{ rotate: 0 }}
                            animate={{
                              rotate:
                                showFilterSub === filter.id.toString() ? 90 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-9 h-9 rounded-lg border border-black flex items-center justify-center"
                            onClick={() =>
                              setShowFilterSub(
                                showFilterSub === filter.id.toString()
                                  ? ""
                                  : filter.id.toString()
                              )
                            }
                          >
                            <IoIosArrowForward size={24} />
                            {/* {showFilterSub === filter.id.toString() ? (
                              <IoIosArrowDown size={24} />
                            ) : (
                              <IoIosArrowForward size={24} />
                            )} */}
                          </motion.div>
                        ) : (
                          <div className="w-9 h-9 flex items-center justify-center">
                            <div
                              className={`w-[1.125rem] h-[1.125rem] rounded-[0.125rem] border-2 border-[#003] ${
                                showFilterSub === filter.id.toString()
                                  ? "bg-[#003]"
                                  : "bg-transparent"
                              } flex items-center justify-center cursor-pointer`}
                              onClick={() =>
                                setShowFilterSub(
                                  showFilterSub === filter.id.toString()
                                    ? ""
                                    : filter.id.toString()
                                )
                              }
                            >
                              {showFilterSub === filter.id.toString() && (
                                <MdCheck color="white" size={18} />
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      {showFilterSub === filter.id.toString() &&
                        filter.subFilter.length > 0 && (
                          <div className="mt-4 space-y-4">
                            {filter.subFilter.map((subFilter) => (
                              <div
                                key={subFilter.id}
                                className="bg-white text-[#131313] text-2xl rounded-2xl py-5 px-2 flex items-center justify-between cursor-pointer"
                                style={{
                                  boxShadow:
                                    "0px 4px 4px 0px rgba(176, 176, 176, 0.15)",
                                }}
                              >
                                <p>{subFilter.name}</p>
                                <div className="w-9 h-9 rounded-lg border border-black flex items-center justify-center">
                                  <IoIosArrowForward size={24} />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* search */}
          <div className="shrink-0 bg-white rounded-2xl w-full lg:w-[39.625rem] py-4 px-6 text-[#131313] text-xl flex items-center justify-between">
            <input
              type="text"
              className="w-[90%] h-full outline-none bg-white"
              placeholder="Search"
            />
            <span>
              <BsSearch color="#131313" />
            </span>
          </div>
          {/* mobile_filter */}
          <div className="relative w-full lg:hidden">
            <div
              className="lg:hidden mt-6"
              onClick={() => setShowPromptsFilter(!showPromptsFilter)}
            >
              <TbFilterFilled size={24} />
            </div>
            <AnimatePresence>
              {showPromptsFilter && (
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bg-white shadow-lg rounded-2xl w-80 px-4 top-[60px] z-[15] space-y-4 max-h-[400px] overflow-y-auto block lg:hidden"
                >
                  {promptsFilter.map((filter) => (
                    <div key={filter.id}>
                      <div
                        className="bg-white text-[#131313] text-sm rounded-2xl py-5 px-2 flex items-center justify-between cursor-pointer"
                        style={{
                          boxShadow:
                            "0px 4px 4px 0px rgba(176, 176, 176, 0.15)",
                        }}
                      >
                        <p>{filter.name}</p>
                        {filter.name === "Subjects" ||
                        filter.name === "Grades" ? (
                          <motion.div
                            initial={{ rotate: 0 }}
                            animate={{
                              rotate:
                                showFilterSub === filter.id.toString() ? 90 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-9 h-9 rounded-lg flex items-center justify-center"
                            onClick={() =>
                              setShowFilterSub(
                                showFilterSub === filter.id.toString()
                                  ? ""
                                  : filter.id.toString()
                              )
                            }
                          >
                            <IoIosArrowForward size={24} />
                            {/* {showFilterSub === filter.id.toString() ? (
                              <IoIosArrowDown size={24} />
                            ) : (
                              <IoIosArrowForward size={24} />
                            )} */}
                          </motion.div>
                        ) : (
                          <div className="w-9 h-9 flex items-center justify-center">
                            <div
                              className={`w-[1.125rem] h-[1.125rem] rounded-[0.125rem] border-2 border-[#003] ${
                                showFilterSub === filter.id.toString()
                                  ? "bg-[#003]"
                                  : "bg-transparent"
                              } flex items-center justify-center cursor-pointer`}
                              onClick={() =>
                                setShowFilterSub(
                                  showFilterSub === filter.id.toString()
                                    ? ""
                                    : filter.id.toString()
                                )
                              }
                            >
                              {showFilterSub === filter.id.toString() && (
                                <MdCheck color="white" size={18} />
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      {showFilterSub === filter.id.toString() &&
                        filter.subFilter.length > 0 && (
                          <div className="mt-4 space-y-4">
                            {filter.subFilter.map((subFilter) => (
                              <div
                                key={subFilter.id}
                                className="bg-white text-[#131313] text-sm rounded-2xl py-5 px-2 flex items-center justify-between cursor-pointer"
                                style={{
                                  boxShadow:
                                    "0px 4px 4px 0px rgba(176, 176, 176, 0.15)",
                                }}
                              >
                                <p>{subFilter.name}</p>
                                <div className="w-9 h-9 rounded-lg flex items-center justify-center">
                                  <IoIosArrowForward size={24} />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        {/* tabs */}
        <div className="bg-transparent lg:bg-white h-auto lg:h-[5.875rem] rounded-none lg:rounded-[2rem] flex items-center justify-center lg:justify-start gap-[0.62rem] lg:gap-5 pl-0 lg:pl-5 shadow-none lg:shadow-[0px,2px,2px,0px,rgba(46,64,87,0.16)] mt-6 lg:mt-[3.12rem]">
          {/* view-ai-prompts-tab */}
          <div
            onClick={() => setActiveTab("view-ai-prompts")}
            className={`${
              activeTab === "view-ai-prompts"
                ? "text-black lg:text-white"
                : "text-black/70"
            } py-[0.62rem] px-[1.25rem] lg:px-5 text-xs lg:text-[1.75rem] font-normal lg:font-medium cursor-pointer relative flex items-center justify-center`}
          >
            <div className="relative z-10">View AI Prompts</div>
            {activeTab === "view-ai-prompts" && (
              <motion.div
                layoutId="activeTab"
                className="absolute bg-transparent border-b border-b-[#003] lg:border-b-none lg:bg-[#003] lg:rounded-[1.75rem] bottom-0 lg:-top-2 w-full h-full lg:h-[3.375rem]"
              ></motion.div>
            )}
          </div>
          {/* submit-prompts */}
          <div
            onClick={() => setActiveTab("submit-prompts")}
            className={`${
              activeTab === "submit-prompts"
                ? "text-black lg:text-white"
                : "text-black/70"
            } py-[0.62rem] px-[0.62rem] lg:px-5 text-xs lg:text-[1.75rem] font-normal lg:font-medium cursor-pointer relative flex items-center justify-center`}
          >
            <div className="relative z-10">Submit Prompts</div>
            {activeTab === "submit-prompts" && (
              <motion.div
                layoutId="activeTab"
                className="absolute bg-transparent border-b border-b-[#003] lg:border-b-none lg:bg-[#003] lg:rounded-[1.75rem] bottom-0 lg:-top-2 w-full h-full lg:h-[3.375rem]"
              ></motion.div>
            )}
          </div>
        </div>
        <AnimatePresence>
          {activeTab === "view-ai-prompts" ? (
            <AvailablePrompts />
          ) : (
            <SubmitPrompts />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Prompts;
