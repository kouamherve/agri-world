import React from "react";

export default function StatisticCard({ number, title }) {
  return (
    <div className=" font-Montserrat mx-4">
      <div className="text-center max-[320px]:text-start ">
        <span className=" text-primary text-3xl font-extrabold max-[425px]:text-[36px] sm:text-4xl">
          {number}
        </span>
        <h2 className=" text-gray-500 mt-3 text-xl capitalize font-light text-nowrap max-[320px]:text-lg max-[320px]:text-wrap max-[320px]:pr-10 max-[425px]:text-lg sm:text-lg">
          {title}
        </h2>
      </div>
    </div>
  );
}
