"use client";
import React from "react";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";

const DashboardRoot = ({ children }) => {
  return (
    <div id="root-container" className=" text-black bg-[#fcfcfc] min-h-[100vh]">
      <Sidebar />
      <div className="mx-5 lg:mr-[300px]">
        <div className="lg:pr-0 pr-3 py-3 lg:block hidden">{/* <Header /> */}</div>
        {children}
      </div>
    </div>
  );
};

export default DashboardRoot;
