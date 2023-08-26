import React from 'react';
import { ArrowRight } from 'react-feather';

const Testimonial = ({ image, client, desc }) => {
  return (
    <div className="flex w-[500px] rounded-lg shadow-md border-[1px] border-gray">
      <div className="flex">
        <img
          src={image}
          className="object-fit w-[400px] h-[200px]"
          alt="testimonial"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="p-[20px]">
          <h3 className="text-[24px] text-black font-bold">{client}</h3>
          <p className="leading-[22px] text-[14px] text-graytext">{desc}...</p>
        </div>
        <button className="border-t-[1px] flex border-gray text-black h-[50px] px-6 justify-between font-semibld text-[14px] items-center shadow-md">
          Visit to the website <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export { Testimonial };
