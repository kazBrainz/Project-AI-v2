"use client";

import { news } from "@/data";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion } from "framer-motion";

function News() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-[#F4F7FA] py-[1.19rem] lg:py-[3.12rem]">
      <div className="container flex flex-col gap-[1.3rem] lg:gap-[3.12rem]">
        {news.map((newsItem) => (
          <div key={newsItem.id}>
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-black text-2xl lg:text-[2rem] font-medium md:font-semibold text-center md:text-left"
            >
              {newsItem.title}
            </h2>
            <div className="mt-5 space-y-6">
              {newsItem.subNews.map((subNewsItem) => (
                <div
                  key={subNewsItem.id}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8"
                >
                  <div className="w-full lg:w-[237px] h-[148px] shrink-0">
                    <Image
                      src={`/images/news-articles/${subNewsItem.image}`}
                      alt={subNewsItem.title}
                      width={237}
                      height={148}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="bg-white rounded-xl py-[1.38rem] h-fit lg:h-[148px] md:py-[0.69rem] px-4 md:px-[2.06rem] flex flex-col justify-center gap-4 md:gap-0">
                    <h3 className="text-black/70 text-xl font-medium leading-7 md:leading-normal">
                      {subNewsItem.title}
                    </h3>
                    <p className="text-black/70 text-sm leading-7 md:leading-normal">
                      {subNewsItem.desc}
                    </p>
                    <motion.div
                      className="w-fit"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={`/news-articles/${subNewsItem.id}`}
                        className="text-[#003] text-sm font-medium italic text-right lg:text-left"
                      >
                        Read more
                      </Link>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
