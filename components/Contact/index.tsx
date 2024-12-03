import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function ContactDetails() {
  return (
    <div className="bg-[#F4F7FA]">
      <div className="container py-6">
        <div className="flex gap-2 lg:gap-0 justify-between">
          {/* phone */}
          <div>
            <div className="flex gap-9">
              <div className="bg-white w-8 lg:w-[3.375rem] h-8 lg:h-[3.375rem] rounded-full flex items-center justify-center">
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <h3 className="text-[#161C2D] text-base lg:text-2xl font-normal lg:font-bold">
                  Call us
                </h3>
                <p className="hidden lg:block text-black/60 mt-5">
                  234-000-000-00
                </p>
                <p className="hidden lg:block text-black/60">234-000-000-00</p>
              </div>
            </div>
            <p className="lg:hidden text-black/60 text-[0.625rem] mt-3">
              234-000-000-00
            </p>
            <p className="lg:hidden text-black/60 text-[0.625rem]">
              234-000-000-00
            </p>
          </div>
          {/* email */}
          <div>
            <div className="flex gap-9">
              <div className="bg-white w-8 lg:w-[3.375rem] h-8 lg:h-[3.375rem] rounded-full flex items-center justify-center">
                <MdEmail size={20} />
              </div>
              <div>
                <h3 className="text-[#161C2D] text-base lg:text-2xl font-normal lg:font-bold">
                  Email us
                </h3>
                <p className="hidden lg:block text-black/60 mt-5">
                  support@mail.com
                </p>
                <p className="hidden lg:block text-black/60">
                  contact@mail.com
                </p>
              </div>
            </div>
            <p className="lg:hidden text-black/60 text-[0.625rem] mt-3">
              support@mail.com
            </p>
            <p className="lg:hidden text-black/60 text-[0.625rem]">
              contact@mail.com
            </p>
          </div>
          {/* location */}
          <div>
            <div className="flex gap-9">
              <div className="bg-white w-8 lg:w-[3.375rem] h-8 lg:h-[3.375rem] rounded-full flex items-center justify-center">
                <FaLocationDot size={20} />
              </div>
              <div>
                <h3 className="text-[#161C2D] text-base lg:text-2xl font-normal lg:font-bold">
                  Visit us
                </h3>
                <p className="hidden lg:block text-black/60 mt-5">
                  lorem lorem lorem,
                </p>
                <p className="hidden lg:block text-black/60">Abuja</p>
              </div>
            </div>
            <p className="lg:hidden text-black/60 mt-3 text-[0.625rem]">
              lorem lorem lorem,
            </p>
            <p className="lg:hidden text-black/60 text-[0.625rem]">Abuja</p>
          </div>
        </div>
        <form className="bg-transparent md:bg-white rounded-none md:rounded-[0.625rem] p-0 md:p-6 shadow-none md:shadow-[0px,2px,2px,1px,rgba(46,64,87,0.25)] mt-6 lg:mt-20 grid lg:grid-cols-2 gap-x-16 gap-y-10">
          {/* name */}
          <div>
            <label htmlFor="name" className="text-[#003] text-base lg:text-lg">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full h-[3.125rem] rounded-lg border border-[#E7E9ED] pl-6 mt-2 outline-none"
              style={{
                boxShadow: "0px 1px 2px 0px rgba(46, 64, 87, 0.25)",
              }}
              placeholder="John Doe"
            />
          </div>
          {/* email */}
          <div>
            <label htmlFor="email" className="text-base lg:text-lg">
              Email
            </label>
            <input
              id="email"
              type="text"
              className="w-full h-[3.125rem] rounded-lg border border-[#E7E9ED] pl-6 mt-2 outline-none"
              style={{
                boxShadow: "0px 1px 2px 0px rgba(46, 64, 87, 0.25)",
              }}
              placeholder="Example@mail.com"
            />
          </div>
          {/* phone number */}
          <div>
            <label htmlFor="phone-number" className="text-base lg:text-lg">
              Phone Number
            </label>
            <input
              id="phone-number"
              type="tel"
              className="w-full h-[3.125rem] rounded-lg border border-[#E7E9ED] pl-6 mt-2 outline-none"
              style={{
                boxShadow: "0px 1px 2px 0px rgba(46, 64, 87, 0.25)",
              }}
              placeholder="234-000-000-00"
            />
          </div>
          {/* subject */}
          <div>
            <label htmlFor="subject" className="text-base lg:text-lg">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              className="w-full h-[3.125rem] rounded-lg border border-[#E7E9ED] pl-6 mt-2 outline-none"
              style={{
                boxShadow: "0px 1px 2px 0px rgba(46, 64, 87, 0.25)",
              }}
              placeholder="I need a help"
            />
          </div>
          {/* message */}
          <div className="md:col-span-2">
            <label htmlFor="message" className="text-base lg:text-lg">
              Message
            </label>
            <textarea
              id="message"
              rows={14}
              className="w-full resize-none rounded-lg border border-[#E7E9ED] pl-6 pt-4 mt-2 outline-none"
              style={{
                boxShadow: "0px 1px 2px 0px rgba(46, 64, 87, 0.25)",
              }}
              placeholder="Type your message"
            />
          </div>
          <button className="w-full lg:w-56 h-[3.375rem] rounded-[2rem] lg:rounded-lg bg-[#003] text-white text-base lg:text-xl font-normal lg:font-medium shadow-[0px,2px,2px,1px,rgba(46,64,87,0.25)] -mt-5">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactDetails;
