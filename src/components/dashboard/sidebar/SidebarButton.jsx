"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { LucideIcon, ChevronLeft, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const SidebarButton = ({ icon: Icon, className, children, subitems, ...props }) => {
  const [showAccordion, setShowAccordion] = useState(false);

  return (
    <div className="w-full">
      <Button
        variant="ghost"
        className={cn("flex justify-start", className)}
        {...props}
        onClick={() => {
          setShowAccordion(!showAccordion);
        }}
      >
        <div id="title" className="flex gap-2">
          <span>{Icon && <Icon size={20} />}</span>
          <span>{children}</span>
        </div>
        <div id="iconChev">
          {subitems && (showAccordion ? <ChevronDown size={5} /> : <ChevronLeft size={5} />)}
        </div>
      </Button>
      {/* <div id="subContainer" className="flex flex-col items-center">
        {/* fix the transition */}
      <div
        id="accordion"
        className={cn(
          "flex flex-col w-[80%] transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          { show: showAccordion }
        )}
      >
        {/* {showAccordion &&
            subitems?.map((item, idx) => {
              return (
                <Link to={item.href} key={idx}>
                  <SideBarButton size="sm" className="w-full justify-start ">
                    {item.label}
                  </SideBarButton>
                </Link>
              );
            })} */}
      </div>
      {/* </div> */}
    </div>
  );
};

export default SidebarButton;
