import Check from "../../reusable-ui/Check";

export default function WhatWeDo() {
  return (
    <div className=" pt-14 pb-14">
      <div className=" mx-4 h-80 w-fit">
        <img
          className=" object-cover object-center w-full h-full rounded-lg"
          src="https://cdn.pixabay.com/photo/2018/10/03/21/57/cabbage-3722498_1280.jpg"
          alt=""
        />
      </div>
      <div className=" mx-4 pt-14 font-Montserrat capitalize">
        <h3 className=" text-base text-green-600 font-medium">What we do</h3>
        <h1 className=" text-[28px] font-bold mt-0.5">What we offer for you</h1>
        <p className=" text-gray-500 mt-4 mb-8 ">
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
