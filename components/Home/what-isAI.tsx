"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function WhatIsAi() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="flex lg:hidden justify-end container mt-6 w-full h-[360px] md:h-[440px]"
      >
        <Image
          src={"/images/what-is-ai.svg"}
          alt="lady_image"
          width={500}
          height={514}
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
      <div className="bg-[#003] py-12 mt-6">
        <div className="container space-y-8 lg:space-y-12">
          <h2
            data-aos="zoom-in-up"
            data-aos-duration="800"
            className="text-white text-xl lg:text-4xl font-semibold text-center"
          >
            What is AI for Educators NG?
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <p
              data-aos="zoom-in-up"
              data-aos-duration="900"
              className="text-white opacity-70 text-sm lg:text-2xl text-center lg:text-left"
            >
              AI for Educators NG is a groundbreaking platform designed to equip
              teachers, administrators, and researchers with the knowledge,
              tools, and resources to effectively integrate Artificial
              Intelligence (AI) into the educational process. With a focus on
              empowering educators in Nigeria, our goal is to bridge the AI
              skills gap, enabling better teaching, personalized learning
              experiences, and higher student outcomes.
            </p>
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              className="hidden lg:flex justify-end"
            >
              <Image
                src={"/images/what-is-ai.svg"}
                alt="lady_image"
                width={500}
                height={514}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatIsAi;
