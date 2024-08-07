"use client";
import React, { useState } from "react";
import { Grid, Layers, LayoutGrid, ZoomIn, ZoomOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RsetSheetsView, selectSheetsView } from "@/slices/sheetsSlices";

const viewsIcon = [
  {
    icon: <LayoutGrid size={15} />,
  },
  {
    icon: <Layers size={15} />,
  },
];
const zoomIcon = [
  {
    icon: <ZoomIn size={15} />,
  },
  {
    icon: <ZoomOut size={15} />,
  },
];

const SheetsController = () => {
  const dispatch = useDispatch();

  const sheetsView = useSelector(selectSheetsView);

  return (
    <div id="sheetsController" className="mx-10 inline-flex flex-col gap-2">
      <div id="view" className="inline-flex flex-col gap-3 border shadow p-2 rounded-xl">
        {viewsIcon.map((icon, index) => {
          return (
            <span
              key={index}
              className={`p-2 cursor-pointer ${
                sheetsView === index
                  ? "bg-blue-400 rounded-lg text-white"
                  : "hover:bg-gray-100 rounded-lg"
              }`}
              onClick={() => {
                dispatch(RsetSheetsView(index));
              }}
            >
              {icon.icon}
            </span>
          );
        })}
      </div>
      <div id="zoom" className="inline-flex flex-col gap-3 border shadow p-2 rounded-xl">
        {zoomIcon.map((icon, index) => {
          return (
            <span key={index} className={`p-2 cursor-pointer rounded-lg hover:bg-gray-100`}>
              {icon.icon}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SheetsController;
