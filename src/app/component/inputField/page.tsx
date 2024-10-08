import React from "react";

const InputField = ({ id, label, type, IconComponent }) => {
  return (
    <div className="relative w-96">
      <input
        type={type}
        id={id}
        placeholder=" "
        className="peer w-full border border-blue-300 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label
        htmlFor={id}
        className="absolute text-gray-400 text-xs transform -translate-y-4 scale-75 top-1 left-4 z-10 origin-[0] bg-white px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-65 peer-focus:-translate-y-4 peer-focus:text-[#3498DB] transition-all"
      >
        {label}
      </label>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <IconComponent className="text-[#9B9292]" />
      </div>
    </div>
  );
};

export default InputField;
