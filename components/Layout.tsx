"use client"

import { LayoutProps } from "@/types";
import React from "react";
import Header from "./header";
import Footer from "./footer";

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
