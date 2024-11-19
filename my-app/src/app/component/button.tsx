
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
      className={`w-auto px-6 py-2 text-sm font-semibold text-white bg-primary-400 rounded-lg hover:bg-primary-400 transition duration-75 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 mx-auto block ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
