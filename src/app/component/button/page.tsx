import React from "react";

const Button = ({ children, type = "button", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-auto px-4 py-2 text-3xl font-semibold text-white bg-primary-400 rounded hover:bg-blue-700 focus:outline-none  mx-auto block"
    >
      {children}
    </button>
  );
};

export default Button;
