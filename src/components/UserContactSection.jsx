import { Mail, Search } from 'lucide-react';

const contacts = [
  { name: 'Samantha William', class: 'Class VI-A' },
  { name: 'Tony Soap', class: 'Class VI-A' },
  { name: 'Karen Hope', class: 'Class VI-A' },
  { name: 'Jordan Nico', class: 'Class VI-B' },
  { name: 'Nadila Adja', class: 'Class VI-C' },
];

const UserContactSection = () => (
  <div className="flex-1 bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-4 min-w-[260px]">
    <div className="flex items-center justify-between mb-2">
      <div className="text-lg md:text-xl font-bold text-[#303972]">Contacts</div>
      <button className="w-10 md:w-14 h-10 md:h-14 flex items-center justify-center rounded-full bg-[#4D44B5] text-white"><span className="text-lg md:text-2xl font-bold items-center">+</span></button>
    </div>
    <div className="text-sm md:text-base text-[#A098AE] mb-2">You have <span className="font-bold text-[#4D44B5]">741</span> contacts</div>
    <div className="relative mb-2">
      <input type="text" placeholder="Search here..." className="w-full rounded-full border border-[#E9E6F5] py-2 md:py-3 pl-10 pr-4 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-[#4D44B5]" />
      <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#303972]" />
    </div>
    <div className="flex flex-col gap-2">
      {contacts.map((c, i) => {
        const isTony = c.name === 'Tony Soap';
        return (
          <div key={i} className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#F3F4FF] text-[#303972] transition-all">
            <span className="w-10 md:w-14 h-10 md:h-14 rounded-full bg-[#C1BBEB] flex items-center justify-center text-base md:text-lg font-bold text-white"></span>
            <div className="flex-1">
              <div className="font-semibold text-sm md:text-base">{c.name}</div>
              <div className="text-xs md:text-sm text-[#A098AE]">{c.class}</div>
            </div>
            <button
              className={
                isTony
                  ? 'w-10 md:w-14 h-10 md:h-14 flex items-center justify-center rounded-full bg-[#4D44B5] text-white border-0'
                  : 'w-10 md:w-14 h-10 md:h-14 flex items-center justify-center rounded-full border border-[#A098AE] text-white'
              }
            >
              <Mail size={16} className={isTony ? 'text-white' : 'text-[#A098AE]'} />
            </button>
          </div>
        );
      })}
    </div>
    <button className="mt-2 w-full py-2 md:py-3 rounded-[40px] bg-[#F3F4FF] text-[#4D44B5] font-semibold text-sm md:text-base">View More</button>
  </div>
);

export default UserContactSection;