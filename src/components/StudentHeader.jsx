import React, { useState } from 'react';
import { Search, Menu, ChevronDown, Bell, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = ({ setSidebarOpen}) => {
  const [sortOpen, setSortOpen] = useState(false);
  const [sortOption, setSortOption] = useState('Newest');

  const handleSortChange = (option) => {
    setSortOption(option);
    setSortOpen(false);
  };

  return (
    <div className="flex-1 px-4 sm:px-6 lg:px-10 py-6 bg-[#F3F4FF]">
      <div className="max-w-7xl mx-auto">
        {/* Top Row */}
        <div className="flex items-center justify-between">
          {/* Left: Title */}
          <h1 className="text-2xl font-bold text-[#303972]">Students</h1>

          {/* Right: Topbar Icons */}
          <div className="flex items-center gap-6">
            {/* Notification Bell */}
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
              <Bell className="w-5 h-5 text-[#A098AE]" strokeWidth={2.5} />
            </div>

            {/* Settings */}
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
              <Settings className="w-5 h-5 text-[#A098AE]" strokeWidth={2.5} />
            </div>

            {/* Name & Profile */}
            <div className="flex items-center gap-3 max-sm:hidden">
              <div className="text-right">
                <p className="text-[#303972] font-bold leading-tight">Nabila A.</p>
                <p className="text-sm text-[#A098AE] leading-tight">Admin</p>
              </div>
<div className="w-10 h-10 rounded-full bg-[#4D44B51A] text-[#4D44B5] font-bold flex items-center justify-center">
</div>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden max-sm:block">
                                
                               <Menu
                                 className="w-6 h-6  text-gray-800 cursor-pointer "
                                 onClick={() => setSidebarOpen(true)}
                               />
                             </div>
          </div>
        </div>

        {/* Search + Buttons Row */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Search Bar */}
          <div className="relative w-full md:w-[300px]">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#4D44B5] w-5 h-5" />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full h-[48px] pl-12 pr-6 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4D44B5] focus:border-transparent text-sm text-[#303972] placeholder-[#A098AE]"
            />
          </div>

          {/* Sort & New Student Button */}
          <div className="flex items-center gap-4 relative">
            {/* Sort Dropdown */}
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-1 text-sm text-[#4D44B5] border border-[#D6D6D6] px-4 py-2 rounded-full relative z-10 bg-white"
            >
              {sortOption}
              <ChevronDown className="w-5 h-5 text-[#A098AE]" strokeWidth={2.5} />
            </button>

            {/* Sort Options */}
            {sortOpen && (
              <div className="absolute top-12 left-0 bg-white shadow-md rounded-md border border-gray-200 w-[140px] z-20">
                <button
                  onClick={() => handleSortChange('Newest')}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-[#303972] text-sm"
                >
                  Newest
                </button>
                <button
                  onClick={() => handleSortChange('Oldest')}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-[#303972] text-sm"
                >
                  Oldest
                </button>
              </div>
            )}

            {/* + New Student Button */}
            <Link
              to="/add-student"
              className="bg-[#4D44B5] text-white px-6 py-2 rounded-full hover:bg-[#3c37a0] transition text-sm font-medium flex items-center gap-1"
            >
              <span className="text-lg font-bold">+</span> New Student
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;