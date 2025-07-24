import React from 'react';
import { Search, Menu, Bell, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = ({ setSidebarOpen }) => {
  return (
    <div className="flex-1 px-4 sm:px-6 lg:px-10 py-6 bg-[#F3F4FF]">
      <div className="max-w-7xl mx-auto">
        {/* Header Row with Title + Search + Icons */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Left: Title */}
          <h1 className="text-2xl font-bold text-[#303972]">Student Details</h1>

          {/* Search Bar and Icons */}
          <div className="flex items-center gap-4 flex-wrap justify-end">
            {/* Search Bar */}
            <div className="relative w-full md:w-[300px]">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#4D44B5] w-5 h-5" />
              <input
                type="text"
                placeholder="Search here..."
                className="w-full h-[48px] pl-12 pr-6 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4D44B5] focus:border-transparent text-sm text-[#303972] placeholder-[#A098AE]"
              />
            </div>

            {/* Icons Section */}
            <div className="flex items-center gap-6">
              {/* Bell */}
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Bell className="w-5 h-5 text-[#A098AE]" strokeWidth={2.5} />
              </div>

              {/* Settings */}
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Settings className="w-5 h-5 text-[#A098AE]" strokeWidth={2.5} />
              </div>

              {/* Name & Profile */}
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-[#303972] font-bold leading-tight">Nabila A.</p>
                  <p className="text-sm text-[#A098AE] leading-tight">Admin</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#4D44B51A] text-[#4D44B5] font-bold flex items-center justify-center">
                  {/* Placeholder */}
                </div>
              </div>

              {/* Mobile Menu */}
              <div className="lg:hidden sm:hidden block">
                <Menu
                  className="w-6 h-6 text-[#303972] cursor-pointer"
                  onClick={() => setSidebarOpen(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
