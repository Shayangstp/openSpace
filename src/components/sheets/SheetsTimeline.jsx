"use client";
import React from "react";

const SheetsTimeline = ({ startDate, endDate, highlightedDates }) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const dates = [];
  for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
    dates.push(new Date(d));
  }

  const isHighlighted = (date) => {
    return highlightedDates.some(
      (highlight) => new Date(highlight).toDateString() === date.toDateString()
    );
  };

  const getMonthLabel = (date) => {
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  let lastMonth = "";
  return (
    <div className="flex items-center space-x-2 overflow-x-auto overflow-y-hidden h-[20vh]">
      {dates.map((date, index) => {
        const currentMonth = getMonthLabel(date);
        const showMonth = currentMonth !== lastMonth;
        lastMonth = currentMonth;

        return (
          <div key={index} className="relative">
            {showMonth && (
              <div className="absolute top-[-2rem] left-[-50%] w-full text-center text-sm font-bold">
                {currentMonth}
              </div>
            )}
            <div
              className={`w-1 h-12 ${isHighlighted(date) ? "bg-green-500 cursor-pointer" : ""}`}
              onClick={() => isHighlighted(date) && alert(`Clicked on ${date.toDateString()}`)}
            ></div>
            <div className="text-xs text-center mt-1">{date.getDate()}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SheetsTimeline;
