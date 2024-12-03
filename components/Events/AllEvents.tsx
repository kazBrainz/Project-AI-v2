"use client";

import { useState } from "react";
import UpcomingEvents from "./UpcomingEvents";
import { AnimatePresence, motion } from "framer-motion";

function AllEvents() {
  const [activeTab, setActiveTab] = useState("upcoming-events");
  return (
    <div className="bg-[#F4F7FA]">
      <div className="container py-8">
        {/* tabs */}
        <div className="bg-transparent lg:bg-white h-auto lg:h-[5.875rem] rounded-none lg:rounded-[2rem] flex items-center gap-[0.62rem] lg:gap-5 pl-0 lg:pl-5 shadow-none lg:shadow-[0px,2px,2px,0px,rgba(46,64,87,0.16)]">
          {/* upcoming-events-tab */}
          <div
            onClick={() => setActiveTab("upcoming-events")}
            className={`${
              activeTab === "upcoming-events"
                ? "text-black lg:text-white"
                : "text-black/70"
            } py-[0.62rem] px-[0.62rem] lg:px-5 text-xs lg:text-[1.75rem] font-normal lg:font-medium cursor-pointer relative flex items-center justify-center`}
          >
            <div className="relative z-10">Upcoming Events</div>
            {activeTab === "upcoming-events" && (
              <motion.div
                layoutId="activeTab"
                className="absolute bg-transparent border-b border-b-[#003] lg:border-b-none lg:bg-[#003] lg:rounded-[1.75rem] bottom-0 lg:-top-2 w-full h-full lg:h-[3.375rem]"
              ></motion.div>
            )}
          </div>
          {/* ongoing-events-tab */}
          <div
            onClick={() => setActiveTab("ongoing-events")}
            className={`${
              activeTab === "ongoing-events"
                ? "text-black lg:text-white"
                : "text-black/70"
            } py-[0.62rem] px-[0.62rem] lg:px-5 text-xs lg:text-[1.75rem] font-normal lg:font-medium cursor-pointer relative flex items-center justify-center`}
          >
            <div className="relative z-10">Ongoing Events</div>
            {activeTab === "ongoing-events" && (
              <motion.div
                layoutId="activeTab"
                className="absolute bg-transparent border-b border-b-[#003] lg:border-b-none lg:bg-[#003] lg:rounded-[1.75rem] bottom-0 lg:-top-2 w-full h-full lg:h-[3.375rem]"
              ></motion.div>
            )}
          </div>
          {/* previous-events-tab */}
          <div
            onClick={() => setActiveTab("previous-events")}
            className={`${
              activeTab === "previous-events"
                ? "text-black lg:text-white"
                : "text-black/70"
            } py-[0.62rem] px-[0.62rem] lg:px-5 text-xs lg:text-[1.75rem] font-normal lg:font-medium cursor-pointer relative flex items-center justify-center`}
          >
            <div className="relative z-10">Previous Events</div>
            {activeTab === "previous-events" && (
              <motion.div
                layoutId="activeTab"
                className="absolute bg-transparent border-b border-b-[#003] lg:border-b-none lg:bg-[#003] lg:rounded-[1.75rem] bottom-0 lg:-top-2 w-full h-full lg:h-[3.375rem]"
              ></motion.div>
            )}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <UpcomingEvents activeTab={activeTab} />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default AllEvents;
