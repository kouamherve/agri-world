import React from "react";

export default function BeforeAndAfter() {
  return (
    <div className=" bg-secondary py-20 space-y-6 sm:space-y-4 md:flex md:space-y-0 lg:py-24 lg:px-14 xl:px-36 xl:py-28 2xl:px-[266px] 3xl:px-[710px]">
      <div className=" relative mx-4 h-64 sm:mx-16 sm:h-[270px] md:h-72 md:mr-2 lg:mx-0 lg:h-96 xl:h-[460px]">
        <img
          className=" object-cover contrast-50 object-center w-full h-full rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
          src="https://cdn.pixabay.com/photo/2015/10/06/00/31/green-973596_1280.jpg"
          alt="Before"
        />
        <span className=" absolute inset-0 text-white text-2xl font-Montserrat font-extrabold p-4 lg:p-6">
          Before
        </span>
      </div>
      <div className=" relative mx-4 h-64 sm:mx-16 sm:h-[270px] md:h-72 md:ml-2 lg:mx-0 lg:h-96 xl:h-[460px] ">
        <img
          className=" object-cover object-center  w-full h-full rounded-b-lg md:rounded-r-lg md:rounded-bl-none"
          src="https://cdn.pixabay.com/photo/2022/04/04/07/58/seedlings-7110591_1280.jpg"
          alt="After"
        />
        <span className=" absolute bottom-0 right-0 text-white text-2xl font-Montserrat font-extrabold p-4 lg:p-6">
          After
        </span>
      </div>
    </div>
  );
}
