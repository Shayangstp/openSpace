"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { usePathname } from "next/navigation";
//ui imports -------------
// import { Popover, PopoverContent, PopoverTrigger } from "../../../ui/popover";
// import { Avatar, AvatarImage } from "../../../ui/avatar";
import { LogOut, MoreHorizontal, Settings } from "lucide-react";
import SideBarButton from "./SideBarButton";
// import logo from "../../../../assets/logo.png";

const sideBarHeader = (pathname) => {
  if (pathname === "/textSearch") {
    return "جستجوی متنی";
  } else if (pathname === "/advanceSearch") {
    return "جستجوی پیشرفته";
  } else {
    return <div className="flex justify-center me-10">{/* <img src={logo} alt="Logo" /> */}</div>;
  }
};

const SidebarDesktop = (props) => {
  return (
    <aside
      className={`w-[280px] max-w-xs h-[97vh] fixed right-2 top-3 z-40 rounded-lg bg-white shadow ${props.className}`}
    >
      <div className="h-full px-3 py-4">
        <h3 className="mx-3 text-lg font-semibold text-foreground text-center flex flex-col gap-2">
          {false && (
            <span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/")}
                className="text-[13px] px-5 bg-gradient-to-tr from-purple-200 to-blue-100 mb-2"
              >
                بازگشت به منو
              </Button>
            </span>
          )}
          <span className="mt-2">{/* <Link href={"/"}>{sideBarHeader(pathname)}</Link> */}</span>
        </h3>

        <div className={`${true ? "mt-10" : "mt-3"}`}>
          {true && (
            <div className="flex flex-col gap-1 w-full">
              {props.sidebarItems.links.map((item, index) => {
                const isActive = location.pathname === item.href;
                const buttonClass = `w-full flex justify-between gap-4 ${
                  isActive
                    ? "bg-gradient-to-r from-purple-200 to-blue-100  text-black hover:bg-purple-300"
                    : ""
                }`;

                return (
                  <Link key={index} href={item.href}>
                    <SideBarButton
                      icon={item.icon}
                      className={buttonClass}
                      subitems={item.subitems}
                    >
                      {item.label}
                    </SideBarButton>
                  </Link>
                );
              })}
            </div>
          )}

          <div className="absolute left-0 bottom-4 w-full px-3">
            {/* <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="w-full justify-start">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex gap-2">
                      <Avatar className="h-5 w-5">
                        <AvatarImage src="https://github.com/max-programming.png" />
                      </Avatar>
                      <span>شایان گلستانی پور</span>
                    </div>
                    <MoreHorizontal size={20} />
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="mb-2 w-56 p-3 rounded-[1rem]">
                <div className="space-y-1">
                  <Link to="/">
                    <SideBarButton size="sm" icon={Settings} className="w-full">
                      تنظیمات
                    </SideBarButton>
                  </Link>

                  <Button
                    size="sm"
                    className="w-full bg-red-500 hover:bg-red-400"
                    onClick={() => {
                      console.log("hi");
                      localStorage.removeItem("token");
                      navigate("/Login");
                    }}
                  >
                    <span>
                      <LogOut />
                    </span>
                    <span>خروج</span>
                  </Button>
                </div>
              </PopoverContent>
            </Popover> */}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarDesktop;
