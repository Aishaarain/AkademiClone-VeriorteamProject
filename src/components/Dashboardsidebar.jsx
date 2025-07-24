import React from 'react'
import RecentStudents from '../components/Recentstudents';
import Messages from '../components/Messages';
import FoodMenu from '../components/FoodSidebar';
import { Menu } from 'lucide-react';
 import {Bell, Settings } from 'lucide-react';
 import Menupag from '../assets/menu.png'

const Dashboardsidebar = ({setSidebarOpen,sidebarOpen}) => {
  return (
     <div className="space-y-6 w-[250px] right-0 top-0 bg-white mt-0 pt-[12px] fixed  z-50 lg:block hidden h-screen overflow-y-scroll custom-scroll ">
               <div className="flex items-center space-x-3 bg-white">
              <img src={Menupag} alt="" className='pr-3 mt-4' />
              
              <div className="lg:hidden ">
  <Menu className="w-6 h-6 text-gray-700 cursor-pointer ml-[15px] mt-[10px]" onClick={() => setSidebarOpen(!sidebarOpen)} />
    
</div>
            </div >
            
                  <RecentStudents />
                  <Messages />
                  <FoodMenu />
                  </div>
                
  ) 
}

export default Dashboardsidebar