import React from "react";
import TeacherForm from "../components/TeacherForm";
import { FiBell, FiSettings } from "react-icons/fi";

const AddTeacher = () => {
  const handleAddTeacher = (formData) => {
    alert("Teacher Added: " + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="min-h-screen bg-[#f5f6ff] p-4 sm:p-8 font-sans">
      {/* Header with profile/notification/settings */}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#303972]">Add New Teacher</h1>
        <div className="flex items-center gap-3 sm:gap-6 w-full sm:w-[313px] h-[60px]">
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
      {/* Form Card */}
      <div className="bg-white shadow-card rounded-xl w-full max-w-6xl mx-auto p-4 sm:p-8">
        <TeacherForm onSubmit={handleAddTeacher} />
      </div>
    </div>
  );
};

export default AddTeacher;
