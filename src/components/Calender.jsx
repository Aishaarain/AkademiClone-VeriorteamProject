


import React, { useState } from 'react';


const Calendar = () => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(2); // March = index 2
  const [selectedYear, setSelectedYear] = useState(2025);

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (month, year) => {
    const date = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDay = date.getDay();

    const calendar = [];
    let week = new Array(startDay).fill(null);

    for (let day = 1; day <= daysInMonth; day++) {
      week.push(day);
      if (week.length === 7) {
        calendar.push(week);
        week = [];
      }
    }

    if (week.length) {
      while (week.length < 7) week.push(null);
      calendar.push(week);
    }

    return calendar;
  };

  const calendar = getDaysInMonth(selectedMonth, selectedYear);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">School Calendar</h3>
        <div className="relative">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(Number(e.target.value))}
            className="text-sm text-gray-600 border-none bg-transparent rounded-xl focus:outline-none cursor-pointer"
          >
            {months.map((month, index) => (
              <option key={month} value={index}>{month} {selectedYear}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {days.map((day) => (
          <div key={day} className="text-center text-xs text-gray-500 py-2 font-medium">
            {day}
          </div>
        ))}
      </div>

      <div className="space-y-1">
        {calendar.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-7 gap-1">
            {week.map((date, dayIndex) => (
              <div
                key={dayIndex}
                onClick={() => date !== null && setSelectedDate(date)}
                className={`h-8 flex items-center justify-center text-sm rounded-lg cursor-pointer transition-colors
                  ${date === null
                    ? ''
                    : date === selectedDate
                    ? 'bg-green-500 text-white font-semibold'
                    : 'hover:bg-gray-100 text-gray-700'}`}
              >
                {date}
              </div>
            ))}
          </div>
        ))}
      </div>

      {selectedDate && (
        <div className="mt-4 text-sm text-gray-600">
          Selected date: <strong>{months[selectedMonth]} {selectedDate}, {selectedYear}</strong>
        </div>
      )}
    </div>
  );
};

export default Calendar;
