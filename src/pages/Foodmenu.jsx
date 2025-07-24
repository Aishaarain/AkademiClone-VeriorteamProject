

import React, { useState } from 'react';
import { Star, BarChart3, ArrowUpRight, MoreVertical,ArrowRight,ArrowLeft,Search } from 'lucide-react';
import Navbar from '../components/Navbar';
 

const foodItems = [
  { id: 1, title: 'Beef Steak with Fried Potato', category: 'Lunch', rating: 4.9 },
  { id: 2, title: 'Pancake with Honey', category: 'Breakfast', rating: 4.7 },
  { id: 3, title: 'Japanese Beef Ramen', category: 'Lunch', rating: 4.8 },
  { id: 4, title: 'Mixed Salad', category: 'Lunch', rating: 4.2 },
  { id: 5, title: 'Beef Meatball with Vegetable', category: 'Snack', rating: 4.5 },
];

const tabs = ['All Menus', 'Breakfast', 'Lunch', 'Snack'];



const Foodmenu = () => {
    const [activeTab, setActiveTab] = useState('All Menus');
    
  const filteredItems =
    activeTab === 'All Menus'
      ? foodItems
      : foodItems.filter((item) => item.category === activeTab);
  return (
   
     <div className="bg-[#f9f9fc] min-h-screen ">
       
      <div className="max-w-5xl max-sm:max-w-xl mx-3 bg-white rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Food Menu</h2>
          <div className="flex space-x-6 text-sm font-medium">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-1 ${
                  activeTab === tab
                    ? 'border-b-2 border-purple-600 text-purple-600'
                    : 'text-gray-500 hover:text-purple-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Menu list */}
        <div className="space-y-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="flex items-center bg-[#f4f0fe] rounded-lg p-4">
              {/* Image placeholder */}
              <div className="w-14 h-14 rounded-md bg-purple-200 mr-4" />

              {/* Title & Category */}
              <div className="flex-1 space-y-1">
                <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full">
                  {item.category}
                </span>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-gray-800">{item.title}</p>
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-gray-600">{item.rating}</span>
                </div>
              </div>

              {/* Order Data */}
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <BarChart3 className="mx-auto w-4 h-4 text-purple-600" />
                  <p className="text-sm font-bold text-gray-800">1.456</p>
                  <p className="text-xs text-gray-500">Total Order</p>
                </div>
                <div className="text-center">
                  <ArrowUpRight className="mx-auto w-4 h-4 text-purple-600" />
                  <p className="text-sm font-bold text-gray-800">26%</p>
                  <p className="text-xs text-gray-500">Interest</p>
                </div>

                {/* Circle Progress */}
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
                      strokeDasharray="50, 100"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-purple-600">
                    50%
                  </div>
                </div>

                <MoreVertical className="text-gray-400 cursor-pointer w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
          <p>Showing 1–5 from 100 data</p>
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
  )
}

export default Foodmenu


