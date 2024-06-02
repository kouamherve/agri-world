import Check from "../../reusable-ui/Check";

export default function WhatWeDo() {
  return (
    <div className="px-4 py-14 items-center gap-6 sm:p-16 md:p-20 lg:py-24 lg:px-14 lg:flex xl:px-36 xl:py-28 2xl:px-[266px]">
      <div className=" relative h-64 sm:h-80 lg:w-1/2 lg:h-96 xl:h-[460px] xl:shrink-0">
        <img
          className=" absolute inset-0 object-cover object-center w-full h-full rounded-lg "
          src="https://cdn.pixabay.com/photo/2018/10/03/21/57/cabbage-3722498_1280.jpg"
          alt=""
        />
      </div>
      <div className=" pt-14 font-Montserrat capitalize lg:w-1/2 lg:pt-0 xl:ml-16">
        <h4 className=" text-sm text-primary font-medium sm:text-base">
          What we do
        </h4>
        <h1 className=" text-[26px] text-black/85 leading-8 font-bold mt-0 sm:text-3xl md:text-4xl xl:text-[40px] lg:mt-1">
          What we offer for you
        </h1>
        <p className=" text-[15px] text-gray-600 my-6 sm:text-base lg:my-10 xl:my-6 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, dicta
          laboriosam. Deserunt fugiat accusantium explicabo excepturi.
        </p>
        <div className=" space-y-4 md:space-y-5 lg:space-y-2 xl:space-y-4">
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
