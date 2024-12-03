"use client";

import { HeroProps } from "@/types";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ResourcesHero({ backgroundImage, title, desc }: HeroProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="h-[25.5rem] w-full bg-black mt-[82px] flex flex-col items-center justify-center gap-4"
      style={{
        background: backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="text-xl lg:text-4xl font-medium lg:font-semibold text-white text-center"
      >
        {title}
      </h2>
      <p
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="text-base lg:text-2xl font-normal lg:font-medium text-white/70 max-w-[77.5rem] text-center px-4 md:px-16 lg:px-0"
      >
        {desc}
      </p>
    </div>
  );
}

export default ResourcesHero;
