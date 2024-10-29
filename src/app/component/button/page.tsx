import React from "react";

const Button = ({ children, type = "button", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-2/4 px-4 py-2 text-sm font-semibold text-white bg-[#3498DB] rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mx-auto block"
    >
      {children}
    </button>
  );
};

export default Button;
