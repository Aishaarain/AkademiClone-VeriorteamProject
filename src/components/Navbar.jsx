import { useLocation } from 'react-router-dom';
import { Search, Menu,Bell,Settings } from 'lucide-react';
import { useMemo } from 'react';
const Navbar = ({ setSidebarOpen }) => {
   const location = useLocation();

  
    const pageTitle = useMemo(() => {
      const path = location.pathname;
      if (path === "/") return "Dashboard";
      if (path === "/food") return "Food";
      if (path === "/user") return "Users";
      if (path === "/students") return "Students";
      if (path === "/teachers") return "Teachers";    
      if (path === "/event") return "Events";
      if (path === "/finance") return "Finance";  
      if (path === "/activity") return "Latest Activity";
       if (path === "/add-teacher") return "Add Teacher";
      if (path === "/add-student") return "Add Student";
if (path === "/chat") return "Chat";

    if (/^\/food\/[^/]+$/.test(path)) return "Food Details";
     if (/^\/teachers\/[^/]+$/.test(path)) return "Teacher Details";
       if (/^\/student\/[^/]+$/.test(path)) return "Student Details";

    return "Page";
  }, [location.pathname]);
  

  return (
    
    <div className="flex-1 p-6 ">
        <div className="max-w-7xl mx-auto">
    
          <div className="flex items-center justify-between mb-8  lg:px-6 py-4">
            <h1 className="text-2xl font-bold text-[#303972]"> {pageTitle}</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search here..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent max-sm:w-[120px] w-64"
                />
                
              </div> 
               <div className="flex items-center space-x-4 max-md:hidden ml-[10px]">
     
      <div className="relative p-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
        <Bell className="w-5 h-5 text-gray-500" />
       
        <span className="absolute top-1 right-1 w-2 h-2 bg-purple-600 rounded-full"></span>
      </div>

    
      <div className="p-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
        <Settings className="w-5 h-5 text-gray-500" />
      </div>

      <div className="flex flex-col items-end mr-2">
        <span className="text-sm font-semibold text-gray-800">Nabila A.</span>
        <span className="text-xs text-gray-500">Admin</span>
      </div>

      <div className="w-10 h-10 rounded-full overflow-hidden border-2 bg-purple-400 border-purple-200">
       
      </div>
    </div>
              <div className="md:hidden max-sm:block">
                         
                        <Menu
                          className="w-6 h-6  text-gray-800 cursor-pointer"
                          onClick={() => setSidebarOpen(true)}
                        />
                      </div>
            </div>
          </div>
        </div>
        </div>
  );
};

export default Navbar;
