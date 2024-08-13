import React from "react";
import ImageBimSpliteController from "./sideControllers/ImageBimSpliteController";
import ImageLightLineController from "./sideControllers/ImageLightLineController";
import ImageZoomInOutController from "./sideControllers/ImageZoomInOutController";

const ImageSideControllerRoot = () => {
  return (
    <div id="sideControllerContainer" className="flex flex-col gap-3">
      <ImageLightLineController />
      <ImageBimSpliteController />
      <ImageZoomInOutController />
    </div>
  );
};

export default ImageSideControllerRoot;
