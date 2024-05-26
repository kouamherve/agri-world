import React from "react";

export default function HomepageMiniCard({ image, title }) {
  return (
    <div className="h-14 w-20 bg-white p-2 ml-4 rounded-lg font-Montserrat flex flex-col items-center justify-center max-[320px]:h-10 max-[320px]:w-[68px] sm:w-32 sm:p-3 sm:h-32 md:h-[140px] md:w-32 md:ml-5 lg:h-[200px] lg:w-[190px]">
      <div className="w-full h-full sm:h-1/3 md:h-1/2">
        <img
          className=" object-cover object-center w-full h-full rounded-lg "
          src={image}
          alt=""
        />
      </div>
      <div className=" hidden sm:block h-2/3 md:h-1/2">
        <h2 className=" text-[15px] text-center font-bold mt-1 md:text-sm lg:text-lg">
          {title}
        </h2>
      </div>
    </div>
  );
}
