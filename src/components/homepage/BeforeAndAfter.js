import React from "react";

export default function BeforeAndAfter() {
  return (
    <div className=" bg-secondary py-20 space-y-6 sm:space-y-8 md:flex md:space-y-0 lg:py-24 lg:px-14">
      <div className=" relative mx-4 h-64 sm:mx-16 sm:h-80 md:h-72 md:mx-20 md:mr-2 lg:mx-0 lg:h-96">
        <img
          className=" object-cover object-center w-full h-full rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
          src="https://cdn.pixabay.com/photo/2017/10/08/19/47/arable-2831301_1280.jpg"
          alt="Before"
        />
        <span className=" absolute inset-0 text-white text-2xl font-Montserrat font-extrabold p-4 lg:p-6">
          Before
        </span>
      </div>
      <div className=" relative mx-4 h-64 sm:mx-16 sm:h-80 md:h-72 md:mx-20 md:ml-2 lg:mx-0 lg:h-96 ">
        <img
          className=" object-cover object-center w-full h-full rounded-b-lg md:rounded-r-lg md:rounded-bl-none"
          src="https://cdn.pixabay.com/photo/2015/08/08/22/39/field-880966_1280.jpg"
          alt="After"
        />
        <span className=" absolute bottom-0 right-0 text-white text-2xl font-Montserrat font-extrabold p-4 lg:p-6">
          After
        </span>
      </div>
    </div>
  );
}
