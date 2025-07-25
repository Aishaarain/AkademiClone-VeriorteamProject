import React from "react";
import { FiCalendar, FiClock } from "react-icons/fi";

const schedule = [
  {
    color: "bg-[#4D44B5]",
    subject: "World History",
    class: "Class VII-B",
    date: "March 20, 2021",
    time: "09.00 - 10.00 AM",
  },
  {
    color: "bg-[#FB7D5B]",
    subject: "Ancient History",
    class: "Class VII-A",
    date: "March 20, 2021",
    time: "09.00 - 10.00 AM",
  },
  {
    color: "bg-[#FCC43E]",
    subject: "Culture",
    class: "Class VIII-A",
    date: "March 20, 2021",
    time: "09.00 - 10.00 AM",
  },
  {
    color: "bg-[#303972]",
    subject: "World History",
    class: "Class VII-C",
    date: "March 20, 2021",
    time: "09.00 - 10.00 AM",
  },
];

const colorMap = {
  "bg-[#4D44B5]": "bg-[#4D44B5]",
  "bg-[#FB7D5B]": "bg-[#FB7D5B]",
  "bg-[#FCC43E]": "bg-[#FCC43E]",
  "bg-[#303972]": "bg-[#303972]",
};

const TeacherSidebar = () => (
  <div className="w-full max-w-full lg:max-w-[350px] flex-shrink-0 bg-[#F5F6FF] min-h-[1px] py-4 px-2 rounded-[24px]">
    <div className="bg-white w-full max-w-full lg:max-w-[386px] h-auto rounded-[20px] p-4 sm:p-6 mb-6 shadow-sm mx-auto">
      <h3 className="font-poppins font-bold text-lg sm:text-[22px] text-[#303972] mb-1">Schedule Details</h3>
      <div className="font-poppins font-normal text-[14px] leading-[14px] tracking-normal text-[#A098AE] mb-2 mt-4">Thursday, 10th April , 2021</div>
    </div>
    <div className="flex flex-col gap-6 mb-8">
      {schedule.map((item, idx) => (
        <div
          key={idx}
          className="relative flex bg-white rounded-[20px] shadow p-4 sm:p-5 gap-4 items-center w-full max-w-full lg:max-w-[386px] h-auto min-h-[140px] sm:min-h-[183px] mx-auto"
        >
          <div className={`absolute top-0 left-0 bottom-0 w-2 sm:w-3 rounded-l-[12px] ${colorMap[item.color] || item.color}`}></div>
          <div className="flex-1 pl-3">
            <div className="font-poppins font-semibold text-base sm:text-[18px] leading-[24px] tracking-normal text-[#303972]">{item.subject}</div>
            <div className="font-poppins text-[#A098AE] text-regular text-[14px] leading-[14px] tracking-normal mb-2 mt-2">{item.class}</div>
            <div className="flex items-center gap-2 text-[#A098AE] text-regular text-[14px] leading-[14px] tracking-normal font-poppins mb-1 mt-6 sm:mt-8">
              <FiCalendar className="text-orange-500 w-5 h-5" />
              <span>{item.date}</span>
            </div>
            <div className="flex items-center gap-2 text-[#A098AE] text-regular text-[14px] leading-[14px] tracking-normal font-poppins mt-2 sm:mt-4">
              <FiClock className="text-yellow-500 w-4 h-4" />
              <span>{item.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
    <button className="w-full h-12 bg-[#E4E7FF] text-[#4D44B5] font-poppins font-bold rounded-full text-[16px] mt-2">View More</button>
  </div>
);

export default TeacherSidebar;