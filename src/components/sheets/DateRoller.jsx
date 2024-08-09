"use client";
import React, { useState } from "react";

// Function to generate dates every 5 days
const getDates = () => {
  const months = [];
  const startDate = new Date(); // Start from today

  // Define specific event dates for each abbreviated month
  const events = {
    Jan: [2, 14, 24],
    Feb: [5, 15, 25],
    Mar: [10, 20, 30],
    Apr: [12, 17, 27],
    May: [3, 13, 23],
    Jun: [8, 18, 28],
    Jul: [4, 14, 24],
    Aug: [1, 11, 21],
    Sep: [6, 16, 26],
    Oct: [2, 12, 22],
    Nov: [9, 19, 29],
    Dec: [5, 15, 25],
  };

  for (let month = 0; month < 12; month++) {
    const date = new Date(startDate.getFullYear(), month, 1); // Start with the 1st of each month
    const monthName = date.toLocaleString("default", { month: "short" }); // Short month name

    // Create dates with `show` key for every 5th day starting from 1
    const days = [];
    const totalDays = new Date(date.getFullYear(), month + 1, 0).getDate();

    // Add the month's name on the first day
    days.push({ day: monthName, show: true, hasEvent: false });

    for (let day = 1; day <= totalDays; day++) {
      const show = day % 5 === 1 && day !== 1 && day !== 31; // Show days every 5 days starting from 1 (excluding the first day)
      const hasEvent = events[monthName]?.includes(day) || false;
      days.push({ day, show, hasEvent });
    }

    months.push({ monthName, days });
  }

  return months;
};

const DateRoller = () => {
  const [showCandleDate, setShowCandleDate] = useState(null);

  const monthsAndDates = getDates();
  console.log(monthsAndDates);

  return (
    <div className="w-full h-[150px] overflow-x-auto scroll-snap-x-mandatory scroll-snap-type-x border flex items-end relative">
      <div className="flex">
        {monthsAndDates.map((monthData, monthIndex) => (
          <div
            key={monthIndex}
            className="flex gap-10 px-4 bg-gray-100 border-gray-300 rounded scroll-snap-start"
          >
            <div className="flex flex-nowrap ">
              {monthData.days.map((dayData, dayIndex) => (
                <>
                  <div key={dayIndex} className={`inline-block text-center rounded mr-2`}>
                    {dayData.show && (
                      <div className="border-b border-black rotate-90 mb-1 w-2 p-1"></div>
                    )}
                    <div className="w-4">{dayData.show && dayData.day}</div>
                    {dayData.hasEvent && (
                      <>
                        <div
                          id="candles"
                          className="bg-green-200 w-2 h-[105px] absolute top-0 hover:border-dotted hover:border-2 hover:border-black cursor-pointer"
                          onClick={() => {
                            setShowCandleDate(dayData.day);
                          }}
                        ></div>
                        <div id="showsCandleDate">
                          {showCandleDate === dayData.day && (
                            <div className="text-sm absolute top-0 ml-3 bg-white border border-gray-300 p-1 rounded">
                              {dayData.day}
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateRoller;
