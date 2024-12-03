"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

function ToolsResources() {
  const router = useRouter();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="flex lg:hidden container my-6 w-full h-[360px] md:h-[440px]"
      >
        <Image
          src={"/images/happy-students.svg"}
          alt="happy-students"
          width={570}
          height={540}
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
      <div className="py-12 bg-[#003]">
        <div className="container">
          <h2
            data-aos="zoom-in-up"
            data-aos-duration="800"
            className="text-center text-white text-xl lg:text-4xl font-semibold"
          >
            Tools and Resources at Your Fingertips
          </h2>
          <p
            data-aos="zoom-in-up"
            data-aos-duration="900"
            className="text-center text-white text-base lg:text-2xl font-normal lg:font-medium mt-7 leading-[1.5rem] lg:leading-[2.75rem]"
          >
            Our platform offers a wide range of AI-driven tools and resources,
            tailored to meet the needs of educators at all levels.
          </p>
          <div className="mt-12 grid lg:grid-cols-2 gap-24">
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              className="hidden lg:flex"
            >
              <Image
                src={"/images/happy-students.svg"}
                alt="happy-students"
                width={570}
                height={540}
              />
            </div>
            <ul className="space-y-4">
              <li
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                className="list-disc list-inside text-white opacity-70 text-sm lg:text-2xl"
              >
                AI Tools Database: Discover and explore AI tools curated for
                various subjects and educational needs.
              </li>
              <li
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                className="list-disc list-inside text-white opacity-70 text-sm lg:text-2xl"
              >
                AI Prompt Database: Access a collection of AI-generated prompts
                to enhance lesson planning and student engagement.
              </li>
              <li
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                className="list-disc list-inside text-white opacity-70 text-sm lg:text-2xl"
              >
                News & Articles: Stay updated on the latest developments in AI
                and education, with a special focus on Nigeria.
              </li>
              <li
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                className="list-disc list-inside text-white opacity-70 text-sm lg:text-2xl"
              >
                AI Events Calendar: Never miss out on key AI-related events,
                webinars, and training sessions.
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex items-center justify-center gap-10 mt-[3.75rem]">
            <div data-aos="zoom-in-up">
              <motion.button
                whileHover={{
                  scale: 1.08,
                }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl px-[1.61rem] py-[0.81rem] flex items-center gap-3 text-[#003] text-xl font-medium"
                style={{
                  boxShadow: "0px 2px 2px 1px rgba(46, 64, 87, 0.25)",
                }}
              >
                <span>Contribute AI Prompt</span>
                <span>
                  <FaArrowRightLong />
                </span>
              </motion.button>
            </div>
            <div data-aos="zoom-in-up">
              <motion.button
                whileHover={{
                  scale: 1.08,
                }}
                transition={{ duration: 0.3 }}
                className="rounded-xl py-[0.81rem] px-[1.61rem] text-white border border-white text-xl"
                style={{ boxShadow: "0px 2px 2px 1px rgba(46, 64, 87, 0.25)" }}
                onClick={() => router.push("/prompts-database")}
              >
                Explore Prompts
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToolsResources;
