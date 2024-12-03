"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

function Testimonials() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="my-12">
      <h2
        data-aos="zoom-in-up"
        data-aos-duration="800"
        className="text-[#003] text-xl lg:text-4xl font-medium lg:font-semibold text-center"
      >
        How We're Making a Difference
      </h2>
      <p
        data-aos="zoom-in-up"
        data-aos-duration="900"
        className="text-[#003] text-sm lg:text-2xl opacity-70 mt-7 text-center"
      >
        Hear from educators who have transformed their classrooms using our
        platform
      </p>
      <div className="container lg:px-24 mt-16">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          navigation
          autoplay
          pagination
          slidesPerView={1}
          className="mt-[3.75rem]"
        >
          {/* mrs adebayo */}
          <SwiperSlide className="pb-12">
            <p className="text-[#003] text-sm lg:text-2xl text-center leading-[1.75rem] lg:leading-[2.75rem]">
              “The AI tools we discovered on AI for Educators NG have helped me
              personalize my teaching methods, improving my students’
              engagement.”
            </p>
            <div className="flex flex-col gap-1 items-center justify-center mt-[3.75rem]">
              <Image
                src={"/images/testimonials/mrs-adebayo.svg"}
                alt="mrs-adebayo"
                width={5 * 16}
                height={5 * 16}
                // className="rounded-full"
              />
              <p className="text-[#333] text-base lg:text-xl">Mrs. Adebayo</p>
              <p className="text-[#333] text-xs lg:text-lg opacity-65">
                Primary School Teacher, Lagos
              </p>
            </div>
          </SwiperSlide>
          {/* mr okafor */}
          <SwiperSlide className="pb-12">
            <p className="text-[#003] text-sm lg:text-2xl text-center leading-[1.75rem] lg:leading-[2.75rem]">
              “The tools and prompts from AI for Educators NG have made my
              lesson planning more efficient and personalized for my students."”
            </p>
            <div className="flex flex-col gap-1 items-center justify-center mt-[3.75rem]">
              <Image
                src={"/images/testimonials/mr-okafor.svg"}
                alt="mrs-adebayo"
                width={5 * 16}
                height={5 * 16}
                // className="rounded-full"
              />
              <p className="text-[#333] text-base lg:text-xl">Mr. Okafor</p>
              <p className="text-[#333] text-xs lg:text-lg opacity-65">
                Secondary School Science Teacher, Kebbi
              </p>
            </div>
          </SwiperSlide>
          {/* dr musa */}
          <SwiperSlide className="pb-12">
            <p className="text-[#003] text-sm lg:text-2xl text-center leading-[1.75rem] lg:leading-[2.75rem]">
              “The webinars provided by AI for Educators NG were a game-changer,
              offering practical tips on using AI in everyday teaching.”
            </p>
            <div className="flex flex-col gap-1 items-center justify-center mt-[3.75rem]">
              <Image
                src={"/images/testimonials/dr-musa.svg"}
                alt="mrs-adebayo"
                width={5 * 16}
                height={5 * 16}
                // className="rounded-full"
              />
              <p className="text-[#333] text-base lg:text-xl">Dr. Musa</p>
              <p className="text-[#333] text-xs lg:text-lg opacity-65">
                University Lecturer, Abuja
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
