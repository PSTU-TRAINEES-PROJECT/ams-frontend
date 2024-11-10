// import React from "react";

// const Button = ({ children, onClick, className }) => {
//   return (
//     <button

//       onClick={onClick}
//       className={`w-2/4 px-4 py-2 font-semibold text-white bg-blue-600 rounded-2xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mx-auto block ${className}`}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;
import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-2/4 px-4 py-2 text-2xl font-semibold text-white bg-blue-600 rounded-2xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mx-auto block ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
