import React from "react";
import HealthyFoodCard from "../../reusable-ui/HealthyFoodCard";

export default function HealthyFood() {
  return (
    <div className="px-4 py-14 sm:py-16 sm:px-14 md:px-20 md:py-20 lg:px-14 lg:py-24 xl:px-36 xl:py-28 2xl:px-[266px] 3xl:px-[710px]">
      <div className=" font-Montserrat capitalize sm:mb-8 0 md:mb-10 lg:mb-12">
        <h3 className=" text-sm text-primary font-medium sm:text-base">
          Healthy food
        </h3>
        <h1 className=" text-[26px] text-black/85 leading-snug font-bold sm:text-3xl md:text-4xl lg:leading-snug xl:text-[40px]">
          We provide high-quality <br />
          organic products
        </h1>
        <p className=" text-[15px] text-gray-600 mt-4 mb-8 sm:text-base lg:text-[17px] lg:mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nobis!
        </p>
      </div>
      <div className="capitalize space-y-14 gap-8 md:space-y-0 md:flex md:gap-6 xl:gap-8 xl:mt-6">
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
