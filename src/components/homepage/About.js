import React from "react";
import Button from "../../reusable-ui/Button";

export default function About() {
  return (
    <div className=" bg-secondary py-14">
      <div className=" mx-4 pb-8 font-Montserrat capitalize">
        <div className="">
          <h4 className=" text-sm text-primary font-medium">About us</h4>
          <h1 className=" text-[28px] font-bold max-[320px]:text-[26px]">
            A new way to invest in agriculture
          </h1>
        </div>
        <p className=" text-gray-500 mt-2 mb-8 max-[320px]:text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad,
          omnis repellendus quidem pariatur eum velit corrupti voluptatum,
          minima aliquid suscipit enim dolorem perspiciatis rem molestiae fuga
          praesentium quo fugit deleniti quam eveniet. Veritatis, eius veniam
          soluta in placeat dolorem.
        </p>
        <Button className="bg-primary text-white hover:text-primary border border-primary px-8 py-4 mb-4 text-base">
          Read more
        </Button>
      </div>
      <div className=" mx-4 h-72 w-fit max-[320px]:h-64">
        <img
          className=" object-cover object-center w-full h-full rounded-lg"
          src="https://cdn.pixabay.com/photo/2021/05/03/13/32/greenhouse-6226263_1280.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
