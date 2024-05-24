import React from "react";
import HealthyFoodCard from "../../reusable-ui/HealthyFoodCard";

export default function HealthyFood() {
  return (
    <div className=" pb-14">
      <div className=" mx-4 pt-14 font-Montserrat capitalize">
        <h3 className=" text-base text-green-600 font-medium">Healthy food</h3>
        <h1 className=" text-[28px] font-bold mt-0">
          We provide high-quality <br />
          organic products
        </h1>
        <p className=" text-gray-500 mt-2 mb-8 ">
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
          image="https://cdn.pixabay.com/photo/2015/07/11/23/00/bottle-841431_1280.jpg"
        />
      </div>
    </div>
  );
}
