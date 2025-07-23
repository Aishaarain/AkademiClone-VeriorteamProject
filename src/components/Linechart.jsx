import React from 'react';

const LineChart = () => {
  const data = [
    { month: 'Jan', value: 20 },
    { month: 'Feb', value: 45 },
    { month: 'Mar', value: 30 },
    { month: 'Apr', value: 65 },
    { month: 'May', value: 40 },
    { month: 'Jun', value: 80 },
    { month: 'Jul', value: 55 },
    { month: 'Aug', value: 70 },
    { month: 'Sep', value: 45 },
    { month: 'Oct', value: 85 },
    { month: 'Nov', value: 60 },
    { month: 'Dec', value: 90 },
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">School Performance</h3>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
            <span className="text-gray-600">Last</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
            <span className="text-gray-600">Last</span>
          </div>
        </div>
      </div>
      <div className="h-48 relative">
        <svg className="w-full h-full" viewBox="0 0 400 150">
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((y, i) => (
            <line
              key={i}
              x1="0"
              y1={150 - (y * 1.2)}
              x2="400"
              y2={150 - (y * 1.2)}
              stroke="#f3f4f6"
              strokeWidth="1"
            />
          ))}
          
          {/* Chart lines */}
          <path
            d={`M ${data.map((d, i) => `${(i * 33) + 20},${150 - (d.value * 1.2)}`).join(' L ')}`}
            fill="none"
            stroke="#f97316"
            strokeWidth="2"
            className="drop-shadow-sm"
          />
          <path
            d={`M ${data.map((d, i) => `${(i * 33) + 20},${150 - ((d.value - 10) * 1.2)}`).join(' L ')}`}
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="2"
            className="drop-shadow-sm"
          />
          
          {/* Data points */}
          {data.map((d, i) => (
            <g key={i}>
              <circle
                cx={(i * 33) + 20}
                cy={150 - (d.value * 1.2)}
                r="4"
                fill="#f97316"
                className="drop-shadow-sm"
              />
              <circle
                cx={(i * 33) + 20}
                cy={150 - ((d.value - 10) * 1.2)}
                r="4"
                fill="#8b5cf6"
                className="drop-shadow-sm"
              />
            </g>
          ))}
        </svg>
        
        {/* X-axis labels */}
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          {data.map((d, i) => (
            <span key={i}>{d.month}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LineChart;