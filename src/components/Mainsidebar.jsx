import { NavLink } from 'react-router-dom';
import {
  Home,
  User,
  Users,
  Calendar,
  CreditCard,
  Utensils,
  MessageSquare,
  Activity,Menu
} from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', icon: <Home />, path: '/' },
  { name: 'Students', icon: <Users />, path: '/students' },
  { name: 'Teachers', icon: <User />, path: '/teachers' },
  { name: 'Event', icon: <Calendar />, path: '/event' },
  { name: 'Finance', icon: <CreditCard />, path: '/finance' },
  { name: 'Food', icon: <Utensils />, path: '/food' },
  { name: 'User', icon: <User />, path: '/user' },
  { name: 'Chat', icon: <MessageSquare />, path: '/chat' },
  { name: 'Lastest Activity', icon: <Activity />, path: '/activity' },
];


const Mainsidebar = ({setSidebarOpen,sidebarOpen}) => {
  return (
    <div className="min-h-screen w-64 bg-[#5D3FD3] text-white flex flex-col justify-between">
      <div>
        <div className="px-6 py-4 flex items-center space-x-2">
          <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">A</div>
          <h1 className="text-lg font-bold">Akademi</h1>
          <div className="lg:hidden max-sm:block">
           
          <Menu
            className={`w-6 h-6 mt-3 ml-16 text-gray-800 cursor-pointer md:hidden`}
            onClick={() => setSidebarOpen(false)}
          />
        </div>
        </div>
 
        <nav className="flex flex-col space-y-1 px-2" onClick={() => setSidebarOpen(false)}>
          {menuItems.map(({ name, icon, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-lg transition ${
                  isActive
                    ? 'bg-white text-purple-700 font-semibold'
                    : 'text-white hover:bg-purple-800'
                }`
              }
            >
              <span className="w-5 h-5 mr-3">{icon}</span>
              {name}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="px-6 mt-[1000px] py-4 text-xs text-white opacity-70">
        <p><span className="font-bold">Akademi</span> – School Admission Dashboard</p>
        <p>Made with ❤️ by Peterdrew</p>
      </div>
    </div>
  )
}

export default Mainsidebar