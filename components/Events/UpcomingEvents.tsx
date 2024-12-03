"use client";

import { upcomingEvents } from "@/data";
import Image from "next/image";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoTrash } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RegistrationSuccessModal from "../Modals/Events/RegistrationSuccessModal";
import { useRouter } from "next/navigation";

function UpcomingEvents({ activeTab }: { activeTab: string }) {
  const [isEventSuccessful, setIsEventSuccessful] = useState(false);
  const [showCancelEventModal, setShowCancelEventModal] = useState(false);

  const router = useRouter();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {isEventSuccessful && (
        <RegistrationSuccessModal
          isOpen={isEventSuccessful}
          setIsOpen={setIsEventSuccessful}
          type="success"
        />
      )}
      {showCancelEventModal && (
        <RegistrationSuccessModal
          isOpen={showCancelEventModal}
          setIsOpen={setShowCancelEventModal}
          type="cancel"
        />
      )}
      <motion.div
        key={activeTab}
        className="flex flex-col gap-5 py-6 lg:py-[3.12rem]"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {upcomingEvents.map((event) => (
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            key={event.id}
            className="flex flex-col lg:flex-row items-center gap-4"
          >
            <div className="w-full lg:w-[237px] h-[240px] lg:h-[159px] shrink-0 rounded-xl">
              <Image
                src={`/images/events-webinars/${event.image}`}
                alt={event.title}
                width={237}
                height={159}
                className={`w-full h-full object-cover ${
                  activeTab === "previous-events" ? "grayscale" : ""
                }`}
              />
            </div>
            <div className="bg-white px-5 rounded-xl w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-y-5 h-auto lg:h-[9.875rem]">
              <div className="shrink-0 space-y-5 py-0 lg:py-4 cursor-pointer" onClick={() => router.push('/events_webinars/interactive-session')}>
                {/* desktop date - time */}
                <div className="hidden lg:flex items-center gap-2 px-[0.85rem] py-1 w-fit rounded-[1.875rem] border border-black/50">
                  {/* date */}
                  <div className="flex items-center gap-1 text-black/50 font-medium border-r border-r-[#003] pr-3">
                    <span>
                      <FaCalendarAlt size={24} color="#003" />
                    </span>
                    <span>{event.date}</span>
                  </div>
                  {/* time */}
                  <div className="flex items-center gap-1 text-black/50 font-medium">
                    <span>
                      <FaClock size={24} color="#003" />
                    </span>
                    <span>{event.time}</span>
                  </div>
                </div>
                <motion.h3
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl text-black/70 hover:text-[#003] cursor-pointer"
                >
                  {event.title}
                </motion.h3>
                {/* location */}
                <div className="flex items-center gap-[0.62rem]">
                  <span>
                    <FaLocationDot size={24} color="#003" />
                  </span>
                  <p className="text-black/70 text-xs lg:text-sm">
                    {event.location}
                  </p>
                </div>
                {/* mobile date - time */}
                <div className="flex items-center gap-2 lg:hidden px-[0.85rem] py-1 w-fit rounded-[1.875rem] border border-black/50">
                  {/* date */}
                  <div className="flex items-center gap-1 text-xs lg:text-base text-black/50 font-medium border-r border-r-[#003] pr-3">
                    <span>
                      <FaCalendarAlt size={18} color="#003" />
                    </span>
                    <span>{event.date}</span>
                  </div>
                  {/* time */}
                  <div className="flex items-center gap-1 text-xs lg:text-base text-black/50 font-medium">
                    <span>
                      <FaClock size={18} color="#003" />
                    </span>
                    <span>{event.time}</span>
                  </div>
                </div>
              </div>
              {activeTab !== "previous-events" && (
                <div className="py-4 w-full lg:w-fit h-full">
                  <div className="border-l-none lg:border-l border-l-black pl-0 lg:pl-4 w-full h-full flex items-center">
                    {!event.isRegistered ? (
                      <motion.button
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsEventSuccessful(true)}
                        className="py-[0.81rem] px-[1.62rem] w-full lg:w-auto rounded-[2rem] lg:rounded-xl border border-[#003] lg:border-[#2E4057] text-[#003] text-base lg:text-xl font-normal lg:font-medium shadow-none lg:shadow-[0px,2px,2px,1px,rgba(46,64,87,0.25)]"
                      >
                        Register Now
                      </motion.button>
                    ) : (
                      <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
                        <button
                          disabled
                          className="bg-[rgba(46,64,87,0.70)] rounded-[2rem] lg:rounded-xl py-[0.81rem] px-[1.62rem] w-full lg:w-fit text-[#D9D9D9] text-base lg:text-xl font-normal lg:font-medium"
                        >
                          Registered
                        </button>
                        <motion.button
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.3 }}
                          onClick={() => setShowCancelEventModal(true)}
                          className="flex items-center justify-center gap-[0.62rem] border border-[#003] py-[0.81rem] px-[1.62rem] w-full lg:w-fit rounded-[2rem] lg:rounded-xl text-base lg:text-xl font-normal lg:font-medium"
                        >
                          <span>Cancel Registration</span>
                          <span>
                            <IoTrash color="#D32620" />
                          </span>
                        </motion.button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default UpcomingEvents;
