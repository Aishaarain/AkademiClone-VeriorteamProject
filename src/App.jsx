import { useState } from 'react';
import Dashboard from '../src/pages/Dashboard'
import { useLocation } from 'react-router-dom';
import { Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Mainsidebar';
import FoodPage from './pages/Foodmenu';
import Navbar from './components/Navbar';
import {Menu} from 'lucide-react'
import Fooddetail from './pages/FoodDetails';
const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
const location = useLocation();
  const hiddenNavRoutes = ['/'];
  const isNavbarHidden = hiddenNavRoutes.includes(location.pathname);
  return (
    <div>
    {/* <Navbar/> */}
   
      <div className="flex">
        
 <div
        className={`${
          sidebarOpen ? 'block' : 'hidden'
        } fixed top-0 right-0 w-[250px] h-screen bg-white shadow-lg z-40  transition-transform duration-300 lg:hidden`}
      >
        <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      </div>
<div className='max-md:hidden min-h-screen bg-[#5D3FD3]'>
      <Sidebar />
 </div>
        <main className="flex-1 bg-[#F3F4FF] min-h-screen">
          {!isNavbarHidden && <Navbar setSidebarOpen={setSidebarOpen} />}

          <Routes>
            <Route path="/" element={<Dashboard setSidebarOpen={setSidebarOpen} />} />
            {/* <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/event" element={<Event />} />
            <Route path="/finance" element={<Finance />} /> */}
            <Route path="/food" element={<FoodPage />} />
            <Route path="/food/:foodId" element={<Fooddetail />} />
            {/* <Route path="/user" element={<User />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/activity" element={<Activity />} /> */}
          </Routes>
        </main>
      </div>
    
    </div>
  )
}

export default App

