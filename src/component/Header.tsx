"use client";

import { useState } from "react";
import Link from "next/link";
import {Logo, MenuIcon} from "./Icons";
import UserMenu from "./UserMenu";
import { z } from "zod";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="flex justify-around items-center py-4 shadow-md border-b bg-white">
        <div>
          <Logo />
        </div>
        {/* Hamburger Menu */}
        <button
          className="text-primary-400 md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <MenuIcon />
        </button>

        {/* Navigation for Mobile */}
        {isMenuOpen && (
          <div className="absolute top-16 right-4 bg-white shadow-lg p-4 rounded-lg z-10 w-55 md:hidden">
            <nav className="flex flex-col items-center text-md font-semibold text-primary-400">
              <Link
                className="px-4 py-1 rounded-md border border-white transition delay-75 hover:border-secondary-200"
                href="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                className="px-4 py-1 rounded-md border border-white transition delay-75 hover:border-secondary-200"
                href="/about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                className="px-4 py-1 rounded-md border border-white transition delay-75 hover:border-secondary-200"
                href="#"
                onClick={() => setIsMenuOpen(false)}
              >
                Appointments
              </Link>
            </nav>
            <hr className="mt-5 md-5" />
            <div className="flex flex-row justify-between space-x-4 mt-4">
              <Link href="/sign-up" onClick={() => setIsMenuOpen(false)}>
                <button className="text-base px-4 py-2 border font-semibold text-primary-500 rounded-md">
                  Signup
                </button>
              </Link>
              <Link href="/sign-in">
                <button className="text-base px-4 py-2 border font-semibold text-primary-500 rounded-md">
                  Login
                </button>
              </Link>
            </div>
          </div>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center text-md font-semibold text-primary-400">
          <Link
            className="px-6 py-1 rounded-md border border-white transition delay-75 hover:border-secondary-200"
            href="/"
          >
            Home
          </Link>
          <Link
            className="px-6 py-1 rounded-md border border-white transition delay-75 hover:border-secondary-200"
            href="/about"
          >
            About
          </Link>
          <Link
            className="px-6 py-1 rounded-md border border-white transition delay-75 hover:border-secondary-200"
            href="#"
          >
            Appointments
          </Link>
        </nav>
        <div className="hidden md:flex space-x-2 md:mr-0 lg:mr-6">
          <Link href="/sign-up">
            <button className="text-md px-4 py-1 border border-secondary-200 font-semibold text-primary-400 rounded-md">
              Signup
            </button>
          </Link>
          <Link href="/sign-in">
            <button className="text-md px-4 py-1 border font-semibold text-primary-400 rounded-md">
              Login
            </button>
          </Link>
        </div>
        <div>
          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
