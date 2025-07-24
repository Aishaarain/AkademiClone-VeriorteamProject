import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import pagination from '../assets/pagination.png';
const UnpaidStudents = () => {
  const students = [
    {
      id: 1,
      name: 'Samantha Williams',
      studentId: 'ID 123456789',
      amount: 'Rp 5,000,000',
      avatar: 'SW',
      color: 'bg-purple-500',
    },
    {
      id: 2,
      name: 'Tony Soap',
      studentId: 'ID 123456789',
      amount: 'Rp 5,000,000',
      avatar: 'TS',
      color: 'bg-blue-500',
    },
    {
      id: 3,
      name: 'Jesica Huiz',
      studentId: 'ID 123456789',
      amount: 'Rp 5,000,000',
      avatar: 'JH',
      color: 'bg-green-500',
    },
    {
      id: 4,
      name: 'Andrew Higgins',
      studentId: 'ID 123456789',
      amount: 'Rp 5,000,000',
      avatar: 'AH',
      color: 'bg-orange-500',
    },
    {
      id: 5,
      name: 'Nadila Adja',
      studentId: 'ID 123456789',
      amount: 'Rp 5,000,000',
      avatar: 'NA',
      color: 'bg-pink-500',
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Unpaid Student Intuition</h3>
      </div>
      
      <div className="space-y-4">
        {students.map((student, index) => (
          <div key={student.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className={`w-10 h-10 ${student.color} rounded-full flex items-center justify-center`}>
                  <span className="text-white text-sm font-medium">{student.avatar}</span>
                </div>
                {index === 0 && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">1</span>
                  </div>
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{student.name}</p>
                <p className="text-xs text-gray-500">{student.studentId}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-sm font-semibold text-gray-900">{student.amount}</span>
              <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
            </div>
          </div>
        ))}
      </div>
      
      <img src={pagination} alt="" />
    </div>
  );
};

export default UnpaidStudents;