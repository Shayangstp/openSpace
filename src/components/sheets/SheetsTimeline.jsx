"use client";
import React, { useState } from "react";
import { Chrono } from "react-chrono";
import Calendar from "@vespaiach/horizontal-calendar";
import "@vespaiach/horizontal-calendar/dist/calendar.css";
import "@vespaiach/horizontal-calendar/dist/defaultTheme.css";

const events = [
  {
    title: "Event 1",
    cardTitle: "January 2024",
    cardSubtitle: "01",
    date: "January 1, 2024", // Full date for better formatting
    cardDetailedText: "Details about Event 1.",
  },
  {
    title: "Event 2",
    cardTitle: "February 2024",
    cardSubtitle: "14",
    date: "February 14, 2024", // Full date for better formatting
    cardDetailedText: "Details about Event 2.",
  },
  {
    title: "Event 3",
    cardTitle: "March 2024",
    cardSubtitle: "20",
    date: "March 20, 2024", // Full date for better formatting
    cardDetailedText: "Details about Event 3.",
  },
  // Add more events as needed
];

const generateTimelineItems = () => {
  const timelineItems = [];
  const months = ["January", "February", "March", "April", "May", "June"];

  months.forEach((month, monthIndex) => {
    for (let day = 1; day <= 5; day++) {
      timelineItems.push({
        title: `${month} ${day}`,
        cardTitle: `${month} ${day}, 2024`,
        cardSubtitle: `${day}`,
        cardDetailedText: `Details for ${month} ${day}`,
        date: `2024-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
      });
    }
  });

  return timelineItems;
};

const SheetsTimeline = ({ startDate, endDate, highlightedDates }) => {
  const [selection, setSelection] = useState([Date, Date | null]);
  return (
    <div className="container mx-auto p-4 overflow-auto">
      {/* <div className="w-full">
        <Chrono
          items={events}
          mode="HORIZONTAL"
          theme={{
            primary: "blue",
            secondary: "red",
            cardBgColor: "white",
            cardForeColor: "black",
            titleColor: "black",
            subtitleColor: "gray",
            textColor: "gray",
          }}
          itemWidth={300}
          slideShow
        >
          {events.map((event, index) => (
            <div key={index} className="text-center p-2">
              <div className="text-xl font-semibold">{event.cardTitle}</div>
              <div className="text-lg font-medium text-gray-600">{event.cardSubtitle}</div>
            </div>
          ))}
        </Chrono>
      </div>
      <Callender /> */}
      <Calendar selection={selection} onChange={setSelection} monthBoxWidth={2000} />
    </div>
  );
};

export default SheetsTimeline;

const highlightedDates = ["2023-06-21", "2023-07-21", "2023-08-21"];

export const Callender = ({ startDate, endDate }) => {
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
