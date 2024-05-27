import React from "react";

export default function HomepageMiniCard({ image, title }) {
  return (
    <div className="h-14 w-20 bg-white p-2 ml-5 rounded-lg font-Montserrat flex flex-col items-center justify-center max-[320px]:h-10 max-[320px]:w-[68px] max-[425px]:h-[44px] max-[425px]:w-[76px] sm:w-32 sm:p-3 sm:h-40 md:h-[140px] md:w-32 md:ml-5 lg:h-[200px] lg:w-[190px] xl:w-72 xl:p-5 2xl:h-[200px] 2xl:w-[296px]">
      <div className="w-full h-full sm:h-1/3 md:h-1/2 xl:h-3/4">
        <img
          className=" object-cover object-bottom w-full h-full rounded-lg lg:object-center "
          src={image}
          alt=""
        />
      </div>
      <div className=" hidden sm:block h-2/3 md:h-1/2 xl:h-1/4 xl:mt-4">
        <h2 className=" text-[15px] text-center text-gray-600 font-extrabold mt-1 md:text-sm lg:text-base">
          {title}
        </h2>
      </div>
    </div>
  );
}
