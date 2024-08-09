import React from "react";
import SheetCard from "./SheetCard";
import SheetsController from "./SheetsController";
import SheetsTimeline from "./SheetsTimeline";

const highlightedDates = ["2023-06-21", "2023-07-21", "2023-08-21"];

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
        {/* <SheetsTimeline
          startDate="2023-06-15"
          endDate="2023-09-01"
          highlightedDates={highlightedDates}
        /> */}
      </div>
    </div>
  );
};

export default SheetsRoot;
