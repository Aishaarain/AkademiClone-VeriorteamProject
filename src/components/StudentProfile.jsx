import React from 'react';
import { MapPin, Phone, Mail, User, MoreHorizontal } from 'lucide-react';
import userbgimage from '../assets/userbgimage.png'; 

export default function StudentProfile() {
  return (
    <div className="relative bg-white rounded-xl overflow-hidden shadow font-poppins">
      {/* Background rectangles */}
      <div className="absolute top-[231.56px] left-[949px] w-[263.59px] h-[275.13px] bg-orange rounded-[20px] z-0"></div>
      <div className="absolute top-[181.65px] left-[1108.01px] w-[263.59px] h-[275.13px] bg-yellow rounded-[20px] z-0"></div>

      {/* Top Banner with Background Image */}
      <div className="w-full h-[110px] bg-[#4D44B5] relative z-10 rounded-t-xl overflow-hidden">
        <img src={userbgimage} alt="bg" className="w-full h-full object-cover" />
      </div>

      {/* Profile Placeholder */}
      <div className="absolute top-[60px] left-6 w-28 h-28 rounded-full border-4 border-white bg-[#C1BBEB] flex items-center justify-center text-4xl font-bold text-white z-20">
        {/* You can add initials here if needed */}
      </div>

      {/* Student info below avatar */}
      <div className="relative z-20 pt-16 pb-6 pl-36 pr-6">
        <h2 className="text-xl font-bold text-[#303972]">Karen Hope</h2>
        <p className="text-sm text-[#A098AE] font-semibold">Student</p>

        <div className="mt-4 flex flex-wrap gap-6 text-sm">
          {/* Parents */}
          <div>
            <span className="text-[#A098AE] font-medium">Parents:</span>
            <p className="flex items-center gap-2 text-[#303972] font-semibold mt-1">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#FB7D5B]">
                <User size={16} color="white" />
              </span>
              Justin Hope
            </p>
          </div>

          {/* Address */}
          <div>
            <span className="text-[#A098AE] font-medium">Address:</span>
            <p className="flex items-center gap-2 text-[#303972] font-semibold mt-1">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#FB7D5B]">
                <MapPin size={16} color="white" />
              </span>
              Jakarta, Indonesia
            </p>
          </div>

          {/* Phone */}
          <div>
            <span className="text-[#A098AE] font-medium">Phone:</span>
            <p className="flex items-center gap-2 text-[#303972] font-semibold mt-1">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#FB7D5B]">
                <Phone size={16} color="white" />
              </span>
              +12 345 6789 0
            </p>
          </div>

          {/* Email */}
          <div>
            <span className="text-[#A098AE] font-medium">Email:</span>
            <p className="flex items-center gap-2 text-[#303972] font-semibold mt-1">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#FB7D5B]">
                <Mail size={16} color="white" />
              </span>
              Hope@mail.com
            </p>
          </div>
        </div>
      </div>

      {/* More button */}
      <button className="absolute top-[90px] right-6 z-30">
        <MoreHorizontal size={22} className="text-[#A098AE]" />
      </button>
    </div>
  );
}