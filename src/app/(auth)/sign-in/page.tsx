import SignInForm from "features/auth/SignInForm";
import React from "react";

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-3/4 flex items-center justify-between p-4">
        <div className="text-blue-500 text-2xl font-bold">LOGO</div>
        <div>
          <button className="w-full text-blue-500 font-semibold">Signup</button>
        </div>
      </div>

      <SignInForm />
    </div>
  );
}
// https://github.com/PSTU-TRAINEES-PROJECT/ams-frontend.git
