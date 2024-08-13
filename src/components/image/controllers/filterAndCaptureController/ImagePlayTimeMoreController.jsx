import React from "react";
import { Rewind, FastForward, Play, Pause, MoreHorizontal } from "lucide-react";

const playerData = [
  {
    icon: <FastForward className="w-4 h-4 " />,
  },
  {
    icon: <Play className="w-4 h-4" />,
  },
  {
    icon: <Pause className="w-4 h-4" />,
  },
  {
    icon: <Rewind className="w-4 h-4" />,
  },
];

const ImagePlayTimeMoreController = () => {
  return (
    <div
      id="controllerContainer"
      className="inline-flex items-center gap-5 border shadow py-2 px-4 rounded-xl bg-white"
    >
      <div id="player" className="flex gap-2">
        {playerData.map((item, index) => {
          return (
            <div
              key={index}
              className="border rounded-full border-black p-1 hover:bg-gray-100 cursor-pointer hover:text-blue-400"
            >
              {item.icon}
            </div>
          );
        })}
      </div>
      <div id="captureTime">
        <span className="text-sm text-gray-700">1:38 ب.ظ</span>
      </div>
      <div id="more">
        {/* when clicked open dropdown menu */}
        <MoreHorizontal className="w-5 h-5 text-gray-700 cursor-pointer hover:text-blue-400" />
      </div>
    </div>
  );
};

export default ImagePlayTimeMoreController;
