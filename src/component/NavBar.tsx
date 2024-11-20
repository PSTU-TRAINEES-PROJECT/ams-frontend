"use client";
import { HamburgerIcon } from "./icons";
import { useState } from "react";
import NavLink from "./NavLink";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "#", label: "Appointments" },
  ];

  const actions = [
    { href: "/sign-up", label: "Signup" },
    { href: "/sign-in", label: "Login" },
  ];

  return (
    <div>
      {/* Hamburger Menu */}
      <button
        className="text-primary-400 md:hidden focus:outline-none"
        onClick={toggleMenu}
      >
        <HamburgerIcon />
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg p-4 rounded-lg z-10 w-55 md:hidden">
          <nav className="flex flex-col items-center text-md font-semibold text-primary-400">
            {links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <hr className="mt-5 md-5" />
          <div className="flex flex-col space-y-4 mt-4">
            {actions.map((action) => (
              <NavLink
                key={action.href}
                href={action.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-base px-4 py-2 border border-secondary-200 font-semibold text-primary-500 rounded-md hover:border-secondary-200"
              >
                {action.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center text-md font-semibold text-primary-400 space-x-6">
        {links.map((link) => (
          <NavLink key={link.href} href={link.href}>
            {link.label}
          </NavLink>
        ))}
        {actions.map((action) => (
          <NavLink
            key={action.href}
            href={action.href}
            className="text-md px-4 py-1 border border-secondary-200 font-semibold text-primary-400 rounded-md hover:border-secondary-200"
          >
            {action.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
