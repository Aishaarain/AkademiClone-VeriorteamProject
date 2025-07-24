import { useState } from 'react';

const eventColors = {
  purple: '#4D44B5',
  orange: '#FB7D5B',
  yellow: '#FCC43E',
  blue: '#303972',
  lightPurple: '#C1BBEB',
};

const events = [
  { day: 2, dots: ['purple', 'orange', 'yellow'] },
  // For day 6, simulate 9 events for the '7+' badge
  { day: 6, dots: ['lightPurple', 'lightPurple', 'lightPurple', 'lightPurple', 'lightPurple', 'lightPurple', 'lightPurple', 'orange', 'blue'] },
  { day: 10, dots: ['purple'], selected: true },
  { day: 17, dots: ['yellow', 'orange'] },
  { day: 20, dots: ['purple', 'yellow', 'orange'] },
  { day: 22, dots: ['blue'] },
  { day: 29, dots: ['orange'] },
];

const Calendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(0); // January
  const [selectedYear, setSelectedYear] = useState(2021);
  const [selectedDay, setSelectedDay] = useState(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const days = ['Mon', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Generate calendar grid for the month
  const getCalendarGrid = () => {
    const firstDay = new Date(selectedYear, selectedMonth, 1);
    let startDay = firstDay.getDay();
    if (startDay === 0) startDay = 7; // Sunday as 7
    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    const grid = [];
    let week = [];
    let dayNum = 1;
    // Fill first week
    for (let i = 1; i <= 7; i++) {
      if (i < startDay) week.push(null);
      else week.push(dayNum++);
    }
    grid.push(week);
    // Fill rest
    while (dayNum <= daysInMonth) {
      week = [];
      for (let i = 0; i < 7; i++) {
        if (dayNum <= daysInMonth) week.push(dayNum++);
        else week.push(null);
      }
      grid.push(week);
    }
    return grid;
  };

  const calendarGrid = getCalendarGrid();

  const getEventForDay = (day) => events.find((e) => e.day === day);

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8" >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h2 className="text-2xl font-bold text-[#363B64]">Calendar</h2>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <select
            className="rounded-[40px]  border-2 border-[#363B64] px-4 py-2 text-[#303972] font-semibold bg-white"
            value={selectedMonth}
            onChange={e => setSelectedMonth(Number(e.target.value))}
          >
            {months.map((m, i) => (
              <option key={m} value={i}>{m}</option>
            ))}
          </select>
          <select
            className="rounded-[40px] border-2 border-[#363B64] px-4 py-2 text-[#303972] font-semibold bg-white"
            value={selectedYear}
            onChange={e => setSelectedYear(Number(e.target.value))}
          >
            {[2020,2021,2022,2023,2024].map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
          <button className="ml-2 px-4 py-3 rounded-[40px] bg-[#4D44B5] text-white font-semibold text-sm">+ New Student</button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-4 mb-4">
        {days.map((d) => (
          <div key={d} className="text-center text-[#A098AE] font-semibold text-base">{d}</div>
        ))}
      </div>
      <div className="space-y-2">
        {calendarGrid.map((week, i) => (
          <div key={i} className="grid grid-cols-7 gap-4">
            {week.map((day, j) => {
              const event = getEventForDay(day);
              const isSelected = event && event.selected;
              // Special rendering for day 6 (orange bg, white number, event dots, 7+ badge)
              if (day === 6) {
                const eventDots = event ? event.dots.slice(0, 2) : [];
                const hasMore = event && event.dots.length > 2;
                return (
                  <div
                    key={j}
                    className="relative h-24 flex flex-col items-center justify-center rounded-xl cursor-pointer transition-all bg-[#FB7D5B] text-white font-bold border-2 border-[#FB7D5B]"
                    onClick={() => setSelectedDay(day)}
                  >
                    <span className="text-lg font-semibold">6</span>
                    <div className="flex -space-x-2 mt-2 items-center">
                      {eventDots.map((color, idx) => (
                        <span
                          key={idx}
                          className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center"
                          style={{background: eventColors[color]}}
                        ></span>
                      ))}
                      {hasMore && (
                        <span className="w-6 h-6 rounded-full bg-[#303972] text-white text-xs flex items-center justify-center font-bold border-2 border-white">7+</span>
                      )}
                    </div>
                  </div>
                );
              }
              // Special rendering for day 10 (deep purple bg, white number, yellow bar, label)
              if (day === 10) {
                return (
                  <div
                    key={j}
                    className="relative h-24 flex flex-col items-start justify-start rounded-xl cursor-pointer transition-all bg-[#4D44B5] text-white font-bold border-2 border-white outline outline-2 outline-[#4D44B5] p-3"
                    onClick={() => setSelectedDay(day)}
                  >
                    <span className="text-lg  ">10</span>
                    <div className="flex items-center mt-1">
                      <span className="w-1 h-8 bg-[#FCC43E] rounded-full mr-2"></span>
                      <span className="text-sm  font-normal">Karen, 2+</span>
                    </div>
                  </div>
                );
              }
              // Default rendering for other days
              return (
                <div
                  key={j}
                  className={`relative h-24 flex flex-col items-center justify-center rounded-xl cursor-pointer transition-all
                    ${day === null ? '' : isSelected ? 'bg-[#4D44B5] text-white font-bold border-2 border-[#4D44B5]' : 'bg-[#F3F4FF] text-[#303972] hover:bg-[#E9E6F5]'}
                  `}
                  onClick={() => day && setSelectedDay(day)}
                  style={day === null ? {background: 'transparent'} : {}}
                >
                  <span className="text-lg font-semibold">{day || ''}</span>
                  {/* Dots for events */}
                  {event && day !== 6 && day !== 10 && (
                    <div className="flex space-x-1 mt-2">
                      {event.dots && event.dots.map((color, id) => (
                        <span
                          key={id}
                          className="w-3 h-3 rounded-full"
                          style={{background: eventColors[color]}}
                        ></span>
                      ))}
                    </div>
                  )}
                  {/* Border for today or selected */}
                  {isSelected && <div className="absolute inset-0 rounded-xl border-2 border-[#4D44B5] pointer-events-none"></div>}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
