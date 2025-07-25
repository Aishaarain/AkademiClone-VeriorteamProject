import React from "react";
import StudentDetailsHeader from "../components/StudentDetailsHeader";
import StudentProfile from "../components/StudentProfile";
import PaymentHistory from "../components/PaymentHistory";
import ScheduleDetails from "../components/ScheduleDetails";

const StudentDetailsPage = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 bg-[#f5f5fa] space-y-6">
      {/* Header */}
      <StudentDetailsHeader />

      {/* Content Area */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Side: Profile + Payment */}
        <div className="space-y-6 md:col-span-2">
          <StudentProfile />
          <PaymentHistory />
        </div>

        {/* Right Side: Schedule */}
        <div className="md:col-span-1">
          <ScheduleDetails />
        </div>
      </div>
    </div>
  );
};

export default StudentDetailsPage;
