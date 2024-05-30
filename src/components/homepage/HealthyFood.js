import React from "react";
import HealthyFoodCard from "../../reusable-ui/HealthyFoodCard";

export default function HealthyFood() {
  return (
    <div className=" pb-14">
      <div className=" mx-4 pt-14 font-Montserrat capitalize sm:mx-16 md:mx-8">
        <h3 className=" text-sm text-primary font-medium sm:text-base">
          Healthy food
        </h3>
        <h1 className=" text-[26px] leading-8 font-bold sm:text-4xl ">
          We provide high-quality <br />
          organic products
        </h1>
        <p className=" text-gray-600 mt-5 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nobis!
        </p>
      </div>
      <div className="capitalize space-y-14">
        <HealthyFoodCard
          title="industry oriented"
          image="https://cdn.pixabay.com/photo/2017/03/13/12/16/greenhouse-2139526_1280.jpg"
        />
        <HealthyFoodCard
          title="fresh vegetables"
          image="https://cdn.pixabay.com/photo/2018/05/09/21/42/vegetables-3386212_1280.jpg"
        />
        <HealthyFoodCard
          title="fresh milk"
          image="https://cdn.pixabay.com/photo/2017/01/18/15/23/milk-can-1990072_1280.jpg"
        />
      </div>
    </div>
  );
}
