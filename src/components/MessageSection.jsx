import { Search } from "lucide-react";

const messages = [
  {
    name: "Samantha William",
    time: "12:45 PM",
    message: "Lorem ipsum dolor sit amet...",
  },
  {
    name: "Tony Soap",
    time: "12:45 PM",
    message: "Lorem ipsum dolor sit amet...",
  },
  {
    name: "Karen Hope",
    time: "12:45 PM",
    message: "Lorem ipsum dolor sit amet...",
  },
  {
    name: "Jordan Nico",
    time: "12:45 PM",
    message: "Lorem ipsum dolor sit amet...",
  },
  {
    name: "Nadila Adja",
    time: "12:45 PM",
    message: "Lorem ipsum dolor sit amet...",
  },
];

const MessageSection = () => (
  <div className="flex-1 bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-4 min-w-[260px]">
    <div className="flex items-center justify-between mb-2">
      <div className="text-lg md:text-xl font-bold text-[#303972]">
        Messages
      </div>
    </div>
    <div className="relative mb-2">
      <input
        type="text"
        placeholder="Search here..."
        className="w-full rounded-full border border-[#E9E6F5] py-2 md:py-3 pl-10 pr-4 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-[#4D44B5]"
      />
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A098AE]"
      />
    </div>
    <div className="flex flex-col gap-2">
      {messages.map((m, i) => (
        <div
          key={i}
          className="flex items-center gap-3 p-2 rounded-2xl bg-white shadow-sm hover:bg-[#F3F4FF] transition-all border-b last:border-b-0 border-[#F3F4FF] relative"
        >
          <span className="w-12 md:w-14 h-12 md:h-14 rounded-full bg-[#C1BBEB] flex items-center justify-center text-base md:text-lg font-bold text-white ml-2 z-10"></span>
          <div className="flex-1 ml-2">
            <div className="text-[#303972] font-semibold text-sm md:text-base">
              {m.name}
            </div>
            <div className="text-xs md:text-sm text-[#A098AE] truncate">
              {m.message}
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <span className="text-xs md:text-sm text-[#A098AE] font-semibold mr-4">
              {m.time}
            </span>
            {m.name !== "Karen Hope" && i < 4 && (
              <span className="w-5 md:w-6 h-5 md:h-6 flex items-center justify-center -mr-4 mt-2 rounded-full bg-[#FB7D5B] text-white font-bold text-xs md:text-base">
                2
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
    <button className="mt-2 w-full py-2 md:py-3 rounded-[40px] bg-[#F3F4FF] text-[#4D44B5] font-semibold text-sm md:text-base">
      View More
    </button>
  </div>
);

export default MessageSection;