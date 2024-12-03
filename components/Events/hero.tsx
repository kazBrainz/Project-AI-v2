import Image from "next/image";
import React from "react";

function EventHero() {
  return (
    <div
      className="h-[25.5rem] flex flex-col gap-3 md:gap-24 items-center justify-end pb-8 md:pb-0"
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url(/images/events-webinars/events-webinars.jpg) lightgray",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="text-white font-medium md:font-semibold text-xl md:text-4xl text-center">
        Interactive Tools for Classroom Engagement
      </h2>
      <div className="container w-full flex items-center justify-end md:justify-between">
        <div className="hidden md:block w-[132px]">
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
        <div className="flex items-center gap-2">
          <p className="text-white text-sm md:text-2xl font-normal md:font-medium">
            Speakers at the event
          </p>
          <div className="w-[118px] md:w-[172px] h-[52px] md:h-[71px]">
            <Image
              src={"/images/speakers.svg"}
              alt="speakers"
              width={172}
              height={71}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventHero;
