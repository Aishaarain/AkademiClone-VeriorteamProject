// src/FoodDetailPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate
import { Star, BarChart3, ArrowUpRight, MoreVertical } from 'lucide-react';
import foodItems from '../Data/FoodData'; // Import food items data



const FoodDetailPage = () => {
  const { foodId } = useParams(); 
  const navigate = useNavigate(); 

  const food = foodItems.find((item) => item.id === foodId);

  if (!food) {
    return (
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Food Item Not Found</h1>
        <p className="text-gray-600">The food item you are looking for does not exist.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Go back to Food Menu
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 mx-10 mb-10 bg-white rounded-lg shadow-sm">
      
      <div className="flex-1 space-y-8">
       
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3 h-48 bg-purple-100 rounded-lg flex-shrink-0">
            
          </div>
          <div className="flex-1 space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-semibold text-gray-900">{food.title}</h2>
              
              <MoreVertical className="h-6 w-6 text-gray-400" />
            </div>
            <span className="inline-block bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">{food.category}</span>
            <p className="text-gray-600 text-sm leading-relaxed">
              {food.description}
            </p>
          </div>
        </div>

       
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-y-4 gap-x-8 text-gray-700">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 mr-1" fill="currentColor" /> {/* Added fill */}
            <span className="font-semibold mr-1">{food.rating}</span>
            <span className="text-gray-500 text-sm">Rating</span>
          </div>

          <div className="flex items-center">
            <BarChart3 className="h-6 w-6 text-purple-500 mr-1" />
            <span className="font-semibold mr-1">{food.totalOrder}</span>
            <span className="text-gray-500 text-sm">Total Order</span>
          </div>

          <div className="flex items-center">
            <ArrowUpRight className="h-6 w-6 text-green-500 mr-1 rotate-45" />
            <span className="font-semibold mr-1">{food.interest}%</span>
            <span className="text-gray-500 text-sm">Interest</span>
          </div>

        
          <div className="relative w-12 h-12">
            <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
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
                strokeDasharray={`${food.progress}, 100`}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-purple-600">
              {food.progress}%
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Ingredients</h3>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-2 marker:text-purple-500">
              {food.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Nutrition:</h3>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-2 marker:text-purple-500">
              {food.nutrition.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-80 flex-shrink-0 space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">Student Comments</h3>

        {food.comments.map((comment, index) => (
          <div key={index} className="bg-purple-50 p-4 rounded-lg space-y-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            <p className="text-gray-700 text-sm leading-relaxed">
              {comment.text}
            </p>
            <div className="flex items-center pt-2">
              <div className="w-10 h-10 bg-purple-200 rounded-full mr-3 flex-shrink-0 flex items-center justify-center text-purple-700 font-bold">
                {/* Simple initial for avatar */}
                {comment.author.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-gray-800">{comment.author}</p>
                <p className="text-gray-500 text-xs">{comment.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodDetailPage;