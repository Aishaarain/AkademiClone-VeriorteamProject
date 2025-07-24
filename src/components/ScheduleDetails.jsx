import { Calendar, Clock } from 'lucide-react';

const ScheduleDetails = () => {
  const scheduleData = [
    {
      title: 'Basic Algorithm',
      subject: 'Algorithm',
      date: 'March 10, 2021',
      time: '08:00 - 10:00 AM',
      color: '#4D44B5',
    },
    {
      title: 'Basic Art',
      subject: 'Art',
      date: 'March 10, 2021',
      time: '09:30 - 10:00 AM',
      color: '#FB7D5B',
    },
    {
      title: 'HTML & CSS Class',
      subject: 'Programming',
      date: 'March 10, 2021',
      time: '10:00 - 11:00 AM',
      color: '#FCC43E',
    },
    {
      title: 'Simple Past Tense',
      subject: 'English',
      date: 'March 10, 2021',
      time: '08:00 - 10:00 AM',
      color: '#303972',
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col w-full max-w-[428px] 2xl:h-[790px]">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-[#303972]">Schedule Details</h2>
        <p className="text-xs text-gray-400 mt-1">Thursday, 10th April, 2021</p>
      </div>
      <div className="flex-1 space-y-6">
        {scheduleData.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center bg-[#F8F8FF] rounded-2xl px-4 py-4 relative shadow-sm"
            style={{ borderLeft: `6px solid ${item.color}` }}
          >
            <div className="flex-1">
              <h3 className="font-semibold text-[#303972] text-base">{item.title}</h3>
              <p className="text-xs text-gray-400 mb-1">{item.subject}</p>
              <div className="flex flex-col items-start text-xs text-[#A098AE] gap-2 mt-2">
                <div className="flex items-center gap-2">
                  <Calendar size={18} color="#FB7D5B" strokeWidth={2} />
                  <span className="inline-block">{item.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} color="#FCC43E" strokeWidth={2} />
                  <span className="inline-block">{item.time}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center ml-4">
              <span className="w-8 h-8 lg:w-14 lg:h-14 rounded-full bg-[#C1BBEB] inline-block"></span>
            </div>
          </div>
        ))}
      </div>

      {/* Updated Button */}
      <button className="mt-8 w-full py-2 rounded-xl bg-[#C1BBEB] text-[#4D44B5] font-semibold text-sm">
        View More
      </button>
    </div>
  );
};

export default ScheduleDetails;
