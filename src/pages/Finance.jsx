import { ChartSpline, DollarSign, User, Users } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import UnpaidStudents from '../components/Unpaidstudents';

const Finance = () => {
  const stats = [
    {
      icon: <Users size={28} color="#ffffff" className="bg-[#4D44B5] rounded-full p-1" />, label: 'Total Students', value: '932',
      change: '+10% than last month', changeColor: 'text-green-500', bg: 'bg-[#F3F0FF]', iconBg: 'bg-[#4D44B5]',
    },
    {
      icon: <User size={28} color="#ffffff" className=" rounded-full p-1" />, label: 'Total Teachers', value: '754',
      change: '-0.5% than last month', changeColor: 'text-red-500', bg: 'bg-[#FFF3F0]', iconBg: 'bg-[#FB7D5B]',
    },
    {
      icon: <DollarSign size={28} color="#ffffff" className=" rounded-full p-1" />, label: 'School Balance', value: '$123,456',
      change: '+23% than last month', changeColor: 'text-green-500', bg: 'bg-[#FFF9E6]', iconBg: 'bg-[#FCC43E]',
    },
  ];

  const expenses = [
    { id: '#123456789', date: '2 March 2023, 19:41 PM', amount: '$50,036', status: 'Complete' },
    { id: '#123456789', date: '2 March 2023, 19:41 PM', amount: '$50,036', status: 'Pending' },
    { id: '#123456789', date: '2 March 2023, 19:41 PM', amount: '$50,036', status: 'Canceled' },
    { id: '#123456789', date: '2 March 2023, 19:41 PM', amount: '$50,036', status: 'Complete' },
    { id: '#123456789', date: '2 March 2023, 19:41 PM', amount: '$50,036', status: 'Complete' },
  ];

  const statusColor = {
    Complete: 'text-green-500',
    Pending: 'text-yellow-500',
    Canceled: 'text-red-500',
  };

  const chartData = [
    { month: 'Jan', expense: 20, income: 30 },
    { month: 'Feb', expense: 35, income: 40 },
    { month: 'Mar', expense: 80, income: 60 },
    { month: 'Apr', expense: 40, income: 20 },
    { month: 'May', expense: 10, income: 10 },
    { month: 'Jun', expense: 40, income: 50 },
    { month: 'Jul', expense: 60, income: 65 },
    { month: 'Aug', expense: 30, income: 40 },
    { month: 'Sep', expense: 35, income: 30 },
    { month: 'Oct', expense: 50, income: 70 },
    { month: 'Nov', expense: 60, income: 90 },
    { month: 'Dec', expense: 55, income: 50 },
  ];

  return (
    <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8  bg-[#F3F4FF] min-h-screen">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {stats.map((stat, i) => (
          <div key={i} className="flex items-center gap-4 bg-white rounded-[20px] shadow-sm p-5 min-w-0 relative">
            <div className={`w-14 h-14 flex items-center justify-center rounded-full ${stat.iconBg}`}>{stat.icon}</div>
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <div className="text-[18px] text-[#A098AE] font-semibold mb-1">{stat.label}</div>
              <div className="text-2xl font-bold text-[#303972]">{stat.value}</div>
              <div className="text-[18px] mt-1">
                <span className={`${stat.changeColor}`}>{stat.change.split(' ')[0]}</span>
                <span className="text-[#A098AE]"> {stat.change.replace(stat.change.split(' ')[0], '')}</span>
              </div>
            </div>
            {stat.label === 'School Balance' && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden xl:block">
                <svg className='xl:w-[90px] 2xl:w-[120px] xl:h-[48px]' viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="greenGraph" x1="0" y1="0" x2="0" y2="48" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#4CBC9A" stopOpacity="0.3"/>
                      <stop offset="1" stopColor="#4CBC9A" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d="M0 40 Q 10 30, 20 35 Q 30 45, 40 30 Q 50 10, 60 20 Q 70 40, 80 25 Q 90 10, 100 30 Q 110 45, 120 20" stroke="#4CBC9A" strokeWidth="3" fill="none"/>
                  <path d="M0 40 Q 10 30, 20 35 Q 30 45, 40 30 Q 50 10, 60 20 Q 70 40, 80 25 Q 90 10, 100 30 Q 110 45, 120 20 L120 48 L0 48 Z" fill="url(#greenGraph)"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="w-full bg-white rounded-2xl shadow-sm p-6 mb-6 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
          <div className="text-lg md:text-xl font-bold text-[#303972]">Balance Analytics</div>
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <div className='flex items-center gap-2'>
              <span className="w-3 h-3 rounded-full border-2 border-[#FCC43E] bg-white"></span>
              <span className="text-[#A098AE] text-sm">Expense</span>
              </div>

              <span className="text-[#303972] font-bold text-lg ml-1">1.245</span>
            </div>
            <div className="flex flex-col items-center gap-2">
               <div className='flex items-center gap-2'>
              <span className="w-3 h-3 rounded-full border-2 border-[#FB7D5B] bg-white"></span>
              <span className="text-[#A098AE] text-sm">Income</span>
               </div>
              <span className="text-[#303972] font-bold text-lg ml-1">1.356</span>
            </div>
            <button className="ml-2 px-8 py-2 rounded-full border-2 border-[#4D44B5] text-[#4D44B5] text-lg font-semibold flex items-center gap-2 bg-white shadow-none">
              Month <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="#4D44B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>

        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FCC43E" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#FCC43E" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FB7D5B" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#FB7D5B" stopOpacity={0} />
                </linearGradient>
              </defs>

              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />

              <Area type="monotone" dataKey="expense" stroke="#FB7D5B" fillOpacity={1} fill="url(#colorExpense)" />
              <Area type="monotone" dataKey="income" stroke="#FCC43E" fillOpacity={1} fill="url(#colorIncome)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-4'>

     
      <UnpaidStudents /> 
      
      <div className="w-full bg-white rounded-2xl shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-lg font-bold text-[#303972]">School Expense</div>
        </div>
        <div className="divide-y divide-[#F3F4FF]">
          {expenses.map((exp, i) => (
            <div key={i} className="flex items-center py-3">
             
              <span className="w-8 lg:w-14 h-8 lg:h-14 flex items-center justify-center rounded-full bg-[#FF4550] mr-4">
                <ChartSpline className="w-4 h-4 text-white" />
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-[#303972] text-sm">{exp.id}</div>
                <div className="text-xs text-[#A098AE] mt-1">{exp.date}</div>
              </div>
              <div className="w-24 text-[#303972] font-bold text-sm text-right">{exp.amount}</div>
              <div className={`w-24 text-right font-semibold text-sm ${statusColor[exp.status]}`}>{exp.status}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 gap-2">
          <div className="text-xs text-[#A098AE]">Showing 1-5 from <span className="font-bold text-[#303972]">100</span> data</div>
          <nav className="flex items-center gap-2" aria-label="Pagination">
            <button className="w-7 h-7 flex items-center justify-center rounded-full text-[#A098AE] hover:bg-[#F3F4FF] transition-all">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#A098AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#4D44B5] text-white font-bold text-sm shadow-md">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#A098AE] bg-white text-[#A098AE] text-sm">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#A098AE] bg-white text-[#A098AE] text-sm">3</button>
            <button className="w-7 h-7 flex items-center justify-center rounded-full text-[#A098AE] hover:bg-[#F3F4FF] transition-all">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="#A098AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </nav>
        </div>
      </div>
  </div>
    </div>
  );
};

export default Finance;
