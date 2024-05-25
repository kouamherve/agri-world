import React from "react";

export default function HealthyFoodCard({ image, title }) {
  return (
    <div className=" font-Montserrat mx-4 shadow">
      <img
        className=" object-cover object-center w-full h-[280px] rounded-t-lg"
        src={image}
        alt=""
      />
      <div className=" mt-6 text-center">
        <h2 className=" text-xl font-extrabold mt-0.5">{title}</h2>
        <p className=" text-gray-500 mt-2 px-4 pb-6">
          Lorem ipsum dolor, sit consectetur adipisicing elit. Laboriosam
          laudantium optio quia nam?
        </p>
      </div>
    </div>
  );
}
