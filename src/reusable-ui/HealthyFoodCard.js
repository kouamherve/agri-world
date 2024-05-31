import React from "react";

export default function HealthyFoodCard({ image, title }) {
  return (
    <div className=" font-Montserrat mx-4 shadow-sm sm:mx-16 md:mx-8 md:shadow-none lg:mx-0">
      <img
        className=" object-cover object-center w-full h-52 rounded-t-lg sm:h-64 md:h-[420px] md:rounded-lg lg:h-52"
        src={image}
        alt=""
      />
      <div className=" mt-4 md:mt-6 lg:mt-8">
        <h2 className=" text-xl text-center font-bold mt-0.5 sm:text-start md:text-2xl md:mt-2 lg:text-lg ">
          {title}
        </h2>
        <p className=" text-gray-600 text-center mt-2 pb-6 sm:text-start md:mt-3 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          doloribus non ut voluptatibus illo maiores dolorum!
        </p>
      </div>
    </div>
  );
}
