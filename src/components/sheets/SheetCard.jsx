"use client";

import Image from "next/image";
import React, { Fragment } from "react";
import Plans from "../../../public/images/plansimage.jpg";
import { useSelector, useDispatch } from "react-redux";
import { selectSheetsView } from "@/slices/sheetsSlices";

const sheetsData = [
  {
    title: "پشت بام",
    plan: Plans,
  },
  {
    title: "طبقه 1",
    plan: Plans,
  },
  {
    title: "طبقه 2",
    plan: Plans,
  },
  {
    title: "طبقه 3",
    plan: Plans,
  },
  {
    title: "طبقه 4",
    plan: Plans,
  },
];

const SheetCard = () => {
  const sheetsView = useSelector(selectSheetsView);
  return (
    <div className={`${sheetsView === 0 ? "flex flex-wrap transition-transform" : ""} gap-1 h-[60vh] overflow-auto p-3`}>
      {sheetsData.map((sheets, index) => {
        return (
          <div className="flex flex-col gap-1 p-3">
            <div
              id="sheetsContent"
              className="flex flex-col justify-center items-center p-5 gap-5 rounded-lg border cursor-pointer hover:border-black"
            >
              <header>{sheets.title}</header>
              <div>
                <Image src={sheets.plan} alt="plan" width={250} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SheetCard;
