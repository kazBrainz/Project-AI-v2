"use client";

import { allTools, resourcesFilter } from "@/data";
import React, { useEffect, useState } from "react";
import { BsBoxArrowUpRight, BsSearch } from "react-icons/bs";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

function AllResources() {
  const [filter, setFilter] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-[#F4F7FA]">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="relative flex items-center justify-between w-full md:w-fit">
            <input
              type="text"
              className="bg-white w-full md:w-[24rem] lg::w-[31.25rem] h-[3.5rem] rounded-2xl px-6 outline-none text-[#131313] text-xl"
              placeholder="Search"
            />
            <div className="absolute right-6">
              <BsSearch color="#131313" />
            </div>
          </div>
          <div className="relative">
            <div
              className={`w-[19.875rem] h-[3.5rem] rounded-2xl bg-white text-[#131313] ${
                filter ? "text-base" : "text-xl"
              } hidden md:flex items-center justify-between px-6 cursor-pointer`}
              onClick={() => setShowFilter(!showFilter)}
            >
              <span>{filter ? filter : "Categories"}</span>
              <span>
                {showFilter ? (
                  <IoMdArrowDropup size={24} />
                ) : (
                  <IoMdArrowDropdown size={24} />
                )}
              </span>
            </div>
            <AnimatePresence>
              {showFilter && (
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bg-white px-6 py-4 flex flex-col gap-6 rounded-2xl w-full top-16 z-10 shadow-xl text-base"
                >
                  {resourcesFilter.map((filter) => (
                    <div
                      key={filter.id}
                      className="text-[#131313] cursor-pointer"
                      onClick={() => (
                        setFilter(filter.name), setShowFilter(false)
                      )}
                    >
                      {filter.name}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="mt-6 lg:mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-7">
          {allTools.map((tool) => (
            <div
              data-aos="flip-right"
              data-aos-duration="1000"
              key={tool.id}
              className="bg-white border border-[rgba(0,0,51,0.30)] rounded-xl py-4 px-4 md:px-8 w-full h-[286px] md:h-[371px] flex flex-col justify-between"
              style={{
                boxShadow: "0px 2px 2px 1px rgba(46, 64, 87, 0.25)",
              }}
            >
              <div>
                <div className="flex items-center gap-5">
                  <div className="w-[3.625rem] lg:w-[5.56rem] h-[3.625rem] lg:h-[5.56rem]">
                    <Image
                      src={`/images/ai-tools/${tool.image}`}
                      alt={tool.name}
                      width={5.56 * 16}
                      height={5.56 * 16}
                      className="w-auto h-auto object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-[#333] text-base md:text-2xl font-medium">
                      {tool.name}
                    </h2>
                    <div className="flex items-center gap-1">
                      <FaStar color="#FF9635" />
                      <FaStar color="#FF9635" />
                      <FaStar color="#FF9635" />
                      <FaStar color="#FF9635" />
                      <FaStar color="#FF9635" />
                    </div>
                  </div>
                </div>
                <p className="text-black text-xl md:text-2xl mt-2 md:mt-6">
                  Free
                </p>
                <p className="text-xs md:text-base text-[#333] mt-2">
                  {tool.desc}
                </p>
              </div>
              <div className="flex justify-end">
                <motion.button
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl border border-[#2E4057] text-[#003] text-sm md:text-xl font-medium flex items-center gap-3 py-[0.81rem] px-[1.62rem]"
                  style={{
                    boxShadow: "0px 2px 2px 1px rgba(46, 64, 87, 0.25)",
                  }}
                >
                  <span>View Website</span>
                  <span>
                    <BsBoxArrowUpRight size={15} />
                  </span>
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllResources;
