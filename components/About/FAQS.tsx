"use client";

import { faqs } from "@/data";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

function FAQS() {
  const [showFaq, setShowFaq] = useState("");
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="">
      <h3
        data-aos="fade-up"
        className="text-[#003] text-xl lg:text-[2rem] font-medium text-center"
      >
        FAQS
      </h3>
      <div className="mt-8 space-y-8">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            data-aos="fade-up"
            className="bg-white py-6 px-5 md:px-10 rounded-2xl shadow-[0px,4px,4px,0px,rgba(176,176,176,0.15)]"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-black text-base lg:text-2xl">{faq.ques}</p>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{
                  rotate: showFaq === faq.id.toString() ? 90 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="w-8 md:w-10 h-8 md:h-10 border border-[#003] rounded-lg flex items-center justify-center shrink-0 cursor-pointer"
                onClick={() =>
                  setShowFaq(
                    showFaq === faq.id.toString() ? "" : faq.id.toString()
                  )
                }
              >
                <IoIosArrowForward size={24} />
              </motion.div>
            </div>
            <AnimatePresence>
              {faq.id.toString() === showFaq && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="mt-4 text-[#333]">{faq.ans}</p>
                  <ul>
                    {faq.list &&
                      faq.listItems?.map((item, index) => (
                        <li key={index} className="text-[#333] list-disc list-inside">{item}</li>
                      ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQS;
