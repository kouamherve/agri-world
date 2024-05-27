import React from "react";

export default function HealthyFoodCard({ image, title }) {
  return (
    <div className=" font-Montserrat mx-4 shadow-sm sm:mx-16">
      <img
        className=" object-cover object-center w-full h-52 rounded-t-lg sm:h-80"
        src={image}
        alt=""
      />
      <div className=" mt-6 ">
        <h2 className=" text-xl text-start font-bold mt-0.5 lg:text-center">
          {title}
        </h2>
        <p className=" text-gray-600 text-justify mt-2 pb-6 lg:text-center">
          Lorem ipsum dolor, sit consectetur adipisicing elit. Laboriosam
          laudantium optio?
        </p>
      </div>
    </div>
  );
}
