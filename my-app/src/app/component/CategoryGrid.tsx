
import React from 'react';
import Image from 'next/image';

interface Category {
  image: string;
  name: string;
}

interface CategoryGridProps {
  categories: Category[];
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  return (
    <div className="grid grid-cols-3 gap-12 ml-[90px] mr-[90px] mt-[68px]">
      {categories.map((category, index) => (
        <div
          key={index}
          className="w-[364px] h-[137px] border flex flex-col items-center justify-center p-4 text-lg font-semibold"
        >
          <Image
            src={category.image}
            alt={category.name}
            width={60}
            height={60}
            className="mb-2"
          />
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
