import React from 'react';

const Messages = () => {
  const messages = [
    {
      id: 1,
      name: 'Samantha Williams',
      message: 'Lorem ipsum dolor sit amet...',
      time: '12 Min',
      avatar: 'SW',
    
    },
    {
      id: 2,
      name: 'Tony Soap',
      message: 'Lorem ipsum dolor sit amet...',
      time: '2 Min',
      avatar: 'TS',
     
    },
    {
      id: 3,
      name: 'Jordan Nick',
      message: 'Lorem ipsum dolor sit amet...',
      time: '1 Hour',
      avatar: 'JN',
      
    },
    {
      id: 4,
      name: 'Nadila Adja',
      message: 'Lorem ipsum dolor sit amet...',
      time: '12 Min',
      avatar: 'NA',
     
    },
  ];

  return (
    <div className="p-6 ">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Messages</h3>
        <span className="text-blue-600 text-sm cursor-pointer hover:underline">View More</span>
      </div>
      
      <div className="space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="flex items-start space-x-3">
            <div className={`w-10 h-10 bg-[#C1BBEB] rounded-full flex items-center justify-center flex-shrink-0`}>
              <span className="text-white text-sm font-medium">{message.avatar}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <p className="text-sm font-medium text-gray-900 truncate">{message.name}</p>
                <span className="text-xs text-gray-500">{message.time}</span>
              </div>
              <p className="text-sm text-gray-500 truncate">{message.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;