"use client";
import React, { useState, useEffect } from "react";

export const YearSelector = ({ onYearChange }) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleYearChange = (e) => {
    const newYear = parseInt(e.target.value, 10);
    setSelectedYear(newYear);
    onYearChange(newYear);
  };

  return (
    <div className="flex items-center justify-center mb-4">
      <label htmlFor="year" className="mr-2">
        Select Year:
      </label>
      <input
        type="number"
        id="year"
        value={selectedYear}
        onChange={handleYearChange}
        className="p-2 border rounded"
        min="1900"
        max="2100"
      />
    </div>
  );
};

// Function to generate dates every 5 days
const getDates = (year, events) => {
  const months = [];
  const eventDates = events.map((event) => new Date(event));

  for (let month = 0; month < 12; month++) {
    const startDate = new Date(year, month, 1);
    const monthName = startDate.toLocaleString("default", { month: "short" });

    const days = [];
    const totalDays = new Date(year, month + 1, 0).getDate();

    days.push({ day: monthName, show: true, hasEvent: false });

    for (let day = 1; day <= totalDays; day++) {
      const currentDate = new Date(year, month, day);
      const hasEvent = eventDates.some(
        (eventDate) =>
          eventDate.getDate() === currentDate.getDate() &&
          eventDate.getMonth() === currentDate.getMonth() &&
          eventDate.getFullYear() === currentDate.getFullYear()
      );

      const show = day % 5 === 1 && day !== 1 && day !== 31;
      days.push({ day, show, hasEvent });
    }

    months.push({ monthName, days });
  }

  return months;
};

const SheetsTimeline = ({ selectedYear, selectedDate, events, onDateSelect }) => {
  const [monthsAndDates, setMonthsAndDates] = useState([]);

  useEffect(() => {
    setMonthsAndDates(getDates(selectedYear, events));
  }, [selectedYear, events]);

  return (
    <div className="w-full h-[150px] overflow-x-auto overflow-y-hidden scroll-snap-x-mandatory scroll-snap-type-x border flex items-end relative">
      <div className="flex">
        {monthsAndDates.map((monthData, monthIndex) => (
          <div
            key={monthIndex}
            className="flex gap-10 px-4 bg-gray-100 border-gray-300 rounded scroll-snap-start"
          >
            <div className="flex flex-nowrap ">
              {monthData.days.map((dayData, dayIndex) => {
                const isSelected =
                  selectedDate.getDate() === dayData.day && selectedDate.getMonth() === monthIndex;

                return (
                  <div
                    key={dayIndex}
                    className={`inline-block text-center rounded mr-2 ${
                      isSelected ? "border-dotted border-2 border-black" : ""
                    }`}
                    onClick={() => {
                      if (dayData.hasEvent) {
                        const newSelectedDate = new Date(selectedYear, monthIndex, dayData.day);
                        onDateSelect(newSelectedDate);
                      }
                    }}
                  >
                    {dayData.show && (
                      <div className="border-b border-black rotate-90 mb-1 w-2 p-1"></div>
                    )}
                    <div className="w-4">{dayData.show && dayData.day}</div>
                    {dayData.hasEvent && (
                      <>
                        <div
                          id="candles"
                          className={`w-2 h-[105px] absolute top-0 cursor-pointer bg-green-200 ${
                            isSelected ? "border-dotted border-2 border-black" : ""
                          } `}
                        ></div>
                        {isSelected && (
                          <div className="absolute top-0 border p-2">
                            {selectedDate.toISOString()}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SheetsTimeline;
