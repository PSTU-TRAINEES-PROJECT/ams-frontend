import React from "react";

const Button = ({ children, type = "button", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-auto px-6 py-2 text-sm font-semibold text-white bg-[#3498DB] rounded-lg hover:bg-blue-500 transition duration-75 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mx-auto block"
    >
      {children}
    </button>
  );
};

export default Button;
