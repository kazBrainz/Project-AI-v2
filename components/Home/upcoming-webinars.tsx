"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

function UpcomingWebinars() {
  const router = useRouter();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="lg:hidden container my-8 w-full h-[360px] md:h-[440px]"
      >
        <Image
          src={"/images/upcoming-webinars.svg"}
          alt="upcoming-webinars"
          width={570}
          height={540}
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
      <div className="py-12 bg-[#003]">
        <h2
          data-aos="zoom-in-up"
          data-aos-duration="800"
          className="text-center text-white text-xl lg:text-4xl font-medium lg:font-semibold"
        >
          Upcoming Webinars and Events
        </h2>
        <p
          data-aos="zoom-in-up"
          data-aos-duration="900"
          className="text-center text-white text-base lg:text-2xl font-normal lg:font-medium mt-3 lg:mt-7 leading-[2.75rem]"
        >
          Stay Ahead with Our AI Webinars
        </p>
        <div className="container mt-4 lg:mt-12 grid lg:grid-cols-2 gap-24">
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="hidden lg:flex"
          >
            <Image
              src={"/images/upcoming-webinars.svg"}
              alt="upcoming-webinars"
              width={570}
              height={540}
            />
          </div>
          <div>
            <p
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              className="text-white text-center lg:text-left opacity-70 text-sm lg:text-2xl leading-7 lg:leading-[2.75rem]"
            >
              Join our quarterly webinars where experts discuss the latest
              trends in AI and education. Gain practical knowledge and improve
              your AI proficiency in just a few sessions.
            </p>
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              className="flex items-start md:items-center lg:items-start justify-start md:justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{
                  scale: 1.08,
                }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[2rem] md:rounded-xl w-full md:w-fit px-[1.61rem] py-[0.81rem] flex items-center gap-3 text-[#003] text-base lg:text-xl font-normal lg:font-medium mt-4 lg:mt-14"
                style={{
                  boxShadow: "0px 2px 2px 1px rgba(46, 64, 87, 0.25)",
                }}
                onClick={() => router.push("/events-webinars")}
              >
                <span>Register for Our Next Webinar</span>
                <span>
                  <FaArrowRightLong />
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpcomingWebinars;
