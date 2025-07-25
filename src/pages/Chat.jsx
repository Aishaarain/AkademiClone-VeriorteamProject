import { MoreHorizontal, Paperclip, Search, Send, Video } from 'lucide-react';
const Chat = () => {

const groups = [
  { name: 'Class History VII-A', message: 'Lorem ipsum dolor sit amet...', time: '12:45 PM', color: '#4D44B5', badge: 2 },
  { name: 'Class VII-A', message: 'Lorem ipsum dolor sit amet...', time: '12:45 PM', color: '#FB7D5B', badge: 2 },
  { name: 'All Student VII', message: 'Lorem ipsum dolor sit amet...', time: '12:45 PM', color: '#FCC43E', badge: 2 },
];
const chats = [
  { name: 'Samantha William', message: 'Lorem ipsum dolor sit amet...', time: '12:45 PM', color: '#C1BBEB', badge: 2 },
  { name: 'Tony Soap', message: 'Lorem ipsum dolor sit amet...', time: '12:45 PM', color: '#C1BBEB', badge: 2 },
  { name: 'Karen Hope', message: 'Lorem ipsum dolor sit amet...', time: '12:45 PM', color: '#C1BBEB' },
];
const messages = [
  { from: 'them', text: 'Hello Nabila!', time: '' },
  { from: 'them', text: 'Can i see your history lesson homework?', time: '12:45 PM' },
  { from: 'me', text: 'Hello Samantha!', time: '' },
  { from: 'me', text: 'I’m not finished yet, why don’t work together to finish homework?', time: '12:45 PM' },
];

  return (
    <div className="w-full min-h-screen bg-[#F3F4FF] px-2 sm:px-4 md:px-6 flex flex-col">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-sm flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-full md:w-[340px] border-r border-[#E9E6F5] flex flex-col gap-4 p-4 bg-white">
          <div className="text-xl md:text-2xl font-extrabold text-[#303972] mb-2">Messages</div>
          <div className="relative mb-4">
            <input type="text" placeholder="Search here..." className="w-full rounded-full border border-[#E9E6F5] py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#4D44B5]" />
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#303972]" />
          </div>
          <div className="text-xs text-[#A098AE] font-bold mb-1">Groups</div>
          <div className="flex flex-col gap-2 mb-4">
            {groups.map((g, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#F3F4FF] transition-all relative cursor-pointer">
                <span className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: g.color }}></span>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-[#303972] text-sm truncate">{g.name}</div>
                  <div className="text-xs text-[#A098AE] truncate">{g.message}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs text-[#A098AE] font-semibold">{g.time}</span>
                  {g.badge && <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#FB7D5B] text-white font-bold text-xs">{g.badge}</span>}
                </div>
              </div>
            ))}
          </div>
          <div className="text-xs text-[#A098AE] font-bold mb-1">Chats</div>
          <div className="flex flex-col gap-2">
            {chats.map((c, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#F3F4FF] transition-all relative cursor-pointer">
                <span className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: c.color }}></span>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-[#303972] text-sm truncate">{c.name}</div>
                  <div className="text-xs text-[#A098AE] truncate">{c.message}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs text-[#A098AE] font-semibold">{c.time}</span>
                  {c.badge && <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#FB7D5B] text-white font-bold text-xs">{c.badge}</span>}
                </div>
              </div>
            ))}
          </div>
         <button className="mt-2 w-full py-2 md:py-3 rounded-[40px] bg-[#F3F4FF] text-[#4D44B5] font-semibold text-sm md:text-base">
      View More
    </button>
        </div>
        <div className="flex-1 flex flex-col">
        
          <div className="flex items-center gap-4 border-b border-[#E9E6F5] p-4">
            <span className="w-12 h-12 2xl:w-14 2xl:h-14 rounded-full bg-[#C1BBEB] flex items-center justify-center text-lg font-bold text-white"></span>
            <div className="flex-1">
              <div className="font-bold text-lg 2xl:text-2xl text-[#303972]">Samantha William</div>
              <div className="text-3xl text-[#4CBC9A] font-semibold flex items-center gap-1">● <span className='text-[#A098AE] text-base mt-1'>Online</span></div>
            </div>
            <Video size={22} className="text-[#A098AE] mr-2" />
            <button><MoreHorizontal size={22} className="text-[#A098AE]" /></button>
          </div>
        
        <div className="flex-1 p-4 flex flex-col gap-2 overflow-y-auto bg-[#F3F4FF]">
            {messages.map((msg, i) => (
              <div key={i} className={` flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] px-4 py-2 rounded-2xl ${msg.from === 'me' ? 'bg-[#4D44B5] text-[#FCFCFC] rounded-br-none' : 'bg-[#F5F5F5] text-[#303972] rounded-bl-none'} text-sm md:text-base font-normal mb-1`}>{msg.text}</div>
              </div>
            ))}
            <div className="flex justify-end text-xs text-[#A098AE] mt-1">12:45 PM</div>
          </div>
        
          <div className="border-t border-[#E9E6F5] p-4 bg-white">
            <div className="flex items-center w-full rounded-full border border-[#A098AE] px-4 py-2 bg-white">
              <input type="text" placeholder="Write your message..." className="flex-1 bg-transparent outline-none border-none text-[#A098AE] placeholder-[#A098AE] text-base" />
              <button className="mx-2 text-[#A098AE] hover:text-[#4D44B5] p-1"><Paperclip size={22} /></button>
              <button className="ml-2 px-4 py-2 rounded-full bg-[#4D44B5] text-white font-bold flex items-center gap-2 shadow-none">Send <Send size={18} className='rotate-45' /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;