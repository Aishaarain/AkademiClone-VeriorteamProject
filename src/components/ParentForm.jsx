import React from 'react';

const ParentForm = () => {
  return (
    <div className="w-full max-w-[1400px] bg-white rounded-[20px] shadow font-[Poppins] overflow-hidden">
      {/* Header */}
      <div className="bg-[#4D44B5] px-6 py-4 rounded-t-[20px]">
        <h2 className="text-white text-lg font-bold">Parent Details</h2>
      </div>

      <form className="px-10 py-8 text-sm text-[#303972]">
        {/* Row 1: First and Last Name */}
        <div className="flex gap-6 mb-6">
          <div className="flex flex-col gap-2 w-[520px] h-[91px]">
            <label className="font-semibold">First Name *</label>
            <input
              type="text"
              placeholder="Mana"
              className="h-[48px] border border-[#C1BBEB] rounded-lg px-4 py-2 outline-none"
            />
          </div>
          <div className="flex flex-col gap-2 w-[520px] h-[91px]">
            <label className="font-semibold">Last Name *</label>
            <input
              type="text"
              placeholder="William"
              className="h-[48px] border border-[#C1BBEB] rounded-lg px-4 py-2 outline-none"
            />
          </div>
        </div>

        {/* Row 2: Email and Phone */}
        <div className="flex gap-6 mb-6">
          <div className="flex flex-col gap-2 w-[520px] h-[91px]">
            <label className="font-semibold">Email *</label>
            <input
              type="email"
              placeholder="Mana@mail.com"
              className="h-[48px] border border-[#C1BBEB] rounded-lg px-4 py-2 outline-none"
            />
          </div>
          <div className="flex flex-col gap-2 w-[520px] h-[91px]">
            <label className="font-semibold">Phone *</label>
            <input
              type="text"
              placeholder="+1234567890"
              className="h-[48px] border border-[#C1BBEB] rounded-lg px-4 py-2 outline-none"
            />
          </div>
        </div>

        {/* Row 3: Address and Payments */}
        <div className="flex gap-6">
          {/* Address */}
          <div className="flex flex-col gap-2 w-[520px] h-[246px]">
            <label className="font-semibold">Address *</label>
            <textarea
              maxLength={2000}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              className="border border-[#C1BBEB] rounded-lg px-4 py-2 outline-none resize-none w-full h-full"
            />
            <div className="text-right text-xs text-gray-400">0/2000</div>
          </div>

          {/* Payments */}
          <div className="flex flex-col gap-2 w-[520px] h-[246px]">
            <label className="font-semibold">Payments *</label>
            <div className="flex items-center gap-6 mt-2">
              <label className="flex items-center gap-2 text-sm">
                <input type="radio" name="payment" value="cash" defaultChecked />
                <span>Cash</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="radio" name="payment" value="debit" />
                <span>Debit</span>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ParentForm;