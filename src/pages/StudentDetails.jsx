import React from "react";
import StudentDetailsHeader from "../components/StudentDetailsHeader";
import StudentProfile from "../components/StudentProfile";
import PaymentHistory from "../components/PaymentHistory";
import ScheduleDetails from "../components/ScheduleDetails";

const StudentDetailsPage = () => {
  return (
    <div className="min-h-screen p-6 bg-[#f5f5fa] space-y-6">
      <StudentDetailsHeader />
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <StudentProfile />
          <PaymentHistory />
        </div>
        <ScheduleDetails />
      </div>
    </div>
  );
};

export default StudentDetailsPage;