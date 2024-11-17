
import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  IconComponent: React.FC;
  register: UseFormRegister<any>;
  error?: FieldError;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  placeholder,
  IconComponent,
  register,
  error,
}) => {
  return (
    <div className="relative w-96">
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(id)}
        className={`peer  w-full h-12 border ${
          error ? "border-error-400" : "border-secondary-200"
        } rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-1 ${
          error ? "focus:ring-error-400" : "focus:ring-primary-400 focus:border-white"
        } placeholder-transparent focus:placeholder-transparent`}
      />
      <label
        htmlFor={id}
        className="absolute text-secondary-200 text-sm transform -translate-y-4 scale-75 top-2 left-4 z-10 origin-[0] bg-white px-1 
        peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500
        peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-primary-400 transition-all duration-200"
      >
        {label}
      </label>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <IconComponent className="text-secondary-500" />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default InputField;
