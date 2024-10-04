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
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-md">
        <h2 className="text-2xl font-bold text-center text-blue-600">Signup</h2>
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
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Login
            </a>
          </p>
        </div>

        <div className="flex items-center justify-center space-x-2">
          <hr className="w-1/3 border-gray-300" />
          <span className="text-gray-500">Or</span>
          <hr className="w-1/3 border-gray-300" />
        </div>

        <button
          type="button"
          className="w-full  px-4 py-2 font-thin text-gray-700 bg-white border rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Image
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt="Google"
            width={500}
            height={200}
            className="inline w-5 h-5 mr-2 "
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
