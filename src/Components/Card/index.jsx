import React from 'react';
import { ArrowRight } from 'react-feather';

const Card = ({ image, title, description, btnText }) => {
  return (
    <div className="card w-[340px] mb-[40px] flex rounded-[12px] shadow-lg">
      <div className="flex flex-col gap-6">
        <img src={image} alt="ind1" className="object-fit" />
        <div className="flex flex-col gap-3 p-4  relative">
          <button className="bg-white shadow-md gap-4 text-primary flex p-4 justify-between absolute rounded-lg top-[-50px] right-[20px]">
            View Industry <ArrowRight />{' '}
          </button>
          <h3 className="text-[24px] font-bold">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export { Card };
