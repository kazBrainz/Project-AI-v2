"use client";

import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

function Hero() {
  const router = useRouter();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="relative w-full h-auto lg:h-[49.875rem] mt-[82px]"
      style={{
        backgroundImage:
          'url("/images/tech-support-oversees-ai-neural-network 1.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute bg-[rgba(0,0,0,0.40)] w-full h-full"></div>
      <div className="relative container h-full flex flex-col gap-40 justify-center pt-20 lg:pt-0 pb-28 lg:pb-0">
        <div className="flex flex-col gap-12 lg:gap-6 items-start lg:items-center text-left lg:text-center">
          <div className="space-y-3 lg:space-y-6">
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="text-white text-[0.5rem] lg:text-xs font-semibold uppercase"
            >
              Join Our Global AI Training Program
            </p>
            <h1
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="text-white text-base lg:text-[3.125rem] font-medium lg:font-semibold"
            >
              Empowering Educators with AI
            </h1>
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="text-white text-xs lg:text-xl"
            >
              Transform how you teach and learn with cutting-edge AI tools,
              personalized resources, and expert-led insights, all designed to
              help you enhance education in the classroom.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="flex items-center gap-4"
          >
            <motion.button
              whileHover={{
                scale: 1.08,
                backgroundColor: "#fff",
                color: "#003",
              }}
              transition={{ duration: 0.3 }}
              className="bg-[#003] rounded-xl py-[0.81rem] px-[1.61rem] text-white font-medium text-sm lg:text-xl flex items-center gap-2"
              style={{
                boxShadow: "0px 1.987px 4.967px 0px rgba(46, 64, 87, 0.25)",
              }}
              onClick={() => router.push("/prompts-database")}
            >
              <span>Explore AI prompts</span>
              <span>
                <IoIosArrowForward />
              </span>
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.08,
                borderColor: "#003",
                color: "#003",
              }}
              transition={{ duration: 0.3 }}
              className="rounded-xl py-[0.81rem] px-[1.61rem] text-white text-sm lg:text-xl border border-white"
              style={{ boxShadow: "0px 2px 2px 1px rgba(46, 64, 87, 0.25)" }}
              onClick={() => router.push("/ai-tools")}
            >
              View AI tools
            </motion.button>
          </div>
        </div>
        <div data-aos="fade-up" className="hidden lg:flex items-center gap-5">
          <div className="bg-[rgba(0,0,0,0.24)] rounded-xl py-10 flex flex-col justify-center items-center w-[17.5rem]">
            <div>
              <h2 className="text-white text-[2.48rem] font-semibold">
                Over 200
              </h2>
              <p className="text-white text-xl">Teachers Trained</p>
            </div>
          </div>
          <div className="bg-[rgba(0,0,0,0.24)] rounded-xl py-10 flex flex-col justify-center items-center w-[17.5rem]">
            <div>
              <h2 className="text-white text-[2.48rem] font-semibold">
                Over 20
              </h2>
              <p className="text-white text-xl">Schools Engaged</p>
            </div>
          </div>
          <div className="bg-[rgba(0,0,0,0.24)] rounded-xl py-[1.75rem] px-[1.81rem] flex flex-col justify-center w-[17.5rem]">
            <h2 className="text-white text-[2.48rem] font-semibold">2000+</h2>
            <p className="text-white text-xl">
              Educators Reached by AI Prompt Platform
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
