import React from "react";
import { FiMoreHorizontal, FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const TeacherCardDetail = ({ teacher }) => {
  if (!teacher) return null;
  return (
    <div className="relative bg-white rounded-[20px] shadow-lg p-0 overflow-visible flex flex-col w-full max-w-full md:max-w-3xl lg:max-w-[1017px] mx-auto"
      style={{ minHeight: "0" }}>
      {/* Top Section with avatar and SVG decorative circles */}
      <div className="relative h-[120px] sm:h-[180px] bg-[#4D44B5] rounded-t-[20px] overflow-visible">
        {/* SVG Decorative Circles */}
        <svg
          className="absolute bottom-0 right-0 hidden sm:block"
          width="350"
          height="120"
          viewBox="0 0 350 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ zIndex: 0 }}
        >
          <circle
            cx="85"
            cy="180"
            r="100"
            stroke="#FB7D5B"
            strokeWidth="12"
            fill="none"
          />
          <circle
            cx="200"
            cy="140"
            r="100"
            stroke="#FCC43E"
            strokeWidth="12"
            fill="none"
          />
        </svg>
        {/* Avatar */}
        <div className="absolute left-1/2 -translate-x-1/2 sm:left-8 sm:translate-x-0 z-20" style={{ bottom: '-60px' }}>
          <div className="w-[110px] h-[110px] sm:w-[190px] sm:h-[190px] rounded-full bg-[#C1BBEB] border-8 border-white flex items-center justify-center" />
        </div>
        {/* Three dots icon */}
        <FiMoreHorizontal className="absolute top-4 right-4 sm:top-6 sm:right-8 text-[#A098AE] w-6 h-6 z-10 opacity-60" />
      </div>
      {/* Card Content */}
      <div className="pt-20 sm:pt-32 pb-8 sm:pb-10 px-4 sm:px-10 relative w-full">
        {/* Name and Subject */}
        <h2 className="font-poppins font-bold text-2xl sm:text-[32px] leading-[40px] sm:leading-[90px] tracking-normal text-[#303972] text-center sm:text-left">{teacher.name}</h2>
        <p className="text-[#A098AE] font-poppins font-semibold text-base sm:text-[18px] tracking-normal mb-4 sm:mb-6 text-center sm:text-left">{teacher.subject} Teacher</p>
        {/* Info Row */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6 sm:mb-8 items-center sm:items-start justify-center sm:justify-start">
          <div className="flex items-center gap-2 px-4 py-2">
            <span className="flex items-center justify-center bg-orange-500 rounded-full w-8 h-8">
              <FiMapPin className="text-white w-5 h-5" />     
            </span>
            <span className="font-semibold text-base sm:text-[18px] text-[#303972] leading-[32px] font-poppins">{teacher.location}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2">
            <span className="flex items-center justify-center bg-orange-500 rounded-full w-8 h-8">
              <FiPhone className="text-white w-5 h-5" />
            </span>
            <span className="font-semibold text-base sm:text-[18px] text-[#303972] leading-[32px] font-poppins">{teacher.phone}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2">
            <span className="flex items-center justify-center bg-orange-500 rounded-full w-8 h-8">
              <FiMail className="text-white w-5 h-5" />
            </span>
            <span className="font-semibold text-base sm:text-[18px] text-[#303972] leading-[32px] font-poppins">{teacher.email}</span>
          </div>
        </div>
        {/* About */}
        <div className="mb-6 w-full sm:w-[616px] h-auto">
          <h3 className="font-poppins font-bold text-lg sm:text-[24px] leading-[24px] tracking-normal text-[#303972] mt-6 sm:mt-10">About:</h3>
          <p className="font-poppins font-normal text-base sm:text-[18px] leading-[24px] sm:leading-[28px] tracking-normal text-justify text-[#363B64] mt-3 sm:mt-5">
            {teacher.about}
          </p>
        </div>
        {/* Education */}
        <div className="mb-6 w-full">
          <h3 className="font-poppins font-bold text-lg sm:text-[24px] leading-[28px] tracking-normal text-[#303972] mt-6 sm:mt-10">Education:</h3>
          <ul className="list-disc pl-5 text-[#363B64] mt-3 sm:mt-5">
            {teacher.education && teacher.education.map((ed, idx) => (
              <li key={idx} className={idx !== 0 ? "mt-4" : ""}>
                <span className="font-poppins font-semibold text-base sm:text-[18px] leading-[18px] tracking-normal text-justify mt-4">{ed.degree}</span>
                <div className="font-poppins font-normal text-base sm:text-[18px] leading-[18px] tracking-normal text-justify text-[#A098AE] mt-2 sm:mt-4">{ed.years}</div>
              </li>
            ))}
          </ul>
        </div>
        {/* Expertise */}
        <div>
          <h3 className="font-poppins font-bold text-lg sm:text-[24px] leading-[28px] tracking-normal text-[#303972] mt-6 sm:mt-10">Expertise:</h3>
          <p className="font-poppins font-normal text-base sm:text-[18px] leading-[18px] tracking-normal text-justify text-[#363B64] mt-2 sm:mt-4">{teacher.expertise}</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherCardDetail;