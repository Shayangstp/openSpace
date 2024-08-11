"use client";
import React, { useState, useEffect } from "react";
import SheetsTimelineFilter from "./SheetsTimelineFilter";
import SheetsTimeline, { YearSelector } from "./SheetsTimeline";
import { useSelector } from "react-redux";

const events = [
  "Sat Jan 05 2024 09:30:00 GMT+0330 (Iran Standard Time)", // January
  "Sat Jan 05 2023 09:30:00 GMT+0330 (Iran Standard Time)", // January
  "Tue Jan 23 2024 14:45:00 GMT+0330 (Iran Standard Time)", // January
  "Fri Feb 14 2024 08:00:00 GMT+0330 (Iran Standard Time)", // February
  "Sun Mar 17 2024 11:20:00 GMT+0330 (Iran Standard Time)", // March
  "Fri May 03 2024 17:30:00 GMT+0330 (Iran Standard Time)", // May
  "Sat Jun 15 2024 19:00:00 GMT+0330 (Iran Standard Time)", // June
  "Wed Jul 24 2024 07:50:00 GMT+0330 (Iran Standard Time)", // July
  "Sat Aug 10 2024 13:14:37 GMT+0330 (Iran Standard Time)", // August
  "Thu Sep 12 2024 16:10:00 GMT+0330 (Iran Standard Time)", // September
  "Tue Nov 05 2024 20:00:00 GMT+0330 (Iran Standard Time)", // November
];

const SheetsTimelineRoot = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const handleFilterChange = (newDate) => {
    setSelectedDate(newDate);
    console.log("Selected date:", newDate);
  };

  return (
    <div className="p-4">
      <YearSelector onYearChange={handleYearChange} />
      <SheetsTimelineFilter events={events} onFilterChange={handleFilterChange} />
      <SheetsTimeline
        events={events}
        selectedDate={selectedDate}
        onDateSelect={handleFilterChange}
        selectedYear={selectedYear}
      />
    </div>
  );
};

export default SheetsTimelineRoot;
