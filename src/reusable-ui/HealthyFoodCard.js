import React from "react";

export default function HealthyFoodCard({ image, title }) {
  return (
    <div className=" font-Montserrat mx-4 shadow-sm sm:mx-14 md:mx-0 md:shadow-none lg:mx-0">
      <img
        className=" object-cover object-center w-full h-52 rounded-t-lg md:h-60 md:rounded-lg lg:h-52"
        src={image}
        alt=""
      />
      <div className=" mt-4 md:mt-5 lg:mt-8">
        <h2 className=" text-xl text-center font-bold mt-0.5 sm:text-start sm:text-lg md:mt-2 ">
          {title}
        </h2>
        <p className=" text-[15px] text-gray-600 text-center mt-2 pb-6 sm:text-base sm:text-justify md:mt-4 md:text-[15px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          doloribus non ut voluptatibus illo maiores dolorum!
        </p>
      </div>
    </div>
  );
}
