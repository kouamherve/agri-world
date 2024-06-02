import React from "react";
import Button from "../../reusable-ui/Button";

export default function About() {
  return (
    <div className=" bg-secondary py-14 items-center gap-6 sm:py-16 md:py-20 lg:flex lg:px-14 lg:py-24 xl:px-36 xl:py-28 2xl:px-[710px]">
      <div className=" mx-4 pb-8 font-Montserrat capitalize sm:mx-14 md:mx-20 lg:mx-0 lg:w-1/2 lg:pb-0">
        <div>
          <h4 className=" text-sm mb-1 text-primary font-medium sm:text-base lg:text-sm">
            About us
          </h4>
          <h1 className=" text-[26px] text-black/85 leading-snug font-bold sm:text-3xl md:text-4xl lg:text-[34px] lg:leading-snug lg:mt-1 xl:text-[40px]">
            A new way to invest <br className="hidden md:block lg:hidden" />
            in agriculture
          </h1>
        </div>
        <p className=" text-[15px] text-gray-600 mt-4 mb-8 sm:text-base lg:text-base xl:mr-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad,
          omnis repellendus quidem pariatur eum velit corrupti voluptatum,
          minima aliquid suscipit enim dolorem perspiciatis rem molestiae fuga
          praesentium quo fugit deleniti quam eveniet. Veritatis, eius veniam
          soluta in placeat dolorem.
        </p>
        <Button className="bg-primary text-white hover:text-primary border border-primary px-8 py-3.5 mb-4 sm:px-9 md:px-10">
          Read more
        </Button>
      </div>
      <div className="relative mx-4 h-64 sm:mx-14 sm:h-80 md:mx-20 md:h-96 lg:w-1/2 lg:mx-0 xl:h-[470px] xl:shrink-0">
        <img
          className="absolute inset-0 object-cover object-center w-full h-full rounded-lg"
          src="https://cdn.pixabay.com/photo/2021/05/03/13/32/greenhouse-6226263_1280.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
