import React from "react";
import ImageBimSpliteController from "./sideControllers/ImageBimSpliteController";
import ImageBrightnessCapturePath from "./sideControllers/ImageBrightnessCapturePath";
import ImageZoomInOutController from "./sideControllers/ImageZoomInOutController";

const ImageSideControllerRoot = () => {
  return (
    <div id="sideControllerContainer" className="flex flex-col gap-3">
      <ImageBrightnessCapturePath />
      <ImageBimSpliteController />
      <ImageZoomInOutController />
    </div>
  );
};

export default ImageSideControllerRoot;
