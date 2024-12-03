"use client";

import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { TbLockFilled } from "react-icons/tb";
import { useRouter } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  return (
    <div className="ml-0 lg:ml-[50%] w-full lg:w-1/2 h-full overflow-y-auto flex justify-center items-center">
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
          Welcome Back!
        </h2>
        <form className="w-full flex flex-col gap-8 lg:gap-[44px] mt-3">
          {/* email */}
          <div
            className="w-full pb-1 flex items-center gap-1"
            style={{
              borderBottom: "1px solid rgba(0, 0, 0, 0.40)",
            }}
          >
            <MdEmail size={24} />
            <input
              type="email"
              className="w-full bg-transparent outline-none pl-3 text-[#333] placeholder:text-[#333] text-base lg:text-xl"
              placeholder="Email Address"
            />
          </div>
          {/* password */}
          <div
            className="w-full pb-1 flex items-center gap-1"
            style={{
              borderBottom: "1px solid rgba(0, 0, 0, 0.40)",
            }}
          >
            <TbLockFilled size={24} />
            <input
              type="password"
              className="w-full bg-transparent outline-none pl-3 text-[#333] placeholder:text-[#333] text-base lg:text-xl"
              placeholder="Password"
            />
          </div>
          <button
            type="button"
            className="text-[#003] text-base lg:text-xl font-bold text-right"
            onClick={() => router.push("/forgot-password")}
          >
            Forgot Password?
          </button>
          <button
            type="submit"
            className="w-full bg-[#003] py-3 rounded-[32px] lg:rounded-lg shadow-[0px,2px,2px,1px,rgba(46,64,87,0.25)] text-white text-base lg:text-xl font-normal lg:font-medium"
          >
            Sign in
          </button>
        </form>
        {/* or */}
        <div className="flex items-center gap-4">
          <div className="w-14 bg-[rgba(0,0,0,0.4)] border"></div>
          <h3 className="text-[rgba(0,0,0,0.4)] text-xl lg:text-[32px] font-medium lg:font-semibold">
            OR
          </h3>
          <div className="w-14 bg-[rgba(0,0,0,0.4)] border"></div>
        </div>
        {/* sign-in-with-google */}
        <div
          className="bg-white rounded-[32px] lg:rounded-xl border border-[#2E4057] w-full py-3 flex items-center justify-center gap-2"
          style={{
            boxShadow: "0px 2px 2px 1px rgba(46, 64, 87, 0.15)",
          }}
        >
          <div className="w-6 lg:w-8 h-6 lg:h-8">
            <Image
              src={"/images/google-logo.svg"}
              alt="google-logo"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-base lg:text-xl font-normal lg:font-medium text-[#003]">
            Sign in with Google
          </p>
        </div>
        {/* sign-in-with-facebook */}
        <div
          className="bg-white rounded-[32px] lg:rounded-xl border border-[#2E4057] w-full py-3 flex items-center justify-center gap-2"
          style={{
            boxShadow: "0px 2px 2px 1px rgba(46, 64, 87, 0.15)",
          }}
        >
          <div className="w-6 lg:w-8 h-6 lg:h-8">
            <Image
              src={"/images/facebook-logo.svg"}
              alt="facebook-logo"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-base lg:text-xl font-normal lg:font-medium text-[#003]">
            Sign in with Facebook
          </p>
        </div>
        {/* sign up */}
        <div className="text-base lg:text-xl w-full">
          <span className="font-normal text-black">
            Already have an account?
          </span>{" "}
          <button
            className="font-bold text-[#003] inline-block"
            onClick={() => router.push("/signup")}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
