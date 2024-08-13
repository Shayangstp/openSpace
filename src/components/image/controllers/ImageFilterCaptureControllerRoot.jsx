import React from "react";
import ImageFilterController from "./filterAndCaptureController/ImageFilterController";
import ImagePlayTimeMoreController from "./filterAndCaptureController/ImagePlayTimeMoreController";
import ImageDateController from "./filterAndCaptureController/ImageDateController";

const ImageFilterCaptureControllerRoot = () => {
  return (
    <div id="controllerContainer" className="flex gap-2">
      <ImageFilterController />
      <ImagePlayTimeMoreController />
      <ImageDateController />
    </div>
  );
};

export default ImageFilterCaptureControllerRoot;
