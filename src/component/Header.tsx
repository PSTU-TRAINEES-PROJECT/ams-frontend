"use client";

import Logo from "../icons/Logo";
import UserMenu from "./UserMenu";
import NavBar from "./NavBar";

const Header: React.FC = () => (
  <header>
    <div className="flex justify-around items-center py-4 shadow-md border-b bg-white">
      <div>
        <Logo />
      </div>
      <NavBar />
      <div>
        <UserMenu />
      </div>
    </div>
  </header>
);

export default Header;
