import React from "react";
import TeacherForm from "../components/TeacherForm";
import { FiBell, FiSettings } from "react-icons/fi";

const AddTeacher = () => {
  const handleAddTeacher = (formData) => {
    alert("Teacher Added: " + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="min-h-screen bg-[#f5f6ff] p-4 sm:p-8 font-sans">
      
      <div className="bg-white shadow-card rounded-xl w-full max-w-6xl mx-auto p-4 sm:p-8">
        <TeacherForm onSubmit={handleAddTeacher} />
      </div>
    </div>
  );
};

export default AddTeacher;