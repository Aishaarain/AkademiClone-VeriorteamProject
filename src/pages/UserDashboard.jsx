
import { Mail, MapPin, MoreHorizontal, Phone } from 'lucide-react';
import planbgimage from '../assets/planbgimage.png';
import userbgimage from '../assets/userbgimage.png';
import MessageSection from '../components/MessageSection';
import UserContactSection from '../components/UserContactSection';

const activities = [
  { user: 'Karen Hope', action: 'moved task', task: 'User Research', from: 'On Progress', to: 'Done', time: '2 March 2021, 13:45 PM', color: '#4D44B5', highlight: 'User Research', highlight2: 'On Progress', highlight3: 'Done' },
  { user: 'Samantha William', action: 'add new 4 attached files on task', task: 'Photo & Assets', time: '2 March 2021, 13:45 PM', color: '#FB7D5B', highlight: 'Photo & Assets' },
  { user: 'Tony Soap', action: 'invite you in task', task: 'Wireframing and Hi-fidelity', time: '2 March 2021, 13:45 PM', color: '#FCC43E', highlight: 'Wireframing and Hi-fidelity' },
  { user: 'Samantha William', action: 'created new', task: 'Task', time: '2 March 2021, 13:45 PM', color: '#4D44B5', highlight: 'Task' },
];

const UserDashboard = () => {
  return (
    <div className="w-full min-h-screen bg-[#F3F4FF] px-2 sm:px-4 md:px-6 lg:px-8 flex flex-col gap-4">
      <div className="w-full flex flex-col xl:flex-row gap-6">
        <div className="flex-1 flex flex-col gap-6">

          <div className="bg-white rounded-2xl shadow-sm p-0 flex flex-col gap-0 relative overflow-hidden ">
            <div className="w-full h-[110px] md:h-[120px] rounded-t-2xl  relative bg-[#4D44B5]">
              <img src={userbgimage} alt="bg" className="w-full h-full object-cover " />
              <div className="absolute -bottom-12 left-8 w-28 h-28 rounded-full border-4 border-white bg-[#C1BBEB] flex items-center justify-center text-4xl font-bold text-white">
              </div>
            </div>
            
            <div className="pt-16 pb-6 px-6 flex flex-col md:flex-row md:items-center md:gap-0 gap-4">
              <div className="flex-1 min-w-[180px] flex flex-col gap-1">
                <div className="text-3xl font-extrabold text-[#363B64] leading-tight">Nabila Azalea</div>
                <div className="text-base font-bold text-[#303972]">Admin</div>
                <div className="flex items-center gap-2 text-sm text-[#A098AE] mt-1">
                 <MapPin className='w-6 h-6 text-[#A098AE]' />
                  <span className='text-[18px] text-[#A098AE]'>Jakarta, Indonesia</span>
                </div>
              </div>
              <div className="flex-1 min-w-[180px] flex flex-col gap-1">
                <div className="text-base text-[#A098AE] font-semibold">Phone</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-9 h-9 rounded-full bg-[#FB7D5B] flex items-center justify-center"><Phone size={20} className="text-white" /></span>
                  <span className="text-[#303972] text-lg font-bold">+12 345 6789 0</span>
                </div>
              </div>
             
              <div className="flex-1 min-w-[180px] flex flex-col gap-1">
                <div className="text-base text-[#A098AE] font-semibold">Email</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-9 h-9 rounded-full bg-[#FB7D5B] flex items-center justify-center"><Mail size={20} className="text-white" /></span>
                  <span className="text-[#303972] text-lg font-bold">jordan@mail.com</span>
                </div>
              </div>
            
              <button className="absolute top-36 right-6"><MoreHorizontal size={22} className="text-[#A098AE]" /></button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <UserContactSection />
            <MessageSection />
          </div>
        </div>
       
        <div className="max-w-[300px] flex flex-col gap-4 mx-auto">

          <div className="bg-gradient-to-t from-[#303972] to-[#4D44B5] rounded-2xl p-0 flex flex-col gap-0 relative overflow-hidden">
        
            <div className="absolute right-0 bottom-0 w-full h-full pointer-events-none select-none">
              <img src={planbgimage} alt="plan bg" className="absolute right-0 bottom-0  w-auto" />
            </div>
        
            <button className="absolute top-6 right-6 z-10"><MoreHorizontal size={22} className="text-white" /></button>
            <div className="relative z-10 p-8 flex flex-col ">
              <div className="text-white text-lg font-normal ">Your Plan</div>
              <div className="text-white text-3xl  font-extrabold mb-1">Free</div>
              <ul className="text-white text-lg font-bold list-disc pl-6 flex flex-col gap-1">
                <li>50 GB Storage</li>
                <li>Limited Features</li>
              </ul>
              <div className="text-white text-xs 2xl:text-sm font-normal mb-4">Upgrade to Premium Plan to get more Features & Storage memory</div>
              <button className="mt-2 w-fit px-6 py-2 2xl:px-8 2xl:py-3 rounded-full bg-white text-[#4D44B5] font-bold text-base 2xl:text-lg shadow-sm">Upgrade Plan</button>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-4">
            <div className="text-2xl font-extrabold text-[#303972] mb-4">Lastest Activity</div>
            <div className="flex flex-col relative pl-6">
              <div className="absolute left-2 top-6 bottom-6 w-0.5 h-[80%] bg-[#E9E6F5] z-10" />
              {activities.map((a, i) => (
                <div key={i} className="flex items-start gap-3 relative z-10 min-h-[64px]">
                  <span className="w-10 h-10 rounded-full bg-[#C1BBEB] border-4 border-white flex-shrink-0 -ml-9"></span>
                  <div className="flex-1 pb-2">
                    <div className="text-base font-bold text-[#303972]">
                      <span className="font-bold text-[#303972]">{a.user}</span>
                      <span className="font-normal text-[#303972]"> {a.action} </span>
                      {a.task && (
                        <span className={
                          a.task === 'User Research' ? 'text-[#FB7D5B] font-bold' :
                          a.task === 'Wireframing and Hi-fidelity' ? 'text-[#4D44B5] font-bold' :
                          a.task === 'Task' ? 'text-[#FB7D5B] font-bold' :
                          a.task === "Photo & Assets" ? 'text-[#FCC43E] font-bold' :
                          'text-[#4D44B5] font-bold'
                        }>
                          {a.task}
                        </span>
                      )}
                      {a.from && a.to && (
                        <>
                          <span className="font-normal text-[#303972]"> from </span>
                          <span className="font-bold text-[#4D44B5]">{a.from}</span>
                          <span className="font-normal text-[#303972]"> to </span>
                          <span className="font-bold text-[#FB7D5B]">{a.to}</span>
                        </>
                      )}
                    </div>
                    <div className="text-[#A098AE] text-sm mt-1">{a.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;