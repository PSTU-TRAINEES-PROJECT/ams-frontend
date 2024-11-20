import  Logo  from "../../../icons/Logo";
import SignInForm from "features/auth/SignInForm";
import Button from "../../../component/Button";
import Link from "next/link";

import React from "react";

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-3/4 flex items-center justify-between p-4">
        <div>
          <Logo />
        </div>
        <div>
          <Link href="/sign-up">
            <Button className="w-full">Signup</Button>

          </Link>
        </div>
      </div>

      <SignInForm />
    </div>
  );
}
// https://github.com/PSTU-TRAINEES-PROJECT/ams-frontend.git
