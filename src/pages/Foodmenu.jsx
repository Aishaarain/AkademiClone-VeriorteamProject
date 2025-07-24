
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Star, BarChart3, ArrowUpRight, MoreVertical, ArrowRight, ArrowLeft } from 'lucide-react';
import foodItems from '../Data/FoodData';

const tabs = ['All Menus', 'Breakfast', 'Lunch', 'Snack'];

const Foodmenu = () => {
  const [activeTab, setActiveTab] = useState('All Menus');
  const [searchTerm, setSearchTerm] = useState(''); 

  const filteredItems = foodItems.filter((item) => {
    const matchesCategory = activeTab === 'All Menus' || item.category === activeTab;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#f9f9fc] min-h-screen p-8"> {/* Added padding to the container */}
      <div className="lg:max-w-5xl mx-auto bg-white rounded-xl shadow p-6 max-sm:flex max-sm:flex-col">
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4"> {/* Added flex-wrap and gap */}
          <h2 className="text-xl font-semibold text-gray-800">Food Menu</h2>
          <div className="flex space-x-2 text-sm font-medium overflow-x-auto pb-2 -mb-2"> {/* Added overflow for small screens */}
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-1 whitespace-nowrap px-2 ${ // Added whitespace-nowrap and px
                  activeTab === tab
                    ? 'border-b-2 border-purple-600 text-purple-600'
                    : 'text-gray-500 hover:text-purple-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Search Bar */}
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search food..."
              className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-300 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Menu list */}
        <div className="space-y-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <Link to={`/food/${item.id}`} state={foodItems} key={item.id} className="flex flex-col md:flex-row items-center bg-[#f4f0fe] rounded-lg p-4 cursor-pointer hover:bg-purple-50 transition-colors duration-200">
               
                <div className="w-24 h-24 sm:w-14 sm:h-14 md:w-14 md:h-14 rounded-md bg-purple-200 flex-shrink-0 mb-4 md:mb-0 mr-0 md:mr-4" />

                <div className="flex-1 space-y-1 text-center md:text-left">
                  <span className="inline-block text-xs bg-purple-600 text-white px-2 py-1 rounded-full mb-1">
                    {item.category}
                  </span>
                  <div className="flex flex-col sm:flex-row items-center sm:gap-2">
                    <p className="text-base font-medium text-gray-800">{item.title}</p>
                    <div className="flex items-center mt-1 sm:mt-0">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-sm text-gray-600">{item.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 mt-4 md:mt-0">
                  <div className="text-center">
                    <BarChart3 className="mx-auto w-4 h-4 text-purple-600" />
                    <p className="text-sm font-bold text-gray-800">{item.totalOrder}</p>
                    <p className="text-xs text-gray-500">Total Order</p>
                  </div>
                  <div className="text-center">
                    <ArrowUpRight className="mx-auto w-4 h-4 text-purple-600" />
                    <p className="text-sm font-bold text-gray-800">{item.interest}%</p>
                    <p className="text-xs text-gray-500">Interest</p>
                  </div>

                  <div className="relative w-10 h-10">
                    <svg className="w-10 h-10 rotate-[-90deg]" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831"
                        fill="none"
                        stroke="#7e3af2"
                        strokeWidth="3"
                        strokeDasharray={`${item.progress}, 100`} // Use item.progress
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-purple-600">
                      {item.progress}%
                    </div>
                  </div>

                  <MoreVertical className="text-gray-400 cursor-pointer w-5 h-5" />
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-500 py-8">No food items found for this category or search.</p>
          )}
        </div>

        <div className="flex justify-between items-center mt-6 text-sm text-gray-500 flex-wrap gap-4">
          <p>Showing 1–{filteredItems.length} from {foodItems.length} data</p> {/* Dynamic count */}
          <div className="flex gap-2 items-center">
            <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-purple-100">
              <ArrowLeft/>
            </button>
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                className={`w-8 h-8 rounded-full ${
                  n === 1 ? 'bg-purple-600 text-white' : 'hover:bg-purple-100'
                }`}
              >
                {n}
              </button>
            ))}
            <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-purple-100">
              <ArrowRight/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foodmenu;
