// Make sure your router has: <Route path="/teachers/:id" element={<TeacherDetails />} />
import React from "react";
import { useParams } from "react-router-dom";
import { FiBell, FiSettings, FiSearch } from "react-icons/fi";
import TeacherCardDetail from "../components/TeacherCardDetail";
import TeacherSidebar from "../components/TeacherSidebar";

const teachers = [
  { id: 1, name: "Dimitres Viga", subject: "History", location: "Jakarta, Indonesia", phone: "+12 345 6789 0", email: "Historia@mail.com", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", education: [ { degree: "History Major, University Akademi Historia", years: "2013–2017" }, { degree: "Master of History, University Akademi Historia", years: "2017–2020" } ], expertise: "World History, Philosophy, Prehistoric, Culture, Ancient" },
  { id: 2, name: "Tom Housenburg", subject: "History", location: "Jakarta, Indonesia", phone: "+12 345 6789 0", email: "Historia@mail.com", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", education: [ { degree: "History Major, University Akademi Historia", years: "2013–2017" }, { degree: "Master of History, University Akademi Historia", years: "2017–2020" } ], expertise: "World History, Philosophy, Prehistoric, Culture, Ancient" },
  { id: 3, name: "Dana Benevista", subject: "History", location: "Jakarta, Indonesia", phone: "+12 345 6789 0", email: "Historia@mail.com", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", education: [ { degree: "History Major, University Akademi Historia", years: "2013–2017" }, { degree: "Master of History, University Akademi Historia", years: "2017–2020" } ], expertise: "World History, Philosophy, Prehistoric, Culture, Ancient" },
  { id: 4, name: "Salvadore Morbeau", subject: "History", location: "Jakarta, Indonesia", phone: "+12 345 6789 0", email: "Historia@mail.com", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", education: [ { degree: "History Major, University Akademi Historia", years: "2013–2017" }, { degree: "Master of History, University Akademi Historia", years: "2017–2020" } ], expertise: "World History, Philosophy, Prehistoric, Culture, Ancient" },
  { id: 5, name: "Maria Historia", subject: "History", location: "Jakarta, Indonesia", phone: "+12 345 6789 0", email: "Historia@mail.com", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", education: [ { degree: "History Major, University Akademi Historia", years: "2013–2017" }, { degree: "Master of History, University Akademi Historia", years: "2017–2020" } ], expertise: "World History, Philosophy, Prehistoric, Culture, Ancient" },
  { id: 6, name: "Jack Sally", subject: "History", location: "Jakarta, Indonesia", phone: "+12 345 6789 0", email: "Historia@mail.com", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", education: [ { degree: "History Major, University Akademi Historia", years: "2013–2017" }, { degree: "Master of History, University Akademi Historia", years: "2017–2020" } ], expertise: "World History, Philosophy, Prehistoric, Culture, Ancient" },
  { id: 7, name: "Lula Beatrice", subject: "History", location: "Jakarta, Indonesia", phone: "+12 345 6789 0", email: "Historia@mail.com", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", education: [ { degree: "History Major, University Akademi Historia", years: "2013–2017" }, { degree: "Master of History, University Akademi Historia", years: "2017–2020" } ], expertise: "World History, Philosophy, Prehistoric, Culture, Ancient" },
  { id: 8, name: "Nella Vita", subject: "History", location: "Jakarta, Indonesia", phone: "+12 345 6789 0", email: "Historia@mail.com", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", education: [ { degree: "History Major, University Akademi Historia", years: "2013–2017" }, { degree: "Master of History, University Akademi Historia", years: "2017–2020" } ], expertise: "World History, Philosophy, Prehistoric, Culture, Ancient" },
  { id: 9, name: "Nadia Laravela", subject: "History", location: "Jakarta, Indonesia", phone: "+12 345 6789 0", email: "Historia@mail.com", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", education: [ { degree: "History Major, University Akademi Historia", years: "2013–2017" }, { degree: "Master of History, University Akademi Historia", years: "2017–2020" } ], expertise: "World History, Philosophy, Prehistoric, Culture, Ancient" },
  { id: 10, name: "Dakota Farral", subject: "History", location: "Jakarta, Indonesia", phone: "+12 345 6789 0", email: "Historia@mail.com", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", education: [ { degree: "History Major, University Akademi Historia", years: "2013–2017" }, { degree: "Master of History, University Akademi Historia", years: "2017–2020" } ], expertise: "World History, Philosophy, Prehistoric, Culture, Ancient" },
  { id: 11, name: "Miranda Adila", subject: "History", location: "Jakarta, Indonesia", phone: "+12 345 6789 0", email: "Historia@mail.com", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", education: [ { degree: "History Major, University Akademi Historia", years: "2013–2017" }, { degree: "Master of History, University Akademi Historia", years: "2017–2020" } ], expertise: "World History, Philosophy, Prehistoric, Culture, Ancient" },
  { id: 12, name: "Indiana Barker", subject: "Biology", location: "Auckland, New Zealand", phone: "+64 9 123 4567", email: "indiana.barker@mail.com", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", education: [ { degree: "BSc Biology, University of Auckland", years: "2010–2014" } ], expertise: "Zoology, Botany, Ecology" },
];

export default function TeacherDetails() {
  const { id } = useParams();
  const teacher = teachers.find((t) => t.id === Number(id));

  if (!teacher) {
    return (
      <div className="min-h-screen bg-[#f5f6ff] p-4 sm:p-8 font-sans flex flex-col items-center justify-center">
        <h1 className="text-2xl text-red-500 mb-4">Teacher not found!</h1>
        <a href="/" className="text-[#4D44B5] underline">Back to Teachers</a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f6ff] p-4 sm:p-8 font-sans">
      {/* Header with search bar */}
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center mb-8">
        <h1 className="text-xl sm:text-2xl font-bold text-[#363B64]">Teacher Details</h1>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 w-full md:w-auto">
          <div className="flex items-center bg-white w-full sm:w-[350px] h-[46px] sm:h-[60px] rounded-[40px] px-4 shadow-sm">
            <FiSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search here..."
              className="ml-2 outline-none flex-1 text-gray-600 bg-transparent h-full"
            />
          </div>
          <div className="flex items-center gap-3 sm:gap-6 w-full sm:w-[313px] h-[46px] sm:h-[60px]">
            <button className="w-10 h-10 sm:w-[60px] sm:h-[60px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition">
              <FiBell className="text-gray-500" size={20} />
            </button>
            <button className="w-10 h-10 sm:w-[60px] sm:h-[60px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition">
              <FiSettings className="text-gray-500" size={20} />
            </button>
            <div className="flex items-center gap-2 sm:gap-5 px-1 py-1">
              <div className="flex flex-col text-right">
                <span className="text-[13px] sm:text-[14px] font-semibold text-gray-700">Nabila A.</span>
                <span className="text-[13px] sm:text-[14px] text-gray-400">Admin</span>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C1BBEB]" />
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        <TeacherCardDetail teacher={teacher} />
        <TeacherSidebar />
      </div>
    </div>
  );
}
