
import RecentStudents from '../components/Recentstudents';
import Messages from '../components/Messages';
import FoodMenu from '../components/FoodSidebar';
 import {Bell, Settings } from 'lucide-react';


const Dashboardsidebar = () => {
  return (
     <div className="space-y-6 w-[250px] right-0 top-0 bg-white mt-0 pt-[12px] lg:fixed  z-50 lg:block max-lg:flex max-lg:flex-col max-lg:w-full max-lg:ml-2  h-screen overflow-y-scroll custom-scroll ">
               <div className="flex items-center space-x-3 bg-white">
               <div className="flex items-center space-x-4  mt-8 ml-5 ">
     
      <div className="relative p-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 transition-colors ">
        <Bell className="w-5 h-5 text-gray-500" />
       
        <span className="absolute top-1 right-1 w-2 h-2 bg-purple-600 rounded-full"></span>
      </div>

      <div className="p-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
        <Settings className="w-5 h-5 text-gray-500" />
      </div>

      <div className="flex flex-col items-end mr-2 ">
        <span className="text-sm font-semibold text-gray-800">Nabila A.</span>
        <span className="text-xs text-gray-500">Admin</span>
      </div>

      <div className="w-10 h-10 rounded-full overflow-hidden border-2 bg-purple-400 border-purple-200">
       
      </div>
    </div>
              
             
            </div  >
            
                  <RecentStudents />
                  <Messages />
                  <FoodMenu />
                  </div>
                
  ) 
}

export default Dashboardsidebar