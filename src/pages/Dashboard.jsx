import React from 'react';
import { Users, GraduationCap, DollarSign, BookOpen,Menu } from 'lucide-react';
import { Search, Bell, Settings } from 'lucide-react';
import LineChart from '../components/Linechart';
import Calendar from '../components/Calender';
import BarChart from '../components/BarChart';
import  Sidebar2 from '../components/Dashboardsidebar';
import UnpaidStudents from '../components/Unpaidstudents';


function App({setSidebarOpen}) {
  const stats = [
    { icon: Users, value: '832', iconColor: 'text-blue-600', bgColor: 'bg-blue-100', title:'Students' },
    { icon: GraduationCap, value: '754', iconColor: 'text-orange-600', bgColor: 'bg-orange-100',title:'Teachers' },
    { icon: BookOpen, value: '40', iconColor: 'text-yellow-600', bgColor: 'bg-yellow-100',title:'Events' },
    { icon: DollarSign, value: '32k', iconColor: 'text-green-600', bgColor: 'bg-green-100', title:'Food' },
  ];

  return (

  
<div className=" min-h-screen bg-[#F3F4FF] flex flex-col lg:flex-row">

  {/* Main Section */}
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
          <div className="md:hidden max-sm:block">
                     
                    <Menu
                      className="w-6 h-6  text-gray-800 cursor-pointer "
                      onClick={() => setSidebarOpen(true)}
                    />
                  </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 bg-white rounded-xl">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <p className='mb-2 font-medium text-gray-600'>{stat.title}</p>
            <div className="flex items-center space-x-4">
              <div className={`${stat.bgColor} p-3 rounded-full`}>
                <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
              </div>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <div className="lg:col-span-3 space-y-6 lg:w-[600px]">
          <LineChart />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Calendar />
            <BarChart />
          </div>
          <UnpaidStudents />
        </div>
      </div>
    </div> 
  </div>

 
  <div className="w-full lg:w-[300px] p-4 max-lg:flex ">
    <Sidebar2 />
  </div>
</div>

)};

export default App;