import Image from "next/image";
import React from "react";

function ForgotPasswordForm() {
  return (
    <div className="ml-0 lg:ml-[50%] w-full lg:w-1/2 h-screen overflow-y-auto flex justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center gap-[32px] my-8 mx-8">
        <div className="lg:hidden">
          <Image
            src={"/images/AI for EducatorslOGO.svg"}
            alt="logo"
            width={57}
            height={69}
            className="w-auto h-auto"
          />
        </div>
        <h2 className="text-black font-medium lg:font-semibold text-xl lg:text-[40px] w-full">
          Forgot Password
        </h2>
        <p className="text-black/70 text-sm lg:text-lg text-left">
          Enter your email address and we will send a link to reset the password
        </p>
        <form className="w-full flex flex-col gap-8 lg:gap-[44px] mt-3 bg-[#FAFAFF] p-6">
          {/* email */}
          <label htmlFor="email" className="text-[#003] text-lg -mb-6">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full h-[50px] rounded-lg border border-[#E7E9ED] bg-white outline-none pl-3 text-[#333] placeholder:text-[#333] text-base lg:text-xl"
            placeholder="example@mail.com"
          />
          <button
            className="w-full bg-[#003] py-3 rounded-[32px] lg:rounded-lg text-white text-base lg:text-xl font-normal lg:font-medium"
            style={{
              boxShadow: "0px 2px 2px 1px rgba(46, 64, 87, 0.25)",
            }}
          >
            Send
          </button>
          <button
            className="w-full bg-white py-3 rounded-[32px] lg:rounded-lg text-[#003] text-base lg:text-xl font-normal lg:font-medium"
            style={{
              boxShadow: "0px 2px 2px 1px rgba(46, 64, 87, 0.25)",
            }}
          >
            Back to login
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordForm;
