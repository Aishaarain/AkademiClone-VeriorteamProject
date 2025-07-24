

import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';

const chartData = [
  { month: 'Jan', orange: 19, yellow: 5  },
  { month: 'Feb', orange: 35, yellow: 25 },
  { month: 'Mar', orange: 50, yellow: 85 },
  { month: 'Apr', orange: 20, yellow: 40 },
  { month: 'May', orange: 8, yellow: 5   },
  { month: 'Jun', orange: 30, yellow: 35 },
  { month: 'Jul', orange: 50, yellow: 60 }, 
  { month: 'Aug', orange: 30, yellow: 40 },
  { month: 'Sep', orange: 5, yellow: 25  },
  { month: 'Oct', orange: 40, yellow: 60 },
  { month: 'Nov', orange: 75, yellow: 70 },
  { month: 'Dec', orange: 40, yellow: 55 },
];

const ChartComponent = () => {
  return (
    <div className="w-full h-[400px] bg-white p-4   rounded-lg shadow-md"> {/* Tailwind styling */}
     
      <div className="flex justify-between items-center ">
        <h3 className="text-lg font-semibold text-gray-800">School Performance</h3>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
           <div className='flex-col mt-3'>
            <span className="text-gray-600">last week</span>
            <p className='font-bold'>2362</p>
            </div>
          </div>
          <div className="flex  items-center">
            <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
            <div className='flex-col mt-3'>
            <span className="text-gray-600">this week</span>
            <p className='font-bold'>2362</p>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 10, left: 0, bottom: 30 }}
        >
          <defs>
           
            <linearGradient id="colorOrange" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFA08A" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#FFC8BC" stopOpacity={0.1}/>
            </linearGradient>
            
            <linearGradient id="colorYellow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFE066" stopOpacity={0.6}/> {/* Adjust yellow shade */}
              <stop offset="95%" stopColor="#FFF2B2" stopOpacity={0.05}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="month" axisLine={false} tickLine={false} className="text-sm text-gray-600" />
          <YAxis axisLine={false} tickLine={false} orientation="left" className="text-sm text-gray-600" domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} />
          <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e0e0e0" /> {/* Vertical lines as in the image */}
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />

          <Area
            type="monotone"
            dataKey="yellow"
            stroke="#FFD700" 
            fillOpacity={1}
            fill="url(#colorYellow)"
            strokeWidth={3}
          />
          <Area
            type="monotone"
            dataKey="orange"
            stroke="#FF7A68"
            fillOpacity={1}
            fill="url(#colorOrange)"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    
  );
};

export default ChartComponent;