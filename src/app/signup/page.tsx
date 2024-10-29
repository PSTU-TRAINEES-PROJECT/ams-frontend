import React from "react";
import { CiUser } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import InputField from "../component/inputField/page";
import Button from "../component/button/page";
import Image from "next/image";
export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md m-20 p-8 space-y-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-2xl font-bold text-center text-[#3498DB]">Signup</h2>
        <form className="space-y-4">
          <InputField
            id="first-name"
            label="First Name"
            type="text"
            IconComponent={CiUser}
          />
          <InputField
            id="last-name"
            label="Last Name"
            type="text"
            IconComponent={CiUser}
          />
          <InputField
            id="email"
            label="Email"
            type="email"
            IconComponent={MdEmail}
          />
          <InputField
            id="password"
            label="Create Password"
            type="password"
            IconComponent={RiLockPasswordLine}
          />
          <InputField
            id="confirm-password"
            label="Confirm Password"
            type="password"
            IconComponent={RiLockPasswordLine}
          />

          <Button type="submit">Signup</Button>
        </form>

        <div className="text-center">
          <p className="text-sm text-[#9B9292]">
            Already have an account?{" "}
            <a href="#" className="text-[#3498DB] font-bold hover:underline">
              Login
            </a>
          </p>
        </div>

        <div className="flex items-center justify-center space-x-2">
          <hr className="w-1/3 border-gray-300" />
          <span className="text-[#9B9292]">Or</span>
          <hr className="w-1/3 border-gray-300" />
        </div>

        <button
          type="button"
          className="w-full  py-2 font-sm text-[#9B9292] bg-white border rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Image
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt="Google"
            width={500}
            height={200}
            className="inline w-10 h-10 mr-2 "
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
