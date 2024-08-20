import React, { Fragment } from "react";
import { Rewind, FastForward, Play, Pause, MoreHorizontal } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { selectImageSplitView } from "@/slices/imageSlices";

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
  const imageSplitView = useSelector(selectImageSplitView);
  return (
    <div
      id="controllerContainer"
      className="flex w-full items-center gap-5 border shadow py-2 px-4 rounded-xl bg-white"
    >
      <div id="player" className="flex gap-2">
        {playerData.map((item, index) => {
          return (
            <Fragment>
              {imageSplitView && (index === 1 || index === 2) ? null : (
                <div
                  key={index}
                  className="border rounded-full border-black p-1 hover:bg-gray-100 cursor-pointer hover:text-blue-400"
                >
                  {item.icon}
                </div>
              )}
            </Fragment>
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
