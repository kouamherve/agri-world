import React from "react";

export default function HealthyFoodCard({ image, title }) {
  return (
    <div className=" font-Montserrat mx-4">
      <img
        className=" object-cover object-center w-full h-[280px] rounded-lg"
        src={image}
        alt=""
      />
      <div className=" mt-6 text-center">
        <h2 className=" text-xl font-extrabold mt-0.5">{title}</h2>
        <p className=" text-gray-500 mt-2 mb-8 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          laudantium optio accusantium quia nam?
        </p>
      </div>
    </div>
  );
}
