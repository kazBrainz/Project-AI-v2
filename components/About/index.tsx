"use client";

import { AboutUsProps } from "@/types";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs(props: AboutUsProps) {
  const { title, type, paragraphB } = props;

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="">
      <h2
        data-aos="fade-up"
        className="text-[#003] text-xl lg:text-[2rem] font-medium text-center"
      >
        {title}
      </h2>
      {type === "About" && (
        <p
          data-aos="fade-up"
          className="mt-5 text-base lg:text-2xl text-black/70 font-medium text-center"
        >
          {props.paragraphA}
        </p>
      )}
      <p
        data-aos="fade-up"
        className="mt-6 text-sm lg:text-xl text-black/70 leading-7 text-left"
      >
        {paragraphB}
      </p>
      {type === "Mission" && (
        <ul className="ml-3">
          {props.list?.map((item, index) => (
            <li
              key={index}
              data-aos="fade-up"
              className="text-sm lg:text-xl text-black/70 leading-7 text-left list-disc list-inside"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      {type === "Team" && (
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {props.images?.map((image, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="p-3 bg-white rounded-xl border border-[rgba(0,0,51,0.30)] shadow-[0px,1px,12px,0px,rgba(46,64,87,0.25)] flex flex-col items-center justify-center"
            >
              <div className="w-full h-60">
                <Image
                  src={image.imageSrc}
                  alt="team-member"
                  width={261}
                  height={239}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <p className="mt-4 text-[#003] text-xl font-medium text-center">
                {image.teamName}
              </p>
              <p className="text-black/70 text-sm">{image.teamRole}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AboutUs;
