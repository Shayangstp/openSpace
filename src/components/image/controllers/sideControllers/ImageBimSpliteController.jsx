import { Rotate3D, SquareSplitHorizontal } from "lucide-react";
import React from "react";

const controllerData = [
  {
    icon: <Rotate3D />,
  },
  {
    icon: <SquareSplitHorizontal />,
  },
];

const ImageBimSpliteController = () => {
  return (
    <div
      id="controllerContainer"
      className="inline-flex flex-col gap-3 border shadow p-2 rounded-xl bg-white"
    >
      {controllerData.map((item, index) => {
        return (
          <div id="share" className="cursor-pointer hover:text-blue-400" key={index}>
            {index === 0 ? (
              <div className="text-center">
                {item.icon}
                <span className="text-[12px] font-bold">BIM</span>
              </div>
            ) : (
              item.icon
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageBimSpliteController;
