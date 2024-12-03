"use client";

import { prompts } from "@/data";
import React, { useEffect } from "react";
import { IoCopy } from "react-icons/io5";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

function AvailablePrompts() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <motion.ul
      key="available-prompts"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="mt-6 lg:mt-[3.12rem] flex flex-col gap-[0.62rem] lg:gap-5"
    >
      {prompts.map((prompt) => (
        <li
          key={prompt.id}
          data-aos="fade-down"
          className="flex lg:grid lg:grid-cols-6 items-center justify-between gap-4 list-disc list-inside"
        >
          <div className="w-[90%] lg:w-full lg:col-span-5 bg-white rounded-xl p-6 text-xs lg:text-xl flex items-center gap-4">
            <div className="w-1 lg:w-2 h-1 lg:h-2 rounded-full bg-black"></div>
            <span>{prompt.name}</span>
          </div>
          <button className="border-none lg:border lg:border-[#2E4057] rounded-xl shadow-[0px,2px,2px,1px,rgba(46,64,87,0.25)] flex items-center justify-center gap-[0.62rem] py-[0.81rem] text-[#003] text-xl">
            <span className="hidden lg:block">Copy Prompt</span>
            <span>
              <IoCopy />
            </span>
          </button>
        </li>
      ))}
    </motion.ul>
  );
}

export default AvailablePrompts;
