import { SlidersHorizontal } from "lucide-react";
import React from "react";

const ImageFilterController = () => {
  return (
    <div
      id="controllerContainer"
      className="inline-flex gap-5 border shadow py-2 px-4 rounded-xl bg-white hover:text-blue-400"
    >
      <div id="share" className="cursor-pointer  flex gap-2 items-center">
        <SlidersHorizontal className="w-5 h-5" />
        <span>فیلتر</span>
      </div>
    </div>
  );
};

export default ImageFilterController;
