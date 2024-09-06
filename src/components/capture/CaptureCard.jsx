import Image from "next/image";
import React from "react";
import plan from "../../../public/images/openspace sample/Group 8751.png";
import { Video } from "lucide-react";

const CaptureCard = () => {
  return (
    <div id="cardContainer" className="bg-white border border-gray-300 flex w-full">
      <div id="imageCard" className="border py-5 w-[40%] flex justify-center">
        <Image src={plan} className="w-[100%]" />
      </div>
      <div id="captureDetail" className="py-2 px-4 flex flex-col gap-1">
        <div id="date" className="text-gray-500 text-[15px]">
          Aug 31,2024
        </div>
        <div id="location" className="text-gray-500 text-[12px]">
          پشت بام
        </div>
        <div id="captureType" className="w-[300px] flex items-center">
          <div className="text-[12px] mt-1 flex gap-2 border border-green-500 py-1 px-3 rounded-xl text-green-700 bg-green-100 w-[35%]">
            <Video className="rotate-180 w-4 h-4" />
            <span className="font-bold">360 video</span>
          </div>
          <hr className="w-[60%]" />
        </div>
      </div>
    </div>
  );
};

export default CaptureCard;
