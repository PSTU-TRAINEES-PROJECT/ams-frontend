"use client";

import React, { useState } from 'react';
import { FaUserCircle, FaPlus, FaBell, FaUser } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import OnboardService from './OnboardService';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);


  // toggle func
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // toggle func
  const toggleServiceMenu = () => {
    setServiceOpen(!serviceOpen);
  };

  return (
    <div className="relative">
      <FaUserCircle className="text-4xl text-primary-400 cursor-pointer" onClick={toggleMenu} />

      {/* Modal */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl px-6 py-4 z-10">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <FaUserCircle className="text-4xl text-primary-400" />
              <span className="font-semibold text-secondary-400">Lorem</span>
            </div>
            <IoClose className="cursor-pointer text-xl text-secondary-400" onClick={toggleMenu} />
          </div>
          <div className='border border-b-1 border-secondary-200'></div>

          {/* Menu Items */}
          <ul className="space-y-3 text-secondary-400 mt-4">
            <li className="flex items-center space-x-2 mb-4 cursor-pointer">
              <FaUser className="text-sm text-primary-400" />
              <span className='text-xs hover:text-primary-400'>Your Profile</span>
            </li>
            <li className="flex items-center space-x-2 mb-4  cursor-pointer">
              <FaBell className="text-sm text-primary-400" />
              <span className='text-xs hover:text-primary-400'>Your Appointments</span>
            </li>
            <li className="flex items-center space-x-2 mb-4 cursor-pointer">
              <FaPlus className="text-sm text-primary-400" />
              <span className='text-xs hover:text-primary-400' onClick={toggleServiceMenu}>Onboard Your Service</span>
              {serviceOpen && (
                <OnboardService />
              )}
            </li>
          </ul>

          <button className="mt-4 w-auto bg-primary-400 text-white text-sm font-semibold py-2 px-6 rounded-xl ml-8">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
