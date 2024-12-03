"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submittedPrompts } from "@/data";
import Image from "next/image";
import { BiTrash } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

function SubmittedPrompts() {
  const [activeTab, setActiveTab] = useState("all");
  const [prompts, setPrompts] = useState(submittedPrompts);

  useEffect(() => {
    if (activeTab === "approved-prompts") {
      setPrompts(
        submittedPrompts.filter((prompt) => prompt.status === "approved")
      );
    } else if (activeTab === "pending-approval") {
      setPrompts(
        submittedPrompts.filter((prompt) => prompt.status === "pending")
      );
    } else {
      setPrompts(submittedPrompts);
    }
  }, [activeTab]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-[#F4F7FA] pt-1 pb-8">
      <div className="container">
        {/* tabs */}
        <div className="bg-transparent lg:bg-white h-auto lg:h-[5.875rem] rounded-none lg:rounded-[2rem] flex items-center justify-center lg:justify-start gap-[0.62rem] lg:gap-5 pl-0 lg:pl-5 shadow-none lg:shadow-[0px,2px,2px,0px,rgba(46,64,87,0.16)] mt-6 lg:mt-[3.12rem]">
          {/* all */}
          <div
            onClick={() => setActiveTab("all")}
            className={`${
              activeTab === "all" ? "text-black lg:text-white" : "text-black/70"
            } py-[0.62rem] px-[1.25rem] lg:px-5 text-xs lg:text-[1.75rem] font-normal lg:font-medium cursor-pointer relative flex items-center justify-center`}
          >
            <div className="relative z-10">All</div>
            {activeTab === "all" && (
              <motion.div
                layoutId="activeTab"
                className="absolute bg-transparent border-b border-b-[#003] lg:border-b-none lg:bg-[#003] lg:rounded-[1.75rem] bottom-0 lg:-top-2 w-full h-full lg:h-[3.375rem]"
              ></motion.div>
            )}
          </div>
          {/* approved-prompts */}
          <div
            onClick={() => setActiveTab("approved-prompts")}
            className={`${
              activeTab === "approved-prompts"
                ? "text-black lg:text-white"
                : "text-black/70"
            } py-[0.62rem] px-[0.62rem] lg:px-5 text-xs lg:text-[1.75rem] font-normal lg:font-medium cursor-pointer relative flex items-center justify-center`}
          >
            <div className="relative z-10">Approved Prompts</div>
            {activeTab === "approved-prompts" && (
              <motion.div
                layoutId="activeTab"
                className="absolute bg-transparent border-b border-b-[#003] lg:border-b-none lg:bg-[#003] lg:rounded-[1.75rem] bottom-0 lg:-top-2 w-full h-full lg:h-[3.375rem]"
              ></motion.div>
            )}
          </div>
          {/* pending-approval */}
          <div
            onClick={() => setActiveTab("pending-approval")}
            className={`${
              activeTab === "pending-approval"
                ? "text-black lg:text-white"
                : "text-black/70"
            } py-[0.62rem] px-[0.62rem] lg:px-5 text-xs lg:text-[1.75rem] font-normal lg:font-medium cursor-pointer relative flex items-center justify-center`}
          >
            <div className="relative z-10">Pending Approval</div>
            {activeTab === "pending-approval" && (
              <motion.div
                layoutId="activeTab"
                className="absolute bg-transparent border-b border-b-[#003] lg:border-b-none lg:bg-[#003] lg:rounded-[1.75rem] bottom-0 lg:-top-2 w-full h-full lg:h-[3.375rem]"
              ></motion.div>
            )}
          </div>
        </div>
        {/* prompts */}
        <AnimatePresence>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mt-12 flex flex-col gap-6"
          >
            {prompts.map((item) => (
              <div
                data-aos="fade-down"
                key={item.id}
                className="flex items-center gap-4"
              >
                <div
                  className={`bg-white rounded-xl p-6 ${
                    item.status === "pending" ? "w-[90%]" : "w-[95%]"
                  } text-black text-xs md:text-base`}
                >
                  {item.name}
                </div>
                <div className="flex items-center gap-6">
                  {item.status === "pending" && (
                    <div className="cursor-pointer w-6 md:w-8 h-6 md:h-8">
                      <Image
                        src={"/images/edit-2.svg"}
                        alt="edit"
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="cursor-pointer">
                    <div className="md:hidden">
                      <BiTrash size={24} color="#F51B13" />
                    </div>
                    <div className="hidden md:block">
                      <BiTrash size={32} color="#F51B13" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default SubmittedPrompts;
