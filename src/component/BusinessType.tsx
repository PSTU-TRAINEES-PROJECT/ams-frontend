import Image from "next/image";
import React from "react";
import { categories } from 'utils/helper/dummy-data/categories';


const BusinessType = () => {
  return (
    <section className="p-10 md:p-16 bg-primary-200">
      <h2 className="text-lg md:text-xl font-bold mb-2 text-primary-400">
        One Platform. For any Business
      </h2>
      <p className="text-base">Popular Categories</p>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12 mt-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="px-6 py-4 bg-white shadow-md rounded-md flex items-center space-x-4"
          >
            <div className=" flex justify-center">
              <Image width={100} height={100}
                src={category.image}
                alt={category.name}
                className="md:w-[100px] md:h-[85px] w-16 h-10"
              />
            </div>
            <div className="">
              <p className="text-sm md:text-2xl  font-medium">
                {category.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessType;
