

import React from 'react';
import Menupag from '../assets/menu.png';
import { Search, Menu } from 'lucide-react';

const Navbar = ({ setSidebarOpen }) => {
  return (
    // <div className="flex items-center w-auto justify-between mb-8 px-6 py-6 lg:px-10">
    //   <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>

    //   <div className="flex items-center space-x-4">
    //     {/* Search */}
    //     <div className="relative max-sm:ml-40 ">
    //       <Search className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
    //       <input
    //         type="text"
    //         placeholder="Search here..."
    //         className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-64 max-sm:w-20  "
    //       />
    //     </div>

    //     <img
    //       src={Menupag}
    //       alt=""
    //       className="pr-8 mt-4 h-[100px] max-md:hidden"
    //     />
    //     <div className="md:hidden max-sm:block">
    //       <Menu
    //         className="w-6 h-6  text-gray-800 cursor-pointer"
    //         onClick={() => setSidebarOpen(true)}
    //       />
    //     </div>
    //   </div>
    // </div>
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
              <div className="lg:hidden max-sm:block">
                         
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
