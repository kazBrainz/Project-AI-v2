"use client";

import { aiTools } from "@/data";
import Image from "next/image";
import React, { useEffect } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

function AITools() {
  const router = useRouter();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-[#F4F7FA] py-12">
      <div className="container flex flex-col justify-center items-center">
        <h2
          data-aos="zoom-in-up"
          data-aos-duration="800"
          className="text-[#003] text-xl lg:text-4xl font-medium lg:font-semibold"
        >
          AI Tools for Educators
        </h2>
        <p
          data-aos="zoom-in-up"
          data-aos-duration="900"
          className="text-[#003] text-base lg:text-2xl text-center lg:text-left font-medium opacity-70 mt-7"
        >
          Explore Cutting-Edge AI Tools Tailored for Educators
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-7 mt-12">
          {aiTools.map((tool) => (
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
      <div data-aos="zoom-in-up" className="flex justify-center">
        <motion.button
          whileHover={{
            scale: 1.08,
            backgroundColor: "#fff",
            color: "#003",
          }}
          transition={{ duration: 0.3 }}
          className="bg-[#003] rounded-xl px-[1.61rem] py-[0.81rem] flex items-center gap-3 text-white text-xl font-medium mt-12"
          style={{
            boxShadow: "0px 1.987px 4.967px 0px rgba(46, 64, 87, 0.25)",
          }}
          onClick={() => router.push("/ai-tools")}
        >
          <span>View all tools</span>
          <span>
            <FaArrowRightLong />
          </span>
        </motion.button>
      </div>
    </div>
  );
}

export default AITools;
