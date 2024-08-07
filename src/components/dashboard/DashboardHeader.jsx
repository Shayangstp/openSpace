import { User } from "lucide-react";
import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";

const DashboardHeader = () => {
  return (
    <div id="headerContainer" className="h-[10vh] w-[100vw] flex shadow-sm">
      <div id="logo&routes" className="px-5 flex justify-start items-center gap-10 flex-1">
        <div id="logo" className="">
          <Image src={Logo} width={50} height={96} />
        </div>
        <div id="detail">
          <span id="captureName"></span>
          <span id="route" className="text-gray-600 text-[15px] mr-10">
            پروژه شماره 2
          </span>
        </div>
      </div>
      <div id="userProfile" className="flex-1 flex justify-end items-center gap-5 px-10">
        <div id="userDetail" className="flex flex-col">
          <span>شایان گلستانی پور</span>
          <span className="text-[12px] mt-1 text-gray-700">g.shayan5529@gmail.com</span>
        </div>
        <div id="userAvatar" className="bg-gray-300 p-4 rounded-full">
          <User color="white" />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
