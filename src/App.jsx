import { useState } from 'react';
import Dashboard from '../src/pages/Dashboard'
import { useLocation } from 'react-router-dom';
import {  Routes, Route } from 'react-router-dom';
import Sidebar from './components/Mainsidebar';
import FoodPage from './pages/Foodmenu';
import Navbar from './components/Navbar';
import LatetActivity from './pages/LatestActivity';
import Fooddetail from './pages/FoodDetails';
import Teachers from './pages/Teachers';
import TeacherDetails from './pages/TeacherDetails';
import AddTeacher from './pages/AddTeacher';
import Finance from './pages/Finance';
import User from './pages/UserDashboard';
import Event from './pages/Event';
import Chat from './pages/Chat';
import AddStudent from './pages/AddStudent';
import StudentDetails from './pages/StudentDetails';
import Students from './pages/Students';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
const location = useLocation();
  const hiddenNavRoutes = ['/','/students'];
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
           <Route path="/students" element={<Students setSidebarOpen={setSidebarOpen} />} />
      <Route path="/student/:id" element={<StudentDetails />} />
      <Route path="/add-student" element={<AddStudent />} />
            <Route path="/teachers" element={<Teachers />} />
        <Route path="/teachers/:id" element={<TeacherDetails />} />
        <Route path="/add-teacher" element={<AddTeacher />} />
             <Route path="/event" element={<Event />} /> 
            <Route path="/finance" element={<Finance />} /> 
            <Route path="/food" element={<FoodPage />} />
            <Route path="/food/:foodId" element={<Fooddetail />} />
             <Route path="/user" element={<User />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/activity" element={<LatetActivity />} /> 
          </Routes>
        </main>
      </div>
    
    </div>
  )
}

export default App

