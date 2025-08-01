import React from 'react';

const StudentForm = () => {
  return (
    <div className="w-full max-w-[1400px] bg-white rounded-[20px] shadow font-[Poppins] overflow-hidden">
      {/* Header */}
      <div className="bg-[#4D44B5] px-6 py-4 rounded-t-[20px]">
        <h2 className="text-white text-lg font-bold">Student Details</h2>
      </div>

      <form className="px-4 sm:px-6 md:px-10 py-8 text-sm text-[#303972]">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Photo Upload */}
          <div className="flex flex-col gap-4 w-full md:w-[192px] md:h-[218px]">
            <label className="font-medium text-[#303972]">Photo *</label>
            <div className="border-2 border-dashed border-[#C1BBEB] rounded-lg w-full h-[218px] flex items-center justify-center text-gray-400 text-xs text-center px-2">
              Drag and drop or click here to select file
            </div>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-6 w-full">
            {/* First Name & Last Name */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-2 w-full md:w-[500px]">
                <label className="font-semibold text-[#303972]">First Name *</label>
                <input
                  type="text"
                  placeholder="Samantha"
                  className="h-[48px] border border-[#C1BBEB] rounded-lg px-4 py-2 outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 w-full md:w-[500px]">
                <label className="font-semibold text-[#303972]">Last Name *</label>
                <input
                  type="text"
                  placeholder="William"
                  className="h-[48px] border border-[#C1BBEB] rounded-lg px-4 py-2 outline-none"
                />
              </div>
            </div>

            {/* Date & Place of Birth and Parent Name */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-2 w-full md:w-[500px]">
                <label className="font-semibold text-[#303972]">Date and Place of Birth *</label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="24 February 1997"
                    className="w-full sm:w-1/2 h-[48px] border border-[#C1BBEB] rounded-lg px-4 py-2 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Jakarta"
                    className="w-full sm:w-1/2 h-[48px] border border-[#C1BBEB] rounded-lg px-4 py-2 outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full md:w-[500px]">
                <label className="font-semibold text-[#303972]">Parent Name *</label>
                <input
                  type="text"
                  placeholder="Mana William"
                  className="h-[48px] border border-[#C1BBEB] rounded-lg px-4 py-2 outline-none"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-2 w-full md:w-[500px]">
                <label className="font-semibold text-[#303972]">Email *</label>
                <input
                  type="email"
                  placeholder="william@mail.com"
                  className="h-[48px] border border-[#C1BBEB] rounded-lg px-4 py-2 outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 w-full md:w-[500px]">
                <label className="font-semibold text-[#303972]">Phone *</label>
                <input
                  type="text"
                  placeholder="+1234567890"
                  className="h-[48px] border border-[#C1BBEB] rounded-lg px-4 py-2 outline-none"
                />
              </div>
            </div>

            {/* Address Field with Character Counter */}
            <div className="flex flex-col gap-2 w-full md:w-[500px]">
              <label className="font-semibold text-[#303972]">Address *</label>
              <textarea
                maxLength={2000}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                className="border border-[#C1BBEB] rounded-lg px-4 py-2 outline-none resize-none w-full h-[150px]"
              />
              <div className="text-right text-xs text-gray-400">0/2000</div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;