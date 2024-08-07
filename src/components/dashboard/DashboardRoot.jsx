"use client";
import React from "react";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";
import DashboardHeader from "./DashboardHeader";

const DashboardRoot = ({ children }) => {
  return (
    <div id="root-container" className=" text-black min-h-[100vh]">
      <DashboardHeader />
      <Sidebar />
      <div className="lg:mr-[70px]">
        <div className="lg:pr-0 pr-3 lg:block hidden"></div>
        {children}
      </div>
    </div>
  );
};

export default DashboardRoot;
