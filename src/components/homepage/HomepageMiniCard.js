import React from "react";

export default function HomepageMiniCard({ image, title }) {
  return (
    <div className="h-14 w-20 bg-white p-2 ml-4 rounded-lg font-Montserrat flex flex-col items-center justify-center max-[320px]:h-10 max-[320px]:w-[68px] sm:w-32 sm:p-3 sm:h-32">
      <div className="w-full h-full sm:h-1/3">
        <img
          className=" object-cover object-center w-full h-full rounded-lg "
          src={image}
          alt=""
        />
      </div>
      <div className=" hidden sm:block h-2/3">
        <h2 className=" text-[15px] text-center font-bold mt-1 ">{title}</h2>
      </div>
    </div>
  );
}
