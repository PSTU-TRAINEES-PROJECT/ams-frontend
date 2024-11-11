import React from 'react'
import dept from "../image/dept.png"
import Image from "next/image";

export const AsDoctor = () => {
  return (
    <>
      <div className="absolute right-2 mt-52  py-2 px-2 bg-white shadow rounded-xl z-20">
        <form action="">
          <div className='grid grid-cols-2'>
            <div>
              <label className='font-semibold text-black text-sm' >Department</label>
              <input type="text" placeholder='Enter your department'
                className='mt-2 border border-secondary-200 w-72 h-11 rounded-lg text-sm pl-4' />
              <Image src={dept} alt='department'
                width={20}
                className='absolute right-6 top-14' />
            </div>

          </div>
        </form>
      </div>
    </>
  )
}
