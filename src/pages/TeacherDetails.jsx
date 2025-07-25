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
 
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        <TeacherCardDetail teacher={teacher} />
        <TeacherSidebar />
      </div>
    </div>
  );
}