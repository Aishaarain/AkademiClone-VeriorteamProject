import React from 'react';
import { TrendingUp } from 'lucide-react';

const payments = [
  {
    id: '#123456789',
    date: '2 March 2021, 13:45 PM',
    amount: '$ 50,036',
    status: 'Complete',
  },
  {
    id: '#123456789',
    date: '2 March 2021, 13:45 PM',
    amount: '$ 50,036',
    status: 'Pending',
  },
  {
    id: '#123456789',
    date: '2 March 2021, 13:45 PM',
    amount: '$ 50,036',
    status: 'Canceled',
  },
  {
    id: '#123456789',
    date: '2 March 2021, 13:45 PM',
    amount: '$ 50,036',
    status: 'Complete',
  },
];

const statusColor = {
  Complete: 'text-green-500',
  Pending: 'text-gray-400',
  Canceled: 'text-red-500',
};

export default function PaymentHistory() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md w-full max-w-6xl mx-auto font-poppins">
      {/* Title */}
      <h2 className="text-2xl font-extrabold text-[#303972] mb-8">Payment History</h2>

      {/* Table */}
      <div className="space-y-6">
        {payments.map((payment, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FF4D4F] flex items-center justify-center">
                <TrendingUp size={20} className="text-white" />
              </div>
              <div className="text-[#303972] font-bold text-base">{payment.id}</div>
            </div>
            <div className="text-sm text-[#A098AE]">{payment.date}</div>
            <div className="text-[#303972] font-bold text-lg">{payment.amount}</div>
            <div className={`font-semibold text-right w-[100px] ${statusColor[payment.status]}`}>
              {payment.status}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-10 flex justify-between items-center text-sm text-[#A098AE]">
        <p>
          Showing <span className="text-[#303972] font-semibold">1-5</span> from{' '}
          <span className="text-[#303972] font-semibold">100</span> data
        </p>

        {/* Pagination */}
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-full flex items-center justify-center text-[#A098AE] hover:bg-gray-100">
            &#9664;
          </button>
          <button className="w-8 h-8 rounded-full bg-[#4D44B5] text-white font-bold">1</button>
          <button className="w-8 h-8 rounded-full border border-gray-300 text-[#303972]">2</button>
          <button className="w-8 h-8 rounded-full border border-gray-300 text-[#303972]">3</button>
          <button className="w-8 h-8 rounded-full flex items-center justify-center text-[#A098AE] hover:bg-gray-100">
            &#9654;
          </button>
        </div>
      </div>
    </div>
  );
}
