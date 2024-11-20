"use client";

import Image from 'next/image';
import { useState } from 'react';
import { onBoardData } from 'utils/helper/dummy-data/onBoardData';

const OnboardService = () => {
  const [doctorOpen, setDoctorOpen] = useState(false);

  const toggleDoctor = () => {
    setDoctorOpen(!doctorOpen);
  }

  return (
    <>
      <div className="absolute right-2 mt-44 w-[310px] py-2 px-2 bg-white shadow rounded-xl z-20">
        <div className='grid grid-cols-2'>
          <div className='flex items-center pl-1 py-1 border border-white hover:border-primary-300 rounded-lg mb-1'>
          <Image src="/images/doctor.png" width={100} height={100} alt="service menu icons" className="w-8" />
          <p className='text-black ml-3 text-sm font-medium' onClick={toggleDoctor}>Doctor</p>

          </div>

          {onBoardData.map((item, index) => (
            <div key={index} className='flex items-center pl-1 py-1 border border-white hover:border-primary-300 rounded-lg mb-1'>
              <Image src={item.icon} alt="service menu icons" width={100} height={100}  className="w-8" />
              <p className='text-secondary-200 ml-3 text-sm'>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OnboardService;
