import React from 'react'
import Link from "next/link";
import Image from "next/image";

const HomeBanner = () => {
  return (
    <section className="flex flex-col md:flex-row w-full items-center justify-center py-10 px-16  text-center md:text-left bg-white">
    <div className="w-full">
      <h1 className="text-xl md:text-[28px] font-bold text-primary-400">
        Effortless Appointment Management
      </h1>
      <p className="mt-4 text-black text-md md:text-justify">
        Streamline your scheduling process with our free online appointment
        management software, designed for businesses of all sizes.
      </p>
      <Link href="/sign-up">
        <button className="text-md px-6 py-2 mt-6 border font-semibold text-primary-400 rounded-md">
          Signup for free
        </button>
      </Link>
    </div>
    <div className="w-full flex justify-center mt-6 md:mt-0">
      <Image
        src="/images/illustration.png"
        alt="Illustration"
        width={400}
        height={300}
        className="rounded-lg"
      />
    </div>
  </section>
  )
}

export default HomeBanner