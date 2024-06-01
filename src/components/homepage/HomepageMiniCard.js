import React from "react";

export default function HomepageMiniCard({ image, title }) {
  return (
    <div className="h-14 w-20 bg-white ml-5 rounded-lg font-Montserrat flex flex-col items-center justify-center sm:w-[136px] sm:h-40 md:w-36 lg:w-44 lg:h-[196px] xl:w-72 ">
      <div className="w-full p-2 h-full sm:p-3 sm:h-2/5 md:h-1/2 xl:h-3/4 xl:p-4">
        <img
          className=" object-cover object-bottom w-full h-full rounded-lg sm:object-center "
          src={image}
          alt=""
        />
      </div>
      <div className=" hidden sm:block h-3/5 md:h-1/2 xl:h-1/4 ">
        <h2 className=" text-[15px] text-center text-gray-900 font-extrabold mt-1 lg:text-xl xl:text-[18px]">
          {title}
        </h2>
      </div>
    </div>
  );
}
