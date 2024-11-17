"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-row border-b shadow-md p-4 md:px-[90px] ">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-4xl sm:text-4xl font-bold lg:ml-10 text-blue-500">AmS</h1>

        {/* Hamburger Menu */}

        <button className="text-blue-500 md:hidden focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Navigation*/}
      {isMenuOpen && (
        <div className="absolute top-16 justify-between right-4 bg-white shadow-lg rounded-lg p-6 z-10 w-55 md:hidden">
          <nav className="flex flex-col items-center space-y-4 text-lg font-semibold text-blue-500">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="#" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="#" onClick={() => setIsMenuOpen(false)}>
              Appointments
            </Link>
          </nav>
          <hr className="mt-5 md-5" />
          <div className="flex flex-row justify-between space-x-4 mt-4">
            <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
              <button className="text-base px-4 py-2 border font-semibold text-blue-500 rounded-md ">Signup</button>
            </Link>
            <Link href="/login" onClick={() => setIsMenuOpen(false)}>
              <button className="text-base px-4 py-2 border font-semibold text-blue-500 rounded-md ">Login</button>
            </Link>
          </div>
        </div>
      )}

      {/* No Chnage */}
      <nav className="hidden md:flex md:flex-row md:mr-5 lg:mr-12 items-center text-lg md:text-xl lg:text-2xl font-semibold text-blue-500 space-x-10">
        <Link href="/">Home</Link>
        <Link href="#">About</Link>
        <Link href="#">Appointments</Link>
      </nav>
      <div className="hidden md:flex space-x-2 md:mr-0 lg:mr-6  ">
        <Link href="/signup">
          <button className="text-2xl px-4 py-2 border font-semibold  text-blue-500 rounded-md">Signup</button>
        </Link>
        <Link href="/login">
          <button className="text-2xl px-4 py-2 border font-semibold text-blue-500 rounded-md">Login</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
