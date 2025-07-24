import StudentForm from '../components/StudentForm';
import ParentForm from '../components/ParentForm';
import { Bell, Settings } from 'lucide-react'; // You can replace these with your icons if needed

export default function AddStudent() {
  return (
    <div className="min-h-screen bg-[#f4f6fb] px-10 py-8 font-[Poppins]">
      {/* Top Header */}
      <div className="flex justify-between items-center mb-6">
        {/* Title */}
        <h1 className="text-2xl font-extrabold text-[#303972]">Add New Student</h1>

        {/* User Info */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
            <Bell className="text-[#A098AE]" size={18} />
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
            <Settings className="text-[#A098AE]" size={18} />
          </div>
          <div className="flex flex-col text-right">
            <span className="text-[#303972] font-semibold text-sm">Nabila A.</span>
            <span className="text-[#A098AE] text-xs">Admin</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#D9D9D9]" />
        </div>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-[1400px] bg-white rounded-[20px] shadow overflow-hidden p-10 flex flex-col gap-8 mx-auto">
        <StudentForm />
        <ParentForm />

        {/* Buttons aligned to bottom right */}
        <div className="flex justify-end gap-[10px] mt-8">
          <button className="w-[168px] h-[60px] text-[#4D44B5] border-2 border-[#4D44B5] px-6 py-2.5 rounded-[40px] bg-white hover:bg-[#f4f4ff] transition">
            Save as Draft
          </button>
          <button className="w-[168px] h-[60px] bg-[#4D44B5] text-white px-6 py-2.5 rounded-[40px] border-2 border-[#4D44B5] hover:bg-[#3f39a3] transition">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
