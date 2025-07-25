import React, { useState } from 'react';
import { Phone, Mail, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/StudentHeader';

const students = [
  {
    name: 'Samanta William',
    id: '#123456789',
    date: 'March 25, 2021',
    parent: 'Mana William',
    city: 'Jakarta',
    grade: 'VII A',
    gradeColor: 'bg-[#FB7D5B]',
  },
  {
    name: 'Tony Soap',
    id: '#123456789',
    date: 'March 25, 2021',
    parent: 'James Soap',
    city: 'Jakarta',
    grade: 'VII B',
    gradeColor: 'bg-[#FCC43E]',
  },
  {
    name: 'Karen Hope',
    id: '#123456789',
    date: 'March 25, 2021',
    parent: 'Justin Hope',
    city: 'Jakarta',
    grade: 'VII C',
    gradeColor: 'bg-[#4D44B5]',
  },
  {
    name: 'Jordan Nico',
    id: '#123456789',
    date: 'March 25, 2021',
    parent: 'Amanda Nico',
    city: 'Jakarta',
    grade: 'VII A',
    gradeColor: 'bg-[#FCC43E]',
  },
  {
    name: 'Nadila Adja',
    id: '#123456789',
    date: 'March 25, 2021',
    parent: 'Jack Adja',
    city: 'Jakarta',
    grade: 'VII A',
    gradeColor: 'bg-[#FB7D5B]',
  },
  {
    name: 'Johnny Ahmad',
    id: '#123456789',
    date: 'March 25, 2021',
    parent: 'Danny Ahmad',
    city: 'Jakarta',
    grade: 'VII A',
    gradeColor: 'bg-[#FCC43E]',
  },
];

export default function Students() {
  const [checkedRows, setCheckedRows] = useState([]);

  const handleCheck = (index) => {
    setCheckedRows((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen px-4 sm:px-10 py-8 bg-[#F3F4FF] text-[#303972]">
      {/* Header */}
      <Header setSidebarOpen={() => {}} />

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto mt-6">
        <table className="min-w-[900px] w-full">
          <thead>
            <tr className="text-left text-sm text-[#303972] border-b">
              <th className="p-4">
                <input type="checkbox" className="w-4 h-4 accent-[#4D44B5]" />
              </th>
              <th>Name</th>
              <th>ID</th>
              <th>Date</th>
              <th>Parent Name</th>
              <th>City</th>
              <th>Contact</th>
              <th>Grade</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, idx) => {
              const isChecked = checkedRows.includes(idx);
              return (
                <tr
                  key={idx}
                  className={`hover:bg-[#F5F5F5] transition ${
                    isChecked ? 'border-l-[4px] border-[#4D44B5]' : ''
                  }`}
                >
                  <td className="p-4">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleCheck(idx)}
                      className="w-4 h-4 accent-[#4D44B5]"
                    />
                  </td>
                  <td>
                    <Link
                      to={`/student/${idx}`}
                      className="flex items-center gap-2 font-bold py-4 text-[#303972]"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#C1BBEB]" />
                      {s.name}
                    </Link>
                  </td>
                  <td className="font-bold text-[#4D44B5]">{s.id}</td>
                  <td className="text-[#A098AE]">{s.date}</td>
                  <td className="text-[#303972]">{s.parent}</td>
                  <td className="text-[#303972]">{s.city}</td>
                  <td>
                    <div className="flex gap-2">
                      <div className="bg-[#4d44b51a] p-1.5 rounded-full">
                        <Phone className="text-[#4D44B5] w-4 h-4 cursor-pointer" />
                      </div>
                      <div className="bg-[#4d44b51a] p-1.5 rounded-full">
                        <Mail className="text-[#4D44B5] w-4 h-4 cursor-pointer" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <span
                      className={`text-white px-3 py-1 rounded-full text-sm ${s.gradeColor}`}
                    >
                      {s.grade}
                    </span>
                  </td>
                  <td>
                    <MoreHorizontal className="w-5 h-5 text-[#4D44B5] cursor-pointer" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer & Pagination */}
      <div className="mt-10 flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-[#A098AE] gap-4">
        <p>
          Showing <span className="text-[#303972] font-semibold">1–5</span> from{' '}
          <span className="text-[#303972] font-semibold">100</span> data
        </p>

        {/* Pagination */}
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-full flex items-center justify-center text-[#A098AE] hover:bg-gray-100">
            &#9664;
          </button>
          <button className="w-8 h-8 rounded-full bg-[#4D44B5] text-white font-bold">1</button>
          <button className="w-8 h-8 rounded-full border border-gray-300 text-[#303972]">2</button>
          <button className="w-8 h-8 rounded-full border border-gray-300 text-[#303972]">3</button>
          <button className="w-8 h-8 rounded-full flex items-center justify-center text-[#A098AE] hover:bg-gray-100">
            &#9654;
          </button>
        </div>
      </div>
    </div>
  );
}