import Check from "../../reusable-ui/Check";

export default function WhatWeDo() {
  return (
    <div className=" pt-14 pb-14">
      <div className=" mx-4 h-64 w-auto sm:mx-16 sm:h-96">
        <img
          className=" object-cover object-center w-full h-full rounded-lg"
          src="https://cdn.pixabay.com/photo/2018/10/03/21/57/cabbage-3722498_1280.jpg"
          alt=""
        />
      </div>
      <div className=" mx-4 pt-14 font-Montserrat capitalize sm:mx-16">
        <h4 className=" text-sm text-primary font-medium sm:text-base">
          What we do
        </h4>
        <h1 className=" text-[26px] leading-8 font-bold mt-0 sm:text-4xl">
          What we offer for you
        </h1>
        <p className=" text-gray-600 my-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, dicta
          laboriosam. Deserunt fugiat accusantium explicabo excepturi.
        </p>
        <div className=" space-y-4">
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
