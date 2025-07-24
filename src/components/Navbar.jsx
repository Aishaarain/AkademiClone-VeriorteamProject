

import React from 'react';
import Menupag from '../assets/menu.png';
import { Search, Menu,Bell,Settings } from 'lucide-react';

const Navbar = ({ setSidebarOpen }) => {
  return (
    
    <div className="flex-1 p-6 ">
        <div className="max-w-7xl mx-auto">
    
          {/* Header */}
          <div className="flex items-center justify-between mb-8  lg:px-10 py-4">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search here..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent max-sm:w-[40px] w-64"
                />
                
              </div> 
               <div className="flex items-center space-x-4 max-md:hidden ml-[10px]">
     
      <div className="relative p-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
        <Bell className="w-5 h-5 text-gray-500" />
       
        <span className="absolute top-1 right-1 w-2 h-2 bg-purple-600 rounded-full"></span>
      </div>

    
      <div className="p-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
        <Settings className="w-5 h-5 text-gray-500" />
      </div>

      <div className="flex flex-col items-end mr-2">
        <span className="text-sm font-semibold text-gray-800">Nabila A.</span>
        <span className="text-xs text-gray-500">Admin</span>
      </div>

      <div className="w-10 h-10 rounded-full overflow-hidden border-2 bg-purple-400 border-purple-200">
       
      </div>
    </div>
              <div className="md:hidden max-sm:block">
                         
                        <Menu
                          className="w-6 h-6  text-gray-800 cursor-pointer"
                          onClick={() => setSidebarOpen(true)}
                        />
                      </div>
            </div>
          </div>
        </div>
        </div>
  );
};

export default Navbar;
