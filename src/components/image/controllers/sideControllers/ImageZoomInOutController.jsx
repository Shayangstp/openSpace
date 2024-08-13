import React from "react";
import { ZoomIn, ZoomOut } from "lucide-react";

const zoomIcon = [
  {
    icon: <ZoomIn />,
  },
  {
    icon: <ZoomOut />,
  },
];

const ImageZoomInOutController = () => {
  return (
    <div id="zoom" className="inline-flex flex-col gap-3 border shadow p-2 rounded-xl bg-white">
      {zoomIcon.map((icon, index) => {
        return (
          <span className="cursor-pointer hover:text-blue-400" key={index}>
            {icon.icon}
          </span>
        );
      })}
    </div>
  );
};

export default ImageZoomInOutController;
