import React from "react";
import SheetCard from "./SheetCard";
import SheetsController from "./SheetsController";
import SheetsTimeline from "./SheetsTimeline";
import DateRoller from "./DateRoller";

const SheetsRoot = () => {
  return (
    <div id="sheetsRootContainer">
      <div className="mx-5 relative">
        <div id="sheetsController" className="absolute bottom-1 left-1">
          <SheetsController />
        </div>
        <div id="sheetsCard">
          <SheetCard />
        </div>
      </div>
      <div id="timeLine" className="mx-5 mt-10">
        {/* <SheetsTimeline /> */}
        <DateRoller />
      </div>
    </div>
  );
};

export default SheetsRoot;
