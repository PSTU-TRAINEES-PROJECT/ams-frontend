// import React from "react";

// // types for the props
// interface InputFieldProps {
//   id: string;
//   label: string;
//   type: string;
//   placeholder: string;
//   IconComponent: React.ComponentType;
//   register: any;
//   error?: { message: string };
// }

// const InputField: React.FC<InputFieldProps> = ({
//   id,
//   label,
//   type,
//   placeholder,
//   IconComponent,
//   register,
//   error,
// }) => {
//   return (
//     <div className="relative w-96">
//       <input
//         type={type}
//         id={id}
//         placeholder={placeholder}
//         {...register(id)}
//         className={`peer w-full border ${
//           error ? "border-red-500" : "border-blue-300"
//         } rounded-lg pl-4 pr-10 py-3 focus:outline-none focus:ring-2 ${
//           error ? "focus:ring-red-500" : "focus:ring-blue-500"
//         }`}
//       />
//       <label
//         htmlFor={id}
//         className="absolute text-blue-500 transform -translate-y-4 scale-75 top-2 left-4 z-10 origin-[0] bg-white px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-4 transition-all"
//       >
//         {label}
//       </label>
//       <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//         <IconComponent />
//       </div>
//       {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
//     </div>
//   );
// };

// export default InputField;
import React from "react";

const InputField = ({
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
        className={`peer w-full text-xl border ${
          error ? "border-red-500" : "border-blue-300"
        } rounded-lg pl-4 pr-10 py-3 focus:outline-none focus:ring-2 ${
          error ? "focus:ring-red-500" : "focus:ring-blue-500"
        }`}
      />
      <label
        htmlFor={id}
        className="absolute text-xl text-blue-500 transform -translate-y-4 scale-75 top-2 left-4 z-10 origin-[0] bg-white px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-4 transition-all"
      >
        {label}
      </label>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <IconComponent />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default InputField;
