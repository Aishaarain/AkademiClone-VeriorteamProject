import React, { useState } from "react";
import {
  FiPhone,
  FiMail,
  FiMoreHorizontal,
  FiSearch,
  FiBell,
  FiSettings,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { BiCaretDown, BiCaretLeft, BiCaretRight } from "react-icons/bi";

const teacherData = [
  { id: 1, name: "Dimitres Viga", subject: "Mathematics" },
  { id: 2, name: "Tom Housenburg", subject: "Science" },
  { id: 3, name: "Dana Benevista", subject: "Art" },
  { id: 4, name: "Salvadore Morbeau", subject: "Biology" },
  { id: 5, name: "Maria Historia", subject: "History" },
  { id: 6, name: "Jack Sally", subject: "Physics" },
  { id: 7, name: "Lula Beatrice", subject: "Algorithm" },
  { id: 8, name: "Nella Vita", subject: "English" },
  { id: 9, name: "Nadia Laravela", subject: "Programming" },
  { id: 10, name: "Dakota Farral", subject: "Science" },
  { id: 11, name: "Miranda Adila", subject: "Art" },
  { id: 12, name: "Indiana Barker", subject: "Biology" },
];

const Teachers = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredTeachers = teacherData.filter((teacher) =>
    teacher.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCardClick = (id) => {
    navigate(`/teachers/${id}`);
  };

  return (
    <div className="min-h-screen bg-[#f5f6ff] p-4 sm:p-8 font-sans">
      {/* Header Row */}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Teachers</h1>
        {/* Profile & Icons */}
        <div className="flex items-center gap-3 sm:gap-6 w-full sm:w-[313px] h-[60px]">
          <button className="w-10 h-10 sm:w-[60px] sm:h-[60px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition">
            <FiBell className="text-gray-500" size={20} />
          </button>
          <button className="w-10 h-10 sm:w-[60px] sm:h-[60px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition">
            <FiSettings className="text-gray-500" size={20} />
          </button>
          <div className="flex items-center gap-2 sm:gap-5 px-1 py-1">
            <div className="flex flex-col text-right">
              <span className="text-[13px] sm:text-[14px] font-semibold text-gray-700">
                Nabila A.
              </span>
              <span className="text-[13px] sm:text-[14px] text-gray-400">
                Admin
              </span>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C1BBEB]" />
          </div>
        </div>
      </div>

      {/* Search Bar Row with Controls */}
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center mb-8">
        {/* Search Bar */}
        <div className="flex items-center bg-white w-full sm:w-[350px] h-[46px] sm:h-[60px] rounded-[40px] px-4 shadow-sm">
          <FiSearch className="text-[#4D44B5] w-5 h-5 text-bold" />
          <input
            type="text"
            placeholder="Search here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="ml-2 outline-none flex-1 text-gray-600 bg-transparent h-full"
          />
        </div>
        {/* Sorting Dropdown and New Student Button */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-[10px] w-full sm:w-auto">
          <div className="relative w-full sm:w-[207px] h-[46px] sm:h-[60px]">
            <select className="w-full h-full rounded-[40px] px-6 sm:px-[43px] py-2 sm:py-[16px] pr-12 border-2 border-[#4D44B5] shadow-[0px_20px_50px_0px_#BF156C0D] text-gray-600 focus:outline-none appearance-none">
              <option>Newest</option>
              <option>Oldest</option>
            </select>
            <BiCaretDown className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 text-[#4D44B5] pointer-events-none" size={24} />
          </div>
          <button className="w-full sm:w-[207px] h-[46px] sm:h-[60px] rounded-[40px] px-6 sm:px-[43px] py-2 sm:py-[16px] bg-[#4D44B5] shadow-[0px_20px_50px_0px_#BF156C0D] text-white font-bold transition hover:bg-[#3b3590]">
            + New Student
          </button>
        </div>
      </div>

      {/* Teacher Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1475px] mx-auto">
        {filteredTeachers.map((teacher) => (
          <div
            key={teacher.id}
            onClick={() => handleCardClick(teacher.id)}
            className="w-full max-w-xs bg-white rounded-2xl shadow-md p-6 flex flex-col items-center relative hover:scale-105 transition-transform duration-200 cursor-pointer mx-auto"
          >
            {/* More Options Icon */}
            <FiMoreHorizontal className="absolute top-4 right-4 text-gray-400 w-[24px] h-[24px]" />

            {/* Avatar Placeholder */}
            <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] bg-[#c1bbeb] mb-4 rounded-full"></div>

            {/* Teacher Info */}
            <h3 className="w-full text-center font-poppins font-bold text-lg sm:text-xl lg:text-2xl leading-[24px] tracking-normal text-[#363B64] whitespace-nowrap overflow-hidden text-ellipsis">
              {teacher.name}
            </h3>
            <p className="w-full text-center font-poppins font-normal text-base sm:text-lg leading-[18px] tracking-normal text-[#A098AE] mb-4">
              {teacher.subject}
            </p>

            {/* Contact Icons */}
            <div className="flex gap-4">
              <button className="w-10 h-10 bg-[#4d44b5] rounded-full flex items-center justify-center hover:bg-[#3b3590] transition">
                <FiPhone size={20} className="text-white" />
              </button>
              <button className="w-10 h-10 bg-[#4d44b5] rounded-full flex items-center justify-center hover:bg-[#3b3590] transition">
                <FiMail size={20} className="text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Pagination */}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mt-8 text-gray-500 text-sm">
        <p className="w-full sm:w-[237px] h-[27px] font-poppins font-normal text-base sm:text-[18px] leading-[18px] tracking-normal text-[#303972] text-center sm:text-left">
          Showing <span className="font-bold">1–5</span> from <span className="font-bold">100</span> data
        </p>

        <div className="flex items-center gap-2 justify-center">
          <button>
            <BiCaretLeft />
          </button>
          <button className="bg-[#4D44B5] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg sm:text-xl font-bold">
            1
          </button>
          <button className="border-2 border-[#A098AE] text-[#A098AE] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg sm:text-xl font-bold bg-white hover:border-[#4D44B5] focus:outline-[#4D44B5]">
            2
          </button>
          <button className="border-2 border-[#A098AE] text-[#A098AE] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg sm:text-xl font-bold bg-white hover:border-[#4D44B5] focus:outline-[#4D44B5]">
            3
          </button>
          <button>
            <BiCaretRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
