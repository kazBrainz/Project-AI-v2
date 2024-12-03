"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Partners() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-white flex flex-col items-center">
      <h2
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="text-[#005099] text-base font-semibold mt-4 lg:mt-0"
      >
        OUR PARTNERS
      </h2>
      <div className="container mt-10 flex items-center justify-center gap-7 lg:gap-24">
        <div data-aos="zoom-in-up" data-aos-duration="1000">
          <Image
            src={"/images/partners/us-flag.svg"}
            alt="us-flag_logo"
            width={151}
            height={120}
            layout="responsive"
          />
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="1000">
          <Image
            src={"/images/partners/AEIF-2024-Logo.svg"}
            alt="aeif_logo"
            width={141}
            height={143}
            layout="responsive"
          />
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="1000">
          <Image
            src={"/images/partners/U.S. flag-Seal-Alumni.svg"}
            alt="us-flag-seal_logo"
            width={336}
            height={85}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}

export default Partners;
