import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const RecentStudents = () => {
  const students = [
    { id: 1, name: 'Samantha Williams', avatar: 'SW', color: 'bg-purple-500' },
    { id: 2, name: 'Tony Soap', avatar: 'TS', color: 'bg-blue-500' },
    { id: 3, name: 'Jessie Haas', avatar: 'JH', color: 'bg-green-500' },
    { id: 4, name: 'Sara Lue', avatar: 'SL', color: 'bg-orange-500' },
    { id: 5, name: 'Jessica Key', avatar: 'JK', color: 'bg-pink-500' },
  ];

  return (
    <div className=" p-6 ">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Recent Students</h3>
        <span className="text-blue-600 text-sm cursor-pointer hover:underline">View More</span>
      </div>
      
      <div className="space-y-4">
        {students.map((student) => (
          <div key={student.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 bg-[#C1BBEB] rounded-full flex items-center justify-center`}>
                <span className="text-white text-sm font-medium">{student.avatar}</span>
              </div>
              <span className="text-gray-700 font-medium">{student.name}</span>
            </div>
            <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentStudents;