import StudentForm from '../components/StudentForm';
import ParentForm from '../components/ParentForm';
import { Bell, Settings } from 'lucide-react';

export default function AddStudent() {
  return (
    <div className="min-h-screen bg-[#f4f6fb] px-4 md:px-10 py-6 md:py-8 font-[Poppins]">
     

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