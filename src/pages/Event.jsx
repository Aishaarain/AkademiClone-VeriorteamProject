
import EventCalendar from '../components/EventCalendar';
import ScheduleDetails from '../components/ScheduleDetails';

const Event = () => {
  return (
    <div className="bg-[#F3F4FF] flex flex-col items-center 2xl:flex-row gap-4  overflow-x-hidden w-full  min-h-screen">
      <div className="flex-1 flex justify-center px-1 lg:px-12">
        <div className="w-full max-w-full lg:w-[900px] 2xl:w-[800px] 2xl:h-[1066px] rounded-[20px] overflow-hidden">
          <EventCalendar />
        </div>
      </div>
      <div className="flex-1 flex justify-center lg:justify-start">
        <div className="w-[400px] 2xl:h-[1065px] rounded-[20px] overflow-hidden">
          <ScheduleDetails />
        </div>
      </div>
    </div>
  );
};

export default Event;