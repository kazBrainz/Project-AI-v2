"use client";

import { nav } from "@/data";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown, IoMdNotifications } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose, MdKeyboardArrowDown } from "react-icons/md";
import { useAtomValue } from "jotai";
import { isAuthenticatedAtom } from "@/store/globalAtom";
import { RiEdit2Fill } from "react-icons/ri";

function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);

  const router = useRouter();
  const pathname = usePathname();

  return (
    <header
      className="fixed top-0 bg-white w-full z-20"
      style={{ boxShadow: " 0px 4px 4px 0px rgba(117, 117, 117, 0.10)" }}
    >
      <nav className="container h-full flex justify-between items-center py-[6px]">
        <Image
          src={"/images/AI for EducatorslOGO.svg"}
          alt="logo"
          width={57}
          height={69}
          className="w-auto h-auto"
        />
        <ul className="hidden lg:flex items-center gap-12">
          {nav.map((navItem) => (
            <motion.li
              whileHover={{
                scale: 1.08,
              }}
              transition={{ duration: 0.3 }}
              key={navItem.id}
              className="group"
            >
              {navItem.icon ? (
                <div className="relative">
                  <div
                    className={`flex items-center gap-2 ${
                      pathname === "/ai-tools" ||
                      pathname === "/events_webinars" ||
                      pathname === "/prompts-database"
                        ? "text-[#003] font-bold"
                        : "text-[#333333] font-normal"
                    } text-base cursor-pointer`}
                  >
                    <span>{navItem.name}</span>
                    <span>
                      {navItem.icon && (
                        <span>
                          <IoIosArrowDown color="#292D32" />
                        </span>
                      )}
                    </span>
                  </div>
                  <div className="absolute bg-white flex flex-col gap-4 -left-5 top-6 pl-5 pt-4 pb-3 w-48 text-[#333] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                    {navItem?.subs?.map((sub) => (
                      <Link key={sub.id} href={sub.path}>
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={`${navItem.path}`}
                  className={`${
                    pathname === navItem.path
                      ? "text-[#003] font-bold"
                      : "text-[#333333] font-normal"
                  } ${
                    navItem.path === "/news_articles" &&
                    pathname?.startsWith("/news_articles")
                      ? "text-[#003] font-bold"
                      : "text-[#333333] font-normal"
                  }  text-base`}
                >
                  {navItem.name}
                </Link>
              )}
            </motion.li>
          ))}
        </ul>
        {isAuthenticated ? (
          <div className="hidden lg:block relative">
            <div className="flex items-center gap-7">
              <IoMdNotifications size={32} />
              <div
                className="flex items-center cursor-pointer"
                onClick={() => setShowUserDropdown(!showUserDropdown)}
              >
                <Image
                  src={"/images/profile_pic.svg"}
                  alt="profile_pic"
                  width={45}
                  height={46}
                />
                <MdKeyboardArrowDown size={32} />
              </div>
            </div>
            <AnimatePresence>
              {showUserDropdown && (
                <motion.div
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ y: 10, opacity: 1 }}
                  exit={{ y: 0, opacity: 0 }}
                  className="absolute p-5 bg-white rounded-md w-[385px] right-0 top-14 shadow-md"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-[86px] h-[86px]">
                      <Image
                        src={"/images/profile_pic.svg"}
                        alt="profile_pic"
                        width={45}
                        height={46}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="">
                      <p className="text-[#333] text-lg">John Doe</p>
                      <p className="text-[#333] text-lg">Example@gmail.com</p>
                      <button
                        className="flex items-center gap-1 text-lg font-medium text-[#003]"
                        onClick={() => router.push("/edit-profile")}
                      >
                        <span>Edit profile</span>
                        <Image
                          src="/images/edit-2.svg"
                          alt="edit"
                          width={24}
                          height={25}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="mt-7 ml-3 flex flex-col gap-8">
                    {/* my submission */}
                    <div
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={() => router.push("/submissions")}
                    >
                      <Image
                        src={"/images/note.svg"}
                        alt="note"
                        width={32}
                        height={32}
                      />
                      <p className="text-[#333] text-xl">My Submission</p>
                    </div>
                    {/* registered events */}
                    <div className="flex items-center gap-2 cursor-pointer">
                      <Image
                        src={"/images/calendar-tick.svg"}
                        alt="note"
                        width={32}
                        height={32}
                      />
                      <p className="text-[#333] text-xl">
                        Registered Events/ Webinars
                      </p>
                    </div>
                    {/* logout */}
                    <div className="flex items-center gap-2 cursor-pointer">
                      <Image
                        src={"/images/logout.svg"}
                        alt="logout"
                        width={32}
                        height={32}
                      />
                      <p className="text-[#333] text-xl">Logout</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <div className="hidden lg:flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
              className="border border-[#2E4057] text-[#000033] w-[117px] h-[54px] rounded-xl font-medium text-xl"
              onClick={() => router.push("/login")}
            >
              Sign in
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
              className="bg-[#000033] text-white rounded-xl font-medium text-xl w-[117px] h-[54px]"
              onClick={() => router.push("/signup")}
            >
              Sign up
            </motion.button>
          </div>
        )}
        <div className="lg:hidden" onClick={() => setShowMobileNav(true)}>
          <GiHamburgerMenu size={32} color="black" />
        </div>
        <AnimatePresence>
          {showMobileNav && (
            <motion.div
              initial={{ right: "-100%" }}
              animate={{ right: 0 }}
              exit={{ right: "-100%" }}
              transition={{ duration: 0.5 }}
              className={`fixed top-0 bg-white flex flex-col gap-4 w-full h-full ${
                showMobileNav ? "right-0" : "-right-[100%]"
              } py-5`}
            >
              <div
                className="flex justify-end pr-[0.62rem]"
                onClick={() => setShowMobileNav(false)}
              >
                <MdClose size={36} color="black" />
              </div>
              <div className="flex flex-col gap-6 px-3">
                {nav.map((navItem) => (
                  <div key={navItem.id} className="flex flex-col gap-6">
                    {navItem.subs && navItem.subs.length > 0 ? (
                      navItem.subs.map((subItem) => (
                        <Link
                          key={subItem.id}
                          href={subItem.path}
                          className="text-black pl-4"
                        >
                          {subItem.name}
                        </Link>
                      ))
                    ) : (
                      <Link href={navItem.path} className="text-black pl-4">
                        {navItem.name}
                      </Link>
                    )}
                  </div>
                ))}
                <button className="bg-[#003] text-white rounded-[2rem] h-[3.375rem] shadow-[0px,2px,2px,1px,rgba(46,64,87,0.25)]">
                  Sign up
                </button>
                <button className="border border-[#003] text-[#003] rounded-[2rem] h-[3.375rem] shadow-[0px,2px,2px,1px,rgba(46,64,87,0.25)]">
                  Login
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Header;
