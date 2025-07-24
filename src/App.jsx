import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Teachers from "./pages/Teachers";
import TeacherDetails from "./pages/TeacherDetails";
import AddTeacher from "./pages/AddTeacher";

const App = () => {
  return (
    <div className="min-h-screen bg-brand-light">
      {/* Simple Navigation Bar */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-brand-purple">Akademi</h1>
        <div className="space-x-4">
          <Link
            to="/"
            className="text-gray-700 font-medium hover:text-brand-purple"
          >
            Teachers
          </Link>
          <Link
            to="/add-teacher"
            className="text-gray-700 font-medium hover:text-brand-purple"
          >
            Add Teacher
          </Link>
        </div>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Teachers />} />
        <Route path="/teachers/:id" element={<TeacherDetails />} />
        <Route path="/add-teacher" element={<AddTeacher />} />
      </Routes>
    </div>
  );
};

export default App;

