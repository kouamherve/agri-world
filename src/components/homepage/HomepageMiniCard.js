import React from "react";

export default function HomepageMiniCard({ image, title }) {
  return (
    <div className="h-14 w-20 bg-white p-2 ml-5 rounded-lg font-Montserrat flex flex-col items-center justify-center sm:w-[136px] sm:p-3 sm:h-40 md:w-36">
      <div className="w-full h-full sm:h-2/5 md:h-1/2">
        <img
          className=" object-cover object-bottom w-full h-full rounded-lg sm:object-center "
          src={image}
          alt=""
        />
      </div>
      <div className=" hidden sm:block h-3/5 md:h-1/2 ">
        <h2 className=" text-[15px] text-center text-gray-900 font-extrabold mt-1">
          {title}
        </h2>
      </div>
    </div>
  );
}
