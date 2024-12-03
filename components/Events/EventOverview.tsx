import { keyTakeways, whoShouldJoin } from "@/data";
import React from "react";

function EventOverview() {
  return (
    <div className="container py-8">
      <div className="md:hidden w-[132px] -mt-8 mb-8">
        <div className="bg-[#003] px-6 py-4 text-white font-bold text-center">
          25TH <span className="block">December</span>
        </div>
        <div className="bg-white py-[10px] px-5">
          <p className="text-black/70 text-xs text-center">10am-2:00pm</p>
          <p className="mt-3 text-xs font-medium text-black/70 text-center">
            Tedprimehub, Abeokuta Ogun State, Nigeria
          </p>
        </div>
      </div>
      <p className="text-black/80 text-xs font-normal md:font-medium leading-7 md:leading-6">
        Join us for an engaging webinar on Interactive Tools for Classroom
        Engagement! This session is designed to help educators discover and
        implement AI-driven tools and strategies that boost student
        participation, foster collaboration, and make learning more dynamic and
        interactive.
        <br /> In today’s technology-driven classrooms, interactive tools are
        essential for creating personalized learning experiences, keeping
        students engaged, and promoting active learning. From quiz generators to
        collaborative platforms and real-time feedback tools, this webinar will
        guide you through practical applications of these resources.
      </p>
      <div className="mt-5 md:mt-6">
        <p className="text-black/80 text-sm font-bold leading-6">
          Key Takeaways
        </p>
        <ul>
          {keyTakeways.map((item, index) => (
            <li
              key={index}
              className="list-disc list-inside text-black/80 text-xs font-medium leading-6"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5 md:mt-6">
        <p className="text-black/80 text-sm font-bold leading-6">
          Who should join
        </p>
        <ul>
          {whoShouldJoin.map((item, index) => (
            <li
              key={index}
              className="list-disc list-inside text-black/80 text-xs font-medium leading-6"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto w-full md:w-fit mt-5 md:mt-8 ">
        <button
          className="w-full md:w-[402px] bg-[#003] rounded-[32px] md:rounded-lg py-5 md:py-3 text-white text-base md:text-xl font-medium text-center"
          style={{
            boxShadow: "0px 2px 2px 1px rgba(46, 64, 87, 0.25)",
          }}
        >
          Register Now
        </button>
      </div>
    </div>
  );
}

export default EventOverview;
