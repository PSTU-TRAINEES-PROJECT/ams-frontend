"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Image from "next/image";
import Button from "component/Button";
import InputField from "component/InputField";
import { loginSchema } from "schema/auth";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data); // Successful form submission logic
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-bold text-center text-blue-600">Login</h1>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          id="email"
          label="Email"
          type="email"
          IconComponent={MdEmail}
          register={register}
          error={errors.email}
        />
        <InputField
          id="password"
          label="Create Password"
          type="password"
          IconComponent={RiLockPasswordLine}
          register={register}
          error={errors.password}
        />
        <div className="flex justify-between text-center">
          <label className="text-sm text-left text-gray-600">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-right text-blue-600 font-bold hover:underline">
            Forget Password
          </a>
        </div>
        <Button type="submit">Login</Button>
      </form>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?
          <a href="#" className="text-blue-600 font-bold hover:underline">
            Signup
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
        className="w-full px-4 py-2 font-thin text-gray-700 bg-white border rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <Image
          src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
          alt="Google"
          width={20}
          height={20}
          className="inline w-5 h-5 mr-2"
        />
        Login with Google
      </button>
    </div>
  );
};

export default SignInForm;
