import { LayoutProps } from "@/types";
import Image from "next/image";
import React from "react";

function LoginLayout({ children }: LayoutProps) {
  return (
    <div className="">
      <div className="hidden lg:block fixed top-0 left-0 w-1/2">
        <div className="relative h-screen">
          <Image
            src={"/images/auth_img.svg"}
            alt="auth-image"
            width={645}
            height={1024}
            className="w-full h-full object-cover rounded-tr-[100px] rounded-br-[100px]"
          />
          <div className="absolute top-8 left-20">
            <Image
              src={"/images/AI for EducatorslOGO.svg"}
              alt="logo"
              width={57}
              height={69}
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export default LoginLayout;
