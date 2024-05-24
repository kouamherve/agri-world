import React from "react";
import Button from "../../reusable-ui/Button";

export default function About() {
  return (
    <div className=" bg-violet-100/50 pt-14 pb-14">
      <div className=" mx-4 pb-8 font-Montserrat capitalize">
        <h3 className=" text-base text-green-600 font-medium">About us</h3>
        <h1 className=" text-[28px] font-bold  mt-0.5">
          A new way to invest in agriculture
        </h1>
        <p className=" text-gray-500 mt-4 mb-8 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad,
          omnis repellendus quidem pariatur eum velit corrupti voluptatum,
          minima aliquid suscipit enim dolorem perspiciatis rem molestiae fuga
          praesentium quo fugit deleniti quam eveniet. Veritatis, eius veniam
          soluta in placeat dolorem.
        </p>
        <Button
          className="bg-green-600 text-white px-7 py-4 mb-8"
          title="read more"
        />
      </div>
      <div className=" mx-4 h-80 w-fit">
        <img
          className=" object-cover object-center w-full h-full rounded-lg"
          src="https://cdn.pixabay.com/photo/2021/05/03/13/32/greenhouse-6226263_1280.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
