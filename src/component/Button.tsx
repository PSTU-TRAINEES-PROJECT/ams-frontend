import React, { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, type = "button", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-auto px-6 py-2 text-sm font-semibold text-white bg-primary-400 rounded-lg hover:bg-primary-500 transition duration-75   mx-auto block"
    >
      {children}
    </button>
  );
};

export default Button;
