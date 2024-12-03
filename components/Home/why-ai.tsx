"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function WhyAi() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="lg:hidden my-8 container w-full h-[360px] md:h-[440px]"
      >
        <Image
          src={"/images/why-ai.svg"}
          alt="why-ai"
          width={570}
          height={540}
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
      <div className="bg-[#F4F7FA] py-12">
        <h2
          data-aos="zoom-in-up"
          data-aos-duration="800"
          className="text-[#003] text-xl lg:text-4xl font-medium lg:font-semibold text-center"
        >
          Why AI in Education?
        </h2>
        <p
          data-aos="zoom-in-up"
          data-aos-duration="900"
          className="text-[#003] text-base lg:text-2xl font-normal lg:font-medium opacity-70 mt-4 lg:mt-7 text-center"
        >
          Transforming Education with AI
        </p>
        <div className="container grid lg:grid-cols-2 gap-24 mt-4 lg:mt-12">
          <p
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="text-[#003] text-sm lg:text-2xl opacity-70"
          >
            AI has the power to revolutionize education by providing
            personalized learning experiences, improving student outcomes, and
            making classroom management more efficient. From automated grading
            to intelligent tutoring systems, AI can unlock new possibilities for
            teachers and students alike.
          </p>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="hidden lg:flex"
          >
            <Image
              src={"/images/why-ai.svg"}
              alt="why-ai"
              width={570}
              height={540}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyAi;
