import React from 'react';



const Timeline = () => {
  return (
    <div className="p-4 sm:p-6 bg-[#F3F4FF] min-h-screen flex justify-center items-start">
      <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 max-sm:w-[300px] w-full max-w-5xl flex flex-col lg:flex-row gap-6">
     
        <div className="flex flex-row lg:flex-col items-center lg:items-start justify-center lg:pr-6 gap-4">
          {[...Array(7)].map((_, index) => (
            <React.Fragment key={index}>
              <div className="w-4 h-4 rounded-full bg-blue-600"></div>
              {index !== 6 && <div className="w-1 bg-blue-300 h-8 lg:h-12"></div>}
            </React.Fragment>
          ))}
        </div>

        <div className="flex-1 space-y-8 text-sm sm:text-base">
          
          {/* Today */}
          <div>
            <p className="text-sm text-gray-500 font-medium">Today</p>

            <div className="relative pl-6 mt-2">
              <p className="text-xs text-gray-500">Monday, June 31 2020</p>
              <p><span className="font-bold text-gray-800">Karen Hope</span> has created new task at <span className="text-red-500">History Lesson</span></p>
            </div>

            <div className="relative pl-6 mt-4">
              <p className="text-xs text-gray-500">Monday, June 31 2020</p>
              <p><span className="text-red-500 font-bold">[REMINDER]</span> Due date of <span className="text-red-500">Science Homework</span> task will be coming</p>
            </div>

            <div className="relative pl-6 mt-4">
              <p className="text-xs text-gray-500">Monday, June 31 2020</p>
              <p><span className="font-bold text-gray-800">Tony Soap</span> commented at <span className="text-red-500">Science Homework</span></p>
            </div>

            <div className="relative pl-6 mt-4">
              <p className="text-xs text-gray-500">Monday, June 31 2020</p>
              <p><span className="font-bold text-gray-800">Samantha William</span> add 4 files on <span className="text-blue-600">Art Class</span></p>
              <div className="flex flex-wrap gap-4 mt-3">
                <div className="w-24 h-24 rounded-xl bg-[#cfc5f3]"></div>
                <div className="w-24 h-24 rounded-xl bg-[#cfc5f3]"></div>
                <div className="w-24 h-24 rounded-xl bg-[#cfc5f3]"></div>
                <div className="w-24 h-24 rounded-xl bg-[#cfc5f3]"></div>
              </div>
            </div>

            <div className="relative pl-6 mt-4">
              <p className="text-xs text-gray-500">Monday, June 31 2020</p>
              <p><span className="font-bold text-green-600">You</span> has moved <span className="text-green-600 font-medium">"Biology Homework"</span> task to <span className="font-bold">Done</span></p>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 font-medium">Yesterday</p>

            <div className="relative pl-6 mt-4">
              <p className="text-xs text-gray-500">Sunday, June 30 2020</p>
              <p><span className="font-bold text-gray-800">Johnny Ahmad</span> mentioned you at <span className="text-orange-400">Art Class Homework</span></p>
            </div>

            <div className="relative pl-6 mt-4">
              <p className="text-xs text-gray-500">Sunday, June 30 2020</p>
              <p><span className="font-bold text-gray-800">Nadiia Adja</span> mentioned you at <span className="text-purple-800 font-bold">Programming Homework</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
