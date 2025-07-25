import StudentForm from '../components/StudentForm';
import ParentForm from '../components/ParentForm';
import { Bell, Settings } from 'lucide-react';

export default function AddStudent() {
  return (
    <div className="min-h-screen bg-[#f4f6fb] px-4 md:px-10 py-6 md:py-8 font-[Poppins]">
      {/* Top Header */}
      <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
        {/* Title */}
        <h1 className="text-xl md:text-2xl font-extrabold text-[#303972] flex-1">
          Add New Student
        </h1>

        {/* User Info */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Bell Icon */}
          <div className="w-9 h-9 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-md">
            <Bell className="text-[#A098AE]" size={18} />
          </div>

          {/* Settings Icon */}
          <div className="w-9 h-9 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-md">
            <Settings className="text-[#A098AE]" size={18} />
          </div>

          {/* User Name and Role */}
          <div className="flex flex-col text-right text-xs md:text-sm leading-tight">
            <span className="text-[#303972] font-semibold">Nabila A.</span>
            <span className="text-[#A098AE]">Admin</span>
          </div>

          {/* Profile Circle */}
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#D9D9D9]" />
        </div>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-[1400px] bg-white rounded-[20px] shadow overflow-hidden p-5 md:p-10 flex flex-col gap-8 mx-auto">
        <StudentForm />
        <ParentForm />

        {/* Buttons aligned to bottom right */}
        <div className="flex flex-col sm:flex-row justify-end sm:gap-[10px] gap-4 mt-4 sm:mt-8">
          <button className="w-full sm:w-[168px] h-[50px] sm:h-[60px] text-[#4D44B5] border-2 border-[#4D44B5] px-6 py-2.5 rounded-[40px] bg-white hover:bg-[#f4f4ff] transition">
            Save as Draft
          </button>
          <button className="w-full sm:w-[168px] h-[50px] sm:h-[60px] bg-[#4D44B5] text-white px-6 py-2.5 rounded-[40px] border-2 border-[#4D44B5] hover:bg-[#3f39a3] transition">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
