import React from 'react';

const BarChart = () => {
  const data = [
    { month: 'Jan', value: 40 },
    { month: 'Feb', value: 65 },
    { month: 'Mar', value: 45 },
    { month: 'Apr', value: 80 },
    { month: 'May', value: 55 },
    { month: 'Jun', value: 70 },
    { month: 'Jul', value: 85 },
    { month: 'Aug', value: 60 },
    { month: 'Sep', value: 75 },
    { month: 'Oct', value: 50 },
    { month: 'Nov', value: 90 },
    { month: 'Dec', value: 65 },
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-white p-2 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-[110px]">
        <h3 className="text-lg font-semibold text-gray-800">School Finance</h3>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
            <span className="text-gray-600">Last</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-gray-600">Last</span>
          </div>
        </div>
      </div>
      
      <div className="h-48 flex items-end justify-between space-x-1 ">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div className="w-full max-w-8 relative ">
              <div
                className="bg-orange-400 rounded-t-sm mb-1"
                style={{ height: `${(item.value / maxValue) * 140}px` }}
              ></div>
              <div
                className="bg-blue-500 rounded-t-sm"
                style={{ height: `${((item.value - 15) / maxValue) * 140}px` }}
              ></div>
            </div>
            <span className="text-xs text-gray-500 mt-2">{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;