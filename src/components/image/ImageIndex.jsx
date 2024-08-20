"use client";
import React from "react";
import ImageRoot from "./ImageRoot";
import { useSelector, useDispatch } from "react-redux";
import { selectImageSplitView } from "@/slices/imageSlices";

const ImageIndex = () => {
  const dispatch = useDispatch();
  const imageSplitView = useSelector(selectImageSplitView);

  console.log(imageSplitView);

  return (
    <div id="container">
      {!imageSplitView ? (
        <ImageRoot />
      ) : (
        <div className="flex gap-2 transition-all">
          <ImageRoot />
          <ImageRoot />
        </div>
      )}
    </div>
  );
};

export default ImageIndex;
