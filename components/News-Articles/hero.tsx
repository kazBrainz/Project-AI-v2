"use client"

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function NewsHero({title, author}: {title: string, author: string}) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="mt-[82px] h-[25.5rem] relative"
      style={{
        backgroundImage: "url('/images/news-articles/detailed-news-hero.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute w-full h-full top-0 bg-black/70"></div>
      <div className="container relative h-full flex items-end pb-6">
        <div data-aos="zoom-in" data-aos-duration="1000" className="">
          <h2 className="text-white text-xl lg:text-[1.75rem] font-medium lg:font-semibold">
            {title}
          </h2>
          <p className="text-white text-sm lg:text-xl mt-4">
            Author: {author}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsHero;
