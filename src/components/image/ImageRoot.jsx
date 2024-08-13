import React from "react";
import ImageCard from "./ImageCard";
import ImageShareDownloadController from "./controllers/ImageShareDownloadController";
import ImageSideControllerRoot from "./controllers/ImageSideControllerRoot";
import ImageFilterCaptureControllerRoot from "./controllers/ImageFilterCaptureControllerRoot";
import MiniMapRoot from "./miniMap/MiniMapRoot";

const ImageRoot = () => {
  return (
    <div id="imageContainer" className="relative">
      <ImageCard />
      <div id="download&share" className="absolute top-3 right-[50%]">
        <ImageShareDownloadController />
      </div>
      <div id="sideController" className="absolute bottom-3 left-3">
        <ImageSideControllerRoot />
      </div>
      <div
        id="filterCaptureController"
        className="absolute bottom-3 left-1/2 transform -translate-x-1/2"
      >
        <ImageFilterCaptureControllerRoot />
      </div>
      <div id="miniMap" className="absolute top-3 left-3">
        <MiniMapRoot />
      </div>
    </div>
  );
};

export default ImageRoot;
