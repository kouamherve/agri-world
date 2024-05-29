import React from "react";

export default function BeforeAndAfter() {
  return (
    <div className=" bg-secondary py-14 space-y-6 sm:space-y-8">
      <div className=" relative mx-4 sm:mx-16">
        <img
          className=" object-cover object-center w-full h-64 rounded-lg sm:h-80"
          src="https://cdn.pixabay.com/photo/2017/10/08/19/47/arable-2831301_1280.jpg"
          alt="Before"
        />
        <span className=" absolute inset-0 text-white text-2xl font-Montserrat font-extrabold p-4">
          Before
        </span>
      </div>
      <div className=" relative mx-4 sm:mx-16">
        <img
          className=" object-cover object-center w-full h-64 rounded-lg sm:h-80"
          src="https://cdn.pixabay.com/photo/2015/08/08/22/39/field-880966_1280.jpg"
          alt="After"
        />
        <span className=" absolute bottom-0 right-0 text-white text-2xl font-Montserrat font-extrabold p-4">
          After
        </span>
      </div>
    </div>
  );
}
