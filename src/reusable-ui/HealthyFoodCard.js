import React from "react";

export default function HealthyFoodCard({ image, title }) {
  return (
    <div className=" font-Montserrat shadow-sm md:shadow-none">
      <img
        className=" object-cover object-center w-full h-52 rounded-t-lg md:h-60 md:rounded-lg lg:h-52 xl:h-60"
        src={image}
        alt=""
      />
      <div className=" mt-4 md:mt-4 lg:mt-6 xl:mt-4">
        <h2 className=" text-xl text-center font-bold mt-0.5 sm:text-start sm:text-lg md:mt-2 xl:text-xl">
          {title}
        </h2>
        <p className=" text-[15px] text-gray-600 text-center mt-2 pb-6 sm:text-base sm:text-justify md:mt-4 md:text-[15px] xl:mt-2 xl:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          doloribus non ut voluptatibus illo maiores dolorum!
        </p>
      </div>
    </div>
  );
}
