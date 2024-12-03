"use client";

import Image from "next/image";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";

function UserDashboard() {
  const [activeTab, setActiveTab] = useState("user");
  const [toggle, setToggle] = useState(false);

  const router = useRouter();
  return (
    <div className="bg-[#F4F7FA] mt-[82px] py-8 border">
      <div className="container">
        {/* tabs */}
        <div className="hidden md:flex items-center justify-between border-b border-b-[rgba(0,0,0,0.30)]">
          {/* user */}
          <div
            className={`flex items-center gap-[10px] cursor-pointer pb-1 px-4 ${
              activeTab === "user" ? "border-b-2 border-b-[#003]" : ""
            }`}
            onClick={() => setActiveTab("user")}
          >
            <FaUser size={32} color="#000033" />
            <p className="text-[#333] text-xl">User</p>
          </div>
          {/* my submissions */}
          <div
            className={`flex items-center gap-[10px] cursor-pointer pb-1 px-4`}
            onClick={() => router.push("submissions")}
          >
            <Image src="/images/note.svg" alt="note" width={32} height={32} />
            <p className="text-[#333] text-xl">My Submission</p>
          </div>
          {/* registered events */}
          <div
            className={`flex items-center gap-[10px] cursor-pointer pb-1 px-4`}
            onClick={() => router.push("events-webinars")}
          >
            <Image
              src="/images/calendar-tick.svg"
              alt="calendar"
              width={32}
              height={32}
            />
            <p className="text-[#333] text-xl">Registered Events/ Webinars</p>
          </div>
        </div>
        {/* form */}
        <div className="mt-0 md:mt-[60px]">
          <div className="flex items-center justify-center md:justify-start">
            <div className="w-[80px] lg:w-[134px] h-[80px] lg:h-[134px]">
              <Image
                src="/images/profile_pic.svg"
                alt="profile-pic"
                width={45}
                height={46}
                className="w-full h-full object-cover"
              />
            </div>
            <button
              className="hidden lg:block rounded-xl py-3 px-[26px] border border-[#2E4057] ml-8 text-[#003] text-xl font-medium"
              style={{
                boxShadow: "0px 2px 2px 1px rgba(46, 64, 87, 0.25)",
              }}
            >
              Change photo
            </button>
            <button className="hidden lg:block py-3 ml-6 text-[#003] text-xl font-medium">
              Remove photo
            </button>
          </div>
          <form className="mt-7 md:mt-14">
            <label
              htmlFor="full-name"
              className="text-[#333] text-base md:text-xl"
            >
              Full Name
            </label>
            <input
              type="text"
              className="mt-3 w-full md:w-[534px] h-[54px] rounded-[10px] border border-[#003] bg-transparent outline-none block text-black placeholder:text-black/50 text-xs md:text-base pl-5 mb-6"
              placeholder="John Doe"
            />
            <label htmlFor="email" className="text-[#333] text-base md:text-xl">
              Email
            </label>
            <input
              type="email"
              className="mt-3 w-full md:w-[534px] h-[54px] rounded-[10px] border border-[#003] bg-transparent outline-none block text-black placeholder:text-black/50 text-xs md:text-base pl-5 mb-6"
              placeholder="example@gmail.com"
            />
            <label
              htmlFor="password"
              className="text-[#333] text-base md:text-xl mt-6"
            >
              Password
            </label>
            <input
              type="password"
              className="mt-3 w-full md:w-[534px] h-[54px] rounded-[10px] border border-[#003] bg-transparent outline-none block text-black placeholder:text-black/50 text-xs md:text-base pl-5 mb-6"
            />
            <label
              htmlFor="confirm-password"
              className="text-[#333] text-base md:text-xl mt-6"
            >
              Confirm Password
            </label>
            <input
              type="confirm-password"
              className="mt-3 w-full md:w-[534px] h-[54px] rounded-[10px] border border-[#003] bg-transparent outline-none block text-black placeholder:text-black/50 text-xs md:text-base pl-5"
            />
            <div className="mt-6 md:mt-12 w-full md:w-[534px] flex justify-center">
              <button
                className="bg-[#003] px-[26px] py-5 md:py-3 w-full md:w-fit rounded-[32px] md:rounded-lg text-white text-base md:text-xl font-medium"
                style={{
                  boxShadow: "0px 2px 2px 1px rgba(46, 64, 87, 0.25)",
                }}
              >
                Confirm Changes
              </button>
            </div>
          </form>
        </div>
        {/* notifications */}
        <div className="mt-14">
          <h3 className="text-[#003] text-xl md:text-[32px] font-medium">
            Notifications
          </h3>
          <div className="flex items-center justify-between">
            <p className="mt-6 text-[#003] text-base md:text-xl w-[80%]">
              Receive updates, reminders, and news from AI for Educators NG
            </p>
            {toggle ? (
              <div
                className="shrink-0 cursor-pointer"
                onClick={() => setToggle(false)}
              >
                <Image
                  src={"/images/toggle-on.svg"}
                  alt="toggle on"
                  width={32}
                  height={32}
                />
              </div>
            ) : (
              <div
                className="shrink-0 cursor-pointer"
                onClick={() => setToggle(true)}
              >
                <Image
                  src={"/images/toggle-off.svg"}
                  alt="toggle off"
                  width={32}
                  height={32}
                />
              </div>
            )}
          </div>
          <p className="text-black/70 text-sm md:text-xl mt-6">
            AI for Educators NG will process your data to send you information
            about our platform’s features, educational tools, webinars, surveys,
            and updates related to AI in education. We will also notify you
            about new prompts, forum activities, and events, if you have opted
            in. Your data will not be shared with third parties, and may be
            processed outside of your country under the terms of our privacy
            policy. You can opt out of receiving these notifications by toggling
            the slider.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
