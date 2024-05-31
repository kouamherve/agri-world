import Check from "../../reusable-ui/Check";

export default function WhatWeDo() {
  return (
    <div className=" py-14 md:py-20 lg:py-24 lg:mx-14 lg:flex items-center gap-6">
      <div className=" mx-4 h-64 sm:mx-16 sm:h-96 md:mx-20 lg:w-1/2 lg:mx-0">
        <img
          className=" object-cover object-center w-full h-full rounded-lg"
          src="https://cdn.pixabay.com/photo/2018/10/03/21/57/cabbage-3722498_1280.jpg"
          alt=""
        />
      </div>
      <div className=" mx-4 pt-14 font-Montserrat capitalize sm:mx-16 md:mx-20 lg:w-1/2 lg:mx-0 lg:pt-0">
        <h4 className=" text-sm text-primary font-medium sm:text-base">
          What we do
        </h4>
        <h1 className=" text-[26px] leading-8 font-bold mt-0 sm:text-4xl lg:mt-1">
          What we offer for you
        </h1>
        <p className=" text-[15px] text-gray-600 my-6 lg:my-7">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, dicta
          laboriosam. Deserunt fugiat accusantium explicabo excepturi.
        </p>
        <div className=" space-y-4 md:space-y-5 lg:space-y-2">
          <Check service="weed control" />
          <Check service="pest control" />
          <Check service="grass sedding" />
          <Check service="industry oriented" />
          <Check service="fresh milk products" />
        </div>
      </div>
    </div>
  );
}
