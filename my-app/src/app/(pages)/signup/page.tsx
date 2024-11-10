"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../../schemas/signupSchema";
import { CiUser } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import InputField from "../../component/inputField";
import Button from "../../component/button";
import Image from "next/image";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  // This will now log the form data correctly
  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-md">
        <h2 className="text-4xl font-bold text-center text-blue-600">Signup</h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <InputField
            id="firstName"
            label="First Name"
            type="text"
            register={register}
            error={errors.firstName}
            IconComponent={CiUser}
          />
          <InputField
            id="lastName"
            label="Last Name"
            type="text"
            register={register}
            error={errors.lastName}
            IconComponent={CiUser}
          />
          <InputField
            id="email"
            label="Email"
            type="email"
            register={register}
            error={errors.email}
            IconComponent={MdEmail}
          />
          <InputField
            id="password"
            label="Create Password"
            type="password"
            register={register}
            error={errors.password}
            IconComponent={RiLockPasswordLine}
          />
          <InputField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            register={register}
            error={errors.confirmPassword}
            IconComponent={RiLockPasswordLine}
          />
          <Button type="submit">Signup</Button>
        </form>

        <div className="text-center">
          <p className="text-xl text-gray-600">
            Already have an account?{" "}
            <a href="#" className="text-blue-600 text-xl hover:underline">
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
          className="w-full px-4 py-2 font-thin text-gray-700 bg-white border rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Image
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt="Google"
            width={500}
            height={200}
            className="text-xl inline w-5 h-5 mr-2"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
