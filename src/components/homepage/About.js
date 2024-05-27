import React from "react";
import Button from "../../reusable-ui/Button";

export default function About() {
  return (
    <div className=" bg-secondary py-14">
      <div className=" mx-4 pb-8 font-Montserrat capitalize sm:mx-16">
        <div>
          <h4 className=" text-sm text-primary font-medium sm:text-base">
            About us
          </h4>
          <h1 className=" text-[28px] font-bold max-[320px]:text-[26px] max-[425px]:text-3xl sm:text-4xl">
            A new way to invest in agriculture
          </h1>
        </div>
        <p className=" text-gray-500 mt-3 mb-8 max-[320px]:text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad,
          omnis repellendus quidem pariatur eum velit corrupti voluptatum,
          minima aliquid suscipit enim dolorem perspiciatis rem molestiae fuga
          praesentium quo fugit deleniti quam eveniet. Veritatis, eius veniam
          soluta in placeat dolorem.
        </p>
        <Button className="bg-primary text-white hover:text-primary border border-primary px-8 py-3.5 mb-4 text-base max-[425px]:px-10 sm:px-9">
          Read more
        </Button>
      </div>
      <div className=" mx-4 h-72 w-auto max-[320px]:h-64 max-[425px]:h-80 sm:mx-16 sm:h-96">
        <img
          className=" object-cover object-center w-full h-full rounded-lg"
          src="https://cdn.pixabay.com/photo/2021/05/03/13/32/greenhouse-6226263_1280.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
