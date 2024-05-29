import React from "react";

export default function HealthyFoodCard({ image, title }) {
  return (
    <div className=" font-Montserrat mx-4 shadow-sm sm:mx-16">
      <img
        className=" object-cover object-center w-full h-52 rounded-t-lg sm:h-64"
        src={image}
        alt=""
      />
      <div className=" mt-6 ">
        <h2 className=" text-xl text-start font-bold mt-0.5 sm:text-center">
          {title}
        </h2>
        <p className=" text-gray-600 text-justify mt-2 pb-6 sm:text-center sm:px-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          doloribus non ut voluptatibus illo maiores dolorum!
        </p>
      </div>
    </div>
  );
}
