import React from 'react';
import Menupag from '../assets/menu.png';

const StudentCard = () => {
  return (
    <div className="flex flex-col items-end px-10 mt-6">
      {/* Menu Image */}
      <img
        src={Menupag}
        alt="Menu Icon"
        className="w-[313px] h-[60px] object-contain mb-4"
      />

      {/* New Student Button */}
      <button className="bg-[#4D44B5] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#3c379a] transition duration-300">
        New Student
      </button>
    </div>
  );
};

export default StudentCard;