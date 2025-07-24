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
  { day: 6, dots: ['lightPurple', 'lightPurple', 'lightPurple', 'lightPurple', 'lightPurple', 'lightPurple', 'lightPurple', 'orange', 'blue'] },
  { day: 10, dots: ['purple'], selected: true },
  { day: 17, dots: ['yellow', 'orange'] },
  { day: 20, dots: ['purple', 'yellow', 'orange'] },
  { day: 22, dots: ['blue'] },
  { day: 29, dots: ['orange'] },
];

const Calendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(0); 
  const [selectedYear, setSelectedYear] = useState(2021);
  const [selectedDay, setSelectedDay] = useState(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const days = ['Mon', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const getCalendarGrid = () => {
    const firstDay = new Date(selectedYear, selectedMonth, 1);
    let startDay = firstDay.getDay();
    if (startDay === 0) startDay = 7;
    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    const grid = [];
    let week = [];
    let dayNum = 1;
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
    <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-4 md:p-6 lg:p-8" >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-8 gap-2 md:gap-0">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#363B64]">Calendar</h2>
        <div className="flex items-center space-x-2 sm:space-x-4 mt-2 md:mt-0">
          <select
            className="rounded-[40px] border-2 border-[#363B64] px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-[#303972] font-semibold bg-white"
            value={selectedMonth}
            onChange={e => setSelectedMonth(Number(e.target.value))}
          >
            {months.map((m, i) => (
              <option key={m} value={i}>{m}</option>
            ))}
          </select>
          <select
            className="rounded-[40px] border-2 border-[#363B64] px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-[#303972] font-semibold bg-white"
            value={selectedYear}
            onChange={e => setSelectedYear(Number(e.target.value))}
          >
            {[2020,2021,2022,2023,2024].map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
          <button className="ml-1 sm:ml-2 px-2 sm:px-4 py-2 sm:py-3 rounded-[40px] bg-[#4D44B5] text-white font-semibold text-xs sm:text-sm">+ New Student</button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 sm:gap-2 md:gap-4 mb-2 sm:mb-4">
        {days.map((d) => (
          <div key={d} className="text-center text-[#A098AE] font-semibold text-xs sm:text-sm md:text-base">{d}</div>
        ))}
      </div>
      <div className="space-y-1 sm:space-y-2">
        {calendarGrid.map((week, i) => (
          <div key={i} className="grid grid-cols-7 gap-1 sm:gap-2 md:gap-4">
            {week.map((day, j) => {
              const event = getEventForDay(day);
              const isSelected = event && event.selected;
            
              if (day === 6) {
                const eventDots = event ? event.dots.slice(0, 2) : [];
                const hasMore = event && event.dots.length > 2;
                return (
                  <div
                    key={j}
                    className="relative h-14 sm:h-20 md:h-24 flex flex-col items-center justify-center rounded-xl cursor-pointer transition-all bg-[#FB7D5B] text-white font-bold border-2 border-[#FB7D5B]"
                    onClick={() => setSelectedDay(day)}
                  >
                    <span className="text-base sm:text-lg font-semibold">6</span>
                    <div className="flex -space-x-2 mt-2 items-center">
                      {eventDots.map((color, idx) => (
                        <span
                          key={idx}
                          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white flex items-center justify-center"
                          style={{background: eventColors[color]}}
                        ></span>
                      ))}
                      {hasMore && (
                        <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#303972] text-white text-xs flex items-center justify-center font-bold border-2 border-white">7+</span>
                      )}
                    </div>
                  </div>
                );
              }
              if (day === 10) {
                return (
                  <div
                    key={j}
                    className="relative h-14 sm:h-20 md:h-24 flex flex-col items-start justify-start rounded-xl cursor-pointer transition-all bg-[#4D44B5] text-white font-bold border-2 border-white outline outline-2 outline-[#4D44B5] p-2 sm:p-3"
                    onClick={() => setSelectedDay(day)}
                  >
                    <span className="text-base sm:text-lg">10</span>
                    <div className="flex items-center mt-1">
                      <span className="w-1 h-6 sm:h-8 bg-[#FCC43E] rounded-full mr-2"></span>
                      <span className="text-xs sm:text-sm font-normal">Karen, 2+</span>
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={j}
                  className={`relative h-14 sm:h-20 md:h-24 flex flex-col items-center justify-center rounded-xl cursor-pointer transition-all
                    ${day === null ? '' : isSelected ? 'bg-[#4D44B5] text-white font-bold border-2 border-[#4D44B5]' : 'bg-[#F3F4FF] text-[#303972] hover:bg-[#E9E6F5]'}
                  `}
                  onClick={() => day && setSelectedDay(day)}
                  style={day === null ? {background: 'transparent'} : {}}
                >
                  <span className="text-base sm:text-lg font-semibold">{day || ''}</span>
                
                  {event && day !== 6 && day !== 10 && (
                    <div className="flex space-x-0.5 sm:space-x-1 mt-2">
                      {event.dots && event.dots.map((color, id) => (
                        <span
                          key={id}
                          className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
                          style={{background: eventColors[color]}}
                        ></span>
                      ))}
                    </div>
                  )}
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
