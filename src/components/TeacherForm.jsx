import React, { useState, useRef } from "react";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  photo: null,
  dob: "",
  pob: "",
  university: "",
  degree: "",
  startDate: "",
  endDate: "",
  city: "",
};

const TeacherForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState(initialForm);
  const [addressCount, setAddressCount] = useState(0);
  const [photoName, setPhotoName] = useState("");
  const fileInputRef = useRef();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setFormData({ ...formData, photo: files[0] });
      setPhotoName(files[0]?.name || "");
    } else if (name === "address") {
      setFormData({ ...formData, address: value });
      setAddressCount(value.length);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handlePhotoDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setFormData({ ...formData, photo: file });
      setPhotoName(file.name);
    }
  };

  const handlePhotoClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
  };

  return (
    <form className="space-y-10" onSubmit={handleSubmit}>
      {/* Personal Details Section */}
      <div>
        <div className="bg-[#4D44B5] text-white font-bold text-lg px-4 sm:px-6 py-3 rounded-t-xl mb-0 font-poppins">
          Personal Details
        </div>
        <div className="bg-white rounded-b-xl p-4 sm:p-6 border border-t-0 border-[#4D44B5] grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-6">
          <div>
            <label className="block text-[#363B64] font-semibold mb-1 font-poppins">
              First Name <span className="text-[#4D44B5]">*</span>
            </label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full border border-[#A098AE] rounded-lg px-4 py-2"
              placeholder="Maria"
            />
          </div>
          <div>
            <label className="block text-[#363B64] font-semibold mb-1 font-poppins">
              Last Name <span className="text-[#4D44B5]">*</span>
            </label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full border border-[#A098AE] rounded-lg px-4 py-2"
              placeholder="Historia"
            />
          </div>
          <div>
            <label className="block text-[#363B64] font-semibold mb-1 font-poppins">
              Email <span className="text-[#4D44B5]">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-[#A098AE] rounded-lg px-4 py-2"
              placeholder="historia@mail.com"
            />
          </div>
          <div>
            <label className="block text-[#363B64] font-semibold mb-1 font-poppins">
              Phone <span className="text-[#4D44B5]">*</span>
            </label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-[#A098AE] rounded-lg px-4 py-2"
              placeholder="+1234567890"
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-[#363B64] font-semibold mb-1 font-poppins">
              Address <span className="text-[#4D44B5]">*</span>
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              maxLength={2000}
              className="w-full h-[120px] sm:h-[175px] border border-[#A098AE] rounded-[5px] px-4 py-2 resize-none"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            />
            <div className="text-right text-xs text-[#A098AE]">{addressCount}/2000</div>
          </div>
          <div className="md:col-span-1 flex flex-col">
            <label className="block text-[#363B64] font-semibold mb-1 font-poppins">
              Photo <span className="text-[#4D44B5]">*</span>
            </label>
            <div
              className="flex-1 w-full max-w-[220px] h-[120px] sm:h-[175px] border border-dashed border-[#A098AE] rounded-[5px] flex items-center justify-center cursor-pointer text-[#A098AE] text-center px-2 mx-auto"
              style={{
                borderWidth: "1px",
                borderRadius: "5px",
                borderStyle: "dashed",
                borderColor: "#A098AE",
                borderDasharray: "10,10",
              }}
              onDrop={handlePhotoDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={handlePhotoClick}
            >
              {photoName ? (
                <span>{photoName}</span>
              ) : (
                <span>Drag and drop or click here to select file</span>
              )}
              <input
                ref={fileInputRef}
                type="file"
                name="photo"
                accept="image/*"
                className="hidden"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-[#363B64] font-semibold mb-1 font-poppins">
              Date of Birth <span className="text-[#4D44B5]">*</span>
            </label>
            <input
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full border border-[#A098AE] rounded-lg px-4 py-2"
              placeholder="24 Februari 1997"
            />
          </div>
          <div>
            <label className="block text-[#363B64] font-semibold mb-1 font-poppins">
              Place of Birth <span className="text-[#4D44B5]">*</span>
            </label>
            <input
              name="pob"
              value={formData.pob}
              onChange={handleChange}
              required
              className="w-full border border-[#A098AE] rounded-lg px-4 py-2"
              placeholder="Jakarta, Indonesia"
            />
          </div>
        </div>
      </div>
      {/* Education Section */}
      <div>
        <div className="bg-[#4D44B5] text-white font-bold text-lg px-4 sm:px-6 py-3 rounded-t-xl mb-0 mt-8 font-poppins">
          Education
        </div>
        <div className="bg-white rounded-b-xl p-4 sm:p-6 border border-t-0 border-[#4D44B5] grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-6">
          <div>
            <label className="block text-[#363B64] font-semibold mb-1 font-poppins">
              University <span className="text-[#4D44B5]">*</span>
            </label>
            <input
              name="university"
              value={formData.university}
              onChange={handleChange}
              required
              className="w-full border border-[#A098AE] rounded-lg px-4 py-2"
              placeholder="University Akademi Historia"
            />
          </div>
          <div>
            <label className="block text-[#363B64] font-semibold mb-1 font-poppins">
              Degree <span className="text-[#4D44B5]">*</span>
            </label>
            <input
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              required
              className="w-full border border-[#A098AE] rounded-lg px-4 py-2"
              placeholder="History Major"
            />
          </div>
          <div>
            <label className="block text-[#363B64] font-semibold mb-1 font-poppins">
              Start & End Date <span className="text-[#4D44B5]">*</span>
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
                className="w-full sm:w-1/2 border border-[#A098AE] rounded-lg px-4 py-2"
                placeholder="September 2013"
              />
              <input
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
                className="w-full sm:w-1/2 border border-[#A098AE] rounded-lg px-4 py-2"
                placeholder="September 2017"
              />
            </div>
          </div>
          <div>
            <label className="block text-[#363B64] font-semibold mb-1 font-poppins">
              City <span className="text-[#4D44B5]">*</span>
            </label>
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full border border-[#A098AE] rounded-lg px-4 py-2"
              placeholder="Yogyakarta, Indonesia"
            />
          </div>
        </div>
      </div>
      {/* Footer Buttons */}
      <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8">
        <button
          type="button"
          className="px-6 sm:px-8 py-2 rounded-full border-2 border-[#4D44B5] text-[#4D44B5] font-semibold bg-white hover:bg-[#f5f6ff] transition"
        >
          Save as Draft
        </button>
        <button
          type="submit"
          className="px-6 sm:px-8 py-2 rounded-full bg-[#4D44B5] text-white font-semibold hover:bg-[#3b3590] transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default TeacherForm;