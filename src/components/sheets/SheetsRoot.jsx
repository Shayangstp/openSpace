import React from "react";
import SheetCard from "./SheetCard";
import SheetsController from "./SheetsController";

const SheetsRoot = () => {
  return (
    <div id="sheetsRootContainer">
      <div className="mx-5 relative">
        <div id="sheetsController" className="absolute bottom-1 left-1">
          <SheetsController />
        </div>
        <div>
          <SheetCard />
        </div>
      </div>
    </div>
  );
};

export default SheetsRoot;
