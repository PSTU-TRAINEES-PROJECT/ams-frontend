import React from "react";
import { CiUser } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-md">
        <h2 className="text-2xl font-bold text-center text-blue-600">Signup</h2>
        <form className="space-y-4">
          {/* First Name */}
          <div className="relative w-96">
            <input
              type="text"
              id="first-name"
              placeholder=" "
              className="peer w-full border border-blue-300 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label
              htmlFor="first-name"
              className="absolute text-blue-500 transform -translate-y-4 scale-75 top-2 left-4 z-10 origin-[0] bg-white px-1"
            >
              First Name
            </label>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <CiUser />
            </div>
          </div>
          {/* Last Name */}
          <div className="relative w-96">
            <input
              type="text"
              id="last-name"
              placeholder="Last Name "
              className="peer w-full border border-blue-300 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <CiUser />
            </div>
          </div>
          {/* Email */}
          <div className="relative w-96">
            <input
              type="email"
              id="email"
              placeholder="Email "
              className="peer w-full border border-blue-300 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <MdEmail />
            </div>
          </div>
          {/* Password */}
          <div className="relative w-96">
            <input
              id="password"
              placeholder="Create Password"
              required
              className="peer w-full border border-blue-300 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <RiLockPasswordLine />
            </div>
          </div>
          {/* confirm Password */}
          <div className="relative w-96">
            <input
              id="password"
              placeholder="Confirm Password"
              required
              className="peer w-full border border-blue-300 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <RiLockPasswordLine />
            </div>
          </div>

          <button
            type="submit"
            className="w-2/4 px-4 py-2 font-semibold text-white bg-blue-600 rounded-2xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mx-auto block"
          >
            Signup
          </button>
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
          className="w-full  px-4 py-2 font-semibold text-gray-700 bg-white border rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt="Google"
            className="inline w-5 h-5 mr-2"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
