"use client";
import React, { useState, useEffect } from "react";

const SheetsTimelineFilter = ({ events, onFilterChange }) => {
  const parsedEvents = events.map((event) => new Date(event)).sort((a, b) => a - b);
  const [selectedDate, setSelectedDate] = useState(parsedEvents[parsedEvents.length - 1]);

  useEffect(() => {
    onFilterChange(selectedDate);
  }, [selectedDate, onFilterChange]);

  const handleDateChange = (e) => {
    const newDate = new Date(e.target.value);
    setSelectedDate(newDate);
    onFilterChange(newDate);
  };

  const handlePrevClick = () => {
    const currentIndex = parsedEvents.findIndex(
      (event) => event.getTime() === selectedDate.getTime()
    );
    if (currentIndex > 0) {
      const newDate = parsedEvents[currentIndex - 1];
      setSelectedDate(newDate);
      onFilterChange(newDate);
    }
  };

  const handleNextClick = () => {
    const currentIndex = parsedEvents.findIndex(
      (event) => event.getTime() === selectedDate.getTime()
    );
    if (currentIndex < parsedEvents.length - 1) {
      const newDate = parsedEvents[currentIndex + 1];
      setSelectedDate(newDate);
      onFilterChange(newDate);
    }
  };

  return (
    <div className="flex items-center justify-center mb-4">
      <button onClick={handlePrevClick} className="mr-2 p-2 border rounded">
        &larr;
      </button>
      <input
        type="date"
        value={selectedDate.toISOString().substr(0, 10)}
        onChange={handleDateChange}
        className="p-2 border rounded"
      />
      <button onClick={handleNextClick} className="ml-2 p-2 border rounded">
        &rarr;
      </button>
      {/* <button onClick={() => onFilterChange(null)} className="ml-4 p-2 border rounded">
        Filters
      </button> */}
    </div>
  );
};

export default SheetsTimelineFilter;
