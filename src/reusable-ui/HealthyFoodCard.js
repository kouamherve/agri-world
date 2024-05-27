import React from "react";

export default function HealthyFoodCard({ image, title }) {
  return (
    <div className=" font-Montserrat mx-4 shadow-sm">
      <img
        className=" object-cover object-center w-full h-64 rounded-t-lg max-[320px]:h-44"
        src={image}
        alt=""
      />
      <div className=" mt-6 ">
        <h2 className=" text-xl text-start font-bold mt-0.5 lg:text-center">
          {title}
        </h2>
        <p className=" text-gray-500 text-justify mt-2 pb-6 lg:text-center">
          Lorem ipsum dolor, sit consectetur adipisicing elit. Laboriosam
          laudantium optio?
        </p>
      </div>
    </div>
  );
}
