import Check from "../../reusable-ui/Check";

export default function WhatWeDo() {
  return (
    <div className=" py-14 items-center gap-6 sm:py-16 md:py-20 lg:py-24 lg:mx-14 lg:flex ">
      <div className=" relative mx-4 h-64 sm:mx-16 sm:h-80 md:mx-20 lg:w-1/2 lg:mx-0 lg:h-96">
        <img
          className=" absolute inset-0 object-cover object-center w-full h-full rounded-lg"
          src="https://cdn.pixabay.com/photo/2018/10/03/21/57/cabbage-3722498_1280.jpg"
          alt=""
        />
      </div>
      <div className=" mx-4 pt-14 font-Montserrat capitalize sm:mx-14 md:mx-20 lg:w-1/2 lg:mx-0 lg:pt-0">
        <h4 className=" text-sm text-primary font-medium sm:text-base">
          What we do
        </h4>
        <h1 className=" text-[26px] leading-8 font-bold mt-0 sm:text-3xl md:text-4xl">
          What we offer for you
        </h1>
        <p className=" text-[15px] text-gray-600 my-6 sm:text-base lg:my-10">
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
