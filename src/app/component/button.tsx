
import React, { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, type = "button", onClick, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-auto px-8 py-2 text-sm font-semibold text-white bg-primary-400 rounded-full hover:bg-primary-500 transition duration-75 focus:outline-none  mx-auto block ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
